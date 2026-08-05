import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RadioControlValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-Z5MBKUDO.js";
import {
  DomSanitizer,
  Router
} from "./chunk-RK72NEAB.js";
import {
  HttpClient
} from "./chunk-PLXL2LZV.js";
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
  ɵɵpropertyInterpolate1,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-C72BQOBI.js";

// src/app/pages/admin-dashboard/admin-dashboard.component.ts
var _c0 = ["editorRef"];
var _c1 = ["lessonVideoUploadInput"];
var _c2 = (a0, a1, a2) => ({ "challenge-badge": a0, "school-badge": a1, "individual-badge": a2 });
function AdminDashboardComponent_div_58_div_1_tr_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 61);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "span", 62);
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
function AdminDashboardComponent_div_58_div_1_tr_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 63);
    \u0275\u0275text(2, "No registrations found.");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_div_58_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43)(2, "div", 44)(3, "div", 45);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 46);
    \u0275\u0275element(5, "path", 17)(6, "polyline", 18)(7, "line", 19)(8, "line", 20)(9, "polyline", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "div", 47)(11, "h3");
    \u0275\u0275text(12, "Total Registrations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 48);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 44)(16, "div", 49);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 46);
    \u0275\u0275element(18, "path", 22)(19, "circle", 23)(20, "path", 24)(21, "path", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(22, "div", 47)(23, "h3");
    \u0275\u0275text(24, "System Users");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p", 48);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 44)(28, "div", 50);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(29, "svg", 46);
    \u0275\u0275element(30, "path", 51)(31, "path", 52)(32, "path", 53)(33, "path", 54)(34, "path", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(35, "div", 47)(36, "h3");
    \u0275\u0275text(37, "Active Challenges");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p", 48);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(40, "div", 56)(41, "h2");
    \u0275\u0275text(42, "Recent Registrations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 57)(44, "table", 58)(45, "thead")(46, "tr")(47, "th");
    \u0275\u0275text(48, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "th");
    \u0275\u0275text(50, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "th");
    \u0275\u0275text(52, "Challenge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "th");
    \u0275\u0275text(54, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "th");
    \u0275\u0275text(56, "Date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "tbody");
    \u0275\u0275template(58, AdminDashboardComponent_div_58_div_1_tr_58_Template, 14, 8, "tr", 59);
    \u0275\u0275pipe(59, "slice");
    \u0275\u0275template(60, AdminDashboardComponent_div_58_div_1_tr_60_Template, 3, 0, "tr", 60);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r1.stats.totalRegistrations);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r1.stats.totalUsers);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r1.stats.totalChallenges);
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(59, 5, ctx_r1.registrations, 0, 5));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.registrations.length === 0);
  }
}
function AdminDashboardComponent_div_58_div_2_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 71)(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span", 72);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 73);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "div", 71)(15, "span", 61);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 74);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td")(23, "div", 75)(24, "button", 76);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_58_div_2_tr_31_Template_button_click_24_listener() {
      const reg_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.viewParticipant(reg_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 77);
    \u0275\u0275element(26, "path", 78)(27, "circle", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " View ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(29, "button", 80);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_58_div_2_tr_31_Template_button_click_29_listener() {
      const reg_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteParticipant(reg_r5.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(30, "svg", 77);
    \u0275\u0275element(31, "polyline", 81)(32, "path", 82);
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
function AdminDashboardComponent_div_58_div_2_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 83);
    \u0275\u0275text(2, "No registrations found for the selected type.");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_div_58_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 64)(2, "button", 65);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_58_div_2_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setTypeFilter("all"));
    });
    \u0275\u0275text(3, " All Registrations ");
    \u0275\u0275elementStart(4, "span", 66);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 65);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_58_div_2_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setTypeFilter("school"));
    });
    \u0275\u0275text(7, " School Registrations ");
    \u0275\u0275elementStart(8, "span", 67);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 65);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_58_div_2_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setTypeFilter("individual"));
    });
    \u0275\u0275text(11, " Individual Registrations ");
    \u0275\u0275elementStart(12, "span", 68);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 69)(15, "table", 70)(16, "thead")(17, "tr")(18, "th");
    \u0275\u0275text(19, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "Participant Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th");
    \u0275\u0275text(23, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th");
    \u0275\u0275text(25, "Challenge & Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th");
    \u0275\u0275text(27, "Date Joined");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th");
    \u0275\u0275text(29, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "tbody");
    \u0275\u0275template(31, AdminDashboardComponent_div_58_div_2_tr_31_Template, 34, 14, "tr", 59)(32, AdminDashboardComponent_div_58_div_2_tr_32_Template, 3, 0, "tr", 60);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
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
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r1.filteredRegistrations);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredRegistrations.length === 0);
  }
}
function AdminDashboardComponent_div_58_div_3_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "span", 84);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "button", 76);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_58_div_3_tr_16_Template_button_click_14_listener() {
      const user_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editUser(user_r7));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 77);
    \u0275\u0275element(16, "path", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " Edit ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", user_r7.id, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r7.username);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", user_r7.role);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 5, user_r7.role));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 7, user_r7.created_at, "mediumDate"));
  }
}
function AdminDashboardComponent_div_58_div_3_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 63);
    \u0275\u0275text(2, "No users found.");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_div_58_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 57)(2, "table", 70)(3, "thead")(4, "tr")(5, "th");
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
    \u0275\u0275template(16, AdminDashboardComponent_div_58_div_3_tr_16_Template, 18, 10, "tr", 59)(17, AdminDashboardComponent_div_58_div_3_tr_17_Template, 3, 0, "tr", 60);
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
function AdminDashboardComponent_div_58_div_4_div_1_div_6_table_32_tr_16_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const course_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getCourseDescriptionPreview(course_r11.description));
  }
}
function AdminDashboardComponent_div_58_div_4_div_1_div_6_table_32_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 106);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 71)(5, "strong", 107);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, AdminDashboardComponent_div_58_div_4_div_1_div_6_table_32_tr_16_span_7_Template, 2, 1, "span", 108);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "span", 109);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td")(12, "span", 109);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 110);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "div", 111)(18, "button", 112);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_58_div_4_div_1_div_6_table_32_tr_16_Template_button_click_18_listener() {
      const course_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.viewCourse(course_r11));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 113);
    \u0275\u0275element(20, "path", 78)(21, "circle", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " View ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(23, "button", 114);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_58_div_4_div_1_div_6_table_32_tr_16_Template_button_click_23_listener() {
      const i_r12 = \u0275\u0275restoreView(_r10).index;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.editCourse(i_r12));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 113);
    \u0275\u0275element(25, "path", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, " Edit ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(27, "button", 115);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_58_div_4_div_1_div_6_table_32_tr_16_Template_button_click_27_listener() {
      const i_r12 = \u0275\u0275restoreView(_r10).index;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.deleteCourse(i_r12));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(28, "svg", 113);
    \u0275\u0275element(29, "polyline", 81)(30, "path", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, " Delete ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const course_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", ctx_r1.courses.length - i_r12, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(course_r11.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", course_r11.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(8, _c2, course_r11.difficulty === "Intermediate", course_r11.difficulty === "Beginner", course_r11.difficulty === "Advanced"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(course_r11.difficulty);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", course_r11.pricing === "Free" ? "consent-badge" : "category-badge");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(course_r11.pricing);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(course_r11.visibility);
  }
}
function AdminDashboardComponent_div_58_div_4_div_1_div_6_table_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 58)(1, "thead")(2, "tr")(3, "th");
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
    \u0275\u0275template(16, AdminDashboardComponent_div_58_div_4_div_1_div_6_table_32_tr_16_Template, 32, 12, "tr", 59);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r1.courses);
  }
}
function AdminDashboardComponent_div_58_div_4_div_1_div_6_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 116);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 117);
    \u0275\u0275element(2, "rect", 118)(3, "circle", 119)(4, "polyline", 120);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "No courses found. Add a new course to get started.");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_div_58_div_4_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 89)(1, "div", 90)(2, "div", 44)(3, "div", 91);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 92);
    \u0275\u0275element(5, "rect", 93)(6, "rect", 94);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div", 47)(8, "h3");
    \u0275\u0275text(9, "Total Courses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 48);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 44)(13, "div", 95);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 92);
    \u0275\u0275element(15, "path", 96);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "div", 47)(17, "h3");
    \u0275\u0275text(18, "Published");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 48);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "div", 57)(22, "div", 97)(23, "h3", 98);
    \u0275\u0275text(24, "Course Catalog ");
    \u0275\u0275elementStart(25, "span", 99);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "button", 100);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_58_div_4_div_1_div_6_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleAddCourse(true));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(28, "svg", 101);
    \u0275\u0275element(29, "line", 102)(30, "line", 103);
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, " Add Course ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(32, AdminDashboardComponent_div_58_div_4_div_1_div_6_table_32_Template, 17, 1, "table", 104)(33, AdminDashboardComponent_div_58_div_4_div_1_div_6_div_33_Template, 7, 0, "div", 105);
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
function AdminDashboardComponent_div_58_div_4_div_1_div_7_div_1_table_4_tr_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 71)(3, "strong", 107);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "td")(6, "div", 75)(7, "button", 112);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_58_div_4_div_1_div_7_div_1_table_4_tr_8_Template_button_click_7_listener() {
      const course_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r1.viewCourse(course_r14));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 123);
    \u0275\u0275element(9, "path", 78)(10, "circle", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " View ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "button", 124);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_58_div_4_div_1_div_7_div_1_table_4_tr_8_Template_button_click_12_listener() {
      const course_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r1.selectCourseForTopic(course_r14));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 123);
    \u0275\u0275element(14, "line", 102)(15, "line", 103);
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " Add ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "button", 125);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_58_div_4_div_1_div_7_div_1_table_4_tr_8_Template_button_click_17_listener() {
      const i_r15 = \u0275\u0275restoreView(_r13).index;
      const ctx_r1 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r1.deleteCourse(i_r15));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 123);
    \u0275\u0275element(19, "polyline", 81)(20, "path", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, " Delete ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const course_r14 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(course_r14.title);
  }
}
function AdminDashboardComponent_div_58_div_4_div_1_div_7_div_1_table_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 58)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Course Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "tbody");
    \u0275\u0275template(8, AdminDashboardComponent_div_58_div_4_div_1_div_7_div_1_table_4_tr_8_Template, 22, 1, "tr", 59);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r1.courses);
  }
}
function AdminDashboardComponent_div_58_div_4_div_1_div_7_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 116)(1, "p");
    \u0275\u0275text(2, "No courses found. Add a new course from Overview tab.");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_div_58_div_4_div_1_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 122)(2, "h3", 98);
    \u0275\u0275text(3, "Select Course to Manage Topics");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, AdminDashboardComponent_div_58_div_4_div_1_div_7_div_1_table_4_Template, 9, 1, "table", 104)(5, AdminDashboardComponent_div_58_div_4_div_1_div_7_div_1_div_5_Template, 3, 0, "div", 105);
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
function AdminDashboardComponent_div_58_div_4_div_1_div_7_div_2_div_25_div_1_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 161);
    \u0275\u0275text(1, "Video uploaded");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_div_58_div_4_div_1_div_7_div_2_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 147)(1, "div", 148)(2, "div")(3, "p", 149);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "strong", 150);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 151);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_58_div_4_div_1_div_7_div_2_div_25_div_1_Template_button_click_7_listener() {
      const i_r18 = \u0275\u0275restoreView(_r17).index;
      const ctx_r1 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r1.removeTopicLesson(i_r18));
    });
    \u0275\u0275text(8, "Remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 152)(10, "input", 153);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_58_div_4_div_1_div_7_div_2_div_25_div_1_Template_input_ngModelChange_10_listener($event) {
      const lesson_r19 = \u0275\u0275restoreView(_r17).$implicit;
      \u0275\u0275twoWayBindingSet(lesson_r19.title, $event) || (lesson_r19.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 154);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_58_div_4_div_1_div_7_div_2_div_25_div_1_Template_input_ngModelChange_11_listener($event) {
      const lesson_r19 = \u0275\u0275restoreView(_r17).$implicit;
      \u0275\u0275twoWayBindingSet(lesson_r19.duration, $event) || (lesson_r19.duration = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 155)(13, "label", 156);
    \u0275\u0275text(14, "Brief description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "textarea", 157);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_58_div_4_div_1_div_7_div_2_div_25_div_1_Template_textarea_ngModelChange_15_listener($event) {
      const lesson_r19 = \u0275\u0275restoreView(_r17).$implicit;
      \u0275\u0275twoWayBindingSet(lesson_r19.syllabus, $event) || (lesson_r19.syllabus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 158)(17, "button", 159);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_58_div_4_div_1_div_7_div_2_div_25_div_1_Template_button_click_17_listener() {
      const i_r18 = \u0275\u0275restoreView(_r17).index;
      const ctx_r1 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r1.openTopicLessonVideoUploader(i_r18));
    });
    \u0275\u0275text(18, "Upload Lesson Video");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, AdminDashboardComponent_div_58_div_4_div_1_div_7_div_2_div_25_div_1_span_19_Template, 2, 0, "span", 160);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const lesson_r19 = ctx.$implicit;
    const i_r18 = ctx.index;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Lesson ", i_r18 + 1, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lesson_r19.title || "Lesson " + (i_r18 + 1));
    \u0275\u0275advance(4);
    \u0275\u0275propertyInterpolate1("placeholder", "Lesson ", i_r18 + 1, "");
    \u0275\u0275twoWayProperty("ngModel", lesson_r19.title);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", lesson_r19.duration);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("for", "lesson-desc-", i_r18, "");
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("id", "lesson-desc-", i_r18, "");
    \u0275\u0275twoWayProperty("ngModel", lesson_r19.syllabus);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", lesson_r19.video);
  }
}
function AdminDashboardComponent_div_58_div_4_div_1_div_7_div_2_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, AdminDashboardComponent_div_58_div_4_div_1_div_7_div_2_div_25_div_1_Template, 20, 12, "div", 146);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.selectedCourseForTopic.lessons);
  }
}
function AdminDashboardComponent_div_58_div_4_div_1_div_7_div_2_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 162)(1, "p");
    \u0275\u0275text(2, "No lessons are present yet. Use Add Topic to begin building this course.");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_div_58_div_4_div_1_div_7_div_2_div_27_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 176);
    \u0275\u0275element(1, "img", 177);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.newTopicData.image, \u0275\u0275sanitizeUrl);
  }
}
function AdminDashboardComponent_div_58_div_4_div_1_div_7_div_2_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 163)(1, "h3", 164);
    \u0275\u0275text(2, "Add New Topic");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 165)(4, "label", 166);
    \u0275\u0275text(5, "Topic Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 167);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_58_div_4_div_1_div_7_div_2_div_27_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(6);
      \u0275\u0275twoWayBindingSet(ctx_r1.newTopicData.title, $event) || (ctx_r1.newTopicData.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 165)(8, "label", 166);
    \u0275\u0275text(9, "Description (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "textarea", 168);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_58_div_4_div_1_div_7_div_2_div_27_Template_textarea_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(6);
      \u0275\u0275twoWayBindingSet(ctx_r1.newTopicData.description, $event) || (ctx_r1.newTopicData.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 165)(12, "label", 166);
    \u0275\u0275text(13, "Lesson Video (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 129)(15, "input", 169);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_58_div_4_div_1_div_7_div_2_div_27_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(6);
      \u0275\u0275twoWayBindingSet(ctx_r1.newTopicData.video, $event) || (ctx_r1.newTopicData.video = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 145, 1);
    \u0275\u0275listener("change", function AdminDashboardComponent_div_58_div_4_div_1_div_7_div_2_div_27_Template_input_change_16_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.onTopicVideoUpload($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 170);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_58_div_4_div_1_div_7_div_2_div_27_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r20);
      const topicVideoUpload_r21 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(topicVideoUpload_r21.click());
    });
    \u0275\u0275text(19, "Upload Video");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 165)(21, "label", 166);
    \u0275\u0275text(22, "Topic Image (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 129)(24, "input", 171);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_58_div_4_div_1_div_7_div_2_div_27_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(6);
      \u0275\u0275twoWayBindingSet(ctx_r1.newTopicData.image, $event) || (ctx_r1.newTopicData.image = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 172, 2);
    \u0275\u0275listener("change", function AdminDashboardComponent_div_58_div_4_div_1_div_7_div_2_div_27_Template_input_change_25_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.onTopicImageUpload($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 170);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_58_div_4_div_1_div_7_div_2_div_27_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r20);
      const topicImageUpload_r22 = \u0275\u0275reference(26);
      return \u0275\u0275resetView(topicImageUpload_r22.click());
    });
    \u0275\u0275text(28, "Upload Image");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(29, AdminDashboardComponent_div_58_div_4_div_1_div_7_div_2_div_27_div_29_Template, 2, 1, "div", 173);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 174)(31, "button", 76);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_58_div_4_div_1_div_7_div_2_div_27_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.toggleAddTopic(false));
    });
    \u0275\u0275text(32, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 175);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_58_div_4_div_1_div_7_div_2_div_27_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.saveTopic());
    });
    \u0275\u0275text(34, "Save Topic");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newTopicData.title);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newTopicData.description);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newTopicData.video);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newTopicData.image);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.newTopicData.image);
  }
}
function AdminDashboardComponent_div_58_div_4_div_1_div_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 126);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_58_div_4_div_1_div_7_div_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.closeTopicModal());
    });
    \u0275\u0275elementStart(1, "div", 127);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_58_div_4_div_1_div_7_div_2_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r16);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 128)(3, "div", 129)(4, "button", 130);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_58_div_4_div_1_div_7_div_2_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.closeTopicModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 101);
    \u0275\u0275element(6, "polyline", 131);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Back ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 132)(9, "h2", 133);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 134)(12, "button", 135);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_58_div_4_div_1_div_7_div_2_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.saveTopicChanges());
    });
    \u0275\u0275text(13, "Save Topic");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 136);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_58_div_4_div_1_div_7_div_2_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.addTopicLessonTab());
    });
    \u0275\u0275text(15, "Add Topic");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 137)(17, "div", 138)(18, "div", 139)(19, "div")(20, "h3", 140);
    \u0275\u0275text(21, "Lesson Builder");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p", 141);
    \u0275\u0275text(23, "Manage the course lessons and upload lesson videos from one window.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 142);
    \u0275\u0275template(25, AdminDashboardComponent_div_58_div_4_div_1_div_7_div_2_div_25_Template, 2, 1, "div", 60)(26, AdminDashboardComponent_div_58_div_4_div_1_div_7_div_2_div_26_Template, 3, 0, "div", 143);
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, AdminDashboardComponent_div_58_div_4_div_1_div_7_div_2_div_27_Template, 35, 5, "div", 144);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "input", 145, 0);
    \u0275\u0275listener("change", function AdminDashboardComponent_div_58_div_4_div_1_div_7_div_2_Template_input_change_28_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.onTopicLessonVideoUpload($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.selectedCourseForTopic.title);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngIf", ctx_r1.selectedCourseForTopic.lessons && ctx_r1.selectedCourseForTopic.lessons.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.selectedCourseForTopic.lessons || ctx_r1.selectedCourseForTopic.lessons.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isAddingTopic);
  }
}
function AdminDashboardComponent_div_58_div_4_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275template(1, AdminDashboardComponent_div_58_div_4_div_1_div_7_div_1_Template, 6, 2, "div", 121)(2, AdminDashboardComponent_div_58_div_4_div_1_div_7_div_2_Template, 30, 4, "div", 39);
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
function AdminDashboardComponent_div_58_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 87)(2, "button", 65);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_58_div_4_div_1_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.switchCourseTab("overview"));
    });
    \u0275\u0275text(3, " Overview ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 65);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_58_div_4_div_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.switchCourseTab("topic"));
    });
    \u0275\u0275text(5, " Topics ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, AdminDashboardComponent_div_58_div_4_div_1_div_6_Template, 34, 6, "div", 88)(7, AdminDashboardComponent_div_58_div_4_div_1_div_7_Template, 3, 2, "div", 88);
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
function AdminDashboardComponent_div_58_div_4_div_2_div_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 240);
    \u0275\u0275element(1, "img", 241);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.newCourseData.image, \u0275\u0275sanitizeUrl);
  }
}
function AdminDashboardComponent_div_58_div_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 178)(1, "div", 179)(2, "button", 76);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_58_div_4_div_2_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleAddCourse(false));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 101);
    \u0275\u0275element(4, "line", 180)(5, "polyline", 181);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Back to Courses ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "h3", 182);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 100);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_58_div_4_div_2_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveCourse());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 101);
    \u0275\u0275element(11, "path", 183)(12, "polyline", 184)(13, "polyline", 185);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "div", 186)(16, "div", 187)(17, "div", 188)(18, "label", 189);
    \u0275\u0275text(19, "Title ");
    \u0275\u0275elementStart(20, "span", 190);
    \u0275\u0275text(21, "\u2728");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "input", 191);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_58_div_4_div_2_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCourseData.title, $event) || (ctx_r1.newCourseData.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p", 192);
    \u0275\u0275text(24, " Course URL: ");
    \u0275\u0275elementStart(25, "a", 193);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 194);
    \u0275\u0275element(28, "path", 195)(29, "polyline", 196)(30, "line", 197);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(31, "div", 188)(32, "label", 189);
    \u0275\u0275text(33, "Description ");
    \u0275\u0275elementStart(34, "span", 190);
    \u0275\u0275text(35, "\u2728");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 198);
    \u0275\u0275element(37, "div", 199);
    \u0275\u0275elementStart(38, "div", 200);
    \u0275\u0275element(39, "div", 201);
    \u0275\u0275elementStart(40, "button", 202);
    \u0275\u0275listener("mousedown", function AdminDashboardComponent_div_58_div_4_div_2_Template_button_mousedown_40_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r1.saveSelection());
    })("click", function AdminDashboardComponent_div_58_div_4_div_2_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.handleEditorCommand("bold"));
    });
    \u0275\u0275elementStart(41, "b");
    \u0275\u0275text(42, "B");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "button", 202);
    \u0275\u0275listener("mousedown", function AdminDashboardComponent_div_58_div_4_div_2_Template_button_mousedown_43_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r1.saveSelection());
    })("click", function AdminDashboardComponent_div_58_div_4_div_2_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.handleEditorCommand("italic"));
    });
    \u0275\u0275elementStart(44, "i");
    \u0275\u0275text(45, "I");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "button", 202);
    \u0275\u0275listener("mousedown", function AdminDashboardComponent_div_58_div_4_div_2_Template_button_mousedown_46_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r1.saveSelection());
    })("click", function AdminDashboardComponent_div_58_div_4_div_2_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.handleEditorCommand("underline"));
    });
    \u0275\u0275elementStart(47, "span", 203);
    \u0275\u0275text(48, "U");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 204, 3);
    \u0275\u0275listener("input", function AdminDashboardComponent_div_58_div_4_div_2_Template_div_input_49_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onEditorInput());
    })("mouseup", function AdminDashboardComponent_div_58_div_4_div_2_Template_div_mouseup_49_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveSelection());
    })("keyup", function AdminDashboardComponent_div_58_div_4_div_2_Template_div_keyup_49_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveSelection());
    })("focus", function AdminDashboardComponent_div_58_div_4_div_2_Template_div_focus_49_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveSelection());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 188)(52, "label", 189);
    \u0275\u0275text(53, "What Will I Learn?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "textarea", 205);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_58_div_4_div_2_Template_textarea_ngModelChange_54_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCourseData.what_will_i_learn, $event) || (ctx_r1.newCourseData.what_will_i_learn = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 188)(56, "label", 189);
    \u0275\u0275text(57, "Phase 1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "input", 206);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_58_div_4_div_2_Template_input_ngModelChange_58_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCourseData.phase1, $event) || (ctx_r1.newCourseData.phase1 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 188)(60, "label", 189);
    \u0275\u0275text(61, "Final");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "input", 207);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_58_div_4_div_2_Template_input_ngModelChange_62_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCourseData.final, $event) || (ctx_r1.newCourseData.final = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 188)(64, "label", 189);
    \u0275\u0275text(65, "Extras");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "input", 208);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_58_div_4_div_2_Template_input_ngModelChange_66_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCourseData.extras, $event) || (ctx_r1.newCourseData.extras = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 188)(68, "label", 189);
    \u0275\u0275text(69, "Target Audience");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "textarea", 209);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_58_div_4_div_2_Template_textarea_ngModelChange_70_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCourseData.target_audience, $event) || (ctx_r1.newCourseData.target_audience = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 188)(72, "label", 189);
    \u0275\u0275text(73, "Materials Included");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "textarea", 210);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_58_div_4_div_2_Template_textarea_ngModelChange_74_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCourseData.materials_included, $event) || (ctx_r1.newCourseData.materials_included = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 188)(76, "label", 189);
    \u0275\u0275text(77, "Requirements/Instructions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "textarea", 211);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_58_div_4_div_2_Template_textarea_ngModelChange_78_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCourseData.requirements, $event) || (ctx_r1.newCourseData.requirements = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(79, "div", 212)(80, "div", 213)(81, "label", 189);
    \u0275\u0275text(82, "Visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "div", 214)(84, "select", 215);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_58_div_4_div_2_Template_select_ngModelChange_84_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCourseData.visibility, $event) || (ctx_r1.newCourseData.visibility = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(85, "option", 216);
    \u0275\u0275text(86, "\u{1F441} Public");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "option", 217);
    \u0275\u0275text(88, "\u{1F512} Private");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(89, "p", 218);
    \u0275\u0275text(90, "Last updated on 28th July, 2026");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "div", 219)(92, "span", 220);
    \u0275\u0275text(93, "Schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "div", 221);
    \u0275\u0275element(95, "div", 222);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(96, "div", 213)(97, "label", 189);
    \u0275\u0275text(98, "Featured Image ");
    \u0275\u0275elementStart(99, "span", 190);
    \u0275\u0275text(100, "\u2728");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(101, "div", 75)(102, "input", 223);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_58_div_4_div_2_Template_input_ngModelChange_102_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCourseData.image, $event) || (ctx_r1.newCourseData.image = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "input", 172, 4);
    \u0275\u0275listener("change", function AdminDashboardComponent_div_58_div_4_div_2_Template_input_change_103_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onFeaturedImageUpload($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "button", 224);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_58_div_4_div_2_Template_button_click_105_listener() {
      \u0275\u0275restoreView(_r23);
      const featuredImageUpload_r24 = \u0275\u0275reference(104);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.triggerFeaturedImageUpload(featuredImageUpload_r24));
    });
    \u0275\u0275text(106, "Upload");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(107, AdminDashboardComponent_div_58_div_4_div_2_div_107_Template, 2, 1, "div", 225);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "div", 213)(109, "label", 189);
    \u0275\u0275text(110, "Course Meta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "div", 214)(112, "label", 226);
    \u0275\u0275text(113, "Duration (Hours)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "input", 227);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_58_div_4_div_2_Template_input_ngModelChange_114_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCourseData.duration_hours, $event) || (ctx_r1.newCourseData.duration_hours = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(115, "div", 214)(116, "label", 226);
    \u0275\u0275text(117, "Lectures");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "input", 228);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_58_div_4_div_2_Template_input_ngModelChange_118_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCourseData.lectures, $event) || (ctx_r1.newCourseData.lectures = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(119, "div", 214)(120, "label", 226);
    \u0275\u0275text(121, "Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "input", 229);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_58_div_4_div_2_Template_input_ngModelChange_122_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCourseData.level, $event) || (ctx_r1.newCourseData.level = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(123, "div", 214)(124, "label", 226);
    \u0275\u0275text(125, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "input", 230);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_58_div_4_div_2_Template_input_ngModelChange_126_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCourseData.language, $event) || (ctx_r1.newCourseData.language = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(127, "div", 214)(128, "label", 226);
    \u0275\u0275text(129, "Certificate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "input", 231);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_58_div_4_div_2_Template_input_ngModelChange_130_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCourseData.certificate, $event) || (ctx_r1.newCourseData.certificate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(131, "div", 213)(132, "label", 189);
    \u0275\u0275text(133, "Pricing Model");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "div", 232)(135, "label", 233)(136, "input", 234);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_58_div_4_div_2_Template_input_ngModelChange_136_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCourseData.pricing, $event) || (ctx_r1.newCourseData.pricing = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(137, "span", 235);
    \u0275\u0275text(138, " Free ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(139, "label", 233)(140, "input", 236);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_58_div_4_div_2_Template_input_ngModelChange_140_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCourseData.pricing, $event) || (ctx_r1.newCourseData.pricing = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(141, "span", 235);
    \u0275\u0275text(142, " Paid ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(143, "div", 237)(144, "label", 189);
    \u0275\u0275text(145, "Categories");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(146, "div", 238);
    \u0275\u0275element(147, "div", 239);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.editingCourseIndex >= 0 ? "Edit Course" : "Add New Course");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.editingCourseIndex >= 0 ? "Update Course" : "Publish Course", " ");
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCourseData.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("https://ufs.net.in/inmyacademy/courses/", ctx_r1.newCourseData.title.toLowerCase().replace(" ", "-"), "");
    \u0275\u0275advance(28);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCourseData.what_will_i_learn);
    \u0275\u0275advance(4);
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
    \u0275\u0275advance(10);
    \u0275\u0275classProp("on", false);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCourseData.image);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.newCourseData.image);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCourseData.duration_hours);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCourseData.lectures);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCourseData.level);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCourseData.language);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCourseData.certificate);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCourseData.pricing);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCourseData.pricing);
  }
}
function AdminDashboardComponent_div_58_div_4_div_3_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 251);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("innerHTML", ctx_r1.sanitizeHtml(ctx_r1.selectedCourse.about_the_track), \u0275\u0275sanitizeHtml);
  }
}
function AdminDashboardComponent_div_58_div_4_div_3_div_21_div_4_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 260)(1, "video", 261);
    \u0275\u0275element(2, "source", 262);
    \u0275\u0275text(3, " Your browser does not support this video. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const lesson_r26 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", lesson_r26.video, \u0275\u0275sanitizeUrl);
  }
}
function AdminDashboardComponent_div_58_div_4_div_3_div_21_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 254)(1, "div", 255)(2, "div")(3, "h4", 256);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 257);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 258);
    \u0275\u0275text(8, "Topic");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, AdminDashboardComponent_div_58_div_4_div_3_div_21_div_4_div_9_Template, 4, 1, "div", 259);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lesson_r26 = ctx.$implicit;
    const j_r27 = ctx.index;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("Lesson ", j_r27 + 1, ": ", lesson_r26.title || "Untitled Topic", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lesson_r26.syllabus || lesson_r26.description || "No description provided.");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", lesson_r26.video);
  }
}
function AdminDashboardComponent_div_58_div_4_div_3_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 188)(1, "label", 189);
    \u0275\u0275text(2, "Topics / Lessons");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 252);
    \u0275\u0275template(4, AdminDashboardComponent_div_58_div_4_div_3_div_21_div_4_Template, 10, 4, "div", 253);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.selectedCourse.lessons);
  }
}
function AdminDashboardComponent_div_58_div_4_div_3_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 188)(1, "label", 189);
    \u0275\u0275text(2, "Phase 1");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 263);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275property("innerHTML", ctx_r1.sanitizeHtml(ctx_r1.selectedCourse.phase1), \u0275\u0275sanitizeHtml);
  }
}
function AdminDashboardComponent_div_58_div_4_div_3_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 188)(1, "label", 189);
    \u0275\u0275text(2, "Final");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 263);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275property("innerHTML", ctx_r1.sanitizeHtml(ctx_r1.selectedCourse.final), \u0275\u0275sanitizeHtml);
  }
}
function AdminDashboardComponent_div_58_div_4_div_3_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 188)(1, "label", 189);
    \u0275\u0275text(2, "Extras");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 263);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275property("innerHTML", ctx_r1.sanitizeHtml(ctx_r1.selectedCourse.extras), \u0275\u0275sanitizeHtml);
  }
}
function AdminDashboardComponent_div_58_div_4_div_3_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 264);
    \u0275\u0275element(1, "img", 265);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.selectedCourse.image, \u0275\u0275sanitizeUrl);
  }
}
function AdminDashboardComponent_div_58_div_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 178)(1, "div", 179)(2, "button", 76);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_58_div_4_div_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.closeCourseModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 101);
    \u0275\u0275element(4, "line", 180)(5, "polyline", 181);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Back to Courses ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "h3", 182);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 100);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_58_div_4_div_3_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.editCourseById(ctx_r1.selectedCourse.id);
      return \u0275\u0275resetView(ctx_r1.isViewingCourse = false);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 101);
    \u0275\u0275element(11, "path", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Edit Course ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "div", 186)(14, "div", 187)(15, "div", 188)(16, "label", 189);
    \u0275\u0275text(17, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 242);
    \u0275\u0275element(19, "div", 243);
    \u0275\u0275template(20, AdminDashboardComponent_div_58_div_4_div_3_div_20_Template, 1, 1, "div", 244);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, AdminDashboardComponent_div_58_div_4_div_3_div_21_Template, 5, 1, "div", 245)(22, AdminDashboardComponent_div_58_div_4_div_3_div_22_Template, 4, 1, "div", 245)(23, AdminDashboardComponent_div_58_div_4_div_3_div_23_Template, 4, 1, "div", 245)(24, AdminDashboardComponent_div_58_div_4_div_3_div_24_Template, 4, 1, "div", 245);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 212)(26, "div", 213)(27, "label", 189);
    \u0275\u0275text(28, "Course Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 246)(30, "div", 247)(31, "span", 248);
    \u0275\u0275text(32, "Difficulty Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 109);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 247)(36, "span", 248);
    \u0275\u0275text(37, "Pricing Model");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 109);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 247)(41, "span", 248);
    \u0275\u0275text(42, "Visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 249);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 247)(46, "span", 248);
    \u0275\u0275text(47, "Public Course");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span", 249);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(50, AdminDashboardComponent_div_58_div_4_div_3_div_50_Template, 2, 1, "div", 250);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.selectedCourse.title);
    \u0275\u0275advance(11);
    \u0275\u0275property("innerHTML", ctx_r1.sanitizeHtml(ctx_r1.selectedCourse.description), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCourse.about_the_track);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCourse.lessons && ctx_r1.selectedCourse.lessons.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCourse.phase1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCourse.final);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCourse.extras);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(14, _c2, ctx_r1.selectedCourse.difficulty === "Intermediate", ctx_r1.selectedCourse.difficulty === "Beginner", ctx_r1.selectedCourse.difficulty === "Advanced"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.selectedCourse.difficulty);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ctx_r1.selectedCourse.pricing === "Free" ? "consent-badge" : "category-badge");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.selectedCourse.pricing);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedCourse.visibility);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedCourse.is_public ? "Yes" : "No");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCourse.image);
  }
}
function AdminDashboardComponent_div_58_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275template(1, AdminDashboardComponent_div_58_div_4_div_1_Template, 8, 6, "div", 60)(2, AdminDashboardComponent_div_58_div_4_div_2_Template, 148, 23, "div", 86)(3, AdminDashboardComponent_div_58_div_4_div_3_Template, 51, 18, "div", 86);
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
function AdminDashboardComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275template(1, AdminDashboardComponent_div_58_div_1_Template, 61, 9, "div", 41)(2, AdminDashboardComponent_div_58_div_2_Template, 33, 11, "div", 41)(3, AdminDashboardComponent_div_58_div_3_Template, 18, 2, "div", 41)(4, AdminDashboardComponent_div_58_div_4_Template, 4, 3, "div", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "dashboard");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "registrations");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "users");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "courses");
  }
}
function AdminDashboardComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 266);
    \u0275\u0275element(1, "div", 267);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading dashboard data...");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_div_60_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 270)(1, "label");
    \u0275\u0275text(2, "Age");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedParticipant.age, " years old");
  }
}
function AdminDashboardComponent_div_60_div_43_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 281)(1, "label");
    \u0275\u0275text(2, "Participant's Short Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 282);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(' "', ctx_r1.selectedParticipant.summary, '" ');
  }
}
function AdminDashboardComponent_div_60_div_43_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 270)(1, "label");
    \u0275\u0275text(2, "Uploaded Video");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 283)(4, "video", 284);
    \u0275\u0275element(5, "source", 262);
    \u0275\u0275text(6, " Your browser does not support the video tag. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a", 285);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 286);
    \u0275\u0275element(9, "path", 195)(10, "polyline", 196)(11, "line", 197);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Open Video ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275property("src", "http://localhost:5001" + ctx_r1.selectedParticipant.video_path, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", "http://localhost:5001" + ctx_r1.selectedParticipant.video_path, \u0275\u0275sanitizeUrl);
  }
}
function AdminDashboardComponent_div_60_div_43_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 270)(1, "label");
    \u0275\u0275text(2, "Poster / Cover Image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 287);
    \u0275\u0275element(4, "img", 288);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 285);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 286);
    \u0275\u0275element(7, "path", 195)(8, "polyline", 196)(9, "line", 197);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Open Image ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", "http://localhost:5001" + ctx_r1.selectedParticipant.poster_path, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("href", "http://localhost:5001" + ctx_r1.selectedParticipant.poster_path, \u0275\u0275sanitizeUrl);
  }
}
function AdminDashboardComponent_div_60_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 277)(1, "h3", 278);
    \u0275\u0275text(2, "Entry Details & Attachments");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AdminDashboardComponent_div_60_div_43_div_3_Template, 5, 1, "div", 279);
    \u0275\u0275elementStart(4, "div", 280);
    \u0275\u0275template(5, AdminDashboardComponent_div_60_div_43_div_5_Template, 13, 2, "div", 271)(6, AdminDashboardComponent_div_60_div_43_div_6_Template, 11, 2, "div", 271);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.selectedParticipant.summary);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.selectedParticipant.video_path);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedParticipant.poster_path);
  }
}
function AdminDashboardComponent_div_60_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 289)(1, "h3");
    \u0275\u0275text(2, "Parent / Guardian Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 270)(4, "label");
    \u0275\u0275text(5, "Parent Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 270)(9, "label");
    \u0275\u0275text(10, "Parent Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 270)(14, "label");
    \u0275\u0275text(15, "Parental Consent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p")(17, "span", 109);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.selectedParticipant.parent_name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedParticipant.parent_email);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", ctx_r1.selectedParticipant.parent_consent ? "consent-badge" : "role-badge");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedParticipant.parent_consent ? "Consent Granted" : "Pending", " ");
  }
}
function AdminDashboardComponent_div_60_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 289)(1, "h3");
    \u0275\u0275text(2, "Coordinator Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 270)(4, "label");
    \u0275\u0275text(5, "Coordinator Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 270)(9, "label");
    \u0275\u0275text(10, "Coordinator Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.selectedParticipant.parent_name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedParticipant.parent_email);
  }
}
function AdminDashboardComponent_div_60_div_46_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 270)(1, "label");
    \u0275\u0275text(2, "Trailblazers Teams");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedParticipant.parsedTeams.trailblazersCount);
  }
}
function AdminDashboardComponent_div_60_div_46_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 270)(1, "label");
    \u0275\u0275text(2, "Visioneers Teams");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedParticipant.parsedTeams.visioneersCount);
  }
}
function AdminDashboardComponent_div_60_div_46_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 270)(1, "label");
    \u0275\u0275text(2, "Strategists Teams");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedParticipant.parsedTeams.strategistsCount);
  }
}
function AdminDashboardComponent_div_60_div_46_div_6_div_3_li_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 297)(1, "strong", 298);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const member_r29 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", member_r29.label, ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r29.name);
  }
}
function AdminDashboardComponent_div_60_div_46_div_6_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 293)(1, "h4", 294);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 295);
    \u0275\u0275template(4, AdminDashboardComponent_div_60_div_46_div_6_div_3_li_4_Template, 5, 2, "li", 296);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const team_r30 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(team_r30.teamName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", team_r30.members);
  }
}
function AdminDashboardComponent_div_60_div_46_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 291)(1, "label");
    \u0275\u0275text(2, "Student Names");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AdminDashboardComponent_div_60_div_46_div_6_div_3_Template, 5, 2, "div", 292);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.getGroupedTeams(ctx_r1.selectedParticipant.parsedTeams.studentNames));
  }
}
function AdminDashboardComponent_div_60_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 289)(1, "h3");
    \u0275\u0275text(2, "Registered Teams");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AdminDashboardComponent_div_60_div_46_div_3_Template, 5, 1, "div", 271)(4, AdminDashboardComponent_div_60_div_46_div_4_Template, 5, 1, "div", 271)(5, AdminDashboardComponent_div_60_div_46_div_5_Template, 5, 1, "div", 271)(6, AdminDashboardComponent_div_60_div_46_div_6_Template, 4, 1, "div", 290);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.selectedParticipant.parsedTeams.trailblazersCount > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedParticipant.parsedTeams.visioneersCount > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedParticipant.parsedTeams.strategistsCount > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedParticipant.parsedTeams.studentNames && ctx_r1.objectKeys(ctx_r1.selectedParticipant.parsedTeams.studentNames).length > 0);
  }
}
function AdminDashboardComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 126);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_60_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 127);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_60_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r28);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "button", 268);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_60_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(3, "\xD7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 269)(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 62);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 137)(10, "div", 270)(11, "label");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 270)(16, "label");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, AdminDashboardComponent_div_60_div_20_Template, 5, 1, "div", 271);
    \u0275\u0275elementStart(21, "div", 270)(22, "label");
    \u0275\u0275text(23, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 270)(27, "label");
    \u0275\u0275text(28, "Registered Challenge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p", 272);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 270)(32, "label");
    \u0275\u0275text(33, "Registration Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p");
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 270)(38, "label");
    \u0275\u0275text(39, "Registration Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "p")(41, "span", 273);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(43, AdminDashboardComponent_div_60_div_43_Template, 7, 3, "div", 274)(44, AdminDashboardComponent_div_60_div_44_Template, 19, 4, "div", 275)(45, AdminDashboardComponent_div_60_div_45_Template, 13, 2, "div", 275)(46, AdminDashboardComponent_div_60_div_46_Template, 7, 4, "div", 275);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 276)(48, "button", 175);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_60_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(49, "Close");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.selectedParticipant.registration_type === "school" ? "School Details" : "Participant Details");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedParticipant.category || "No Category");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedParticipant.registration_type === "school" ? "School Name" : "Full Name");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedParticipant.full_name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedParticipant.registration_type === "school" ? "School Email" : "Email Address");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedParticipant.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedParticipant.registration_type === "individual");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.selectedParticipant.city, ", ", ctx_r1.selectedParticipant.country, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedParticipant.challenge_name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(36, 17, ctx_r1.selectedParticipant.created_at, "medium"));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", ctx_r1.selectedParticipant.registration_type === "school" ? "school-badge" : "individual-badge");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedParticipant.registration_type === "school" ? "School Registration" : "Individual Registration", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedParticipant.video_path || ctx_r1.selectedParticipant.summary || ctx_r1.selectedParticipant.poster_path);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedParticipant.registration_type === "individual" && ctx_r1.selectedParticipant.parent_name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedParticipant.registration_type === "school" && ctx_r1.selectedParticipant.parent_name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedParticipant.parsedTeams && (ctx_r1.selectedParticipant.parsedTeams.trailblazersCount > 0 || ctx_r1.selectedParticipant.parsedTeams.visioneersCount > 0 || ctx_r1.selectedParticipant.parsedTeams.strategistsCount > 0));
  }
}
function AdminDashboardComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 126);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_61_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeUserModal());
    });
    \u0275\u0275elementStart(1, "div", 299);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_61_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r31);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "button", 268);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_61_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeUserModal());
    });
    \u0275\u0275text(3, "\xD7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 269)(5, "h2");
    \u0275\u0275text(6, "Edit System User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 84);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 300)(11, "div", 270)(12, "label");
    \u0275\u0275text(13, "Username");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 270)(17, "label");
    \u0275\u0275text(18, "System Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "select", 301, 5)(21, "option", 302);
    \u0275\u0275text(22, "User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 303);
    \u0275\u0275text(24, "Super Admin");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "div", 304)(26, "button", 305);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_61_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeUserModal());
    });
    \u0275\u0275text(27, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 175);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_61_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r31);
      const roleSelect_r32 = \u0275\u0275reference(20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveUser(roleSelect_r32.value));
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
function AdminDashboardComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 126);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_62_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAdditionalModal());
    });
    \u0275\u0275elementStart(1, "div", 306);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_62_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r33);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "button", 268);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_62_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAdditionalModal());
    });
    \u0275\u0275text(3, "\xD7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 269)(5, "div")(6, "h2", 307);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 308);
    \u0275\u0275text(9, "Additional Information");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 309)(11, "div", 270)(12, "label", 310);
    \u0275\u0275text(13, "What Will I Learn?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 311);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 270)(17, "label", 310);
    \u0275\u0275text(18, "Target Audience");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 311);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 270)(22, "label", 310);
    \u0275\u0275text(23, "Course Duration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 312);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 270)(27, "label", 310);
    \u0275\u0275text(28, "Materials Included");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p", 311);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 270)(32, "label", 310);
    \u0275\u0275text(33, "Requirements/Instructions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p", 311);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 276)(37, "button", 175);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_62_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r33);
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
  constructor(http, router, sanitizer) {
    this.http = http;
    this.router = router;
    this.sanitizer = sanitizer;
    this.stats = { totalRegistrations: 0, totalUsers: 0, totalChallenges: 0 };
    this.registrations = [];
    this.users = [];
    this.activeTab = "dashboard";
    this.activeCourseTab = "overview";
    this.courses = [];
    this.selectedCourse = null;
    this.editingCourseId = -1;
    this.editingCourseIndex = -1;
    this.isAddingCourse = false;
    this.isViewingCourse = false;
    this.activeLessonVideoIndex = null;
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
    this.isAddingTopic = false;
    this.newTopicData = {
      title: "",
      description: "",
      video: "",
      image: ""
    };
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
    const apiUrl = "http://localhost:5001/api/admin";
    this.http.get(`${apiUrl}/stats`).subscribe((data) => {
      this.stats = data;
      this.checkLoading();
    });
    this.http.get(`${apiUrl}/registrations`).subscribe((data) => {
      this.registrations = data;
      this.checkLoading();
    });
    this.http.get(`${apiUrl}/users`).subscribe((data) => {
      this.users = data;
      this.checkLoading();
    });
    this.fetchCourses();
  }
  fetchCourses() {
    this.http.get("http://localhost:5001/api/courses").subscribe({
      next: (data) => {
        this.courses = data;
      },
      error: (err) => console.error("Error fetching courses:", err)
    });
  }
  get publishedCoursesCount() {
    return this.courses.filter((c) => c.visibility === "Public").length;
  }
  checkLoading() {
    if (this.stats && this.registrations && this.users) {
      this.isLoading = false;
    }
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
    const firstLesson = Array.isArray(this.selectedCourseForTopic.lessons) ? this.selectedCourseForTopic.lessons.find((lesson) => lesson.image) : null;
    const firstLessonImage = firstLesson ? firstLesson.image : "";
    this.selectedCourseForTopic.displayImage = firstLessonImage || this.selectedCourseForTopic.image || "";
    this.isAddingTopic = false;
  }
  selectCourseForAdditional(course) {
    this.selectedCourseForAdditional = course;
  }
  addTopicLessonTab() {
    if (!this.selectedCourseForTopic) {
      return;
    }
    if (!Array.isArray(this.selectedCourseForTopic.lessons)) {
      this.selectedCourseForTopic.lessons = [];
    }
    this.selectedCourseForTopic.lessons.push({
      title: "",
      duration: "",
      syllabus: "",
      video: "",
      image: ""
    });
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
  removeTopicLesson(index) {
    if (!this.selectedCourseForTopic || !Array.isArray(this.selectedCourseForTopic.lessons)) {
      return;
    }
    this.selectedCourseForTopic.lessons.splice(index, 1);
  }
  openTopicLessonVideoUploader(index) {
    this.activeLessonVideoIndex = index;
    if (this.lessonVideoUploadInput?.nativeElement) {
      this.lessonVideoUploadInput.nativeElement.value = "";
      this.lessonVideoUploadInput.nativeElement.click();
    }
  }
  onTopicLessonVideoUpload(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file || this.activeLessonVideoIndex === null || !this.selectedCourseForTopic || !Array.isArray(this.selectedCourseForTopic.lessons)) {
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    const lessonIndex = this.activeLessonVideoIndex;
    this.http.post("http://localhost:5001/api/upload", formData).subscribe({
      next: (response) => {
        if (lessonIndex !== null) {
          this.selectedCourseForTopic.lessons[lessonIndex].video = response.url;
        }
        this.activeLessonVideoIndex = null;
        input.value = "";
      },
      error: (err) => {
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
      lectures: Number(this.selectedCourseForTopic.lectures) || 0,
      students_max: Number(this.selectedCourseForTopic.students_max) || 0,
      level: this.selectedCourseForTopic.level || "All Levels",
      language: this.selectedCourseForTopic.language || "English",
      certificate: this.selectedCourseForTopic.certificate || "Yes"
    };
    this.http.put(`http://localhost:5001/api/courses/${this.selectedCourseForTopic.id}`, payload).subscribe({
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
      this.http.post("http://localhost:5001/api/upload", formData).subscribe({
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
      this.http.post("http://localhost:5001/api/upload", formData).subscribe({
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
      this.http.post("http://localhost:5001/api/upload", formData).subscribe({
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
      this.http.post("http://localhost:5001/api/upload", formData).subscribe({
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
      this.http.post("http://localhost:5001/api/upload", formData).subscribe({
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
      this.http.put(`http://localhost:5001/api/courses/${this.editingCourseId}`, payload).subscribe({
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
      this.http.post("http://localhost:5001/api/courses", payload).subscribe({
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
      this.http.delete(`http://localhost:5001/api/courses/${course.id}`).subscribe({
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
      this.http.delete(`http://localhost:5001/api/admin/registrations/${id}`).subscribe({
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
    this.http.put(`http://localhost:5001/api/admin/users/${this.selectedUser.id}`, { role }).subscribe({
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
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 63, vars: 14, consts: [["lessonVideoUploadInput", ""], ["topicVideoUpload", ""], ["topicImageUpload", ""], ["editorRef", ""], ["featuredImageUpload", ""], ["roleSelect", ""], [1, "admin-layout"], [1, "sidebar"], [1, "brand"], [1, "nav-menu"], [1, "nav-item", 3, "click"], [1, "icon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x", "3", "y", "3", "width", "7", "height", "9"], ["x", "14", "y", "3", "width", "7", "height", "5"], ["x", "14", "y", "12", "width", "7", "height", "9"], ["x", "3", "y", "16", "width", "7", "height", "5"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"], ["points", "14 2 14 8 20 8"], ["x1", "16", "y1", "13", "x2", "8", "y2", "13"], ["x1", "16", "y1", "17", "x2", "8", "y2", "17"], ["points", "10 9 9 9 8 9"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], ["d", "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"], [1, "logout-container"], [1, "logout-btn", 3, "click"], ["d", "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"], ["points", "16 17 21 12 16 7"], ["x1", "21", "y1", "12", "x2", "9", "y2", "12"], [1, "main-content"], [1, "topbar"], [1, "admin-profile"], [1, "admin-name"], [1, "avatar"], ["class", "content-wrapper", 4, "ngIf"], ["class", "loading-spinner", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "content-wrapper"], ["class", "tab-content", 4, "ngIf"], [1, "tab-content"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-icon", "registrations-icon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "28", "height", "28", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "stat-info"], [1, "stat-value"], [1, "stat-icon", "users-icon"], [1, "stat-icon", "challenges-icon"], ["d", "M8 21h8"], ["d", "M12 17v4"], ["d", "M7 4h10v6a5 5 0 0 1-10 0V4Z"], ["d", "M3 4h4v6a2 2 0 0 0 2 2h0"], ["d", "M21 4h-4v6a2 2 0 0 1-2 2h0"], [1, "recent-section"], [1, "table-container"], [1, "data-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "badge", "challenge-badge"], [1, "badge", "category-badge"], ["colspan", "5", 1, "empty-state"], [1, "type-filters"], [1, "type-filter-btn", 3, "click"], [1, "count-badge"], [1, "count-badge", "school-count"], [1, "count-badge", "individual-count"], [1, "table-container", 2, "margin-top", "20px"], [1, "data-table", "full-width"], [1, "user-details"], [1, "type-badge", 3, "ngClass"], [1, "meta"], [1, "badge", "category-badge", 2, "margin-top", "4px"], [2, "display", "flex", "gap", "8px"], [1, "action-btn", "flex-center", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 2, "margin-right", "6px"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], ["onmouseover", "this.style.background='rgba(229, 62, 62, 0.1)'; this.style.borderColor='rgba(229, 62, 62, 0.3)';", "onmouseout", "this.style.background='rgba(229, 62, 62, 0.05)'; this.style.borderColor='rgba(229, 62, 62, 0.2)';", 1, "action-btn", "flex-center", 2, "color", "#e53e3e", "border-color", "rgba(229, 62, 62, 0.2)", "background", "rgba(229, 62, 62, 0.05)", 3, "click"], ["points", "3 6 5 6 21 6"], ["d", "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"], ["colspan", "6", 1, "empty-state"], [1, "badge", "role-badge", 3, "ngClass"], ["d", "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"], ["class", "add-course-container fade-in", 4, "ngIf"], [1, "type-filters", 2, "margin-bottom", "24px"], ["class", "fade-in", 4, "ngIf"], [1, "fade-in"], [1, "stats-grid", 2, "margin-bottom", "24px"], [1, "stat-icon", 2, "background", "#fff7ed", "color", "#f97316"], ["width", "26", "height", "26", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x", "2", "y", "3", "width", "7", "height", "18"], ["x", "9", "y", "3", "width", "13", "height", "18"], [1, "stat-icon", 2, "background", "#f0fdf4", "color", "#16a34a"], ["d", "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"], [2, "padding", "16px 24px", "border-bottom", "1px solid #e2e8f0", "display", "flex", "justify-content", "space-between", "align-items", "center"], [2, "margin", "0", "font-size", "16px", "font-weight", "600", "color", "#2d3748"], [2, "font-size", "13px", "font-weight", "400", "color", "#718096", "margin-left", "8px"], [1, "action-btn", "primary-btn", "flex-center", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 2, "margin-right", "6px"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], ["class", "data-table", 4, "ngIf"], ["style", "padding: 40px; text-align: center; color: #718096;", 4, "ngIf"], [2, "color", "#a0aec0", "font-size", "13px"], [2, "color", "#2d3748"], ["class", "meta", 4, "ngIf"], [1, "badge", 3, "ngClass"], [2, "color", "#4a5568", "font-size", "14px"], [2, "display", "flex", "gap", "6px", "flex-wrap", "nowrap"], ["title", "View", 1, "action-btn", "flex-center", 3, "click"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 2, "margin-right", "4px"], ["title", "Edit", 1, "action-btn", "flex-center", 3, "click"], ["title", "Delete", 1, "action-btn", "flex-center", "delete-btn", 3, "click"], [2, "padding", "40px", "text-align", "center", "color", "#718096"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#cbd5e0", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round", 2, "margin-bottom", "16px", "margin-left", "auto", "margin-right", "auto", "display", "block"], ["x", "3", "y", "3", "width", "18", "height", "18", "rx", "2", "ry", "2"], ["cx", "8.5", "cy", "8.5", "r", "1.5"], ["points", "21 15 16 10 5 21"], ["class", "table-container", 4, "ngIf"], [2, "padding", "16px 24px", "border-bottom", "1px solid #e2e8f0"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 2, "margin-right", "4px"], ["title", "Add Topics", 1, "action-btn", "flex-center", 3, "click"], ["title", "Delete", 1, "action-btn", "flex-center", 2, "color", "#e53e3e", "border-color", "rgba(229,62,62,0.2)", "background", "rgba(229,62,62,0.05)", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header", 2, "justify-content", "space-between", "align-items", "center", "gap", "12px"], [2, "display", "flex", "gap", "12px", "align-items", "center"], ["type", "button", 1, "action-btn", "flex-center", 2, "background", "transparent", "border", "1px solid rgba(148, 163, 184, 0.3)", "color", "#334155", "padding", "10px 14px", 3, "click"], ["points", "15 18 9 12 15 6"], [2, "display", "flex", "flex-direction", "column", "gap", "6px"], [2, "margin", "0", "font-size", "28px", "font-weight", "700", "color", "#1f2937"], [2, "display", "flex", "gap", "10px", "align-items", "center"], ["type", "button", 1, "action-btn", "primary-btn", 3, "click"], ["type", "button", 1, "action-btn", "secondary-btn", 3, "click"], [1, "modal-body"], [1, "topic-window"], [1, "topic-window-header"], [1, "topic-window-title"], [1, "topic-window-subtitle"], [1, "topic-lessons-grid"], ["class", "lesson-empty-state", 4, "ngIf"], ["class", "table-container topic-add-form", 4, "ngIf"], ["type", "file", "accept", "video/mp4,video/quicktime,video/webm", 2, "display", "none", 3, "change"], ["class", "lesson-card", 4, "ngFor", "ngForOf"], [1, "lesson-card"], [1, "lesson-card-header"], [1, "lesson-card-label"], [1, "lesson-card-title"], ["type", "button", 1, "remove-btn", 3, "click"], [1, "lesson-card-meta"], ["type", "text", 1, "lesson-card-field", "lesson-input", 3, "ngModelChange", "ngModel", "placeholder"], ["type", "text", "placeholder", "Duration (e.g. 10 mins)", 1, "lesson-card-field", "lesson-input", 3, "ngModelChange", "ngModel"], [1, "lesson-card-description"], [1, "field-label", 3, "for"], ["placeholder", "Lesson description", 1, "lesson-textarea", 3, "ngModelChange", "id", "ngModel"], [1, "lesson-card-actions"], ["type", "button", 1, "upload-link", 3, "click"], ["class", "video-status", 4, "ngIf"], [1, "video-status"], [1, "lesson-empty-state"], [1, "table-container", "topic-add-form"], [1, "additional-section-title", 2, "margin-bottom", "24px"], [1, "additional-field"], [1, "additional-label"], ["type", "text", "placeholder", "e.g. Introduction to the Course", 1, "additional-textarea", 2, "padding", "10px 14px", "height", "auto", "width", "100%", 3, "ngModelChange", "ngModel"], ["placeholder", "Briefly describe what this topic covers", "rows", "3", 1, "additional-textarea", 2, "width", "100%", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Uploaded video URL", "readonly", "", 1, "additional-textarea", 2, "flex", "1", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "action-btn", "flex-center", 2, "padding", "10px 16px", 3, "click"], ["type", "text", "placeholder", "Uploaded image URL", "readonly", "", 1, "additional-textarea", 2, "flex", "1", 3, "ngModelChange", "ngModel"], ["type", "file", "accept", "image/*", 2, "display", "none", 3, "change"], ["style", "margin-top: 12px; max-width: 420px; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0; background: #fff;", 4, "ngIf"], [2, "display", "flex", "gap", "12px", "margin-top", "24px", "justify-content", "flex-end"], [1, "action-btn", "primary-btn", 3, "click"], [2, "margin-top", "12px", "max-width", "420px", "border-radius", "8px", "overflow", "hidden", "border", "1px solid #e2e8f0", "background", "#fff"], ["alt", "Topic image preview", 2, "width", "100%", "display", "block", "object-fit", "cover", 3, "src"], [1, "add-course-container", "fade-in"], [1, "ac-header"], ["x1", "19", "y1", "12", "x2", "5", "y2", "12"], ["points", "12 19 5 12 12 5"], [2, "margin", "0", "font-size", "18px", "font-weight", "600", "color", "#2d3748"], ["d", "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"], ["points", "17 21 17 13 7 13 7 21"], ["points", "7 3 7 8 15 8"], [1, "ac-layout"], [1, "ac-main"], [1, "ac-block"], [1, "ac-label"], [2, "color", "#d53f8c", "margin-left", "4px"], ["type", "text", "placeholder", "e.g. Introduction to Programming", 1, "ac-input", "ac-title-input", 3, "ngModelChange", "ngModel"], [1, "ac-url-preview"], ["href", "#"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 2, "margin-left", "4px", "color", "#a0aec0"], ["d", "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"], ["points", "15 3 21 3 21 9"], ["x1", "10", "y1", "14", "x2", "21", "y2", "3"], [1, "ac-editor"], [1, "ac-editor-top-actions"], [1, "ac-editor-toolbar"], [1, "ac-toolbar-divider"], [1, "ac-icon-btn", 3, "mousedown", "click"], [2, "text-decoration", "underline"], ["contenteditable", "true", 1, "ac-editor-content", 2, "min-height", "200px", "padding", "12px", "font-family", "inherit", "font-size", "14px", "outline", "none", 3, "input", "mouseup", "keyup", "focus"], ["placeholder", "Define the key takeaways from this course (list one benefit per line)", "rows", "4", 1, "ac-input", 2, "width", "100%", "border", "1px solid #e2e8f0", "border-radius", "6px", "padding", "12px", "font-family", "inherit", "resize", "vertical", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g. Submit a policy pitch or debate video for shortlisting", 1, "ac-input", "ac-title-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g. Shine in live negotiations and panel diplomacy rounds", 1, "ac-input", "ac-title-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g. Policy templates and access to virtual youth summits", 1, "ac-input", "ac-title-input", 3, "ngModelChange", "ngModel"], ["placeholder", "Specify the target audience that will benefit the most from the course. (One Line Per target audience)", "rows", "3", 1, "ac-input", 2, "width", "100%", "border", "1px solid #e2e8f0", "border-radius", "6px", "padding", "12px", "font-family", "inherit", "resize", "vertical", 3, "ngModelChange", "ngModel"], ["placeholder", "A list of assets you will be providing for the students in this course (One Per Line)", "rows", "4", 1, "ac-input", 2, "width", "100%", "border", "1px solid #e2e8f0", "border-radius", "6px", "padding", "12px", "font-family", "inherit", "resize", "vertical", 3, "ngModelChange", "ngModel"], ["placeholder", "Additional requirements or special instructions for the students (One Per Line)", "rows", "3", 1, "ac-input", 2, "width", "100%", "border", "1px solid #e2e8f0", "border-radius", "6px", "padding", "12px", "font-family", "inherit", "resize", "vertical", 3, "ngModelChange", "ngModel"], [1, "ac-sidebar"], [1, "ac-card"], [1, "ac-field"], [1, "ac-input", 2, "font-weight", "500", 3, "ngModelChange", "ngModel"], ["value", "Public"], ["value", "Private"], [1, "ac-subtext"], [1, "ac-field", "ac-schedule-field"], [2, "font-size", "14px", "font-weight", "500", "color", "#4a5568"], [1, "ac-toggle-switch"], [1, "ac-toggle-knob"], ["type", "text", "placeholder", "Image URL (e.g. https://images.unsplash.com/...)", 1, "ac-input", 2, "flex", "1", 3, "ngModelChange", "ngModel"], [1, "ac-btn-small", 2, "background", "#e2e8f0", "color", "#4a5568", "padding", "0 12px", "height", "42px", 3, "click"], ["style", "margin-top: 12px; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0;", 4, "ngIf"], [2, "font-size", "12px", "color", "#718096", "margin-bottom", "4px", "display", "block"], ["type", "number", "placeholder", "e.g. 120", 1, "ac-input", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "e.g. 11", 1, "ac-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g. All Levels", 1, "ac-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g. English", 1, "ac-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g. Yes", 1, "ac-input", 3, "ngModelChange", "ngModel"], [1, "ac-radio-group"], [1, "ac-radio-label"], ["type", "radio", "name", "pricing", "value", "Free", 3, "ngModelChange", "ngModel"], [1, "ac-radio-custom"], ["type", "radio", "name", "pricing", "value", "Paid", 3, "ngModelChange", "ngModel"], [1, "ac-card", 2, "margin-bottom", "0"], [1, "ac-upload-box", 2, "padding", "24px"], [1, "ac-spinner"], [2, "margin-top", "12px", "border-radius", "8px", "overflow", "hidden", "border", "1px solid #e2e8f0"], [2, "width", "100%", "height", "auto", "display", "block", 3, "src"], [2, "background", "#f7fafc", "padding", "16px", "border-radius", "8px", "border", "1px solid #e2e8f0", "line-height", "1.6", "color", "#4a5568"], [3, "innerHTML"], ["style", "margin-top: 16px; padding-top: 16px; border-top: 1px solid #cbd5e0;", 3, "innerHTML", 4, "ngIf"], ["class", "ac-block", 4, "ngIf"], [2, "margin-top", "16px", "display", "flex", "flex-direction", "column", "gap", "12px"], [2, "display", "flex", "justify-content", "space-between"], [2, "color", "#718096", "font-size", "14px"], [2, "font-size", "14px", "font-weight", "500", "color", "#2d3748"], ["class", "ac-card", "style", "margin-top: 20px; padding: 0; overflow: hidden;", 4, "ngIf"], [2, "margin-top", "16px", "padding-top", "16px", "border-top", "1px solid #cbd5e0", 3, "innerHTML"], [2, "display", "grid", "gap", "16px"], ["style", "background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px;", 4, "ngFor", "ngForOf"], [2, "background", "#fff", "border", "1px solid #e2e8f0", "border-radius", "12px", "padding", "18px"], [2, "display", "flex", "justify-content", "space-between", "gap", "12px", "align-items", "flex-start"], [2, "margin", "0 0 6px 0", "font-size", "16px", "font-weight", "700", "color", "#1f2937"], [2, "margin", "0", "color", "#64748b"], [2, "font-size", "13px", "color", "#4a5568", "padding", "8px 12px", "border-radius", "999px", "background", "#f8fafc"], ["style", "margin-top: 16px;", 4, "ngIf"], [2, "margin-top", "16px"], ["controls", "", 2, "width", "100%", "max-height", "260px", "border-radius", "12px", "background", "#000"], ["type", "video/mp4", 3, "src"], [2, "background", "#f7fafc", "padding", "16px", "border-radius", "8px", "border", "1px solid #e2e8f0", "line-height", "1.6", "color", "#4a5568", 3, "innerHTML"], [1, "ac-card", 2, "margin-top", "20px", "padding", "0", "overflow", "hidden"], ["alt", "Course image", 2, "width", "100%", "height", "220px", "object-fit", "cover", "display", "block", 3, "src"], [1, "loading-spinner"], [1, "spinner"], [1, "close-btn", 3, "click"], [1, "modal-header"], [1, "detail-group"], ["class", "detail-group", 4, "ngIf"], [1, "highlight-text"], [1, "type-badge", 2, "margin-left", "0", "font-size", "13px", 3, "ngClass"], ["class", "entry-info-section", 4, "ngIf"], ["class", "parent-info-section", 4, "ngIf"], [1, "modal-footer"], [1, "entry-info-section"], [2, "margin", "0", "font-size", "18px", "color", "#2d3748", "font-weight", "600"], ["class", "detail-group", "style", "margin-top: 8px;", 4, "ngIf"], [2, "display", "grid", "grid-template-columns", "repeat(auto-fit, minmax(300px, 1fr))", "gap", "24px", "margin-top", "12px"], [1, "detail-group", 2, "margin-top", "8px"], [2, "background", "#fff", "padding", "16px", "border-radius", "8px", "font-style", "italic", "border", "1px solid #e2e8f0", "line-height", "1.5", "color", "#4a5568"], [2, "margin-top", "8px", "border-radius", "12px", "overflow", "hidden", "border", "1px solid #e2e8f0", "background", "#000", "display", "flex", "align-items", "center", "justify-content", "center"], ["controls", "", 2, "width", "100%", "max-height", "300px", "outline", "none"], ["target", "_blank", 2, "display", "inline-flex", "align-items", "center", "gap", "6px", "margin-top", "10px", "font-size", "14px", "color", "#ed8936", "font-weight", "500", "text-decoration", "none", 3, "href"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [2, "margin-top", "8px", "border-radius", "12px", "overflow", "hidden", "border", "1px solid #e2e8f0", "background", "#f7fafc", "display", "flex", "align-items", "center", "justify-content", "center", "height", "100%", "min-height", "200px"], ["alt", "Entry Poster", 2, "width", "100%", "max-height", "300px", "object-fit", "contain", 3, "src"], [1, "parent-info-section"], ["class", "detail-group", "style", "grid-column: 1 / -1;", 4, "ngIf"], [1, "detail-group", 2, "grid-column", "1 / -1"], ["style", "margin-top: 12px; padding: 12px; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;", 4, "ngFor", "ngForOf"], [2, "margin-top", "12px", "padding", "12px", "background", "#f8fafc", "border-radius", "8px", "border", "1px solid #e2e8f0"], [2, "margin", "0 0 8px 0", "color", "#2d3748", "font-size", "15px", "font-weight", "600", "border-bottom", "1px solid #e2e8f0", "padding-bottom", "6px"], [2, "list-style-type", "none", "padding", "0", "margin", "0"], ["style", "margin-bottom: 6px; font-size: 14px; color: #4a5568; display: flex;", 4, "ngFor", "ngForOf"], [2, "margin-bottom", "6px", "font-size", "14px", "color", "#4a5568", "display", "flex"], [2, "width", "80px", "flex-shrink", "0"], [1, "modal-content", 2, "max-width", "450px", 3, "click"], [1, "modal-body", 2, "grid-template-columns", "1fr"], [1, "form-input", 2, "width", "100%", "border", "1px solid #DDDDDD", "border-radius", "6px", "padding", "10px 14px", "font-size", "15px", "margin-top", "6px"], ["value", "user", 3, "selected"], ["value", "superadmin", 3, "selected"], [1, "modal-footer", 2, "display", "flex", "justify-content", "space-between"], [1, "action-btn", 3, "click"], [1, "modal-content", 2, "max-width", "600px", 3, "click"], [2, "margin", "0 0 4px 0"], [2, "margin", "0", "font-size", "14px", "color", "#718096"], [1, "modal-body", 2, "display", "flex", "flex-direction", "column", "gap", "16px"], [2, "font-size", "13px", "font-weight", "600", "color", "#718096", "text-transform", "uppercase"], [2, "white-space", "pre-wrap", "font-size", "14px", "color", "#2d3748", "margin-top", "4px", "padding", "12px", "background", "#f7fafc", "border-radius", "6px", "border", "1px solid #e2e8f0"], [2, "font-size", "14px", "color", "#2d3748", "margin-top", "4px", "font-weight", "500"]], template: function AdminDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 6)(1, "aside", 7)(2, "div", 8)(3, "h2");
        \u0275\u0275text(4, "SkillStorm Admin");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "nav", 9)(6, "button", 10);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_6_listener() {
          return ctx.switchTab("dashboard");
        });
        \u0275\u0275elementStart(7, "span", 11);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(8, "svg", 12);
        \u0275\u0275element(9, "rect", 13)(10, "rect", 14)(11, "rect", 15)(12, "rect", 16);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(13, "span");
        \u0275\u0275text(14, "Overview");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "button", 10);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_15_listener() {
          return ctx.switchTab("registrations");
        });
        \u0275\u0275elementStart(16, "span", 11);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(17, "svg", 12);
        \u0275\u0275element(18, "path", 17)(19, "polyline", 18)(20, "line", 19)(21, "line", 20)(22, "polyline", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(23, "span");
        \u0275\u0275text(24, "Registrations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "button", 10);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_25_listener() {
          return ctx.switchTab("users");
        });
        \u0275\u0275elementStart(26, "span", 11);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(27, "svg", 12);
        \u0275\u0275element(28, "path", 22)(29, "circle", 23)(30, "path", 24)(31, "path", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(32, "span");
        \u0275\u0275text(33, "System Users");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "button", 10);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_34_listener() {
          return ctx.switchTab("courses");
        });
        \u0275\u0275elementStart(35, "span", 11);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(36, "svg", 12);
        \u0275\u0275element(37, "path", 26);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(38, "span");
        \u0275\u0275text(39, "Courses");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(40, "div", 27)(41, "button", 28);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_41_listener() {
          return ctx.logout();
        });
        \u0275\u0275elementStart(42, "span", 11);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(43, "svg", 12);
        \u0275\u0275element(44, "path", 29)(45, "polyline", 30)(46, "line", 31);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(47, "span");
        \u0275\u0275text(48, "Logout");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(49, "main", 32)(50, "header", 33)(51, "h1");
        \u0275\u0275text(52);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "div", 34)(54, "span", 35);
        \u0275\u0275text(55, "Super Admin");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "div", 36);
        \u0275\u0275text(57, "SA");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(58, AdminDashboardComponent_div_58_Template, 5, 4, "div", 37)(59, AdminDashboardComponent_div_59_Template, 4, 0, "div", 38)(60, AdminDashboardComponent_div_60_Template, 50, 20, "div", 39)(61, AdminDashboardComponent_div_61_Template, 30, 7, "div", 39)(62, AdminDashboardComponent_div_62_Template, 39, 7, "div", 39);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275classProp("active", ctx.activeTab === "dashboard");
        \u0275\u0275advance(9);
        \u0275\u0275classProp("active", ctx.activeTab === "registrations");
        \u0275\u0275advance(10);
        \u0275\u0275classProp("active", ctx.activeTab === "users");
        \u0275\u0275advance(9);
        \u0275\u0275classProp("active", ctx.activeTab === "courses");
        \u0275\u0275advance(18);
        \u0275\u0275textInterpolate(ctx.activeTab === "dashboard" ? "Dashboard Overview" : ctx.activeTab === "registrations" ? "Registration Entries" : ctx.activeTab === "courses" ? "Course Management" : "System Users");
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", !ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedParticipant);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedUser);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.viewingAdditionalCourse);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, SlicePipe, TitleCasePipe, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgModel], styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";\n\n\n\n[_ngcontent-%COMP%]:root {\n  --sb-bg: #1c1c2e;\n  --sb-hover: #2a2a40;\n  --sb-active: #2a2a40;\n  --sb-border: #2e2e46;\n  --sb-text: #a0a0c0;\n  --sb-text-act: #ffffff;\n  --sb-accent: #f97316;\n  --sb-brand: #f97316;\n  --bg: #f4f6f9;\n  --card: #ffffff;\n  --border: #e2e8f0;\n  --topbar: #ffffff;\n  --txt-primary: #1a202c;\n  --txt-secondary: #4a5568;\n  --txt-muted: #718096;\n  --txt-light: #a0aec0;\n  --orange: #f97316;\n  --orange-lt: #fff7ed;\n  --orange-dk: #ea6c00;\n  --blue: #3b82f6;\n  --blue-lt: #eff6ff;\n  --blue-dk: #2563eb;\n  --green: #22c55e;\n  --green-lt: #f0fdf4;\n  --green-dk: #16a34a;\n  --teal: #14b8a6;\n  --teal-lt: #f0fdfa;\n  --purple: #a855f7;\n  --purple-lt: #faf5ff;\n  --red: #ef4444;\n  --red-lt: #fef2f2;\n  --shadow-sm: 0 1px 4px rgba(0,0,0,0.07);\n  --shadow-md: 0 4px 16px rgba(0,0,0,0.10);\n  --shadow-lg: 0 12px 40px rgba(0,0,0,0.14);\n  --radius-sm: 8px;\n  --radius-md: 12px;\n  --radius-lg: 18px;\n}\n[_nghost-%COMP%] {\n  display: block;\n  font-family: "Inter", sans-serif;\n  background-color: var(--bg);\n  min-height: 100vh;\n  color: var(--txt-primary);\n}\n.admin-layout[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 220px;\n  flex-shrink: 0;\n  background-color: #1c1c2e;\n  display: flex;\n  flex-direction: column;\n  z-index: 10;\n  position: sticky;\n  top: 0;\n  height: 100vh;\n  overflow: hidden;\n}\n.brand[_ngcontent-%COMP%] {\n  padding: 24px 20px 20px;\n}\n.brand[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 700;\n  color: #f97316;\n  letter-spacing: -0.2px;\n}\n.nav-menu[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.nav-item[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding: 11px 14px;\n  background: transparent;\n  border: none;\n  border-radius: var(--radius-sm);\n  color: #a0a0c0;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.18s, color 0.18s;\n  text-align: left;\n  font-family: "Inter", sans-serif;\n  position: relative;\n}\n.nav-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin-right: 12px;\n  display: flex;\n  align-items: center;\n  opacity: 0.8;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background-color: #2a2a40;\n  color: #ffffff;\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background-color: #2a2a40;\n  color: #ffffff;\n  font-weight: 600;\n}\n.nav-item.active[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 6px;\n  bottom: 6px;\n  width: 3px;\n  background: #f97316;\n  border-radius: 0 3px 3px 0;\n}\n.logout-container[_ngcontent-%COMP%] {\n  padding: 16px 10px;\n  border-top: 1px solid #2e2e46;\n}\n.logout-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n  background-color: rgba(239, 68, 68, 0.12);\n  color: #fc8181;\n  border: 1px solid rgba(239, 68, 68, 0.2);\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 13px;\n  transition: all 0.2s;\n  font-family: "Inter", sans-serif;\n  gap: 8px;\n}\n.logout-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--red);\n  color: #fff;\n  border-color: var(--red);\n}\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow-x: hidden;\n  min-width: 0;\n}\n.topbar[_ngcontent-%COMP%] {\n  background-color: var(--topbar);\n  padding: 16px 32px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid var(--border);\n  box-shadow: var(--shadow-sm);\n  z-index: 5;\n  position: sticky;\n  top: 0;\n}\n.topbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--txt-primary);\n  letter-spacing: -0.3px;\n}\n.admin-profile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.admin-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  color: var(--txt-secondary);\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background: var(--orange);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 13px;\n  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.35);\n}\n.content-wrapper[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  flex: 1;\n  overflow-y: auto;\n}\n.type-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 24px;\n}\n.type-filter-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 18px;\n  background-color: transparent;\n  border: 1.5px solid var(--border);\n  border-radius: 24px;\n  color: var(--txt-secondary);\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.18s;\n  font-family: "Inter", sans-serif;\n}\n.type-filter-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n  color: var(--blue);\n}\n.type-filter-btn.active[_ngcontent-%COMP%] {\n  border-color: #bae6fd;\n  color: #0284c7;\n  background-color: #f0f9ff;\n  font-weight: 600;\n}\n.count-badge[_ngcontent-%COMP%] {\n  background-color: #e2e8f0;\n  color: var(--txt-secondary);\n  padding: 1px 6px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.type-filter-btn.active[_ngcontent-%COMP%]   .count-badge[_ngcontent-%COMP%] {\n  background-color: var(--blue);\n  color: #fff;\n}\n.type-filter-btn.active[_ngcontent-%COMP%]   .count-badge.school-count[_ngcontent-%COMP%] {\n  background-color: #1565c0;\n}\n.type-filter-btn.active[_ngcontent-%COMP%]   .count-badge.individual-count[_ngcontent-%COMP%] {\n  background-color: #00695c;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 18px;\n  margin-bottom: 28px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background-color: var(--card);\n  border-radius: 16px;\n  padding: 24px 28px;\n  display: flex;\n  align-items: center;\n  border: none;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);\n  transition: transform 0.22s, box-shadow 0.22s;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-md);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: var(--radius-sm);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 16px;\n  flex-shrink: 0;\n}\n.registrations-icon[_ngcontent-%COMP%] {\n  background-color: #fff7ed;\n  color: var(--orange);\n}\n.users-icon[_ngcontent-%COMP%] {\n  background-color: #f0fdf4;\n  color: var(--green-dk);\n}\n.challenges-icon[_ngcontent-%COMP%] {\n  background-color: #fff7ed;\n  color: var(--orange);\n}\n.stat-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  font-size: 11px;\n  color: var(--txt-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.9px;\n  font-weight: 600;\n}\n.stat-value[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 700;\n  color: var(--txt-primary);\n  letter-spacing: -0.5px;\n}\n.table-container[_ngcontent-%COMP%] {\n  background-color: var(--card);\n  border-radius: 12px;\n  border: none;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);\n  overflow: hidden;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 13px 20px;\n  text-align: left;\n  border-bottom: 1px solid var(--border);\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  color: var(--txt-light);\n  font-weight: 600;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--txt-secondary);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background 0.15s;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #fafbff;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.user-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.user-details[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--txt-primary);\n  margin-bottom: 2px;\n  font-size: 14px;\n}\n.user-details[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--txt-muted);\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.2px;\n}\n.individual-badge[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: var(--teal);\n  border: 1px solid rgba(20, 184, 166, 0.35);\n  font-weight: 500;\n}\n.school-badge[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: var(--blue-dk);\n  border: 1px solid rgba(59, 130, 246, 0.35);\n  font-weight: 500;\n}\n.challenge-badge[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: var(--purple);\n  border: 1px solid rgba(168, 85, 247, 0.35);\n  font-weight: 500;\n}\n.category-badge[_ngcontent-%COMP%] {\n  background-color: #f4f0fa;\n  color: #8b5cf6;\n  border: none;\n  font-weight: 500;\n  padding: 5px 14px;\n}\n.consent-badge[_ngcontent-%COMP%] {\n  background-color: var(--green-lt);\n  color: var(--green-dk);\n  border: none;\n  font-weight: 500;\n  padding: 5px 14px;\n}\n.role-badge[_ngcontent-%COMP%] {\n  background-color: #f1f5f9;\n  color: var(--txt-muted);\n  border: none;\n  font-weight: 500;\n}\n.role-badge.superadmin[_ngcontent-%COMP%] {\n  background-color: #ede7f6;\n  color: #6a1b9a;\n  border: none;\n  font-weight: 500;\n}\n.type-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 10px;\n  font-weight: 700;\n  margin-left: 6px;\n  vertical-align: middle;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  padding: 5px 12px;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  background-color: transparent;\n  color: #4a5568;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.16s;\n  font-family: "Inter", sans-serif;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n  color: var(--blue);\n  background-color: var(--blue-lt);\n}\n.flex-center[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.action-btn.delete-btn[_ngcontent-%COMP%] {\n  color: #ef4444;\n  border-color: #fecaca;\n  background: transparent;\n}\n.action-btn.delete-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.05);\n  border-color: #fca5a5;\n}\n.primary-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f97316 0%,\n      #ea580c 100%);\n  color: #fff !important;\n  border: none;\n  box-shadow: 0 3px 10px rgba(249, 115, 22, 0.30);\n  padding: 8px 18px !important;\n  font-size: 13px !important;\n  border-radius: 8px !important;\n}\n.primary-btn[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #ea580c 0%,\n      #c2410c 100%);\n  box-shadow: 0 5px 18px rgba(249, 115, 22, 0.40);\n  color: #fff !important;\n  border-color: transparent !important;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center !important;\n  padding: 40px !important;\n  color: var(--txt-muted) !important;\n  font-style: italic;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  color: var(--txt-muted);\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #e2e8f0;\n  border-top-color: var(--orange);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.9s linear infinite;\n  margin-bottom: 14px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.recent-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin: 0 0 16px 0;\n  color: var(--txt-primary);\n  font-weight: 600;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.40);\n  display: flex;\n  justify-content: center;\n  align-items: stretch;\n  z-index: 1000;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease-out;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 0;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  max-height: 100%;\n  overflow-y: auto;\n  box-shadow: none;\n  position: relative;\n  animation: _ngcontent-%COMP%_slideUp 0.26s ease-out;\n  border: none;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px 28px;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 20px;\n  min-height: calc(100vh - 100px);\n}\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 20px;\n  background: none;\n  border: none;\n  font-size: 24px;\n  color: var(--txt-muted);\n  cursor: pointer;\n  line-height: 1;\n  transition: color 0.2s;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  color: var(--txt-primary);\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 24px 28px 20px;\n  border-bottom: 1px solid var(--border);\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  color: var(--txt-primary);\n  font-weight: 600;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px 28px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n.detail-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  text-transform: uppercase;\n  color: var(--txt-muted);\n  font-weight: 600;\n  margin-bottom: 5px;\n  letter-spacing: 0.7px;\n}\n.detail-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: var(--txt-primary);\n  font-weight: 500;\n}\n.highlight-text[_ngcontent-%COMP%] {\n  color: var(--orange) !important;\n  font-weight: 600 !important;\n}\n.entry-info-section[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n  background: #f8fafc;\n  padding: 20px;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--border);\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.parent-info-section[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n  background: #f8fafc;\n  padding: 20px;\n  border-radius: var(--radius-sm);\n  margin-top: 12px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  border: 1px solid var(--border);\n}\n.parent-info-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n  margin: 0 0 4px 0;\n  font-size: 14px;\n  color: var(--txt-secondary);\n  font-weight: 600;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 20px 28px;\n  border-top: 1px solid var(--border);\n  display: flex;\n  justify-content: flex-end;\n  background: #f8fafc;\n  border-radius: 0 0 var(--radius-lg) var(--radius-lg);\n}\n.topic-window[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.topic-window-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 20px;\n}\n.topic-window-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 700;\n  color: #1f2937;\n}\n.topic-window-subtitle[_ngcontent-%COMP%] {\n  margin: 6px 0 0 0;\n  color: #4a5568;\n  line-height: 1.6;\n}\n.topic-lessons-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 18px;\n}\n.lesson-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 22px;\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.05);\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.lesson-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 16px;\n}\n.lesson-card-label[_ngcontent-%COMP%] {\n  margin: 0 0 6px 0;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #64748b;\n}\n.lesson-card-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  color: #172554;\n}\n.lesson-card-meta[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n}\n.lesson-card-field[_ngcontent-%COMP%] {\n  display: block;\n  padding: 12px 14px;\n  border-radius: 14px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  color: #475569;\n  font-size: 13px;\n}\n.lesson-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 12px 14px;\n  background: #fff;\n  color: #172554;\n  font-size: 14px;\n  transition: border-color 0.2s ease;\n}\n.lesson-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #6366f1;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.12);\n}\n.lesson-card-description[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-radius: 14px;\n  padding: 18px;\n  color: #475569;\n}\n.lesson-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 100px;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 12px 14px;\n  background: #fff;\n  color: #172554;\n  font-size: 14px;\n  resize: vertical;\n}\n.lesson-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #6366f1;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.12);\n}\n.lesson-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n}\n.remove-btn[_ngcontent-%COMP%] {\n  border: 1px solid #fed7d7;\n  background: #fff5f5;\n  color: #b91c1c;\n  border-radius: 12px;\n  padding: 10px 16px;\n  cursor: pointer;\n  font-weight: 700;\n}\n.upload-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #5b21b6;\n  font-weight: 700;\n  cursor: pointer;\n  padding: 0;\n}\n.video-status[_ngcontent-%COMP%] {\n  color: #047857;\n  font-size: 13px;\n}\n.lesson-empty-state[_ngcontent-%COMP%] {\n  padding: 24px;\n  background: #f8fafc;\n  border: 1px dashed #cbd5e0;\n  border-radius: 16px;\n  color: #64748b;\n}\n.topic-add-form[_ngcontent-%COMP%] {\n  background: #fff;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.28s ease-out;\n}\n.add-course-container[_ngcontent-%COMP%] {\n  padding-bottom: 40px;\n}\n.ac-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.ac-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 20px;\n}\n.ac-main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.ac-sidebar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.ac-block[_ngcontent-%COMP%], .ac-card[_ngcontent-%COMP%] {\n  background: var(--card);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-sm);\n  padding: 20px;\n  border: 1px solid var(--border);\n}\n.ac-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--txt-secondary);\n  margin-bottom: 6px;\n}\n.ac-subtext[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--txt-muted);\n  margin: 4px 0 0 0;\n}\n.ac-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  padding: 10px 13px;\n  font-size: 14px;\n  color: var(--txt-primary);\n  transition: border-color 0.2s, box-shadow 0.2s;\n  font-family: "Inter", sans-serif;\n  background: #fff;\n  box-sizing: border-box;\n}\n.ac-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--orange);\n  box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.12);\n}\n.ac-title-input[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n}\n.ac-url-preview[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--txt-muted);\n  margin: 6px 0 0 0;\n  display: flex;\n  align-items: center;\n}\n.ac-url-preview[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--txt-muted);\n  text-decoration: none;\n  margin-left: 4px;\n}\n.ac-url-preview[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  color: var(--orange);\n}\n.ac-editor[_ngcontent-%COMP%] {\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  overflow: hidden;\n}\n.ac-editor-top-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 7px 11px;\n  background: #f8fafc;\n  border-bottom: 1px solid var(--border);\n}\n.ac-btn-small[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 5px 10px;\n  border-radius: 6px;\n  font-size: 12px;\n  cursor: pointer;\n  background: transparent;\n  border: 1px solid var(--border);\n  font-family: "Inter", sans-serif;\n  color: var(--txt-secondary);\n  transition: all 0.16s;\n}\n.ac-btn-small[_ngcontent-%COMP%]:hover {\n  border-color: var(--orange);\n  color: var(--orange);\n}\n.ac-editor-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  background: #eef0fb;\n  border-radius: 6px;\n  padding: 2px;\n}\n.ac-tab[_ngcontent-%COMP%] {\n  padding: 4px 11px;\n  border-radius: 4px;\n  border: none;\n  background: transparent;\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--txt-muted);\n  cursor: pointer;\n  font-family: "Inter", sans-serif;\n}\n.ac-tab.active[_ngcontent-%COMP%] {\n  background: #fff;\n  color: var(--txt-primary);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n}\n.ac-editor-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 6px 10px;\n  background: #fff;\n  border-bottom: 1px solid var(--border);\n  flex-wrap: wrap;\n  gap: 3px;\n}\n.ac-editor-select[_ngcontent-%COMP%] {\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  padding: 4px 8px;\n  font-size: 12px;\n  color: var(--txt-secondary);\n  background: #fff;\n}\n.ac-toolbar-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 16px;\n  background: var(--border);\n  margin: 0 3px;\n}\n.ac-icon-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  width: 26px;\n  height: 26px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--txt-secondary);\n  cursor: pointer;\n  transition: background 0.14s, color 0.14s;\n}\n.ac-icon-btn[_ngcontent-%COMP%]:hover {\n  background: var(--orange-lt);\n  color: var(--orange);\n}\n.ac-editor-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n  padding: 13px;\n  min-height: 220px;\n  font-size: 14px;\n  resize: vertical;\n  font-family: "Inter", sans-serif;\n  color: var(--txt-primary);\n  background: #fff;\n  box-sizing: border-box;\n}\n.ac-editor-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.ac-editor-content[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n  padding: 13px;\n  min-height: 220px;\n  font-size: 14px;\n  font-family: "Inter", sans-serif;\n  color: var(--txt-primary);\n  background: #fff;\n  box-sizing: border-box;\n  outline: none;\n  overflow-y: auto;\n}\n.ac-editor-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  border-radius: 4px;\n  margin: 8px 0;\n}\n.ac-editor-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: disc;\n  margin-left: 20px;\n}\n.ac-editor-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  list-style-type: decimal;\n  margin-left: 20px;\n}\n.ac-editor-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .ac-editor-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .ac-editor-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 5px;\n  font-weight: 600;\n}\n.ac-editor-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.ac-editor-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.ac-editor-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.ac-text-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  font-size: 12px;\n  color: var(--txt-muted);\n  cursor: pointer;\n  font-family: "Inter", sans-serif;\n  transition: color 0.15s;\n}\n.ac-text-btn[_ngcontent-%COMP%]:hover {\n  color: var(--orange);\n}\n.ac-toggle-switch[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 22px;\n  background-color: #d0d4eb;\n  border-radius: 11px;\n  position: relative;\n  cursor: pointer;\n  transition: background-color 0.28s;\n}\n.ac-toggle-switch.on[_ngcontent-%COMP%] {\n  background-color: var(--green);\n}\n.ac-toggle-knob[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  background-color: #fff;\n  border-radius: 50%;\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  transition: transform 0.28s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.14);\n}\n.ac-toggle-switch.on[_ngcontent-%COMP%]   .ac-toggle-knob[_ngcontent-%COMP%] {\n  transform: translateX(18px);\n}\n.ac-schedule-field[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 14px;\n  padding-top: 14px;\n  border-top: 1px solid #f0f1f9;\n}\n.ac-upload-box[_ngcontent-%COMP%] {\n  border: 2px dashed var(--border);\n  border-radius: var(--radius-sm);\n  padding: 24px 16px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  transition: border-color 0.2s;\n}\n.ac-upload-box[_ngcontent-%COMP%]:hover {\n  border-color: var(--orange);\n  background: var(--orange-lt);\n}\n.ac-upload-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: var(--orange-lt);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--orange);\n  margin-bottom: 10px;\n  position: relative;\n}\n.ac-upload-plus[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 14px;\n  height: 14px;\n  background: var(--orange);\n  color: #fff;\n  border-radius: 50%;\n  font-size: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 1;\n}\n.ac-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n}\n.ac-radio-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  cursor: pointer;\n  font-size: 13px;\n  color: var(--txt-secondary);\n}\n.ac-radio-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.ac-radio-custom[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 2px solid #d0d4eb;\n  display: inline-block;\n  position: relative;\n  transition: border-color 0.2s;\n}\n.ac-radio-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .ac-radio-custom[_ngcontent-%COMP%] {\n  border-color: var(--orange);\n}\n.ac-radio-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .ac-radio-custom[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  width: 8px;\n  height: 8px;\n  background: var(--orange);\n  border-radius: 50%;\n}\n.ac-spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid #e2e8f0;\n  border-top-color: var(--orange);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.9s linear infinite;\n}\n.ac-field[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n@media (max-width: 992px) {\n  .ac-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.additional-form-container[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.additional-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.additional-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--txt-primary);\n}\n.additional-section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #f0f1f9;\n}\n.additional-section-title[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--txt-primary);\n}\n.additional-section-desc[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: var(--txt-muted);\n  line-height: 1.5;\n}\n.additional-field[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.additional-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--txt-primary);\n  margin-bottom: 6px;\n}\n.additional-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  padding: 10px 12px;\n  font-size: 13px;\n  font-family: "Inter", sans-serif;\n  color: var(--txt-secondary);\n  resize: vertical;\n  transition: border-color 0.2s, box-shadow 0.2s;\n  line-height: 1.5;\n  box-sizing: border-box;\n  background: #fff;\n}\n.additional-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--orange);\n  box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.10);\n}\n.additional-textarea[_ngcontent-%COMP%]::placeholder {\n  color: #c5cae9;\n}\n.duration-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.duration-input[_ngcontent-%COMP%] {\n  width: 140px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  padding: 8px 12px;\n  font-size: 13px;\n  font-family: "Inter", sans-serif;\n  color: var(--txt-secondary);\n  background: #fff;\n  transition: border-color 0.2s;\n}\n.duration-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--orange);\n  box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.10);\n}\n.duration-unit[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--txt-muted);\n  padding: 8px 12px;\n  background: #f8fafc;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  -webkit-user-select: none;\n  user-select: none;\n}\n@media (max-width: 768px) {\n  .admin-layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .sidebar[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    position: relative;\n  }\n  .topbar[_ngcontent-%COMP%] {\n    padding: 12px 18px;\n    flex-direction: column;\n    gap: 10px;\n    align-items: flex-start;\n  }\n  .content-wrapper[_ngcontent-%COMP%] {\n    padding: 18px;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .table-container[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n  .data-table[_ngcontent-%COMP%] {\n    min-width: 700px;\n  }\n  .modal-body[_ngcontent-%COMP%], .parent-info-section[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .modal-content[_ngcontent-%COMP%] {\n    max-height: 95vh;\n    margin: 8px;\n    width: calc(100% - 16px);\n  }\n  .type-filters[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n/*# sourceMappingURL=admin-dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "src\\app\\pages\\admin-dashboard\\admin-dashboard.component.ts", lineNumber: 15 });
})();
export {
  AdminDashboardComponent
};
//# sourceMappingURL=chunk-4YDCZADN.js.map
