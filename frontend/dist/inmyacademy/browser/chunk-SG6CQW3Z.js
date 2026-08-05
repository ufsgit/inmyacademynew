import {
  getTrackSlug
} from "./chunk-CEXANK6Z.js";
import {
  ActivatedRoute,
  DomSanitizer,
  Router,
  RouterModule
} from "./chunk-RK72NEAB.js";
import {
  HttpClient
} from "./chunk-PLXL2LZV.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-C72BQOBI.js";

// src/app/pages/learning-lessons/learning-lessons.component.ts
function LearningLessonsComponent_div_0_section_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 12)(1, "h3");
    \u0275\u0275text(2, "What You Will Learn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.track.what_will_i_learn);
  }
}
function LearningLessonsComponent_div_0_div_38_div_7_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "button", 22);
    \u0275\u0275listener("click", function LearningLessonsComponent_div_0_div_38_div_7_div_3_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const i_r4 = \u0275\u0275nextContext(2).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleVideoPreview(i_r4));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r4 = \u0275\u0275nextContext(2).index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.previewVideoIndex === i_r4 ? "Hide Video" : "Watch Video", " ");
  }
}
function LearningLessonsComponent_div_0_div_38_div_7_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "video", 24);
    \u0275\u0275listener("ended", function LearningLessonsComponent_div_0_div_38_div_7_div_4_Template_video_ended_1_listener() {
      \u0275\u0275restoreView(_r6);
      const i_r4 = \u0275\u0275nextContext(2).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onLessonVideoEnded(i_r4));
    })("error", function LearningLessonsComponent_div_0_div_38_div_7_div_4_Template_video_error_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const lesson_r7 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onVideoError($event, lesson_r7.video));
    });
    \u0275\u0275text(2, " Your browser does not support the video tag. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 25)(4, "a", 26);
    \u0275\u0275text(5, "Open video file");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const lesson_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", lesson_r7.video, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", lesson_r7.video, \u0275\u0275sanitizeUrl);
  }
}
function LearningLessonsComponent_div_0_div_38_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, LearningLessonsComponent_div_0_div_38_div_7_div_3_Template, 3, 1, "div", 19)(4, LearningLessonsComponent_div_0_div_38_div_7_div_4_Template, 6, 2, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    const lesson_r7 = ctx_r7.$implicit;
    const i_r4 = ctx_r7.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lesson_r7.syllabus || lesson_r7.description || "No lesson details available.");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", lesson_r7.video);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.previewVideoIndex === i_r4);
  }
}
function LearningLessonsComponent_div_0_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275listener("click", function LearningLessonsComponent_div_0_div_38_Template_div_click_1_listener() {
      const i_r4 = \u0275\u0275restoreView(_r3).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleLesson(i_r4));
    });
    \u0275\u0275elementStart(2, "div")(3, "span", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 16);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, LearningLessonsComponent_div_0_div_38_div_7_Template, 5, 3, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lesson_r7 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Lesson ", i_r4 + 1, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lesson_r7.title || "Lesson " + (i_r4 + 1));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.openLessonIndex === i_r4);
  }
}
function LearningLessonsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "button", 4);
    \u0275\u0275listener("click", function LearningLessonsComponent_div_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/courses"]));
    });
    \u0275\u0275text(3, "\u2190 Back to Dashboard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h1");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 5);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 6)(10, "div")(11, "p", 7);
    \u0275\u0275text(12, "Course Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "h2");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 8)(18, "p")(19, "strong");
    \u0275\u0275text(20, "Duration");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p")(23, "strong");
    \u0275\u0275text(24, "Lectures");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p")(27, "strong");
    \u0275\u0275text(28, "Level");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p")(31, "strong");
    \u0275\u0275text(32, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(34, LearningLessonsComponent_div_0_section_34_Template, 5, 1, "section", 9);
    \u0275\u0275elementStart(35, "section", 10)(36, "h3");
    \u0275\u0275text(37, "Lessons");
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, LearningLessonsComponent_div_0_div_38_Template, 8, 3, "div", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.track.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.track.description);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.courseProgress, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getProgressLabel());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(": ", ctx_r1.track.duration_hours || 0, " hours");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(": ", ctx_r1.getLessonCount(), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(": ", ctx_r1.track.level || "All Levels", "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(": ", ctx_r1.track.language || "English", "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.track.what_will_i_learn);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.track.lessons);
  }
}
function LearningLessonsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "p");
    \u0275\u0275text(2, "Course not found.");
    \u0275\u0275elementEnd()();
  }
}
function LearningLessonsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "p");
    \u0275\u0275text(2, "Loading learning page...");
    \u0275\u0275elementEnd()();
  }
}
var LearningLessonsComponent = class _LearningLessonsComponent {
  constructor(route, router, http, sanitizer) {
    this.route = route;
    this.router = router;
    this.http = http;
    this.sanitizer = sanitizer;
    this.slug = "";
    this.track = null;
    this.openLessonIndex = null;
    this.previewVideoIndex = null;
    this.isPurchased = false;
    this.watchedLessonIndices = [];
    this.courseProgress = 0;
    this.isLoading = true;
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.slug = params.get("slug") || "";
      this.loadTrack();
    });
  }
  getCurrentUserId() {
    return localStorage.getItem("openChallengeRegistrationDbId");
  }
  loadTrack() {
    this.isLoading = true;
    this.http.get("http://localhost:5001/api/courses").subscribe({
      next: (courses) => {
        this.track = courses.find((t) => getTrackSlug(t.title) === this.slug);
        if (this.track && typeof this.track.lessons === "string") {
          try {
            this.track.lessons = JSON.parse(this.track.lessons);
          } catch (e) {
            console.error("Failed to parse lessons JSON", e);
            this.track.lessons = [];
          }
        }
        this.loadTrackState();
        this.isLoading = false;
      },
      error: (err) => {
        console.error("Failed to fetch course details", err);
        this.isLoading = false;
      }
    });
  }
  getLessonCount() {
    if (!this.track) {
      return 0;
    }
    if (Array.isArray(this.track.lessons)) {
      return this.track.lessons.length;
    }
    if (typeof this.track.lessons === "string") {
      try {
        const parsed = JSON.parse(this.track.lessons);
        return Array.isArray(parsed) ? parsed.length : 0;
      } catch {
        return 0;
      }
    }
    return 0;
  }
  loadTrackState() {
    const userId = this.getCurrentUserId();
    this.isPurchased = Boolean(this.getPurchasedCourses(userId).includes(this.slug));
    this.watchedLessonIndices = this.getWatchedLessons(userId);
    this.updateCourseProgress();
  }
  getPurchasedCourses(userId) {
    if (!userId) {
      return [];
    }
    const raw = localStorage.getItem(`purchasedCourses-${userId}`);
    return raw ? JSON.parse(raw) : [];
  }
  getWatchedLessons(userId) {
    if (!userId) {
      return [];
    }
    const raw = localStorage.getItem(`watchedLessons-${userId}`);
    if (!raw) {
      return [];
    }
    const data = JSON.parse(raw);
    return Array.isArray(data?.[this.slug]) ? data[this.slug] : [];
  }
  saveWatchedLessons() {
    const userId = this.getCurrentUserId();
    if (!userId) {
      return;
    }
    const raw = localStorage.getItem(`watchedLessons-${userId}`);
    const data = raw ? JSON.parse(raw) : {};
    data[this.slug] = this.watchedLessonIndices;
    localStorage.setItem(`watchedLessons-${userId}`, JSON.stringify(data));
  }
  updateCourseProgress() {
    const totalLessons = this.getLessonCount();
    this.courseProgress = totalLessons > 0 ? Math.round(this.watchedLessonIndices.length / totalLessons * 100) : 0;
  }
  isLessonWatched(index) {
    return this.watchedLessonIndices.includes(index);
  }
  toggleLesson(index) {
    this.openLessonIndex = this.openLessonIndex === index ? null : index;
    if (this.openLessonIndex !== index) {
      this.previewVideoIndex = null;
    }
  }
  toggleVideoPreview(index) {
    this.previewVideoIndex = this.previewVideoIndex === index ? null : index;
  }
  markLessonAsWatched(index) {
    if (!this.isPurchased) {
      return;
    }
    if (!this.watchedLessonIndices.includes(index)) {
      this.watchedLessonIndices.push(index);
      this.saveWatchedLessons();
      this.updateCourseProgress();
    }
  }
  onLessonVideoEnded(index) {
    this.markLessonAsWatched(index);
  }
  getProgressLabel() {
    if (!this.isPurchased) {
      return "Not enrolled";
    }
    if (this.courseProgress === 100) {
      return "Completed";
    }
    if (this.courseProgress > 0) {
      return "In Progress";
    }
    return "Not started";
  }
  onVideoError(event, url) {
    console.error("Learning page video failed to load:", url, event);
  }
  sanitizeHtml(html) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  get backLink() {
    return ["/skillstorm/tracks", this.slug];
  }
  static {
    this.\u0275fac = function LearningLessonsComponent_Factory(t) {
      return new (t || _LearningLessonsComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(DomSanitizer));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LearningLessonsComponent, selectors: [["app-learning-lessons"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 3, consts: [["class", "learning-lessons-page", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], [1, "learning-lessons-page"], [1, "learning-header"], ["type", "button", 1, "back-btn", 3, "click"], [1, "subtitle"], [1, "learning-status"], [1, "progress-label"], [1, "course-summary"], ["class", "lesson-description", 4, "ngIf"], [1, "course-content"], ["class", "lesson-card", 4, "ngFor", "ngForOf"], [1, "lesson-description"], [1, "lesson-card"], [1, "lesson-header", 3, "click"], [1, "lesson-number"], [1, "lesson-title"], ["class", "lesson-body", 4, "ngIf"], [1, "lesson-body"], ["class", "video-actions", 4, "ngIf"], ["class", "video-player", 4, "ngIf"], [1, "video-actions"], ["type", "button", 1, "play-btn", 3, "click"], [1, "video-player"], ["controls", "", "preload", "metadata", "crossorigin", "anonymous", 2, "width", "100%", "max-height", "440px", "border-radius", "12px", "background", "#000", 3, "ended", "error", "src"], [1, "video-debug"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], [1, "loading-state"]], template: function LearningLessonsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, LearningLessonsComponent_div_0_Template, 39, 10, "div", 0)(1, LearningLessonsComponent_div_1_Template, 3, 0, "div", 1)(2, LearningLessonsComponent_div_2_Template, 3, 0, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.track);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && !ctx.track);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoading);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule], styles: ["\n\n.learning-lessons-page[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 32px 24px;\n}\n.learning-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 24px;\n  align-items: flex-start;\n  margin-bottom: 24px;\n}\n.learning-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 2.4rem;\n}\n.subtitle[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  color: #4b5563;\n}\n.back-btn[_ngcontent-%COMP%] {\n  padding: 12px 18px;\n  border: 1px solid #4b5563;\n  border-radius: 999px;\n  background: #fff;\n  cursor: pointer;\n}\n.learning-status[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 24px;\n  margin-bottom: 32px;\n  flex-wrap: wrap;\n}\n.course-summary[_ngcontent-%COMP%] {\n  min-width: 280px;\n  border: 1px solid #e5e7eb;\n  border-radius: 18px;\n  padding: 20px;\n  background: #fff;\n}\n.lesson-description[_ngcontent-%COMP%], .course-content[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e5e7eb;\n  padding: 24px;\n  margin-bottom: 24px;\n}\n.lesson-card[_ngcontent-%COMP%] {\n  border-top: 1px solid #e5e7eb;\n  padding: 18px 0;\n}\n.lesson-card[_ngcontent-%COMP%]:first-child {\n  border-top: none;\n}\n.lesson-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n  align-items: center;\n  cursor: pointer;\n}\n.lesson-number[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n  color: #6b7280;\n}\n.lesson-title[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 700;\n  margin-top: 4px;\n}\n.lesson-status[_ngcontent-%COMP%] {\n  color: #6366f1;\n  font-weight: 600;\n}\n.lesson-body[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.video-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-top: 16px;\n}\n.play-btn[_ngcontent-%COMP%], .watched-btn[_ngcontent-%COMP%] {\n  padding: 12px 18px;\n  border-radius: 12px;\n  border: none;\n  cursor: pointer;\n  background: #4f46e5;\n  color: #fff;\n  transition: background .2s ease;\n}\n.watched-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.loading-state[_ngcontent-%COMP%] {\n  padding: 32px;\n  text-align: center;\n}\n/*# sourceMappingURL=learning-lessons.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LearningLessonsComponent, { className: "LearningLessonsComponent", filePath: "src\\app\\pages\\learning-lessons\\learning-lessons.component.ts", lineNumber: 15 });
})();
export {
  LearningLessonsComponent
};
//# sourceMappingURL=chunk-SG6CQW3Z.js.map
