from manim import *

class TestScene(Scene):
    def construct(self):
        self.camera.background_color = "#0F172A"
        title = Text("LingoQuest Grammar", font_size=40, color="#38BDF8")
        self.play(Write(title))
        self.wait(1)
