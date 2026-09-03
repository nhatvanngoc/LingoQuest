"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ClipboardCheck,
  Layers,
  CalendarDays,
  CheckCircle2,
  Sparkles,
  Loader2,
  Wand2,
  FileText,
  Eye,
  AlertCircle,
} from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { Label, Input } from "@/components/ui/input";
import { CLASS_OPTIONS } from "@/lib/mock/data";
import { cn } from "@/lib/utils";
import { parseExerciseMarkdown, type ParsedExercise } from "@/lib/ai/markdown-parser";

/* Giao diện 2 tab: Thủ công (giữ nguyên) và AI (prompt → markdown → decode → giao) */

interface Option { id: string; title: string; }
type Mode = "manual" | "ai";

export default function NewAssignmentPage() {
  const [mode, setMode] = useState<Mode>("ai"); // mặc định AI như yêu cầu

  // ===== Manual state (giữ nguyên) =====
  const [type, setType] = useState<"exercise" | "deck">("exercise");
  const [lessons, setLessons] = useState<Option[]>([]);
  const [decks, setDecks] = useState<Option[]>([]);
  const [selectedLessonId, setSelectedLessonId] = useState("");
  const [selectedDeckId, setSelectedDeckId] = useState("");
  const [target, setTarget] = useState<"class" | "students">("class");
  const [classroom, setClassroom] = useState(CLASS_OPTIONS[0]);
  const [picked, setPicked] = useState<string[]>([]);
  const [students, setStudents] = useState<string[]>([]);
  const [due, setDue] = useState("");
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // ===== AI state =====
  const [aiInput, setAiInput] = useState("Chủ đề: Quá khứ đơn - kể về cuối tuần, 8 từ vựng, 5 câu trắc nghiệm");
  const [aiLevel, setAiLevel] = useState("A2-B1");
  const [aiCount, setAiCount] = useState(5);
  const [aiBusy, setAiBusy] = useState(false);
  const [aiMarkdown, setAiMarkdown] = useState("");
  const [aiParsed, setAiParsed] = useState<ParsedExercise | null>(null);
  const [aiWarning, setAiWarning] = useState<string | null>(null);
  const [aiTab, setAiTab] = useState<"preview" | "markdown">("preview");

  useEffect(() => {
    let active = true;
    fetch("/api/lessons").then(r=>r.json()).then((data: { lessons?: Option[]; decks?: Option[] })=>{
      if(!active) return;
      setLessons(data.lessons??[]); setDecks(data.decks??[]);
      if(data.lessons?.length) setSelectedLessonId(data.lessons[0].id);
      if(data.decks?.length) setSelectedDeckId(data.decks[0].id);
    }).catch(()=>{});
    fetch("/api/classroom/students").then(r=>r.json()).then((data:{students?:{name:string}[]})=>{
      if(!active) return;
      setStudents((data.students??[]).map(s=>s.name));
    }).catch(()=>{});
    return ()=>{active=false};
  },[]);

  const toggleStudent = (name:string)=> setPicked(p=>p.includes(name)?p.filter(s=>s!==name):[...p,name]);
  const contentTitle = type==="exercise"? lessons.find(l=>l.id===selectedLessonId)?.title??"" : decks.find(d=>d.id===selectedDeckId)?.title??"";

  const submitManual = async ()=>{
    setBusy(true); setError(null);
    try{
      const res=await fetch("/api/teacher/assignments",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title: contentTitle|| (type==="exercise"?"Bài tập mới":"Bộ flashcard mới"), type, lessonId: type==="exercise"?selectedLessonId:null, deckId: type==="deck"?selectedDeckId:null, dueAt: due? new Date(due).toISOString():null})});
      if(!res.ok){const d=await res.json().catch(()=>({})) as {error?:string}; setError(d.error??"Giao bài thất bại"); return;}
      setDone(true);
    } catch{ setError("Lỗi mạng, thử lại"); } finally{ setBusy(false); }
  };

  const generateAI = async ()=>{
    setAiBusy(true); setError(null); setAiWarning(null);
    try{
      const res=await fetch("/api/teacher/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({input: aiInput, level: aiLevel, count: aiCount})});
      const data=await res.json().catch(()=>({})) as {ok?:boolean; markdown?:string; parsed?:ParsedExercise; warning?:string; error?:string};
      if(!res.ok || !data.ok){ setError(data.error??"Tạo bài tập thất bại"); return; }
      setAiMarkdown(data.markdown??"");
      // Decode ngay trên web bằng parser thuần túy (không cần server)
      const parsed = data.parsed ?? parseExerciseMarkdown(data.markdown??"");
      setAiParsed(parsed);
      if(data.warning) setAiWarning(data.warning);
      setAiTab("preview");
    } catch{ setError("Lỗi mạng khi gọi Groq"); } finally{ setAiBusy(false); }
  };

  const onMarkdownChange = (v:string)=>{
    setAiMarkdown(v);
    try{ setAiParsed(parseExerciseMarkdown(v)); } catch{}
  };

  const submitAI = async ()=>{
    if(!aiParsed) { setError("Chưa có bài tập AI để giao"); return; }
    setBusy(true); setError(null);
    try{
      // 1. Tạo lesson + vocab + deck tự động từ AI vocab
      let lessonId:string | null = null;
      if(aiParsed.vocab.length>0){
        const r1=await fetch("/api/teacher/lessons",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title: aiParsed.title, url: "https://www.youtube.com/watch?v=WUfv5FD-x2g", vocab: aiParsed.vocab.map(v=>({word:v.word, meaning:v.meaning, time: `${Math.floor(v.start/60)}:${String(v.start%60).padStart(2,"0")}`}))})});
        if(r1.ok){ const d=await r1.json().catch(()=>({} as any)); lessonId = (d as any).lesson?.id ?? (d as any).id ?? null; }
      }
      // 2. Giao bài
      const res=await fetch("/api/teacher/assignments",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title: aiParsed.title, type:"exercise", lessonId, deckId: null, dueAt: due? new Date(due).toISOString():null})});
      if(!res.ok){ const d=await res.json().catch(()=>({})) as {error?:string}; setError(d.error??"Giao bài AI thất bại"); return; }
      setDone(true);
    } catch{ setError("Lỗi mạng khi giao bài AI"); } finally{ setBusy(false); }
  };

  if(done){
    return <AppShell><SuccessCard title="Đã giao bài thành công!" desc={`Đã giao "${aiParsed?.title ?? contentTitle}" cho ${target==="class"?"cả lớp":`${picked.length} học sinh`}.`} /></AppShell>;
  }

  return (
    <AppShell>
      <div className="mx-auto max-w-3xl">
        <Link href="/teacher" className="mb-4 inline-flex items-center gap-1.5 text-sm font-bold text-slate-400 hover:text-brand"><ChevronLeft className="h-4 w-4"/> Quay lại bảng điều khiển</Link>
        <h1 className="flex items-center gap-2 text-2xl font-extrabold text-slate-900"><ClipboardCheck className="h-6 w-6 text-brand"/> Giao bài mới</h1>

        {/* Mode tabs */}
        <div className="mt-4 inline-flex rounded-2xl bg-slate-100 p-1">
          <button onClick={()=>setMode("manual")} className={cn("flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold", mode==="manual"?"bg-white text-brand shadow-soft":"text-slate-500")}><FileText className="h-4 w-4"/> Thủ công</button>
          <button onClick={()=>setMode("ai")} className={cn("flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold", mode==="ai"?"bg-brand text-white shadow-soft":"text-slate-500")}><Wand2 className="h-4 w-4"/> AI tạo bài</button>
        </div>
        <p className="mt-2 text-xs font-semibold text-slate-400">AI: prompt engineer sẵn, output 1 đoạn markdown → web tự decode thành bài tập hoàn chỉnh.</p>

        {mode==="manual" ? (
          <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} className="mt-6 flex flex-col gap-6">
            <Section step={1} title="Chọn loại bài">
              <div className="grid grid-cols-2 gap-3">
                <TypeCard active={type==="exercise"} onClick={()=>setType("exercise")} icon={ClipboardCheck} label="Bài tập" desc="Trắc nghiệm & bài viết"/>
                <TypeCard active={type==="deck"} onClick={()=>setType("deck")} icon={Layers} label="Bộ Flashcard" desc="Ôn tập từ vựng"/>
              </div>
            </Section>
            <Section step={2} title="Chọn nội dung">
              <Label>{type==="exercise" ? "Bài học" : "Bộ flashcard"}</Label>
              {type==="exercise" ? (
                <select value={selectedLessonId} onChange={e=>setSelectedLessonId(e.target.value)} className="h-11 w-full rounded-2xl border-2 border-slate-200 bg-white px-4 font-bold text-slate-700 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15">
                  {lessons.map(l=><option key={l.id} value={l.id}>{l.title}</option>)}
                </select>
              ):(
                <select value={selectedDeckId} onChange={e=>setSelectedDeckId(e.target.value)} className="h-11 w-full rounded-2xl border-2 border-slate-200 bg-white px-4 font-bold text-slate-700 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15">
                  {decks.map(d=><option key={d.id} value={d.id}>{d.title}</option>)}
                </select>
              )}
            </Section>
            <Section step={3} title="Giao cho">
              <div className="mb-3 inline-flex rounded-2xl bg-slate-100 p-1">
                <Seg active={target==="class"} onClick={()=>setTarget("class")} label="Cả lớp"/>
                <Seg active={target==="students"} onClick={()=>setTarget("students")} label="Từng học sinh"/>
              </div>
              {target==="class" ? (
                <select value={classroom} onChange={e=>setClassroom(e.target.value)} className="h-11 w-full rounded-2xl border-2 border-slate-200 bg-white px-4 font-bold text-slate-700">
                  {CLASS_OPTIONS.map(o=><option key={o} value={o}>{o}</option>)}
                </select>
              ):(
                <div className="grid gap-2 sm:grid-cols-2">
                  {students.length===0? <div className="col-span-full rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-slate-400">Chưa có học sinh.</div> : students.map(s=>{
                    const on=picked.includes(s);
                    return <button key={s} onClick={()=>toggleStudent(s)} className={cn("flex items-center gap-3 rounded-2xl border-2 p-3 text-left text-sm font-bold", on?"border-brand bg-brand-50 text-brand":"border-slate-200 text-slate-600")}><span className={cn("flex h-5 w-5 items-center justify-center rounded-md border-2", on?"border-brand bg-brand text-white":"border-slate-300")}>{on&&<CheckCircle2 className="h-3.5 w-3.5"/>}</span>{s}</button>
                  })}
                </div>
              )}
            </Section>
            <Section step={4} title="Chọn hạn nộp">
              <div className="flex items-center gap-2 rounded-2xl border-2 border-slate-200 bg-white px-4"><CalendarDays className="h-5 w-5 text-brand"/><Input type="datetime-local" value={due} onChange={e=>setDue(e.target.value)} className="border-0 px-0 focus:ring-0"/></div>
            </Section>
            {error && <p className="rounded-2xl border border-danger/20 bg-danger/5 px-4 py-2.5 text-sm font-semibold text-danger">{error}</p>}
            <Button size="lg" onClick={submitManual} disabled={busy}><Sparkles className="h-4 w-4"/> Giao bài</Button>
          </motion.div>
        ) : (
          <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} className="mt-6 flex flex-col gap-6">
            <Section step={1} title="Nhập yêu cầu cho AI (prompt engineer sẵn)">
              <Label>Chủ đề / Yêu cầu</Label>
              <textarea value={aiInput} onChange={e=>setAiInput(e.target.value)} rows={3} placeholder="VD: Quá khứ đơn - kể về cuối tuần, 8 từ vựng, 5 câu trắc nghiệm" className="w-full rounded-2xl border-2 border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15"/>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <div><Label>Trình độ</Label><select value={aiLevel} onChange={e=>setAiLevel(e.target.value)} className="h-11 w-full rounded-2xl border-2 border-slate-200 bg-white px-3 font-bold"><option>A2-B1</option><option>A2</option><option>B1</option></select></div>
                <div><Label>Số câu Quiz</Label><select value={String(aiCount)} onChange={e=>setAiCount(parseInt(e.target.value,10))} className="h-11 w-full rounded-2xl border-2 border-slate-200 bg-white px-3 font-bold"><option value="5">5 câu</option><option value="6">6 câu</option><option value="7">7 câu</option></select></div>
              </div>
              <Button size="lg" onClick={generateAI} disabled={aiBusy || aiInput.trim().length<3} className="mt-3 w-full">{aiBusy? <Loader2 className="h-4 w-4 animate-spin"/> : <Wand2 className="h-4 w-4"/>} {aiBusy? "Đang tạo với Groq..." : "Tạo bài tập với AI"}</Button>
              <p className="mt-2 text-xs font-semibold text-slate-400">Prompt hệ thống đã cấu hình sẵn (SYSTEM_PROMPT) — output luôn là 1 đoạn markdown chuẩn để web tự decode.</p>
            </Section>

            {aiMarkdown && (
              <Section step={2} title="Kết quả AI — Markdown & Preview">
                <div className="mb-3 inline-flex rounded-2xl bg-slate-100 p-1">
                  <button onClick={()=>setAiTab("preview")} className={cn("flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-bold", aiTab==="preview"?"bg-white text-brand shadow-soft":"text-slate-500")}><Eye className="h-4 w-4"/> Preview</button>
                  <button onClick={()=>setAiTab("markdown")} className={cn("rounded-xl px-4 py-2 text-sm font-bold", aiTab==="markdown"?"bg-white text-brand shadow-soft":"text-slate-500")}>Markdown</button>
                </div>
                {aiWarning && <p className="mb-3 flex items-center gap-2 rounded-2xl bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700"><AlertCircle className="h-4 w-4"/>{aiWarning}</p>}
                {aiTab==="markdown" ? (
                  <textarea value={aiMarkdown} onChange={e=>onMarkdownChange(e.target.value)} rows={18} className="w-full rounded-2xl border-2 border-slate-200 bg-slate-50 p-4 font-mono text-xs text-slate-700"/>
                ) : aiParsed ? (
                  <div className="space-y-4">
                    <div><h3 className="font-extrabold text-slate-900">{aiParsed.title}</h3><p className="text-sm text-slate-500">{aiParsed.description}</p></div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <h4 className="mb-2 font-bold text-slate-700">VOCAB ({aiParsed.vocab.length} từ)</h4>
                      <div className="overflow-x-auto"><table className="w-full text-xs"><thead><tr className="text-left font-bold text-slate-500"><th className="pb-1">Từ</th><th>Phiên âm</th><th>Nghĩa</th><th>Ví dụ</th></tr></thead><tbody>{aiParsed.vocab.map((v,i)=><tr key={i} className="border-t"><td className="py-1 font-bold">{v.word}</td><td>{v.phonetic}</td><td>{v.meaning}</td><td className="max-w-[200px] truncate">{v.example}</td></tr>)}</tbody></table></div>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-700">QUIZ ({aiParsed.quiz.length} câu)</h4>
                      {aiParsed.quiz.map((q,idx)=><div key={q.id} className="rounded-2xl border border-slate-200 bg-white p-4"><p className="font-bold text-slate-800">{idx+1}. {q.prompt}</p><ul className="mt-2 space-y-1">{q.options.map((o,i)=><li key={i} className={cn("rounded-xl border px-3 py-2 text-sm", i===q.answer?"border-success bg-success-50 font-bold text-success":"border-slate-100")}>{String.fromCharCode(65+i)}. {o} {i===q.answer&&"✓"}</li>)}</ul>{q.explain&&<p className="mt-2 text-xs text-slate-500">Giải thích: {q.explain}</p>}</div>)}
                    </div>
                    {aiParsed.writing && <div className="rounded-2xl bg-brand-50 p-4"><h4 className="font-bold text-brand">WRITING</h4><p className="mt-1 text-sm font-semibold">{aiParsed.writing.prompt}</p><p className="mt-1 text-xs text-slate-500">Gợi ý: {aiParsed.writing.hint}</p></div>}
                  </div>
                ) : null}
              </Section>
            )}

            <Section step={3} title="Giao cho & Hạn nộp">
              <div className="mb-3 inline-flex rounded-2xl bg-slate-100 p-1">
                <Seg active={target==="class"} onClick={()=>setTarget("class")} label="Cả lớp"/>
                <Seg active={target==="students"} onClick={()=>setTarget("students")} label="Từng học sinh"/>
              </div>
              {target==="class" ? (
                <select value={classroom} onChange={e=>setClassroom(e.target.value)} className="h-11 w-full rounded-2xl border-2 border-slate-200 bg-white px-4 font-bold"><option>{classroom}</option></select>
              ):(
                <div className="grid gap-2 sm:grid-cols-2">{students.map(s=>{const on=picked.includes(s); return <button key={s} onClick={()=>toggleStudent(s)} className={cn("flex items-center gap-3 rounded-2xl border-2 p-3 text-sm font-bold", on?"border-brand bg-brand-50 text-brand":"border-slate-200")}>{s}</button>})}</div>
              )}
              <div className="mt-3 flex items-center gap-2 rounded-2xl border-2 border-slate-200 bg-white px-4"><CalendarDays className="h-5 w-5 text-brand"/><Input type="datetime-local" value={due} onChange={e=>setDue(e.target.value)} className="border-0"/></div>
            </Section>

            {error && <p className="rounded-2xl border border-danger/20 bg-danger/5 px-4 py-2.5 text-sm font-semibold text-danger">{error}</p>}
            <Button size="lg" onClick={submitAI} disabled={busy || !aiParsed}><Sparkles className="h-4 w-4"/> Giao bài AI</Button>
          </motion.div>
        )}
      </div>
    </AppShell>
  );
}

/* helpers */
function Section({step,title,children}:{step:number;title:string;children:ReactNode}){
  return <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-soft"><h2 className="mb-4 flex items-center gap-2 font-extrabold text-slate-900"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-xs text-white">{step}</span>{title}</h2>{children}</div>
}
function TypeCard({active,onClick,icon:Icon,label,desc}:{active:boolean;onClick:()=>void;icon:typeof Layers;label:string;desc:string}){
  return <button onClick={onClick} className={cn("flex flex-col items-center gap-2 rounded-2xl border-2 p-4 text-center", active?"border-brand bg-brand-50":"border-slate-200")}><span className={cn("flex h-11 w-11 items-center justify-center rounded-2xl", active?"bg-brand text-white":"bg-slate-100 text-slate-500")}><Icon className="h-5 w-5"/></span><span className="font-extrabold">{label}</span><span className="text-xs text-slate-400">{desc}</span></button>
}
function Seg({active,onClick,label}:{active:boolean;onClick:()=>void;label:string}){
  return <button onClick={onClick} className={cn("rounded-xl px-4 py-2 text-sm font-bold", active?"bg-white text-brand shadow-soft":"text-slate-500")}>{label}</button>
}
function SuccessCard({title,desc}:{title:string;desc:string}){
  return <motion.div initial={{opacity:0,scale:0.96}} animate={{opacity:1,scale:1}} className="mx-auto mt-10 max-w-md rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-card"><CheckCircle2 className="mx-auto h-14 w-14 text-success"/><h1 className="mt-3 text-2xl font-extrabold">{title}</h1><p className="mt-1 text-slate-500">{desc}</p><div className="mt-6 flex justify-center gap-3"><Button asChild variant="outline"><Link href="/teacher/assignments/new">Giao bài khác</Link></Button><Button asChild><Link href="/teacher">Về bảng điều khiển</Link></Button></div></motion.div>
}
