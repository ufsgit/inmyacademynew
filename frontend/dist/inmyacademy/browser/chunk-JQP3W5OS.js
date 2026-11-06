import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-I5HLQJ4G.js";
import {
  environment
} from "./chunk-NTES7WD5.js";
import {
  HttpClient
} from "./chunk-QGS4RBVK.js";
import {
  CommonModule,
  DecimalPipe,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-EW7BAGJT.js";

// src/app/pages/leaderboard/leaderboard.component.ts
function LeaderboardComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "button", 4);
    \u0275\u0275listener("click", function LeaderboardComponent_div_15_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setLeaderboardPhase("Online Phase"));
    });
    \u0275\u0275text(2, "Online Phase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 4);
    \u0275\u0275listener("click", function LeaderboardComponent_div_15_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setLeaderboardPhase("Grand Finale"));
    });
    \u0275\u0275text(4, "Grand Finale");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("active-phase", ctx_r1.leaderboardPhase === "Online Phase");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active-phase", ctx_r1.leaderboardPhase === "Grand Finale");
  }
}
function LeaderboardComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "button", 4);
    \u0275\u0275listener("click", function LeaderboardComponent_div_16_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setLeaderboardPhase("Online Shortlisting"));
    });
    \u0275\u0275text(2, "Online Shortlisting");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 4);
    \u0275\u0275listener("click", function LeaderboardComponent_div_16_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setLeaderboardPhase("Grand Finale Knockout"));
    });
    \u0275\u0275text(4, "Grand Finale Knockout");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("active-phase", ctx_r1.leaderboardPhase === "Online Shortlisting");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active-phase", ctx_r1.leaderboardPhase === "Grand Finale Knockout");
  }
}
function LeaderboardComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 12);
  }
}
function LeaderboardComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "label", 14);
    \u0275\u0275text(2, "Select Professional Track");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 15);
    \u0275\u0275twoWayListener("ngModelChange", function LeaderboardComponent_div_18_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.leaderboardCategory, $event) || (ctx_r1.leaderboardCategory = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function LeaderboardComponent_div_18_Template_select_change_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fetchLeaderboardData());
    });
    \u0275\u0275elementStart(4, "option", 16);
    \u0275\u0275text(5, "All Tracks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 17);
    \u0275\u0275text(7, "Diplomatic Policy Leadership");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 18);
    \u0275\u0275text(9, "Legal Advocacy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 19);
    \u0275\u0275text(11, "Advanced Research");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 20);
    \u0275\u0275text(13, "Digital Media Strategy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 21);
    \u0275\u0275text(15, "Entrepreneurial Vision");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 22);
    \u0275\u0275text(17, "Project Management");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 23);
    \u0275\u0275text(19, "Global Communication");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 24);
    \u0275\u0275text(21, "Digital Systems");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 25);
    \u0275\u0275text(23, "Investment Banking");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.leaderboardCategory);
  }
}
function LeaderboardComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "label", 14);
    \u0275\u0275text(2, "Select Challenge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 15);
    \u0275\u0275twoWayListener("ngModelChange", function LeaderboardComponent_div_19_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.leaderboardCategory, $event) || (ctx_r1.leaderboardCategory = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function LeaderboardComponent_div_19_Template_select_change_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fetchLeaderboardData());
    });
    \u0275\u0275elementStart(4, "option", 16);
    \u0275\u0275text(5, "All Challenges");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 26);
    \u0275\u0275text(7, "Teen Entrepreneur Challenge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 27);
    \u0275\u0275text(9, "Eco Heroes Innovation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 28);
    \u0275\u0275text(11, "Digital Story Showcase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 29);
    \u0275\u0275text(13, "Young Leadership Voice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 30);
    \u0275\u0275text(15, "Tech Innovation Lab");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.leaderboardCategory);
  }
}
function LeaderboardComponent_th_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "TEAMS");
    \u0275\u0275elementEnd();
  }
}
function LeaderboardComponent_tr_36_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.TeamsCount);
  }
}
function LeaderboardComponent_tr_36_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1, "\u2605 Champion");
    \u0275\u0275elementEnd();
  }
}
function LeaderboardComponent_tr_36_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1, "\u2605 Runner-Up");
    \u0275\u0275elementEnd();
  }
}
function LeaderboardComponent_tr_36_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1, "\u2605 3rd Place");
    \u0275\u0275elementEnd();
  }
}
function LeaderboardComponent_tr_36_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1, "\u2605 Finalist");
    \u0275\u0275elementEnd();
  }
}
function LeaderboardComponent_tr_36_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function LeaderboardComponent_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 32);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 33);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, LeaderboardComponent_tr_36_td_7_Template, 2, 1, "td", 34);
    \u0275\u0275elementStart(8, "td", 35);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 36);
    \u0275\u0275template(12, LeaderboardComponent_tr_36_span_12_Template, 2, 0, "span", 37)(13, LeaderboardComponent_tr_36_span_13_Template, 2, 0, "span", 38)(14, LeaderboardComponent_tr_36_span_14_Template, 2, 0, "span", 39)(15, LeaderboardComponent_tr_36_span_15_Template, 2, 0, "span", 40)(16, LeaderboardComponent_tr_36_span_16_Template, 2, 0, "span", 41);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", row_r6.Rank, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.ParticipantName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.Country);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeLeaderboardTab === "school");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 10, row_r6.Score));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", row_r6.Award === "Champion");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r6.Award === "Runner-Up");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r6.Award === "3rd Place");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r6.Award === "Finalist");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !row_r6.Award);
  }
}
function LeaderboardComponent_tr_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 48);
    \u0275\u0275text(2, "No records found.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r1.activeLeaderboardTab === "school" ? 6 : 5);
  }
}
var LeaderboardComponent = class _LeaderboardComponent {
  constructor(http) {
    this.http = http;
    this.activeLeaderboardTab = "school";
    this.leaderboardFormat = "SCHOOL";
    this.leaderboardPhase = "Online Phase";
    this.leaderboardCategory = "All";
    this.leaderboardData = [];
  }
  ngOnInit() {
    this.switchLeaderboardTab(this.activeLeaderboardTab);
  }
  switchLeaderboardTab(tab) {
    this.activeLeaderboardTab = tab;
    if (tab === "school") {
      this.leaderboardFormat = "SCHOOL";
      this.leaderboardPhase = "Online Phase";
      this.leaderboardCategory = "All";
    } else if (tab === "mastery") {
      this.leaderboardFormat = "MASTERY";
      this.leaderboardPhase = "Online Shortlisting";
      this.leaderboardCategory = "All";
    } else if (tab === "open") {
      this.leaderboardFormat = "OPEN";
      this.leaderboardPhase = "";
      this.leaderboardCategory = "All";
    }
    this.fetchLeaderboardData();
  }
  fetchLeaderboardData() {
    let url = `${environment.apiUrl}/leaderboard?format=${encodeURIComponent(this.leaderboardFormat)}`;
    if (this.leaderboardPhase) {
      url += `&phase=${encodeURIComponent(this.leaderboardPhase)}`;
    }
    if (this.leaderboardCategory) {
      url += `&category=${encodeURIComponent(this.leaderboardCategory)}`;
    }
    this.http.get(url).subscribe({
      next: (data) => {
        if (data && data.success) {
          this.leaderboardData = data.data;
        }
      },
      error: (err) => console.error("Error fetching leaderboard data:", err)
    });
  }
  setLeaderboardPhase(phase) {
    this.leaderboardPhase = phase;
    this.fetchLeaderboardData();
  }
  static {
    this.\u0275fac = function LeaderboardComponent_Factory(t) {
      return new (t || _LeaderboardComponent)(\u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LeaderboardComponent, selectors: [["app-leaderboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 38, vars: 15, consts: [[1, "leaderboard-page-container"], [1, "leaderboard-content-wrapper"], [1, "leaderboard-header"], [1, "leaderboard-main-tabs"], [3, "click"], [1, "leaderboard-filters"], ["class", "phase-buttons", 4, "ngIf"], ["class", "category-select-wrapper", 4, "ngIf"], [1, "table-container"], [1, "data-table"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "phase-buttons"], [1, "category-select-wrapper"], [1, "category-label"], [3, "ngModelChange", "change", "ngModel"], ["value", "All"], ["value", "Diplomatic Policy Leadership"], ["value", "Legal Advocacy"], ["value", "Advanced Research"], ["value", "Digital Media Strategy"], ["value", "Entrepreneurial Vision"], ["value", "Project Management"], ["value", "Global Communication"], ["value", "Digital Systems"], ["value", "Investment Banking"], ["value", "Teen Entrepreneur Challenge"], ["value", "Eco Heroes Innovation"], ["value", "Digital Story Showcase"], ["value", "Young Leadership Voice"], ["value", "Tech Innovation Lab"], [1, "rank-col"], [1, "name-col"], [1, "country-col"], ["class", "teams-col", 4, "ngIf"], [1, "score-col"], [1, "award-col"], ["class", "award-badge champion", 4, "ngIf"], ["class", "award-badge runner-up", 4, "ngIf"], ["class", "award-badge third-place", 4, "ngIf"], ["class", "award-badge finalist", 4, "ngIf"], ["class", "no-award", 4, "ngIf"], [1, "teams-col"], [1, "award-badge", "champion"], [1, "award-badge", "runner-up"], [1, "award-badge", "third-place"], [1, "award-badge", "finalist"], [1, "no-award"], [1, "empty-state"]], template: function LeaderboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "main", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
        \u0275\u0275text(4, "SkillStorm Global Leaderboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6, "Track top performers across all three competition formats. Real-time rankings, live updates, and global recognition for excellence.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 3)(8, "button", 4);
        \u0275\u0275listener("click", function LeaderboardComponent_Template_button_click_8_listener() {
          return ctx.switchLeaderboardTab("school");
        });
        \u0275\u0275text(9, "School Competitions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "button", 4);
        \u0275\u0275listener("click", function LeaderboardComponent_Template_button_click_10_listener() {
          return ctx.switchLeaderboardTab("mastery");
        });
        \u0275\u0275text(11, "Mastery Battles");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "button", 4);
        \u0275\u0275listener("click", function LeaderboardComponent_Template_button_click_12_listener() {
          return ctx.switchLeaderboardTab("open");
        });
        \u0275\u0275text(13, "Open Challenges");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 5);
        \u0275\u0275template(15, LeaderboardComponent_div_15_Template, 5, 4, "div", 6)(16, LeaderboardComponent_div_16_Template, 5, 4, "div", 6)(17, LeaderboardComponent_div_17_Template, 1, 0, "div", 6)(18, LeaderboardComponent_div_18_Template, 24, 1, "div", 7)(19, LeaderboardComponent_div_19_Template, 16, 1, "div", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 8)(21, "table", 9)(22, "thead")(23, "tr")(24, "th");
        \u0275\u0275text(25, "RANK");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "th");
        \u0275\u0275text(27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "th");
        \u0275\u0275text(29, "COUNTRY");
        \u0275\u0275elementEnd();
        \u0275\u0275template(30, LeaderboardComponent_th_30_Template, 2, 0, "th", 10);
        \u0275\u0275elementStart(31, "th");
        \u0275\u0275text(32, "TOTAL POINTS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "th");
        \u0275\u0275text(34, "AWARD");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(35, "tbody");
        \u0275\u0275template(36, LeaderboardComponent_tr_36_Template, 17, 12, "tr", 11)(37, LeaderboardComponent_tr_37_Template, 3, 1, "tr", 10);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275classProp("active", ctx.activeLeaderboardTab === "school");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeLeaderboardTab === "mastery");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeLeaderboardTab === "open");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.activeLeaderboardTab === "school");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeLeaderboardTab === "mastery");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeLeaderboardTab === "open");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeLeaderboardTab === "mastery");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeLeaderboardTab === "open");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.activeLeaderboardTab === "school" ? "SCHOOL" : "PARTICIPANT");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.activeLeaderboardTab === "school");
        \u0275\u0275advance(6);
        \u0275\u0275property("ngForOf", ctx.leaderboardData);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.leaderboardData.length === 0);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.leaderboard-page-container[_ngcontent-%COMP%] {\n  background-color: #f8fafc;\n  min-height: calc(100vh - 140px);\n  padding: 60px 24px;\n}\n.leaderboard-content-wrapper[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  background-color: #ffffff;\n  border-radius: 12px;\n  padding: 40px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);\n}\n.leaderboard-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 40px;\n}\n.leaderboard-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 16px 0;\n}\n.leaderboard-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #64748b;\n  max-width: 700px;\n  margin: 0 auto;\n  line-height: 1.5;\n}\n.leaderboard-main-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 32px;\n  border-bottom: 1px solid #e2e8f0;\n  margin-bottom: 32px;\n}\n.leaderboard-main-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  padding: 12px 16px;\n  font-size: 15px;\n  font-weight: 600;\n  color: #64748b;\n  cursor: pointer;\n  position: relative;\n  transition: color 0.2s;\n}\n.leaderboard-main-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n}\n.leaderboard-main-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.leaderboard-main-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -1px;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background-color: #ef4444;\n}\n.leaderboard-filters[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.phase-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.phase-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 13.5px;\n  cursor: pointer;\n  border: 1px solid #e2e8f0;\n  background-color: #f8fafc;\n  color: #475569;\n  transition: all 0.2s;\n}\n.phase-buttons[_ngcontent-%COMP%]   button.active-phase[_ngcontent-%COMP%] {\n  background-color: #ef4444;\n  color: white;\n  border-color: #ef4444;\n  box-shadow: 0 2px 4px rgba(239, 68, 68, 0.2);\n}\n.category-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 6px;\n}\n.category-select-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 10px 36px 10px 16px;\n  border-radius: 8px;\n  border: 1px solid #cbd5e1;\n  background-color: white;\n  color: #334155;\n  font-weight: 500;\n  font-size: 14px;\n  outline: none;\n  min-width: 180px;\n  cursor: pointer;\n  appearance: none;\n  background-image: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%236b7280%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E);\n  background-repeat: no-repeat;\n  background-position: right 12px top 50%;\n  background-size: 10px auto;\n}\n.table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 700;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  border-bottom: 2px solid #f1f5f9;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  border-bottom: 1px solid #f1f5f9;\n  vertical-align: middle;\n}\n.rank-col[_ngcontent-%COMP%] {\n  font-weight: 800;\n  color: #0f172a;\n  font-size: 15px;\n}\n.name-col[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #334155;\n  font-size: 15px;\n}\n.country-col[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 14.5px;\n}\n.teams-col[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #475569;\n  font-weight: 500;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4), .data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(5) {\n  text-align: center;\n}\n.score-col[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 700;\n  color: #ef4444;\n  font-size: 16px;\n}\n.award-col[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.award-badge[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: 9999px;\n  font-size: 13px;\n  font-weight: 700;\n  display: inline-flex;\n  align-items: center;\n  white-space: nowrap;\n}\n.award-badge.champion[_ngcontent-%COMP%] {\n  background: #fef08a;\n  color: #854d0e;\n}\n.award-badge.runner-up[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #334155;\n}\n.award-badge.third-place[_ngcontent-%COMP%] {\n  background: #ffedd5;\n  color: #9a3412;\n}\n.award-badge.finalist[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.no-award[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-weight: 600;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px !important;\n  color: #64748b;\n  font-size: 15px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=leaderboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LeaderboardComponent, { className: "LeaderboardComponent", filePath: "src\\app\\pages\\leaderboard\\leaderboard.component.ts", lineNumber: 14 });
})();
export {
  LeaderboardComponent
};
//# sourceMappingURL=chunk-JQP3W5OS.js.map
