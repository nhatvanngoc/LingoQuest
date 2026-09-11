from manim import *

# Color Palette (Tailwind / Modern EdTech)
BG_COLOR = "#080D1A"
PRIMARY_BLUE = "#38BDF8"
ACCENT_GREEN = "#10B981"
ACCENT_AMBER = "#F59E0B"
ACCENT_ROSE = "#F43F5E"
ACCENT_PURPLE = "#818CF8"
TEXT_WHITE = "#FFFFFF"
TEXT_MUTED = "#94A3B8"
CARD_BG = "#131E32"

class EnglishGrammarMaster(Scene):
    def construct(self):
        self.camera.background_color = BG_COLOR

        # -------------------------------------------------------------
        # SECTION 1: INTRO (8.45s)
        # -------------------------------------------------------------
        badge_box = RoundedRectangle(corner_radius=0.2, width=6.6, height=0.7, color=PRIMARY_BLUE, stroke_width=2, fill_color="#0F172A", fill_opacity=0.9)
        badge_text = Text("LINGOQUEST • UNIT 1 GRAMMAR STUDIO", font="Segoe UI", font_size=20, weight=BOLD, color=PRIMARY_BLUE)
        badge = VGroup(badge_box, badge_text).to_edge(UP, buff=1.0)

        title_past = Text("PAST SIMPLE", font="Segoe UI", font_size=38, weight=BOLD, color=ACCENT_ROSE)
        title_vs = Text("  vs  ", font="Segoe UI", font_size=30, weight=BOLD, color=TEXT_WHITE)
        title_pres = Text("PRESENT PERFECT", font="Segoe UI", font_size=38, weight=BOLD, color=ACCENT_GREEN)
        title_group = VGroup(title_past, title_vs, title_pres).arrange(RIGHT, buff=0.1).next_to(badge, DOWN, buff=0.6)

        sub_text = Text("Mastering Verb Tenses through Intuitive Timelines", font="Segoe UI", font_size=22, color=TEXT_MUTED)
        sub_text.next_to(title_group, DOWN, buff=0.4)

        glow_line = Line(LEFT * 4, RIGHT * 4, stroke_width=3, color=PRIMARY_BLUE).next_to(sub_text, DOWN, buff=0.4)

        self.play(FadeIn(badge, shift=DOWN*0.3), run_time=1.0)
        self.play(Write(title_group), run_time=1.8)
        self.play(FadeIn(sub_text, shift=UP*0.2), Create(glow_line), run_time=1.5)
        self.wait(2.95) # Total ~ 7.25s

        # Transition into Section 2
        self.play(
            FadeOut(title_group, shift=UP*0.3),
            FadeOut(sub_text, shift=UP*0.3),
            FadeOut(glow_line),
            badge.animate.scale(0.75).to_corner(UL, buff=0.4),
            run_time=1.2
        )

        # -------------------------------------------------------------
        # SECTION 2: THE TIMELINE CONCEPT (6.22s)
        # -------------------------------------------------------------
        header_text = Text("The Grammar Timeline (Trục thời gian)", font="Segoe UI", font_size=24, weight=BOLD, color=TEXT_WHITE)
        header_text.to_edge(UP, buff=0.45).shift(RIGHT * 1.5)
        self.play(FadeIn(header_text, shift=DOWN*0.2), run_time=0.8)

        # Timeline arrow
        timeline_y = -1.0
        axis_line = Arrow(LEFT * 5.8, RIGHT * 5.8, stroke_width=5, color=PRIMARY_BLUE, max_tip_length_to_length_ratio=0.04)
        axis_line.shift(UP * timeline_y)

        # Labels positioned far left and right so no collision occurs
        past_label = Text("PAST", font="Segoe UI", font_size=22, weight=BOLD, color=TEXT_MUTED).next_to(axis_line.get_start() + RIGHT*0.7, DOWN, buff=0.3)
        future_label = Text("FUTURE", font="Segoe UI", font_size=22, weight=BOLD, color="#64748B").next_to(axis_line.get_end() + LEFT*0.7, DOWN, buff=0.3)

        now_x = 1.8
        now_point = Dot(point=[now_x, timeline_y, 0], radius=0.15, color=ACCENT_AMBER)
        now_line = DashedLine(start=[now_x, 0.4, 0], end=[now_x, -2.4, 0], stroke_width=2.5, color=ACCENT_AMBER, dash_length=0.12)
        now_tag_box = RoundedRectangle(corner_radius=0.15, width=2.2, height=0.55, color=ACCENT_AMBER, fill_color="#451A03", fill_opacity=0.95)
        now_tag_text = Text("NOW (Hiện tại)", font="Segoe UI", font_size=15, weight=BOLD, color=ACCENT_AMBER)
        now_tag = VGroup(now_tag_box, now_tag_text).next_to(now_line, UP, buff=0.08)

        self.play(
            GrowArrow(axis_line),
            FadeIn(past_label),
            FadeIn(future_label),
            run_time=1.4
        )
        self.play(
            Create(now_line),
            FadeIn(now_point, scale=1.5),
            FadeIn(now_tag, shift=DOWN*0.15),
            run_time=1.2
        )
        self.wait(2.82) # Total ~ 6.22s

        # -------------------------------------------------------------
        # SECTION 3: PAST SIMPLE (11.69s)
        # -------------------------------------------------------------
        card_past = RoundedRectangle(corner_radius=0.2, width=10.0, height=0.9, color=ACCENT_ROSE, stroke_width=2.5, fill_color=CARD_BG, fill_opacity=0.95)
        card_past.shift(UP * 2.2)
        
        sent_past = Text("I lived in Da Nang in 2018.", font="Segoe UI", font_size=28, weight=BOLD, color=TEXT_WHITE)
        sent_past.move_to(card_past.get_center())

        self.play(FadeIn(card_past, shift=DOWN*0.2), Write(sent_past), run_time=1.2)

        # Plot 2018 on timeline (separated well from PAST label)
        p_2018_x = -2.8
        dot_2018 = Dot(point=[p_2018_x, timeline_y, 0], radius=0.16, color=ACCENT_ROSE)
        label_2018 = Text("2018", font="Segoe UI", font_size=19, weight=BOLD, color=ACCENT_ROSE).next_to(dot_2018, DOWN, buff=0.25)
        
        status_box = RoundedRectangle(corner_radius=0.15, width=4.0, height=0.55, color=ACCENT_ROSE, fill_color="#4C0519", fill_opacity=0.95)
        status_text = Text("Action FINISHED (Đã kết thúc)", font="Segoe UI", font_size=15, weight=BOLD, color="#FECDD3")
        status_tag = VGroup(status_box, status_text).next_to(dot_2018, UP, buff=0.4)

        # Barrier showing separation from NOW
        barrier = DashedLine(start=[-0.5, 0.2, 0], end=[-0.5, -2.0, 0], stroke_width=3, color=ACCENT_ROSE)
        barrier_cross = Text("NO LINK TO NOW", font="Segoe UI", font_size=14, weight=BOLD, color=ACCENT_ROSE).next_to(barrier, RIGHT, buff=0.15).shift(UP*0.2)

        self.play(
            FadeIn(dot_2018, scale=1.3),
            FadeIn(label_2018),
            FadeIn(status_tag, shift=UP*0.2),
            run_time=1.5
        )
        self.play(
            Create(barrier),
            Write(barrier_cross),
            run_time=1.5
        )

        chips_past = Text("Signal Words: in 2018, yesterday, last week, 3 years ago", font="Segoe UI", font_size=16, weight=BOLD, color="#FDA4AF")
        chips_past.to_edge(DOWN, buff=0.45)
        self.play(FadeIn(chips_past, shift=UP*0.2), run_time=1.0)

        self.wait(5.49) # Total ~ 11.69s

        # Clean up Past Simple specific graphics
        self.play(
            FadeOut(card_past),
            FadeOut(sent_past),
            FadeOut(dot_2018),
            FadeOut(label_2018),
            FadeOut(status_tag),
            FadeOut(barrier),
            FadeOut(barrier_cross),
            FadeOut(chips_past),
            run_time=1.0
        )

        # -------------------------------------------------------------
        # SECTION 4: PRESENT PERFECT (12.31s)
        # -------------------------------------------------------------
        card_pres = RoundedRectangle(corner_radius=0.2, width=10.0, height=0.9, color=ACCENT_GREEN, stroke_width=2.5, fill_color=CARD_BG, fill_opacity=0.95)
        card_pres.shift(UP * 2.2)
        sent_pres = Text("I have lived in Da Nang for 5 years.", font="Segoe UI", font_size=28, weight=BOLD, color=TEXT_WHITE)
        sent_pres.move_to(card_pres.get_center())

        self.play(FadeIn(card_pres, shift=DOWN*0.2), Write(sent_pres), run_time=1.2)

        start_x = -2.8
        dot_start = Dot(point=[start_x, timeline_y, 0], radius=0.15, color=ACCENT_GREEN)
        label_start = Text("5 years ago", font="Segoe UI", font_size=18, weight=BOLD, color=ACCENT_GREEN).next_to(dot_start, DOWN, buff=0.25)

        # Flowing connecting beam directly to NOW
        beam = Arrow(start=[start_x, timeline_y, 0], end=[now_x, timeline_y, 0], stroke_width=7, color=ACCENT_GREEN, buff=0.1, max_tip_length_to_length_ratio=0.08)
        
        pulse_ring = Circle(radius=0.35, color=ACCENT_GREEN, stroke_width=3).move_to([now_x, timeline_y, 0])
        
        bridge_box = RoundedRectangle(corner_radius=0.15, width=4.8, height=0.55, color=ACCENT_GREEN, fill_color="#064E3B", fill_opacity=0.95)
        bridge_text = Text("STILL LIVING HERE TODAY! (Còn tiếp diễn)", font="Segoe UI", font_size=15, weight=BOLD, color="#A7F3D0")
        bridge_tag = VGroup(bridge_box, bridge_text).next_to(beam, UP, buff=0.4)

        self.play(FadeIn(dot_start), FadeIn(label_start), run_time=1.0)
        self.play(GrowArrow(beam), run_time=1.8)
        self.play(
            Create(pulse_ring),
            pulse_ring.animate.scale(1.5).set_stroke(opacity=0),
            FadeIn(bridge_tag, shift=UP*0.2),
            run_time=1.4
        )

        chips_pres = Text("Signal Words: for 5 years, since 2019, already, just, yet", font="Segoe UI", font_size=16, weight=BOLD, color="#6EE7B7")
        chips_pres.to_edge(DOWN, buff=0.45)
        self.play(FadeIn(chips_pres, shift=UP*0.2), run_time=1.0)

        self.wait(5.91) # Total ~ 12.31s

        # Transition into Comparison
        self.play(
            FadeOut(card_pres),
            FadeOut(sent_pres),
            FadeOut(dot_start),
            FadeOut(label_start),
            FadeOut(beam),
            FadeOut(pulse_ring),
            FadeOut(bridge_tag),
            FadeOut(chips_pres),
            FadeOut(axis_line),
            FadeOut(past_label),
            FadeOut(future_label),
            FadeOut(now_line),
            FadeOut(now_point),
            FadeOut(now_tag),
            FadeOut(header_text),
            run_time=1.2
        )

        # -------------------------------------------------------------
        # SECTION 5: SIDE-BY-SIDE COMPARISON (9.31s)
        # -------------------------------------------------------------
        comp_title = Text("VERB MORPHING & MEANING", font="Segoe UI", font_size=28, weight=BOLD, color=PRIMARY_BLUE)
        comp_title.shift(UP * 2.8)
        self.play(Write(comp_title), run_time=0.8)

        # Left Column (Past Simple)
        col_left = RoundedRectangle(corner_radius=0.25, width=5.6, height=4.2, color=ACCENT_ROSE, stroke_width=2.5, fill_color="#1E1B2E", fill_opacity=0.95)
        col_left.shift(LEFT * 3.1 + DOWN * 0.1)
        
        left_h = Text("PAST SIMPLE", font="Segoe UI", font_size=22, weight=BOLD, color=ACCENT_ROSE).next_to(col_left.get_top(), DOWN, buff=0.3)
        left_form = Text("S + V2 / V-ed", font="Segoe UI", font_size=20, weight=BOLD, color=TEXT_WHITE).next_to(left_h, DOWN, buff=0.25)
        left_ex1 = Text("• 'lived'", font="Segoe UI", font_size=22, weight=BOLD, color=ACCENT_AMBER).next_to(left_form, DOWN, buff=0.25)
        left_ex2 = Text("• Locked in past time", font="Segoe UI", font_size=17, weight=BOLD, color="#FECDD3").next_to(left_ex1, DOWN, buff=0.2)
        left_ex3 = Text("• 'I lost my keys.'\n  (Maybe I found them now)", font="Segoe UI", font_size=16, color=TEXT_WHITE).next_to(left_ex2, DOWN, buff=0.25)
        left_group = VGroup(col_left, left_h, left_form, left_ex1, left_ex2, left_ex3)

        # Right Column (Present Perfect)
        col_right = RoundedRectangle(corner_radius=0.25, width=5.6, height=4.2, color=ACCENT_GREEN, stroke_width=2.5, fill_color="#0F291E", fill_opacity=0.95)
        col_right.shift(RIGHT * 3.1 + DOWN * 0.1)

        right_h = Text("PRESENT PERFECT", font="Segoe UI", font_size=22, weight=BOLD, color=ACCENT_GREEN).next_to(col_right.get_top(), DOWN, buff=0.3)
        right_form = Text("S + have / has + V3 (ed)", font="Segoe UI", font_size=20, weight=BOLD, color=TEXT_WHITE).next_to(right_h, DOWN, buff=0.25)
        right_ex1 = Text("• 'have lived'", font="Segoe UI", font_size=22, weight=BOLD, color=ACCENT_AMBER).next_to(right_form, DOWN, buff=0.25)
        right_ex2 = Text("• Bridge to the present", font="Segoe UI", font_size=17, weight=BOLD, color="#A7F3D0").next_to(right_ex1, DOWN, buff=0.2)
        right_ex3 = Text("• 'I have lost my keys.'\n  (I STILL don't have them!)", font="Segoe UI", font_size=16, color=TEXT_WHITE).next_to(right_ex2, DOWN, buff=0.25)
        right_group = VGroup(col_right, right_h, right_form, right_ex1, right_ex2, right_ex3)

        self.play(
            FadeIn(left_group, shift=RIGHT*0.3),
            FadeIn(right_group, shift=LEFT*0.3),
            run_time=1.6
        )
        self.wait(6.91) # Total ~ 9.31s

        self.play(
            FadeOut(comp_title),
            FadeOut(left_group),
            FadeOut(right_group),
            run_time=1.0
        )

        # -------------------------------------------------------------
        # SECTION 6: SUMMARY & OUTRO (8.52s)
        # -------------------------------------------------------------
        summary_card = RoundedRectangle(corner_radius=0.3, width=10.8, height=4.4, color=PRIMARY_BLUE, stroke_width=2.5, fill_color=CARD_BG, fill_opacity=0.98)
        summary_card.shift(UP * 0.2)

        sum_title = Text("GOLDEN RULE TO REMEMBER", font="Segoe UI", font_size=26, weight=BOLD, color=ACCENT_AMBER).next_to(summary_card.get_top(), DOWN, buff=0.4)
        
        rule_1 = Text("1. Specific time in the past? ➔ Use PAST SIMPLE (Finished)", font="Segoe UI", font_size=20, weight=BOLD, color=TEXT_WHITE).next_to(sum_title, DOWN, buff=0.45)
        rule_2 = Text("2. Still connected or impact on NOW? ➔ Use PRESENT PERFECT", font="Segoe UI", font_size=20, weight=BOLD, color=ACCENT_GREEN).next_to(rule_1, DOWN, buff=0.35)

        cta_badge = RoundedRectangle(corner_radius=0.2, width=8.0, height=0.8, color=ACCENT_AMBER, stroke_width=2, fill_color="#78350F", fill_opacity=0.9)
        cta_text = Text("Ready to test your skills? Open LingoQuest Quest Board!", font="Segoe UI", font_size=18, weight=BOLD, color=TEXT_WHITE)
        cta = VGroup(cta_badge, cta_text).next_to(rule_2, DOWN, buff=0.45)

        self.play(FadeIn(summary_card, scale=0.95), FadeIn(sum_title), run_time=1.0)
        self.play(Write(rule_1), run_time=1.2)
        self.play(Write(rule_2), run_time=1.2)
        self.play(FadeIn(cta, shift=UP*0.2), run_time=1.0)

        self.wait(4.12) # Total ~ 8.52s
