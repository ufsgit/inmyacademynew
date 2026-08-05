import {
  getTrackSlug
} from "./chunk-CEXANK6Z.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-RK72NEAB.js";
import {
  HttpClient
} from "./chunk-PLXL2LZV.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  __spreadProps,
  __spreadValues,
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
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-C72BQOBI.js";

// src/app/pages/courses/courses.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ({ "detail-view": a0 });
function CoursesComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div")(2, "h1", 29);
    \u0275\u0275text(3, "Dashboard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 30);
    \u0275\u0275text(5, "Your course summary at a glance");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 31)(7, "div", 32)(8, "div", 33)(9, "p", 34);
    \u0275\u0275text(10, "Enrolled Courses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 35);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 36)(14, "div", 33)(15, "p", 34);
    \u0275\u0275text(16, "Active Courses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 35);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 37)(20, "div", 33)(21, "p", 34);
    \u0275\u0275text(22, "Completed Courses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p", 35);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r0.purchasedCourses.length);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.inProgressCount);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.completedCount);
  }
}
function CoursesComponent_Conditional_43_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "p");
    \u0275\u0275text(2, "Loading courses...");
    \u0275\u0275elementEnd()();
  }
}
function CoursesComponent_Conditional_43_Conditional_7_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42);
    \u0275\u0275element(2, "img", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 44)(4, "div", 45)(5, "div")(6, "h3", 46);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 47);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 48);
    \u0275\u0275element(11, "span")(12, "span")(13, "span");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 49)(15, "div", 50)(16, "span", 51);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 52);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 53);
    \u0275\u0275element(21, "div", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "button", 55);
    \u0275\u0275listener("click", function CoursesComponent_Conditional_43_Conditional_7_Conditional_0_For_2_Template_button_click_22_listener() {
      const course_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.goToCourse(course_r3));
    });
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const course_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", course_r3.image, \u0275\u0275sanitizeUrl)("alt", course_r3.title);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(course_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.getLessonCount(course_r3), " Lessons");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate2("", course_r3.completedCount || 0, " / ", ctx_r0.getLessonCount(course_r3), " Lessons Completed");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", course_r3.progress || 0, "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", course_r3.progress || 0, "%");
    \u0275\u0275advance();
    \u0275\u0275classProp("completed", course_r3.progress === 100);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", course_r3.progress === 100 ? "Review Course" : "Continue Learning", " ");
  }
}
function CoursesComponent_Conditional_43_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275repeaterCreate(1, CoursesComponent_Conditional_43_Conditional_7_Conditional_0_For_2_Template, 24, 12, "div", 41, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.purchasedCourses);
  }
}
function CoursesComponent_Conditional_43_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "p");
    \u0275\u0275text(2, "No enrolled courses yet. ");
    \u0275\u0275elementStart(3, "a", 56);
    \u0275\u0275text(4, "Enroll in a mastery course");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " to get started.");
    \u0275\u0275elementEnd()();
  }
}
function CoursesComponent_Conditional_43_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CoursesComponent_Conditional_43_Conditional_7_Conditional_0_Template, 3, 0, "div", 40)(1, CoursesComponent_Conditional_43_Conditional_7_Conditional_1_Template, 6, 0, "div", 39);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(0, ctx_r0.purchasedCourses.length > 0 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(1, ctx_r0.purchasedCourses.length === 0 && ctx_r0.activeTab === "enrolled" ? 1 : -1);
  }
}
function CoursesComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div")(2, "h1", 29);
    \u0275\u0275text(3, "My Courses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 30);
    \u0275\u0275text(5, "Continue your learning journey");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(6, CoursesComponent_Conditional_43_div_6_Template, 3, 0, "div", 38)(7, CoursesComponent_Conditional_43_Conditional_7_Template, 2, 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r0.isLoading);
    \u0275\u0275advance();
    \u0275\u0275conditional(7, !ctx_r0.isLoading ? 7 : -1);
  }
}
function CoursesComponent_Conditional_44_div_31_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 76);
    \u0275\u0275listener("click", function CoursesComponent_Conditional_44_div_31_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const i_r5 = \u0275\u0275nextContext().index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.markLessonAsWatched(i_r5));
    });
    \u0275\u0275text(1, " Mark as Watched ");
    \u0275\u0275elementEnd();
  }
}
function CoursesComponent_Conditional_44_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 70)(2, "p", 71);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 72);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 73)(7, "button", 74);
    \u0275\u0275listener("click", function CoursesComponent_Conditional_44_div_31_Template_button_click_7_listener() {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.watchLesson(i_r5));
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, CoursesComponent_Conditional_44_div_31_button_9_Template, 2, 0, "button", 75);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const lesson_r7 = ctx.$implicit;
    const i_r5 = ctx.index;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(lesson_r7.title || "Lesson " + (i_r5 + 1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lesson_r7.description || lesson_r7.syllabus || "No lesson details available.");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !lesson_r7.video || lesson_r7.completed);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", lesson_r7.completed ? "Watched" : "Watch", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !lesson_r7.completed);
  }
}
function CoursesComponent_Conditional_44_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 77)(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "video", 78);
    \u0275\u0275listener("ended", function CoursesComponent_Conditional_44_div_32_Template_video_ended_3_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onLessonVideoEnded(ctx_r0.selectedLessonVideoIndex));
    });
    \u0275\u0275text(4, " Your browser does not support video playback. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Playing: ", ctx_r0.selectedCourse.lessons[ctx_r0.selectedLessonVideoIndex].title || "Lesson " + (ctx_r0.selectedLessonVideoIndex + 1), "");
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.selectedCourse.lessons[ctx_r0.selectedLessonVideoIndex].video, \u0275\u0275sanitizeUrl);
  }
}
function CoursesComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 57)(2, "div", 58)(3, "h2", 59);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "p", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 61)(7, "div", 62)(8, "span", 63);
    \u0275\u0275text(9, "Course Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 64);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 62)(13, "span", 63);
    \u0275\u0275text(14, "Lectures");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 64);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 62)(18, "span", 63);
    \u0275\u0275text(19, "Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 64);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 62)(23, "span", 63);
    \u0275\u0275text(24, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 64);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 65)(28, "div", 66)(29, "h3");
    \u0275\u0275text(30, "Lessons");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(31, CoursesComponent_Conditional_44_div_31_Template, 10, 5, "div", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, CoursesComponent_Conditional_44_div_32_Template, 5, 2, "div", 68);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.selectedCourse.title);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r0.selectedCourse.description, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r0.selectedCourse.progress || 0, "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.selectedCourse.lessons == null ? null : ctx_r0.selectedCourse.lessons.length) || 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.selectedCourse.level || "All Levels");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.selectedCourse.language || "English");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r0.selectedCourse.lessons);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedLessonVideoIndex !== null);
  }
}
function CoursesComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div")(2, "h1", 29);
    \u0275\u0275text(3, "Order History");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 30);
    \u0275\u0275text(5, "Your past purchases and billing details");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 39)(7, "p");
    \u0275\u0275text(8, "No order history available yet.");
    \u0275\u0275elementEnd()();
  }
}
function CoursesComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div")(2, "h1", 29);
    \u0275\u0275text(3, "Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 30);
    \u0275\u0275text(5, "Recent alerts and updates");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 39)(7, "p");
    \u0275\u0275text(8, "No notifications available yet.");
    \u0275\u0275elementEnd()();
  }
}
function CoursesComponent_Conditional_47_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "p");
    \u0275\u0275text(2, "Loading profile...");
    \u0275\u0275elementEnd()();
  }
}
function CoursesComponent_Conditional_47_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "p");
    \u0275\u0275text(2, "No profile found. Please ");
    \u0275\u0275elementStart(3, "a", 56);
    \u0275\u0275text(4, "register for a course");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " first.");
    \u0275\u0275elementEnd()();
  }
}
function CoursesComponent_Conditional_47_Conditional_8_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84)(1, "span", 85);
    \u0275\u0275text(2, "Parent / Guardian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 86);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.profile.parent_name);
  }
}
function CoursesComponent_Conditional_47_Conditional_8_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84)(1, "span", 85);
    \u0275\u0275text(2, "Parent Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 86);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.profile.parent_email);
  }
}
function CoursesComponent_Conditional_47_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79)(1, "div", 80);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 81);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 82);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 83)(8, "div", 84)(9, "span", 85);
    \u0275\u0275text(10, "Age");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 86);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 84)(14, "span", 85);
    \u0275\u0275text(15, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 86);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 84)(19, "span", 85);
    \u0275\u0275text(20, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 86);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 84)(24, "span", 85);
    \u0275\u0275text(25, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 86);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(28, CoursesComponent_Conditional_47_Conditional_8_Conditional_28_Template, 5, 1, "div", 84)(29, CoursesComponent_Conditional_47_Conditional_8_Conditional_29_Template, 5, 1, "div", 84);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r0.profile.full_name == null ? null : (tmp_2_0 = ctx_r0.profile.full_name.charAt(0)) == null ? null : tmp_2_0.toUpperCase()) || "U");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.profile.full_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.profile.challenge_name);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.profile.age);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.profile.country);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.profile.city);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.profile.email);
    \u0275\u0275advance();
    \u0275\u0275conditional(28, ctx_r0.profile.parent_name ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(29, ctx_r0.profile.parent_email ? 29 : -1);
  }
}
function CoursesComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div")(2, "h1", 29);
    \u0275\u0275text(3, "Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 30);
    \u0275\u0275text(5, "Your account details");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(6, CoursesComponent_Conditional_47_Conditional_6_Template, 3, 0, "div", 39)(7, CoursesComponent_Conditional_47_Conditional_7_Template, 6, 0)(8, CoursesComponent_Conditional_47_Conditional_8_Template, 30, 9);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275conditional(6, ctx_r0.profileLoading ? 6 : !ctx_r0.profile ? 7 : 8);
  }
}
var CoursesComponent = class _CoursesComponent {
  constructor(http, route, router) {
    this.http = http;
    this.route = route;
    this.router = router;
    this.courses = [];
    this.isLoading = true;
    this.activeTab = "enrolled";
    this.selectedCourse = null;
    this.purchasedCourseSlugs = [];
    this.courseWatchedLessons = {};
    this.profile = null;
    this.profileLoading = false;
    this.selectedLessonVideoIndex = null;
  }
  ngOnInit() {
    this.loadPurchasedCourses();
    this.route.queryParamMap.subscribe((params) => {
      const tab = params.get("tab");
      if (tab === "enrolled") {
        this.activeTab = "enrolled";
      } else if (tab === "profile") {
        this.activeTab = "profile";
        this.loadProfile();
      } else if (tab === "dashboard") {
        this.activeTab = "enrolled";
      } else if (tab === "all") {
        this.activeTab = "all";
      } else {
        this.activeTab = "enrolled";
      }
    });
    this.fetchCourses();
  }
  loadPurchasedCourses() {
    const userId = this.getCurrentUserId();
    if (!userId) {
      this.purchasedCourseSlugs = [];
      this.courseWatchedLessons = {};
      return;
    }
    const raw = localStorage.getItem(`purchasedCourses-${userId}`);
    this.purchasedCourseSlugs = raw ? JSON.parse(raw) : [];
    const watchedRaw = localStorage.getItem(`watchedLessons-${userId}`);
    this.courseWatchedLessons = watchedRaw ? JSON.parse(watchedRaw) : {};
  }
  getCurrentUserId() {
    return localStorage.getItem("openChallengeRegistrationDbId");
  }
  parseLessons(lessons) {
    if (Array.isArray(lessons)) {
      return lessons;
    }
    if (typeof lessons === "string") {
      try {
        const parsed = JSON.parse(lessons);
        return Array.isArray(parsed) ? parsed : [];
      } catch {
        return [];
      }
    }
    return [];
  }
  getLessonCount(course) {
    return course.lectures || 0;
  }
  getCompletedLessonCount(course) {
    return this.parseLessons(course.lessons).filter((lesson) => lesson?.completed).length;
  }
  getFirstLessonVideo(course) {
    const lessons = this.parseLessons(course.lessons);
    const lessonWithVideo = lessons.find((lesson) => lesson?.video);
    return lessonWithVideo ? lessonWithVideo.video : null;
  }
  watchLesson(index) {
    if (!this.selectedCourse) {
      return;
    }
    const lesson = this.selectedCourse.lessons?.[index];
    if (!lesson?.video) {
      return;
    }
    this.selectedLessonVideoIndex = index;
  }
  mapCourse(course) {
    const slug = getTrackSlug(course.title);
    const watchedLessons = Array.isArray(this.courseWatchedLessons[slug]) ? this.courseWatchedLessons[slug] : [];
    const lessonCount = this.getLessonCount(course);
    const completedLessons = watchedLessons.length;
    const progress = lessonCount > 0 ? Math.round(completedLessons / lessonCount * 100) : 0;
    const lessonsArray = this.parseLessons(course.lessons);
    const firstLessonVideo = this.getFirstLessonVideo(course);
    return __spreadProps(__spreadValues({}, course), {
      slug,
      image: course.image || "assets/course-placeholder.jpg",
      isPurchased: this.purchasedCourseSlugs.includes(slug),
      completedCount: completedLessons,
      progress,
      lessons: lessonsArray,
      firstLessonVideo
    });
  }
  sortCourses() {
    this.courses = [...this.courses].sort((a, b) => Number(b.isPurchased) - Number(a.isPurchased));
  }
  playLessonVideo(index) {
    if (!this.selectedCourse?.lessons?.[index]?.video) {
      return;
    }
    this.selectedLessonVideoIndex = index;
  }
  onLessonVideoEnded(index) {
    if (this.selectedLessonVideoIndex === index) {
      this.selectedLessonVideoIndex = null;
    }
  }
  markLessonAsWatched(index) {
    const lesson = this.selectedCourse?.lessons?.[index];
    if (!lesson || lesson.completed) {
      return;
    }
    lesson.completed = true;
    const watchedLessons = this.courseWatchedLessons[this.selectedCourse.slug] || [];
    if (!watchedLessons.includes(index)) {
      watchedLessons.push(index);
      this.courseWatchedLessons[this.selectedCourse.slug] = watchedLessons;
      const userId = this.getCurrentUserId();
      if (userId) {
        localStorage.setItem(`watchedLessons-${userId}`, JSON.stringify(this.courseWatchedLessons));
      }
    }
    this.selectedCourse.completedCount = this.getCompletedLessonCount(this.selectedCourse);
    this.selectedCourse.progress = this.selectedCourse.lessons?.length ? Math.round(this.selectedCourse.completedCount / this.selectedCourse.lessons.length * 100) : 0;
    this.courses = this.courses.map((course) => course.slug === this.selectedCourse.slug ? this.selectedCourse : course);
  }
  get displayedCourses() {
    return this.activeTab === "enrolled" ? this.courses.filter((course) => course.isPurchased) : this.courses;
  }
  get purchasedCourses() {
    return this.courses.filter((c) => c.isPurchased);
  }
  get lockedCourses() {
    return this.courses.filter((c) => !c.isPurchased);
  }
  get inProgressCount() {
    return this.purchasedCourses.filter((c) => c.progress > 0 && c.progress < 100).length;
  }
  get completedCount() {
    return this.purchasedCourses.filter((c) => c.progress === 100).length;
  }
  selectTab(tab) {
    this.activeTab = tab;
    if (tab !== "courseDetail") {
      this.selectedCourse = null;
    }
    if (tab === "profile") {
      this.loadProfile();
    }
  }
  goToCourse(course) {
    this.selectedCourse = course;
    this.activeTab = "courseDetail";
  }
  backToCourses() {
    this.selectedCourse = null;
    this.activeTab = "enrolled";
  }
  onCourseVideoError(event, url) {
    console.error("Course dashboard video failed to load:", url, event);
  }
  loadProfile() {
    const dbId = localStorage.getItem("openChallengeRegistrationDbId");
    if (!dbId)
      return;
    this.profileLoading = true;
    this.http.get(`http://localhost:5001/api/challenges/registration/${dbId}`).subscribe({
      next: (data) => {
        this.profile = data;
        this.profileLoading = false;
      },
      error: () => {
        this.profileLoading = false;
      }
    });
  }
  stripHtml(html) {
    if (!html)
      return "";
    return html.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").trim();
  }
  fetchCourses() {
    this.http.get("http://localhost:5001/api/courses").subscribe({
      next: (data) => {
        this.courses = data.map((course) => this.mapCourse(course));
        this.sortCourses();
        this.isLoading = false;
      },
      error: (err) => {
        console.error("Failed to fetch courses:", err);
        this.isLoading = false;
        this.courses = [];
      }
    });
  }
  static {
    this.\u0275fac = function CoursesComponent_Factory(t) {
      return new (t || _CoursesComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CoursesComponent, selectors: [["app-courses"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 48, vars: 19, consts: [[1, "courses-page"], [1, "container"], [1, "courses-dashboard"], [1, "sidebar"], [1, "sidebar-nav"], [1, "sidebar-link", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M3 13h8V3H3v10z"], ["d", "M13 21h8v-6h-8v6z"], ["d", "M13 13h8V3h-8v10z"], ["d", "M3 21h8v-4H3v4z"], ["d", "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"], ["d", "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"], ["d", "M3 6h18"], ["d", "M3 10h18"], ["d", "M7 18h10"], ["d", "M7 14h6"], ["d", "M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"], ["d", "M13.73 21a2 2 0 0 1-3.46 0"], [1, "sidebar-divider"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], ["routerLink", "/", 1, "sidebar-link"], ["d", "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"], ["points", "16 17 21 12 16 7"], ["x1", "21", "y1", "12", "x2", "9", "y2", "12"], [1, "content-area", 3, "ngClass"], [1, "course-detail-card"], [1, "content-header"], [1, "content-title"], [1, "content-subtitle"], [1, "dashboard-boxes"], [1, "stat-card", "stat-purple"], [1, "stat-info"], [1, "stat-label"], [1, "stat-value"], [1, "stat-card", "stat-blue"], [1, "stat-card", "stat-green"], ["class", "status-block", 4, "ngIf"], [1, "status-block"], [1, "course-grid"], [1, "course-card"], [1, "course-card-image"], [3, "src", "alt"], [1, "course-card-body"], [1, "course-card-top-row"], [1, "course-card-title"], [1, "course-card-lessons"], ["type", "button", "aria-label", "Menu", 1, "course-card-menu"], [1, "course-card-progress-info"], [1, "course-progress-bar-top"], [1, "course-progress-text"], [1, "course-progress-number"], [1, "course-progress-bar"], [1, "course-progress-bar-fill"], ["type", "button", 1, "course-card-btn", 3, "click"], ["routerLink", "/skillstorm/mastery-battles", 2, "color", "#7c3aed", "font-weight", "700"], [1, "course-detail-header"], [1, "course-detail-info"], [1, "course-detail-title"], [1, "course-detail-text", 3, "innerHTML"], [1, "course-detail-stat-grid"], [1, "course-detail-stat-card"], [1, "course-meta-label"], [1, "course-meta-value"], [1, "lesson-list"], [1, "lesson-list-header"], ["class", "lesson-item", 4, "ngFor", "ngForOf"], ["class", "lesson-video-preview", 4, "ngIf"], [1, "lesson-item"], [1, "lesson-item-content"], [1, "lesson-title"], [1, "lesson-description"], [1, "lesson-actions"], ["type", "button", 1, "watch-btn", 3, "click", "disabled"], ["type", "button", "class", "mark-watched-btn", 3, "click", 4, "ngIf"], ["type", "button", 1, "mark-watched-btn", 3, "click"], [1, "lesson-video-preview"], ["controls", "", "autoplay", "", 1, "preview-video", 3, "ended", "src"], [1, "profile-card"], [1, "profile-avatar"], [1, "profile-name"], [1, "profile-challenge"], [1, "profile-fields"], [1, "profile-field"], [1, "field-label"], [1, "field-value"]], template: function CoursesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "aside", 3)(4, "nav", 4)(5, "button", 5);
        \u0275\u0275listener("click", function CoursesComponent_Template_button_click_5_listener() {
          return ctx.selectTab("dashboard");
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(6, "svg", 6);
        \u0275\u0275element(7, "path", 7)(8, "path", 8)(9, "path", 9)(10, "path", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, " Dashboard ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(12, "button", 5);
        \u0275\u0275listener("click", function CoursesComponent_Template_button_click_12_listener() {
          return ctx.selectTab("enrolled");
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(13, "svg", 6);
        \u0275\u0275element(14, "path", 11)(15, "path", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, " Enrolled Courses ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(17, "button", 5);
        \u0275\u0275listener("click", function CoursesComponent_Template_button_click_17_listener() {
          return ctx.selectTab("orders");
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(18, "svg", 6);
        \u0275\u0275element(19, "path", 13)(20, "path", 14)(21, "path", 15)(22, "path", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275text(23, " Order History ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(24, "button", 5);
        \u0275\u0275listener("click", function CoursesComponent_Template_button_click_24_listener() {
          return ctx.selectTab("notifications");
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(25, "svg", 6);
        \u0275\u0275element(26, "path", 17)(27, "path", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275text(28, " Notifications ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(29, "div", 19);
        \u0275\u0275elementStart(30, "button", 5);
        \u0275\u0275listener("click", function CoursesComponent_Template_button_click_30_listener() {
          return ctx.selectTab("profile");
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(31, "svg", 6);
        \u0275\u0275element(32, "path", 20)(33, "circle", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275text(34, " Profile ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(35, "a", 22);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(36, "svg", 6);
        \u0275\u0275element(37, "path", 23)(38, "polyline", 24)(39, "line", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275text(40, " Logout ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(41, "section", 26);
        \u0275\u0275template(42, CoursesComponent_Conditional_42_Template, 25, 3)(43, CoursesComponent_Conditional_43_Template, 8, 2)(44, CoursesComponent_Conditional_44_Template, 33, 8, "div", 27)(45, CoursesComponent_Conditional_45_Template, 9, 0)(46, CoursesComponent_Conditional_46_Template, 9, 0)(47, CoursesComponent_Conditional_47_Template, 9, 1);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275classProp("active", ctx.activeTab === "dashboard");
        \u0275\u0275advance(7);
        \u0275\u0275classProp("active", ctx.activeTab === "enrolled");
        \u0275\u0275advance(5);
        \u0275\u0275classProp("active", ctx.activeTab === "orders");
        \u0275\u0275advance(7);
        \u0275\u0275classProp("active", ctx.activeTab === "notifications");
        \u0275\u0275advance(6);
        \u0275\u0275classProp("active", ctx.activeTab === "profile");
        \u0275\u0275advance(11);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(17, _c0, ctx.activeTab === "courseDetail"));
        \u0275\u0275advance();
        \u0275\u0275conditional(42, ctx.activeTab === "dashboard" ? 42 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(43, ctx.activeTab === "all" || ctx.activeTab === "enrolled" ? 43 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(44, ctx.activeTab === "courseDetail" && ctx.selectedCourse ? 44 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(45, ctx.activeTab === "orders" ? 45 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(46, ctx.activeTab === "notifications" ? 46 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(47, ctx.activeTab === "profile" ? 47 : -1);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterModule, RouterLink], styles: ['\n\n.courses-page[_ngcontent-%COMP%] {\n  font-family:\n    "Gilmer",\n    "DM Sans",\n    "Poppins",\n    sans-serif;\n  background-color: #f4f5fb;\n  min-height: 100vh;\n  padding: 40px 0;\n}\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: none;\n  margin: 0;\n  padding: 0 24px;\n}\n.courses-dashboard[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 260px 1fr;\n  gap: 28px;\n  align-items: start;\n}\n.sidebar[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 28px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  position: sticky;\n  top: 24px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);\n}\n.sidebar-brand[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  align-items: center;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.brand-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #2d3192);\n  color: #fff;\n  border-radius: 14px;\n  display: grid;\n  place-items: center;\n  font-weight: 800;\n  font-size: 16px;\n}\n.brand-title[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  margin: 0;\n  color: #111;\n}\n.brand-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9ca3af;\n  margin: 3px 0 0 0;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.sidebar-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #f0f0f0;\n  margin: 10px 0;\n}\n.sidebar-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  box-sizing: border-box;\n  width: 100%;\n  text-align: left;\n  border: none;\n  background: transparent;\n  color: #6b7280;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 11px 14px;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  text-decoration: none;\n  font-family:\n    "Poppins",\n    "Inter",\n    sans-serif;\n}\n.sidebar-link[_ngcontent-%COMP%]:hover {\n  background: #f4f5fb;\n  color: #7c3aed;\n}\n.sidebar-link.active[_ngcontent-%COMP%] {\n  background: #7c3aed;\n  color: #ffffff;\n}\n.content-area[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 36px 36px 48px 36px;\n  box-shadow: 0 8px 30px rgba(15, 23, 42, 0.06);\n  border: 1px solid #eef2f7;\n}\n.content-area.detail-view[_ngcontent-%COMP%] {\n  padding: 32px;\n  box-shadow: 0 8px 30px rgba(15, 23, 42, 0.06);\n  border: 1px solid #eef2f7;\n  background: #ffffff;\n}\n.content-area.detail-view[_ngcontent-%COMP%]   .course-detail-card[_ngcontent-%COMP%] {\n  border-radius: 0;\n  box-shadow: none;\n  border: none;\n  background: transparent;\n  padding: 0;\n  gap: 24px;\n}\n.content-header[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.content-title[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 800;\n  color: #111827;\n  margin: 0 0 4px 0;\n}\n.content-title[_ngcontent-%COMP%], .course-detail-title[_ngcontent-%COMP%], .course-card-title[_ngcontent-%COMP%] {\n  font-family:\n    "Gilmer",\n    "DM Sans",\n    "Poppins",\n    sans-serif;\n}\n.content-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #9ca3af;\n  margin: 0;\n}\n.status-block[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 0;\n  color: #6b7280;\n  font-size: 16px;\n}\n.section-label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  margin: 0 0 16px 0;\n}\n.purchased-label[_ngcontent-%COMP%] {\n  color: #7c3aed;\n}\n.other-label[_ngcontent-%COMP%] {\n  color: #111827;\n}\n.course-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 280px);\n  justify-content: start;\n  gap: 24px;\n  margin-bottom: 32px;\n}\n.dashboard-boxes[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 18px;\n  margin-bottom: 32px;\n}\n.dashboard-boxes[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%] {\n  padding: 26px 22px;\n}\n.course-card[_ngcontent-%COMP%] {\n  width: 280px;\n  display: flex;\n  flex-direction: column;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 15px;\n  overflow: hidden;\n  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.course-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);\n}\n.course-card-image[_ngcontent-%COMP%] {\n  position: relative;\n  height: 180px;\n  overflow: hidden;\n}\n.course-card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n.course-card[_ngcontent-%COMP%]:hover   .course-card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.03);\n}\n.course-card-image-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 16px 16px auto auto;\n  display: flex;\n  justify-content: space-between;\n  width: calc(100% - 32px);\n  pointer-events: none;\n}\n.course-status-pill[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 999px;\n  font-size: 9px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #ffffff;\n  white-space: nowrap;\n  box-shadow: 0 8px 16px rgba(15, 23, 42, 0.12);\n  pointer-events: none;\n}\n.course-status-pill.in-progress[_ngcontent-%COMP%] {\n  background: #7c3aed;\n}\n.course-status-pill.completed[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.course-progress-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 5px 10px;\n  min-width: 44px;\n  border-radius: 999px;\n  font-size: 11px;\n  font-weight: 700;\n  color: #111827;\n  background: #ffffff;\n  box-shadow: 0 8px 16px rgba(15, 23, 42, 0.12);\n  border: 1px solid rgba(17, 24, 39, 0.08);\n  pointer-events: none;\n}\n.course-card-body[_ngcontent-%COMP%] {\n  padding: 18px 18px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  flex: 1;\n}\n.course-card-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  margin: 0;\n  color: #111827;\n  line-height: 1.3;\n}\n.course-card-lessons[_ngcontent-%COMP%] {\n  margin: 6px 0 0 0;\n  font-size: 13px;\n  font-weight: 600;\n  color: #4b5563;\n}\n.course-card-progress-info[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n}\n.course-progress-bar-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n}\n.course-progress-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #6b7280;\n}\n.course-progress-number[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #111827;\n}\n.course-progress-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 5px;\n  background: #eef2ff;\n  border-radius: 999px;\n  overflow: hidden;\n}\n.course-progress-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 0;\n  background:\n    linear-gradient(\n      90deg,\n      #7c3aed,\n      #5b21b6);\n  border-radius: 999px;\n  transition: width 0.4s ease;\n}\n.progress-heading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 12px;\n  font-weight: 700;\n  color: #6b7280;\n}\n.course-progress-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 5px;\n  background: #f3f4f6;\n  border-radius: 999px;\n  overflow: hidden;\n}\n.course-progress-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 0;\n  background:\n    linear-gradient(\n      90deg,\n      #7c3aed,\n      #4f46e5);\n  border-radius: 999px;\n  transition: width 0.4s ease;\n}\n.course-card-btn[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 10px;\n  padding: 10px 14px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  transition:\n    transform 0.15s ease,\n    background 0.15s ease,\n    color 0.15s ease;\n  line-height: 1;\n}\n.course-card-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.course-card-btn.completed[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #10b981;\n  border: 1px solid #10b981;\n}\n.course-card-btn[_ngcontent-%COMP%]:not(.completed) {\n  background: #7c3aed;\n  color: #ffffff;\n}\n.course-detail-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.course-detail-intro[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.course-detail-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.course-detail-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.course-detail-stat-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n}\n.course-detail-stat-card[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e5e7eb;\n  border-radius: 16px;\n  padding: 18px 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n}\n.course-meta-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n}\n.course-meta-value[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #111827;\n}\n.course-detail-title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 800;\n  margin: 0;\n  color: #111827;\n}\n.course-detail-text[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #4b5563;\n  line-height: 1.8;\n  margin: 0;\n}\n.lesson-list[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e5e7eb;\n  border-radius: 20px;\n  padding: 24px;\n}\n.lesson-list-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e5e7eb;\n  padding-bottom: 16px;\n  margin-bottom: 18px;\n}\n.lesson-list-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 700;\n  color: #111827;\n}\n.lesson-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 20px;\n  padding: 20px 0;\n  border-bottom: 1px solid #e5e7eb;\n}\n.lesson-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.lesson-item-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.lesson-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n.watch-btn[_ngcontent-%COMP%], .mark-watched-btn[_ngcontent-%COMP%] {\n  border: 1px solid transparent;\n  border-radius: 999px;\n  padding: 10px 18px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  transition:\n    background 0.2s ease,\n    color 0.2s ease,\n    border-color 0.2s ease;\n}\n.watch-btn[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #4b46e5;\n  border-color: #c7d2fe;\n}\n.watch-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.mark-watched-btn[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #6b7280;\n  border-color: #e5e7eb;\n}\n.lesson-video-preview[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.lesson-video-preview[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: #111827;\n}\n.preview-video[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 20px;\n  border: 1px solid #e5e7eb;\n  background: #000;\n}\n.course-meta-item[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e5e7eb;\n  border-radius: 14px;\n  padding: 12px 14px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.course-meta-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n}\n.course-meta-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #111827;\n}\n.course-detail-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 800;\n  margin: 0;\n  color: #111827;\n}\n.course-detail-text[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #4b5563;\n  line-height: 1.8;\n  margin: 0;\n}\n.lesson-list[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e5e7eb;\n  border-radius: 20px;\n  padding: 24px;\n}\n.lesson-list-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e5e7eb;\n  padding-bottom: 16px;\n  margin-bottom: 18px;\n}\n.lesson-list-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 700;\n  color: #111827;\n}\n.lesson-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 0;\n  border-bottom: 1px solid #e5e7eb;\n}\n.lesson-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.lesson-item-content[_ngcontent-%COMP%] {\n  max-width: calc(100% - 240px);\n}\n.lesson-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.watch-btn[_ngcontent-%COMP%], .mark-watched-btn[_ngcontent-%COMP%], .lesson-status-btn[_ngcontent-%COMP%] {\n  min-width: 108px;\n  padding: 10px 16px;\n  border-radius: 999px;\n  border: 1px solid #d1d5db;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background 0.2s ease, border-color 0.2s ease;\n}\n.watch-btn[_ngcontent-%COMP%] {\n  background: #eef2ff;\n  color: #4338ca;\n}\n.watch-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.mark-watched-btn[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #0f172a;\n}\n.lesson-video-preview[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  padding: 18px 20px;\n  border: 1px solid #e5e7eb;\n  border-radius: 20px;\n  background: #ffffff;\n}\n.preview-video[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 420px;\n  border-radius: 14px;\n  margin-top: 14px;\n}\n.lesson-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  margin: 0 0 6px 0;\n  color: #111827;\n}\n.lesson-description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  margin: 0;\n  line-height: 1.7;\n}\n.lesson-status-btn[_ngcontent-%COMP%] {\n  min-width: 124px;\n  padding: 10px 16px;\n  border-radius: 999px;\n  border: 1px solid #d1d5db;\n  background: #f8f9ff;\n  color: #4338ca;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: default;\n  white-space: nowrap;\n  text-transform: none;\n  box-shadow: inset 0 0 0 1px rgba(99, 102, 241, 0.08);\n}\n.lesson-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 0;\n  border-bottom: 1px solid #e5e7eb;\n}\n.horizontal-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 16px;\n  overflow: hidden;\n  padding: 0;\n  margin-bottom: 16px;\n  transition: box-shadow 0.2s ease;\n}\n.horizontal-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 28px rgba(124, 58, 237, 0.12);\n}\n.horizontal-card-image[_ngcontent-%COMP%] {\n  position: relative;\n  flex-shrink: 0;\n  width: 200px;\n  height: 140px;\n  overflow: hidden;\n}\n.horizontal-card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.badge-purchased[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  background: #7c3aed;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.horizontal-card-body[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 20px 0;\n}\n.hcard-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 6px 0;\n}\n.hcard-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  line-height: 1.6;\n  margin: 0 0 12px 0;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.hcard-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 18px;\n  margin-bottom: 14px;\n}\n.meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 13px;\n  color: #6b7280;\n  font-weight: 500;\n}\n.hcard-progress[_ngcontent-%COMP%] {\n  max-width: 320px;\n}\n.progress-label[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n  font-weight: 600;\n  color: #6b7280;\n  margin-bottom: 6px;\n}\n.progress-bar-bg[_ngcontent-%COMP%] {\n  height: 6px;\n  background: #e5e7eb;\n  border-radius: 999px;\n  overflow: hidden;\n}\n.progress-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #7c3aed,\n      #4f46e5);\n  border-radius: 999px;\n  transition: width 0.4s ease;\n}\n.hcard-action[_ngcontent-%COMP%] {\n  padding: 0 28px 0 0;\n  flex-shrink: 0;\n}\n.continue-btn[_ngcontent-%COMP%] {\n  background: #7c3aed;\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  padding: 12px 22px;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background 0.2s ease;\n  font-family:\n    "Poppins",\n    "Inter",\n    sans-serif;\n}\n.continue-btn[_ngcontent-%COMP%]:hover {\n  background: #6d28d9;\n}\n.locked-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 20px;\n}\n.locked-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 16px;\n  overflow: hidden;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.locked-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.08);\n}\n.locked-card-image[_ngcontent-%COMP%] {\n  position: relative;\n  height: 140px;\n  overflow: hidden;\n}\n.locked-card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  filter: brightness(0.8);\n}\n.badge-locked[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 8px;\n  left: 8px;\n  background: rgba(0, 0, 0, 0.55);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 20px;\n  letter-spacing: 0.04em;\n}\n.locked-card-body[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.locked-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 6px 0;\n  line-height: 1.4;\n}\n.locked-lessons[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n  margin: 0 0 12px 0;\n}\n.locked-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #f3f4f6;\n  color: #6b7280;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: not-allowed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  font-family:\n    "Poppins",\n    "Inter",\n    sans-serif;\n}\n.stats-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  padding: 20px 24px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  cursor: pointer;\n  transition: opacity 0.2s ease;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.stat-purple[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #5b21b6);\n}\n.stat-blue[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0ea5e9,\n      #0284c7);\n}\n.stat-green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #059669);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  background: rgba(255, 255, 255, 0.25);\n  border-radius: 12px;\n  display: grid;\n  place-items: center;\n  color: #fff;\n  flex-shrink: 0;\n}\n.stat-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.85);\n  margin: 0 0 4px 0;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 800;\n  color: #fff;\n  margin: 0;\n  line-height: 1;\n}\n.stat-arrow[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n  flex-shrink: 0;\n}\n.profile-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 32px 24px;\n}\n.profile-avatar[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #2d3192);\n  color: #fff;\n  font-size: 32px;\n  font-weight: 800;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  margin-bottom: 8px;\n}\n.profile-name[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #111827;\n  margin: 0;\n}\n.profile-challenge[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #7c3aed;\n  font-weight: 600;\n  margin: 0 0 24px 0;\n  text-align: center;\n}\n.profile-fields[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 520px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.profile-field[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 14px 20px;\n}\n.field-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.field-value[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #111827;\n}\n@media (max-width: 1024px) {\n  .courses-dashboard[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .sidebar[_ngcontent-%COMP%] {\n    position: static;\n  }\n  .stats-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 640px) {\n  .horizontal-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .horizontal-card-image[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 180px;\n  }\n  .horizontal-card-body[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .hcard-action[_ngcontent-%COMP%] {\n    padding: 0 16px 16px;\n  }\n  .continue-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=courses.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CoursesComponent, { className: "CoursesComponent", filePath: "src\\app\\pages\\courses\\courses.component.ts", lineNumber: 14 });
})();
export {
  CoursesComponent
};
//# sourceMappingURL=chunk-ZTRB4LCD.js.map
