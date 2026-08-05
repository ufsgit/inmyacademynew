import {
  CommonModule,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-C72BQOBI.js";

// src/app/pages/mastery-battles-dashboard/mastery-battles-dashboard.component.ts
function MasteryBattlesDashboardComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 14)(2, "div", 15)(3, "h3", 16);
    \u0275\u0275text(4, "Participant Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17)(6, "label");
    \u0275\u0275text(7, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 17)(11, "label");
    \u0275\u0275text(12, "Selected Battle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 17)(16, "label");
    \u0275\u0275text(17, "Registration ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 18);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 15)(21, "h3", 16);
    \u0275\u0275text(22, "Competition Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 17)(24, "label");
    \u0275\u0275text(25, "Entry Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 19);
    \u0275\u0275text(27, "Pending Submission");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 17)(29, "label");
    \u0275\u0275text(30, "Phase 1 Deadline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p");
    \u0275\u0275text(32, "2024-05-20");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 17)(34, "label");
    \u0275\u0275text(35, "Mentorship Access");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 20);
    \u0275\u0275text(37, "Available Now");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 17)(39, "label");
    \u0275\u0275text(40, "Evaluation Phase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "p", 21);
    \u0275\u0275text(42, "Phase 1: Project Intake");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "div", 22)(44, "h3", 16);
    \u0275\u0275text(45, "Latest Updates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 23)(47, "h4");
    \u0275\u0275text(48, "Welcome to Mastery Battles!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "p");
    \u0275\u0275text(50, "Your payment of \xA325 has been confirmed. You can now access the resources and prepare your Phase 1 entry.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 24)(52, "h4");
    \u0275\u0275text(53, "Mentorship Sessions Opening");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "p");
    \u0275\u0275text(55, "Keep an eye on the messages tab for instructions on booking your expert feedback sessions.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.participantName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.selectedChallenge);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.registrationId);
  }
}
function MasteryBattlesDashboardComponent_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 15)(2, "h3", 16);
    \u0275\u0275text(3, "Mastery Battle Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 25)(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "This is a multi-phase competition designed to test your advanced skills, problem-solving abilities, and practical application. Prove your mastery against top participants globally.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 25)(10, "h4");
    \u0275\u0275text(11, "Competition Phases");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ul")(13, "li");
    \u0275\u0275text(14, "\u2022 ");
    \u0275\u0275elementStart(15, "strong");
    \u0275\u0275text(16, "Phase 1 (Intake):");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " Submit your detailed project/presentation based on the brief.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "li");
    \u0275\u0275text(19, "\u2022 ");
    \u0275\u0275elementStart(20, "strong");
    \u0275\u0275text(21, "Phase 2 (Evaluation):");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " Expert judges review all entries and select the top candidates.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "li");
    \u0275\u0275text(24, "\u2022 ");
    \u0275\u0275elementStart(25, "strong");
    \u0275\u0275text(26, "Phase 3 (Live Q&A):");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Finalists participate in a live virtual defense of their project.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 25)(29, "h4");
    \u0275\u0275text(30, "Judging Criteria");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "ul")(32, "li");
    \u0275\u0275text(33, "\u2022 Technical proficiency and accuracy (35%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "li");
    \u0275\u0275text(35, "\u2022 Innovation and problem-solving (35%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "li");
    \u0275\u0275text(37, "\u2022 Professional presentation and defense (30%)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 26)(39, "h4");
    \u0275\u0275text(40, "Prizes & Recognition");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "ul")(42, "li");
    \u0275\u0275text(43, "\u2022 1st Place: \xA32,500 + Mastery Trophy + Mentorship + Certificate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "li");
    \u0275\u0275text(45, "\u2022 2nd Place: \xA31,000 + Certificate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "li");
    \u0275\u0275text(47, "\u2022 3rd Place: \xA3500 + Certificate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Your Registered Battle: ", ctx_r0.selectedChallenge, "");
  }
}
function MasteryBattlesDashboardComponent_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 15)(2, "h3", 16);
    \u0275\u0275text(3, "Upload Phase 1 Entry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 27)(5, "label");
    \u0275\u0275text(6, "Project Presentation/Video (MP4, MOV, WebM)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 28)(8, "p");
    \u0275\u0275text(9, "Drag and drop or click to upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "Max 500MB, 3-5 minutes (minimum 1080p)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 27)(13, "label");
    \u0275\u0275text(14, "Supporting Documentation (PDF)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 28)(16, "p");
    \u0275\u0275text(17, "Drag and drop or click to upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19, "Business plan, research paper, or code documentation (Max 50MB)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 27)(21, "label");
    \u0275\u0275text(22, "Executive Summary (500 characters max)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "textarea", 29);
    \u0275\u0275elementStart(24, "span", 30);
    \u0275\u0275text(25, "Help judges understand the core value of your submission instantly.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "button", 31);
    \u0275\u0275text(27, "Submit Phase 1 Entry");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function MasteryBattlesDashboardComponent_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 15)(2, "h3", 16);
    \u0275\u0275text(3, "Messages & Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 32)(5, "div", 33)(6, "h4");
    \u0275\u0275text(7, "Welcome to Mastery Battles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 34);
    \u0275\u0275text(9, "New");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11, "Your registration is fully confirmed. Good luck with your preparation!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 35);
    \u0275\u0275text(13, "Today, 9:00 AM");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 36)(15, "h4");
    \u0275\u0275text(16, "Phase 1 Deadline Approaching");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p");
    \u0275\u0275text(18, "You have exactly 30 days remaining to submit your Phase 1 project. Make sure to review all guidelines.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 35);
    \u0275\u0275text(20, "April 20, 2024");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
}
var MasteryBattlesDashboardComponent = class _MasteryBattlesDashboardComponent {
  constructor() {
    this.activeTab = "home";
    this.participantName = "Jordan Smith";
    this.selectedChallenge = "Mastery Battle Challenge";
    this.registrationId = "MB-2024-78934";
  }
  ngOnInit() {
    const name = localStorage.getItem("openChallengeParticipantName");
    const challenge = localStorage.getItem("openChallengeSelectedChallenge");
    const regId = localStorage.getItem("masteryBattleRegistrationId");
    if (name)
      this.participantName = name;
    if (challenge)
      this.selectedChallenge = challenge;
    if (regId)
      this.registrationId = regId;
  }
  static {
    this.\u0275fac = function MasteryBattlesDashboardComponent_Factory(t) {
      return new (t || _MasteryBattlesDashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MasteryBattlesDashboardComponent, selectors: [["app-mastery-battles-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 36, vars: 12, consts: [[1, "dashboard-container"], [1, "dashboard-header"], [1, "dashboard-title"], [1, "dashboard-subtitle"], [1, "dashboard-nav"], [1, "nav-tab", 3, "click"], ["width", "18", "height", "18", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24"], ["d", "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"], ["d", "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"], ["d", "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"], ["d", "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"], [1, "dashboard-content"], [4, "ngIf"], [1, "dashboard-footer"], [1, "home-grid"], [1, "dashboard-card"], [1, "card-title"], [1, "info-group"], [1, "text-red"], [1, "badge", "badge-orange"], [1, "badge", "badge-green"], [2, "font-size", "18px", "font-weight", "700"], [1, "dashboard-card", 2, "margin-top", "24px"], [1, "update-item"], [1, "update-item", 2, "border", "none", "margin-bottom", "0"], [1, "overview-section"], [1, "overview-section", 2, "border", "none", "margin-bottom", "0"], [1, "upload-section"], [1, "upload-box"], ["placeholder", "Provide a high-level summary of your project..."], [1, "help-text"], [1, "btn-primary", 2, "width", "100%"], [1, "message-card"], [2, "display", "flex", "justify-content", "space-between", "align-items", "flex-start"], [1, "badge", "badge-red-solid"], [1, "message-date"], [1, "message-card", 2, "margin-bottom", "0"]], template: function MasteryBattlesDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Mastery Battles Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, "Welcome to your SkillStorm Mastery Battles space. Prepare your submission, track judging progress, and manage your journey here.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "button", 5);
        \u0275\u0275listener("click", function MasteryBattlesDashboardComponent_Template_button_click_7_listener() {
          return ctx.activeTab = "home";
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(8, "svg", 6);
        \u0275\u0275element(9, "path", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " Home ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(11, "button", 5);
        \u0275\u0275listener("click", function MasteryBattlesDashboardComponent_Template_button_click_11_listener() {
          return ctx.activeTab = "overview";
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(12, "svg", 6);
        \u0275\u0275element(13, "path", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " Overview ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(15, "button", 5);
        \u0275\u0275listener("click", function MasteryBattlesDashboardComponent_Template_button_click_15_listener() {
          return ctx.activeTab = "upload";
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(16, "svg", 6);
        \u0275\u0275element(17, "path", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275text(18, " Upload ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(19, "button", 5);
        \u0275\u0275listener("click", function MasteryBattlesDashboardComponent_Template_button_click_19_listener() {
          return ctx.activeTab = "messages";
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(20, "svg", 6);
        \u0275\u0275element(21, "path", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275text(22, " Messages ");
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(23, "div", 11);
        \u0275\u0275template(24, MasteryBattlesDashboardComponent_ng_container_24_Template, 56, 3, "ng-container", 12)(25, MasteryBattlesDashboardComponent_ng_container_25_Template, 48, 1, "ng-container", 12)(26, MasteryBattlesDashboardComponent_ng_container_26_Template, 28, 0, "ng-container", 12)(27, MasteryBattlesDashboardComponent_ng_container_27_Template, 21, 0, "ng-container", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 13)(29, "span");
        \u0275\u0275text(30, "Organized by ");
        \u0275\u0275elementStart(31, "strong");
        \u0275\u0275text(32, "In My Academy Ltd (UK)");
        \u0275\u0275elementEnd();
        \u0275\u0275text(33, " - Project-based learning, reimagined.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "span");
        \u0275\u0275text(35, "\xA9 2026 SkillStorm. All rights reserved.");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275classProp("active", ctx.activeTab === "home");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("active", ctx.activeTab === "overview");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("active", ctx.activeTab === "upload");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("active", ctx.activeTab === "messages");
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.activeTab === "home");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "overview");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "upload");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "messages");
      }
    }, dependencies: [CommonModule, NgIf], styles: ['\n\n.dashboard-container[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 40px 20px;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    Helvetica,\n    Arial,\n    sans-serif;\n  color: #333;\n}\n.dashboard-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 30px;\n}\n.dashboard-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #000;\n  margin: 0 0 8px 0;\n}\n.dashboard-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  margin: 0;\n}\n.dashboard-nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n  margin-bottom: 30px;\n}\n.nav-tab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 24px;\n  border-radius: 50px;\n  border: 1px solid transparent;\n  background: transparent;\n  color: #666;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.nav-tab[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.nav-tab.active[_ngcontent-%COMP%] {\n  background: #2D3192;\n  border: 1px solid #2D3192;\n  color: #fff;\n  box-shadow: 0 4px 6px rgba(45, 49, 146, 0.2);\n}\n.dashboard-content[_ngcontent-%COMP%] {\n  margin-bottom: 60px;\n}\n.home-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n}\n.dashboard-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e5e5e5;\n  border-radius: 8px;\n  padding: 24px;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #000;\n  margin: 0 0 20px 0;\n  padding-bottom: 12px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.info-group[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.info-group[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.info-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  color: #666;\n  margin-bottom: 4px;\n}\n.info-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 500;\n  color: #000;\n}\n.text-red[_ngcontent-%COMP%] {\n  color: #d32f2f !important;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.badge-orange[_ngcontent-%COMP%] {\n  background: #f97316;\n  color: #fff;\n}\n.badge-green[_ngcontent-%COMP%] {\n  background: #22c55e;\n  color: #fff;\n}\n.badge-red-solid[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: #fff;\n  padding: 2px 8px;\n  font-size: 11px;\n}\n.update-item[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f0f0f0;\n  padding-bottom: 16px;\n  margin-bottom: 16px;\n}\n.update-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #000;\n}\n.update-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: #666;\n}\n.overview-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  border-bottom: 1px solid #f0f0f0;\n  padding-bottom: 24px;\n}\n.overview-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #000;\n  margin: 0 0 8px 0;\n}\n.overview-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #555;\n  line-height: 1.6;\n  margin: 0;\n}\n.overview-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.overview-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #555;\n  line-height: 1.6;\n  margin-bottom: 4px;\n}\n.upload-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.upload-section[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: #000;\n  margin-bottom: 8px;\n}\n.upload-box[_ngcontent-%COMP%] {\n  border: 1px dashed #ccc;\n  background: #fafafa;\n  border-radius: 8px;\n  padding: 30px;\n  text-align: center;\n  cursor: pointer;\n}\n.upload-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  font-size: 14px;\n  color: #555;\n}\n.upload-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n}\ntextarea[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100px;\n  border: 1px solid #e5e5e5;\n  border-radius: 8px;\n  padding: 12px;\n  font-family: inherit;\n  font-size: 14px;\n  resize: vertical;\n}\n.help-text[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: #888;\n  margin-top: 4px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 14px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #b91c1c;\n}\n.message-card[_ngcontent-%COMP%] {\n  border: 1px solid #e5e5e5;\n  border-radius: 8px;\n  padding: 16px;\n  margin-bottom: 16px;\n}\n.message-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 15px;\n  font-weight: 600;\n  color: #000;\n}\n.message-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  font-size: 14px;\n  color: #555;\n}\n.message-date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n}\n.dashboard-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 12px;\n  color: #888;\n  border-top: 1px solid #e5e5e5;\n  padding-top: 24px;\n  display: flex;\n  justify-content: space-between;\n}\n@media (max-width: 768px) {\n  .dashboard-container[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n  }\n  .dashboard-nav[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n  .home-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .dashboard-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n    align-items: center;\n  }\n}\n/*# sourceMappingURL=mastery-battles-dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MasteryBattlesDashboardComponent, { className: "MasteryBattlesDashboardComponent", filePath: "src\\app\\pages\\mastery-battles-dashboard\\mastery-battles-dashboard.component.ts", lineNumber: 11 });
})();
export {
  MasteryBattlesDashboardComponent
};
//# sourceMappingURL=chunk-WMMROB63.js.map
