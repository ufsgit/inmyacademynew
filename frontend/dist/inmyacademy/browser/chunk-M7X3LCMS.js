import {
  FormsModule
} from "./chunk-Z5MBKUDO.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-RK72NEAB.js";
import {
  HttpClient
} from "./chunk-PLXL2LZV.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-C72BQOBI.js";

// src/app/pages/school-dashboard/school-dashboard.component.ts
var _c0 = () => [0, 1, 2, 3, 4];
function SchoolDashboardComponent_div_41_span_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r1);
  }
}
function SchoolDashboardComponent_div_41_span_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1, "No categories registered yet.");
    \u0275\u0275elementEnd();
  }
}
function SchoolDashboardComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 22)(2, "div", 23)(3, "span", 24);
    \u0275\u0275text(4, "School Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 25);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 23)(8, "span", 24);
    \u0275\u0275text(9, "Registration ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 25);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 23)(13, "span", 24);
    \u0275\u0275text(14, "Teams Registered");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 25);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 23)(18, "span", 24);
    \u0275\u0275text(19, "Current Phase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 25);
    \u0275\u0275text(21, "Online Phase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 26)(23, "div")(24, "div", 27);
    \u0275\u0275text(25, "Next Submission Deadline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 28);
    \u0275\u0275text(27, "2024-04-15");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 29)(29, "span", 30);
    \u0275\u0275text(30, " Time Sensitive ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(32, "svg", 32);
    \u0275\u0275element(33, "circle", 33)(34, "path", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, " -743 days remaining ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(36, "div", 35)(37, "h3", 36);
    \u0275\u0275text(38, "Categories Entered");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 37);
    \u0275\u0275template(40, SchoolDashboardComponent_div_41_span_40_Template, 2, 1, "span", 38)(41, SchoolDashboardComponent_div_41_span_41_Template, 2, 0, "span", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 40)(43, "h3", 41);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(44, "svg", 32);
    \u0275\u0275element(45, "path", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275text(46, " Latest Notifications ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(47, "div", 43)(48, "div", 44)(49, "div")(50, "div", 45);
    \u0275\u0275text(51, "Submission Deadline Reminder");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 46);
    \u0275\u0275text(53, "Your Trailblazers team submission is due in 5 days.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "span", 47);
    \u0275\u0275text(55, "2024-03-10");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 48)(57, "div")(58, "div", 45);
    \u0275\u0275text(59, "Team Approved");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 46);
    \u0275\u0275text(61, "Your Visioneers team has been approved for competition.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "span", 47);
    \u0275\u0275text(63, "2024-03-08");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 48)(65, "div")(66, "div", 45);
    \u0275\u0275text(67, "Update Available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 46);
    \u0275\u0275text(69, "New competition guidelines are available for download.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "span", 47);
    \u0275\u0275text(71, "2024-03-05");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.schoolName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.registrationId);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.teams.length);
    \u0275\u0275advance(24);
    \u0275\u0275property("ngForOf", ctx_r1.categoriesEntered);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.categoriesEntered.length === 0);
  }
}
function SchoolDashboardComponent_div_42_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1, " No teams registered yet. Complete the registration wizard to add teams. ");
    \u0275\u0275elementEnd();
  }
}
function SchoolDashboardComponent_div_42_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 58)(2, "div")(3, "h3", 59);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 60);
    \u0275\u0275text(6, " Category: ");
    \u0275\u0275elementStart(7, "span", 61);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 62);
    \u0275\u0275text(10, " Students: ");
    \u0275\u0275elementStart(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div")(14, "span", 63);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 64)(17, "button", 65);
    \u0275\u0275listener("click", function SchoolDashboardComponent_div_42_div_7_Template_button_click_17_listener() {
      const team_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openAddStudentModal(team_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 66);
    \u0275\u0275element(19, "path", 67)(20, "circle", 68)(21, "line", 69)(22, "line", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Add Student Names ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "button", 71);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 72);
    \u0275\u0275element(26, "path", 73)(27, "path", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " Edit ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(29, "button", 71);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(30, "svg", 66);
    \u0275\u0275element(31, "path", 75)(32, "circle", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275text(33, " View ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const team_r4 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(team_r4.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(team_r4.category);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", team_r4.studentsCount, " / ", team_r4.maxStudents, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", team_r4.status, " ");
  }
}
function SchoolDashboardComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h2", 51);
    \u0275\u0275text(2, "Manage Teams");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 52);
    \u0275\u0275text(4, "View and manage all your registered teams");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SchoolDashboardComponent_div_42_div_5_Template, 2, 0, "div", 53);
    \u0275\u0275elementStart(6, "div", 54);
    \u0275\u0275template(7, SchoolDashboardComponent_div_42_div_7_Template, 34, 5, "div", 55);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.teams.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.teams);
  }
}
function SchoolDashboardComponent_div_43_div_26_div_20_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 100)(1, "span", 101);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 102);
    \u0275\u0275listener("click", function SchoolDashboardComponent_div_43_div_26_div_20_div_1_div_4_Template_button_click_3_listener() {
      const idx_r9 = \u0275\u0275restoreView(_r8).index;
      const team_r6 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteFile(team_r6, idx_r9));
    });
    \u0275\u0275text(4, "Delete");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const file_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(file_r10);
  }
}
function SchoolDashboardComponent_div_43_div_26_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97)(1, "div", 93);
    \u0275\u0275text(2, "Uploaded Files:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 98);
    \u0275\u0275template(4, SchoolDashboardComponent_div_43_div_26_div_20_div_1_div_4_Template, 5, 1, "div", 99);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const team_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", team_r6.files);
  }
}
function SchoolDashboardComponent_div_43_div_26_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275template(1, SchoolDashboardComponent_div_43_div_26_div_20_div_1_Template, 5, 1, "div", 92);
    \u0275\u0275elementStart(2, "div")(3, "div", 93);
    \u0275\u0275text(4, "Upload New File:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 94)(6, "input", 95, 0);
    \u0275\u0275listener("change", function SchoolDashboardComponent_div_43_div_26_div_20_Template_input_change_6_listener($event) {
      \u0275\u0275restoreView(_r7);
      const team_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onFileSelected($event, team_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 96);
    \u0275\u0275listener("click", function SchoolDashboardComponent_div_43_div_26_div_20_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r7);
      const fileInput_r11 = \u0275\u0275reference(7);
      return \u0275\u0275resetView(fileInput_r11.click());
    });
    \u0275\u0275text(9, "Choose File");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 46);
    \u0275\u0275text(11, "No file chosen");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const team_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", team_r6.files.length > 0);
  }
}
function SchoolDashboardComponent_div_43_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 82)(1, "div", 83)(2, "div")(3, "div", 84)(4, "h3", 85);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 86);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 87)(9, "span");
    \u0275\u0275text(10, "Category: ");
    \u0275\u0275elementStart(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(13, "span", 88);
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15, "Deadline: ");
    \u0275\u0275elementStart(16, "strong");
    \u0275\u0275text(17, "2024-04-15");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(18, "button", 89);
    \u0275\u0275listener("click", function SchoolDashboardComponent_div_43_div_26_Template_button_click_18_listener() {
      const team_r6 = \u0275\u0275restoreView(_r5).$implicit;
      return \u0275\u0275resetView(team_r6.expanded = !team_r6.expanded);
    });
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, SchoolDashboardComponent_div_43_div_26_div_20_Template, 12, 1, "div", 90);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const team_r6 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(team_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", team_r6.filesUploaded, " of ", team_r6.totalFilesRequired, " files ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(team_r6.category);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", team_r6.expanded ? "Collapse" : "Expand", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", team_r6.expanded);
  }
}
function SchoolDashboardComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h2", 51);
    \u0275\u0275text(2, "Upload Submissions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 52);
    \u0275\u0275text(4, "Upload submissions for different stages. File naming: [TeamName]_[StageName]");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 77)(6, "div", 78);
    \u0275\u0275text(7, "File Naming Format:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 79)(9, "div", 80);
    \u0275\u0275text(10, "Example: ");
    \u0275\u0275elementStart(11, "strong");
    \u0275\u0275text(12, "Team1_(Online Round 1)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 80);
    \u0275\u0275text(14, "Example: ");
    \u0275\u0275elementStart(15, "strong");
    \u0275\u0275text(16, "Team1_(Online Round 2)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 80);
    \u0275\u0275text(18, "Example: ");
    \u0275\u0275elementStart(19, "strong");
    \u0275\u0275text(20, "Team1_(Online Round 3)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 80);
    \u0275\u0275text(22, "Example: ");
    \u0275\u0275elementStart(23, "strong");
    \u0275\u0275text(24, "Team1_(Finale Round)");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "div", 54);
    \u0275\u0275template(26, SchoolDashboardComponent_div_43_div_26_Template, 21, 6, "div", 81);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(26);
    \u0275\u0275property("ngForOf", ctx_r1.teams);
  }
}
function SchoolDashboardComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h2", 51);
    \u0275\u0275text(2, "Download Competition Kits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 52);
    \u0275\u0275text(4, "Access all competition materials and resources");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 103)(6, "div", 104)(7, "div", 105)(8, "h3", 106);
    \u0275\u0275text(9, "Competition Handbook");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 107);
    \u0275\u0275text(11, "Complete rules, guidelines, and competition overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 108);
    \u0275\u0275text(13, "PDF \u2022 2.5 MB");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 109);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 110);
    \u0275\u0275element(16, "path", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " Download ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "div", 104)(19, "div", 105)(20, "h3", 106);
    \u0275\u0275text(21, "Teacher / Coordinator Kit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p", 107);
    \u0275\u0275text(23, "Resources for educators and coordinators");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 108);
    \u0275\u0275text(25, "ZIP \u2022 5.8 MB");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "button", 109);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 110);
    \u0275\u0275element(28, "path", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, " Download ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(30, "div", 104)(31, "div", 105)(32, "h3", 106);
    \u0275\u0275text(33, "Task Briefs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p", 107);
    \u0275\u0275text(35, "Detailed task descriptions for all categories");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 108);
    \u0275\u0275text(37, "PDF \u2022 1.2 MB");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "button", 109);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(39, "svg", 110);
    \u0275\u0275element(40, "path", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275text(41, " Download ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(42, "div", 104)(43, "div", 105)(44, "h3", 106);
    \u0275\u0275text(45, "Submission Guidelines");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "p", 107);
    \u0275\u0275text(47, "How to prepare and submit entries");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span", 108);
    \u0275\u0275text(49, "PDF \u2022 0.8 MB");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "button", 109);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(51, "svg", 110);
    \u0275\u0275element(52, "path", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275text(53, " Download ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(54, "div", 104)(55, "div", 105)(56, "h3", 106);
    \u0275\u0275text(57, "Branding / Poster Pack");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "p", 107);
    \u0275\u0275text(59, "Marketing materials and promotional assets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "span", 108);
    \u0275\u0275text(61, "ZIP \u2022 15.3 MB");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "button", 109);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(63, "svg", 110);
    \u0275\u0275element(64, "path", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275text(65, " Download ");
    \u0275\u0275elementEnd()()()();
  }
}
function SchoolDashboardComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h2", 51);
    \u0275\u0275text(2, "Messages & Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 52);
    \u0275\u0275text(4, "Stay updated with deadline reminders, approvals, and competition updates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 54)(6, "div", 112)(7, "div", 113)(8, "h3", 114);
    \u0275\u0275text(9, "Submission Deadline Reminder");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 115);
    \u0275\u0275text(11, "New");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "p", 116);
    \u0275\u0275text(13, "Your Trailblazers team submission is due in 5 days.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 47);
    \u0275\u0275text(15, "2024-03-10");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 112)(17, "div", 113)(18, "h3", 114);
    \u0275\u0275text(19, "Team Approved");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "p", 116);
    \u0275\u0275text(21, "Your Visioneers team has been approved for competition.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 47);
    \u0275\u0275text(23, "2024-03-08");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 112)(25, "div", 113)(26, "h3", 114);
    \u0275\u0275text(27, "Update Available");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "p", 116);
    \u0275\u0275text(29, "New competition guidelines are available for download.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 47);
    \u0275\u0275text(31, "2024-03-05");
    \u0275\u0275elementEnd()()()();
  }
}
function SchoolDashboardComponent_div_46_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 94)(1, "span", 125);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 126);
    \u0275\u0275listener("input", function SchoolDashboardComponent_div_46_div_9_Template_input_input_3_listener($event) {
      const idx_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateMember($event, idx_r14));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const idx_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", idx_r14 === 0 ? "Team Lead" : "Member " + (idx_r14 + 1), ": ");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.getMemberName(idx_r14))("placeholder", idx_r14 === 0 ? "Team lead name (optional)" : "Student name (optional)");
  }
}
function SchoolDashboardComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 117)(1, "div", 118)(2, "h3", 119);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 120);
    \u0275\u0275text(5, "Category: ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 121);
    \u0275\u0275template(9, SchoolDashboardComponent_div_46_div_9_Template, 4, 3, "div", 122);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 123)(11, "button", 96);
    \u0275\u0275listener("click", function SchoolDashboardComponent_div_46_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAddStudentModal());
    });
    \u0275\u0275text(12, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 124);
    \u0275\u0275listener("click", function SchoolDashboardComponent_div_46_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveStudents());
    });
    \u0275\u0275text(14, "Save Students");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedTeam == null ? null : ctx_r1.selectedTeam.name, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedTeam == null ? null : ctx_r1.selectedTeam.category);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(3, _c0));
  }
}
var SchoolDashboardComponent = class _SchoolDashboardComponent {
  constructor() {
    this.http = inject(HttpClient);
    this.activeTab = "home";
    this.showAddModal = false;
    this.selectedTeam = null;
    this.schoolName = "";
    this.registrationId = "";
    this.coordinatorName = "";
    this.coordinatorEmail = "";
    this.schoolEmail = "";
    this.schoolCountry = "";
    this.schoolCity = "";
    this.categoriesEntered = [];
    this.teams = [];
  }
  ngOnInit() {
    const savedRegRaw = localStorage.getItem("schoolRegistrationData");
    if (savedRegRaw) {
      try {
        const reg = JSON.parse(savedRegRaw);
        this.schoolName = reg.schoolName || "";
        this.schoolEmail = reg.schoolEmail || "";
        this.schoolCountry = reg.schoolCountry || "";
        this.schoolCity = reg.schoolCity || "";
        this.coordinatorName = reg.coordinatorName || "";
        this.coordinatorEmail = reg.coordinatorEmail || "";
      } catch (e) {
      }
    }
    if (!this.schoolName) {
      this.schoolName = localStorage.getItem("openChallengeParticipantName") || "My School";
    }
    this.registrationId = localStorage.getItem("openChallengeRegistrationId") || "";
    const teamsDataRaw = localStorage.getItem("schoolTeamsData");
    if (teamsDataRaw) {
      try {
        const teamsData = JSON.parse(teamsDataRaw);
        this.buildTeamsFromData(teamsData);
      } catch (e) {
      }
    }
    const numId = this.registrationId ? this.registrationId.split("-").pop() : null;
    if (numId && /^\d+$/.test(numId)) {
      this.http.get(`http://localhost:5001/api/challenges/registration/${numId}`).subscribe({
        next: (res) => {
          if (res.full_name)
            this.schoolName = res.full_name;
          if (res.country)
            this.schoolCountry = res.country;
          if (res.city)
            this.schoolCity = res.city;
          if (res.email)
            this.schoolEmail = res.email;
          if (res.parent_name)
            this.coordinatorName = res.parent_name;
          if (res.parent_email)
            this.coordinatorEmail = res.parent_email;
          if (res.teams_data) {
            this.buildTeamsFromData(res.teams_data);
          }
        },
        error: () => {
        }
      });
    }
  }
  buildTeamsFromData(teamsData) {
    const studentNames = teamsData.studentNames || {};
    const newTeams = [];
    const categories = [];
    const addTeams = (count, categoryKey, categoryLabel) => {
      if (count > 0) {
        categories.push(categoryLabel);
        for (let i = 0; i < count; i++) {
          const members = [];
          for (let m = 1; m <= 5; m++) {
            const key = `${categoryKey}-${i}-${m}`;
            if (studentNames[key] && studentNames[key].trim()) {
              members.push(studentNames[key].trim());
            }
          }
          newTeams.push({
            name: `${categoryLabel} Team ${i + 1}`,
            category: categoryLabel,
            studentsCount: members.length,
            maxStudents: 5,
            status: "Active",
            filesUploaded: 0,
            totalFilesRequired: 4,
            files: [],
            members
          });
        }
      }
    };
    addTeams(teamsData.trailblazersCount || 0, "trailblazers", "Trailblazers");
    addTeams(teamsData.visioneersCount || 0, "visioneers", "Visioneers");
    addTeams(teamsData.strategistsCount || 0, "strategists", "Strategists");
    this.teams = newTeams;
    this.categoriesEntered = categories;
  }
  openAddStudentModal(team) {
    this.selectedTeam = team;
    this.showAddModal = true;
  }
  closeAddStudentModal() {
    this.showAddModal = false;
    this.selectedTeam = null;
  }
  getMemberName(idx) {
    if (this.selectedTeam && this.selectedTeam.members && this.selectedTeam.members[idx]) {
      return this.selectedTeam.members[idx];
    }
    return "";
  }
  updateMember(event, idx) {
    if (this.selectedTeam) {
      if (!this.selectedTeam.members) {
        this.selectedTeam.members = [];
      }
      this.selectedTeam.members[idx] = event.target.value;
    }
  }
  saveStudents() {
    if (this.selectedTeam) {
      const filled = this.selectedTeam.members.filter((m) => m && m.trim()).length;
      this.selectedTeam.studentsCount = filled;
      const teamsDataRaw = localStorage.getItem("schoolTeamsData");
      if (teamsDataRaw) {
        try {
          const teamsData = JSON.parse(teamsDataRaw);
          const catKey = this.selectedTeam.category.toLowerCase();
          const teamIdxInCat = this.teams.filter((t) => t.category === this.selectedTeam.category).indexOf(this.selectedTeam);
          if (teamIdxInCat >= 0) {
            if (!teamsData.studentNames)
              teamsData.studentNames = {};
            this.selectedTeam.members.forEach((name, mIdx) => {
              const key = `${catKey === "trailblazers" ? "trailblazers" : catKey === "visioneers" ? "visioneers" : "strategists"}-${teamIdxInCat}-${mIdx + 1}`;
              teamsData.studentNames[key] = name || "";
            });
            localStorage.setItem("schoolTeamsData", JSON.stringify(teamsData));
          }
        } catch (e) {
        }
      }
    }
    this.closeAddStudentModal();
  }
  onFileSelected(event, team) {
    const file = event.target.files[0];
    if (file) {
      team.files.push(file.name);
      team.filesUploaded++;
    }
  }
  deleteFile(team, index) {
    team.files.splice(index, 1);
    team.filesUploaded--;
  }
  static {
    this.\u0275fac = function SchoolDashboardComponent_Factory(t) {
      return new (t || _SchoolDashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SchoolDashboardComponent, selectors: [["app-school-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 47, vars: 16, consts: [["fileInput", ""], [2, "background", "#FFFFFF", "border-bottom", "1px solid #E8E8E8", "padding", "16px 24px", "font-family", "'Poppins', 'Inter', sans-serif"], [2, "max-width", "1200px", "margin", "0 auto", "display", "flex", "align-items", "center", "justify-content", "space-between"], ["routerLink", "/skillstorm/open-challenges", 2, "display", "flex", "align-items", "center", "gap", "8px", "cursor", "pointer"], [2, "width", "32px", "height", "32px", "background", "#D32F2F", "border-radius", "8px", "display", "flex", "align-items", "center", "justify-content", "center", "color", "#FFFFFF", "font-weight", "900", "font-size", "18px"], [2, "font-size", "20px", "font-weight", "800", "color", "#111111", "letter-spacing", "-0.02em"], [1, "desktop-nav", 2, "display", "flex", "align-items", "center", "gap", "28px"], [2, "position", "relative", "display", "flex", "align-items", "center", "gap", "4px", "font-size", "14px", "font-weight", "500", "color", "#666666", "cursor", "pointer"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["d", "M19 9l-7 7-7-7"], ["href", "#", 2, "font-size", "14px", "font-weight", "500", "color", "#666666", "text-decoration", "none"], [2, "background", "#FAFAF9", "min-height", "100vh", "padding", "32px 24px", "font-family", "'Poppins', 'Inter', sans-serif"], [2, "max-width", "1000px", "margin", "0 auto"], ["routerLink", "/skillstorm/school-competitions", 2, "display", "flex", "align-items", "center", "gap", "8px", "font-size", "14px", "font-weight", "600", "color", "#D32F2F", "text-decoration", "none", "margin-bottom", "24px"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["d", "M19 12H5M12 19l-7-7 7-7"], [2, "font-size", "32px", "font-weight", "800", "color", "#000000", "margin", "0 0 8px 0", "letter-spacing", "-0.01em"], [2, "font-size", "15px", "color", "#666666", "margin", "0 0 36px 0", "line-height", "1.6"], [1, "tabs-nav", 2, "display", "flex", "border-bottom", "1px solid #E5E7EB", "margin-bottom", "32px", "gap", "32px"], [1, "tab-btn", 3, "click"], [4, "ngIf"], ["class", "modal-overlay", 4, "ngIf"], [2, "display", "grid", "grid-template-columns", "repeat(auto-fit, minmax(200px, 1fr))", "gap", "20px", "margin-bottom", "32px"], [1, "metric-card"], [1, "metric-label"], [1, "metric-val"], [2, "background", "#FFF5F5", "border", "1px solid #FEE2E2", "border-radius", "12px", "padding", "24px 32px", "display", "flex", "align-items", "center", "justify-content", "space-between", "margin-bottom", "32px", "flex-wrap", "wrap", "gap", "16px"], [2, "font-size", "15px", "font-weight", "700", "color", "#111111", "margin-bottom", "4px"], [2, "font-size", "14px", "color", "#666666"], [2, "display", "flex", "align-items", "center", "gap", "16px"], [2, "background", "#FFFFFF", "border", "1px solid #EF4444", "color", "#EF4444", "border-radius", "20px", "padding", "4px 12px", "font-size", "12px", "font-weight", "700"], [2, "color", "#EF4444", "font-weight", "700", "font-size", "15px", "display", "flex", "align-items", "center", "gap", "6px"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["cx", "12", "cy", "12", "r", "10"], ["d", "M12 6v6l4 2"], [2, "background", "#FFFFFF", "border", "1px solid #E8E8E8", "border-radius", "12px", "padding", "28px 32px", "margin-bottom", "32px", "box-shadow", "0 1px 4px rgba(0,0,0,0.02)"], [2, "font-size", "16px", "font-weight", "700", "color", "#111111", "margin", "0 0 20px 0"], [2, "display", "flex", "gap", "12px", "flex-wrap", "wrap"], ["class", "category-badge", 4, "ngFor", "ngForOf"], ["style", "font-size:14px; color:#999;", 4, "ngIf"], [2, "background", "#FFFFFF", "border", "1px solid #E8E8E8", "border-radius", "12px", "padding", "28px 32px", "box-shadow", "0 1px 4px rgba(0,0,0,0.02)"], [2, "font-size", "16px", "font-weight", "700", "color", "#111111", "margin", "0 0 20px 0", "display", "flex", "align-items", "center", "gap", "8px"], ["d", "M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"], [2, "display", "flex", "flex-direction", "column", "gap", "14px"], [2, "background", "#FFF5F5", "border", "1px solid #FEE2E2", "border-radius", "8px", "padding", "18px 20px", "display", "flex", "justify-content", "space-between", "align-items", "flex-start", "gap", "16px"], [2, "font-size", "14px", "font-weight", "700", "color", "#111111", "margin-bottom", "4px"], [2, "font-size", "13px", "color", "#666666"], [2, "font-size", "12px", "color", "#999999", "font-weight", "500"], [2, "background", "#FAFAFA", "border", "1px solid #EBEBEB", "border-radius", "8px", "padding", "18px 20px", "display", "flex", "justify-content", "space-between", "align-items", "flex-start", "gap", "16px"], [1, "category-badge"], [2, "font-size", "14px", "color", "#999"], [2, "font-size", "20px", "font-weight", "800", "color", "#111111", "margin", "0 0 8px 0"], [2, "font-size", "14px", "color", "#666666", "margin", "0 0 24px 0"], ["style", "text-align: center; padding: 48px; color: #AAAAAA; font-size: 14px; font-style: italic;", 4, "ngIf"], [2, "display", "flex", "flex-direction", "column", "gap", "16px"], ["style", "background: #FFFFFF; border: 1px solid #E0E0E0; border-radius: 12px; padding: 24px 28px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);", 4, "ngFor", "ngForOf"], [2, "text-align", "center", "padding", "48px", "color", "#AAAAAA", "font-size", "14px", "font-style", "italic"], [2, "background", "#FFFFFF", "border", "1px solid #E0E0E0", "border-radius", "12px", "padding", "24px 28px", "box-shadow", "0 1px 3px rgba(0,0,0,0.04)"], [2, "display", "flex", "align-items", "center", "justify-content", "space-between", "gap", "16px", "flex-wrap", "wrap"], [2, "font-size", "17px", "font-weight", "700", "color", "#111111", "margin", "0 0 6px 0"], [2, "font-size", "13px", "color", "#555555", "margin-bottom", "4px"], [2, "color", "#D32F2F", "font-weight", "600"], [2, "font-size", "13px", "color", "#555555", "margin-bottom", "6px"], [2, "background", "#D32F2F", "color", "#FFFFFF", "border-radius", "5px", "padding", "3px 10px", "font-size", "11px", "font-weight", "700", "text-transform", "uppercase", "letter-spacing", "0.05em"], [2, "display", "flex", "align-items", "center", "gap", "8px", "flex-wrap", "wrap"], [2, "display", "flex", "align-items", "center", "gap", "6px", "background", "#FFFFFF", "border", "1px solid #D1D5DB", "border-radius", "7px", "padding", "8px 14px", "font-size", "13px", "font-weight", "500", "color", "#111111", "cursor", "pointer", "font-family", "inherit", "transition", "background 0.15s", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["x1", "23", "y1", "11", "x2", "17", "y2", "11"], ["x1", "20", "y1", "8", "x2", "20", "y2", "14"], [2, "display", "flex", "align-items", "center", "gap", "6px", "background", "#FFFFFF", "border", "1px solid #D1D5DB", "border-radius", "7px", "padding", "8px 14px", "font-size", "13px", "font-weight", "500", "color", "#111111", "cursor", "pointer", "font-family", "inherit", "transition", "background 0.15s"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], [2, "background", "#FFFFFF", "border", "1px solid #E8E8E8", "border-radius", "12px", "padding", "24px 28px", "margin-bottom", "24px"], [2, "font-size", "13px", "font-weight", "700", "color", "#111111", "margin-bottom", "12px"], [2, "display", "grid", "grid-template-columns", "1fr 1fr", "gap", "12px", "font-size", "13px", "color", "#666666"], [2, "border", "1px solid #E5E7EB", "padding", "10px 14px", "border-radius", "6px", "background", "#FAFAFA"], ["style", "background: #FFFFFF; border: 1px solid #E8E8E8; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,0.02);", 4, "ngFor", "ngForOf"], [2, "background", "#FFFFFF", "border", "1px solid #E8E8E8", "border-radius", "12px", "overflow", "hidden", "box-shadow", "0 1px 4px rgba(0,0,0,0.02)"], [2, "padding", "24px 32px", "display", "flex", "align-items", "center", "justify-content", "space-between", "border-bottom", "1px solid #F3F4F6", "flex-wrap", "wrap", "gap", "16px"], [2, "display", "flex", "align-items", "center", "gap", "8px", "margin-bottom", "4px"], [2, "font-size", "18px", "font-weight", "700", "color", "#111111", "margin", "0"], [2, "background", "#F3F4F6", "border-radius", "12px", "padding", "2px 8px", "font-size", "11px", "font-weight", "600", "color", "#666666"], [2, "display", "flex", "align-items", "center", "gap", "12px", "font-size", "13px", "color", "#666666"], [2, "width", "4px", "height", "4px", "border-radius", "50%", "background", "#CCCCCC"], [1, "action-btn", 3, "click"], ["style", "padding: 24px 32px; background: #FAFAFA;", 4, "ngIf"], [2, "padding", "24px 32px", "background", "#FAFAFA"], ["style", "margin-bottom: 20px;", 4, "ngIf"], [2, "font-size", "13px", "font-weight", "700", "color", "#333333", "margin-bottom", "8px"], [2, "display", "flex", "align-items", "center", "gap", "12px"], ["type", "file", 2, "display", "none", 3, "change"], [1, "action-btn", 2, "background", "#F3F4F6", "color", "#333333", 3, "click"], [2, "margin-bottom", "20px"], [2, "display", "flex", "flex-direction", "column", "gap", "8px"], ["style", "background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 6px; padding: 10px 14px; display: flex; align-items: center; justify-content: space-between;", 4, "ngFor", "ngForOf"], [2, "background", "#FFFFFF", "border", "1px solid #E5E7EB", "border-radius", "6px", "padding", "10px 14px", "display", "flex", "align-items", "center", "justify-content", "space-between"], [2, "font-size", "13px", "color", "#111111", "font-weight", "500"], [2, "background", "none", "border", "none", "color", "#EF4444", "cursor", "pointer", "font-size", "13px", "font-weight", "600", 3, "click"], [2, "display", "grid", "grid-template-columns", "repeat(auto-fit, minmax(280px, 1fr))", "gap", "20px"], [1, "kit-download-card"], [2, "flex", "1"], [2, "font-size", "16px", "font-weight", "700", "color", "#111111", "margin", "0 0 6px 0"], [2, "font-size", "13px", "color", "#666666", "margin", "0 0 16px 0"], [2, "font-size", "12px", "color", "#999999", "font-weight", "600", "text-transform", "uppercase"], [1, "kit-red-btn"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "3", 2, "margin-right", "4px"], ["d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"], [2, "background", "#FAFAFA", "border", "1px solid #EBEBEB", "border-radius", "12px", "padding", "24px 32px", "display", "flex", "flex-direction", "column", "justify-content", "space-between"], [2, "display", "flex", "align-items", "center", "justify-content", "space-between", "margin-bottom", "12px", "width", "100%"], [2, "font-size", "16px", "font-weight", "700", "color", "#111111", "margin", "0"], [2, "background", "#D32F2F", "color", "#FFFFFF", "border-radius", "6px", "padding", "2px 8px", "font-size", "11px", "font-weight", "700", "text-transform", "uppercase"], [2, "font-size", "13.5px", "color", "#666666", "margin", "0 0 16px 0", "line-height", "1.5"], [1, "modal-overlay"], [1, "modal-content"], [2, "font-size", "18px", "font-weight", "700", "color", "#111111", "margin-top", "0", "margin-bottom", "4px"], [2, "font-size", "13px", "color", "#888", "margin", "0 0 20px 0"], [2, "display", "flex", "flex-direction", "column", "gap", "12px", "margin-bottom", "24px"], ["style", "display: flex; align-items: center; gap: 12px;", 4, "ngFor", "ngForOf"], [2, "display", "flex", "justify-content", "flex-end", "gap", "12px"], [1, "action-btn", 2, "background", "#D32F2F", "color", "white", 3, "click"], [2, "font-size", "13px", "font-weight", "600", "color", "#666666", "width", "80px", "flex-shrink", "0"], ["type", "text", 2, "flex", "1", "border", "1px solid #DDD", "border-radius", "6px", "padding", "8px 12px", "font-size", "13.5px", "outline", "none", 3, "input", "value", "placeholder"]], template: function SchoolDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
        \u0275\u0275text(4, " S ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 5);
        \u0275\u0275text(6, "SkillStorm");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "nav", 6)(8, "div", 7);
        \u0275\u0275text(9, " Competitions ");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(10, "svg", 8);
        \u0275\u0275element(11, "path", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(12, "a", 10);
        \u0275\u0275text(13, "Courses");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "a", 10);
        \u0275\u0275text(15, "Leaderboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "a", 10);
        \u0275\u0275text(17, "About");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "a", 10);
        \u0275\u0275text(19, "Contact");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(20, "div", 11)(21, "div", 12)(22, "a", 13);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(23, "svg", 14);
        \u0275\u0275element(24, "path", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275text(25, " Back to School Competitions ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(26, "h1", 16);
        \u0275\u0275text(27, " School Competition Dashboard ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "p", 17);
        \u0275\u0275text(29, " Welcome to your SkillStorm school portal. Manage your teams, access competition materials, and upload online phase submissions from one place. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 18)(31, "button", 19);
        \u0275\u0275listener("click", function SchoolDashboardComponent_Template_button_click_31_listener() {
          return ctx.activeTab = "home";
        });
        \u0275\u0275text(32, "Home");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "button", 19);
        \u0275\u0275listener("click", function SchoolDashboardComponent_Template_button_click_33_listener() {
          return ctx.activeTab = "teams";
        });
        \u0275\u0275text(34, "Manage Teams");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "button", 19);
        \u0275\u0275listener("click", function SchoolDashboardComponent_Template_button_click_35_listener() {
          return ctx.activeTab = "submissions";
        });
        \u0275\u0275text(36, "Upload Submissions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "button", 19);
        \u0275\u0275listener("click", function SchoolDashboardComponent_Template_button_click_37_listener() {
          return ctx.activeTab = "kits";
        });
        \u0275\u0275text(38, "Download Kits");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "button", 19);
        \u0275\u0275listener("click", function SchoolDashboardComponent_Template_button_click_39_listener() {
          return ctx.activeTab = "messages";
        });
        \u0275\u0275text(40, "Messages");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(41, SchoolDashboardComponent_div_41_Template, 72, 5, "div", 20)(42, SchoolDashboardComponent_div_42_Template, 8, 2, "div", 20)(43, SchoolDashboardComponent_div_43_Template, 27, 1, "div", 20)(44, SchoolDashboardComponent_div_44_Template, 66, 0, "div", 20)(45, SchoolDashboardComponent_div_45_Template, 32, 0, "div", 20);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(46, SchoolDashboardComponent_div_46_Template, 15, 4, "div", 21);
      }
      if (rf & 2) {
        \u0275\u0275advance(31);
        \u0275\u0275classProp("active-tab", ctx.activeTab === "home");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active-tab", ctx.activeTab === "teams");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active-tab", ctx.activeTab === "submissions");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active-tab", ctx.activeTab === "kits");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active-tab", ctx.activeTab === "messages");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.activeTab === "home");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "teams");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "submissions");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "kits");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "messages");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showAddModal);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, FormsModule], styles: ['\n\n.tab-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 12px 0;\n  font-size: 14.5px;\n  font-weight: 600;\n  color: #666666;\n  cursor: pointer;\n  font-family:\n    "Poppins",\n    "Inter",\n    sans-serif;\n  position: relative;\n  outline: none;\n}\n.tab-btn[_ngcontent-%COMP%]:hover {\n  color: #000000;\n}\n.tab-btn.active-tab[_ngcontent-%COMP%] {\n  color: #D32F2F;\n}\n.tab-btn.active-tab[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -1px;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background: #D32F2F;\n}\n.metric-card[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border: 1px solid #E8E8E8;\n  border-radius: 10px;\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.02);\n}\n.metric-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #888888;\n  margin-bottom: 6px;\n}\n.metric-val[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #111111;\n}\n.category-badge[_ngcontent-%COMP%] {\n  border: 1px solid #E5E7EB;\n  background: #FAFAFA;\n  color: #333333;\n  font-size: 13.5px;\n  font-weight: 500;\n  border-radius: 6px;\n  padding: 8px 18px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  color: #000000;\n  border: 1px solid rgba(15, 37, 110, 0.1);\n  border-radius: 8px;\n  padding: 10px 18px;\n  font-size: 12.5px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family:\n    "Poppins",\n    "Inter",\n    sans-serif;\n  transition: background 0.2s;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: #F9FAFB;\n}\n.kit-card[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border: 1px solid #E8E8E8;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.02);\n}\n.kit-download-card[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border: 1px solid #E8E8E8;\n  border-radius: 12px;\n  padding: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.02);\n  gap: 16px;\n}\n.kit-red-btn[_ngcontent-%COMP%] {\n  background: #D32F2F;\n  color: #FFFFFF;\n  border: none;\n  border-radius: 6px;\n  padding: 10px 20px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.2s;\n  font-family:\n    "Poppins",\n    "Inter",\n    sans-serif;\n}\n.kit-red-btn[_ngcontent-%COMP%]:hover {\n  background: #B71C1C;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border-radius: 12px;\n  padding: 32px;\n  width: 100%;\n  max-width: 520px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);\n}\n@media (max-width: 768px) {\n  .desktop-nav[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .tabs-nav[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    white-space: nowrap;\n    padding-bottom: 8px;\n    gap: 16px !important;\n  }\n  .tab-btn[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n  }\n}\n/*# sourceMappingURL=school-dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SchoolDashboardComponent, { className: "SchoolDashboardComponent", filePath: "src\\app\\pages\\school-dashboard\\school-dashboard.component.ts", lineNumber: 615 });
})();
export {
  SchoolDashboardComponent
};
//# sourceMappingURL=chunk-M7X3LCMS.js.map
