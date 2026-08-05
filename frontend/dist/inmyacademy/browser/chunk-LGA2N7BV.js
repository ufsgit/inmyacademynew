import {
  RegistrationFormComponent
} from "./chunk-5YUNPUHC.js";
import "./chunk-Z5MBKUDO.js";
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
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-C72BQOBI.js";

// src/app/pages/track-details/track-details.component.ts
function TrackDetailsComponent_Conditional_0_div_2_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "strong");
    \u0275\u0275text(3, "Course Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 25);
    \u0275\u0275element(7, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 27);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.getLessonProgressLabel());
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r2.courseProgress, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.courseProgress, "% complete");
  }
}
function TrackDetailsComponent_Conditional_0_div_2_h2_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 28);
    \u0275\u0275text(1, "Course Content");
    \u0275\u0275elementEnd();
  }
}
function TrackDetailsComponent_Conditional_0_div_2_div_24_div_1_div_6_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "button", 41);
    \u0275\u0275listener("click", function TrackDetailsComponent_Conditional_0_div_2_div_24_div_1_div_6_div_4_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const i_r5 = \u0275\u0275nextContext(2).index;
      const ctx_r2 = \u0275\u0275nextContext(4);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r2.toggleVideoPreview(i_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 42);
    \u0275\u0275element(3, "polygon", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Preview Video ");
    \u0275\u0275elementEnd()();
  }
}
function TrackDetailsComponent_Conditional_0_div_2_div_24_div_1_div_6_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "video", 45);
    \u0275\u0275listener("ended", function TrackDetailsComponent_Conditional_0_div_2_div_24_div_1_div_6_div_5_Template_video_ended_1_listener() {
      \u0275\u0275restoreView(_r7);
      const i_r5 = \u0275\u0275nextContext(2).index;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.onLessonVideoEnded(i_r5));
    });
    \u0275\u0275element(2, "source", 46);
    \u0275\u0275text(3, " Your browser does not support the video tag. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const lesson_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", lesson_r8.video, \u0275\u0275sanitizeUrl);
  }
}
function TrackDetailsComponent_Conditional_0_div_2_div_24_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 37);
    \u0275\u0275template(4, TrackDetailsComponent_Conditional_0_div_2_div_24_div_1_div_6_div_4_Template, 5, 0, "div", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, TrackDetailsComponent_Conditional_0_div_2_div_24_div_1_div_6_div_5_Template, 4, 1, "div", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r8 = \u0275\u0275nextContext();
    const lesson_r8 = ctx_r8.$implicit;
    const i_r5 = ctx_r8.index;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lesson_r8.syllabus || lesson_r8.description || "No details available for this topic.");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", lesson_r8.video);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.previewVideoIndex === i_r5);
  }
}
function TrackDetailsComponent_Conditional_0_div_2_div_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32);
    \u0275\u0275listener("click", function TrackDetailsComponent_Conditional_0_div_2_div_24_div_1_Template_div_click_1_listener() {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.toggleLesson(i_r5));
    });
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 33);
    \u0275\u0275element(5, "path", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, TrackDetailsComponent_Conditional_0_div_2_div_24_div_1_div_6_Template, 6, 3, "div", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lesson_r8 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275classProp("open", ctx_r2.openLessonIndex === i_r5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lesson_r8.title || "Topic " + (i_r5 + 1));
    \u0275\u0275advance();
    \u0275\u0275classProp("rotated", ctx_r2.openLessonIndex === i_r5);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.openLessonIndex === i_r5);
  }
}
function TrackDetailsComponent_Conditional_0_div_2_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275template(1, TrackDetailsComponent_Conditional_0_div_2_div_24_div_1_Template, 7, 6, "div", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.track.lessons);
  }
}
function TrackDetailsComponent_Conditional_0_div_2_h2_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 28);
    \u0275\u0275text(1, "What Will I Learn?");
    \u0275\u0275elementEnd();
  }
}
function TrackDetailsComponent_Conditional_0_div_2_p_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.track.what_will_i_learn, " ");
  }
}
function TrackDetailsComponent_Conditional_0_div_2_h2_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 28);
    \u0275\u0275text(1, "Target Audience");
    \u0275\u0275elementEnd();
  }
}
function TrackDetailsComponent_Conditional_0_div_2_p_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.track.target_audience, " ");
  }
}
function TrackDetailsComponent_Conditional_0_div_2_h2_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 28);
    \u0275\u0275text(1, "Materials Included");
    \u0275\u0275elementEnd();
  }
}
function TrackDetailsComponent_Conditional_0_div_2_p_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.track.materials_included, " ");
  }
}
function TrackDetailsComponent_Conditional_0_div_2_h2_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 28);
    \u0275\u0275text(1, "Requirements/Instructions");
    \u0275\u0275elementEnd();
  }
}
function TrackDetailsComponent_Conditional_0_div_2_p_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.track.requirements, " ");
  }
}
function TrackDetailsComponent_Conditional_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "button", 11);
    \u0275\u0275listener("click", function TrackDetailsComponent_Conditional_0_div_2_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goBack());
    });
    \u0275\u0275text(3, "\u2190 Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "div", 13);
    \u0275\u0275elementStart(7, "div", 14)(8, "div", 15)(9, "span", 16);
    \u0275\u0275text(10, "Phase 1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 17);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 15)(14, "span", 16);
    \u0275\u0275text(15, "Final");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 17);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 18)(19, "strong");
    \u0275\u0275text(20, "Extras:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, TrackDetailsComponent_Conditional_0_div_2_div_22_Template, 10, 4, "div", 19)(23, TrackDetailsComponent_Conditional_0_div_2_h2_23_Template, 2, 0, "h2", 20)(24, TrackDetailsComponent_Conditional_0_div_2_div_24_Template, 2, 1, "div", 21)(25, TrackDetailsComponent_Conditional_0_div_2_h2_25_Template, 2, 0, "h2", 20)(26, TrackDetailsComponent_Conditional_0_div_2_p_26_Template, 2, 1, "p", 22)(27, TrackDetailsComponent_Conditional_0_div_2_h2_27_Template, 2, 0, "h2", 20)(28, TrackDetailsComponent_Conditional_0_div_2_p_28_Template, 2, 1, "p", 22)(29, TrackDetailsComponent_Conditional_0_div_2_h2_29_Template, 2, 0, "h2", 20)(30, TrackDetailsComponent_Conditional_0_div_2_p_30_Template, 2, 1, "p", 22)(31, TrackDetailsComponent_Conditional_0_div_2_h2_31_Template, 2, 0, "h2", 20)(32, TrackDetailsComponent_Conditional_0_div_2_p_32_Template, 2, 1, "p", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.track.title);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r2.sanitizeHtml(ctx_r2.track.description), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.track.phase1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.track.final);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.track.extras, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.track);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.track.lessons && ctx_r2.track.lessons.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.track.lessons && ctx_r2.track.lessons.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.track.what_will_i_learn);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.track.what_will_i_learn);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.track.target_audience);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.track.target_audience);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.track.materials_included);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.track.materials_included);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.track.requirements);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.track.requirements);
  }
}
function TrackDetailsComponent_Conditional_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "p", 48);
    \u0275\u0275text(2, "Loading track details...");
    \u0275\u0275elementEnd()();
  }
}
function TrackDetailsComponent_Conditional_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 51);
    \u0275\u0275element(3, "circle", 52)(4, "polyline", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 54);
    \u0275\u0275text(6, "Duration:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 55);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 50);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 51);
    \u0275\u0275element(11, "path", 56)(12, "path", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "span", 54);
    \u0275\u0275text(14, "Lectures:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 55);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 50);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 51);
    \u0275\u0275element(19, "path", 58)(20, "line", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "span", 54);
    \u0275\u0275text(22, "Level:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 55);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 50);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 51);
    \u0275\u0275element(27, "circle", 52)(28, "line", 60)(29, "path", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(30, "span", 54);
    \u0275\u0275text(31, "Language:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 55);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 50);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(35, "svg", 51);
    \u0275\u0275element(36, "polygon", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(37, "span", 54);
    \u0275\u0275text(38, "Certificate:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 55);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r2.track.duration_hours || 0, " hours");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.track.lectures || 0);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.track.level || "All Levels");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.track.language || "English");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.track.certificate || "Yes");
  }
}
function TrackDetailsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275template(2, TrackDetailsComponent_Conditional_0_div_2_Template, 33, 16, "div", 2)(3, TrackDetailsComponent_Conditional_0_div_3_Template, 3, 0, "div", 2);
    \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "h3", 5);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 6);
    \u0275\u0275listener("click", function TrackDetailsComponent_Conditional_0_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.purchaseCourse());
    });
    \u0275\u0275text(9, "Enroll Now");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 7);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, TrackDetailsComponent_Conditional_0_div_12_Template, 41, 5, "div", 8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.track);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.track);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((ctx_r2.track == null ? null : ctx_r2.track.pricing) === "Free" ? "Free" : "Paid");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((ctx_r2.track == null ? null : ctx_r2.track.pricing) === "Free" ? "Free access this course" : "Premium course");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.track);
  }
}
function TrackDetailsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-registration-form", 63);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("entryFee", (ctx_r2.track == null ? null : ctx_r2.track.pricing) === "Free" ? 0 : 25)("challengeName", (ctx_r2.track == null ? null : ctx_r2.track.title) || "Course Registration");
  }
}
var TrackDetailsComponent = class _TrackDetailsComponent {
  constructor(route, router, http, sanitizer) {
    this.route = route;
    this.router = router;
    this.http = http;
    this.sanitizer = sanitizer;
    this.slug = "";
    this.track = null;
    this.openLessonIndex = null;
    this.previewVideoIndex = null;
    this.registerOnly = false;
    this.isPurchased = false;
    this.watchedLessonIndices = [];
    this.courseProgress = 0;
    this.isLoading = true;
  }
  ngOnInit() {
    this.route.queryParamMap.subscribe((qp) => {
      this.registerOnly = qp.get("register") === "true";
    });
    this.route.paramMap.subscribe((params) => {
      this.slug = params.get("slug") || "";
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
          this.openLessonIndex = null;
          this.loadTrackState();
          this.isLoading = false;
        },
        error: (err) => {
          console.error("Failed to fetch course details", err);
          this.isLoading = false;
        }
      });
    });
  }
  toggleLesson(index) {
    if (this.openLessonIndex === index) {
      this.openLessonIndex = null;
      this.previewVideoIndex = null;
    } else {
      this.openLessonIndex = index;
      this.previewVideoIndex = null;
    }
  }
  toggleVideoPreview(index) {
    if (this.previewVideoIndex === index) {
      this.previewVideoIndex = null;
    } else {
      this.previewVideoIndex = index;
    }
  }
  onLessonVideoEnded(index) {
    this.markLessonAsWatched(index);
  }
  getLessonProgressLabel() {
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
  getCurrentUserId() {
    return localStorage.getItem("openChallengeRegistrationDbId");
  }
  getPurchasedCourses() {
    const userId = this.getCurrentUserId();
    if (!userId) {
      return [];
    }
    const raw = localStorage.getItem(`purchasedCourses-${userId}`);
    return raw ? JSON.parse(raw) : [];
  }
  getWatchedLessons() {
    const userId = this.getCurrentUserId();
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
  loadTrackState() {
    this.isPurchased = this.getPurchasedCourses().includes(this.slug);
    this.watchedLessonIndices = this.getWatchedLessons();
    this.updateTrackProgress();
  }
  updateTrackProgress() {
    const totalLessons = Array.isArray(this.track?.lessons) ? this.track.lessons.length : 0;
    this.courseProgress = totalLessons > 0 ? Math.round(this.watchedLessonIndices.length / totalLessons * 100) : 0;
  }
  isLessonWatched(index) {
    return this.watchedLessonIndices.includes(index);
  }
  markLessonAsWatched(index) {
    if (!this.watchedLessonIndices.includes(index)) {
      this.watchedLessonIndices.push(index);
      this.saveWatchedLessons();
      this.updateTrackProgress();
    }
  }
  purchaseCourse() {
    const userId = this.getCurrentUserId();
    if (!userId) {
      console.warn("Cannot purchase course without a logged-in user");
      return;
    }
    const purchased = this.getPurchasedCourses();
    if (!purchased.includes(this.slug)) {
      purchased.push(this.slug);
      localStorage.setItem(`purchasedCourses-${userId}`, JSON.stringify(purchased));
    }
    this.loadTrackState();
    this.router.navigate([], { queryParams: { register: "true" } });
  }
  goBack() {
    window.history.back();
  }
  sanitizeHtml(html) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  static {
    this.\u0275fac = function TrackDetailsComponent_Factory(t) {
      return new (t || _TrackDetailsComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(DomSanitizer));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TrackDetailsComponent, selectors: [["app-track-details"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [[1, "track-details-page"], [1, "track-details-container"], ["class", "main-content", 4, "ngIf"], [1, "sidebar"], [1, "enroll-card"], [1, "price"], ["type", "button", 1, "enroll-btn", 3, "click"], [1, "access-note"], ["class", "details-card", 4, "ngIf"], [1, "main-content"], [1, "page-header"], ["type", "button", 1, "back-btn", 3, "click"], [1, "track-title"], [1, "track-description", 3, "innerHTML"], [1, "track-stages"], [1, "stage-card"], [1, "stage-badge"], [1, "stage-text"], [1, "extras-section"], ["class", "course-progress-card", 4, "ngIf"], ["class", "section-title", 4, "ngIf"], ["class", "accordion", "style", "margin-bottom: 24px;", 4, "ngIf"], ["class", "description", "style", "white-space: pre-wrap;", 4, "ngIf"], [1, "course-progress-card"], [1, "progress-label-row"], [1, "progress-bar-bg"], [1, "progress-bar-fill"], [1, "progress-text"], [1, "section-title"], [1, "accordion", 2, "margin-bottom", "24px"], ["class", "accordion-item-container", 4, "ngFor", "ngForOf"], [1, "accordion-item-container"], [1, "accordion-item", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "chevron"], ["d", "M9 18l6-6-6-6"], ["class", "accordion-content", 4, "ngIf"], [1, "accordion-content"], [1, "lesson-actions"], ["class", "lesson-video-action", 4, "ngIf"], ["class", "lesson-video-preview", 4, "ngIf"], [1, "lesson-video-action"], ["type", "button", 1, "video-icon-btn", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "video-icon-svg"], ["points", "5 3 19 12 5 21 5 3"], [1, "lesson-video-preview"], ["controls", "", 2, "width", "100%", "max-height", "400px", "border-radius", "12px", "background", "#000", 3, "ended"], ["type", "video/mp4", 3, "src"], [1, "description", 2, "white-space", "pre-wrap"], [1, "description"], [1, "details-card"], [1, "detail-row"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", 1, "detail-icon"], ["cx", "12", "cy", "12", "r", "10"], ["points", "12 6 12 12 16 14"], [1, "detail-label"], [1, "detail-value"], ["d", "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"], ["d", "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"], ["d", "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"], ["x1", "4", "y1", "22", "x2", "4", "y2", "15"], ["x1", "2", "y1", "12", "x2", "22", "y2", "12"], ["d", "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"], ["points", "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"], ["category", "Global Mastery Battles", 3, "entryFee", "challengeName"]], template: function TrackDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, TrackDetailsComponent_Conditional_0_Template, 13, 5, "div", 0)(1, TrackDetailsComponent_Conditional_1_Template, 1, 2);
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, !ctx.registerOnly ? 0 : 1);
      }
    }, dependencies: [RouterModule, CommonModule, NgForOf, NgIf, RegistrationFormComponent], styles: ['\n\n.track-details-page[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  min-height: 100vh;\n  padding-top: 32px;\n  padding-bottom: 40px;\n}\n.track-details-container[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 1200px;\n  margin: 0 auto;\n  gap: 40px;\n  padding: 0 24px;\n  font-family: "Kumbh Sans", sans-serif;\n  color: #333;\n  align-items: flex-start;\n}\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  margin-top: 20px;\n  margin-bottom: 24px;\n}\n.back-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid #2d3192;\n  color: #2d3192;\n  border-radius: 999px;\n  padding: 10px 18px;\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    background 0.2s ease,\n    color 0.2s ease,\n    transform 0.2s ease;\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  background: #2d3192;\n  color: #fff;\n  transform: translateY(-1px);\n}\n.track-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 32px;\n  font-weight: 700;\n  color: #2d3748;\n  flex: 1;\n  min-width: 220px;\n}\n.track-description[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 1.8;\n  color: #555;\n  margin-bottom: 32px;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 320px;\n  flex-shrink: 0;\n  align-self: flex-start;\n  position: sticky;\n  top: 24px;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 320px;\n  flex-shrink: 0;\n}\n.description[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 1.6;\n  color: #555;\n  margin-bottom: 40px;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #111;\n  margin-bottom: 20px;\n  margin-top: 40px;\n}\n.learning-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 16px;\n}\n.learning-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  font-size: 15px;\n  color: #333;\n  line-height: 1.5;\n}\n.check-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  color: #2D3192;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.accordion[_ngcontent-%COMP%] {\n  border: 1px solid #E5E7EB;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.accordion-item-container[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #E5E7EB;\n}\n.accordion-item-container[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.accordion-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 24px;\n  font-size: 15px;\n  font-weight: 600;\n  color: #333;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n.chevron[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  color: #666;\n  transition: transform 0.2s ease;\n}\n.chevron.rotated[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.accordion-content[_ngcontent-%COMP%] {\n  padding: 0 24px 16px 24px;\n  font-size: 14px;\n  color: #555;\n  line-height: 1.5;\n  background-color: #f9fafb;\n}\n.accordion-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n}\n.accordion-item.open[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n}\n.lesson-video-action[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n}\n.video-icon-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  background: #2d3192;\n  color: #fff;\n  border: none;\n  border-radius: 999px;\n  padding: 10px 18px;\n  cursor: pointer;\n  font-weight: 600;\n  transition: transform 0.2s ease, background 0.2s ease;\n}\n.video-icon-btn[_ngcontent-%COMP%]:hover {\n  background: #232673;\n  transform: translateY(-1px);\n}\n.video-icon-svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.lesson-video-preview[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  border: 1px solid #e5e7eb;\n  border-radius: 16px;\n  overflow: hidden;\n  background: #000;\n}\n.instructor-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n  border: 1px solid #E5E7EB;\n  border-radius: 8px;\n  width: max-content;\n}\n.instructor-avatar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  background-color: #6A67CE;\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  font-weight: 700;\n}\n.instructor-name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #111;\n}\n.enroll-card[_ngcontent-%COMP%] {\n  border: 1px solid #E5E7EB;\n  border-radius: 8px;\n  padding: 24px;\n  text-align: center;\n  margin-bottom: 24px;\n}\n.price[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #111;\n  margin: 0 0 20px 0;\n}\n.enroll-btn[_ngcontent-%COMP%] {\n  background-color: #2D3192;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  width: 100%;\n  padding: 14px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  margin-bottom: 12px;\n}\n.access-note[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #666;\n  margin: 0 0 24px 0;\n}\n.quick-stats[_ngcontent-%COMP%] {\n  border-top: 1px solid #E5E7EB;\n  padding-top: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  text-align: left;\n}\n.stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 14px;\n  color: #555;\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  color: #2CA99D;\n}\n.details-card[_ngcontent-%COMP%] {\n  border: 1px solid #E5E7EB;\n  border-radius: 8px;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n}\n.detail-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  color: #6A67CE;\n  margin-right: 12px;\n}\n.detail-label[_ngcontent-%COMP%] {\n  color: #666;\n  width: 100px;\n}\n.detail-value[_ngcontent-%COMP%] {\n  color: #111;\n  font-weight: 500;\n}\n@media (max-width: 900px) {\n  .track-details-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .sidebar[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.track-stages[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.stage-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  background: #f8fafc;\n  padding: 16px;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n}\n.stage-badge[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #475569;\n  padding: 4px 10px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.stage-text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: #334155;\n  line-height: 1.5;\n}\n.extras-section[_ngcontent-%COMP%] {\n  background: #fdf4ff;\n  border-left: 4px solid #d946ef;\n  padding: 16px;\n  border-radius: 0 8px 8px 0;\n  margin-bottom: 32px;\n  font-size: 14px;\n  color: #4a044e;\n}\n.extras-section[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #86198f;\n}\n/*# sourceMappingURL=track-details.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TrackDetailsComponent, { className: "TrackDetailsComponent", filePath: "src\\app\\pages\\track-details\\track-details.component.ts", lineNumber: 16 });
})();
export {
  TrackDetailsComponent
};
//# sourceMappingURL=chunk-LGA2N7BV.js.map
