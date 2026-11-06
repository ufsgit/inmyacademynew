import {
  FormsModule
} from "./chunk-I5HLQJ4G.js";
import {
  RouterLink,
  RouterModule
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
  NgForOf,
  NgIf,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-EW7BAGJT.js";

// src/app/pages/school-dashboard/school-dashboard.component.ts
var _c0 = () => [0, 1, 2, 3, 4];
function SchoolDashboardComponent_div_41_span_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
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
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275text(1, "No categories registered yet.");
    \u0275\u0275elementEnd();
  }
}
function SchoolDashboardComponent_div_41_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1, " No documents available yet. ");
    \u0275\u0275elementEnd();
  }
}
function SchoolDashboardComponent_div_41_ul_49_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 59)(1, "a", 60);
    \u0275\u0275listener("click", function SchoolDashboardComponent_div_41_ul_49_li_1_Template_a_click_1_listener($event) {
      const doc_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.viewDocument(doc_r3, $event));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 61);
    \u0275\u0275element(3, "path", 41)(4, "path", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const doc_r3 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", doc_r3.title || "Document", " ");
  }
}
function SchoolDashboardComponent_div_41_ul_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 57);
    \u0275\u0275template(1, SchoolDashboardComponent_div_41_ul_49_li_1_Template, 6, 1, "li", 58);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.adminDocuments);
  }
}
function SchoolDashboardComponent_div_41_div_50_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "iframe", 66);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r3.getSafeUrl(ctx_r3.selectedDocument.file_path), \u0275\u0275sanitizeResourceUrl);
  }
}
function SchoolDashboardComponent_div_41_div_50_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "img", 67);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r3.selectedDocument.file_path, \u0275\u0275sanitizeUrl);
  }
}
function SchoolDashboardComponent_div_41_div_50_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "video", 68);
    \u0275\u0275element(2, "source", 69);
    \u0275\u0275text(3, " Your browser does not support the video tag. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r3.selectedDocument.file_path, \u0275\u0275sanitizeUrl);
  }
}
function SchoolDashboardComponent_div_41_div_50_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 70)(2, "p", 71);
    \u0275\u0275text(3, "Preview not available for this file type.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 72);
    \u0275\u0275text(5, "Download / Open File");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("href", ctx_r3.selectedDocument.file_path, \u0275\u0275sanitizeUrl);
  }
}
function SchoolDashboardComponent_div_41_div_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62)(1, "div", 63)(2, "h5", 64);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 65);
    \u0275\u0275listener("click", function SchoolDashboardComponent_div_41_div_50_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.selectedDocument = null);
    });
    \u0275\u0275text(5, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, SchoolDashboardComponent_div_41_div_50_ng_container_6_Template, 2, 1, "ng-container", 20)(7, SchoolDashboardComponent_div_41_div_50_ng_container_7_Template, 2, 1, "ng-container", 20)(8, SchoolDashboardComponent_div_41_div_50_ng_container_8_Template, 4, 1, "ng-container", 20)(9, SchoolDashboardComponent_div_41_div_50_ng_container_9_Template, 6, 1, "ng-container", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.selectedDocument.title || "Document View");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.isPdf(ctx_r3.selectedDocument.file_path));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isImage(ctx_r3.selectedDocument.file_path));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isVideo(ctx_r3.selectedDocument.file_path));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.isPdf(ctx_r3.selectedDocument.file_path) && !ctx_r3.isImage(ctx_r3.selectedDocument.file_path) && !ctx_r3.isVideo(ctx_r3.selectedDocument.file_path));
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
    \u0275\u0275elementStart(42, "div", 35)(43, "h3", 40);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(44, "svg", 32);
    \u0275\u0275element(45, "path", 41)(46, "path", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275text(47, " Competition Documents ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(48, SchoolDashboardComponent_div_41_div_48_Template, 2, 0, "div", 43)(49, SchoolDashboardComponent_div_41_ul_49_Template, 2, 1, "ul", 44)(50, SchoolDashboardComponent_div_41_div_50_Template, 10, 5, "div", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(51, "div", 46)(52, "h3", 40);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(53, "svg", 32);
    \u0275\u0275element(54, "path", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275text(55, " Latest Notifications ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(56, "div", 48)(57, "div", 49)(58, "div")(59, "div", 50);
    \u0275\u0275text(60, "Submission Deadline Reminder");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 51);
    \u0275\u0275text(62, "Your Trailblazers team submission is due in 5 days.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "span", 52);
    \u0275\u0275text(64, "2024-03-10");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 53)(66, "div")(67, "div", 50);
    \u0275\u0275text(68, "Team Approved");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div", 51);
    \u0275\u0275text(70, "Your Visioneers team has been approved for competition.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "span", 52);
    \u0275\u0275text(72, "2024-03-08");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 53)(74, "div")(75, "div", 50);
    \u0275\u0275text(76, "Update Available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "div", 51);
    \u0275\u0275text(78, "New competition guidelines are available for download.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "span", 52);
    \u0275\u0275text(80, "2024-03-05");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.schoolName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.registrationId);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.teams.length);
    \u0275\u0275advance(24);
    \u0275\u0275property("ngForOf", ctx_r3.categoriesEntered);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.categoriesEntered.length === 0);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r3.adminDocuments.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.adminDocuments.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.selectedDocument);
  }
}
function SchoolDashboardComponent_div_42_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275text(1, " No teams registered yet. Complete the registration wizard to add teams. ");
    \u0275\u0275elementEnd();
  }
}
function SchoolDashboardComponent_div_42_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 79)(1, "div", 80)(2, "div")(3, "h3", 81);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 82);
    \u0275\u0275text(6, " Category: ");
    \u0275\u0275elementStart(7, "span", 83);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 84);
    \u0275\u0275text(10, " Students: ");
    \u0275\u0275elementStart(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div")(14, "span", 85);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 86)(17, "button", 87);
    \u0275\u0275listener("click", function SchoolDashboardComponent_div_42_div_7_Template_button_click_17_listener() {
      const team_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openAddStudentModal(team_r7));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 88);
    \u0275\u0275element(19, "path", 89)(20, "circle", 90)(21, "line", 91)(22, "line", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Add Student Names ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "button", 93);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 94);
    \u0275\u0275element(26, "path", 95)(27, "path", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " Edit ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(29, "button", 93);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(30, "svg", 88);
    \u0275\u0275element(31, "path", 97)(32, "circle", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275text(33, " View ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const team_r7 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(team_r7.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(team_r7.category);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", team_r7.studentsCount, " / ", team_r7.maxStudents, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", team_r7.status, " ");
  }
}
function SchoolDashboardComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h2", 73);
    \u0275\u0275text(2, "Manage Teams");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 74);
    \u0275\u0275text(4, "View and manage all your registered teams");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SchoolDashboardComponent_div_42_div_5_Template, 2, 0, "div", 75);
    \u0275\u0275elementStart(6, "div", 76);
    \u0275\u0275template(7, SchoolDashboardComponent_div_42_div_7_Template, 34, 5, "div", 77);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r3.teams.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.teams);
  }
}
function SchoolDashboardComponent_div_43_div_26_div_20_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 122)(1, "span", 123);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 124);
    \u0275\u0275listener("click", function SchoolDashboardComponent_div_43_div_26_div_20_div_1_div_4_Template_button_click_3_listener() {
      const idx_r12 = \u0275\u0275restoreView(_r11).index;
      const team_r9 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.deleteFile(team_r9, idx_r12));
    });
    \u0275\u0275text(4, "Delete");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const file_r13 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(file_r13);
  }
}
function SchoolDashboardComponent_div_43_div_26_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 119)(1, "div", 115);
    \u0275\u0275text(2, "Uploaded Files:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 120);
    \u0275\u0275template(4, SchoolDashboardComponent_div_43_div_26_div_20_div_1_div_4_Template, 5, 1, "div", 121);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const team_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", team_r9.files);
  }
}
function SchoolDashboardComponent_div_43_div_26_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 113);
    \u0275\u0275template(1, SchoolDashboardComponent_div_43_div_26_div_20_div_1_Template, 5, 1, "div", 114);
    \u0275\u0275elementStart(2, "div")(3, "div", 115);
    \u0275\u0275text(4, "Upload New File:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 116)(6, "input", 117, 0);
    \u0275\u0275listener("change", function SchoolDashboardComponent_div_43_div_26_div_20_Template_input_change_6_listener($event) {
      \u0275\u0275restoreView(_r10);
      const team_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onFileSelected($event, team_r9));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 118);
    \u0275\u0275listener("click", function SchoolDashboardComponent_div_43_div_26_div_20_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r10);
      const fileInput_r14 = \u0275\u0275reference(7);
      return \u0275\u0275resetView(fileInput_r14.click());
    });
    \u0275\u0275text(9, "Choose File");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 51);
    \u0275\u0275text(11, "No file chosen");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const team_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", team_r9.files.length > 0);
  }
}
function SchoolDashboardComponent_div_43_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 104)(1, "div", 105)(2, "div")(3, "div", 106)(4, "h3", 107);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 108);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 109)(9, "span");
    \u0275\u0275text(10, "Category: ");
    \u0275\u0275elementStart(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(13, "span", 110);
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15, "Deadline: ");
    \u0275\u0275elementStart(16, "strong");
    \u0275\u0275text(17, "2024-04-15");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(18, "button", 111);
    \u0275\u0275listener("click", function SchoolDashboardComponent_div_43_div_26_Template_button_click_18_listener() {
      const team_r9 = \u0275\u0275restoreView(_r8).$implicit;
      return \u0275\u0275resetView(team_r9.expanded = !team_r9.expanded);
    });
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, SchoolDashboardComponent_div_43_div_26_div_20_Template, 12, 1, "div", 112);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const team_r9 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(team_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", team_r9.filesUploaded, " of ", team_r9.totalFilesRequired, " files ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(team_r9.category);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", team_r9.expanded ? "Collapse" : "Expand", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", team_r9.expanded);
  }
}
function SchoolDashboardComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h2", 73);
    \u0275\u0275text(2, "Upload Submissions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 74);
    \u0275\u0275text(4, "Upload submissions for different stages. File naming: [TeamName]_[StageName]");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 99)(6, "div", 100);
    \u0275\u0275text(7, "File Naming Format:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 101)(9, "div", 102);
    \u0275\u0275text(10, "Example: ");
    \u0275\u0275elementStart(11, "strong");
    \u0275\u0275text(12, "Team1_(Online Round 1)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 102);
    \u0275\u0275text(14, "Example: ");
    \u0275\u0275elementStart(15, "strong");
    \u0275\u0275text(16, "Team1_(Online Round 2)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 102);
    \u0275\u0275text(18, "Example: ");
    \u0275\u0275elementStart(19, "strong");
    \u0275\u0275text(20, "Team1_(Online Round 3)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 102);
    \u0275\u0275text(22, "Example: ");
    \u0275\u0275elementStart(23, "strong");
    \u0275\u0275text(24, "Team1_(Finale Round)");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "div", 76);
    \u0275\u0275template(26, SchoolDashboardComponent_div_43_div_26_Template, 21, 6, "div", 103);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(26);
    \u0275\u0275property("ngForOf", ctx_r3.teams);
  }
}
function SchoolDashboardComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h2", 73);
    \u0275\u0275text(2, "Download Competition Kits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 74);
    \u0275\u0275text(4, "Access all competition materials and resources");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 125)(6, "div", 126)(7, "div")(8, "h3", 127);
    \u0275\u0275text(9, "Competition Handbook");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 128);
    \u0275\u0275text(11, "Complete rules, guidelines, and competition overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 129);
    \u0275\u0275text(13, "PDF \u2022 2.5 MB");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 130);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 131);
    \u0275\u0275element(16, "path", 132);
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " Download ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "div", 126)(19, "div")(20, "h3", 127);
    \u0275\u0275text(21, "Teacher / Coordinator Kit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p", 128);
    \u0275\u0275text(23, "Resources for educators and coordinators");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 129);
    \u0275\u0275text(25, "ZIP \u2022 5.8 MB");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "button", 130);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 131);
    \u0275\u0275element(28, "path", 132);
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, " Download ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(30, "div", 126)(31, "div")(32, "h3", 127);
    \u0275\u0275text(33, "Task Briefs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p", 128);
    \u0275\u0275text(35, "Detailed task descriptions for all categories");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 129);
    \u0275\u0275text(37, "PDF \u2022 1.2 MB");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "button", 130);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(39, "svg", 131);
    \u0275\u0275element(40, "path", 132);
    \u0275\u0275elementEnd();
    \u0275\u0275text(41, " Download ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(42, "div", 126)(43, "div")(44, "h3", 127);
    \u0275\u0275text(45, "Submission Guidelines");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "p", 128);
    \u0275\u0275text(47, "How to prepare and submit entries");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span", 129);
    \u0275\u0275text(49, "PDF \u2022 0.8 MB");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "button", 130);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(51, "svg", 131);
    \u0275\u0275element(52, "path", 132);
    \u0275\u0275elementEnd();
    \u0275\u0275text(53, " Download ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(54, "div", 126)(55, "div")(56, "h3", 127);
    \u0275\u0275text(57, "Branding / Poster Pack");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "p", 128);
    \u0275\u0275text(59, "Marketing materials and promotional assets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "span", 129);
    \u0275\u0275text(61, "ZIP \u2022 15.3 MB");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "button", 130);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(63, "svg", 131);
    \u0275\u0275element(64, "path", 132);
    \u0275\u0275elementEnd();
    \u0275\u0275text(65, " Download ");
    \u0275\u0275elementEnd()()()();
  }
}
function SchoolDashboardComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h2", 73);
    \u0275\u0275text(2, "Messages & Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 74);
    \u0275\u0275text(4, "Stay updated with deadline reminders, approvals, and competition updates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 76)(6, "div", 133)(7, "div", 134)(8, "h3", 135);
    \u0275\u0275text(9, "Submission Deadline Reminder");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 136);
    \u0275\u0275text(11, "New");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "p", 137);
    \u0275\u0275text(13, "Your Trailblazers team submission is due in 5 days.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 52);
    \u0275\u0275text(15, "2024-03-10");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 133)(17, "div", 134)(18, "h3", 135);
    \u0275\u0275text(19, "Team Approved");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "p", 137);
    \u0275\u0275text(21, "Your Visioneers team has been approved for competition.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 52);
    \u0275\u0275text(23, "2024-03-08");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 133)(25, "div", 134)(26, "h3", 135);
    \u0275\u0275text(27, "Update Available");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "p", 137);
    \u0275\u0275text(29, "New competition guidelines are available for download.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 52);
    \u0275\u0275text(31, "2024-03-05");
    \u0275\u0275elementEnd()()()();
  }
}
function SchoolDashboardComponent_div_46_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 116)(1, "span", 146);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 147);
    \u0275\u0275listener("input", function SchoolDashboardComponent_div_46_div_9_Template_input_input_3_listener($event) {
      const idx_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.updateMember($event, idx_r17));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const idx_r17 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", idx_r17 === 0 ? "Team Lead" : "Member " + (idx_r17 + 1), ": ");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r3.getMemberName(idx_r17))("placeholder", idx_r17 === 0 ? "Team lead name (optional)" : "Student name (optional)");
  }
}
function SchoolDashboardComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 138)(1, "div", 139)(2, "h3", 140);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 141);
    \u0275\u0275text(5, "Category: ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 142);
    \u0275\u0275template(9, SchoolDashboardComponent_div_46_div_9_Template, 4, 3, "div", 143);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 144)(11, "button", 118);
    \u0275\u0275listener("click", function SchoolDashboardComponent_div_46_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeAddStudentModal());
    });
    \u0275\u0275text(12, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 145);
    \u0275\u0275listener("click", function SchoolDashboardComponent_div_46_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.saveStudents());
    });
    \u0275\u0275text(14, "Save Students");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r3.selectedTeam == null ? null : ctx_r3.selectedTeam.name, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.selectedTeam == null ? null : ctx_r3.selectedTeam.category);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(3, _c0));
  }
}
var SchoolDashboardComponent = class _SchoolDashboardComponent {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
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
    this.adminDocuments = [];
    this.selectedDocument = null;
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
      this.http.get(`${environment.apiUrl}/challenges/registration/${numId}`).subscribe({
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
    this.fetchAdminDocuments();
  }
  fetchAdminDocuments() {
    this.http.get(`${environment.apiUrl}/admin/documents`).subscribe({
      next: (docs) => {
        const allDocs = docs || [];
        this.adminDocuments = allDocs.filter((d) => d.category === "School Competitions");
      },
      error: (err) => console.error("Error fetching admin documents:", err)
    });
  }
  viewDocument(doc, event) {
    event.preventDefault();
    this.selectedDocument = doc;
  }
  getSafeUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  isPdf(url) {
    return url ? url.toLowerCase().endsWith(".pdf") : false;
  }
  isImage(url) {
    if (!url)
      return false;
    const lowerUrl = url.toLowerCase();
    return lowerUrl.endsWith(".jpg") || lowerUrl.endsWith(".jpeg") || lowerUrl.endsWith(".png") || lowerUrl.endsWith(".gif") || lowerUrl.endsWith(".webp");
  }
  isVideo(url) {
    if (!url)
      return false;
    const lowerUrl = url.toLowerCase();
    return lowerUrl.endsWith(".mp4") || lowerUrl.endsWith(".webm") || lowerUrl.endsWith(".ogg") || lowerUrl.endsWith(".mov");
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
      return new (t || _SchoolDashboardComponent)(\u0275\u0275directiveInject(DomSanitizer));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SchoolDashboardComponent, selectors: [["app-school-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 47, vars: 16, consts: [["fileInput", ""], [2, "background", "#FFFFFF", "border-bottom", "1px solid #E8E8E8", "padding", "16px 24px", "font-family", "'Poppins', 'Inter', sans-serif"], [2, "max-width", "1200px", "margin", "0 auto", "display", "flex", "align-items", "center", "justify-content", "space-between"], ["routerLink", "/open-challenges", 2, "display", "flex", "align-items", "center", "gap", "8px", "cursor", "pointer"], [2, "width", "32px", "height", "32px", "background", "#D32F2F", "border-radius", "8px", "display", "flex", "align-items", "center", "justify-content", "center", "color", "#FFFFFF", "font-weight", "900", "font-size", "18px"], [2, "font-size", "20px", "font-weight", "800", "color", "#111111", "letter-spacing", "-0.02em"], [1, "desktop-nav", 2, "display", "flex", "align-items", "center", "gap", "28px"], [2, "position", "relative", "display", "flex", "align-items", "center", "gap", "4px", "font-size", "14px", "font-weight", "500", "color", "#666666", "cursor", "pointer"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["d", "M19 9l-7 7-7-7"], ["href", "#", 2, "font-size", "14px", "font-weight", "500", "color", "#666666", "text-decoration", "none"], [2, "background", "#FAFAF9", "min-height", "100vh", "padding", "32px 24px", "font-family", "'Poppins', 'Inter', sans-serif"], [2, "max-width", "1000px", "margin", "0 auto"], ["routerLink", "/school-competitions", 2, "display", "flex", "align-items", "center", "gap", "8px", "font-size", "14px", "font-weight", "600", "color", "#D32F2F", "text-decoration", "none", "margin-bottom", "24px"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["d", "M19 12H5M12 19l-7-7 7-7"], [2, "font-size", "32px", "font-weight", "800", "color", "#000000", "margin", "0 0 8px 0", "letter-spacing", "-0.01em"], [2, "font-size", "15px", "color", "#666666", "margin", "0 0 36px 0", "line-height", "1.6"], [1, "tabs-nav", 2, "display", "flex", "border-bottom", "1px solid #E5E7EB", "margin-bottom", "32px", "gap", "32px"], [1, "tab-btn", 3, "click"], [4, "ngIf"], ["class", "modal-overlay", 4, "ngIf"], [2, "display", "grid", "grid-template-columns", "repeat(auto-fit, minmax(200px, 1fr))", "gap", "20px", "margin-bottom", "32px"], [1, "metric-card"], [1, "metric-label"], [1, "metric-val"], [2, "background", "#FFF5F5", "border", "1px solid #FEE2E2", "border-radius", "12px", "padding", "24px 32px", "display", "flex", "align-items", "center", "justify-content", "space-between", "margin-bottom", "32px", "flex-wrap", "wrap", "gap", "16px"], [2, "font-size", "15px", "font-weight", "700", "color", "#111111", "margin-bottom", "4px"], [2, "font-size", "14px", "color", "#666666"], [2, "display", "flex", "align-items", "center", "gap", "16px"], [2, "background", "#FFFFFF", "border", "1px solid #EF4444", "color", "#EF4444", "border-radius", "20px", "padding", "4px 12px", "font-size", "12px", "font-weight", "700"], [2, "color", "#EF4444", "font-weight", "700", "font-size", "15px", "display", "flex", "align-items", "center", "gap", "6px"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["cx", "12", "cy", "12", "r", "10"], ["d", "M12 6v6l4 2"], [2, "background", "#FFFFFF", "border", "1px solid #E8E8E8", "border-radius", "12px", "padding", "28px 32px", "margin-bottom", "32px", "box-shadow", "0 1px 4px rgba(0,0,0,0.02)"], [2, "font-size", "16px", "font-weight", "700", "color", "#111111", "margin", "0 0 20px 0"], [2, "display", "flex", "gap", "12px", "flex-wrap", "wrap"], ["class", "category-badge", 4, "ngFor", "ngForOf"], ["style", "font-size:14px; color:#999;", 4, "ngIf"], [2, "font-size", "16px", "font-weight", "700", "color", "#111111", "margin", "0 0 20px 0", "display", "flex", "align-items", "center", "gap", "8px"], ["d", "M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"], ["d", "M14 3v5h5M16 13H8M16 17H8M10 9H8"], ["style", "font-size: 14px; color: #666666; font-style: italic;", 4, "ngIf"], ["style", "list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px;", 4, "ngIf"], ["style", "margin-top: 24px; border: 1px solid #e5e7eb; border-radius: 12px; padding: 20px; background: #fafafa;", 4, "ngIf"], [2, "background", "#FFFFFF", "border", "1px solid #E8E8E8", "border-radius", "12px", "padding", "28px 32px", "box-shadow", "0 1px 4px rgba(0,0,0,0.02)"], ["d", "M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"], [2, "display", "flex", "flex-direction", "column", "gap", "14px"], [2, "background", "#FFF5F5", "border", "1px solid #FEE2E2", "border-radius", "8px", "padding", "18px 20px", "display", "flex", "justify-content", "space-between", "align-items", "flex-start", "gap", "16px"], [2, "font-size", "14px", "font-weight", "700", "color", "#111111", "margin-bottom", "4px"], [2, "font-size", "13px", "color", "#666666"], [2, "font-size", "12px", "color", "#999999", "font-weight", "500"], [2, "background", "#FAFAFA", "border", "1px solid #EBEBEB", "border-radius", "8px", "padding", "18px 20px", "display", "flex", "justify-content", "space-between", "align-items", "flex-start", "gap", "16px"], [1, "category-badge"], [2, "font-size", "14px", "color", "#999"], [2, "font-size", "14px", "color", "#666666", "font-style", "italic"], [2, "list-style", "none", "padding", "0", "margin", "0", "display", "flex", "flex-direction", "column", "gap", "12px"], ["style", "background: #FAFAFA; border: 1px solid #E5E7EB; border-radius: 8px; padding: 12px 16px;", 4, "ngFor", "ngForOf"], [2, "background", "#FAFAFA", "border", "1px solid #E5E7EB", "border-radius", "8px", "padding", "12px 16px"], ["href", "javascript:void(0)", 2, "display", "flex", "align-items", "center", "gap", "8px", "color", "#D32F2F", "text-decoration", "none", "font-size", "14px", "font-weight", "600", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], [2, "margin-top", "24px", "border", "1px solid #e5e7eb", "border-radius", "12px", "padding", "20px", "background", "#fafafa"], [2, "display", "flex", "justify-content", "space-between", "align-items", "center", "margin-bottom", "16px"], [2, "margin", "0", "font-size", "16px", "font-weight", "700", "color", "#111111"], [2, "background", "transparent", "border", "none", "font-size", "24px", "cursor", "pointer", "color", "#6b7280", "line-height", "1", 3, "click"], ["width", "100%", "height", "600px", 2, "border", "none", "border-radius", "8px", 3, "src"], [2, "max-width", "100%", "border-radius", "8px", 3, "src"], ["controls", "", "width", "100%", 2, "border-radius", "8px"], ["type", "video/mp4", 3, "src"], [2, "text-align", "center", "padding", "40px 20px"], [2, "color", "#666666", "margin-bottom", "16px"], ["target", "_blank", 2, "display", "inline-block", "padding", "10px 20px", "background", "#D32F2F", "color", "white", "border-radius", "6px", "text-decoration", "none", "font-size", "14px", "font-weight", "600", 3, "href"], [2, "font-size", "20px", "font-weight", "800", "color", "#111111", "margin", "0 0 8px 0"], [2, "font-size", "14px", "color", "#666666", "margin", "0 0 24px 0"], ["style", "text-align: center; padding: 48px; color: #AAAAAA; font-size: 14px; font-style: italic;", 4, "ngIf"], [2, "display", "flex", "flex-direction", "column", "gap", "16px"], ["style", "background: #FFFFFF; border: 1px solid #E0E0E0; border-radius: 12px; padding: 24px 28px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);", 4, "ngFor", "ngForOf"], [2, "text-align", "center", "padding", "48px", "color", "#AAAAAA", "font-size", "14px", "font-style", "italic"], [2, "background", "#FFFFFF", "border", "1px solid #E0E0E0", "border-radius", "12px", "padding", "24px 28px", "box-shadow", "0 1px 3px rgba(0,0,0,0.04)"], [2, "display", "flex", "align-items", "center", "justify-content", "space-between", "gap", "16px", "flex-wrap", "wrap"], [2, "font-size", "17px", "font-weight", "700", "color", "#111111", "margin", "0 0 6px 0"], [2, "font-size", "13px", "color", "#555555", "margin-bottom", "4px"], [2, "color", "#D32F2F", "font-weight", "600"], [2, "font-size", "13px", "color", "#555555", "margin-bottom", "6px"], [2, "background", "#D32F2F", "color", "#FFFFFF", "border-radius", "5px", "padding", "3px 10px", "font-size", "11px", "font-weight", "700", "text-transform", "uppercase", "letter-spacing", "0.05em"], [2, "display", "flex", "align-items", "center", "gap", "8px", "flex-wrap", "wrap"], [2, "display", "flex", "align-items", "center", "gap", "6px", "background", "#FFFFFF", "border", "1px solid #D1D5DB", "border-radius", "7px", "padding", "8px 14px", "font-size", "13px", "font-weight", "500", "color", "#111111", "cursor", "pointer", "font-family", "inherit", "transition", "background 0.15s", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["x1", "23", "y1", "11", "x2", "17", "y2", "11"], ["x1", "20", "y1", "8", "x2", "20", "y2", "14"], [2, "display", "flex", "align-items", "center", "gap", "6px", "background", "#FFFFFF", "border", "1px solid #D1D5DB", "border-radius", "7px", "padding", "8px 14px", "font-size", "13px", "font-weight", "500", "color", "#111111", "cursor", "pointer", "font-family", "inherit", "transition", "background 0.15s"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], [2, "background", "#FFFFFF", "border", "1px solid #E8E8E8", "border-radius", "12px", "padding", "24px 28px", "margin-bottom", "24px"], [2, "font-size", "13px", "font-weight", "700", "color", "#111111", "margin-bottom", "12px"], [2, "display", "grid", "grid-template-columns", "1fr 1fr", "gap", "12px", "font-size", "13px", "color", "#666666"], [2, "border", "1px solid #E5E7EB", "padding", "10px 14px", "border-radius", "6px", "background", "#FAFAFA"], ["style", "background: #FFFFFF; border: 1px solid #E8E8E8; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,0.02);", 4, "ngFor", "ngForOf"], [2, "background", "#FFFFFF", "border", "1px solid #E8E8E8", "border-radius", "12px", "overflow", "hidden", "box-shadow", "0 1px 4px rgba(0,0,0,0.02)"], [2, "padding", "24px 32px", "display", "flex", "align-items", "center", "justify-content", "space-between", "border-bottom", "1px solid #F3F4F6", "flex-wrap", "wrap", "gap", "16px"], [2, "display", "flex", "align-items", "center", "gap", "8px", "margin-bottom", "4px"], [2, "font-size", "18px", "font-weight", "700", "color", "#111111", "margin", "0"], [2, "background", "#F3F4F6", "border-radius", "12px", "padding", "2px 8px", "font-size", "11px", "font-weight", "600", "color", "#666666"], [2, "display", "flex", "align-items", "center", "gap", "12px", "font-size", "13px", "color", "#666666"], [2, "width", "4px", "height", "4px", "border-radius", "50%", "background", "#CCCCCC"], [1, "action-btn", 3, "click"], ["style", "padding: 24px 32px; background: #FAFAFA;", 4, "ngIf"], [2, "padding", "24px 32px", "background", "#FAFAFA"], ["style", "margin-bottom: 20px;", 4, "ngIf"], [2, "font-size", "13px", "font-weight", "700", "color", "#333333", "margin-bottom", "8px"], [2, "display", "flex", "align-items", "center", "gap", "12px"], ["type", "file", 2, "display", "none", 3, "change"], [1, "action-btn", 2, "background", "#F3F4F6", "color", "#333333", 3, "click"], [2, "margin-bottom", "20px"], [2, "display", "flex", "flex-direction", "column", "gap", "8px"], ["style", "background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 6px; padding: 10px 14px; display: flex; align-items: center; justify-content: space-between;", 4, "ngFor", "ngForOf"], [2, "background", "#FFFFFF", "border", "1px solid #E5E7EB", "border-radius", "6px", "padding", "10px 14px", "display", "flex", "align-items", "center", "justify-content", "space-between"], [2, "font-size", "13px", "color", "#111111", "font-weight", "500"], [2, "background", "none", "border", "none", "color", "#EF4444", "cursor", "pointer", "font-size", "13px", "font-weight", "600", 3, "click"], [2, "display", "grid", "grid-template-columns", "repeat(auto-fit, minmax(280px, 1fr))", "gap", "20px"], [1, "kit-card", 2, "display", "flex", "flex-direction", "column", "justify-content", "space-between"], [2, "font-size", "16px", "font-weight", "700", "color", "#111111", "margin", "0 0 6px 0"], [2, "font-size", "13px", "color", "#666666", "margin", "0 0 16px 0"], [2, "font-size", "12px", "color", "#999999", "font-weight", "600", "text-transform", "uppercase"], [1, "kit-red-btn", 2, "margin-top", "20px", "width", "100%"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "3", 2, "margin-right", "4px"], ["d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"], [2, "background", "#FAFAFA", "border", "1px solid #EBEBEB", "border-radius", "12px", "padding", "24px 32px", "display", "flex", "flex-direction", "column", "justify-content", "space-between"], [2, "display", "flex", "align-items", "center", "justify-content", "space-between", "margin-bottom", "12px", "width", "100%"], [2, "font-size", "16px", "font-weight", "700", "color", "#111111", "margin", "0"], [2, "background", "#D32F2F", "color", "#FFFFFF", "border-radius", "6px", "padding", "2px 8px", "font-size", "11px", "font-weight", "700", "text-transform", "uppercase"], [2, "font-size", "13.5px", "color", "#666666", "margin", "0 0 16px 0", "line-height", "1.5"], [1, "modal-overlay"], [1, "modal-content"], [2, "font-size", "18px", "font-weight", "700", "color", "#111111", "margin-top", "0", "margin-bottom", "4px"], [2, "font-size", "13px", "color", "#888", "margin", "0 0 20px 0"], [2, "display", "flex", "flex-direction", "column", "gap", "12px", "margin-bottom", "24px"], ["style", "display: flex; align-items: center; gap: 12px;", 4, "ngFor", "ngForOf"], [2, "display", "flex", "justify-content", "flex-end", "gap", "12px"], [1, "action-btn", 2, "background", "#D32F2F", "color", "white", 3, "click"], [2, "font-size", "13px", "font-weight", "600", "color", "#666666", "width", "80px", "flex-shrink", "0"], ["type", "text", 2, "flex", "1", "border", "1px solid #DDD", "border-radius", "6px", "padding", "8px 12px", "font-size", "13.5px", "outline", "none", 3, "input", "value", "placeholder"]], template: function SchoolDashboardComponent_Template(rf, ctx) {
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
        \u0275\u0275template(41, SchoolDashboardComponent_div_41_Template, 81, 8, "div", 20)(42, SchoolDashboardComponent_div_42_Template, 8, 2, "div", 20)(43, SchoolDashboardComponent_div_43_Template, 27, 1, "div", 20)(44, SchoolDashboardComponent_div_44_Template, 66, 0, "div", 20)(45, SchoolDashboardComponent_div_45_Template, 32, 0, "div", 20);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SchoolDashboardComponent, { className: "SchoolDashboardComponent", filePath: "src\\app\\pages\\school-dashboard\\school-dashboard.component.ts", lineNumber: 674 });
})();
export {
  SchoolDashboardComponent
};
//# sourceMappingURL=chunk-75752ZSV.js.map
