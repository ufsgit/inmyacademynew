import {
  OPEN_CHALLENGES
} from "./chunk-7KHVYY66.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-I5HLQJ4G.js";
import {
  Router
} from "./chunk-25CH7CJK.js";
import {
  DomSanitizer
} from "./chunk-FHQOC34G.js";
import {
  environment
} from "./chunk-NTES7WD5.js";
import {
  HttpClient
} from "./chunk-QGS4RBVK.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf,
  SlicePipe,
  TitleCasePipe,
  __spreadValues,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-EW7BAGJT.js";

// src/app/pages/admin-dashboard/admin-dashboard.component.ts
var _c0 = ["editorRef"];
var _c1 = ["lessonVideoUploadInput"];
var _c2 = (a0, a1, a2) => ({ "challenge-badge": a0, "school-badge": a1, "individual-badge": a2 });
function AdminDashboardComponent_div_98_div_1_tr_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 86);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "span", 87);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const reg_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", reg_r1.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(reg_r1.full_name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(reg_r1.challenge_name || "N/A");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(reg_r1.category || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 5, reg_r1.created_at, "mediumDate"));
  }
}
function AdminDashboardComponent_div_98_div_1_tr_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 88);
    \u0275\u0275text(2, "No registrations found.");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_div_98_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 65)(2, "div", 66)(3, "div", 67);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 68);
    \u0275\u0275element(5, "path", 16)(6, "polyline", 17)(7, "line", 18)(8, "line", 19)(9, "polyline", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "div", 69)(11, "h3");
    \u0275\u0275text(12, "Total Registrations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 70)(14, "p", 71);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 72);
    \u0275\u0275text(17, "\u2191 +14%");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(18, "div", 66)(19, "div", 73);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 68);
    \u0275\u0275element(21, "path", 21)(22, "circle", 22)(23, "path", 23)(24, "path", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(25, "div", 69)(26, "h3");
    \u0275\u0275text(27, "System Users");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 70)(29, "p", 71);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 74);
    \u0275\u0275text(32, "Active");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(33, "div", 66)(34, "div", 75);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(35, "svg", 68);
    \u0275\u0275element(36, "path", 76)(37, "path", 77)(38, "path", 78)(39, "path", 79)(40, "path", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(41, "div", 69)(42, "h3");
    \u0275\u0275text(43, "Active Challenges");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 70)(45, "p", 71);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span", 72);
    \u0275\u0275text(48, "Live");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(49, "div", 81)(50, "h2");
    \u0275\u0275text(51, "Recent Registrations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 82)(53, "table", 83)(54, "thead")(55, "tr")(56, "th");
    \u0275\u0275text(57, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "th");
    \u0275\u0275text(59, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "th");
    \u0275\u0275text(61, "Challenge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "th");
    \u0275\u0275text(63, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "th");
    \u0275\u0275text(65, "Date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(66, "tbody");
    \u0275\u0275template(67, AdminDashboardComponent_div_98_div_1_tr_67_Template, 14, 8, "tr", 84);
    \u0275\u0275pipe(68, "slice");
    \u0275\u0275template(69, AdminDashboardComponent_div_98_div_1_tr_69_Template, 3, 0, "tr", 85);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate(ctx_r1.stats.totalRegistrations);
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate(ctx_r1.stats.totalUsers);
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate(ctx_r1.stats.totalChallenges);
    \u0275\u0275advance(21);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(68, 5, ctx_r1.registrations, 0, 5));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.registrations.length === 0);
  }
}
function AdminDashboardComponent_div_98_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 92)(1, "button", 93);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_2_div_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setTypeFilter("all"));
    });
    \u0275\u0275text(2, " All Registrations ");
    \u0275\u0275elementStart(3, "span", 94);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 93);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_2_div_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setTypeFilter("school"));
    });
    \u0275\u0275text(6, " School Registrations ");
    \u0275\u0275elementStart(7, "span", 95);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 93);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_2_div_1_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setTypeFilter("individual"));
    });
    \u0275\u0275text(10, " Individual Registrations ");
    \u0275\u0275elementStart(11, "span", 96);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.selectedTypeFilter === "all");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.registrationsCount.all);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.selectedTypeFilter === "school");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.registrationsCount.school);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.selectedTypeFilter === "individual");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.registrationsCount.individual);
  }
}
function AdminDashboardComponent_div_98_div_2_div_2_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 99)(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span", 100);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 101);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "div", 99)(15, "span", 86);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 102);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td")(23, "div", 103)(24, "button", 104);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_2_div_2_tr_17_Template_button_click_24_listener() {
      const reg_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.viewParticipant(reg_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 105);
    \u0275\u0275element(26, "path", 106)(27, "circle", 107);
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " View ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(29, "button", 108);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_2_div_2_tr_17_Template_button_click_29_listener() {
      const reg_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.deleteParticipant(reg_r5.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(30, "svg", 105);
    \u0275\u0275element(31, "polyline", 109)(32, "path", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275text(33, " Delete ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const reg_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", reg_r5.id, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", reg_r5.full_name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", reg_r5.registration_type === "school" ? "school-badge" : "individual-badge");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", reg_r5.registration_type === "school" ? "School" : "Individual", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", reg_r5.email, " ", reg_r5.registration_type === "individual" ? "\u2022 Age " + reg_r5.age : "", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", reg_r5.city, ", ", reg_r5.country, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(reg_r5.challenge_name || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(reg_r5.category || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 11, reg_r5.created_at, "mediumDate"));
  }
}
function AdminDashboardComponent_div_98_div_2_div_2_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 111);
    \u0275\u0275text(2, "No registrations found for the selected type.");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_div_98_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97)(1, "table", 98)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Participant Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Challenge & Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Date Joined");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275template(17, AdminDashboardComponent_div_98_div_2_div_2_tr_17_Template, 34, 14, "tr", 84)(18, AdminDashboardComponent_div_98_div_2_div_2_tr_18_Template, 3, 0, "tr", 85);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r1.filteredRegistrations);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredRegistrations.length === 0);
  }
}
function AdminDashboardComponent_div_98_div_2_div_3__svg_svg_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 163);
    \u0275\u0275element(1, "path", 164);
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_div_98_div_2_div_3__svg_svg_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 163);
    \u0275\u0275element(1, "path", 165)(2, "circle", 166);
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_div_98_div_2_div_3_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 167);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedParticipant.category, " ");
  }
}
function AdminDashboardComponent_div_98_div_2_div_3_span_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 133);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 134);
    \u0275\u0275element(2, "path", 168)(3, "circle", 169);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate3("", ctx_r1.selectedParticipant.city, "", ctx_r1.selectedParticipant.city && ctx_r1.selectedParticipant.country ? ", " : "", "", ctx_r1.selectedParticipant.country, "");
  }
}
function AdminDashboardComponent_div_98_div_2_div_3_span_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 133);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 134);
    \u0275\u0275element(2, "circle", 170)(3, "polyline", 171);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Age: ", ctx_r1.selectedParticipant.age, " years");
  }
}
function AdminDashboardComponent_div_98_div_2_div_3_a_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 172);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("href", "mailto:" + ctx_r1.selectedParticipant.parent_email, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedParticipant.parent_email, " ");
  }
}
function AdminDashboardComponent_div_98_div_2_div_3_span_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Not Provided");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_div_98_div_2_div_3_div_101__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 175);
    \u0275\u0275element(1, "polyline", 176);
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_div_98_div_2_div_3_div_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 150)(1, "span", 151);
    \u0275\u0275text(2, "Parental Consent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 173);
    \u0275\u0275template(4, AdminDashboardComponent_div_98_div_2_div_3_div_101__svg_svg_4_Template, 2, 0, "svg", 174);
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.selectedParticipant.parent_consent ? "consent-yes" : "consent-pending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedParticipant.parent_consent);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedParticipant.parent_consent ? "Consent Granted" : "Pending Approval");
  }
}
function AdminDashboardComponent_div_98_div_2_div_3_div_102_div_44_div_4_li_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 202)(1, "span", 203);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong", 204);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const member_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r7.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r7.name);
  }
}
function AdminDashboardComponent_div_98_div_2_div_3_div_102_div_44_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 196)(1, "div", 197)(2, "span", 198);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 199);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ul", 200);
    \u0275\u0275template(7, AdminDashboardComponent_div_98_div_2_div_3_div_102_div_44_div_4_li_7_Template, 5, 2, "li", 201);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const team_r8 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(team_r8.teamName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", team_r8.members.length, " Member(s)");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", team_r8.members);
  }
}
function AdminDashboardComponent_div_98_div_2_div_3_div_102_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 192)(1, "h4", 193);
    \u0275\u0275text(2, "Student Team Rosters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 194);
    \u0275\u0275template(4, AdminDashboardComponent_div_98_div_2_div_3_div_102_div_44_div_4_Template, 8, 3, "div", 195);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.getGroupedTeams(ctx_r1.selectedParticipant.parsedTeams.studentNames));
  }
}
function AdminDashboardComponent_div_98_div_2_div_3_div_102_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 205)(1, "p");
    \u0275\u0275text(2, "No student names have been submitted for this school's teams yet.");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_div_98_div_2_div_3_div_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 177)(1, "div", 145)(2, "div", 178);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 147);
    \u0275\u0275element(4, "path", 21)(5, "circle", 22)(6, "circle", 179)(7, "path", 180);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 181)(9, "h3");
    \u0275\u0275text(10, "Registered Competition Teams");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 182);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 183)(14, "div", 184)(15, "div", 185)(16, "span", 186);
    \u0275\u0275text(17, "Trailblazers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 187);
    \u0275\u0275text(19, "Age \u2264 10");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 188);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 189);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 184)(25, "div", 185)(26, "span", 186);
    \u0275\u0275text(27, "Visioneers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 187);
    \u0275\u0275text(29, "Age 11\u201314");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 188);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 189);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 184)(35, "div", 185)(36, "span", 186);
    \u0275\u0275text(37, "Strategists");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 187);
    \u0275\u0275text(39, "Age 15\u201319");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 188);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 189);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(44, AdminDashboardComponent_div_98_div_2_div_3_div_102_div_44_Template, 5, 1, "div", 190)(45, AdminDashboardComponent_div_98_div_2_div_3_div_102_div_45_Template, 3, 0, "div", 191);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.selectedParticipant.parsedTeams.trailblazersCount || 0) + (ctx_r1.selectedParticipant.parsedTeams.visioneersCount || 0) + (ctx_r1.selectedParticipant.parsedTeams.strategistsCount || 0), " Total Team(s) ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("has-teams", ctx_r1.selectedParticipant.parsedTeams.trailblazersCount > 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.selectedParticipant.parsedTeams.trailblazersCount || 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Capacity: ", (ctx_r1.selectedParticipant.parsedTeams.trailblazersCount || 0) * 5, " students");
    \u0275\u0275advance();
    \u0275\u0275classProp("has-teams", ctx_r1.selectedParticipant.parsedTeams.visioneersCount > 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.selectedParticipant.parsedTeams.visioneersCount || 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Capacity: ", (ctx_r1.selectedParticipant.parsedTeams.visioneersCount || 0) * 5, " students");
    \u0275\u0275advance();
    \u0275\u0275classProp("has-teams", ctx_r1.selectedParticipant.parsedTeams.strategistsCount > 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.selectedParticipant.parsedTeams.strategistsCount || 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Capacity: ", (ctx_r1.selectedParticipant.parsedTeams.strategistsCount || 0) * 5, " students");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedParticipant.parsedTeams.studentNames && ctx_r1.objectKeys(ctx_r1.selectedParticipant.parsedTeams.studentNames).length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.selectedParticipant.parsedTeams.studentNames || ctx_r1.objectKeys(ctx_r1.selectedParticipant.parsedTeams.studentNames).length === 0);
  }
}
function AdminDashboardComponent_div_98_div_2_div_3_div_103_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 215)(1, "span", 216);
    \u0275\u0275text(2, "Participant's Statement / Summary:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "blockquote", 217);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1('"', ctx_r1.selectedParticipant.summary, '"');
  }
}
function AdminDashboardComponent_div_98_div_2_div_3_div_103_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 218)(1, "div", 219);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 43);
    \u0275\u0275element(3, "polygon", 220)(4, "rect", 221);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "Uploaded Video Submission");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 222)(8, "video", 223);
    \u0275\u0275element(9, "source", 224);
    \u0275\u0275text(10, " Your browser does not support the video tag. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "a", 225);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 134);
    \u0275\u0275element(13, "path", 226)(14, "polyline", 227)(15, "line", 228);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "Open / Download Video");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(9);
    \u0275\u0275property("src", ctx_r1.getMediaUrl(ctx_r1.selectedParticipant.video_path), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", ctx_r1.getMediaUrl(ctx_r1.selectedParticipant.video_path), \u0275\u0275sanitizeUrl);
  }
}
function AdminDashboardComponent_div_98_div_2_div_3_div_103_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 218)(1, "div", 219);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 43);
    \u0275\u0275element(3, "rect", 229)(4, "circle", 230)(5, "polyline", 231);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "Poster / Cover Image");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 232);
    \u0275\u0275element(9, "img", 233);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 225);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 134);
    \u0275\u0275element(12, "path", 226)(13, "polyline", 227)(14, "line", 228);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "Open / Download Image");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(9);
    \u0275\u0275property("src", ctx_r1.getMediaUrl(ctx_r1.selectedParticipant.poster_path), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r1.getMediaUrl(ctx_r1.selectedParticipant.poster_path), \u0275\u0275sanitizeUrl);
  }
}
function AdminDashboardComponent_div_98_div_2_div_3_div_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 177)(1, "div", 145)(2, "div", 206);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 147);
    \u0275\u0275element(4, "rect", 207)(5, "line", 208)(6, "line", 209)(7, "line", 210);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "h3");
    \u0275\u0275text(9, "Entry Details & Attachments");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 211);
    \u0275\u0275template(11, AdminDashboardComponent_div_98_div_2_div_3_div_103_div_11_Template, 5, 1, "div", 212);
    \u0275\u0275elementStart(12, "div", 213);
    \u0275\u0275template(13, AdminDashboardComponent_div_98_div_2_div_3_div_103_div_13_Template, 18, 2, "div", 214)(14, AdminDashboardComponent_div_98_div_2_div_3_div_103_div_14_Template, 17, 2, "div", 214);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx_r1.selectedParticipant.summary);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.selectedParticipant.video_path);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedParticipant.poster_path);
  }
}
function AdminDashboardComponent_div_98_div_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 112)(1, "div", 113)(2, "button", 114);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_2_div_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 115);
    \u0275\u0275element(4, "line", 116)(5, "polyline", 117);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "Back to Registrations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 118)(9, "span", 119);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 120);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_2_div_3_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteParticipant(ctx_r1.selectedParticipant.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 121);
    \u0275\u0275element(13, "polyline", 109)(14, "path", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "Delete");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 122);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_2_div_3_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(18, "\xD7");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 123)(20, "div", 124)(21, "div", 125);
    \u0275\u0275template(22, AdminDashboardComponent_div_98_div_2_div_3__svg_svg_22_Template, 2, 0, "svg", 126)(23, AdminDashboardComponent_div_98_div_2_div_3__svg_svg_23_Template, 3, 0, "svg", 126);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 127)(25, "div", 128)(26, "h2", 129);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 130);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, AdminDashboardComponent_div_98_div_2_div_3_span_30_Template, 2, 1, "span", 131);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 132)(32, "span", 133);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(33, "svg", 134);
    \u0275\u0275element(34, "path", 135)(35, "polyline", 136);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(36, "a", 137);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(38, AdminDashboardComponent_div_98_div_2_div_3_span_38_Template, 6, 3, "span", 138);
    \u0275\u0275elementStart(39, "span", 133);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(40, "svg", 134);
    \u0275\u0275element(41, "rect", 139)(42, "line", 140)(43, "line", 141)(44, "line", 142);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(45, "span");
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(48, AdminDashboardComponent_div_98_div_2_div_3_span_48_Template, 6, 1, "span", 138);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(49, "div", 143)(50, "div", 144)(51, "div", 145)(52, "div", 146);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(53, "svg", 147);
    \u0275\u0275element(54, "path", 148);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(55, "h3");
    \u0275\u0275text(56, "Challenge & Program Details");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 149)(58, "div", 150)(59, "span", 151);
    \u0275\u0275text(60, "Registered Challenge / Track");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "p", 152);
    \u0275\u0275text(62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 150)(64, "span", 151);
    \u0275\u0275text(65, "Competition Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "p", 153);
    \u0275\u0275text(67);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 150)(69, "span", 151);
    \u0275\u0275text(70, "Location (City, Country)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "p", 153);
    \u0275\u0275text(72);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 150)(74, "span", 151);
    \u0275\u0275text(75, "Date & Time Joined");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "p", 153);
    \u0275\u0275text(77);
    \u0275\u0275pipe(78, "date");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(79, "div", 144)(80, "div", 145)(81, "div", 154);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(82, "svg", 147);
    \u0275\u0275element(83, "path", 21)(84, "circle", 22)(85, "path", 23)(86, "path", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(87, "h3");
    \u0275\u0275text(88);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "div", 149)(90, "div", 150)(91, "span", 151);
    \u0275\u0275text(92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "p", 153);
    \u0275\u0275text(94);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "div", 150)(96, "span", 151);
    \u0275\u0275text(97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "p", 153);
    \u0275\u0275template(99, AdminDashboardComponent_div_98_div_2_div_3_a_99_Template, 2, 2, "a", 155)(100, AdminDashboardComponent_div_98_div_2_div_3_span_100_Template, 2, 0, "span", 85);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(101, AdminDashboardComponent_div_98_div_2_div_3_div_101_Template, 7, 3, "div", 156);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(102, AdminDashboardComponent_div_98_div_2_div_3_div_102_Template, 46, 15, "div", 157)(103, AdminDashboardComponent_div_98_div_2_div_3_div_103_Template, 15, 3, "div", 157);
    \u0275\u0275elementStart(104, "div", 158)(105, "button", 159);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_2_div_3_Template_button_click_105_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(106, "svg", 160);
    \u0275\u0275element(107, "line", 116)(108, "polyline", 117);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(109, "span");
    \u0275\u0275text(110, "Back to Registrations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(111, "button", 161);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_2_div_3_Template_button_click_111_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteParticipant(ctx_r1.selectedParticipant.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(112, "svg", 162);
    \u0275\u0275element(113, "polyline", 109)(114, "path", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(115, "span");
    \u0275\u0275text(116, "Delete Registration");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("Entry #", ctx_r1.selectedParticipant.id, "");
    \u0275\u0275advance(11);
    \u0275\u0275property("ngClass", ctx_r1.selectedParticipant.registration_type === "school" ? "school-avatar" : "individual-avatar");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedParticipant.registration_type === "school");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedParticipant.registration_type !== "school");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedParticipant.full_name);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.selectedParticipant.registration_type === "school" ? "school-pill" : "individual-pill");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedParticipant.registration_type === "school" ? "School Registration" : "Individual Registration", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedParticipant.category);
    \u0275\u0275advance(6);
    \u0275\u0275property("href", "mailto:" + ctx_r1.selectedParticipant.email, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.selectedParticipant.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedParticipant.city || ctx_r1.selectedParticipant.country);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("Registered ", \u0275\u0275pipeBind2(47, 27, ctx_r1.selectedParticipant.created_at, "medium"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.selectedParticipant.registration_type === "individual" && ctx_r1.selectedParticipant.age);
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r1.selectedParticipant.challenge_name || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedParticipant.category || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.selectedParticipant.city || "-", ", ", ctx_r1.selectedParticipant.country || "-", "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(78, 30, ctx_r1.selectedParticipant.created_at, "medium"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.selectedParticipant.registration_type === "school" ? "Coordinator Information" : "Parent / Guardian Information");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedParticipant.registration_type === "school" ? "Coordinator Name" : "Parent / Guardian Name");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedParticipant.parent_name || "Not Provided");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedParticipant.registration_type === "school" ? "Coordinator Email" : "Parent / Guardian Email");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.selectedParticipant.parent_email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.selectedParticipant.parent_email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedParticipant.registration_type === "individual");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedParticipant.registration_type === "school" && ctx_r1.selectedParticipant.parsedTeams);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedParticipant.video_path || ctx_r1.selectedParticipant.summary || ctx_r1.selectedParticipant.poster_path);
  }
}
function AdminDashboardComponent_div_98_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275template(1, AdminDashboardComponent_div_98_div_2_div_1_Template, 13, 9, "div", 89)(2, AdminDashboardComponent_div_98_div_2_div_2_Template, 19, 2, "div", 90)(3, AdminDashboardComponent_div_98_div_2_div_3_Template, 117, 33, "div", 91);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.selectedParticipant);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.selectedParticipant);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedParticipant);
  }
}
function AdminDashboardComponent_div_98_div_3_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 99)(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 101);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td")(10, "span", 86);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td")(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "a", 234);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td")(22, "div", 103)(23, "a", 235);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 105);
    \u0275\u0275element(25, "path", 236)(26, "polyline", 237)(27, "line", 238);
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " Download ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(29, "button", 239);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_3_tr_20_Template_button_click_29_listener() {
      const proj_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteModuleProject(proj_r10.id));
    });
    \u0275\u0275text(30, " Delete ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const proj_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", proj_r10.id, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(proj_r10.user_name || "Participant");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(proj_r10.user_email || "User ID: " + proj_r10.user_id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(proj_r10.course_title || "N/A");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(proj_r10.module_name || "Module");
    \u0275\u0275advance(2);
    \u0275\u0275property("href", proj_r10.file_path, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", proj_r10.file_name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 9, proj_r10.submitted_at, "medium"));
    \u0275\u0275advance(4);
    \u0275\u0275property("href", proj_r10.file_path, \u0275\u0275sanitizeUrl);
  }
}
function AdminDashboardComponent_div_98_div_3_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 240);
    \u0275\u0275text(2, "No module project submissions found.");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_div_98_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 82)(2, "table", 98)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Student");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Course");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Module");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "File Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Submitted Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275template(20, AdminDashboardComponent_div_98_div_3_tr_20_Template, 31, 12, "tr", 84)(21, AdminDashboardComponent_div_98_div_3_tr_21_Template, 3, 0, "tr", 85);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", ctx_r1.moduleProjects);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.moduleProjects.length === 0);
  }
}
function AdminDashboardComponent_div_98_div_4_div_15_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 255);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const course_r13 = ctx.$implicit;
    \u0275\u0275property("value", course_r13.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(course_r13.title);
  }
}
function AdminDashboardComponent_div_98_div_4_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 244);
    \u0275\u0275text(2, "Select Mastery Course *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 245);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_98_div_4_div_15_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.docUploadForm.courseId, $event) || (ctx_r1.docUploadForm.courseId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(4, "option", 253);
    \u0275\u0275text(5, "-- Choose Course --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AdminDashboardComponent_div_98_div_4_div_15_option_6_Template, 2, 2, "option", 254);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.docUploadForm.courseId);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.courses);
  }
}
function AdminDashboardComponent_div_98_div_4_div_16_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 255);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const challenge_r15 = ctx.$implicit;
    \u0275\u0275property("value", challenge_r15.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(challenge_r15.title);
  }
}
function AdminDashboardComponent_div_98_div_4_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 244);
    \u0275\u0275text(2, "Select Challenge *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 245);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_98_div_4_div_16_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.docUploadForm.courseId, $event) || (ctx_r1.docUploadForm.courseId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(4, "option", 253);
    \u0275\u0275text(5, "-- Choose Challenge --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AdminDashboardComponent_div_98_div_4_div_16_option_6_Template, 2, 2, "option", 254);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.docUploadForm.courseId);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.openChallenges);
  }
}
function AdminDashboardComponent_div_98_div_4_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 244);
    \u0275\u0275text(2, "Select Plan *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 245);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_98_div_4_div_17_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.docUploadForm.courseId, $event) || (ctx_r1.docUploadForm.courseId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(4, "option", 253);
    \u0275\u0275text(5, "-- Choose Plan --");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 256);
    \u0275\u0275text(7, "Single Team");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 257);
    \u0275\u0275text(9, "Full Set");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 258);
    \u0275\u0275text(11, "Additional Team");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.docUploadForm.courseId);
  }
}
function AdminDashboardComponent_div_98_div_4_div_18_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 255);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mod_r18 = ctx.$implicit;
    const i_r19 = ctx.index;
    \u0275\u0275property("value", mod_r18.title ? mod_r18.title.replace("Lesson", "Module") : "Module " + (i_r19 + 1));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", mod_r18.title ? mod_r18.title.replace("Lesson", "Module") : "Module " + (i_r19 + 1), " ");
  }
}
function AdminDashboardComponent_div_98_div_4_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 244);
    \u0275\u0275text(2, "Select Module *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 245);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_98_div_4_div_18_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.docUploadForm.moduleName, $event) || (ctx_r1.docUploadForm.moduleName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(4, "option", 253);
    \u0275\u0275text(5, "-- Choose Module --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AdminDashboardComponent_div_98_div_4_div_18_option_6_Template, 2, 2, "option", 254);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.docUploadForm.moduleName);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.getSelectedCourseModules());
  }
}
function AdminDashboardComponent_div_98_div_4_tr_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 87);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td")(12, "a", 234);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "div", 103)(19, "a", 235);
    \u0275\u0275text(20, " Download ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 239);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_4_tr_50_Template_button_click_21_listener() {
      const doc_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteAdminDocument(doc_r21.id));
    });
    \u0275\u0275text(22, " Delete ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const doc_r21 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", doc_r21.id, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(doc_r21.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(doc_r21.course_title || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(doc_r21.module_name || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("href", doc_r21.file_path, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", doc_r21.title || doc_r21.file_name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 8, doc_r21.uploaded_at, "medium"));
    \u0275\u0275advance(4);
    \u0275\u0275property("href", doc_r21.file_path, \u0275\u0275sanitizeUrl);
  }
}
function AdminDashboardComponent_div_98_div_4_tr_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 240);
    \u0275\u0275text(2, "No uploaded documents found.");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_div_98_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 241)(2, "h3", 242);
    \u0275\u0275text(3, "Upload New Document");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 243)(5, "div")(6, "label", 244);
    \u0275\u0275text(7, "Category *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "select", 245);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_98_div_4_Template_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.docUploadForm.category, $event) || (ctx_r1.docUploadForm.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(9, "option", 246);
    \u0275\u0275text(10, "Open Challenges");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 247);
    \u0275\u0275text(12, "Mastery Battles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 248);
    \u0275\u0275text(14, "School Competitions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(15, AdminDashboardComponent_div_98_div_4_div_15_Template, 7, 2, "div", 85)(16, AdminDashboardComponent_div_98_div_4_div_16_Template, 7, 2, "div", 85)(17, AdminDashboardComponent_div_98_div_4_div_17_Template, 12, 1, "div", 85)(18, AdminDashboardComponent_div_98_div_4_div_18_Template, 7, 2, "div", 85);
    \u0275\u0275elementStart(19, "div")(20, "label", 244);
    \u0275\u0275text(21, "Document Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 249);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_98_div_4_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.docUploadForm.title, $event) || (ctx_r1.docUploadForm.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div")(24, "label", 244);
    \u0275\u0275text(25, "Select Document File *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 250);
    \u0275\u0275listener("change", function AdminDashboardComponent_div_98_div_4_Template_input_change_26_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDocFileSelected($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "button", 251);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_4_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.uploadAdminDocument());
    });
    \u0275\u0275text(28, " Upload Document ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 82)(30, "h3", 252);
    \u0275\u0275text(31, "Uploaded Admin Documents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "table", 98)(33, "thead")(34, "tr")(35, "th");
    \u0275\u0275text(36, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th");
    \u0275\u0275text(38, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "th");
    \u0275\u0275text(40, "Course / Track");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "th");
    \u0275\u0275text(42, "Module");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "th");
    \u0275\u0275text(44, "Title / File Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "th");
    \u0275\u0275text(46, "Uploaded Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "th");
    \u0275\u0275text(48, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "tbody");
    \u0275\u0275template(50, AdminDashboardComponent_div_98_div_4_tr_50_Template, 23, 11, "tr", 84)(51, AdminDashboardComponent_div_98_div_4_tr_51_Template, 3, 0, "tr", 85);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.docUploadForm.category);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.docUploadForm.category === "Mastery Battles");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.docUploadForm.category === "Open Challenges");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.docUploadForm.category === "School Competitions");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.docUploadForm.category === "Mastery Battles" && ctx_r1.docUploadForm.courseId);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.docUploadForm.title);
    \u0275\u0275advance(28);
    \u0275\u0275property("ngForOf", ctx_r1.adminDocuments);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.adminDocuments.length === 0);
  }
}
function AdminDashboardComponent_div_98_div_5_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 244);
    \u0275\u0275text(2, "Phase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 245);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_98_div_5_div_15_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newLeaderboardEntry.CompetitionPhase, $event) || (ctx_r1.newLeaderboardEntry.CompetitionPhase = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(4, "option", 270);
    \u0275\u0275text(5, "Online Phase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 271);
    \u0275\u0275text(7, "Grand Finale");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newLeaderboardEntry.CompetitionPhase);
  }
}
function AdminDashboardComponent_div_98_div_5_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 244);
    \u0275\u0275text(2, "Phase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 245);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_98_div_5_div_16_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newLeaderboardEntry.CompetitionPhase, $event) || (ctx_r1.newLeaderboardEntry.CompetitionPhase = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(4, "option", 272);
    \u0275\u0275text(5, "Online Shortlisting");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 273);
    \u0275\u0275text(7, "Grand Finale Knockout");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newLeaderboardEntry.CompetitionPhase);
  }
}
function AdminDashboardComponent_div_98_div_5_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 244);
    \u0275\u0275text(2, "Track / Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 245);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_98_div_5_div_17_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newLeaderboardEntry.CategoryTrack, $event) || (ctx_r1.newLeaderboardEntry.CategoryTrack = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(4, "option", 274);
    \u0275\u0275text(5, "Diplomatic Policy Leadership");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 275);
    \u0275\u0275text(7, "Legal Advocacy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 276);
    \u0275\u0275text(9, "Advanced Research");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 277);
    \u0275\u0275text(11, "Digital Media Strategy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 278);
    \u0275\u0275text(13, "Entrepreneurial Vision");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 279);
    \u0275\u0275text(15, "Project Management");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 280);
    \u0275\u0275text(17, "Global Communication");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 281);
    \u0275\u0275text(19, "Digital Systems");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 282);
    \u0275\u0275text(21, "Investment Banking");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newLeaderboardEntry.CategoryTrack);
  }
}
function AdminDashboardComponent_div_98_div_5_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 244);
    \u0275\u0275text(2, "Challenge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 245);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_98_div_5_div_18_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newLeaderboardEntry.CategoryTrack, $event) || (ctx_r1.newLeaderboardEntry.CategoryTrack = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(4, "option", 283);
    \u0275\u0275text(5, "Teen Entrepreneur Challenge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 284);
    \u0275\u0275text(7, "Eco Heroes Innovation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 285);
    \u0275\u0275text(9, "Digital Story Showcase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 286);
    \u0275\u0275text(11, "Young Leadership Voice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 287);
    \u0275\u0275text(13, "Tech Innovation Lab");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newLeaderboardEntry.CategoryTrack);
  }
}
function AdminDashboardComponent_div_98_div_5_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 244);
    \u0275\u0275text(2, "Teams Count");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 263);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_98_div_5_div_27_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newLeaderboardEntry.TeamsCount, $event) || (ctx_r1.newLeaderboardEntry.TeamsCount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newLeaderboardEntry.TeamsCount);
  }
}
function AdminDashboardComponent_div_98_div_5_tr_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 87);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "br");
    \u0275\u0275elementStart(7, "small", 288);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td")(19, "strong", 289);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td")(24, "button", 239);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_5_tr_74_Template_button_click_24_listener() {
      const entry_r29 = \u0275\u0275restoreView(_r28).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteLeaderboardEntry(entry_r29.Id));
    });
    \u0275\u0275text(25, " Delete ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const entry_r29 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", entry_r29.Id, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(entry_r29.CompetitionFormat);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(entry_r29.CompetitionPhase || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r29.CategoryTrack || "All");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(entry_r29.ParticipantName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r29.Country);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r29.TeamsCount || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(entry_r29.Score);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r29.Award || "-");
  }
}
function AdminDashboardComponent_div_98_div_5_tr_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 290);
    \u0275\u0275text(2, "No leaderboard entries found.");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_div_98_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 241)(2, "h3", 242);
    \u0275\u0275text(3, "Add Leaderboard Entry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 243)(5, "div")(6, "label", 244);
    \u0275\u0275text(7, "Format *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "select", 245);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_98_div_5_Template_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newLeaderboardEntry.CompetitionFormat, $event) || (ctx_r1.newLeaderboardEntry.CompetitionFormat = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(9, "option", 259);
    \u0275\u0275text(10, "School Competitions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 260);
    \u0275\u0275text(12, "Mastery Battles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 261);
    \u0275\u0275text(14, "Open Challenges");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(15, AdminDashboardComponent_div_98_div_5_div_15_Template, 8, 1, "div", 85)(16, AdminDashboardComponent_div_98_div_5_div_16_Template, 8, 1, "div", 85)(17, AdminDashboardComponent_div_98_div_5_div_17_Template, 22, 1, "div", 85)(18, AdminDashboardComponent_div_98_div_5_div_18_Template, 14, 1, "div", 85);
    \u0275\u0275elementStart(19, "div")(20, "label", 244);
    \u0275\u0275text(21, "Participant / School Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 262);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_98_div_5_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newLeaderboardEntry.ParticipantName, $event) || (ctx_r1.newLeaderboardEntry.ParticipantName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div")(24, "label", 244);
    \u0275\u0275text(25, "Country *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 262);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_98_div_5_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newLeaderboardEntry.Country, $event) || (ctx_r1.newLeaderboardEntry.Country = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(27, AdminDashboardComponent_div_98_div_5_div_27_Template, 4, 1, "div", 85);
    \u0275\u0275elementStart(28, "div")(29, "label", 244);
    \u0275\u0275text(30, "Score (Total Points) *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 263);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_98_div_5_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newLeaderboardEntry.Score, $event) || (ctx_r1.newLeaderboardEntry.Score = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div")(33, "label", 244);
    \u0275\u0275text(34, "Award (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "select", 245);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_98_div_5_Template_select_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newLeaderboardEntry.Award, $event) || (ctx_r1.newLeaderboardEntry.Award = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(36, "option", 253);
    \u0275\u0275text(37, "-- No Award --");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "option", 264);
    \u0275\u0275text(39, "Champion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "option", 265);
    \u0275\u0275text(41, "Runner-Up");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "option", 266);
    \u0275\u0275text(43, "3rd Place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "option", 267);
    \u0275\u0275text(45, "Finalist");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(46, "button", 251);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_5_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addLeaderboardEntry());
    });
    \u0275\u0275text(47, " Add Entry ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 82)(49, "div", 268)(50, "h3", 269);
    \u0275\u0275text(51, "All Leaderboard Entries");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "table", 98)(53, "thead")(54, "tr")(55, "th");
    \u0275\u0275text(56, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "th");
    \u0275\u0275text(58, "Format & Phase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "th");
    \u0275\u0275text(60, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "th");
    \u0275\u0275text(62, "Participant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "th");
    \u0275\u0275text(64, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "th");
    \u0275\u0275text(66, "Teams");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "th");
    \u0275\u0275text(68, "Score");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "th");
    \u0275\u0275text(70, "Award");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "th");
    \u0275\u0275text(72, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(73, "tbody");
    \u0275\u0275template(74, AdminDashboardComponent_div_98_div_5_tr_74_Template, 26, 9, "tr", 84)(75, AdminDashboardComponent_div_98_div_5_tr_75_Template, 3, 0, "tr", 85);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newLeaderboardEntry.CompetitionFormat);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.newLeaderboardEntry.CompetitionFormat === "SCHOOL");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.newLeaderboardEntry.CompetitionFormat === "MASTERY");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.newLeaderboardEntry.CompetitionFormat === "MASTERY");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.newLeaderboardEntry.CompetitionFormat === "OPEN");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newLeaderboardEntry.ParticipantName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newLeaderboardEntry.Country);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.newLeaderboardEntry.CompetitionFormat === "SCHOOL");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newLeaderboardEntry.Score);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newLeaderboardEntry.Award);
    \u0275\u0275advance(39);
    \u0275\u0275property("ngForOf", ctx_r1.adminLeaderboardData);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.adminLeaderboardData.length === 0);
  }
}
function AdminDashboardComponent_div_98_div_6_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "span", 291);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "button", 104);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_6_tr_16_Template_button_click_14_listener() {
      const user_r31 = \u0275\u0275restoreView(_r30).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editUser(user_r31));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 105);
    \u0275\u0275element(16, "path", 292);
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " Edit ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r31 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", user_r31.id, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r31.username);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", user_r31.role);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 5, user_r31.role));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 7, user_r31.created_at, "mediumDate"));
  }
}
function AdminDashboardComponent_div_98_div_6_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 88);
    \u0275\u0275text(2, "No users found.");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_div_98_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 82)(2, "table", 98)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Username");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Created At");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275template(16, AdminDashboardComponent_div_98_div_6_tr_16_Template, 18, 10, "tr", 84)(17, AdminDashboardComponent_div_98_div_6_tr_17_Template, 3, 0, "tr", 85);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r1.users);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.users.length === 0);
  }
}
function AdminDashboardComponent_div_98_div_7_div_1_div_6_table_32_tr_16_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 101);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const course_r35 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getCourseDescriptionPreview(course_r35.description));
  }
}
function AdminDashboardComponent_div_98_div_7_div_1_div_6_table_32_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 312);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 99)(5, "strong", 313);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, AdminDashboardComponent_div_98_div_7_div_1_div_6_table_32_tr_16_span_7_Template, 2, 1, "span", 314);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "span", 315);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td")(12, "span", 315);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 316);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "div", 317)(18, "button", 318);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_7_div_1_div_6_table_32_tr_16_Template_button_click_18_listener() {
      const course_r35 = \u0275\u0275restoreView(_r34).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.viewCourse(course_r35));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 319);
    \u0275\u0275element(20, "path", 106)(21, "circle", 107);
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " View ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(23, "button", 320);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_7_div_1_div_6_table_32_tr_16_Template_button_click_23_listener() {
      const i_r36 = \u0275\u0275restoreView(_r34).index;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.editCourse(i_r36));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 319);
    \u0275\u0275element(25, "path", 292);
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, " Edit ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(27, "button", 321);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_7_div_1_div_6_table_32_tr_16_Template_button_click_27_listener() {
      const i_r36 = \u0275\u0275restoreView(_r34).index;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.deleteCourse(i_r36));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(28, "svg", 319);
    \u0275\u0275element(29, "polyline", 109)(30, "path", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, " Delete ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const course_r35 = ctx.$implicit;
    const i_r36 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", ctx_r1.courses.length - i_r36, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(course_r35.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", course_r35.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(8, _c2, course_r35.difficulty === "Intermediate", course_r35.difficulty === "Beginner", course_r35.difficulty === "Advanced"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(course_r35.difficulty);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", course_r35.pricing === "Free" ? "consent-badge" : "category-badge");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(course_r35.pricing);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(course_r35.visibility);
  }
}
function AdminDashboardComponent_div_98_div_7_div_1_div_6_table_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 83)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Course Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Difficulty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Pricing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275template(16, AdminDashboardComponent_div_98_div_7_div_1_div_6_table_32_tr_16_Template, 32, 12, "tr", 84);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r1.courses);
  }
}
function AdminDashboardComponent_div_98_div_7_div_1_div_6_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 322);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 323);
    \u0275\u0275element(2, "rect", 229)(3, "circle", 230)(4, "polyline", 231);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "No courses found. Add a new course to get started.");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_div_98_div_7_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 296)(1, "div", 297)(2, "div", 66)(3, "div", 298);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 299);
    \u0275\u0275element(5, "rect", 300)(6, "rect", 301);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div", 69)(8, "h3");
    \u0275\u0275text(9, "Total Courses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 71);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 66)(13, "div", 302);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 299);
    \u0275\u0275element(15, "path", 303);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "div", 69)(17, "h3");
    \u0275\u0275text(18, "Published");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 71);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "div", 82)(22, "div", 304)(23, "h3", 305);
    \u0275\u0275text(24, "Course Catalog ");
    \u0275\u0275elementStart(25, "span", 306);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "button", 307);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_7_div_1_div_6_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleAddCourse(true));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(28, "svg", 160);
    \u0275\u0275element(29, "line", 308)(30, "line", 309);
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, " Add Course ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(32, AdminDashboardComponent_div_98_div_7_div_1_div_6_table_32_Template, 17, 1, "table", 310)(33, AdminDashboardComponent_div_98_div_7_div_1_div_6_div_33_Template, 7, 0, "div", 311);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.courses.length);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.publishedCoursesCount);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r1.courses.length, " course", ctx_r1.courses.length !== 1 ? "s" : "", "");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.courses.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.courses.length === 0);
  }
}
function AdminDashboardComponent_div_98_div_7_div_1_div_7_div_1_table_4_tr_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 99)(3, "strong", 313);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "td")(6, "div", 103)(7, "button", 318);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_7_div_1_div_7_div_1_table_4_tr_8_Template_button_click_7_listener() {
      const course_r38 = \u0275\u0275restoreView(_r37).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r1.viewCourse(course_r38));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 327);
    \u0275\u0275element(9, "path", 106)(10, "circle", 107);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " View ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "button", 328);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_7_div_1_div_7_div_1_table_4_tr_8_Template_button_click_12_listener() {
      const course_r38 = \u0275\u0275restoreView(_r37).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r1.selectCourseForTopic(course_r38));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 327);
    \u0275\u0275element(14, "line", 308)(15, "line", 309);
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " Add ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "button", 329);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_7_div_1_div_7_div_1_table_4_tr_8_Template_button_click_17_listener() {
      const i_r39 = \u0275\u0275restoreView(_r37).index;
      const ctx_r1 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r1.deleteCourse(i_r39));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 327);
    \u0275\u0275element(19, "polyline", 109)(20, "path", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, " Delete ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const course_r38 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(course_r38.title);
  }
}
function AdminDashboardComponent_div_98_div_7_div_1_div_7_div_1_table_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 83)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Course Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "tbody");
    \u0275\u0275template(8, AdminDashboardComponent_div_98_div_7_div_1_div_7_div_1_table_4_tr_8_Template, 22, 1, "tr", 84);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r1.courses);
  }
}
function AdminDashboardComponent_div_98_div_7_div_1_div_7_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 322)(1, "p");
    \u0275\u0275text(2, "No courses found. Add a new course from Overview tab.");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_div_98_div_7_div_1_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82)(1, "div", 326)(2, "h3", 305);
    \u0275\u0275text(3, "Select Course to Manage Topics");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, AdminDashboardComponent_div_98_div_7_div_1_div_7_div_1_table_4_Template, 9, 1, "table", 310)(5, AdminDashboardComponent_div_98_div_7_div_1_div_7_div_1_div_5_Template, 3, 0, "div", 311);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.courses.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.courses.length === 0);
  }
}
function AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 369);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 370);
    \u0275\u0275element(2, "polygon", 220)(3, "rect", 221);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", ctx_r1.getAttachedVideosCount(), " Video", ctx_r1.getAttachedVideosCount() > 1 ? "s" : "", " Ready ");
  }
}
function AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_div_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 371)(1, "div", 372);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 373);
    \u0275\u0275element(3, "rect", 300)(4, "rect", 301);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "No modules yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 345);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_div_71_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r41);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.addModule());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 344);
    \u0275\u0275element(11, "line", 308)(12, "line", 309);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14, "Create First Module");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1('Start building the curriculum for "', ctx_r1.selectedCourseForTopic.title, '". Add modules and fill each one with syllabus topics and video lessons.');
  }
}
function AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_div_72_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 394);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 395);
    \u0275\u0275element(2, "polygon", 220)(3, "rect", 221);
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_div_72_div_22_div_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 427);
    \u0275\u0275element(1, "span", 428);
    \u0275\u0275text(2, " Video Ready ");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_div_72_div_22_div_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 429);
    \u0275\u0275text(1, "No Video");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_div_72_div_22_div_1_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 430);
    \u0275\u0275element(1, "div", 431);
    \u0275\u0275elementStart(2, "p", 432);
    \u0275\u0275text(3, "Uploading Video...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 433);
    \u0275\u0275text(5, "Saving directly to storage");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_div_72_div_22_div_1_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 434)(1, "div", 435)(2, "div", 436);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 358);
    \u0275\u0275element(4, "polygon", 220)(5, "rect", 221);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 437)(7, "strong", 438);
    \u0275\u0275text(8, "Video Attached");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 439)(10, "span");
    \u0275\u0275text(11, "Preview Video");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 440);
    \u0275\u0275element(13, "path", 226)(14, "polyline", 227)(15, "line", 228);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "div", 441)(17, "button", 442);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_div_72_div_22_div_1_div_41_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r48);
      const si_r46 = \u0275\u0275nextContext().index;
      const mi_r43 = \u0275\u0275nextContext(2).index;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.openSyllabusVideoUploader(mi_r43, si_r46));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 407);
    \u0275\u0275element(19, "path", 443);
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, " Replace ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "button", 444);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_div_72_div_22_div_1_div_41_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r48);
      const si_r46 = \u0275\u0275nextContext().index;
      const mi_r43 = \u0275\u0275nextContext(2).index;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.removeSyllabusVideo(mi_r43, si_r46));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 407);
    \u0275\u0275element(23, "polyline", 109)(24, "path", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, " Remove ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r47 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(9);
    \u0275\u0275property("href", item_r47.video, \u0275\u0275sanitizeUrl);
  }
}
function AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_div_72_div_22_div_1_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 445);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_div_72_div_22_div_1_div_42_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r49);
      const si_r46 = \u0275\u0275nextContext().index;
      const mi_r43 = \u0275\u0275nextContext(2).index;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.openSyllabusVideoUploader(mi_r43, si_r46));
    });
    \u0275\u0275elementStart(1, "div", 446);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 447);
    \u0275\u0275element(3, "path", 236)(4, "polyline", 448)(5, "line", 449);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 450)(7, "strong");
    \u0275\u0275text(8, "Upload Video Lecture");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "MP4, WebM or MOV");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 451);
    \u0275\u0275text(12, "Choose Video File");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_div_72_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 398)(1, "div", 399)(2, "div", 400)(3, "span", 401);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 402);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 403);
    \u0275\u0275template(8, AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_div_72_div_22_div_1_span_8_Template, 3, 0, "span", 404)(9, AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_div_72_div_22_div_1_span_9_Template, 2, 0, "span", 405);
    \u0275\u0275elementStart(10, "button", 406);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_div_72_div_22_div_1_Template_button_click_10_listener() {
      const si_r46 = \u0275\u0275restoreView(_r45).index;
      const mi_r43 = \u0275\u0275nextContext(2).index;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.removeSyllabusItem(mi_r43, si_r46));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 407);
    \u0275\u0275element(12, "line", 351)(13, "line", 352);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "div", 408)(15, "div", 409)(16, "div", 410)(17, "div", 411)(18, "label", 412);
    \u0275\u0275text(19, "Topic / Lesson Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 413);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 414);
    \u0275\u0275element(22, "path", 415)(23, "path", 416);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "input", 417);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_div_72_div_22_div_1_Template_input_ngModelChange_24_listener($event) {
      const item_r47 = \u0275\u0275restoreView(_r45).$implicit;
      \u0275\u0275twoWayBindingSet(item_r47.title, $event) || (item_r47.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 418)(26, "label", 412);
    \u0275\u0275text(27, "Duration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 413);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(29, "svg", 414);
    \u0275\u0275element(30, "circle", 170)(31, "polyline", 419);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(32, "input", 420);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_div_72_div_22_div_1_Template_input_ngModelChange_32_listener($event) {
      const item_r47 = \u0275\u0275restoreView(_r45).$implicit;
      \u0275\u0275twoWayBindingSet(item_r47.duration, $event) || (item_r47.duration = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(33, "div", 421)(34, "label", 412);
    \u0275\u0275text(35, "Brief Description & Syllabus Points");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "textarea", 422);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_div_72_div_22_div_1_Template_textarea_ngModelChange_36_listener($event) {
      const item_r47 = \u0275\u0275restoreView(_r45).$implicit;
      \u0275\u0275twoWayBindingSet(item_r47.description, $event) || (item_r47.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 423)(38, "label", 412);
    \u0275\u0275text(39, "Lesson Video");
    \u0275\u0275elementEnd();
    \u0275\u0275template(40, AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_div_72_div_22_div_1_div_40_Template, 6, 0, "div", 424)(41, AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_div_72_div_22_div_1_div_41_Template, 26, 1, "div", 425)(42, AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_div_72_div_22_div_1_div_42_Template, 13, 0, "div", 426);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r47 = ctx.$implicit;
    const si_r46 = ctx.index;
    const mi_r43 = \u0275\u0275nextContext(2).index;
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(si_r46 + 1 < 10 ? "0" + (si_r46 + 1) : si_r46 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("TOPIC ", si_r46 + 1, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r47.video);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r47.video);
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("ngModel", item_r47.title);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", item_r47.duration);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", item_r47.description);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.isUploadingForModule(mi_r43, si_r46));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r47.video && !ctx_r1.isUploadingForModule(mi_r43, si_r46));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r47.video && !ctx_r1.isUploadingForModule(mi_r43, si_r46));
  }
}
function AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_div_72_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 396);
    \u0275\u0275template(1, AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_div_72_div_22_div_1_Template, 43, 10, "div", 397);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mod_r44 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", mod_r44.syllabusItems);
  }
}
function AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_div_72_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 452);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 453);
    \u0275\u0275element(2, "path", 415)(3, "path", 416);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, 'No topics in this module yet. Click "Add Syllabus / Add Video" to add content.');
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_div_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 374)(1, "div", 375);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_div_72_Template_div_click_1_listener() {
      const mi_r43 = \u0275\u0275restoreView(_r42).index;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.toggleModule(mi_r43));
    });
    \u0275\u0275elementStart(2, "div", 376)(3, "span", 377);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 378);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_div_72_Template_div_click_5_listener($event) {
      \u0275\u0275restoreView(_r42);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(6, "span", 379);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 380);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_div_72_Template_input_ngModelChange_8_listener($event) {
      const mod_r44 = \u0275\u0275restoreView(_r42).$implicit;
      \u0275\u0275twoWayBindingSet(mod_r44.moduleTitle, $event) || (mod_r44.moduleTitle = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_div_72_Template_input_click_8_listener($event) {
      \u0275\u0275restoreView(_r42);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 381)(10, "span", 382);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_div_72_span_12_Template, 4, 0, "span", 383);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 384);
    \u0275\u0275element(14, "polyline", 385);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "button", 386);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_div_72_Template_button_click_15_listener($event) {
      const mi_r43 = \u0275\u0275restoreView(_r42).index;
      const ctx_r1 = \u0275\u0275nextContext(6);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.removeModule(mi_r43));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 387);
    \u0275\u0275element(17, "polyline", 109)(18, "path", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20, "Remove");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "div", 388);
    \u0275\u0275template(22, AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_div_72_div_22_Template, 2, 1, "div", 389)(23, AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_div_72_div_23_Template, 6, 0, "div", 390);
    \u0275\u0275elementStart(24, "div", 391)(25, "button", 392);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_div_72_Template_button_click_25_listener() {
      const mi_r43 = \u0275\u0275restoreView(_r42).index;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.addSyllabusItem(mi_r43));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 393);
    \u0275\u0275element(27, "line", 308)(28, "line", 309);
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, " Add Syllabus / Add Video ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const mod_r44 = ctx.$implicit;
    const mi_r43 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275property("id", "module-card-" + mi_r43);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(mi_r43 + 1 < 10 ? "0" + (mi_r43 + 1) : mi_r43 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("MODULE ", mi_r43 + 1, "");
    \u0275\u0275advance();
    \u0275\u0275property("id", "module-title-input-" + mi_r43);
    \u0275\u0275twoWayProperty("ngModel", mod_r44.moduleTitle);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", (mod_r44.syllabusItems == null ? null : mod_r44.syllabusItems.length) || 0, " topic", (mod_r44.syllabusItems == null ? null : mod_r44.syllabusItems.length) !== 1 ? "s" : "", "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasModuleVideos(mod_r44));
    \u0275\u0275advance();
    \u0275\u0275classProp("rotated", ctx_r1.isModuleExpanded(mi_r43));
    \u0275\u0275advance(8);
    \u0275\u0275classProp("expanded", ctx_r1.isModuleExpanded(mi_r43));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", mod_r44.syllabusItems && mod_r44.syllabusItems.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !mod_r44.syllabusItems || mod_r44.syllabusItems.length === 0);
  }
}
function AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_div_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 454)(1, "button", 455);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_div_73_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r50);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.addModule());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 115);
    \u0275\u0275element(3, "line", 308)(4, "line", 309);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "Add Another Module");
    \u0275\u0275elementEnd()()();
  }
}
function AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 330);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r40);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.closeTopicModal());
    });
    \u0275\u0275elementStart(1, "div", 331);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r40);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 332)(3, "div", 333)(4, "button", 334);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r40);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.closeTopicModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 115);
    \u0275\u0275element(6, "line", 116)(7, "polyline", 117);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "Back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 335)(11, "div", 336)(12, "span", 337);
    \u0275\u0275text(13, "Course Curriculum");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 338);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 339);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_span_18_Template, 5, 2, "span", 340);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "h2", 341);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 342)(22, "button", 343);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r40);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.addModule());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(23, "svg", 344);
    \u0275\u0275element(24, "line", 308)(25, "line", 309);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27, "Add Module");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "button", 345);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r40);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.saveTopicChanges());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(29, "svg", 344);
    \u0275\u0275element(30, "path", 346)(31, "polyline", 347)(32, "polyline", 348);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(33, "span");
    \u0275\u0275text(34, "Save Changes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "button", 349);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r40);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.closeTopicModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(36, "svg", 350);
    \u0275\u0275element(37, "line", 351)(38, "line", 352);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(39, "div", 353)(40, "div", 354)(41, "div", 355)(42, "div", 356)(43, "div", 357);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(44, "svg", 358);
    \u0275\u0275element(45, "rect", 300)(46, "rect", 301);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(47, "div")(48, "h3");
    \u0275\u0275text(49, "Course & Syllabus Builder");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "p");
    \u0275\u0275text(51, "Build modules, add syllabus topics and video lessons for each module.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(52, "div", 359)(53, "div", 360)(54, "span", 361);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "span", 362);
    \u0275\u0275text(57, "Modules");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(58, "div", 363);
    \u0275\u0275elementStart(59, "div", 360)(60, "span", 361);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "span", 362);
    \u0275\u0275text(63, "Topics");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(64, "div", 363);
    \u0275\u0275elementStart(65, "div", 360)(66, "span", 361);
    \u0275\u0275text(67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "span", 362);
    \u0275\u0275text(69, "Videos");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(70, "div", 364);
    \u0275\u0275template(71, AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_div_71_Template, 15, 1, "div", 365)(72, AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_div_72_Template, 30, 14, "div", 366)(73, AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_div_73_Template, 7, 0, "div", 367);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "input", 368, 0);
    \u0275\u0275listener("change", function AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_Template_input_change_74_listener($event) {
      \u0275\u0275restoreView(_r40);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.onTopicLessonVideoUpload($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate2("", ctx_r1.getModulesCount(), " ", ctx_r1.getModulesCount() === 1 ? "Module" : "Modules", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.getTotalSyllabusCount(), " Topics");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getAttachedVideosCount() > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedCourseForTopic.title);
    \u0275\u0275advance(35);
    \u0275\u0275textInterpolate(ctx_r1.getModulesCount());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.getTotalSyllabusCount());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.getAttachedVideosCount());
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r1.selectedCourseForTopic.lessons || ctx_r1.selectedCourseForTopic.lessons.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.selectedCourseForTopic.lessons);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCourseForTopic.lessons && ctx_r1.selectedCourseForTopic.lessons.length > 0);
  }
}
function AdminDashboardComponent_div_98_div_7_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 296);
    \u0275\u0275template(1, AdminDashboardComponent_div_98_div_7_div_1_div_7_div_1_Template, 6, 2, "div", 324)(2, AdminDashboardComponent_div_98_div_7_div_1_div_7_div_2_Template, 76, 11, "div", 325);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.selectedCourseForTopic);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCourseForTopic);
  }
}
function AdminDashboardComponent_div_98_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 294)(2, "button", 93);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_7_div_1_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.switchCourseTab("overview"));
    });
    \u0275\u0275text(3, " Overview ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 93);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_7_div_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.switchCourseTab("topic"));
    });
    \u0275\u0275text(5, " Topics ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, AdminDashboardComponent_div_98_div_7_div_1_div_6_Template, 34, 6, "div", 295)(7, AdminDashboardComponent_div_98_div_7_div_1_div_7_Template, 3, 2, "div", 295);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.activeCourseTab === "overview");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.activeCourseTab === "topic");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.activeCourseTab === "overview");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeCourseTab === "topic");
  }
}
function AdminDashboardComponent_div_98_div_7_div_2_div_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 507);
    \u0275\u0275element(1, "img", 508);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.newCourseData.image, \u0275\u0275sanitizeUrl);
  }
}
function AdminDashboardComponent_div_98_div_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 456)(1, "div", 457)(2, "div", 458)(3, "button", 459);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_7_div_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r51);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleAddCourse(false));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 160);
    \u0275\u0275element(5, "line", 116)(6, "polyline", 117);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Back to Courses");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "h3", 460);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 461)(12, "button", 307);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_7_div_2_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r51);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveCourse());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 160);
    \u0275\u0275element(14, "path", 346)(15, "polyline", 347)(16, "polyline", 348);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(19, "div", 462)(20, "div", 463)(21, "div", 464)(22, "label", 465);
    \u0275\u0275text(23, "Title ");
    \u0275\u0275elementStart(24, "span", 466);
    \u0275\u0275text(25, "\u2728");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "input", 467);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_98_div_7_div_2_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r51);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCourseData.title, $event) || (ctx_r1.newCourseData.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p", 468)(28, "span");
    \u0275\u0275text(29, "Course URL:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "a", 469);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_7_div_2_Template_a_click_30_listener($event) {
      \u0275\u0275restoreView(_r51);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(32, "svg", 470);
    \u0275\u0275element(33, "path", 226)(34, "polyline", 227)(35, "line", 228);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(36, "div", 464)(37, "label", 465);
    \u0275\u0275text(38, "Description ");
    \u0275\u0275elementStart(39, "span", 466);
    \u0275\u0275text(40, "\u2728");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 471)(42, "div", 472)(43, "button", 473);
    \u0275\u0275listener("mousedown", function AdminDashboardComponent_div_98_div_7_div_2_Template_button_mousedown_43_listener($event) {
      \u0275\u0275restoreView(_r51);
      const ctx_r1 = \u0275\u0275nextContext(3);
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r1.saveSelection());
    })("click", function AdminDashboardComponent_div_98_div_7_div_2_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r51);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.handleEditorCommand("bold"));
    });
    \u0275\u0275elementStart(44, "b");
    \u0275\u0275text(45, "B");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "button", 474);
    \u0275\u0275listener("mousedown", function AdminDashboardComponent_div_98_div_7_div_2_Template_button_mousedown_46_listener($event) {
      \u0275\u0275restoreView(_r51);
      const ctx_r1 = \u0275\u0275nextContext(3);
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r1.saveSelection());
    })("click", function AdminDashboardComponent_div_98_div_7_div_2_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r51);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.handleEditorCommand("italic"));
    });
    \u0275\u0275elementStart(47, "i");
    \u0275\u0275text(48, "I");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "button", 475);
    \u0275\u0275listener("mousedown", function AdminDashboardComponent_div_98_div_7_div_2_Template_button_mousedown_49_listener($event) {
      \u0275\u0275restoreView(_r51);
      const ctx_r1 = \u0275\u0275nextContext(3);
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r1.saveSelection());
    })("click", function AdminDashboardComponent_div_98_div_7_div_2_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r51);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.handleEditorCommand("underline"));
    });
    \u0275\u0275elementStart(50, "span", 476);
    \u0275\u0275text(51, "U");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "div", 477, 1);
    \u0275\u0275listener("input", function AdminDashboardComponent_div_98_div_7_div_2_Template_div_input_52_listener() {
      \u0275\u0275restoreView(_r51);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onEditorInput());
    })("mouseup", function AdminDashboardComponent_div_98_div_7_div_2_Template_div_mouseup_52_listener() {
      \u0275\u0275restoreView(_r51);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveSelection());
    })("keyup", function AdminDashboardComponent_div_98_div_7_div_2_Template_div_keyup_52_listener() {
      \u0275\u0275restoreView(_r51);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveSelection());
    })("focus", function AdminDashboardComponent_div_98_div_7_div_2_Template_div_focus_52_listener() {
      \u0275\u0275restoreView(_r51);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveSelection());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "div", 464)(55, "label", 465);
    \u0275\u0275text(56, "What Will I Learn?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "textarea", 478);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_98_div_7_div_2_Template_textarea_ngModelChange_57_listener($event) {
      \u0275\u0275restoreView(_r51);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCourseData.what_will_i_learn, $event) || (ctx_r1.newCourseData.what_will_i_learn = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 464)(59, "label", 465);
    \u0275\u0275text(60, "Course Milestones & Highlights");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 479)(62, "div", 480)(63, "label", 481);
    \u0275\u0275text(64, "Phase 1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "input", 482);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_98_div_7_div_2_Template_input_ngModelChange_65_listener($event) {
      \u0275\u0275restoreView(_r51);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCourseData.phase1, $event) || (ctx_r1.newCourseData.phase1 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 480)(67, "label", 481);
    \u0275\u0275text(68, "Final");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "input", 483);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_98_div_7_div_2_Template_input_ngModelChange_69_listener($event) {
      \u0275\u0275restoreView(_r51);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCourseData.final, $event) || (ctx_r1.newCourseData.final = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 480)(71, "label", 481);
    \u0275\u0275text(72, "Extras");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "input", 484);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_98_div_7_div_2_Template_input_ngModelChange_73_listener($event) {
      \u0275\u0275restoreView(_r51);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCourseData.extras, $event) || (ctx_r1.newCourseData.extras = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(74, "div", 464)(75, "label", 465);
    \u0275\u0275text(76, "Target Audience");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "textarea", 485);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_98_div_7_div_2_Template_textarea_ngModelChange_77_listener($event) {
      \u0275\u0275restoreView(_r51);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCourseData.target_audience, $event) || (ctx_r1.newCourseData.target_audience = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 464)(79, "label", 465);
    \u0275\u0275text(80, "Materials Included");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "textarea", 486);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_98_div_7_div_2_Template_textarea_ngModelChange_81_listener($event) {
      \u0275\u0275restoreView(_r51);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCourseData.materials_included, $event) || (ctx_r1.newCourseData.materials_included = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "div", 464)(83, "label", 465);
    \u0275\u0275text(84, "Requirements/Instructions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "textarea", 487);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_98_div_7_div_2_Template_textarea_ngModelChange_85_listener($event) {
      \u0275\u0275restoreView(_r51);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCourseData.requirements, $event) || (ctx_r1.newCourseData.requirements = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(86, "div", 488)(87, "div", 489)(88, "label", 465);
    \u0275\u0275text(89, "Visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "div", 490)(91, "select", 491);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_98_div_7_div_2_Template_select_ngModelChange_91_listener($event) {
      \u0275\u0275restoreView(_r51);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCourseData.visibility, $event) || (ctx_r1.newCourseData.visibility = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(92, "option", 492);
    \u0275\u0275text(93, "\u{1F441} Public");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "option", 493);
    \u0275\u0275text(95, "\u{1F512} Private");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(96, "p", 494);
    \u0275\u0275text(97, "Last updated on 28th July, 2026");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(98, "div", 489)(99, "label", 465);
    \u0275\u0275text(100, "Featured Image ");
    \u0275\u0275elementStart(101, "span", 466);
    \u0275\u0275text(102, "\u2728");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(103, "div", 495)(104, "input", 496);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_98_div_7_div_2_Template_input_ngModelChange_104_listener($event) {
      \u0275\u0275restoreView(_r51);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCourseData.image, $event) || (ctx_r1.newCourseData.image = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "input", 497, 2);
    \u0275\u0275listener("change", function AdminDashboardComponent_div_98_div_7_div_2_Template_input_change_105_listener($event) {
      \u0275\u0275restoreView(_r51);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onFeaturedImageUpload($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "button", 498);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_7_div_2_Template_button_click_107_listener() {
      \u0275\u0275restoreView(_r51);
      const featuredImageUpload_r52 = \u0275\u0275reference(106);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.triggerFeaturedImageUpload(featuredImageUpload_r52));
    });
    \u0275\u0275text(108, "Upload");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(109, AdminDashboardComponent_div_98_div_7_div_2_div_109_Template, 2, 1, "div", 499);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "div", 489)(111, "label", 465);
    \u0275\u0275text(112, "Course Meta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "div", 500)(114, "div", 480)(115, "label", 481);
    \u0275\u0275text(116, "Duration (Hours)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "input", 501);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_98_div_7_div_2_Template_input_ngModelChange_117_listener($event) {
      \u0275\u0275restoreView(_r51);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCourseData.duration_hours, $event) || (ctx_r1.newCourseData.duration_hours = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(118, "div", 480)(119, "label", 481);
    \u0275\u0275text(120, "Lectures");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "input", 502);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_98_div_7_div_2_Template_input_ngModelChange_121_listener($event) {
      \u0275\u0275restoreView(_r51);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCourseData.lectures, $event) || (ctx_r1.newCourseData.lectures = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(122, "div", 480)(123, "label", 481);
    \u0275\u0275text(124, "Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(125, "input", 503);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_98_div_7_div_2_Template_input_ngModelChange_125_listener($event) {
      \u0275\u0275restoreView(_r51);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCourseData.level, $event) || (ctx_r1.newCourseData.level = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(126, "div", 480)(127, "label", 481);
    \u0275\u0275text(128, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "input", 504);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_98_div_7_div_2_Template_input_ngModelChange_129_listener($event) {
      \u0275\u0275restoreView(_r51);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCourseData.language, $event) || (ctx_r1.newCourseData.language = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(130, "div", 505)(131, "label", 481);
    \u0275\u0275text(132, "Certificate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(133, "input", 506);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_98_div_7_div_2_Template_input_ngModelChange_133_listener($event) {
      \u0275\u0275restoreView(_r51);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCourseData.certificate, $event) || (ctx_r1.newCourseData.certificate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.editingCourseIndex >= 0 ? "Edit Course" : "Add New Course");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.editingCourseIndex >= 0 ? "Update Course" : "Publish Course");
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCourseData.title);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("https://ufs.net.in/inmyacademy/courses/", ctx_r1.newCourseData.title ? ctx_r1.newCourseData.title.toLowerCase().replace(" ", "-") : "", "");
    \u0275\u0275advance(26);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCourseData.what_will_i_learn);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCourseData.phase1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCourseData.final);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCourseData.extras);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCourseData.target_audience);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCourseData.materials_included);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCourseData.requirements);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCourseData.visibility);
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCourseData.image);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.newCourseData.image);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCourseData.duration_hours);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCourseData.lectures);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCourseData.level);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCourseData.language);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCourseData.certificate);
  }
}
function AdminDashboardComponent_div_98_div_7_div_3_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 525);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("innerHTML", ctx_r1.sanitizeHtml(ctx_r1.selectedCourse.description), \u0275\u0275sanitizeHtml);
  }
}
function AdminDashboardComponent_div_98_div_7_div_3_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 526);
    \u0275\u0275text(1, "No description provided.");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_div_98_div_7_div_3_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 527);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("innerHTML", ctx_r1.sanitizeHtml(ctx_r1.selectedCourse.about_the_track), \u0275\u0275sanitizeHtml);
  }
}
function AdminDashboardComponent_div_98_div_7_div_3_div_43_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 480)(1, "label", 481);
    \u0275\u0275text(2, "Phase 1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 529);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedCourse.phase1, " ");
  }
}
function AdminDashboardComponent_div_98_div_7_div_3_div_43_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 480)(1, "label", 481);
    \u0275\u0275text(2, "Final");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 529);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedCourse.final, " ");
  }
}
function AdminDashboardComponent_div_98_div_7_div_3_div_43_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 480)(1, "label", 481);
    \u0275\u0275text(2, "Extras");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 529);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedCourse.extras, " ");
  }
}
function AdminDashboardComponent_div_98_div_7_div_3_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 464)(1, "label", 465);
    \u0275\u0275text(2, "Course Milestones & Highlights");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 479);
    \u0275\u0275template(4, AdminDashboardComponent_div_98_div_7_div_3_div_43_div_4_Template, 5, 1, "div", 528)(5, AdminDashboardComponent_div_98_div_7_div_3_div_43_div_5_Template, 5, 1, "div", 528)(6, AdminDashboardComponent_div_98_div_7_div_3_div_43_div_6_Template, 5, 1, "div", 528);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.selectedCourse.phase1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCourse.final);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCourse.extras);
  }
}
function AdminDashboardComponent_div_98_div_7_div_3_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 464)(1, "label", 465);
    \u0275\u0275text(2, "Target Audience");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 530);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedCourse.target_audience, " ");
  }
}
function AdminDashboardComponent_div_98_div_7_div_3_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 464)(1, "label", 465);
    \u0275\u0275text(2, "Materials Included");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 530);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedCourse.materials_included, " ");
  }
}
function AdminDashboardComponent_div_98_div_7_div_3_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 464)(1, "label", 465);
    \u0275\u0275text(2, "Requirements/Instructions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 530);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedCourse.requirements, " ");
  }
}
function AdminDashboardComponent_div_98_div_7_div_3_div_47_div_4_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 539)(1, "video", 540);
    \u0275\u0275element(2, "source", 224);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const lesson_r54 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", lesson_r54.video, \u0275\u0275sanitizeUrl);
  }
}
function AdminDashboardComponent_div_98_div_7_div_3_div_47_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 533)(1, "div", 534)(2, "div")(3, "h4", 535);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 536);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 537);
    \u0275\u0275text(8, "Topic");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, AdminDashboardComponent_div_98_div_7_div_3_div_47_div_4_div_9_Template, 3, 1, "div", 538);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lesson_r54 = ctx.$implicit;
    const j_r55 = ctx.index;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("Lesson ", j_r55 + 1, ": ", lesson_r54.title || "Untitled Topic", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lesson_r54.syllabus || lesson_r54.description || "No description provided.");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", lesson_r54.video);
  }
}
function AdminDashboardComponent_div_98_div_7_div_3_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 464)(1, "label", 465);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 531);
    \u0275\u0275template(4, AdminDashboardComponent_div_98_div_7_div_3_div_47_div_4_Template, 10, 4, "div", 532);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Topics / Lessons (", ctx_r1.selectedCourse.lessons.length, ")");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.selectedCourse.lessons);
  }
}
function AdminDashboardComponent_div_98_div_7_div_3__svg_svg_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 541);
    \u0275\u0275element(1, "path", 106)(2, "circle", 107);
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_div_98_div_7_div_3__svg_svg_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 542);
    \u0275\u0275element(1, "rect", 543)(2, "path", 544);
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_div_98_div_7_div_3_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 545);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("title", ctx_r1.selectedCourse.image);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedCourse.image, " ");
  }
}
function AdminDashboardComponent_div_98_div_7_div_3_div_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 546);
    \u0275\u0275element(1, "img", 508);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.selectedCourse.image, \u0275\u0275sanitizeUrl);
  }
}
function AdminDashboardComponent_div_98_div_7_div_3_div_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 547);
    \u0275\u0275text(1, " No featured image uploaded. ");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_div_98_div_7_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 456)(1, "div", 457)(2, "div", 458)(3, "button", 459);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_7_div_3_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r53);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.closeCourseModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 160);
    \u0275\u0275element(5, "line", 116)(6, "polyline", 117);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Back to Courses");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "h3", 460);
    \u0275\u0275text(10, "View Course");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 462)(12, "div", 463)(13, "div", 464)(14, "label", 465);
    \u0275\u0275text(15, "Title ");
    \u0275\u0275elementStart(16, "span", 466);
    \u0275\u0275text(17, "\u2728");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 509);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 468)(21, "span");
    \u0275\u0275text(22, "Course URL:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "a", 469);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_div_7_div_3_Template_a_click_23_listener($event) {
      \u0275\u0275restoreView(_r53);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 470);
    \u0275\u0275element(26, "path", 226)(27, "polyline", 227)(28, "line", 228);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(29, "div", 464)(30, "label", 465);
    \u0275\u0275text(31, "Description ");
    \u0275\u0275elementStart(32, "span", 466);
    \u0275\u0275text(33, "\u2728");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 510);
    \u0275\u0275template(35, AdminDashboardComponent_div_98_div_7_div_3_div_35_Template, 1, 1, "div", 511)(36, AdminDashboardComponent_div_98_div_7_div_3_div_36_Template, 2, 0, "div", 512)(37, AdminDashboardComponent_div_98_div_7_div_3_div_37_Template, 1, 1, "div", 513);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 464)(39, "label", 465);
    \u0275\u0275text(40, "What Will I Learn?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 514);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(43, AdminDashboardComponent_div_98_div_7_div_3_div_43_Template, 7, 3, "div", 515)(44, AdminDashboardComponent_div_98_div_7_div_3_div_44_Template, 5, 1, "div", 515)(45, AdminDashboardComponent_div_98_div_7_div_3_div_45_Template, 5, 1, "div", 515)(46, AdminDashboardComponent_div_98_div_7_div_3_div_46_Template, 5, 1, "div", 515)(47, AdminDashboardComponent_div_98_div_7_div_3_div_47_Template, 5, 2, "div", 515);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 488)(49, "div", 489)(50, "label", 465);
    \u0275\u0275text(51, "Visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 516)(53, "div", 517);
    \u0275\u0275template(54, AdminDashboardComponent_div_98_div_7_div_3__svg_svg_54_Template, 3, 0, "svg", 518)(55, AdminDashboardComponent_div_98_div_7_div_3__svg_svg_55_Template, 3, 0, "svg", 519);
    \u0275\u0275elementStart(56, "span");
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "span", 520);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "p", 494);
    \u0275\u0275text(61, "Last updated on 28th July, 2026");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 489)(63, "label", 465);
    \u0275\u0275text(64, "Featured Image ");
    \u0275\u0275elementStart(65, "span", 466);
    \u0275\u0275text(66, "\u2728");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(67, AdminDashboardComponent_div_98_div_7_div_3_div_67_Template, 2, 2, "div", 521)(68, AdminDashboardComponent_div_98_div_7_div_3_div_68_Template, 2, 1, "div", 522)(69, AdminDashboardComponent_div_98_div_7_div_3_div_69_Template, 2, 0, "div", 523);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 489)(71, "label", 465);
    \u0275\u0275text(72, "Course Meta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "div", 500)(74, "div", 480)(75, "label", 481);
    \u0275\u0275text(76, "Duration (Hours)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "div", 524);
    \u0275\u0275text(78);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "div", 480)(80, "label", 481);
    \u0275\u0275text(81, "Lectures");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "div", 524);
    \u0275\u0275text(83);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 480)(85, "label", 481);
    \u0275\u0275text(86, "Difficulty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "div", 524);
    \u0275\u0275text(88);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "div", 480)(90, "label", 481);
    \u0275\u0275text(91, "Pricing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "div", 524);
    \u0275\u0275text(93);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(19);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedCourse.title, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("https://ufs.net.in/inmyacademy/courses/", ctx_r1.getSlug(ctx_r1.selectedCourse.title), "");
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx_r1.selectedCourse.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.selectedCourse.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCourse.about_the_track);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedCourse.what_will_i_learn || "No learning outcomes specified.", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCourse.phase1 || ctx_r1.selectedCourse.final || ctx_r1.selectedCourse.extras);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCourse.target_audience);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCourse.materials_included);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCourse.requirements);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCourse.lessons && ctx_r1.selectedCourse.lessons.length > 0);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.selectedCourse.visibility !== "Private");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCourse.visibility === "Private");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedCourse.visibility || "Public");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.selectedCourse.is_public ? "consent-badge" : "rejected-badge");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedCourse.is_public ? "Live" : "Hidden", " ");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.selectedCourse.image);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCourse.image);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.selectedCourse.image);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedCourse.duration_hours || 0, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedCourse.lectures || (ctx_r1.selectedCourse.lessons == null ? null : ctx_r1.selectedCourse.lessons.length) || 0, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedCourse.difficulty || "Intermediate", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedCourse.pricing || "Free", " ");
  }
}
function AdminDashboardComponent_div_98_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275template(1, AdminDashboardComponent_div_98_div_7_div_1_Template, 8, 6, "div", 85)(2, AdminDashboardComponent_div_98_div_7_div_2_Template, 134, 19, "div", 293)(3, AdminDashboardComponent_div_98_div_7_div_3_Template, 94, 23, "div", 293);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isAddingCourse && !ctx_r1.isViewingCourse);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isAddingCourse);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isViewingCourse && ctx_r1.selectedCourse);
  }
}
function AdminDashboardComponent_div_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275template(1, AdminDashboardComponent_div_98_div_1_Template, 70, 9, "div", 63)(2, AdminDashboardComponent_div_98_div_2_Template, 4, 3, "div", 63)(3, AdminDashboardComponent_div_98_div_3_Template, 22, 2, "div", 63)(4, AdminDashboardComponent_div_98_div_4_Template, 52, 8, "div", 63)(5, AdminDashboardComponent_div_98_div_5_Template, 76, 12, "div", 63)(6, AdminDashboardComponent_div_98_div_6_Template, 18, 2, "div", 63)(7, AdminDashboardComponent_div_98_div_7_Template, 4, 3, "div", 63);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "dashboard");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "registrations");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "projects");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "docUpload");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "leaderboard");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "users");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "courses");
  }
}
function AdminDashboardComponent_div_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 548);
    \u0275\u0275element(1, "div", 549);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading dashboard data...");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_div_100_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 550);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_100_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r56);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeUserModal());
    });
    \u0275\u0275elementStart(1, "div", 551);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_100_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r56);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "button", 552);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_100_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r56);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeUserModal());
    });
    \u0275\u0275text(3, "\xD7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 553)(5, "h2");
    \u0275\u0275text(6, "Edit System User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 291);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 554)(11, "div", 555)(12, "label");
    \u0275\u0275text(13, "Username");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 555)(17, "label");
    \u0275\u0275text(18, "System Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "select", 556, 3)(21, "option", 557);
    \u0275\u0275text(22, "User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 558);
    \u0275\u0275text(24, "Super Admin");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "div", 559)(26, "button", 560);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_100_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r56);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeUserModal());
    });
    \u0275\u0275text(27, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 159);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_100_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r56);
      const roleSelect_r57 = \u0275\u0275reference(20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveUser(roleSelect_r57.value));
    });
    \u0275\u0275text(29, "Save Changes");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngClass", ctx_r1.selectedUser.role);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 5, ctx_r1.selectedUser.role));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.selectedUser.username);
    \u0275\u0275advance(6);
    \u0275\u0275property("selected", ctx_r1.selectedUser.role === "user");
    \u0275\u0275advance(2);
    \u0275\u0275property("selected", ctx_r1.selectedUser.role === "superadmin");
  }
}
function AdminDashboardComponent_div_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 550);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_101_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r58);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAdditionalModal());
    });
    \u0275\u0275elementStart(1, "div", 561);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_101_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r58);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "button", 552);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_101_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r58);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAdditionalModal());
    });
    \u0275\u0275text(3, "\xD7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 553)(5, "div")(6, "h2", 562);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 563);
    \u0275\u0275text(9, "Additional Information");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 564)(11, "div", 555)(12, "label", 565);
    \u0275\u0275text(13, "What Will I Learn?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 566);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 555)(17, "label", 565);
    \u0275\u0275text(18, "Target Audience");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 566);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 555)(22, "label", 565);
    \u0275\u0275text(23, "Course Duration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 567);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 555)(27, "label", 565);
    \u0275\u0275text(28, "Materials Included");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p", 566);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 555)(32, "label", 565);
    \u0275\u0275text(33, "Requirements/Instructions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p", 566);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 568)(37, "button", 159);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_101_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r58);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAdditionalModal());
    });
    \u0275\u0275text(38, "Close");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.viewingAdditionalCourse.title);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.additionalData.what_will_i_learn || "Not specified");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.additionalData.target_audience || "Not specified");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.additionalData.duration_hours, " hour(s) ", ctx_r1.additionalData.duration_mins, " min(s)");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.additionalData.materials_included || "Not specified");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.additionalData.requirements || "Not specified");
  }
}
var AdminDashboardComponent = class _AdminDashboardComponent {
  getMediaUrl(path) {
    if (!path)
      return "";
    if (path.startsWith("http://") || path.startsWith("https://")) {
      return path;
    }
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    if (cleanPath.startsWith("/uploads/")) {
      return `${environment.uploadsUrl}${cleanPath.substring(8)}`;
    }
    return `${environment.uploadsUrl}${cleanPath}`;
  }
  constructor(http, router, sanitizer) {
    this.http = http;
    this.router = router;
    this.sanitizer = sanitizer;
    this.environment = environment;
    this.uploadsUrl = environment.uploadsUrl;
    this.stats = { totalRegistrations: 0, totalUsers: 0, totalChallenges: 0 };
    this.openChallenges = OPEN_CHALLENGES.filter((c) => c.entryFee === 1);
    this.registrations = [];
    this.users = [];
    this.activeTab = "dashboard";
    this.activeCourseTab = "overview";
    this.adminLeaderboardData = [];
    this.newLeaderboardEntry = {
      CompetitionFormat: "SCHOOL",
      CompetitionPhase: "Online Phase",
      CategoryTrack: "All",
      ParticipantName: "",
      Country: "",
      TeamsCount: null,
      Score: null,
      Award: ""
    };
    this.courses = [];
    this.selectedCourse = null;
    this.editingCourseId = -1;
    this.editingCourseIndex = -1;
    this.isAddingCourse = false;
    this.isViewingCourse = false;
    this.activeLessonVideoIndex = null;
    this.isUploadingLessonVideo = false;
    this.newCourseData = {
      title: "New Course",
      description: "",
      difficulty: "Intermediate",
      isPublic: true,
      pricing: "Free",
      visibility: "Public",
      optionsTab: "General",
      what_will_i_learn: "",
      target_audience: "",
      duration_hours: 0,
      duration_mins: 0,
      materials_included: "",
      requirements: "",
      about_the_track: "",
      phase1: "",
      final: "",
      extras: "",
      image: "",
      lessons: [],
      lectures: 0,
      students_max: 0,
      level: "All Levels",
      language: "English",
      certificate: "Yes"
    };
    this.additionalData = {
      what_will_i_learn: "",
      target_audience: "",
      duration_hours: 0,
      duration_mins: 0,
      materials_included: "",
      requirements: ""
    };
    this.isSavingAdditional = false;
    this.isLoading = true;
    this.selectedParticipant = null;
    this.selectedUser = null;
    this.selectedTypeFilter = "all";
    this.moduleProjects = [];
    this.adminDocuments = [];
    this.docUploadForm = {
      category: "Open Challenges",
      courseId: "",
      moduleName: "",
      title: "",
      file: null
    };
    this.isAddingTopic = false;
    this.newTopicData = {
      title: "",
      description: "",
      video: "",
      image: ""
    };
    this.expandedModules = /* @__PURE__ */ new Set();
    this.activeModuleVideoIndex = null;
    this.activeSyllabusVideoIndex = null;
    this.selectedCourseForTopic = null;
    this.selectedCourseForAdditional = null;
    this.viewingAdditionalCourse = null;
    this.savedSelection = null;
  }
  ngOnInit() {
    this.fetchData();
  }
  fetchData() {
    this.isLoading = true;
    const apiUrl = `${environment.apiUrl}/admin`;
    this.http.get(`${apiUrl}/stats`).subscribe({
      next: (data) => {
        this.stats = data;
        this.checkLoading();
      },
      error: (err) => {
        console.error("Error fetching stats:", err);
        this.checkLoading();
      }
    });
    this.http.get(`${apiUrl}/registrations`).subscribe({
      next: (data) => {
        this.registrations = data;
        this.checkLoading();
      },
      error: (err) => {
        console.error("Error fetching registrations:", err);
        this.checkLoading();
      }
    });
    this.http.get(`${apiUrl}/users`).subscribe({
      next: (data) => {
        this.users = data;
        this.checkLoading();
      },
      error: (err) => {
        console.error("Error fetching users:", err);
        this.checkLoading();
      }
    });
    this.fetchCourses();
  }
  fetchCourses() {
    this.http.get(`${environment.apiUrl}/courses`).subscribe({
      next: (data) => {
        this.courses = data;
      },
      error: (err) => console.error("Error fetching courses:", err)
    });
  }
  fetchModuleProjects() {
    this.http.get(`${environment.apiUrl}/admin/projects`).subscribe({
      next: (data) => {
        this.moduleProjects = data;
      },
      error: (err) => console.error("Error fetching module projects:", err)
    });
  }
  fetchAdminDocuments() {
    this.http.get(`${environment.apiUrl}/admin/documents`).subscribe({
      next: (data) => {
        this.adminDocuments = data;
      },
      error: (err) => console.error("Error fetching admin documents:", err)
    });
  }
  deleteModuleProject(id) {
    if (!confirm("Are you sure you want to delete this submitted project?"))
      return;
    this.http.delete(`${environment.apiUrl}/admin/projects/${id}`).subscribe({
      next: () => {
        this.fetchModuleProjects();
      },
      error: (err) => console.error("Error deleting project:", err)
    });
  }
  deleteAdminDocument(id) {
    if (!confirm("Are you sure you want to delete this document?"))
      return;
    this.http.delete(`${environment.apiUrl}/admin/documents/${id}`).subscribe({
      next: () => {
        this.fetchAdminDocuments();
      },
      error: (err) => console.error("Error deleting document:", err)
    });
  }
  onDocFileSelected(event) {
    const input = event.target;
    if (input.files?.length) {
      this.docUploadForm.file = input.files[0];
    }
  }
  getSelectedCourseModules() {
    if (!this.docUploadForm.courseId)
      return [];
    const course = this.courses.find((c) => c.id == this.docUploadForm.courseId);
    if (!course)
      return [];
    let lessons = [];
    if (Array.isArray(course.lessons)) {
      lessons = course.lessons;
    } else if (typeof course.lessons === "string") {
      try {
        lessons = JSON.parse(course.lessons);
      } catch (e) {
      }
    }
    return lessons;
  }
  uploadAdminDocument() {
    if (!this.docUploadForm.file) {
      alert("Please select a document file to upload.");
      return;
    }
    let courseTitle = "";
    if (this.docUploadForm.category === "Mastery Battles" && this.docUploadForm.courseId) {
      const selectedCourseObj = this.courses.find((c) => c.id == this.docUploadForm.courseId);
      courseTitle = selectedCourseObj ? selectedCourseObj.title : "";
    } else if (this.docUploadForm.category === "Open Challenges" && this.docUploadForm.courseId) {
      const selectedChallengeObj = this.openChallenges.find((c) => c.id == this.docUploadForm.courseId);
      courseTitle = selectedChallengeObj ? selectedChallengeObj.title : "";
    } else if (this.docUploadForm.category === "School Competitions" && this.docUploadForm.courseId) {
      courseTitle = this.docUploadForm.courseId;
    }
    const formData = new FormData();
    formData.append("file", this.docUploadForm.file);
    formData.append("category", this.docUploadForm.category);
    formData.append("courseTitle", courseTitle);
    formData.append("moduleName", this.docUploadForm.moduleName || "");
    formData.append("title", this.docUploadForm.title || this.docUploadForm.file.name);
    this.http.post(`${environment.apiUrl}/upload/document`, formData).subscribe({
      next: (res) => {
        alert("Document uploaded successfully!");
        this.docUploadForm.title = "";
        this.docUploadForm.file = null;
        this.fetchAdminDocuments();
      },
      error: (err) => {
        console.error("Failed to upload document:", err);
        const errMsg = err.error?.error || err.error?.message || "Failed to upload document.";
        alert(errMsg);
      }
    });
  }
  get publishedCoursesCount() {
    return this.courses.filter((c) => c.visibility === "Public").length;
  }
  checkLoading() {
    this.isLoading = false;
  }
  sanitizeHtml(html) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  getCourseDescriptionPreview(html) {
    if (!html) {
      return "";
    }
    const stripped = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    return stripped.length > 60 ? stripped.slice(0, 60) + "..." : stripped;
  }
  switchTab(tab) {
    this.activeTab = tab;
    if (tab === "projects") {
      this.fetchModuleProjects();
    } else if (tab === "docUpload") {
      this.fetchAdminDocuments();
      this.fetchCourses();
    } else if (tab === "leaderboard") {
      this.fetchAdminLeaderboard();
    }
  }
  getTabTitle() {
    switch (this.activeTab) {
      case "dashboard":
        return "Dashboard Overview";
      case "registrations":
        return "Registration Entries";
      case "users":
        return "System Users";
      case "courses":
        return "Course Management";
      case "projects":
        return "Project Submissions";
      case "docUpload":
        return "Document Upload";
      case "leaderboard":
        return "Leaderboard Management";
      default:
        return "Admin Dashboard";
    }
  }
  // LEADERBOARD ADMIN METHODS
  fetchAdminLeaderboard() {
    this.http.get(`${environment.apiUrl}/leaderboard/all`).subscribe({
      next: (data) => {
        if (data && data.success) {
          this.adminLeaderboardData = data.data;
        }
      },
      error: (err) => console.error("Error fetching admin leaderboard data:", err)
    });
  }
  addLeaderboardEntry() {
    if (!this.newLeaderboardEntry.ParticipantName || !this.newLeaderboardEntry.Country || this.newLeaderboardEntry.Score === null) {
      alert("Please fill out all required fields.");
      return;
    }
    this.http.post(`${environment.apiUrl}/leaderboard`, this.newLeaderboardEntry).subscribe({
      next: (res) => {
        alert("Entry added successfully!");
        this.fetchAdminLeaderboard();
        this.newLeaderboardEntry.ParticipantName = "";
        this.newLeaderboardEntry.Country = "";
        this.newLeaderboardEntry.TeamsCount = null;
        this.newLeaderboardEntry.Score = null;
        this.newLeaderboardEntry.Award = "";
      },
      error: (err) => {
        console.error("Error adding leaderboard entry:", err);
        alert("Failed to add entry.");
      }
    });
  }
  deleteLeaderboardEntry(id) {
    if (!confirm("Are you sure you want to delete this leaderboard entry?"))
      return;
    this.http.delete(`${environment.apiUrl}/leaderboard/${id}`).subscribe({
      next: () => {
        this.fetchAdminLeaderboard();
      },
      error: (err) => console.error("Error deleting entry:", err)
    });
  }
  switchCourseTab(tab) {
    this.activeCourseTab = tab;
    if (tab !== "topic") {
      this.isAddingTopic = false;
      this.selectedCourseForTopic = null;
    }
    if (tab !== "advanced") {
      this.selectedCourseForAdditional = null;
    }
  }
  selectCourseForTopic(course) {
    this.selectedCourseForTopic = __spreadValues({}, course);
    if (this.selectedCourseForTopic && typeof this.selectedCourseForTopic.lessons === "string") {
      try {
        this.selectedCourseForTopic.lessons = JSON.parse(this.selectedCourseForTopic.lessons);
      } catch (e) {
        console.error("Failed to parse course lessons", e);
        this.selectedCourseForTopic.lessons = [];
      }
    }
    if (!Array.isArray(this.selectedCourseForTopic.lessons)) {
      this.selectedCourseForTopic.lessons = [];
    }
    if (this.selectedCourseForTopic.lessons.length > 0 && this.selectedCourseForTopic.lessons[0] !== null && typeof this.selectedCourseForTopic.lessons[0] === "object" && !this.selectedCourseForTopic.lessons[0].hasOwnProperty("moduleTitle")) {
      const oldLessons = this.selectedCourseForTopic.lessons;
      this.selectedCourseForTopic.lessons = [
        {
          moduleTitle: "Module 1",
          syllabusItems: oldLessons.map((l) => ({
            title: l.title || "",
            duration: l.duration || "",
            description: l.syllabus || l.description || "",
            video: l.video || ""
          }))
        }
      ];
    }
    this.expandedModules = new Set(this.selectedCourseForTopic.lessons.map((_, i) => i));
    this.isAddingTopic = false;
  }
  selectCourseForAdditional(course) {
    this.selectedCourseForAdditional = course;
  }
  // ── Module-level operations ──────────────────────────────
  addModule() {
    if (!this.selectedCourseForTopic)
      return;
    if (!Array.isArray(this.selectedCourseForTopic.lessons)) {
      this.selectedCourseForTopic.lessons = [];
    }
    const newIndex = this.selectedCourseForTopic.lessons.length;
    this.selectedCourseForTopic.lessons.push({
      moduleTitle: `Module ${newIndex + 1}`,
      syllabusItems: []
    });
    this.expandedModules.add(newIndex);
    setTimeout(() => {
      const moduleCard = document.getElementById(`module-card-${newIndex}`);
      if (moduleCard) {
        moduleCard.scrollIntoView({ behavior: "smooth", block: "start" });
        moduleCard.classList.add("newly-created");
        setTimeout(() => moduleCard.classList.remove("newly-created"), 2500);
        const titleInput = document.getElementById(`module-title-input-${newIndex}`);
        if (titleInput) {
          titleInput.focus();
          titleInput.select();
        }
      }
    }, 100);
  }
  removeModule(moduleIndex) {
    if (!this.selectedCourseForTopic || !Array.isArray(this.selectedCourseForTopic.lessons))
      return;
    this.selectedCourseForTopic.lessons.splice(moduleIndex, 1);
    const newExpanded = /* @__PURE__ */ new Set();
    this.expandedModules.forEach((i) => {
      if (i < moduleIndex)
        newExpanded.add(i);
      else if (i > moduleIndex)
        newExpanded.add(i - 1);
    });
    this.expandedModules = newExpanded;
  }
  toggleModule(moduleIndex) {
    if (this.expandedModules.has(moduleIndex)) {
      this.expandedModules.delete(moduleIndex);
    } else {
      this.expandedModules.add(moduleIndex);
    }
  }
  isModuleExpanded(moduleIndex) {
    return this.expandedModules.has(moduleIndex);
  }
  // ── Syllabus Item operations ─────────────────────────────
  addSyllabusItem(moduleIndex) {
    if (!this.selectedCourseForTopic)
      return;
    const mod = this.selectedCourseForTopic.lessons[moduleIndex];
    if (!mod)
      return;
    if (!Array.isArray(mod.syllabusItems))
      mod.syllabusItems = [];
    mod.syllabusItems.push({ title: "", duration: "", description: "", video: "" });
  }
  removeSyllabusItem(moduleIndex, itemIndex) {
    if (!this.selectedCourseForTopic)
      return;
    const mod = this.selectedCourseForTopic.lessons[moduleIndex];
    if (!mod || !Array.isArray(mod.syllabusItems))
      return;
    mod.syllabusItems.splice(itemIndex, 1);
  }
  // Legacy method kept for backward compat calls in HTML
  addTopicLessonTab() {
    this.addModule();
  }
  removeTopicLesson(index) {
    this.removeModule(index);
  }
  toggleAddTopic(val) {
    this.isAddingTopic = val;
    if (val) {
      this.newTopicData = {
        title: "",
        description: "",
        video: "",
        image: this.selectedCourseForTopic?.displayImage || ""
      };
    }
  }
  openTopicLessonVideoUploader(index) {
    this.activeLessonVideoIndex = index;
    if (this.lessonVideoUploadInput?.nativeElement) {
      this.lessonVideoUploadInput.nativeElement.value = "";
      this.lessonVideoUploadInput.nativeElement.click();
    }
  }
  // New: open uploader for a specific syllabus item within a module
  openSyllabusVideoUploader(moduleIndex, itemIndex) {
    this.activeModuleVideoIndex = moduleIndex;
    this.activeSyllabusVideoIndex = itemIndex;
    if (this.lessonVideoUploadInput?.nativeElement) {
      this.lessonVideoUploadInput.nativeElement.value = "";
      this.lessonVideoUploadInput.nativeElement.click();
    }
  }
  removeSyllabusVideo(moduleIndex, itemIndex) {
    const mod = this.selectedCourseForTopic?.lessons?.[moduleIndex];
    if (mod && Array.isArray(mod.syllabusItems) && mod.syllabusItems[itemIndex]) {
      mod.syllabusItems[itemIndex].video = "";
    }
  }
  getAttachedVideosCount() {
    if (!this.selectedCourseForTopic || !Array.isArray(this.selectedCourseForTopic.lessons))
      return 0;
    let count = 0;
    for (const mod of this.selectedCourseForTopic.lessons) {
      if (Array.isArray(mod.syllabusItems)) {
        count += mod.syllabusItems.filter((s) => !!s.video).length;
      }
    }
    return count;
  }
  getModulesCount() {
    if (!this.selectedCourseForTopic || !Array.isArray(this.selectedCourseForTopic.lessons))
      return 0;
    return this.selectedCourseForTopic.lessons.length;
  }
  getTotalSyllabusCount() {
    if (!this.selectedCourseForTopic || !Array.isArray(this.selectedCourseForTopic.lessons))
      return 0;
    let count = 0;
    for (const mod of this.selectedCourseForTopic.lessons) {
      if (Array.isArray(mod.syllabusItems))
        count += mod.syllabusItems.length;
    }
    return count;
  }
  isUploadingForModule(moduleIndex, itemIndex) {
    return this.isUploadingLessonVideo && this.activeModuleVideoIndex === moduleIndex && this.activeSyllabusVideoIndex === itemIndex;
  }
  hasModuleVideos(mod) {
    if (!mod || !Array.isArray(mod.syllabusItems))
      return false;
    return mod.syllabusItems.some((s) => s.video && s.video.startsWith("http"));
  }
  removeLessonVideo(index) {
    if (this.selectedCourseForTopic && Array.isArray(this.selectedCourseForTopic.lessons) && this.selectedCourseForTopic.lessons[index]) {
      this.selectedCourseForTopic.lessons[index].video = "";
    }
  }
  onTopicLessonVideoUpload(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file || !this.selectedCourseForTopic)
      return;
    const formData = new FormData();
    formData.append("file", file);
    const modIdx = this.activeModuleVideoIndex;
    const sylIdx = this.activeSyllabusVideoIndex;
    this.isUploadingLessonVideo = true;
    this.http.post(`${environment.apiUrl}/upload`, formData).subscribe({
      next: (response) => {
        if (modIdx !== null && sylIdx !== null) {
          const mod = this.selectedCourseForTopic?.lessons?.[modIdx];
          if (mod && Array.isArray(mod.syllabusItems) && mod.syllabusItems[sylIdx]) {
            mod.syllabusItems[sylIdx].video = response.url;
          }
        }
        this.activeModuleVideoIndex = null;
        this.activeSyllabusVideoIndex = null;
        this.activeLessonVideoIndex = null;
        this.isUploadingLessonVideo = false;
        input.value = "";
      },
      error: (err) => {
        this.isUploadingLessonVideo = false;
        console.error("Failed to upload topic lesson video", err);
        alert("Failed to upload lesson video");
      }
    });
  }
  closeTopicModal() {
    this.selectedCourseForTopic = null;
    this.isAddingTopic = false;
  }
  saveTopic() {
    if (!this.newTopicData.title || !this.newTopicData.title.trim()) {
      alert("Topic title is required.");
      return;
    }
    const topicEntry = {
      title: this.newTopicData.title.trim(),
      syllabus: this.newTopicData.description || "",
      video: this.newTopicData.video || "",
      image: this.newTopicData.image || ""
    };
    if (!this.selectedCourseForTopic) {
      alert("No course selected for adding a topic.");
      return;
    }
    if (!Array.isArray(this.selectedCourseForTopic.lessons)) {
      this.selectedCourseForTopic.lessons = [];
    }
    this.selectedCourseForTopic.lessons.push(topicEntry);
    this.persistSelectedCourseForTopic("Topic added successfully!");
  }
  saveTopicChanges() {
    if (!this.selectedCourseForTopic) {
      alert("No topic selected to save.");
      return;
    }
    this.persistSelectedCourseForTopic("Topic saved successfully!");
  }
  persistSelectedCourseForTopic(successMessage) {
    if (!this.selectedCourseForTopic) {
      return;
    }
    const payload = {
      title: this.selectedCourseForTopic.title,
      description: this.selectedCourseForTopic.description || "",
      difficulty: this.selectedCourseForTopic.difficulty || "Intermediate",
      pricing: this.selectedCourseForTopic.pricing || "Free",
      visibility: this.selectedCourseForTopic.visibility || "Public",
      is_public: this.selectedCourseForTopic.is_public !== void 0 ? this.selectedCourseForTopic.is_public ? 1 : 0 : 1,
      image: this.selectedCourseForTopic.image || "",
      about_the_track: this.selectedCourseForTopic.about_the_track || "",
      phase1: this.selectedCourseForTopic.phase1 || "",
      final: this.selectedCourseForTopic.final || "",
      extras: this.selectedCourseForTopic.extras || "",
      lessons: JSON.stringify(this.selectedCourseForTopic.lessons || []),
      what_will_i_learn: this.selectedCourseForTopic.what_will_i_learn || "",
      target_audience: this.selectedCourseForTopic.target_audience || "",
      duration_hours: Number(this.selectedCourseForTopic.duration_hours) || 0,
      duration_mins: Number(this.selectedCourseForTopic.duration_mins) || 0,
      materials_included: this.selectedCourseForTopic.materials_included || "",
      requirements: this.selectedCourseForTopic.requirements || "",
      lectures: this.getTotalSyllabusCount() || Number(this.selectedCourseForTopic.lectures) || 0,
      students_max: Number(this.selectedCourseForTopic.students_max) || 0,
      level: this.selectedCourseForTopic.level || "All Levels",
      language: this.selectedCourseForTopic.language || "English",
      certificate: this.selectedCourseForTopic.certificate || "Yes"
    };
    this.http.put(`${environment.apiUrl}/courses/${this.selectedCourseForTopic.id}`, payload).subscribe({
      next: () => {
        this.fetchCourses();
        this.isAddingTopic = false;
        this.newTopicData = { title: "", description: "", video: "", image: "" };
        alert(successMessage);
      },
      error: (err) => {
        console.error("Failed to save topic:", err);
        alert("Failed to save topic. Please try again.");
      }
    });
  }
  viewAdditionalInfo(course) {
    this.viewingAdditionalCourse = course;
  }
  closeAdditionalModal() {
    this.viewingAdditionalCourse = null;
  }
  saveAdditional() {
    this.isSavingAdditional = true;
    console.log("Saving additional data:", this.additionalData);
    setTimeout(() => {
      this.isSavingAdditional = false;
      alert("Additional course information saved!");
    }, 500);
  }
  toggleAddCourse(val) {
    if (val !== void 0) {
      this.isAddingCourse = val;
    } else {
      this.isAddingCourse = !this.isAddingCourse;
    }
    if (this.isAddingCourse) {
      if (this.editingCourseId === -1) {
        this.newCourseData = {
          title: "New Course",
          description: "",
          difficulty: "Intermediate",
          isPublic: true,
          pricing: "Free",
          visibility: "Public",
          optionsTab: "General",
          what_will_i_learn: "",
          target_audience: "",
          duration_hours: 0,
          duration_mins: 0,
          materials_included: "",
          requirements: "",
          about_the_track: "",
          phase1: "",
          final: "",
          extras: "",
          image: "",
          lessons: [],
          lectures: 0,
          students_max: 0,
          level: "All Levels",
          language: "English",
          certificate: "Yes"
        };
      }
    } else {
      this.isAddingCourse = false;
      this.editingCourseId = -1;
      this.editingCourseIndex = -1;
    }
  }
  saveSelection() {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      this.savedSelection = selection.getRangeAt(0).cloneRange();
    }
  }
  restoreSelection() {
    const selection = window.getSelection();
    if (selection && this.savedSelection) {
      selection.removeAllRanges();
      selection.addRange(this.savedSelection);
      if (this.editorRef) {
        this.editorRef.nativeElement.focus();
      }
    }
  }
  execCommand(command, value = "") {
    this.restoreSelection();
    document.execCommand(command, false, value);
    this.updateDescriptionModel();
  }
  handleEditorCommand(command, value = "") {
    if (command !== "formatBlock") {
      this.saveSelection();
    }
    this.execCommand(command, value);
  }
  createLink() {
    const url = prompt("Enter the link URL:");
    if (url) {
      this.execCommand("createLink", url);
    }
  }
  onEditorInput() {
    this.saveSelection();
    this.updateDescriptionModel();
  }
  updateDescriptionModel() {
    if (this.editorRef) {
      this.newCourseData.description = this.editorRef.nativeElement.innerHTML;
    }
  }
  triggerMediaUpload(fileInput) {
    fileInput.click();
  }
  onMediaUpload(event) {
    const input = event.target;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const formData = new FormData();
      formData.append("file", file);
      this.http.post(`${environment.apiUrl}/upload`, formData).subscribe({
        next: (response) => {
          this.execCommand("insertImage", response.url);
          input.value = "";
        },
        error: (err) => {
          console.error("Failed to upload media", err);
          alert("Failed to upload media");
        }
      });
    }
  }
  onTopicVideoUpload(event) {
    const input = event.target;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const formData = new FormData();
      formData.append("file", file);
      this.http.post(`${environment.apiUrl}/upload`, formData).subscribe({
        next: (response) => {
          this.newTopicData.video = response.url;
          input.value = "";
        },
        error: (err) => {
          console.error("Failed to upload topic video", err);
          alert("Failed to upload topic video");
        }
      });
    }
  }
  onTopicImageUpload(event) {
    const input = event.target;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const formData = new FormData();
      formData.append("file", file);
      this.http.post(`${environment.apiUrl}/upload`, formData).subscribe({
        next: (response) => {
          this.newTopicData.image = response.url;
          input.value = "";
        },
        error: (err) => {
          console.error("Failed to upload topic image", err);
          alert("Failed to upload topic image");
        }
      });
    }
  }
  triggerLessonUpload(fileInput) {
    fileInput.click();
  }
  onLessonVideoUpload(event, lessonIndex) {
    const input = event.target;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const formData = new FormData();
      formData.append("file", file);
      this.http.post(`${environment.apiUrl}/upload`, formData).subscribe({
        next: (response) => {
          const lesson = this.newCourseData.lessons[lessonIndex];
          if (lesson) {
            lesson.video = response.url;
          }
          input.value = "";
        },
        error: (err) => {
          console.error("Failed to upload lesson video", err);
          alert("Failed to upload lesson video");
        }
      });
    }
  }
  addLesson() {
    if (!Array.isArray(this.newCourseData.lessons)) {
      this.newCourseData.lessons = [];
    }
    this.newCourseData.lessons.push({ title: "", duration: "", description: "", syllabus: "", video: "" });
  }
  removeLesson(index) {
    if (Array.isArray(this.newCourseData.lessons)) {
      this.newCourseData.lessons.splice(index, 1);
    }
  }
  triggerFeaturedImageUpload(fileInput) {
    fileInput.click();
  }
  onFeaturedImageUpload(event) {
    const input = event.target;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const formData = new FormData();
      formData.append("image", file);
      this.http.post(`${environment.apiUrl}/upload`, formData).subscribe({
        next: (response) => {
          this.newCourseData.image = response.url;
          input.value = "";
        },
        error: (err) => {
          console.error("Failed to upload featured image", err);
          alert("Failed to upload featured image");
        }
      });
    }
  }
  saveCourse() {
    const editorContent = this.editorRef?.nativeElement?.innerHTML || "";
    const payload = {
      title: this.newCourseData.title,
      description: editorContent,
      difficulty: this.newCourseData.difficulty,
      pricing: this.newCourseData.pricing,
      visibility: this.newCourseData.visibility,
      is_public: this.newCourseData.isPublic,
      what_will_i_learn: this.newCourseData.what_will_i_learn,
      target_audience: this.newCourseData.target_audience,
      duration_hours: Number(this.newCourseData.duration_hours) || 0,
      duration_mins: Number(this.newCourseData.duration_mins) || 0,
      materials_included: this.newCourseData.materials_included,
      requirements: this.newCourseData.requirements,
      about_the_track: this.newCourseData.about_the_track,
      phase1: this.newCourseData.phase1,
      final: this.newCourseData.final,
      extras: this.newCourseData.extras,
      image: this.newCourseData.image,
      lessons: this.newCourseData.lessons,
      lectures: Number(this.newCourseData.lectures) || 0,
      students_max: Number(this.newCourseData.students_max) || 0,
      level: this.newCourseData.level,
      language: this.newCourseData.language,
      certificate: this.newCourseData.certificate
    };
    if (this.editingCourseId >= 0) {
      this.http.put(`${environment.apiUrl}/courses/${this.editingCourseId}`, payload).subscribe({
        next: () => {
          this.fetchCourses();
          this.editingCourseId = -1;
          this.editingCourseIndex = -1;
          this.isAddingCourse = false;
        },
        error: (err) => {
          console.error("Failed to update course:", err);
          alert("Failed to update course. Please try again.");
        }
      });
    } else {
      this.http.post(`${environment.apiUrl}/courses`, payload).subscribe({
        next: () => {
          this.fetchCourses();
          this.isAddingCourse = false;
        },
        error: (err) => {
          console.error("Failed to create course:", err);
          alert("Failed to create course. Please try again.");
        }
      });
    }
  }
  getSlug(title) {
    if (!title)
      return "";
    return title.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");
  }
  viewCourse(course) {
    this.selectedCourse = __spreadValues({}, course);
    if (this.selectedCourse && typeof this.selectedCourse.lessons === "string") {
      try {
        this.selectedCourse.lessons = JSON.parse(this.selectedCourse.lessons);
      } catch (e) {
        console.error("Failed to parse course lessons", e);
        this.selectedCourse.lessons = [];
      }
    }
    if (!Array.isArray(this.selectedCourse.lessons)) {
      this.selectedCourse.lessons = [];
    }
    this.isAddingCourse = false;
    this.isViewingCourse = true;
  }
  closeCourseModal() {
    this.selectedCourse = null;
    this.isViewingCourse = false;
  }
  editCourse(index) {
    const course = this.courses[index];
    this.editingCourseId = course.id;
    this.editingCourseIndex = index;
    let lessonsData = [];
    if (typeof course.lessons === "string") {
      try {
        lessonsData = JSON.parse(course.lessons);
      } catch (e) {
        console.error("Failed to parse course lessons", e);
        lessonsData = [];
      }
    } else if (Array.isArray(course.lessons)) {
      lessonsData = course.lessons;
    }
    this.newCourseData = {
      title: course.title,
      description: course.description || "",
      difficulty: course.difficulty || "Intermediate",
      isPublic: !!course.is_public,
      pricing: course.pricing || "Free",
      visibility: course.visibility || "Public",
      optionsTab: "General",
      what_will_i_learn: course.what_will_i_learn || "",
      target_audience: course.target_audience || "",
      duration_hours: course.duration_hours || 0,
      duration_mins: course.duration_mins || 0,
      materials_included: course.materials_included || "",
      requirements: course.requirements || "",
      about_the_track: course.about_the_track || "",
      phase1: course.phase1 || "",
      final: course.final || "",
      extras: course.extras || "",
      image: course.image || "",
      lessons: lessonsData,
      lectures: course.lectures || 0,
      students_max: course.students_max || 0,
      level: course.level || "All Levels",
      language: course.language || "English",
      certificate: course.certificate || "Yes"
    };
    this.isAddingCourse = true;
    setTimeout(() => {
      if (this.editorRef) {
        let combinedContent = this.newCourseData.description || "";
        if (this.newCourseData.about_the_track) {
          combinedContent += (combinedContent ? "<br><br>" : "") + this.newCourseData.about_the_track;
        }
        this.editorRef.nativeElement.innerHTML = combinedContent;
      }
    }, 0);
  }
  editCourseById(courseId) {
    const index = this.courses.findIndex((c) => c.id === courseId);
    if (index !== -1) {
      this.editCourse(index);
    }
  }
  deleteCourse(index) {
    const course = this.courses[index];
    if (confirm(`Are you sure you want to delete "${course.title}"? This cannot be undone.`)) {
      this.http.delete(`${environment.apiUrl}/courses/${course.id}`).subscribe({
        next: () => this.fetchCourses(),
        error: (err) => {
          console.error("Failed to delete course:", err);
          alert("Failed to delete course. Please try again.");
        }
      });
    }
  }
  get filteredRegistrations() {
    if (this.selectedTypeFilter === "all")
      return this.registrations;
    return this.registrations.filter((r) => r.registration_type === this.selectedTypeFilter);
  }
  get registrationsCount() {
    return {
      all: this.registrations.length,
      school: this.registrations.filter((r) => r.registration_type === "school").length,
      individual: this.registrations.filter((r) => r.registration_type === "individual").length
    };
  }
  setTypeFilter(type) {
    this.selectedTypeFilter = type;
  }
  viewParticipant(reg) {
    this.selectedParticipant = __spreadValues({}, reg);
    if (this.selectedParticipant.teams_data && typeof this.selectedParticipant.teams_data === "string") {
      try {
        this.selectedParticipant.parsedTeams = JSON.parse(this.selectedParticipant.teams_data);
      } catch (e) {
        console.error("Failed to parse teams data", e);
      }
    }
  }
  objectKeys(obj) {
    if (!obj)
      return [];
    return Object.keys(obj).filter((key) => obj[key] && obj[key].trim() !== "");
  }
  getGroupedTeams(studentNames) {
    if (!studentNames)
      return [];
    const grouped = {};
    for (const key of Object.keys(studentNames)) {
      const name = studentNames[key];
      if (!name || name.trim() === "")
        continue;
      const parts = key.split("-");
      if (parts.length === 3) {
        const category = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
        const teamNum = parseInt(parts[1]) + 1;
        const memberNum = parts[2];
        const teamName = `${category} Team ${teamNum}`;
        if (!grouped[teamName])
          grouped[teamName] = [];
        grouped[teamName].push({ label: `Member ${memberNum}`, name });
      }
    }
    return Object.keys(grouped).map((teamName) => ({
      teamName,
      members: grouped[teamName]
    }));
  }
  deleteParticipant(id) {
    if (confirm("Are you sure you want to delete this registration? This action cannot be undone.")) {
      this.http.delete(`${environment.apiUrl}/admin/registrations/${id}`).subscribe({
        next: () => {
          this.fetchData();
        },
        error: (err) => {
          console.error("Failed to delete registration", err);
          alert("Failed to delete registration. Please try again.");
        }
      });
    }
  }
  closeModal() {
    this.selectedParticipant = null;
  }
  editUser(user) {
    this.selectedUser = __spreadValues({}, user);
  }
  closeUserModal() {
    this.selectedUser = null;
  }
  saveUser(role) {
    if (!this.selectedUser)
      return;
    this.http.put(`${environment.apiUrl}/admin/users/${this.selectedUser.id}`, { role }).subscribe({
      next: () => {
        this.fetchData();
        this.closeUserModal();
      },
      error: (err) => {
        console.error("Failed to update user", err);
        alert("Failed to update user. Please try again.");
      }
    });
  }
  logout() {
    this.router.navigate(["/login"]);
  }
  static {
    this.\u0275fac = function AdminDashboardComponent_Factory(t) {
      return new (t || _AdminDashboardComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DomSanitizer));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboardComponent, selectors: [["app-admin-dashboard"]], viewQuery: function AdminDashboardComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.editorRef = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.lessonVideoUploadInput = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 102, vars: 19, consts: [["lessonVideoUploadInput", ""], ["editorRef", ""], ["featuredImageUpload", ""], ["roleSelect", ""], [1, "admin-layout"], [1, "sidebar"], [1, "brand", 2, "background", "#ffffff", "padding", "16px 22px", "justify-content", "center"], ["src", "assets/Logo-resized.svg", "alt", "inmyacademy logo", 2, "height", "50px", "width", "auto"], [1, "nav-menu"], [1, "nav-item", 3, "click"], [1, "icon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x", "3", "y", "3", "width", "7", "height", "9"], ["x", "14", "y", "3", "width", "7", "height", "5"], ["x", "14", "y", "12", "width", "7", "height", "9"], ["x", "3", "y", "16", "width", "7", "height", "5"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"], ["points", "14 2 14 8 20 8"], ["x1", "16", "y1", "13", "x2", "8", "y2", "13"], ["x1", "16", "y1", "17", "x2", "8", "y2", "17"], ["points", "10 9 9 9 8 9"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], ["d", "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"], ["d", "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"], ["x1", "12", "y1", "18", "x2", "12", "y2", "12"], ["x1", "9", "y1", "15", "x2", "15", "y2", "15"], ["d", "M12 20v-6M6 20V10M18 20V4"], [1, "logout-container"], [1, "logout-btn", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"], ["points", "16 17 21 12 16 7"], ["x1", "21", "y1", "12", "x2", "9", "y2", "12"], [1, "main-content"], [1, "topbar"], [1, "topbar-title-section"], [1, "system-status-pill"], [1, "status-dot"], [1, "topbar-actions"], [1, "search-box"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "11", "cy", "11", "r", "8"], ["x1", "21", "y1", "21", "x2", "16.65", "y2", "16.65"], ["type", "text", "placeholder", "Quick search..."], ["title", "Notifications", 1, "notification-btn"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"], ["d", "M13.73 21a2 2 0 0 1-3.46 0"], [1, "notification-dot"], [1, "admin-profile"], [1, "avatar-container"], [1, "avatar"], [1, "online-indicator"], [1, "admin-info"], [1, "admin-name"], [1, "admin-role"], ["class", "content-wrapper", 4, "ngIf"], ["class", "loading-spinner", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "content-wrapper"], ["class", "tab-content", 4, "ngIf"], [1, "tab-content"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-icon", "registrations-icon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "26", "height", "26", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "stat-info"], [1, "stat-value-row"], [1, "stat-value"], [1, "trend-badge", "positive"], [1, "stat-icon", "users-icon"], [1, "trend-badge", "neutral"], [1, "stat-icon", "challenges-icon"], ["d", "M8 21h8"], ["d", "M12 17v4"], ["d", "M7 4h10v6a5 5 0 0 1-10 0V4Z"], ["d", "M3 4h4v6a2 2 0 0 0 2 2h0"], ["d", "M21 4h-4v6a2 2 0 0 1-2 2h0"], [1, "recent-section"], [1, "table-container"], [1, "data-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "badge", "challenge-badge"], [1, "badge", "category-badge"], ["colspan", "5", 1, "empty-state"], ["class", "type-filters", 4, "ngIf"], ["class", "table-container", "style", "margin-top: 20px;", 4, "ngIf"], ["class", "reg-view-page fade-in", 4, "ngIf"], [1, "type-filters"], [1, "type-filter-btn", 3, "click"], [1, "count-badge"], [1, "count-badge", "school-count"], [1, "count-badge", "individual-count"], [1, "table-container", 2, "margin-top", "20px"], [1, "data-table", "full-width"], [1, "user-details"], [1, "type-badge", 3, "ngClass"], [1, "meta"], [1, "badge", "category-badge", 2, "margin-top", "4px"], [2, "display", "flex", "gap", "8px"], [1, "action-btn", "flex-center", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 2, "margin-right", "6px"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], ["onmouseover", "this.style.background='rgba(229, 62, 62, 0.1)'; this.style.borderColor='rgba(229, 62, 62, 0.3)';", "onmouseout", "this.style.background='rgba(229, 62, 62, 0.05)'; this.style.borderColor='rgba(229, 62, 62, 0.2)';", 1, "action-btn", "flex-center", 2, "color", "#e53e3e", "border-color", "rgba(229, 62, 62, 0.2)", "background", "rgba(229, 62, 62, 0.05)", 3, "click"], ["points", "3 6 5 6 21 6"], ["d", "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"], ["colspan", "6", 1, "empty-state"], [1, "reg-view-page", "fade-in"], [1, "reg-view-topbar"], [1, "back-nav-btn", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x1", "19", "y1", "12", "x2", "5", "y2", "12"], ["points", "12 19 5 12 12 5"], [1, "reg-view-top-actions"], [1, "reg-id-pill"], ["title", "Delete this registration", 1, "delete-reg-btn", 3, "click"], ["width", "15", "height", "15", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["title", "Close view", 1, "close-view-btn", 3, "click"], [1, "reg-hero-card"], [1, "reg-hero-main"], [1, "reg-avatar", 3, "ngClass"], ["width", "28", "height", "28", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 4, "ngIf"], [1, "reg-hero-info"], [1, "reg-title-row"], [1, "reg-entity-name"], [1, "type-pill", 3, "ngClass"], ["class", "category-pill-badge", 4, "ngIf"], [1, "reg-meta-chips"], [1, "meta-chip"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"], ["points", "22,6 12,13 2,6"], [1, "meta-link", 3, "href"], ["class", "meta-chip", 4, "ngIf"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2", "ry", "2"], ["x1", "16", "y1", "2", "x2", "16", "y2", "6"], ["x1", "8", "y1", "2", "x2", "8", "y2", "6"], ["x1", "3", "y1", "10", "x2", "21", "y2", "10"], [1, "reg-details-grid"], [1, "reg-card"], [1, "reg-card-header"], [1, "reg-card-icon", "trophy-icon"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M6 9H4a2 2 0 0 0-2 2v1a5 5 0 0 0 5 5h.09M18 9h2a2 2 0 0 1 2 2v1a5 5 0 0 1-5 5h-.09M6 3h12v10a6 6 0 0 1-12 0V3zM9 21h6M12 17v4"], [1, "reg-card-body"], [1, "field-item"], [1, "field-label"], [1, "field-value", "highlight-value"], [1, "field-value"], [1, "reg-card-icon", "user-icon"], ["class", "email-link", 3, "href", 4, "ngIf"], ["class", "field-item", 4, "ngIf"], ["class", "reg-section-card", 4, "ngIf"], [1, "reg-view-bottom-bar"], [1, "action-btn", "primary-btn", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 2, "margin-right", "6px"], [1, "action-btn", "delete-btn", 3, "click"], ["width", "15", "height", "15", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 2, "margin-right", "6px"], ["width", "28", "height", "28", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], [1, "category-pill-badge"], ["d", "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"], ["cx", "12", "cy", "10", "r", "3"], ["cx", "12", "cy", "12", "r", "10"], ["points", "12 6 12 12 14 14"], [1, "email-link", 3, "href"], [1, "consent-status", 3, "ngClass"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round", 4, "ngIf"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round"], ["points", "20 6 9 17 4 12"], [1, "reg-section-card"], [1, "reg-card-icon", "teams-icon"], ["cx", "19", "cy", "8", "r", "3"], ["d", "M22 17v-1.5a3 3 0 0 0-3-3h-1"], [1, "header-titles"], [1, "team-count-pill"], [1, "teams-stat-grid"], [1, "team-stat-tile"], [1, "tile-top"], [1, "tile-category"], [1, "tile-age"], [1, "tile-count"], [1, "tile-meta"], ["class", "rosters-section", 4, "ngIf"], ["class", "no-roster-note", 4, "ngIf"], [1, "rosters-section"], [1, "rosters-heading"], [1, "rosters-grid"], ["class", "roster-card", 4, "ngFor", "ngForOf"], [1, "roster-card"], [1, "roster-header"], [1, "roster-name"], [1, "roster-members-count"], [1, "roster-members-list"], ["class", "roster-member-item", 4, "ngFor", "ngForOf"], [1, "roster-member-item"], [1, "member-tag"], [1, "member-name"], [1, "no-roster-note"], [1, "reg-card-icon", "media-icon"], ["x", "2", "y", "2", "width", "20", "height", "20", "rx", "2.18", "ry", "2.18"], ["x1", "7", "y1", "2", "x2", "7", "y2", "22"], ["x1", "17", "y1", "2", "x2", "17", "y2", "22"], ["x1", "2", "y1", "12", "x2", "22", "y2", "12"], [1, "media-content-container"], ["class", "summary-box", 4, "ngIf"], [1, "media-grid"], ["class", "media-card", 4, "ngIf"], [1, "summary-box"], [1, "summary-label"], [1, "summary-text"], [1, "media-card"], [1, "media-card-title"], ["points", "23 7 16 12 23 17 23 7"], ["x", "1", "y", "5", "width", "15", "height", "14", "rx", "2", "ry", "2"], [1, "video-container"], ["controls", "", 2, "width", "100%", "max-height", "280px", "border-radius", "10px", "background", "#000"], ["type", "video/mp4", 3, "src"], ["target", "_blank", 1, "media-open-btn", 3, "href"], ["d", "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"], ["points", "15 3 21 3 21 9"], ["x1", "10", "y1", "14", "x2", "21", "y2", "3"], ["x", "3", "y", "3", "width", "18", "height", "18", "rx", "2", "ry", "2"], ["cx", "8.5", "cy", "8.5", "r", "1.5"], ["points", "21 15 16 10 5 21"], [1, "poster-container"], ["alt", "Entry Poster", 2, "width", "100%", "max-height", "280px", "object-fit", "contain", "border-radius", "10px", 3, "src"], ["target", "_blank", 2, "color", "#4f46e5", "font-weight", "600", "text-decoration", "underline", 3, "href"], ["target", "_blank", 1, "action-btn", "flex-center", 2, "color", "#4f46e5", "text-decoration", "none", 3, "href"], ["d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"], ["points", "7 10 12 15 17 10"], ["x1", "12", "y1", "15", "x2", "12", "y2", "3"], [1, "action-btn", "flex-center", 2, "color", "#e53e3e", "border-color", "rgba(229, 62, 62, 0.2)", "background", "rgba(229, 62, 62, 0.05)", 3, "click"], ["colspan", "7", 1, "empty-state"], [2, "background", "#ffffff", "border-radius", "16px", "padding", "28px", "border", "1px solid #e5e7eb", "margin-bottom", "28px", "box-shadow", "0 2px 10px rgba(0,0,0,0.03)"], [2, "font-size", "18px", "font-weight", "700", "color", "#111827", "margin", "0 0 20px 0"], [2, "display", "grid", "grid-template-columns", "repeat(auto-fit, minmax(220px, 1fr))", "gap", "16px", "margin-bottom", "20px"], [2, "display", "block", "font-size", "13px", "font-weight", "600", "color", "#374151", "margin-bottom", "6px"], [1, "ac-input", 2, "width", "100%", "padding", "10px 14px", "border-radius", "8px", "border", "1px solid #d1d5db", 3, "ngModelChange", "ngModel"], ["value", "Open Challenges"], ["value", "Mastery Battles"], ["value", "School Competitions"], ["type", "text", "placeholder", "e.g. Module Resource Guide", 1, "ac-input", 2, "width", "100%", "padding", "10px 14px", "border-radius", "8px", "border", "1px solid #d1d5db", 3, "ngModelChange", "ngModel"], ["type", "file", "accept", ".pdf,.doc,.docx,.zip,.png,.jpg,.mp4", 2, "font-size", "13px", 3, "change"], ["type", "button", 1, "btn-primary", 2, "padding", "10px 24px", "font-size", "14px", "font-weight", "700", "background", "#4f46e5", "color", "#ffffff", "border", "none", "border-radius", "8px", "cursor", "pointer", 3, "click"], [2, "font-size", "18px", "font-weight", "700", "color", "#111827", "margin", "0 0 16px 0"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["value", "Single Team"], ["value", "Full Set"], ["value", "Additional Team"], ["value", "SCHOOL"], ["value", "MASTERY"], ["value", "OPEN"], ["type", "text", 1, "ac-input", 2, "width", "100%", "padding", "10px 14px", "border-radius", "8px", "border", "1px solid #d1d5db", 3, "ngModelChange", "ngModel"], ["type", "number", 1, "ac-input", 2, "width", "100%", "padding", "10px 14px", "border-radius", "8px", "border", "1px solid #d1d5db", 3, "ngModelChange", "ngModel"], ["value", "Champion"], ["value", "Runner-Up"], ["value", "3rd Place"], ["value", "Finalist"], [2, "padding", "20px 24px", "border-bottom", "1px solid #e2e8f0", "background", "#ffffff", "display", "flex", "align-items", "center", "justify-content", "space-between"], [2, "font-size", "18px", "font-weight", "700", "color", "#111827", "margin", "0"], ["value", "Online Phase"], ["value", "Grand Finale"], ["value", "Online Shortlisting"], ["value", "Grand Finale Knockout"], ["value", "Diplomatic Policy Leadership"], ["value", "Legal Advocacy"], ["value", "Advanced Research"], ["value", "Digital Media Strategy"], ["value", "Entrepreneurial Vision"], ["value", "Project Management"], ["value", "Global Communication"], ["value", "Digital Systems"], ["value", "Investment Banking"], ["value", "Teen Entrepreneur Challenge"], ["value", "Eco Heroes Innovation"], ["value", "Digital Story Showcase"], ["value", "Young Leadership Voice"], ["value", "Tech Innovation Lab"], [2, "color", "#6b7280", "font-size", "11px"], [2, "color", "#059669"], ["colspan", "9", 1, "empty-state"], [1, "badge", "role-badge", 3, "ngClass"], ["d", "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"], ["class", "add-course-container fade-in", 4, "ngIf"], [1, "type-filters", 2, "margin-bottom", "24px"], ["class", "fade-in", 4, "ngIf"], [1, "fade-in"], [1, "stats-grid", 2, "margin-bottom", "24px"], [1, "stat-icon", 2, "background", "#fff7ed", "color", "#f97316"], ["width", "26", "height", "26", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x", "2", "y", "3", "width", "7", "height", "18"], ["x", "9", "y", "3", "width", "13", "height", "18"], [1, "stat-icon", 2, "background", "#f0fdf4", "color", "#16a34a"], ["d", "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"], [2, "padding", "16px 24px", "border-bottom", "1px solid #e2e8f0", "display", "flex", "justify-content", "space-between", "align-items", "center"], [2, "margin", "0", "font-size", "16px", "font-weight", "600", "color", "#2d3748"], [2, "font-size", "13px", "font-weight", "400", "color", "#718096", "margin-left", "8px"], [1, "action-btn", "primary-btn", "flex-center", 3, "click"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], ["class", "data-table", 4, "ngIf"], ["style", "padding: 40px; text-align: center; color: #718096;", 4, "ngIf"], [2, "color", "#a0aec0", "font-size", "13px"], [2, "color", "#2d3748"], ["class", "meta", 4, "ngIf"], [1, "badge", 3, "ngClass"], [2, "color", "#4a5568", "font-size", "14px"], [2, "display", "flex", "gap", "6px", "flex-wrap", "nowrap"], ["title", "View", 1, "action-btn", "flex-center", 3, "click"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 2, "margin-right", "4px"], ["title", "Edit", 1, "action-btn", "flex-center", 3, "click"], ["title", "Delete", 1, "action-btn", "flex-center", "delete-btn", 3, "click"], [2, "padding", "40px", "text-align", "center", "color", "#718096"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#cbd5e0", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round", 2, "margin-bottom", "16px", "margin-left", "auto", "margin-right", "auto", "display", "block"], ["class", "table-container", 4, "ngIf"], ["class", "modal-overlay topic-modal-overlay", 3, "click", 4, "ngIf"], [2, "padding", "16px 24px", "border-bottom", "1px solid #e2e8f0"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 2, "margin-right", "4px"], ["title", "Add Topics", 1, "action-btn", "flex-center", 3, "click"], ["title", "Delete", 1, "action-btn", "flex-center", 2, "color", "#e53e3e", "border-color", "rgba(229,62,62,0.2)", "background", "rgba(229,62,62,0.05)", 3, "click"], [1, "modal-overlay", "topic-modal-overlay", 3, "click"], [1, "modal-content", "topic-builder-modal", 3, "click"], [1, "tb-modal-header"], [1, "tb-header-left"], ["type", "button", "title", "Back to Courses", 1, "tb-back-btn", 3, "click"], [1, "tb-title-group"], [1, "tb-badge-row"], [1, "tb-category-pill"], [1, "tb-count-pill"], [1, "tb-count-pill", 2, "background", "#f0fdf4", "color", "#16a34a"], ["class", "tb-video-pill", 4, "ngIf"], [1, "tb-course-title"], [1, "tb-header-actions"], ["type", "button", 1, "tb-btn", "tb-btn-secondary", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["type", "button", 1, "tb-btn", "tb-btn-primary", 3, "click"], ["d", "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"], ["points", "17 21 17 13 7 13 7 21"], ["points", "7 3 7 8 15 8"], ["type", "button", "aria-label", "Close modal", 1, "tb-close-icon-btn", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "tb-modal-body"], [1, "tb-subbanner"], [1, "tb-subbanner-info"], [1, "tb-subbanner-title-row"], [1, "tb-icon-badge"], ["width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "tb-quick-stats"], [1, "tb-stat-item"], [1, "tb-stat-num"], [1, "tb-stat-lbl"], [1, "tb-stat-divider"], [1, "tb-modules-container"], ["class", "tb-empty-state", 4, "ngIf"], ["class", "tb-module-card", 3, "id", 4, "ngFor", "ngForOf"], ["class", "tb-bottom-actions", 4, "ngIf"], ["type", "file", "accept", "video/mp4,video/quicktime,video/webm", 2, "display", "none", 3, "change"], [1, "tb-video-pill"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "tb-empty-state"], [1, "tb-empty-state-art"], ["width", "52", "height", "52", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#c7d2fe", "stroke-width", "1.4", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "tb-module-card", 3, "id"], [1, "tb-module-header", 3, "click"], [1, "tb-module-header-left"], [1, "tb-module-num"], [1, "tb-module-title-area", 3, "click"], [1, "tb-card-sublabel"], ["type", "text", "placeholder", "e.g. Module 1: Introduction", 1, "tb-module-title-input", 3, "ngModelChange", "click", "id", "ngModel"], [1, "tb-module-header-right"], [1, "tb-module-topic-count"], ["class", "tb-module-video-count", 4, "ngIf"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "tb-module-chevron"], ["points", "6 9 12 15 18 9"], ["type", "button", "title", "Delete module", 1, "tb-remove-card-btn", 3, "click"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "tb-module-body"], ["class", "tb-syllabus-list", 4, "ngIf"], ["class", "tb-module-empty", 4, "ngIf"], [1, "tb-module-add-row"], ["type", "button", 1, "tb-add-syllabus-btn", 3, "click"], ["width", "15", "height", "15", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "tb-module-video-count"], ["width", "11", "height", "11", "viewBox", "0 0 24 24", "fill", "currentColor"], [1, "tb-syllabus-list"], ["class", "tb-syllabus-card", 4, "ngFor", "ngForOf"], [1, "tb-syllabus-card"], [1, "tb-syllabus-card-header"], [1, "tb-syllabus-header-left"], [1, "tb-syllabus-num"], [1, "tb-card-sublabel", 2, "font-size", "10px", "color", "#94a3b8"], [1, "tb-syllabus-header-right"], ["class", "tb-video-ready-badge", 4, "ngIf"], ["class", "tb-video-missing-badge", 4, "ngIf"], ["type", "button", "title", "Remove topic", 1, "tb-remove-syllabus-btn", 3, "click"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "tb-card-body-grid"], [1, "tb-card-form-col"], [1, "tb-inputs-row"], [1, "tb-field-group", "tb-field-grow"], [1, "tb-field-label"], [1, "tb-input-wrapper"], ["width", "15", "height", "15", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "tb-input-icon"], ["d", "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"], ["d", "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"], ["type", "text", "placeholder", "e.g. Introduction to Governance", 1, "tb-text-input", 3, "ngModelChange", "ngModel"], [1, "tb-field-group", "tb-field-duration"], ["points", "12 6 12 12 16 14"], ["type", "text", "placeholder", "e.g. 15", 1, "tb-text-input", 3, "ngModelChange", "ngModel"], [1, "tb-field-group"], ["rows", "3", "placeholder", "Overview of key concepts, exercises, or materials covered...", 1, "tb-textarea-input", 3, "ngModelChange", "ngModel"], [1, "tb-card-media-col"], ["class", "tb-media-state-uploading", 4, "ngIf"], ["class", "tb-media-state-ready", 4, "ngIf"], ["class", "tb-media-state-empty", 3, "click", 4, "ngIf"], [1, "tb-video-ready-badge"], [1, "tb-pulse-dot"], [1, "tb-video-missing-badge"], [1, "tb-media-state-uploading"], [1, "tb-spinner"], [1, "tb-uploading-text"], [1, "tb-uploading-sub"], [1, "tb-media-state-ready"], [1, "tb-ready-top"], [1, "tb-video-ready-icon"], [1, "tb-video-ready-details"], [1, "tb-video-ready-title"], ["target", "_blank", "title", "Open video in new tab", 1, "tb-video-preview-link", 3, "href"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "tb-video-ready-actions"], ["type", "button", 1, "tb-media-btn", "tb-media-btn-replace", 3, "click"], ["d", "M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38"], ["type", "button", 1, "tb-media-btn", "tb-media-btn-delete", 3, "click"], [1, "tb-media-state-empty", 3, "click"], [1, "tb-empty-video-icon"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], ["points", "17 8 12 3 7 8"], ["x1", "12", "y1", "3", "x2", "12", "y2", "15"], [1, "tb-empty-video-text"], ["type", "button", 1, "tb-choose-file-btn"], [1, "tb-module-empty"], ["width", "32", "height", "32", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#cbd5e1", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "tb-bottom-actions"], ["type", "button", 1, "tb-add-lesson-large-btn", "tb-add-module-large-btn", 3, "click"], [1, "add-course-container", "fade-in"], [1, "ac-header"], [1, "ac-header-left"], [1, "action-btn", "back-btn", 3, "click"], [1, "ac-page-title"], [1, "ac-header-right"], [1, "ac-layout"], [1, "ac-main"], [1, "ac-block"], [1, "ac-label"], [2, "color", "#d53f8c", "margin-left", "4px"], ["type", "text", "placeholder", "e.g. Introduction to Programming", 1, "ac-input", "ac-title-input", 3, "ngModelChange", "ngModel"], [1, "ac-url-preview"], ["href", "#", 3, "click"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 2, "margin-left", "4px", "color", "#a0aec0"], [1, "ac-editor"], [1, "ac-editor-toolbar"], ["title", "Bold", 1, "ac-icon-btn", 3, "mousedown", "click"], ["title", "Italic", 1, "ac-icon-btn", 3, "mousedown", "click"], ["title", "Underline", 1, "ac-icon-btn", 3, "mousedown", "click"], [2, "text-decoration", "underline"], ["contenteditable", "true", 1, "ac-editor-content", 2, "min-height", "180px", "padding", "14px", "font-family", "inherit", "font-size", "14px", "outline", "none", "line-height", "1.6", 3, "input", "mouseup", "keyup", "focus"], ["placeholder", "Define the key takeaways from this course (list one benefit per line)", "rows", "4", 1, "ac-textarea", 3, "ngModelChange", "ngModel"], [1, "ac-milestones-grid"], [1, "ac-field"], [1, "ac-field-label"], ["type", "text", "placeholder", "e.g. Submit a policy pitch or debate video for shortlisting", 1, "ac-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g. Shine in live negotiations and panel diplomacy rounds", 1, "ac-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g. Policy templates and access to virtual youth summits", 1, "ac-input", 3, "ngModelChange", "ngModel"], ["placeholder", "Specify the target audience that will benefit the most from the course. (One Line Per target audience)", "rows", "3", 1, "ac-textarea", 3, "ngModelChange", "ngModel"], ["placeholder", "A list of assets you will be providing for the students in this course (One Per Line)", "rows", "4", 1, "ac-textarea", 3, "ngModelChange", "ngModel"], ["placeholder", "Additional requirements or special instructions for the students (One Per Line)", "rows", "3", 1, "ac-textarea", 3, "ngModelChange", "ngModel"], [1, "ac-sidebar"], [1, "ac-card"], [1, "ac-field", 2, "margin-bottom", "8px"], [1, "ac-input", "ac-select", 3, "ngModelChange", "ngModel"], ["value", "Public"], ["value", "Private"], [1, "ac-subtext"], [2, "display", "flex", "gap", "8px", "align-items", "stretch"], ["type", "text", "placeholder", "Image URL (e.g. https://images.unsplash.com/...)", 1, "ac-input", 2, "flex", "1", 3, "ngModelChange", "ngModel"], ["type", "file", "accept", "image/*", 2, "display", "none", 3, "change"], [1, "action-btn", "upload-btn", 3, "click"], ["style", "margin-top: 14px; border-radius: 10px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.05);", 4, "ngIf"], [1, "ac-meta-grid"], ["type", "number", "placeholder", "e.g. 120", 1, "ac-input", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "e.g. 11", 1, "ac-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g. All Levels", 1, "ac-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g. English", 1, "ac-input", 3, "ngModelChange", "ngModel"], [1, "ac-field", 2, "grid-column", "1 / -1", "margin-bottom", "0"], ["type", "text", "placeholder", "e.g. Yes", 1, "ac-input", 3, "ngModelChange", "ngModel"], [2, "margin-top", "14px", "border-radius", "10px", "overflow", "hidden", "border", "1px solid #e2e8f0", "box-shadow", "0 1px 3px rgba(0,0,0,0.05)"], ["alt", "Featured Image Preview", 2, "width", "100%", "max-height", "220px", "object-fit", "cover", "display", "block", 3, "src"], [2, "font-size", "16px", "font-weight", "700", "color", "#1e293b", "padding", "11px 16px", "background", "#f8fafc", "border", "1px solid #e2e8f0", "border-radius", "9px", "line-height", "1.5", "user-select", "text"], [2, "background", "#ffffff", "border", "1px solid #e2e8f0", "border-radius", "9px", "padding", "18px 20px", "min-height", "120px", "line-height", "1.7", "color", "#334155", "font-size", "14.5px"], [3, "innerHTML", 4, "ngIf"], ["style", "color: #94a3b8; font-style: italic;", 4, "ngIf"], ["style", "margin-top: 14px; padding-top: 14px; border-top: 1px dashed #e2e8f0;", 3, "innerHTML", 4, "ngIf"], [2, "background", "#f8fafc", "border", "1px solid #e2e8f0", "border-radius", "9px", "padding", "14px 18px", "min-height", "70px", "color", "#334155", "font-size", "14px", "white-space", "pre-line", "line-height", "1.65"], ["class", "ac-block", 4, "ngIf"], [2, "display", "flex", "align-items", "center", "justify-content", "space-between", "background", "#f8fafc", "border", "1px solid #e2e8f0", "border-radius", "9px", "padding", "10px 14px", "font-weight", "600", "color", "#1e293b", "font-size", "13.5px"], [2, "display", "flex", "align-items", "center", "gap", "8px"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "style", "color: #6366f1;", 4, "ngIf"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "style", "color: #ef4444;", 4, "ngIf"], [1, "badge", 2, "font-size", "11px", "padding", "3px 8px", 3, "ngClass"], ["style", "margin-bottom: 12px; font-size: 12.5px; color: #64748b; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 8px 12px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;", 3, "title", 4, "ngIf"], ["style", "border-radius: 10px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.05);", 4, "ngIf"], ["style", "padding: 24px; text-align: center; color: #94a3b8; background: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 10px; font-size: 13.5px;", 4, "ngIf"], [2, "background", "#f8fafc", "border", "1px solid #e2e8f0", "border-radius", "8px", "padding", "9px 12px", "font-weight", "700", "color", "#1e293b", "font-size", "14px"], [3, "innerHTML"], [2, "color", "#94a3b8", "font-style", "italic"], [2, "margin-top", "14px", "padding-top", "14px", "border-top", "1px dashed #e2e8f0", 3, "innerHTML"], ["class", "ac-field", 4, "ngIf"], [2, "background", "#f8fafc", "border", "1px solid #e2e8f0", "border-radius", "8px", "padding", "10px 14px", "font-size", "13.5px", "color", "#1e293b", "line-height", "1.5", "font-weight", "500"], [2, "background", "#f8fafc", "border", "1px solid #e2e8f0", "border-radius", "9px", "padding", "12px 16px", "color", "#334155", "font-size", "14px", "white-space", "pre-line", "line-height", "1.6"], [2, "display", "grid", "gap", "14px"], ["style", "background: #ffffff; border-left: 4px solid #6366f1; border: 1px solid #e2e8f0; border-left-width: 4px; border-radius: 10px; padding: 18px 20px;", 4, "ngFor", "ngForOf"], [2, "background", "#ffffff", "border-left", "4px solid #6366f1", "border", "1px solid #e2e8f0", "border-left-width", "4px", "border-radius", "10px", "padding", "18px 20px"], [2, "display", "flex", "justify-content", "space-between", "align-items", "flex-start", "gap", "12px"], [2, "margin", "0 0 6px 0", "font-size", "15px", "font-weight", "700", "color", "#1e293b"], [2, "margin", "0", "color", "#64748b", "font-size", "13.5px", "line-height", "1.5"], [2, "font-size", "11.5px", "font-weight", "600", "color", "#4338ca", "padding", "4px 10px", "border-radius", "999px", "background", "#e0e7ff", "white-space", "nowrap"], ["style", "margin-top: 14px;", 4, "ngIf"], [2, "margin-top", "14px"], ["controls", "", 2, "width", "100%", "max-height", "240px", "border-radius", "8px", "background", "#000"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 2, "color", "#6366f1"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 2, "color", "#ef4444"], ["x", "3", "y", "11", "width", "18", "height", "11", "rx", "2", "ry", "2"], ["d", "M7 11V7a5 5 0 0 1 10 0v4"], [2, "margin-bottom", "12px", "font-size", "12.5px", "color", "#64748b", "background", "#f8fafc", "border", "1px solid #e2e8f0", "border-radius", "8px", "padding", "8px 12px", "overflow", "hidden", "text-overflow", "ellipsis", "white-space", "nowrap", 3, "title"], [2, "border-radius", "10px", "overflow", "hidden", "border", "1px solid #e2e8f0", "box-shadow", "0 1px 3px rgba(0,0,0,0.05)"], [2, "padding", "24px", "text-align", "center", "color", "#94a3b8", "background", "#f8fafc", "border", "1px dashed #cbd5e1", "border-radius", "10px", "font-size", "13.5px"], [1, "loading-spinner"], [1, "spinner"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 2, "max-width", "450px", 3, "click"], [1, "close-btn", 3, "click"], [1, "modal-header"], [1, "modal-body", 2, "grid-template-columns", "1fr"], [1, "detail-group"], [1, "form-input", 2, "width", "100%", "border", "1px solid #DDDDDD", "border-radius", "6px", "padding", "10px 14px", "font-size", "15px", "margin-top", "6px"], ["value", "user", 3, "selected"], ["value", "superadmin", 3, "selected"], [1, "modal-footer", 2, "display", "flex", "justify-content", "space-between"], [1, "action-btn", 3, "click"], [1, "modal-content", 2, "max-width", "600px", 3, "click"], [2, "margin", "0 0 4px 0"], [2, "margin", "0", "font-size", "14px", "color", "#718096"], [1, "modal-body", 2, "display", "flex", "flex-direction", "column", "gap", "16px"], [2, "font-size", "13px", "font-weight", "600", "color", "#718096", "text-transform", "uppercase"], [2, "white-space", "pre-wrap", "font-size", "14px", "color", "#2d3748", "margin-top", "4px", "padding", "12px", "background", "#f7fafc", "border-radius", "6px", "border", "1px solid #e2e8f0"], [2, "font-size", "14px", "color", "#2d3748", "margin-top", "4px", "font-weight", "500"], [1, "modal-footer"]], template: function AdminDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 4)(1, "aside", 5)(2, "div", 6);
        \u0275\u0275element(3, "img", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "nav", 8)(5, "button", 9);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_5_listener() {
          return ctx.switchTab("dashboard");
        });
        \u0275\u0275elementStart(6, "span", 10);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(7, "svg", 11);
        \u0275\u0275element(8, "rect", 12)(9, "rect", 13)(10, "rect", 14)(11, "rect", 15);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(12, "span");
        \u0275\u0275text(13, "Overview");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "button", 9);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_14_listener() {
          return ctx.switchTab("registrations");
        });
        \u0275\u0275elementStart(15, "span", 10);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(16, "svg", 11);
        \u0275\u0275element(17, "path", 16)(18, "polyline", 17)(19, "line", 18)(20, "line", 19)(21, "polyline", 20);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(22, "span");
        \u0275\u0275text(23, "Registrations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "button", 9);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_24_listener() {
          return ctx.switchTab("users");
        });
        \u0275\u0275elementStart(25, "span", 10);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(26, "svg", 11);
        \u0275\u0275element(27, "path", 21)(28, "circle", 22)(29, "path", 23)(30, "path", 24);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(31, "span");
        \u0275\u0275text(32, "System Users");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "button", 9);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_33_listener() {
          return ctx.switchTab("courses");
        });
        \u0275\u0275elementStart(34, "span", 10);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(35, "svg", 11);
        \u0275\u0275element(36, "path", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(37, "span");
        \u0275\u0275text(38, "Courses");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "button", 9);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_39_listener() {
          return ctx.switchTab("projects");
        });
        \u0275\u0275elementStart(40, "span", 10);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(41, "svg", 11);
        \u0275\u0275element(42, "path", 26);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(43, "span");
        \u0275\u0275text(44, "Project Submissions");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "button", 9);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_45_listener() {
          return ctx.switchTab("docUpload");
        });
        \u0275\u0275elementStart(46, "span", 10);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(47, "svg", 11);
        \u0275\u0275element(48, "path", 16)(49, "polyline", 17)(50, "line", 27)(51, "line", 28);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(52, "span");
        \u0275\u0275text(53, "Document Upload");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "button", 9);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_54_listener() {
          return ctx.switchTab("leaderboard");
        });
        \u0275\u0275elementStart(55, "span", 10);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(56, "svg", 11);
        \u0275\u0275element(57, "path", 29);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(58, "span");
        \u0275\u0275text(59, "Leaderboard Management");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(60, "div", 30)(61, "button", 31);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_61_listener() {
          return ctx.logout();
        });
        \u0275\u0275elementStart(62, "span", 10);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(63, "svg", 32);
        \u0275\u0275element(64, "path", 33)(65, "polyline", 34)(66, "line", 35);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(67, "span");
        \u0275\u0275text(68, "Logout");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(69, "main", 36)(70, "header", 37)(71, "div", 38)(72, "h1");
        \u0275\u0275text(73);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "span", 39);
        \u0275\u0275element(75, "span", 40);
        \u0275\u0275text(76, " System Live ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(77, "div", 41)(78, "div", 42);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(79, "svg", 43);
        \u0275\u0275element(80, "circle", 44)(81, "line", 45);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(82, "input", 46);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "button", 47);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(84, "svg", 48);
        \u0275\u0275element(85, "path", 49)(86, "path", 50);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(87, "span", 51);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "div", 52)(89, "div", 53)(90, "div", 54);
        \u0275\u0275text(91, "SA");
        \u0275\u0275elementEnd();
        \u0275\u0275element(92, "span", 55);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "div", 56)(94, "span", 57);
        \u0275\u0275text(95, "Super Admin");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "span", 58);
        \u0275\u0275text(97, "Administrator");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275template(98, AdminDashboardComponent_div_98_Template, 8, 7, "div", 59)(99, AdminDashboardComponent_div_99_Template, 4, 0, "div", 60)(100, AdminDashboardComponent_div_100_Template, 30, 7, "div", 61)(101, AdminDashboardComponent_div_101_Template, 39, 7, "div", 61);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275classProp("active", ctx.activeTab === "dashboard");
        \u0275\u0275advance(9);
        \u0275\u0275classProp("active", ctx.activeTab === "registrations");
        \u0275\u0275advance(10);
        \u0275\u0275classProp("active", ctx.activeTab === "users");
        \u0275\u0275advance(9);
        \u0275\u0275classProp("active", ctx.activeTab === "courses");
        \u0275\u0275advance(6);
        \u0275\u0275classProp("active", ctx.activeTab === "projects");
        \u0275\u0275advance(6);
        \u0275\u0275classProp("active", ctx.activeTab === "docUpload");
        \u0275\u0275advance(9);
        \u0275\u0275classProp("active", ctx.activeTab === "leaderboard");
        \u0275\u0275advance(19);
        \u0275\u0275textInterpolate(ctx.getTabTitle());
        \u0275\u0275advance(25);
        \u0275\u0275property("ngIf", !ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedUser);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.viewingAdditionalCourse);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, SlicePipe, TitleCasePipe, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: [`@import "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap";



[_nghost-%COMP%] {
  display: block;
  font-family:
    "Plus Jakarta Sans",
    "Inter",
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;
  background-color: #f8fafc;
  min-height: 100vh;
  color: #334155;
  --font-primary:
    "Plus Jakarta Sans",
    "Inter",
    sans-serif;
  --bg-app: #f8fafc;
  --bg-card: #ffffff;
  --border-light: #e2e8f0;
  --border-subtle: #f1f5f9;
  --txt-heading: #0f172a;
  --txt-body: #334155;
  --txt-muted: #64748b;
  --txt-light: #94a3b8;
  --primary: #6366f1;
  --primary-hover: #4f46e5;
  --primary-light: #e0e7ff;
  --primary-glow: rgba(99, 102, 241, 0.25);
  --accent-orange: #f97316;
  --accent-orange-light: #fff7ed;
  --accent-emerald: #10b981;
  --accent-emerald-light: #ecfdf5;
  --accent-cyan: #06b6d4;
  --accent-cyan-light: #ecfeff;
  --accent-purple: #8b5cf6;
  --accent-purple-light: #f5f3ff;
  --accent-rose: #f43f5e;
  --accent-rose-light: #fff1f2;
  --sb-bg:
    linear-gradient(
      180deg,
      #0f172a 0%,
      #1e1b4b 100%);
  --sb-item-hover: rgba(255, 255, 255, 0.07);
  --sb-item-active:
    linear-gradient(
      90deg,
      rgba(99, 102, 241, 0.25) 0%,
      rgba(139, 92, 246, 0.12) 100%);
  --sb-text: #94a3b8;
  --sb-text-active: #ffffff;
  --shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-sm: 0 4px 12px -2px rgba(15, 23, 42, 0.05);
  --shadow-md: 0 10px 25px -5px rgba(15, 23, 42, 0.08);
  --shadow-lg: 0 20px 35px -10px rgba(15, 23, 42, 0.12);
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
}
.admin-layout[_ngcontent-%COMP%] {
  display: flex;
  height: 100vh;
  overflow: hidden;
  background: #f8fafc !important;
}
.sidebar[_ngcontent-%COMP%] {
  width: 250px;
  flex-shrink: 0;
  background: #0f172a !important;
  background:
    linear-gradient(
      180deg,
      #0f172a 0%,
      #1e1b4b 100%) !important;
  display: flex;
  flex-direction: column;
  z-index: 20;
  height: 100vh;
  border-right: 1px solid rgba(255, 255, 255, 0.08) !important;
}
.brand[_ngcontent-%COMP%] {
  padding: 0 22px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  border-right: 1px solid #ffffff;
  margin-right: -1px;
  position: relative;
  z-index: 2;
}
.brand-logo[_ngcontent-%COMP%] {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background:
    linear-gradient(
      135deg,
      #6366f1 0%,
      #a855f7 100%);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.4);
}
.brand-text-container[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
}
.brand[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 17px;
  font-weight: 800;
  letter-spacing: -0.4px;
  color: #ffffff !important;
}
.brand-badge[_ngcontent-%COMP%] {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #818cf8;
  text-transform: uppercase;
}
.nav-menu[_ngcontent-%COMP%] {
  padding: 18px 14px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.nav-item[_ngcontent-%COMP%] {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background: transparent;
  border: 1px solid transparent;
  border-radius: var(--radius-md);
  color: var(--sb-text);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  text-align: left;
  font-family: var(--font-primary);
  position: relative;
}
.nav-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {
  margin-right: 12px;
  display: flex;
  align-items: center;
  opacity: 0.75;
  transition: opacity 0.2s, transform 0.2s;
}
.nav-item[_ngcontent-%COMP%]:hover {
  background: var(--sb-item-hover);
  color: #ffffff;
  transform: translateX(3px);
}
.nav-item[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {
  opacity: 1;
  transform: scale(1.08);
}
.nav-item.active[_ngcontent-%COMP%] {
  background: var(--sb-item-active);
  color: var(--sb-text-active);
  font-weight: 600;
  border-color: rgba(99, 102, 241, 0.3);
  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.15);
}
.nav-item.active[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {
  opacity: 1;
  color: #a5b4fc;
}
.nav-item.active[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  left: -2px;
  top: 8px;
  bottom: 8px;
  width: 4px;
  background:
    linear-gradient(
      180deg,
      #6366f1,
      #a855f7);
  border-radius: 0 4px 4px 0;
  box-shadow: 0 0 10px rgba(99, 102, 241, 0.8);
}
.logout-container[_ngcontent-%COMP%] {
  padding: 16px 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}
.logout-btn[_ngcontent-%COMP%] {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 11px;
  background: rgba(244, 63, 94, 0.1);
  color: #fb7185;
  border: 1px solid rgba(244, 63, 94, 0.2);
  border-radius: var(--radius-md);
  cursor: pointer;
  font-weight: 600;
  font-size: 13.5px;
  transition: all 0.2s ease;
  font-family: var(--font-primary);
  gap: 8px;
}
.logout-btn[_ngcontent-%COMP%]:hover {
  background: var(--accent-rose);
  color: #ffffff;
  border-color: var(--accent-rose);
  box-shadow: 0 4px 16px rgba(244, 63, 94, 0.35);
}
.main-content[_ngcontent-%COMP%] {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}
.topbar[_ngcontent-%COMP%] {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border-light);
  box-shadow: var(--shadow-xs);
  z-index: 10;
  flex-shrink: 0;
}
.topbar-title-section[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 16px;
}
.topbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 21px;
  font-weight: 700;
  color: var(--txt-heading);
  letter-spacing: -0.4px;
}
.system-status-pill[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: 20px;
  background: #ecfdf5;
  color: #059669;
  font-size: 12px;
  font-weight: 600;
  border: 1px solid rgba(16, 185, 129, 0.2);
}
.status-dot[_ngcontent-%COMP%] {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.2);
  animation: _ngcontent-%COMP%_pulse 2s infinite;
}
@keyframes _ngcontent-%COMP%_pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 6px rgba(16, 185, 129, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
  }
}
.topbar-actions[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 16px;
}
.search-box[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #f1f5f9;
  border: 1px solid var(--border-light);
  border-radius: 20px;
  padding: 7px 14px;
  color: var(--txt-muted);
  transition: all 0.2s ease;
}
.search-box[_ngcontent-%COMP%]:focus-within {
  background: #ffffff;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px var(--primary-glow);
}
.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {
  border: none;
  background: transparent;
  outline: none;
  font-size: 13px;
  color: var(--txt-heading);
  width: 160px;
}
.notification-btn[_ngcontent-%COMP%] {
  position: relative;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid var(--border-light);
  background: #ffffff;
  color: var(--txt-body);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}
.notification-btn[_ngcontent-%COMP%]:hover {
  background: #f8fafc;
  color: var(--primary);
  border-color: var(--primary-light);
}
.notification-dot[_ngcontent-%COMP%] {
  position: absolute;
  top: 7px;
  right: 7px;
  width: 8px;
  height: 8px;
  background: var(--accent-rose);
  border-radius: 50%;
  border: 2px solid #ffffff;
}
.admin-profile[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 8px;
  border-left: 1px solid var(--border-light);
}
.avatar-container[_ngcontent-%COMP%] {
  position: relative;
}
.avatar[_ngcontent-%COMP%] {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background:
    linear-gradient(
      135deg,
      #6366f1 0%,
      #8b5cf6 100%);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  box-shadow: 0 3px 10px rgba(99, 102, 241, 0.3);
}
.online-indicator[_ngcontent-%COMP%] {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 10px;
  height: 10px;
  background: #10b981;
  border-radius: 50%;
  border: 2px solid #ffffff;
}
.admin-info[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
}
.admin-name[_ngcontent-%COMP%] {
  font-weight: 700;
  font-size: 13.5px;
  color: var(--txt-heading);
  line-height: 1.2;
}
.admin-role[_ngcontent-%COMP%] {
  font-size: 11px;
  color: var(--txt-muted);
  font-weight: 500;
}
.content-wrapper[_ngcontent-%COMP%] {
  padding: 28px 32px;
  flex: 1;
  overflow-y: auto;
}
.type-filters[_ngcontent-%COMP%] {
  display: flex;
  gap: 10px;
  margin-bottom: 24px;
}
.type-filter-btn[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  background-color: #ffffff;
  border: 1.5px solid var(--border-light);
  border-radius: 24px;
  color: var(--txt-muted);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  font-family: var(--font-primary);
  box-shadow: var(--shadow-xs);
}
.type-filter-btn[_ngcontent-%COMP%]:hover {
  border-color: var(--primary-light);
  color: var(--primary);
  transform: translateY(-1px);
}
.type-filter-btn.active[_ngcontent-%COMP%] {
  border-color: var(--primary);
  color: var(--primary);
  background-color: var(--primary-light);
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.15);
}
.count-badge[_ngcontent-%COMP%] {
  background-color: #f1f5f9;
  color: var(--txt-muted);
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 700;
  transition: all 0.2s ease;
}
.type-filter-btn.active[_ngcontent-%COMP%]   .count-badge[_ngcontent-%COMP%] {
  background-color: var(--primary);
  color: #ffffff;
}
.stats-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  margin-bottom: 28px;
}
.stat-card[_ngcontent-%COMP%] {
  background-color: var(--bg-card);
  border-radius: var(--radius-lg);
  padding: 22px 24px;
  display: flex;
  align-items: center;
  border: 1px solid var(--border-subtle);
  box-shadow: var(--shadow-sm);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
}
.stat-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: var(--border-light);
}
.stat-icon[_ngcontent-%COMP%] {
  width: 54px;
  height: 54px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 18px;
  flex-shrink: 0;
  box-shadow: var(--shadow-xs);
}
.registrations-icon[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #fff7ed 0%,
      #ffedd5 100%);
  color: #ea580c;
}
.users-icon[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #ecfdf5 0%,
      #d1fae5 100%);
  color: #059669;
}
.challenges-icon[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #f5f3ff 0%,
      #ede9fe 100%);
  color: #7c3aed;
}
.stat-info[_ngcontent-%COMP%] {
  flex: 1;
}
.stat-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  margin: 0 0 6px 0;
  font-size: 12px;
  color: var(--txt-muted);
  text-transform: uppercase;
  letter-spacing: 0.8px;
  font-weight: 700;
}
.stat-value-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
.stat-value[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 30px;
  font-weight: 800;
  color: var(--txt-heading);
  letter-spacing: -0.6px;
}
.trend-badge[_ngcontent-%COMP%] {
  font-size: 11px;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 12px;
}
.trend-badge.positive[_ngcontent-%COMP%] {
  background: #ecfdf5;
  color: #059669;
}
.trend-badge.neutral[_ngcontent-%COMP%] {
  background: #f1f5f9;
  color: #475569;
}
.table-container[_ngcontent-%COMP%] {
  background-color: var(--bg-card);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-light);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
}
.data-table[_ngcontent-%COMP%] {
  width: 100%;
  border-collapse: collapse;
}
.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  padding: 14px 22px;
  text-align: left;
  border-bottom: 1px solid var(--border-subtle);
}
.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {
  border-bottom: none;
}
.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
  background-color: #f8fafc;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: var(--txt-muted);
  font-weight: 700;
}
.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  font-size: 13.5px;
  color: var(--txt-body);
}
.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {
  transition: background 0.15s ease;
}
.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {
  background-color: #f8fafc;
}
.full-width[_ngcontent-%COMP%] {
  width: 100%;
}
.user-details[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
}
.user-details[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  color: var(--txt-heading);
  margin-bottom: 2px;
  font-size: 14px;
}
.user-details[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%] {
  font-size: 12px;
  color: var(--txt-muted);
}
.badge[_ngcontent-%COMP%] {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.2px;
}
.individual-badge[_ngcontent-%COMP%] {
  background-color: #ecfeff;
  color: #0891b2;
  border: 1px solid rgba(6, 182, 212, 0.2);
}
.school-badge[_ngcontent-%COMP%] {
  background-color: #eff6ff;
  color: #2563eb;
  border: 1px solid rgba(37, 99, 235, 0.2);
}
.challenge-badge[_ngcontent-%COMP%] {
  background-color: #f5f3ff;
  color: #7c3aed;
  border: 1px solid rgba(124, 58, 237, 0.2);
}
.category-badge[_ngcontent-%COMP%] {
  background-color: #faf5ff;
  color: #9333ea;
  border: none;
  font-weight: 600;
  padding: 5px 14px;
}
.consent-badge[_ngcontent-%COMP%] {
  background-color: #ecfdf5;
  color: #059669;
  border: none;
  font-weight: 600;
  padding: 5px 14px;
}
.role-badge[_ngcontent-%COMP%] {
  background-color: #f1f5f9;
  color: var(--txt-muted);
  border: none;
  font-weight: 600;
}
.role-badge.superadmin[_ngcontent-%COMP%] {
  background-color: #f3e8ff;
  color: #7e22ce;
  border: none;
  font-weight: 700;
}
.type-badge[_ngcontent-%COMP%] {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 10px;
  font-weight: 700;
  margin-left: 6px;
  vertical-align: middle;
  text-transform: uppercase;
}
.action-btn[_ngcontent-%COMP%] {
  padding: 6px 14px;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-sm);
  background-color: #ffffff;
  color: var(--txt-body);
  font-size: 12.5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: var(--font-primary);
  box-shadow: var(--shadow-xs);
}
.action-btn[_ngcontent-%COMP%]:hover {
  border-color: var(--primary-light);
  color: var(--primary);
  background-color: var(--primary-light);
  transform: translateY(-1px);
}
.flex-center[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.action-btn.delete-btn[_ngcontent-%COMP%] {
  color: var(--accent-rose);
  border-color: #fecdd3;
  background: #ffffff;
}
.action-btn.delete-btn[_ngcontent-%COMP%]:hover {
  background: var(--accent-rose-light);
  border-color: var(--accent-rose);
  color: #e11d48;
}
.primary-btn[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #6366f1 0%,
      #4f46e5 100%);
  color: #ffffff !important;
  border: none;
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);
  padding: 9px 20px !important;
  font-size: 13.5px !important;
  border-radius: var(--radius-md) !important;
  font-weight: 700;
}
.primary-btn[_ngcontent-%COMP%]:hover {
  background:
    linear-gradient(
      135deg,
      #4f46e5 0%,
      #4338ca 100%);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.45);
  transform: translateY(-1px);
}
.recent-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  font-size: 17px;
  margin: 0 0 16px 0;
  color: var(--txt-heading);
  font-weight: 700;
  letter-spacing: -0.3px;
}
.modal-overlay[_ngcontent-%COMP%] {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(15, 23, 42, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  animation: _ngcontent-%COMP%_fadeIn 0.2s ease-out;
  padding: 24px;
}
.modal-content[_ngcontent-%COMP%] {
  background-color: #fff;
  border-radius: 16px;
  width: 100%;
  max-width: 620px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05);
  position: relative;
  animation: _ngcontent-%COMP%_slideUp 0.26s cubic-bezier(0.16, 1, 0.3, 1);
  border: 1px solid #e2e8f0;
}
.modal-body[_ngcontent-%COMP%] {
  padding: 24px 28px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}
.close-btn[_ngcontent-%COMP%] {
  position: absolute;
  top: 16px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  color: var(--txt-muted);
  cursor: pointer;
  line-height: 1;
  transition: color 0.2s;
}
.close-btn[_ngcontent-%COMP%]:hover {
  color: var(--txt-primary);
}
.modal-header[_ngcontent-%COMP%] {
  padding: 24px 28px 20px;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  gap: 14px;
}
.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 20px;
  color: var(--txt-primary);
  font-weight: 600;
}
.modal-body[_ngcontent-%COMP%] {
  padding: 24px 28px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.detail-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  display: block;
  font-size: 11px;
  text-transform: uppercase;
  color: var(--txt-muted);
  font-weight: 600;
  margin-bottom: 5px;
  letter-spacing: 0.7px;
}
.detail-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 14px;
  color: var(--txt-primary);
  font-weight: 500;
}
.highlight-text[_ngcontent-%COMP%] {
  color: var(--orange) !important;
  font-weight: 600 !important;
}
.entry-info-section[_ngcontent-%COMP%] {
  grid-column: 1 / -1;
  background: #f8fafc;
  padding: 20px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.parent-info-section[_ngcontent-%COMP%] {
  grid-column: 1 / -1;
  background: #f8fafc;
  padding: 20px;
  border-radius: var(--radius-sm);
  margin-top: 12px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  border: 1px solid var(--border);
}
.parent-info-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  grid-column: 1 / -1;
  margin: 0 0 4px 0;
  font-size: 14px;
  color: var(--txt-secondary);
  font-weight: 600;
}
.modal-footer[_ngcontent-%COMP%] {
  padding: 20px 28px;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: flex-end;
  background: #f8fafc;
  border-radius: 0 0 var(--radius-lg) var(--radius-lg);
}
.topic-modal-overlay[_ngcontent-%COMP%] {
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba(15, 23, 42, 0.75);
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.topic-builder-modal[_ngcontent-%COMP%] {
  width: 95vw !important;
  max-width: 1080px !important;
  height: 88vh !important;
  max-height: 860px !important;
  display: flex !important;
  flex-direction: column !important;
  background: #ffffff !important;
  border-radius: 24px !important;
  box-shadow: 0 25px 60px -15px rgba(15, 23, 42, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1) !important;
  overflow: hidden !important;
  border: 1px solid #e2e8f0 !important;
  animation: _ngcontent-%COMP%_slideUpModal 0.28s cubic-bezier(0.16, 1, 0.3, 1) !important;
}
@keyframes _ngcontent-%COMP%_slideUpModal {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
.tb-modal-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 28px;
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  gap: 20px;
  flex-shrink: 0;
}
.tb-header-left[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 0;
  flex: 1;
}
.tb-back-btn[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: 10px;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  color: #475569;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
}
.tb-back-btn[_ngcontent-%COMP%]:hover {
  background: #e2e8f0;
  color: #0f172a;
  transform: translateX(-2px);
}
.tb-title-group[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}
.tb-badge-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}
.tb-category-pill[_ngcontent-%COMP%] {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 2px 8px;
  border-radius: 6px;
  background: #e0e7ff;
  color: #4338ca;
}
.tb-count-pill[_ngcontent-%COMP%] {
  font-size: 11px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 6px;
  background: #f1f5f9;
  color: #64748b;
}
.tb-video-pill[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 6px;
  background: #ecfdf5;
  color: #059669;
}
.tb-course-title[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: #0f172a;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: -0.01em;
}
.tb-header-actions[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}
.tb-btn[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 10px 18px;
  border-radius: 12px;
  font-size: 13.5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  border: none;
  line-height: 1;
}
.tb-btn-primary[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #6366f1 0%,
      #4f46e5 100%);
  color: #ffffff;
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);
}
.tb-btn-primary[_ngcontent-%COMP%]:hover {
  background:
    linear-gradient(
      135deg,
      #4f46e5 0%,
      #4338ca 100%);
  box-shadow: 0 6px 18px rgba(99, 102, 241, 0.45);
  transform: translateY(-1px);
}
.tb-btn-secondary[_ngcontent-%COMP%] {
  background: #f8fafc;
  border: 1px solid #cbd5e1;
  color: #334155;
}
.tb-btn-secondary[_ngcontent-%COMP%]:hover {
  background: #f1f5f9;
  border-color: #94a3b8;
  color: #0f172a;
}
.tb-close-icon-btn[_ngcontent-%COMP%] {
  background: transparent;
  border: none;
  color: #94a3b8;
  padding: 6px;
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}
.tb-close-icon-btn[_ngcontent-%COMP%]:hover {
  background: #f1f5f9;
  color: #0f172a;
}
.tb-modal-body[_ngcontent-%COMP%] {
  flex: 1;
  overflow-y: auto;
  padding: 24px 28px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  background: #f8fafc;
}
.tb-modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {
  width: 6px;
}
.tb-modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}
.tb-subbanner[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #ffffff 0%,
      #f1f5f9 100%);
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 18px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.04);
}
.tb-subbanner-title-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 14px;
}
.tb-icon-badge[_ngcontent-%COMP%] {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background:
    linear-gradient(
      135deg,
      #e0e7ff 0%,
      #ede9fe 100%);
  color: #4f46e5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.tb-subbanner-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: #0f172a;
}
.tb-subbanner-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 4px 0 0 0;
  font-size: 13px;
  color: #64748b;
  line-height: 1.4;
}
.tb-quick-stats[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 16px;
  background: #ffffff;
  padding: 10px 18px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.03);
  flex-shrink: 0;
}
.tb-stat-item[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tb-stat-num[_ngcontent-%COMP%] {
  font-size: 18px;
  font-weight: 800;
  color: #4f46e5;
  line-height: 1;
}
.tb-stat-lbl[_ngcontent-%COMP%] {
  font-size: 11px;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 2px;
}
.tb-stat-divider[_ngcontent-%COMP%] {
  width: 1px;
  height: 24px;
  background: #e2e8f0;
}
.tb-modules-container[_ngcontent-%COMP%], .tb-lessons-container[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.tb-lessons-list[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.tb-module-card[_ngcontent-%COMP%], .tb-lesson-card[_ngcontent-%COMP%] {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 18px;
  padding: 20px 22px;
  box-shadow: 0 4px 16px -2px rgba(15, 23, 42, 0.04);
  display: flex;
  flex-direction: column;
  gap: 18px;
  transition: all 0.2s ease;
}
.tb-lesson-card[_ngcontent-%COMP%]:hover {
  border-color: #cbd5e1;
  box-shadow: 0 8px 24px -4px rgba(15, 23, 42, 0.08);
}
.tb-module-header[_ngcontent-%COMP%], .tb-card-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  padding-bottom: 14px;
  border-bottom: 1px solid #f1f5f9;
}
.tb-module-header-left[_ngcontent-%COMP%], .tb-card-header-left[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 12px;
}
.tb-module-num[_ngcontent-%COMP%], .tb-lesson-num[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background:
    linear-gradient(
      135deg,
      #6366f1 0%,
      #8b5cf6 100%);
  color: #ffffff;
  font-size: 13px;
  font-weight: 800;
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.25);
}
.tb-card-title-preview[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.tb-card-sublabel[_ngcontent-%COMP%] {
  font-size: 10.5px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #94a3b8;
}
.tb-card-heading[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 15px;
  font-weight: 700;
  color: #1e293b;
}
.tb-module-header-right[_ngcontent-%COMP%], .tb-card-header-right[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
}
.tb-video-ready-badge[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 20px;
  background: #ecfdf5;
  color: #059669;
  border: 1px solid #a7f3d0;
}
.tb-pulse-dot[_ngcontent-%COMP%] {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.3);
}
.tb-video-missing-badge[_ngcontent-%COMP%] {
  font-size: 12px;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 20px;
  background: #f1f5f9;
  color: #94a3b8;
  border: 1px solid #e2e8f0;
}
.tb-remove-card-btn[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 6px 12px;
  border-radius: 8px;
  border: 1px solid #fee2e2;
  background: #fef2f2;
  color: #dc2626;
  font-size: 12.5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}
.tb-remove-card-btn[_ngcontent-%COMP%]:hover {
  background: #fee2e2;
  color: #991b1b;
}
@keyframes _ngcontent-%COMP%_moduleRedirectFlash {
  0% {
    border-color: #6366f1;
    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.35), 0 8px 24px -4px rgba(99, 102, 241, 0.2);
    transform: translateY(-2px);
  }
  50% {
    border-color: #818cf8;
    box-shadow: 0 0 0 6px rgba(99, 102, 241, 0.2), 0 8px 24px -4px rgba(99, 102, 241, 0.15);
  }
  100% {
    border-color: #e2e8f0;
    box-shadow: 0 4px 16px -2px rgba(15, 23, 42, 0.04);
    transform: translateY(0);
  }
}
.tb-module-card[_ngcontent-%COMP%] {
  scroll-margin-top: 20px;
}
.tb-module-card.newly-created[_ngcontent-%COMP%] {
  animation: _ngcontent-%COMP%_moduleRedirectFlash 2.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.tb-module-header[_ngcontent-%COMP%] {
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
}
.tb-module-title-area[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex: 1;
  max-width: 480px;
}
.tb-module-title-input[_ngcontent-%COMP%] {
  font-size: 15px;
  font-weight: 700;
  color: #1e293b;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 6px 12px;
  background: #f8fafc;
  transition: all 0.2s ease;
  width: 100%;
}
.tb-module-title-input[_ngcontent-%COMP%]:hover {
  border-color: #94a3b8;
  background: #ffffff;
}
.tb-module-title-input[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #6366f1;
  background: #ffffff;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
}
.tb-module-topic-count[_ngcontent-%COMP%] {
  font-size: 12px;
  font-weight: 600;
  color: #64748b;
  background: #f1f5f9;
  padding: 4px 10px;
  border-radius: 20px;
}
.tb-module-video-count[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11.5px;
  font-weight: 600;
  color: #0284c7;
  background: #e0f2fe;
  padding: 3px 8px;
  border-radius: 20px;
}
.tb-module-chevron[_ngcontent-%COMP%] {
  color: #64748b;
  cursor: pointer;
  transition: transform 0.25s ease, color 0.2s ease;
}
.tb-module-chevron[_ngcontent-%COMP%]:hover {
  color: #1e293b;
}
.tb-module-chevron.rotated[_ngcontent-%COMP%] {
  transform: rotate(180deg);
}
.tb-module-body[_ngcontent-%COMP%] {
  display: none;
  flex-direction: column;
  gap: 16px;
  padding-top: 16px;
  border-top: 1px solid #f1f5f9;
}
.tb-module-body.expanded[_ngcontent-%COMP%] {
  display: flex;
}
.tb-syllabus-list[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.tb-syllabus-card[_ngcontent-%COMP%] {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 16px 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.2s ease;
}
.tb-syllabus-card[_ngcontent-%COMP%]:hover {
  border-color: #cbd5e1;
  background: #ffffff;
}
.tb-syllabus-card-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tb-syllabus-header-left[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
}
.tb-syllabus-num[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 6px;
  background: #e0e7ff;
  color: #4f46e5;
  font-size: 11px;
  font-weight: 800;
}
.tb-syllabus-header-right[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
}
.tb-remove-syllabus-btn[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 6px;
  border: 1px solid #fee2e2;
  background: #fef2f2;
  color: #dc2626;
  cursor: pointer;
  transition: all 0.15s ease;
}
.tb-remove-syllabus-btn[_ngcontent-%COMP%]:hover {
  background: #fee2e2;
  color: #991b1b;
}
.tb-module-empty[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 24px 16px;
  color: #64748b;
  font-size: 13.5px;
  gap: 8px;
  background: #f8fafc;
  border: 1px dashed #cbd5e1;
  border-radius: 12px;
}
.tb-module-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0;
}
.tb-module-add-row[_ngcontent-%COMP%] {
  display: flex;
  justify-content: flex-start;
  padding-top: 4px;
}
.tb-add-syllabus-btn[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 9px;
  border: 1px dashed #6366f1;
  background: #eef2ff;
  color: #4f46e5;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}
.tb-add-syllabus-btn[_ngcontent-%COMP%]:hover {
  background: #e0e7ff;
  border-color: #4f46e5;
}
.tb-add-module-large-btn[_ngcontent-%COMP%] {
  width: 100%;
}
.tb-card-body-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 20px;
}
@media (max-width: 820px) {
  .tb-card-body-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
}
.tb-card-form-col[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.tb-inputs-row[_ngcontent-%COMP%] {
  display: flex;
  gap: 12px;
}
.tb-field-group[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.tb-field-grow[_ngcontent-%COMP%] {
  flex: 2;
}
.tb-field-duration[_ngcontent-%COMP%] {
  flex: 1;
}
.tb-field-label[_ngcontent-%COMP%] {
  font-size: 12px;
  font-weight: 600;
  color: #475569;
  letter-spacing: 0.02em;
}
.tb-input-wrapper[_ngcontent-%COMP%] {
  position: relative;
  display: flex;
  align-items: center;
}
.tb-input-icon[_ngcontent-%COMP%] {
  position: absolute;
  left: 12px;
  color: #94a3b8;
  pointer-events: none;
}
.tb-text-input[_ngcontent-%COMP%] {
  width: 100%;
  padding: 10px 12px 10px 36px;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  background: #ffffff;
  color: #0f172a;
  font-size: 13.5px;
  font-family: inherit;
  transition: all 0.2s ease;
}
.tb-text-input[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
}
.tb-textarea-input[_ngcontent-%COMP%] {
  width: 100%;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  background: #ffffff;
  color: #0f172a;
  font-size: 13.5px;
  font-family: inherit;
  resize: vertical;
  min-height: 85px;
  line-height: 1.5;
  transition: all 0.2s ease;
}
.tb-textarea-input[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
}
.tb-card-media-col[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.tb-media-state-empty[_ngcontent-%COMP%] {
  border: 2px dashed #cbd5e1;
  border-radius: 14px;
  background: #f8fafc;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 140px;
  flex: 1;
}
.tb-media-state-empty[_ngcontent-%COMP%]:hover {
  border-color: #6366f1;
  background: #f5f3ff;
}
.tb-empty-video-icon[_ngcontent-%COMP%] {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #ede9fe;
  color: #6366f1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tb-empty-video-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  display: block;
  font-size: 13px;
  color: #1e293b;
}
.tb-empty-video-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  display: block;
  font-size: 11.5px;
  color: #64748b;
  margin-top: 2px;
}
.tb-choose-file-btn[_ngcontent-%COMP%] {
  padding: 6px 14px;
  border-radius: 8px;
  background: #ffffff;
  border: 1px solid #cbd5e1;
  font-size: 12px;
  font-weight: 600;
  color: #475569;
  cursor: pointer;
  pointer-events: none;
  margin-top: 4px;
}
.tb-media-state-empty[_ngcontent-%COMP%]:hover   .tb-choose-file-btn[_ngcontent-%COMP%] {
  border-color: #6366f1;
  color: #6366f1;
}
.tb-media-state-ready[_ngcontent-%COMP%] {
  border: 1px solid #a7f3d0;
  border-radius: 14px;
  background:
    linear-gradient(
      135deg,
      #f0fdf4 0%,
      #ecfdf5 100%);
  padding: 16px 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 14px;
  min-height: 140px;
  flex: 1;
}
.tb-ready-top[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 12px;
}
.tb-video-ready-icon[_ngcontent-%COMP%] {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #10b981;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}
.tb-video-ready-details[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
}
.tb-video-ready-title[_ngcontent-%COMP%] {
  font-size: 13px;
  font-weight: 700;
  color: #065f46;
}
.tb-video-preview-link[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 600;
  color: #047857;
  text-decoration: underline;
  transition: color 0.15s;
}
.tb-video-preview-link[_ngcontent-%COMP%]:hover {
  color: #064e3b;
}
.tb-video-ready-actions[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
}
.tb-media-btn[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}
.tb-media-btn-replace[_ngcontent-%COMP%] {
  background: #ffffff;
  border: 1px solid #6ee7b7;
  color: #065f46;
}
.tb-media-btn-replace[_ngcontent-%COMP%]:hover {
  background: #ecfdf5;
  border-color: #34d399;
}
.tb-media-btn-delete[_ngcontent-%COMP%] {
  background: #ffffff;
  border: 1px solid #fecaca;
  color: #dc2626;
}
.tb-media-btn-delete[_ngcontent-%COMP%]:hover {
  background: #fef2f2;
  border-color: #f87171;
}
.tb-media-state-uploading[_ngcontent-%COMP%] {
  border: 1px solid #c7d2fe;
  border-radius: 14px;
  background: #eef2ff;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 8px;
  min-height: 140px;
  flex: 1;
}
.tb-spinner[_ngcontent-%COMP%] {
  width: 28px;
  height: 28px;
  border: 3px solid #c7d2fe;
  border-top-color: #4f46e5;
  border-radius: 50%;
  animation: _ngcontent-%COMP%_tbSpin 0.75s linear infinite;
}
@keyframes _ngcontent-%COMP%_tbSpin {
  to {
    transform: rotate(360deg);
  }
}
.tb-uploading-text[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 13px;
  font-weight: 700;
  color: #3730a3;
}
.tb-uploading-sub[_ngcontent-%COMP%] {
  font-size: 11px;
  color: #6366f1;
}
.tb-empty-state[_ngcontent-%COMP%] {
  padding: 48px 24px;
  background: #ffffff;
  border: 2px dashed #cbd5e1;
  border-radius: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}
.tb-empty-state-art[_ngcontent-%COMP%] {
  width: 72px;
  height: 72px;
  border-radius: 20px;
  background:
    linear-gradient(
      135deg,
      #e0e7ff 0%,
      #ede9fe 100%);
  color: #6366f1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
}
.tb-empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: #0f172a;
}
.tb-empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0;
  max-width: 480px;
  font-size: 13.5px;
  color: #64748b;
  line-height: 1.5;
}
.tb-bottom-actions[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  padding: 10px 0 20px;
}
.tb-add-lesson-large-btn[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  border-radius: 14px;
  border: 1px dashed #6366f1;
  background: #eef2ff;
  color: #4f46e5;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.tb-add-lesson-large-btn[_ngcontent-%COMP%]:hover {
  background: #e0e7ff;
  border-style: solid;
  transform: translateY(-2px);
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.18);
}
.tb-advanced-form[_ngcontent-%COMP%] {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 20px 24px;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.05);
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.tb-advanced-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tb-advanced-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: #0f172a;
}
@keyframes _ngcontent-%COMP%_fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes _ngcontent-%COMP%_slideUp {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.fade-in[_ngcontent-%COMP%] {
  animation: _ngcontent-%COMP%_fadeIn 0.28s ease-out;
}
.add-course-container[_ngcontent-%COMP%] {
  max-width: 1220px;
  margin: 0 auto;
  padding: 4px 0 40px;
  animation: _ngcontent-%COMP%_fadeIn 0.25s ease-out;
}
.ac-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e2e8f0;
}
.ac-header-left[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 16px;
}
.ac-page-title[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: #0f172a;
  letter-spacing: -0.3px;
}
.ac-header-right[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 12px;
}
.ac-layout[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  gap: 24px;
  align-items: start;
}
.ac-main[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.ac-sidebar[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: sticky;
  top: 88px;
}
.ac-block[_ngcontent-%COMP%], .ac-card[_ngcontent-%COMP%] {
  background: #ffffff;
  border-radius: 14px;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.04), 0 1px 2px rgba(15, 23, 42, 0.02);
  padding: 22px 24px;
  border: 1px solid #e2e8f0;
  transition: box-shadow 0.2s ease;
}
.ac-block[_ngcontent-%COMP%]:hover, .ac-card[_ngcontent-%COMP%]:hover {
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
}
.ac-label[_ngcontent-%COMP%] {
  display: block;
  font-size: 13.5px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 8px;
  letter-spacing: -0.1px;
}
.ac-subtext[_ngcontent-%COMP%] {
  font-size: 12px;
  color: #64748b;
  margin: 6px 0 0 0;
}
.ac-field-label[_ngcontent-%COMP%] {
  display: block;
  font-size: 11.5px;
  font-weight: 600;
  color: #64748b;
  margin-bottom: 5px;
  letter-spacing: 0.2px;
}
.ac-input[_ngcontent-%COMP%] {
  width: 100%;
  border: 1px solid #cbd5e1;
  border-radius: 9px;
  padding: 10px 14px;
  font-size: 13.5px;
  color: #0f172a;
  transition: all 0.2s ease;
  font-family: inherit;
  background: #ffffff;
  box-sizing: border-box;
}
.ac-input[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
}
.ac-select[_ngcontent-%COMP%] {
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  appearance: none;
  padding-right: 36px;
  font-weight: 600;
}
.ac-textarea[_ngcontent-%COMP%] {
  width: 100%;
  border: 1px solid #cbd5e1;
  border-radius: 9px;
  padding: 12px 14px;
  font-size: 13.5px;
  color: #0f172a;
  font-family: inherit;
  resize: vertical;
  background: #ffffff;
  box-sizing: border-box;
  line-height: 1.6;
  transition: all 0.2s ease;
}
.ac-textarea[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
}
.ac-title-input[_ngcontent-%COMP%] {
  font-size: 15px;
  font-weight: 600;
  color: #0f172a;
}
.ac-url-preview[_ngcontent-%COMP%] {
  font-size: 12px;
  color: #64748b;
  margin: 8px 0 0 0;
  display: flex;
  align-items: center;
  gap: 4px;
}
.ac-url-preview[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  color: #2563eb;
  text-decoration: none;
  font-weight: 500;
}
.ac-url-preview[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
  text-decoration: underline;
}
.ac-editor[_ngcontent-%COMP%] {
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  overflow: hidden;
  background: #ffffff;
}
.topbar[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  height: 72px;
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  position: sticky;
  top: 0;
  z-index: 10;
}
.ac-btn-small[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  padding: 5px 10px;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  background: transparent;
  border: 1px solid var(--border);
  font-family: "Inter", sans-serif;
  color: var(--txt-secondary);
  transition: all 0.16s;
}
.ac-btn-small[_ngcontent-%COMP%]:hover {
  border-color: var(--orange);
  color: var(--orange);
}
.ac-editor-tabs[_ngcontent-%COMP%] {
  display: flex;
  background: #eef0fb;
  border-radius: 6px;
  padding: 2px;
}
.ac-tab[_ngcontent-%COMP%] {
  padding: 4px 11px;
  border-radius: 4px;
  border: none;
  background: transparent;
  font-size: 12px;
  font-weight: 500;
  color: var(--txt-muted);
  cursor: pointer;
  font-family: "Inter", sans-serif;
}
.ac-tab.active[_ngcontent-%COMP%] {
  background: #fff;
  color: var(--txt-primary);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
}
.ac-editor-toolbar[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  gap: 6px;
}
.ac-icon-btn[_ngcontent-%COMP%] {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #475569;
  cursor: pointer;
  transition: all 0.15s;
  font-size: 13px;
}
.ac-icon-btn[_ngcontent-%COMP%]:hover {
  background: #eff6ff;
  border-color: #bfdbfe;
  color: #1d4ed8;
}
.ac-editor-textarea[_ngcontent-%COMP%] {
  width: 100%;
  border: none;
  padding: 13px;
  min-height: 220px;
  font-size: 14px;
  resize: vertical;
  font-family: "Inter", sans-serif;
  color: var(--txt-primary);
  background: #fff;
  box-sizing: border-box;
}
.ac-editor-textarea[_ngcontent-%COMP%]:focus {
  outline: none;
}
.ac-editor-content[_ngcontent-%COMP%] {
  width: 100%;
  border: none;
  padding: 14px 16px;
  min-height: 180px;
  font-size: 14px;
  font-family: inherit;
  color: #1e293b;
  background: #fff;
  box-sizing: border-box;
  outline: none;
  overflow-y: auto;
  line-height: 1.6;
}
.ac-editor-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  margin: 8px 0;
}
.ac-editor-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {
  list-style-type: disc;
  margin-left: 20px;
}
.ac-editor-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {
  list-style-type: decimal;
  margin-left: 20px;
}
.ac-editor-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .ac-editor-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .ac-editor-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  margin-top: 10px;
  margin-bottom: 5px;
  font-weight: 600;
}
.ac-editor-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
  font-size: 28px;
}
.ac-editor-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  font-size: 24px;
}
.ac-editor-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 20px;
}
.ac-text-btn[_ngcontent-%COMP%] {
  background: transparent;
  border: none;
  font-size: 12px;
  color: var(--txt-muted);
  cursor: pointer;
  font-family: "Inter", sans-serif;
  transition: color 0.15s;
}
.ac-text-btn[_ngcontent-%COMP%]:hover {
  color: var(--orange);
}
.ac-field[_ngcontent-%COMP%] {
  margin-bottom: 14px;
}
.ac-milestones-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 6px;
}
@media (max-width: 900px) {
  .ac-milestones-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
}
.ac-meta-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin-top: 6px;
}
.action-btn.upload-btn[_ngcontent-%COMP%] {
  background: #f1f5f9;
  color: #334155;
  border: 1px solid #cbd5e1;
  padding: 0 16px;
  height: 42px;
  border-radius: 9px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.18s;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.action-btn.upload-btn[_ngcontent-%COMP%]:hover {
  background: #e2e8f0;
  color: #0f172a;
  border-color: #94a3b8;
}
@media (max-width: 992px) {
  .ac-layout[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
  .ac-sidebar[_ngcontent-%COMP%] {
    position: static;
  }
}
.additional-form-container[_ngcontent-%COMP%] {
  max-width: 100%;
}
.additional-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}
.additional-title[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--txt-primary);
}
.additional-section[_ngcontent-%COMP%] {
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f0f1f9;
}
.additional-section-title[_ngcontent-%COMP%] {
  margin: 0 0 4px 0;
  font-size: 14px;
  font-weight: 600;
  color: var(--txt-primary);
}
.additional-section-desc[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 13px;
  color: var(--txt-muted);
  line-height: 1.5;
}
.additional-field[_ngcontent-%COMP%] {
  margin-bottom: 20px;
}
.additional-label[_ngcontent-%COMP%] {
  display: block;
  font-size: 13px;
  font-weight: 500;
  color: var(--txt-primary);
  margin-bottom: 6px;
}
.additional-textarea[_ngcontent-%COMP%] {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 10px 12px;
  font-size: 13px;
  font-family: "Inter", sans-serif;
  color: var(--txt-secondary);
  resize: vertical;
  transition: border-color 0.2s, box-shadow 0.2s;
  line-height: 1.5;
  box-sizing: border-box;
  background: #fff;
}
.additional-textarea[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: var(--orange);
  box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.10);
}
.additional-textarea[_ngcontent-%COMP%]::placeholder {
  color: #c5cae9;
}
.duration-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
}
.duration-input[_ngcontent-%COMP%] {
  width: 140px;
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 8px 12px;
  font-size: 13px;
  font-family: "Inter", sans-serif;
  color: var(--txt-secondary);
  background: #fff;
  transition: border-color 0.2s;
}
.duration-input[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: var(--orange);
  box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.10);
}
.duration-unit[_ngcontent-%COMP%] {
  font-size: 13px;
  color: var(--txt-muted);
  padding: 8px 12px;
  background: #f8fafc;
  border: 1px solid var(--border);
  border-radius: 6px;
  -webkit-user-select: none;
  user-select: none;
}
@media (max-width: 768px) {
  .admin-layout[_ngcontent-%COMP%] {
    flex-direction: column;
  }
  .sidebar[_ngcontent-%COMP%] {
    width: 100%;
    height: auto;
    position: relative;
  }
  .topbar[_ngcontent-%COMP%] {
    padding: 12px 18px;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
  .content-wrapper[_ngcontent-%COMP%] {
    padding: 18px;
  }
  .stats-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
  .table-container[_ngcontent-%COMP%] {
    overflow-x: auto;
  }
  .data-table[_ngcontent-%COMP%] {
    min-width: 700px;
  }
  .modal-body[_ngcontent-%COMP%], .parent-info-section[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
  .modal-content[_ngcontent-%COMP%] {
    max-height: 95vh;
    margin: 8px;
    width: calc(100% - 16px);
  }
  .type-filters[_ngcontent-%COMP%] {
    flex-wrap: wrap;
  }
}
.reg-view-page[_ngcontent-%COMP%] {
  max-width: 1120px;
  margin: 0 auto;
  padding: 4px 0 40px;
  animation: _ngcontent-%COMP%_fadeIn 0.25s ease-out;
}
.reg-view-topbar[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;
}
.back-nav-btn[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 13.5px;
  color: #334155;
  background: #ffffff;
  border: 1px solid #cbd5e1;
  padding: 9px 18px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}
.back-nav-btn[_ngcontent-%COMP%]:hover {
  background: #f1f5f9;
  color: #0f172a;
  border-color: #94a3b8;
  transform: translateX(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
}
.reg-view-top-actions[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
}
.reg-id-pill[_ngcontent-%COMP%] {
  font-family:
    "JetBrains Mono",
    "Courier New",
    monospace;
  font-size: 12px;
  font-weight: 700;
  color: #475569;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  padding: 6px 14px;
  border-radius: 20px;
  letter-spacing: 0.3px;
}
.delete-reg-btn[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: 13px;
  color: #e11d48;
  background: #fff1f2;
  border: 1px solid #fecdd3;
  padding: 7px 14px;
  border-radius: 9px;
  cursor: pointer;
  transition: all 0.2s;
}
.delete-reg-btn[_ngcontent-%COMP%]:hover {
  background: #ffe4e6;
  border-color: #fda4af;
  color: #be123c;
  transform: translateY(-1px);
}
.close-view-btn[_ngcontent-%COMP%] {
  width: 34px;
  height: 34px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: 1px solid #cbd5e1;
  border-radius: 50%;
  font-size: 20px;
  line-height: 1;
  color: #64748b;
  cursor: pointer;
  transition: all 0.2s;
}
.close-view-btn[_ngcontent-%COMP%]:hover {
  background: #f8fafc;
  color: #0f172a;
  border-color: #94a3b8;
  transform: rotate(90deg);
}
.reg-hero-card[_ngcontent-%COMP%] {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 24px 28px;
  margin-bottom: 22px;
  box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 1px 3px rgba(15, 23, 42, 0.03);
  position: relative;
  overflow: hidden;
  border-top: 4px solid #3b82f6;
}
.reg-hero-main[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 22px;
}
.reg-avatar[_ngcontent-%COMP%] {
  width: 64px;
  height: 64px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
.school-avatar[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #3b82f6 0%,
      #1d4ed8 100%);
  color: #ffffff;
}
.individual-avatar[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #f59e0b 0%,
      #b45309 100%);
  color: #ffffff;
}
.reg-hero-info[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
}
.reg-title-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 8px;
}
.reg-entity-name[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 24px;
  font-weight: 800;
  color: #0f172a;
  letter-spacing: -0.4px;
}
.type-pill[_ngcontent-%COMP%] {
  font-size: 11.5px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 4px 12px;
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
}
.school-pill[_ngcontent-%COMP%] {
  background: #eff6ff;
  color: #1d4ed8;
  border: 1px solid #bfdbfe;
}
.individual-pill[_ngcontent-%COMP%] {
  background: #fff7ed;
  color: #c2410c;
  border: 1px solid #ffedd5;
}
.category-pill-badge[_ngcontent-%COMP%] {
  font-size: 11.5px;
  font-weight: 700;
  background: #faf5ff;
  color: #7e22ce;
  border: 1px solid #e9d5ff;
  padding: 4px 12px;
  border-radius: 20px;
}
.reg-meta-chips[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 6px;
}
.meta-chip[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #64748b;
  font-weight: 500;
}
.meta-chip[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  color: #94a3b8;
  flex-shrink: 0;
}
.meta-link[_ngcontent-%COMP%] {
  color: #2563eb;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.15s;
}
.meta-link[_ngcontent-%COMP%]:hover {
  color: #1d4ed8;
  text-decoration: underline;
}
.reg-details-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 22px;
}
.reg-card[_ngcontent-%COMP%] {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 22px 24px;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.04);
  display: flex;
  flex-direction: column;
}
.reg-card-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
  padding-bottom: 14px;
  border-bottom: 1px solid #f1f5f9;
}
.reg-card-icon[_ngcontent-%COMP%] {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.trophy-icon[_ngcontent-%COMP%] {
  background: #fef3c7;
  color: #b45309;
}
.user-icon[_ngcontent-%COMP%] {
  background: #e0e7ff;
  color: #4338ca;
}
.teams-icon[_ngcontent-%COMP%] {
  background: #dcfce7;
  color: #15803d;
}
.media-icon[_ngcontent-%COMP%] {
  background: #fce7f3;
  color: #be185d;
}
.reg-card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 15px;
  font-weight: 700;
  color: #1e293b;
}
.reg-card-body[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.field-item[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.field-label[_ngcontent-%COMP%] {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  color: #64748b;
}
.field-value[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 14.5px;
  font-weight: 600;
  color: #0f172a;
  line-height: 1.4;
  word-break: break-word;
}
.highlight-value[_ngcontent-%COMP%] {
  color: #2563eb !important;
  font-size: 15.5px;
  font-weight: 700;
}
.email-link[_ngcontent-%COMP%] {
  color: #2563eb;
  text-decoration: none;
  font-weight: 600;
}
.email-link[_ngcontent-%COMP%]:hover {
  text-decoration: underline;
}
.consent-status[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12.5px;
  font-weight: 600;
  padding: 5px 12px;
  border-radius: 6px;
  width: fit-content;
}
.consent-yes[_ngcontent-%COMP%] {
  background: #dcfce7;
  color: #15803d;
  border: 1px solid #bbf7d0;
}
.consent-pending[_ngcontent-%COMP%] {
  background: #fef3c7;
  color: #b45309;
  border: 1px solid #fde68a;
}
.reg-section-card[_ngcontent-%COMP%] {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 22px 24px;
  margin-bottom: 22px;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.04);
}
.header-titles[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
}
.header-titles[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 15px;
  font-weight: 700;
  color: #1e293b;
}
.team-count-pill[_ngcontent-%COMP%] {
  font-size: 12px;
  font-weight: 700;
  background: #f1f5f9;
  color: #334155;
  padding: 4px 12px;
  border-radius: 20px;
  border: 1px solid #cbd5e1;
}
.teams-stat-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 16px;
  margin-bottom: 20px;
}
.team-stat-tile[_ngcontent-%COMP%] {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 16px 18px;
  transition: all 0.2s ease;
}
.team-stat-tile.has-teams[_ngcontent-%COMP%] {
  background: #f0fdf4;
  border-color: #86efac;
  box-shadow: 0 4px 12px -2px rgba(34, 197, 94, 0.12);
}
.tile-top[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}
.tile-category[_ngcontent-%COMP%] {
  font-size: 14px;
  font-weight: 700;
  color: #0f172a;
}
.tile-age[_ngcontent-%COMP%] {
  font-size: 11px;
  font-weight: 600;
  color: #64748b;
  background: rgba(0, 0, 0, 0.05);
  padding: 2px 8px;
  border-radius: 6px;
}
.tile-count[_ngcontent-%COMP%] {
  font-size: 28px;
  font-weight: 800;
  color: #0f172a;
  line-height: 1.1;
  margin-bottom: 4px;
}
.team-stat-tile.has-teams[_ngcontent-%COMP%]   .tile-count[_ngcontent-%COMP%] {
  color: #15803d;
}
.tile-meta[_ngcontent-%COMP%] {
  font-size: 12px;
  color: #64748b;
  font-weight: 500;
}
.rosters-section[_ngcontent-%COMP%] {
  margin-top: 20px;
  border-top: 1px solid #f1f5f9;
  padding-top: 18px;
}
.rosters-heading[_ngcontent-%COMP%] {
  margin: 0 0 14px 0;
  font-size: 13px;
  font-weight: 700;
  color: #475569;
  text-transform: uppercase;
  letter-spacing: 0.6px;
}
.rosters-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}
.roster-card[_ngcontent-%COMP%] {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
}
.roster-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid #e2e8f0;
}
.roster-name[_ngcontent-%COMP%] {
  font-size: 14px;
  font-weight: 700;
  color: #1e293b;
}
.roster-members-count[_ngcontent-%COMP%] {
  font-size: 11px;
  font-weight: 600;
  color: #64748b;
  background: #e2e8f0;
  padding: 2px 8px;
  border-radius: 10px;
}
.roster-members-list[_ngcontent-%COMP%] {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.roster-member-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 10px;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  font-size: 13px;
}
.member-tag[_ngcontent-%COMP%] {
  font-size: 11px;
  font-weight: 700;
  color: #475569;
  background: #f1f5f9;
  padding: 2px 6px;
  border-radius: 4px;
}
.member-name[_ngcontent-%COMP%] {
  color: #0f172a;
  font-weight: 600;
}
.no-roster-note[_ngcontent-%COMP%] {
  background: #f8fafc;
  border: 1px dashed #cbd5e1;
  border-radius: 10px;
  padding: 16px 20px;
  text-align: center;
  color: #64748b;
  font-size: 13px;
  margin-top: 12px;
}
.media-content-container[_ngcontent-%COMP%] {
  margin-top: 14px;
}
.summary-box[_ngcontent-%COMP%] {
  background: #f8fafc;
  border-left: 4px solid #6366f1;
  border-radius: 8px;
  padding: 14px 18px;
  margin-bottom: 18px;
}
.summary-label[_ngcontent-%COMP%] {
  display: block;
  font-size: 11.5px;
  font-weight: 700;
  color: #475569;
  margin-bottom: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.summary-text[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 14px;
  font-style: italic;
  color: #334155;
  line-height: 1.6;
}
.media-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 18px;
}
.media-card[_ngcontent-%COMP%] {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.media-card-title[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 700;
  color: #334155;
}
.media-open-btn[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 600;
  color: #2563eb;
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 8px;
  padding: 8px 14px;
  text-decoration: none;
  transition: all 0.2s;
}
.media-open-btn[_ngcontent-%COMP%]:hover {
  background: #dbeafe;
  color: #1d4ed8;
}
.reg-view-bottom-bar[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 18px;
  margin-top: 8px;
  border-top: 1px solid #e2e8f0;
}
.reg-view-bottom-bar[_ngcontent-%COMP%]   .action-btn.delete-btn[_ngcontent-%COMP%] {
  background: #ef4444;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 13.5px;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  transition: background 0.2s;
}
.reg-view-bottom-bar[_ngcontent-%COMP%]   .action-btn.delete-btn[_ngcontent-%COMP%]:hover {
  background: #dc2626;
}
@media (max-width: 860px) {
  .reg-details-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
  .teams-stat-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
  .reg-hero-main[_ngcontent-%COMP%] {
    flex-direction: column;
    align-items: flex-start;
  }
}
/*# sourceMappingURL=admin-dashboard.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "src\\app\\pages\\admin-dashboard\\admin-dashboard.component.ts", lineNumber: 17 });
})();
export {
  AdminDashboardComponent
};
//# sourceMappingURL=chunk-3SXXK4H7.js.map
