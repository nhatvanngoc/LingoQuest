from manim import *

# Palette
BG_COLOR = "#070B18"
PRIMARY_BLUE = "#38BDF8"
ACCENT_GREEN = "#10B981"
ACCENT_AMBER = "#F59E0B"
ACCENT_ROSE = "#F43F5E"
ACCENT_PURPLE = "#A855F7"
TEXT_WHITE = "#FFFFFF"
TEXT_MUTED = "#94A3B8"
CARD_BG = "#0F1A2E"
CARD_BORDER = "#1E2E4A"

class GrammarMasterclass(Scene):
    def construct(self):
        self.camera.background_color = BG_COLOR

        # =========================================================================
        # SCENE 1: INTRO & HOOK (15.10s)
        # =========================================================================
        badge_box = RoundedRectangle(corner_radius=0.2, width=7.6, height=0.7, color=PRIMARY_BLUE, stroke_width=2, fill_color="#0F172A", fill_opacity=0.95)
        badge_text = Text("LINGOQUEST • ADVANCED GRAMMAR MASTERCLASS", font="Segoe UI", font_size=19, weight=BOLD, color=PRIMARY_BLUE)
        badge = VGroup(badge_box, badge_text).to_edge(UP, buff=0.8)

        t_past = Text("PAST SIMPLE", font="Segoe UI", font_size=40, weight=BOLD, color=ACCENT_ROSE)
        t_vs = Text("  vs  ", font="Segoe UI", font_size=30, weight=BOLD, color=TEXT_WHITE)
        t_pres = Text("PRESENT PERFECT", font="Segoe UI", font_size=40, weight=BOLD, color=ACCENT_GREEN)
        title_row = VGroup(t_past, t_vs, t_pres).arrange(RIGHT, buff=0.1).next_to(badge, DOWN, buff=0.6)

        sub1 = Text("The Complete Visual Intuition & Grammar Anatomy", font="Segoe UI", font_size=24, color=TEXT_MUTED)
        sub1.next_to(title_row, DOWN, buff=0.4)

        q_box = RoundedRectangle(corner_radius=0.25, width=10.5, height=1.1, color="#334155", stroke_width=1.5, fill_color="#1E293B", fill_opacity=0.8)
        q_text = Text("When does an action stay locked in the past,\nand when does it actively connect to NOW?", font="Segoe UI", font_size=20, weight=BOLD, color="#FDE68A")
        q_group = VGroup(q_box, q_text).next_to(sub1, DOWN, buff=0.5)

        self.play(FadeIn(badge, shift=DOWN*0.3), run_time=1.0)
        self.play(Write(title_row), run_time=2.0)
        self.play(FadeIn(sub1, shift=UP*0.2), run_time=1.2)
        self.play(FadeIn(q_group, shift=UP*0.2), run_time=1.5)
        self.wait(8.2) # Total ~ 15.10s

        # Fade out everything from Scene 1 so header area is 100% clean
        self.play(
            FadeOut(title_row, shift=UP*0.3),
            FadeOut(sub1, shift=UP*0.3),
            FadeOut(q_group, shift=UP*0.3),
            FadeOut(badge, shift=UP*0.3),
            run_time=1.2
        )

        # =========================================================================
        # SCENE 2: GRAMMAR FORMULAS & ANATOMY (27.77s)
        # =========================================================================
        sec2_header = Text("1. GRAMMAR STRUCTURE ANATOMY (Cấu trúc câu)", font="Segoe UI", font_size=25, weight=BOLD, color=PRIMARY_BLUE)
        sec2_header.to_edge(UP, buff=0.45)
        self.play(FadeIn(sec2_header, shift=DOWN*0.2), run_time=0.8)

        # Past Simple Formula Card
        card_ps = RoundedRectangle(corner_radius=0.25, width=11.2, height=2.2, color=ACCENT_ROSE, stroke_width=2.5, fill_color=CARD_BG, fill_opacity=0.95)
        card_ps.shift(UP * 1.3)

        ps_tag = Text("PAST SIMPLE (Quá khứ đơn)", font="Segoe UI", font_size=18, weight=BOLD, color=ACCENT_ROSE).next_to(card_ps.get_top(), DOWN, buff=0.25).align_to(card_ps, LEFT).shift(RIGHT * 0.4)
        
        ps_form_pos = Text("(+)  S  +  V2 / V-ed  +  (O)", font="Segoe UI", font_size=22, weight=BOLD, color=TEXT_WHITE).next_to(ps_tag, DOWN, buff=0.25).align_to(ps_tag, LEFT)
        ps_form_neg = Text("(-)   S  +  DID NOT (didn't)  +  V-inf", font="Segoe UI", font_size=18, weight=BOLD, color="#FECDD3").next_to(ps_form_pos, DOWN, buff=0.2).align_to(ps_tag, LEFT)
        ps_note = Text("• Standalone Past Verb", font="Segoe UI", font_size=16, weight=BOLD, color=ACCENT_ROSE).next_to(ps_form_pos, RIGHT, buff=1.2)

        ps_group = VGroup(card_ps, ps_tag, ps_form_pos, ps_form_neg, ps_note)

        # Present Perfect Formula Card
        card_pp = RoundedRectangle(corner_radius=0.25, width=11.2, height=2.4, color=ACCENT_GREEN, stroke_width=2.5, fill_color=CARD_BG, fill_opacity=0.95)
        card_pp.shift(DOWN * 1.5)

        pp_tag = Text("PRESENT PERFECT (Hiện tại hoàn thành)", font="Segoe UI", font_size=18, weight=BOLD, color=ACCENT_GREEN).next_to(card_pp.get_top(), DOWN, buff=0.25).align_to(card_pp, LEFT).shift(RIGHT * 0.4)
        
        pp_form_pos = Text("(+)  S  +  HAVE / HAS  +  V3 (Past Participle)", font="Segoe UI", font_size=22, weight=BOLD, color=TEXT_WHITE).next_to(pp_tag, DOWN, buff=0.25).align_to(pp_tag, LEFT)
        pp_form_neg = Text("(-)   S  +  HAVEN'T / HASN'T  +  V3", font="Segoe UI", font_size=18, weight=BOLD, color="#A7F3D0").next_to(pp_form_pos, DOWN, buff=0.2).align_to(pp_tag, LEFT)
        
        # Anchor callout badge
        anchor_box = RoundedRectangle(corner_radius=0.15, width=9.8, height=0.5, color=ACCENT_AMBER, stroke_width=1.5, fill_color="#451A03", fill_opacity=0.9)
        anchor_txt = Text("⚓ 'HAVE / HAS' belongs to the Present Family ➔ It ANCHORS the action to NOW!", font="Segoe UI", font_size=15, weight=BOLD, color=ACCENT_AMBER)
        anchor_callout = VGroup(anchor_box, anchor_txt).next_to(pp_form_neg, DOWN, buff=0.22).align_to(pp_tag, LEFT)

        pp_group = VGroup(card_pp, pp_tag, pp_form_pos, pp_form_neg, anchor_callout)

        self.play(FadeIn(ps_group, shift=RIGHT*0.3), run_time=1.5)
        self.play(FadeIn(pp_group, shift=LEFT*0.3), run_time=1.5)
        self.play(anchor_callout.animate.scale(1.03), run_time=0.8)
        self.play(anchor_callout.animate.scale(1.0/1.03), run_time=0.8)
        self.wait(20.17) # Total ~ 27.77s

        self.play(
            FadeOut(ps_group, shift=UP*0.4),
            FadeOut(pp_group, shift=DOWN*0.4),
            FadeOut(sec2_header),
            run_time=1.2
        )

        # =========================================================================
        # SCENE 3: PAST SIMPLE ON THE TIMELINE (23.93s)
        # =========================================================================
        sec3_header = Text("2. PAST SIMPLE: LOCKED IN THE PAST", font="Segoe UI", font_size=25, weight=BOLD, color=ACCENT_ROSE)
        sec3_header.to_edge(UP, buff=0.45)
        self.play(FadeIn(sec3_header, shift=DOWN*0.2), run_time=0.8)

        # Sentence Box
        box_ps_sent = RoundedRectangle(corner_radius=0.2, width=10.5, height=0.9, color=ACCENT_ROSE, stroke_width=2.5, fill_color=CARD_BG, fill_opacity=0.95)
        box_ps_sent.shift(UP * 2.1)
        txt_ps_sent = Text("She visited Tokyo in 2019.", font="Segoe UI", font_size=28, weight=BOLD, color=TEXT_WHITE)
        txt_ps_sent.move_to(box_ps_sent.get_center())
        sent_ps_group = VGroup(box_ps_sent, txt_ps_sent)

        # Master Timeline setup
        timeline_y = -0.9
        axis = Arrow(LEFT * 5.8, RIGHT * 5.8, stroke_width=5, color=PRIMARY_BLUE, max_tip_length_to_length_ratio=0.04).shift(UP * timeline_y)
        lbl_past = Text("PAST", font="Segoe UI", font_size=20, weight=BOLD, color=TEXT_MUTED).next_to(axis.get_start() + RIGHT*0.7, DOWN, buff=0.25)
        lbl_future = Text("FUTURE", font="Segoe UI", font_size=20, weight=BOLD, color="#64748B").next_to(axis.get_end() + LEFT*0.7, DOWN, buff=0.25)

        now_x = 1.8
        now_dot = Dot(point=[now_x, timeline_y, 0], radius=0.15, color=ACCENT_AMBER)
        now_dashed = DashedLine(start=[now_x, 0.4, 0], end=[now_x, -2.2, 0], stroke_width=2.5, color=ACCENT_AMBER, dash_length=0.12)
        now_badge = VGroup(
            RoundedRectangle(corner_radius=0.15, width=2.2, height=0.55, color=ACCENT_AMBER, fill_color="#451A03", fill_opacity=0.95),
            Text("NOW (Hiện tại)", font="Segoe UI", font_size=15, weight=BOLD, color=ACCENT_AMBER)
        ).next_to(now_dashed, UP, buff=0.08)

        self.play(
            FadeIn(sent_ps_group, shift=DOWN*0.2),
            GrowArrow(axis),
            FadeIn(lbl_past),
            FadeIn(lbl_future),
            Create(now_dashed),
            FadeIn(now_dot),
            FadeIn(now_badge),
            run_time=1.8
        )

        # Plot 2019
        p2019_x = -2.8
        dot_2019 = Dot(point=[p2019_x, timeline_y, 0], radius=0.16, color=ACCENT_ROSE)
        lbl_2019 = Text("2019", font="Segoe UI", font_size=19, weight=BOLD, color=ACCENT_ROSE).next_to(dot_2019, DOWN, buff=0.25)

        lock_tag = VGroup(
            RoundedRectangle(corner_radius=0.15, width=4.2, height=0.55, color=ACCENT_ROSE, fill_color="#4C0519", fill_opacity=0.95),
            Text("🔒 FINISHED & LOCKED (Đã đóng)", font="Segoe UI", font_size=15, weight=BOLD, color="#FECDD3")
        ).next_to(dot_2019, UP, buff=0.4)

        # Solid barrier
        barrier_ps = DashedLine(start=[-0.4, 0.2, 0], end=[-0.4, -1.9, 0], stroke_width=3.5, color=ACCENT_ROSE)
        barrier_txt = Text("DISCONNECTED FROM NOW", font="Segoe UI", font_size=14, weight=BOLD, color=ACCENT_ROSE).next_to(barrier_ps, RIGHT, buff=0.15).shift(UP*0.2)

        self.play(FadeIn(dot_2019, scale=1.4), FadeIn(lbl_2019), FadeIn(lock_tag, shift=UP*0.2), run_time=1.5)
        self.play(Create(barrier_ps), Write(barrier_txt), run_time=1.4)

        signals_ps = Text("Time Markers: yesterday, last year, in 2019, 2 days ago, when I was young", font="Segoe UI", font_size=16, weight=BOLD, color="#FDA4AF")
        signals_ps.to_edge(DOWN, buff=0.45)
        self.play(FadeIn(signals_ps, shift=UP*0.2), run_time=1.0)

        self.wait(16.23) # Total ~ 23.93s

        self.play(
            FadeOut(sent_ps_group),
            FadeOut(dot_2019),
            FadeOut(lbl_2019),
            FadeOut(lock_tag),
            FadeOut(barrier_ps),
            FadeOut(barrier_txt),
            FadeOut(signals_ps),
            FadeOut(sec3_header),
            run_time=1.2
        )

        # =========================================================================
        # SCENE 4: PRESENT PERFECT - THE ONGOING JOURNEY (21.17s)
        # =========================================================================
        sec4_header = Text("3. PRESENT PERFECT: ONGOING JOURNEY TO NOW", font="Segoe UI", font_size=25, weight=BOLD, color=ACCENT_GREEN)
        sec4_header.to_edge(UP, buff=0.45)
        self.play(FadeIn(sec4_header, shift=DOWN*0.2), run_time=0.8)

        # Sentence Box
        box_pp_sent = RoundedRectangle(corner_radius=0.2, width=10.5, height=0.9, color=ACCENT_GREEN, stroke_width=2.5, fill_color=CARD_BG, fill_opacity=0.95)
        box_pp_sent.shift(UP * 2.1)
        txt_pp_sent = Text("She has lived in Tokyo for 4 years.", font="Segoe UI", font_size=28, weight=BOLD, color=TEXT_WHITE)
        txt_pp_sent.move_to(box_pp_sent.get_center())
        sent_pp_group = VGroup(box_pp_sent, txt_pp_sent)

        # 4 years ago point
        p_start_x = -2.8
        dot_start = Dot(point=[p_start_x, timeline_y, 0], radius=0.15, color=ACCENT_GREEN)
        lbl_start = Text("4 years ago", font="Segoe UI", font_size=18, weight=BOLD, color=ACCENT_GREEN).next_to(dot_start, DOWN, buff=0.25)

        # Vector energy beam touching NOW
        beam_pp = Arrow(start=[p_start_x, timeline_y, 0], end=[now_x, timeline_y, 0], stroke_width=7, color=ACCENT_GREEN, buff=0.1, max_tip_length_to_length_ratio=0.08)
        
        pulse_ring = Circle(radius=0.35, color=ACCENT_GREEN, stroke_width=3).move_to([now_x, timeline_y, 0])

        ongoing_tag = VGroup(
            RoundedRectangle(corner_radius=0.15, width=5.2, height=0.55, color=ACCENT_GREEN, fill_color="#064E3B", fill_opacity=0.95),
            Text("✨ STILL LIVING IN TOKYO TODAY! (Tiếp diễn)", font="Segoe UI", font_size=15, weight=BOLD, color="#A7F3D0")
        ).next_to(beam_pp, UP, buff=0.4)

        self.play(FadeIn(sent_pp_group, shift=DOWN*0.2), FadeIn(dot_start), FadeIn(lbl_start), run_time=1.2)
        self.play(GrowArrow(beam_pp), run_time=1.6)
        self.play(
            Create(pulse_ring),
            pulse_ring.animate.scale(1.5).set_stroke(opacity=0),
            FadeIn(ongoing_tag, shift=UP*0.2),
            run_time=1.4
        )

        signals_pp = Text("Time Markers: for 4 years, since 2020, already, so far, recently", font="Segoe UI", font_size=16, weight=BOLD, color="#6EE7B7")
        signals_pp.to_edge(DOWN, buff=0.45)
        self.play(FadeIn(signals_pp, shift=UP*0.2), run_time=1.0)

        self.wait(13.97) # Total ~ 21.17s

        self.play(
            FadeOut(sent_pp_group),
            FadeOut(dot_start),
            FadeOut(lbl_start),
            FadeOut(beam_pp),
            FadeOut(pulse_ring),
            FadeOut(ongoing_tag),
            FadeOut(signals_pp),
            FadeOut(axis),
            FadeOut(lbl_past),
            FadeOut(lbl_future),
            FadeOut(now_dashed),
            FadeOut(now_dot),
            FadeOut(now_badge),
            FadeOut(sec4_header),
            run_time=1.2
        )

        # =========================================================================
        # SCENE 5: THE PRESENT RESULT DISTINCTION (27.46s)
        # =========================================================================
        sec5_header = Text("4. THE CRITICAL DIFFERENCE: THE PRESENT RESULT", font="Segoe UI", font_size=24, weight=BOLD, color=ACCENT_AMBER)
        sec5_header.to_edge(UP, buff=0.45)
        self.play(FadeIn(sec5_header, shift=DOWN*0.2), run_time=0.8)

        # Comparison 2 Columns
        col_w = 5.7
        col_h = 4.8

        # Left: Past Simple Lost
        box_lost_ps = RoundedRectangle(corner_radius=0.25, width=col_w, height=col_h, color=ACCENT_ROSE, stroke_width=2.5, fill_color="#181324", fill_opacity=0.95)
        box_lost_ps.shift(LEFT * 3.1 + DOWN * 0.2)

        t_ps_head = Text("PAST SIMPLE", font="Segoe UI", font_size=20, weight=BOLD, color=ACCENT_ROSE).next_to(box_lost_ps.get_top(), DOWN, buff=0.25)
        t_ps_sentence = Text('"He lost his phone."', font="Segoe UI", font_size=24, weight=BOLD, color=TEXT_WHITE).next_to(t_ps_head, DOWN, buff=0.25)
        
        sep_ps = Line(LEFT*2.4, RIGHT*2.4, color="#334155").next_to(t_ps_sentence, DOWN, buff=0.25)

        t_ps_detail1 = Text("• Happened in the past (e.g. yesterday)", font="Segoe UI", font_size=15, color=TEXT_MUTED).next_to(sep_ps, DOWN, buff=0.25).align_to(sep_ps, LEFT)
        t_ps_detail2 = Text("• Result NOW is UNKNOWN:", font="Segoe UI", font_size=16, weight=BOLD, color="#FECDD3").next_to(t_ps_detail1, DOWN, buff=0.2).align_to(sep_ps, LEFT)
        t_ps_detail3 = Text("  ➔ Maybe he found it again.\n  ➔ Maybe he bought a new one!", font="Segoe UI", font_size=15, color=TEXT_WHITE).next_to(t_ps_detail2, DOWN, buff=0.2).align_to(sep_ps, LEFT)

        ps_res_group = VGroup(box_lost_ps, t_ps_head, t_ps_sentence, sep_ps, t_ps_detail1, t_ps_detail2, t_ps_detail3)

        # Right: Present Perfect Lost
        box_lost_pp = RoundedRectangle(corner_radius=0.25, width=col_w, height=col_h, color=ACCENT_GREEN, stroke_width=2.5, fill_color="#0F241C", fill_opacity=0.95)
        box_lost_pp.shift(RIGHT * 3.1 + DOWN * 0.2)

        t_pp_head = Text("PRESENT PERFECT", font="Segoe UI", font_size=20, weight=BOLD, color=ACCENT_GREEN).next_to(box_lost_pp.get_top(), DOWN, buff=0.25)
        t_pp_sentence = Text('"He has lost his phone."', font="Segoe UI", font_size=24, weight=BOLD, color=TEXT_WHITE).next_to(t_pp_head, DOWN, buff=0.25)

        sep_pp = Line(LEFT*2.4, RIGHT*2.4, color="#334155").next_to(t_pp_sentence, DOWN, buff=0.25)

        t_pp_detail1 = Text("• Happened at an unstated past time", font="Segoe UI", font_size=15, color=TEXT_MUTED).next_to(sep_pp, DOWN, buff=0.25).align_to(sep_pp, LEFT)
        t_pp_detail2 = Text("• Result NOW is 100% ACTIVE:", font="Segoe UI", font_size=16, weight=BOLD, color=ACCENT_AMBER).next_to(t_pp_detail1, DOWN, buff=0.2).align_to(sep_pp, LEFT)
        t_pp_detail3 = Text("  ➔ Right now, he DOES NOT have it!\n  ➔ Empty pockets. Cannot call anyone.", font="Segoe UI", font_size=15, weight=BOLD, color="#A7F3D0").next_to(t_pp_detail2, DOWN, buff=0.2).align_to(sep_pp, LEFT)

        pp_res_group = VGroup(box_lost_pp, t_pp_head, t_pp_sentence, sep_pp, t_pp_detail1, t_pp_detail2, t_pp_detail3)

        self.play(FadeIn(ps_res_group, shift=RIGHT*0.3), run_time=1.4)
        self.play(FadeIn(pp_res_group, shift=LEFT*0.3), run_time=1.4)
        self.wait(22.66) # Total ~ 27.46s

        self.play(
            FadeOut(ps_res_group, shift=LEFT*0.3),
            FadeOut(pp_res_group, shift=RIGHT*0.3),
            FadeOut(sec5_header),
            run_time=1.2
        )

        # =========================================================================
        # SCENE 6: SINCE VS FOR (23.09s)
        # =========================================================================
        sec6_header = Text("5. SIGNAL WORDS: 'SINCE' VS 'FOR'", font="Segoe UI", font_size=25, weight=BOLD, color=PRIMARY_BLUE)
        sec6_header.to_edge(UP, buff=0.45)
        self.play(FadeIn(sec6_header, shift=DOWN*0.2), run_time=0.8)

        # Top: SINCE
        card_since = RoundedRectangle(corner_radius=0.25, width=11.2, height=2.2, color=PRIMARY_BLUE, stroke_width=2.5, fill_color=CARD_BG, fill_opacity=0.95)
        card_since.shift(UP * 1.2)

        s_title = Text("📍 SINCE  +  Point in Time (Mốc thời gian bắt đầu)", font="Segoe UI", font_size=20, weight=BOLD, color=PRIMARY_BLUE).next_to(card_since.get_top(), DOWN, buff=0.25).align_to(card_since, LEFT).shift(RIGHT*0.4)
        s_desc = Text("Acts like a Starting Pin on the timeline. Marks when the action began.", font="Segoe UI", font_size=16, color=TEXT_MUTED).next_to(s_title, DOWN, buff=0.2).align_to(s_title, LEFT)
        s_examples = Text("Examples: since 2020, since Monday, since 8:00 AM, since I graduated", font="Segoe UI", font_size=18, weight=BOLD, color="#BAE6FD").next_to(s_desc, DOWN, buff=0.2).align_to(s_title, LEFT)

        since_group = VGroup(card_since, s_title, s_desc, s_examples)

        # Bottom: FOR
        card_for = RoundedRectangle(corner_radius=0.25, width=11.2, height=2.2, color=ACCENT_AMBER, stroke_width=2.5, fill_color=CARD_BG, fill_opacity=0.95)
        card_for.shift(DOWN * 1.4)

        f_title = Text("📏 FOR  +  Period of Time (Khoảng thời gian / Độ dài)", font="Segoe UI", font_size=20, weight=BOLD, color=ACCENT_AMBER).next_to(card_for.get_top(), DOWN, buff=0.25).align_to(card_for, LEFT).shift(RIGHT*0.4)
        f_desc = Text("Acts like a Measuring Tape. Measures the total elapsed duration.", font="Segoe UI", font_size=16, color=TEXT_MUTED).next_to(f_title, DOWN, buff=0.2).align_to(f_title, LEFT)
        f_examples = Text("Examples: for 5 years, for 3 hours, for 2 weeks, for a long time", font="Segoe UI", font_size=18, weight=BOLD, color="#FDE68A").next_to(f_desc, DOWN, buff=0.2).align_to(f_title, LEFT)

        for_group = VGroup(card_for, f_title, f_desc, f_examples)

        self.play(FadeIn(since_group, shift=DOWN*0.3), run_time=1.4)
        self.play(FadeIn(for_group, shift=UP*0.3), run_time=1.4)
        self.wait(18.29) # Total ~ 23.09s

        self.play(
            FadeOut(since_group),
            FadeOut(for_group),
            FadeOut(sec6_header),
            run_time=1.2
        )

        # =========================================================================
        # SCENE 7: INTERACTIVE QUIZ & DYNAMIC VERB MORPHING (25.30s)
        # =========================================================================
        sec7_header = Text("6. QUICK CHALLENGE: VERB TRANSFORMATION", font="Segoe UI", font_size=25, weight=BOLD, color=ACCENT_AMBER)
        sec7_header.to_edge(UP, buff=0.45)
        self.play(FadeIn(sec7_header, shift=DOWN*0.2), run_time=0.8)

        quiz_box = RoundedRectangle(corner_radius=0.3, width=11.2, height=3.8, color=PRIMARY_BLUE, stroke_width=2.5, fill_color=CARD_BG, fill_opacity=0.98)
        quiz_box.shift(DOWN * 0.2)

        q_badge = Text("FILL IN THE BLANK WITH THE CORRECT TENSE", font="Segoe UI", font_size=18, weight=BOLD, color=PRIMARY_BLUE).next_to(quiz_box.get_top(), DOWN, buff=0.35)

        # Sentence with generous padding
        s_part1 = Text("David", font="Segoe UI", font_size=28, weight=BOLD, color=TEXT_WHITE)
        s_blank = Text(" [ teach ] ", font="Segoe UI", font_size=28, weight=BOLD, color=ACCENT_AMBER)
        s_part2 = Text("English", font="Segoe UI", font_size=28, weight=BOLD, color=TEXT_WHITE)
        s_since = Text("since 2018.", font="Segoe UI", font_size=28, weight=BOLD, color=PRIMARY_BLUE)
        sentence_row = VGroup(s_part1, s_blank, s_part2, s_since).arrange(RIGHT, buff=0.3).next_to(q_badge, DOWN, buff=0.5)

        self.play(FadeIn(quiz_box), FadeIn(q_badge), FadeIn(sentence_row), run_time=1.5)

        # Clue detection highlight box around 'since 2018'
        clue_rect = SurroundingRectangle(s_since, color=PRIMARY_BLUE, buff=0.15, corner_radius=0.1)
        clue_tag = Text("CLUE: 'since 2018' ➔ Action continues to NOW!", font="Segoe UI", font_size=16, weight=BOLD, color="#7DD3FC").next_to(sentence_row, DOWN, buff=0.45)

        self.play(Create(clue_rect), FadeIn(clue_tag, shift=UP*0.1), run_time=1.5)
        self.wait(4.0)

        # Transformation morph: 'teach' -> 'has taught'
        s_solved = Text(" has taught ", font="Segoe UI", font_size=30, weight=BOLD, color=ACCENT_GREEN).move_to(s_blank.get_center())
        check_badge = VGroup(
            RoundedRectangle(corner_radius=0.2, width=4.0, height=0.6, color=ACCENT_GREEN, fill_color="#064E3B", fill_opacity=0.95),
            Text("✔ CORRECT: has taught", font="Segoe UI", font_size=16, weight=BOLD, color="#A7F3D0")
        ).next_to(clue_tag, DOWN, buff=0.35)

        self.play(
            ReplacementTransform(s_blank, s_solved),
            FadeIn(check_badge, scale=1.2),
            run_time=1.6
        )
        self.wait(14.7) # Total ~ 25.30s

        self.play(
            FadeOut(quiz_box),
            FadeOut(q_badge),
            FadeOut(sentence_row),
            FadeOut(s_solved),
            FadeOut(clue_rect),
            FadeOut(clue_tag),
            FadeOut(check_badge),
            FadeOut(sec7_header),
            run_time=1.2
        )

        # =========================================================================
        # SCENE 8: GOLDEN SUMMARY & OUTRO (14.57s)
        # =========================================================================
        sum_card = RoundedRectangle(corner_radius=0.3, width=11.2, height=4.4, color=PRIMARY_BLUE, stroke_width=2.5, fill_color=CARD_BG, fill_opacity=0.98)
        sum_card.shift(UP * 0.1)

        sum_title = Text("GOLDEN RULES TO ALWAYS REMEMBER", font="Segoe UI", font_size=26, weight=BOLD, color=ACCENT_AMBER).next_to(sum_card.get_top(), DOWN, buff=0.4)

        r1 = Text("1. PAST SIMPLE = Specific past time • 100% Finished • Locked away", font="Segoe UI", font_size=20, weight=BOLD, color=ACCENT_ROSE).next_to(sum_title, DOWN, buff=0.45).align_to(sum_card, LEFT).shift(RIGHT * 0.5)
        r2 = Text("2. PRESENT PERFECT = Ongoing action • OR past action with PRESENT RESULT", font="Segoe UI", font_size=20, weight=BOLD, color=ACCENT_GREEN).next_to(r1, DOWN, buff=0.35).align_to(r1, LEFT)

        cta_box = RoundedRectangle(corner_radius=0.2, width=8.5, height=0.8, color=ACCENT_AMBER, stroke_width=2, fill_color="#78350F", fill_opacity=0.9)
        cta_txt = Text("Complete your Grammar Quest on LingoQuest!", font="Segoe UI", font_size=19, weight=BOLD, color=TEXT_WHITE)
        cta_group = VGroup(cta_box, cta_txt).next_to(r2, DOWN, buff=0.5)

        self.play(FadeIn(sum_card), FadeIn(sum_title), run_time=1.0)
        self.play(Write(r1), run_time=1.5)
        self.play(Write(r2), run_time=1.5)
        self.play(FadeIn(cta_group, shift=UP*0.2), run_time=1.2)
        self.wait(8.17) # Total ~ 14.57s
