import { Sparkles } from "lucide-react";

export function LandingFooter() {
  return (
    <footer className="border-t border-gray-100 bg-white/50">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-slate-400 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-teal-600 to-teal-800 text-white">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="font-bold text-slate-600">LingoQuest v2</span>
        </div>
        <p className="flex items-center gap-2">© 2026 LingoQuest · Được thiết kế với tâm huyết</p>
      </div>
    </footer>
  );
}
