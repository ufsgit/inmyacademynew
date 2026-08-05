import {
  OPEN_CHALLENGES
} from "./chunk-QQUX5SO3.js";
import {
  RegistrationFormComponent
} from "./chunk-5YUNPUHC.js";
import "./chunk-Z5MBKUDO.js";
import "./chunk-CEXANK6Z.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-RK72NEAB.js";
import "./chunk-PLXL2LZV.js";
import {
  CommonModule,
  inject,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-C72BQOBI.js";

// src/app/components/challenge-info-cards/challenge-info-cards.component.ts
var ChallengeInfoCardsComponent = class _ChallengeInfoCardsComponent {
  constructor() {
    this.ageGroup = "";
    this.entryFee = 0;
    this.format = "";
  }
  static {
    this.\u0275fac = function ChallengeInfoCardsComponent_Factory(t) {
      return new (t || _ChallengeInfoCardsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChallengeInfoCardsComponent, selectors: [["app-challenge-info-cards"]], inputs: { ageGroup: "ageGroup", entryFee: "entryFee", format: "format" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 3, consts: [[2, "display", "flex", "gap", "16px", "max-width", "860px", "margin", "0 auto 40px auto", "width", "100%", "padding", "0 24px"], [1, "info-card"], [1, "card-title"], [1, "card-value"]], template: function ChallengeInfoCardsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275text(3, "Age Group");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 1)(7, "div", 2);
        \u0275\u0275text(8, "Entry Fee");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 3);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 1)(12, "div", 2);
        \u0275\u0275text(13, "Format");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 3);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.ageGroup);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("\xA3", ctx.entryFee, "");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.format);
      }
    }, dependencies: [CommonModule], styles: ["\n\n.info-card[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border: 1px solid #E8E8E8;\n  border-radius: 12px;\n  padding: 32px 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);\n  flex: 1;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  color: #111111;\n  margin-bottom: 8px;\n  letter-spacing: 0.01em;\n}\n.card-value[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n  color: #666666;\n}\n/*# sourceMappingURL=challenge-info-cards.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChallengeInfoCardsComponent, { className: "ChallengeInfoCardsComponent", filePath: "src\\app\\components\\challenge-info-cards\\challenge-info-cards.component.ts", lineNumber: 52 });
})();

// src/app/components/competition-steps/competition-steps.component.ts
function CompetitionStepsComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    const $index_r2 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", $index_r2 + 1, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", step_r1, " ");
  }
}
var CompetitionStepsComponent = class _CompetitionStepsComponent {
  constructor() {
    this.slug = "";
    this.entryFee = 1;
    this.steps = [];
  }
  ngOnChanges(changes) {
    if (changes["slug"] || changes["entryFee"]) {
      this.generateSteps();
    }
  }
  generateSteps() {
    let mediaType = "speech video";
    if (this.slug === "creative-storytelling-certificate") {
      mediaType = "storytelling video";
    } else if (this.slug === "entrepreneurship-and-innovation-accelerator") {
      mediaType = "pitch video";
    } else if (this.slug === "app-design-and-logic-certification") {
      mediaType = "app design video";
    } else if (this.slug === "quickchef-culinary-mastery-award") {
      mediaType = "cooking video";
    } else if (this.slug === "diplomatic-policy-leadership") {
      mediaType = "policy pitch or debate video";
    } else if (this.slug === "legal-advocacy-professional") {
      mediaType = "mock-trial or advocacy video";
    } else if (this.slug === "advanced-research-publication") {
      mediaType = "research abstract or presentation";
    } else if (this.slug === "digital-media-strategy") {
      mediaType = "digital media piece or article";
    } else if (this.slug === "entrepreneurial-visionary-accelerator") {
      mediaType = "business pitch video";
    } else if (this.slug === "executive-project-management") {
      mediaType = "project plan or presentation";
    } else if (this.slug === "global-communication-mastery") {
      mediaType = "communication analysis video";
    } else if (this.slug === "digital-systems-architecture") {
      mediaType = "system design architecture plan";
    } else if (this.slug === "investment-banking-elite") {
      mediaType = "financial model or presentation";
    }
    this.steps = [
      `Register and complete the \xA3${this.entryFee} entry payment`,
      "Receive access to the submission dashboard",
      `Upload your ${mediaType}`,
      "Receive your personal QR support code",
      "Share your code to gather Support Likes"
    ];
  }
  static {
    this.\u0275fac = function CompetitionStepsComponent_Factory(t) {
      return new (t || _CompetitionStepsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompetitionStepsComponent, selectors: [["app-competition-steps"]], inputs: { slug: "slug", entryFee: "entryFee" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 7, vars: 0, consts: [[2, "padding", "80px 24px", "background", "#F8F8F8", "border-top", "1px solid #EBEBEB", "font-family", "'Kumbh Sans',sans-serif"], [2, "max-width", "1000px", "margin", "0 auto"], [2, "font-size", "28.8px", "font-weight", "700", "color", "#000000", "margin", "0 0 32px 0", "font-family", "'Gilmer', 'DM Sans', sans-serif"], [2, "display", "flex", "flex-direction", "column", "gap", "16px"], [2, "background", "#FFFFFF", "border", "1.6px solid rgba(117,119,131,0.21)", "border-radius", "14px", "padding", "18px 24px", "display", "flex", "align-items", "center", "gap", "20px", "box-shadow", "none"], [2, "width", "40px", "height", "40px", "border-radius", "8px", "background", "#638EE6", "display", "flex", "align-items", "center", "justify-content", "center", "color", "#ffffff", "font-weight", "700", "font-size", "18px", "flex-shrink", "0"], [2, "font-size", "18px", "font-weight", "400", "color", "#020101", "line-height", "1.5"]], template: function CompetitionStepsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "h2", 2);
        \u0275\u0275text(3, "How the Competition Works");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3);
        \u0275\u0275repeaterCreate(5, CompetitionStepsComponent_For_6_Template, 5, 2, "div", 4, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.steps);
      }
    }, dependencies: [CommonModule], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompetitionStepsComponent, { className: "CompetitionStepsComponent", filePath: "src\\app\\components\\competition-steps\\competition-steps.component.ts", lineNumber: 29 });
})();

// src/app/components/scoring-system/scoring-system.component.ts
function ScoringSystemComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 9);
    \u0275\u0275element(1, "span", 10);
    \u0275\u0275elementStart(2, "span", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const crit_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(crit_r1);
  }
}
var ScoringSystemComponent = class _ScoringSystemComponent {
  constructor() {
    this.criteria = [];
  }
  static {
    this.\u0275fac = function ScoringSystemComponent_Factory(t) {
      return new (t || _ScoringSystemComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScoringSystemComponent, selectors: [["app-scoring-system"]], inputs: { criteria: "criteria" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 38, vars: 0, consts: [[2, "padding", "80px 24px", "background", "#FFFFFF", "border-top", "1px solid #EBEBEB", "font-family", "'Kumbh Sans',sans-serif"], [2, "max-width", "900px", "margin", "0 auto"], [2, "font-size", "28.8px", "font-weight", "700", "color", "#000000", "margin", "0 0 32px 0", "font-family", "'Gilmer', 'DM Sans', sans-serif"], [2, "background", "#FFFFFF", "border", "1.6px solid rgba(117,119,131,0.21)", "border-radius", "20px", "padding", "40px 44px", "box-shadow", "none"], [2, "background", "#EBEBEB", "border-radius", "12px", "padding", "20px 24px", "text-align", "center", "font-size", "18px", "font-weight", "600", "color", "#020101", "margin-bottom", "40px"], [2, "display", "grid", "grid-template-columns", "1fr 1fr", "gap", "48px"], [2, "font-size", "21px", "font-weight", "700", "color", "#000000", "margin", "0 0 16px 0", "font-family", "'Gilmer', 'DM Sans', sans-serif"], [2, "font-size", "18px", "color", "#757783", "font-weight", "400", "margin", "0 0 20px 0"], [2, "list-style", "none", "padding", "0", "margin", "0", "display", "flex", "flex-direction", "column", "gap", "16px"], [2, "display", "flex", "align-items", "flex-start", "gap", "12px"], [2, "width", "8px", "height", "8px", "border-radius", "50%", "background", "#D41101", "flex-shrink", "0", "margin-top", "8px", "display", "inline-block"], [2, "font-size", "18px", "color", "#020101", "font-weight", "400", "line-height", "1.6"]], template: function ScoringSystemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "h2", 2);
        \u0275\u0275text(3, "Scoring System");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3)(5, "div", 4);
        \u0275\u0275text(6, " Final Score = ( Merit Score \xD7 0.80 ) + ( Normalized Likes \xD7 0.20 ) ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 5)(8, "div")(9, "h3", 6);
        \u0275\u0275text(10, "Merit Score - 80%");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p", 7);
        \u0275\u0275text(12, "Judges evaluate:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "ul", 8);
        \u0275\u0275repeaterCreate(14, ScoringSystemComponent_For_15_Template, 4, 1, "li", 9, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div")(17, "h3", 6);
        \u0275\u0275text(18, "Support Likes - 20%");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "p", 7);
        \u0275\u0275text(20, "\xA0");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "ul", 8)(22, "li", 9);
        \u0275\u0275element(23, "span", 10);
        \u0275\u0275elementStart(24, "span", 11);
        \u0275\u0275text(25, "Each \xA31 contribution = 1 like");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "li", 9);
        \u0275\u0275element(27, "span", 10);
        \u0275\u0275elementStart(28, "span", 11);
        \u0275\u0275text(29, "Maximum 50 support likes counted");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "li", 9);
        \u0275\u0275element(31, "span", 10);
        \u0275\u0275elementStart(32, "span", 11);
        \u0275\u0275text(33, "Normalized to fairness");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "li", 9);
        \u0275\u0275element(35, "span", 10);
        \u0275\u0275elementStart(36, "span", 11);
        \u0275\u0275text(37, "Share your QR code");
        \u0275\u0275elementEnd()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275repeater(ctx.criteria);
      }
    }, dependencies: [CommonModule], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScoringSystemComponent, { className: "ScoringSystemComponent", filePath: "src\\app\\components\\scoring-system\\scoring-system.component.ts", lineNumber: 52 });
})();

// src/app/components/rewards/rewards.component.ts
var RewardsComponent = class _RewardsComponent {
  constructor() {
    this.rewards = [];
  }
  static {
    this.\u0275fac = function RewardsComponent_Factory(t) {
      return new (t || _RewardsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RewardsComponent, selectors: [["app-rewards"]], inputs: { rewards: "rewards" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 38, vars: 6, consts: [[2, "padding", "80px 24px", "background", "#F8F8F8", "border-top", "1px solid #EBEBEB", "font-family", "'Kumbh Sans',sans-serif"], [2, "max-width", "1000px", "margin", "0 auto"], [2, "font-size", "28.8px", "font-weight", "700", "color", "#000000", "margin", "0 0 40px 0", "font-family", "'Gilmer', 'DM Sans', sans-serif", "text-align", "left"], [2, "display", "grid", "grid-template-columns", "repeat(auto-fit, minmax(280px, 1fr))", "gap", "24px"], [2, "background", "#FFFFFF", "border", "1.6px solid rgba(117,119,131,0.21)", "border-radius", "20px", "padding", "40px 32px", "display", "flex", "flex-direction", "column", "align-items", "flex-start", "text-align", "left", "box-shadow", "none"], ["width", "48", "height", "48", "viewBox", "0 0 64 64", "fill", "none", 2, "margin-bottom", "20px"], ["cx", "32", "cy", "32", "r", "32", "fill", "#FFFBEB"], ["d", "M44 20H40V16H24V20H20C17.79 20 16 21.79 16 24V28C16 32.42 19.58 36 24 36H26.34C28.2 38.38 31.02 40 34.34 40H29.66C32.98 40 35.8 38.38 37.66 36H40C44.42 36 48 32.42 48 28V24C48 21.79 46.21 20 44 20ZM20 28V24H24V28.68C21.69 28.14 20 28 20 28ZM44 28C44 28 42.31 28.14 40 28.68V24H44V28ZM32 40C29.79 40 28 41.79 28 44V46H36V44C36 41.79 34.21 40 32 40ZM28 48H36V50H28V48Z", "fill", "#F59E0B"], [2, "font-size", "21px", "font-weight", "700", "color", "#000000", "margin-bottom", "8px", "font-family", "'Gilmer', 'DM Sans', sans-serif"], [2, "font-size", "16px", "color", "#757783", "font-weight", "400", "line-height", "1.5"], ["cx", "32", "cy", "32", "r", "32", "fill", "#EFF6FF"], ["d", "M22 14L28 28H36L42 14", "stroke", "#EF4444", "stroke-width", "3", "stroke-linecap", "round"], ["d", "M26 14L32 28L38 14", "stroke", "#3B82F6", "stroke-width", "3", "stroke-linecap", "round"], ["cx", "32", "cy", "36", "r", "12", "fill", "#E5E7EB", "stroke", "#9CA3AF", "stroke-width", "2"], ["x", "32", "y", "40", "font-family", "'Inter', sans-serif", "font-weight", "900", "font-size", "12", "fill", "#4B5563", "text-anchor", "middle"], ["x", "22", "y", "18", "width", "20", "height", "28", "rx", "2", "fill", "#FFFFFF", "stroke", "#D97706", "stroke-width", "2"], ["x1", "26", "y1", "24", "x2", "38", "y2", "24", "stroke", "#F59E0B", "stroke-width", "2", "stroke-linecap", "round"], ["x1", "26", "y1", "29", "x2", "38", "y2", "29", "stroke", "#F59E0B", "stroke-width", "2", "stroke-linecap", "round"], ["x1", "26", "y1", "34", "x2", "34", "y2", "34", "stroke", "#F59E0B", "stroke-width", "2", "stroke-linecap", "round"], ["cx", "32", "cy", "40", "r", "3", "fill", "#D97706"], ["d", "M30 43L32 46L34 43", "stroke", "#D97706", "stroke-width", "2", "stroke-linejoin", "round"]], template: function RewardsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "h2", 2);
        \u0275\u0275text(3, "What You Can Win");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3)(5, "div", 4);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(6, "svg", 5);
        \u0275\u0275element(7, "circle", 6)(8, "path", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(9, "div", 8);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 9);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 4);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(14, "svg", 5);
        \u0275\u0275element(15, "circle", 10)(16, "path", 11)(17, "path", 12)(18, "circle", 13);
        \u0275\u0275elementStart(19, "text", 14);
        \u0275\u0275text(20, "2");
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(21, "div", 8);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 9);
        \u0275\u0275text(24);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 4);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(26, "svg", 5);
        \u0275\u0275element(27, "circle", 6)(28, "rect", 15)(29, "line", 16)(30, "line", 17)(31, "line", 18)(32, "circle", 19)(33, "path", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(34, "div", 8);
        \u0275\u0275text(35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "div", 9);
        \u0275\u0275text(37);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.rewards[0] || "\xA3100 Prize");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.rewards[1] || "Champion Prize");
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.rewards[2] || "Recognition");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.rewards[3] || "Global Acknowledgment");
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(ctx.rewards[4] || "Certificate");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.rewards[5] || "Official Award");
      }
    }, dependencies: [CommonModule], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RewardsComponent, { className: "RewardsComponent", filePath: "src\\app\\components\\rewards\\rewards.component.ts", lineNumber: 56 });
})();

// src/app/pages/challenge-details/challenge-details.component.ts
function ChallengeDetailsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
    \u0275\u0275text(3, "Challenge Not Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 3);
    \u0275\u0275text(5, "The challenge you are looking for does not exist.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 4);
    \u0275\u0275listener("click", function ChallengeDetailsComponent_Conditional_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(7, " Go Back to Challenges ");
    \u0275\u0275elementEnd()()();
  }
}
function ChallengeDetailsComponent_Conditional_1_Conditional_1_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 49);
    \u0275\u0275element(1, "span", 73);
    \u0275\u0275elementStart(2, "span", 74);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const detail_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(detail_r3);
  }
}
function ChallengeDetailsComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 39)(1, "div", 40)(2, "h1", 41);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 42);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 43);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "app-challenge-info-cards", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "section", 45)(10, "div", 40)(11, "h2", 46);
    \u0275\u0275text(12, "The Challenge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 47);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ul", 48);
    \u0275\u0275repeaterCreate(16, ChallengeDetailsComponent_Conditional_1_Conditional_1_For_17_Template, 4, 1, "li", 49, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "div", 50);
    \u0275\u0275elementStart(19, "p", 51);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(21, "app-competition-steps", 52)(22, "app-scoring-system", 53);
    \u0275\u0275elementStart(23, "section", 54)(24, "div", 55)(25, "h2", 56);
    \u0275\u0275text(26, "Support Recognition");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 57)(28, "div", 58);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(29, "svg", 59);
    \u0275\u0275element(30, "circle", 60)(31, "path", 61)(32, "path", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(33, "span", 63);
    \u0275\u0275text(34, "Growing Support");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p", 64);
    \u0275\u0275text(36, "First milestone of engagement");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 58);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(38, "svg", 59);
    \u0275\u0275element(39, "circle", 65)(40, "path", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(41, "span", 63);
    \u0275\u0275text(42, "Rising Support");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "p", 64);
    \u0275\u0275text(44, "Gaining community momentum");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 58);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(46, "svg", 59);
    \u0275\u0275element(47, "circle", 67)(48, "path", 68)(49, "path", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(50, "span", 63);
    \u0275\u0275text(51, "Community Star");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "p", 64);
    \u0275\u0275text(53, "Recognized by the peers");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 58);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(55, "svg", 59);
    \u0275\u0275element(56, "circle", 70)(57, "path", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(58, "span", 63);
    \u0275\u0275text(59, "Featured Entry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "p", 64);
    \u0275\u0275text(61, "Top-tier support achievement");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275element(62, "app-rewards", 72);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.challenge.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.challenge.tagline, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.challenge.description, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ageGroup", ctx_r1.challenge.ageGroup)("entryFee", ctx_r1.challenge.entryFee)("format", ctx_r1.challenge.format);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getIntroText(ctx_r1.challenge.slug), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.challenge.challengeDetails);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getOutroText(ctx_r1.challenge.slug), " ");
    \u0275\u0275advance();
    \u0275\u0275property("slug", ctx_r1.challenge.slug)("entryFee", ctx_r1.challenge.entryFee);
    \u0275\u0275advance();
    \u0275\u0275property("criteria", ctx_r1.challenge.scoringCriteria);
    \u0275\u0275advance(40);
    \u0275\u0275property("rewards", ctx_r1.challenge.rewards);
  }
}
function ChallengeDetailsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275template(1, ChallengeDetailsComponent_Conditional_1_Conditional_1_Template, 63, 12);
    \u0275\u0275element(2, "app-registration-form", 6);
    \u0275\u0275elementStart(3, "footer", 7)(4, "div", 8)(5, "div", 9)(6, "div", 10)(7, "div", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 12);
    \u0275\u0275element(9, "path", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "div")(11, "p", 14);
    \u0275\u0275text(12, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 15);
    \u0275\u0275text(14, "IN MY ACADEMY LTD 71-75, Shelton Street, Covent Garden, London");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 16)(16, "div", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 12);
    \u0275\u0275element(18, "path", 17)(19, "path", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "div")(21, "p", 14);
    \u0275\u0275text(22, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p", 19);
    \u0275\u0275text(24, "info@inmyacademy.com");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 16)(26, "div", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 12);
    \u0275\u0275element(28, "path", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(29, "div")(30, "p", 14);
    \u0275\u0275text(31, "Call");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p", 19);
    \u0275\u0275text(33, "+44 7748 416224");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(34, "div", 21)(35, "div", 22)(36, "div", 23)(37, "div")(38, "p", 24);
    \u0275\u0275text(39, " We're more than a platform\u2014we're a global powerhouse redefining education with interactive, real-world mastery that excites, engages, and empowers you to achieve the impossible. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 25)(41, "span", 26);
    \u0275\u0275text(42, "Follow on:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "a", 27);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(44, "svg", 28);
    \u0275\u0275element(45, "path", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(46, "a", 27);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(47, "svg", 28);
    \u0275\u0275element(48, "path", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(49, "a", 27);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(50, "svg", 28);
    \u0275\u0275element(51, "path", 31);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(52, "div")(53, "h4", 32);
    \u0275\u0275text(54, "Quick Links");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "ul", 33)(56, "li")(57, "a", 34);
    \u0275\u0275text(58, "About");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "li")(60, "a", 34);
    \u0275\u0275text(61, "Course");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "li")(63, "a", 34);
    \u0275\u0275text(64, "Contact Us");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "li")(66, "a", 34);
    \u0275\u0275text(67, "Blog");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(68, "div")(69, "h4", 32);
    \u0275\u0275text(70, "SkillStorm Global Competitions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "ul", 33)(72, "li")(73, "a", 35);
    \u0275\u0275text(74, "Global Open Challenges");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "li")(76, "a", 36);
    \u0275\u0275text(77, "Global Mastery Battles");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "li")(79, "a", 37);
    \u0275\u0275text(80, "Global School Competitions");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(81, "div", 38);
    \u0275\u0275text(82, " \xA9 2025 All Rights Reserved ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(1, !ctx_r1.registerOnly ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("entryFee", ctx_r1.challenge.entryFee)("challengeName", ctx_r1.challenge.title)("category", ctx_r1.challenge.entryFee === 25 ? "Global Mastery Battles" : "Global Open Challenges");
  }
}
var ChallengeDetailsComponent = class _ChallengeDetailsComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.notFound = false;
    this.registerOnly = false;
  }
  ngOnInit() {
    this.route.queryParamMap.subscribe((qp) => {
      this.registerOnly = qp.get("register") === "true";
    });
    this.route.paramMap.subscribe((params) => {
      const slug = params.get("slug");
      const found = OPEN_CHALLENGES.find((c) => c.slug === slug);
      if (found) {
        this.challenge = found;
        this.notFound = false;
        window.scrollTo(0, 0);
      } else {
        this.notFound = true;
      }
    });
  }
  getIntroText(slug) {
    if (this.challenge && this.challenge.entryFee === 25) {
      return `For Phase 1 assessment, prepare your project submission. Examples of acceptable entries include:`;
    }
    switch (slug) {
      case "creative-storytelling-certificate":
        return "Create a 1-2 minute video sharing your original tale. Examples include:";
      case "global-oratory-and-communication-certificate":
        return "Record a short speech on a topic that matters to you. Examples include:";
      case "entrepreneurship-and-innovation-accelerator":
        return "Pitch your startup or product idea in a sharp video. Examples include:";
      case "app-design-and-logic-certification":
        return "Present your app concept and design ideas in a short video. Examples include:";
      case "quickchef-culinary-mastery-award":
        return "Capture your cooking process and dish presentation. Examples include:";
      default:
        return "Prepare your submission. Examples include:";
    }
  }
  getOutroText(slug) {
    if (this.challenge && this.challenge.entryFee === 25) {
      return `Ensure your submission demonstrates clear structure, depth of reasoning, and conforms to all rules.`;
    }
    switch (slug) {
      case "creative-storytelling-certificate":
        return "Your story should show imagination, clear narration, and creative structure.";
      case "global-oratory-and-communication-certificate":
        return "Your speech should show clarity, confidence, and strong communication.";
      case "entrepreneurship-and-innovation-accelerator":
        return "Your pitch should clearly explain the problem, solution, and key features.";
      case "app-design-and-logic-certification":
        return "Your presentation should explain the app functionality and user experience.";
      case "quickchef-culinary-mastery-award":
        return "Your submission should show cooking techniques, time management, and final plating.";
      default:
        return "Your submission should show high quality, creativity, and follow all instructions.";
    }
  }
  goBack() {
    if (this.challenge && this.challenge.entryFee === 25) {
      this.router.navigate(["/skillstorm/mastery-battles"]);
    } else {
      this.router.navigate(["/skillstorm/open-challenges"]);
    }
  }
  static {
    this.\u0275fac = function ChallengeDetailsComponent_Factory(t) {
      return new (t || _ChallengeDetailsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChallengeDetailsComponent, selectors: [["app-challenge-details"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [[2, "min-height", "100vh", "background", "#FDF4F4", "display", "flex", "align-items", "center", "justify-content", "center", "font-family", "'Kumbh Sans',sans-serif", "padding", "0 24px"], [2, "text-align", "center", "max-width", "420px"], [2, "font-size", "22px", "font-weight", "800", "color", "#111111", "margin-bottom", "8px"], [2, "font-size", "15px", "color", "#666666", "margin-bottom", "32px"], [2, "background", "#D32F2F", "color", "#fff", "border", "none", "border-radius", "8px", "padding", "12px 28px", "font-weight", "700", "font-size", "15px", "cursor", "pointer", 3, "click"], [2, "background", "#FDF4F4", "font-family", "'Kumbh Sans',sans-serif", "min-height", "100vh", "color", "#020101"], [3, "entryFee", "challengeName", "category"], [2, "background", "#FFFFFF", "font-family", "'Kumbh Sans',sans-serif"], [2, "max-width", "1000px", "margin", "0 auto", "padding", "60px 24px 0 24px"], [2, "background", "#2C3587", "border-radius", "20px", "padding", "36px 40px", "display", "flex", "flex-wrap", "wrap", "gap", "32px", "align-items", "center", "justify-content", "space-between", "margin-bottom", "60px"], [2, "display", "flex", "align-items", "center", "gap", "16px", "flex", "1", "min-width", "220px"], [2, "width", "48px", "height", "48px", "background", "#ffffff", "border-radius", "50%", "display", "flex", "align-items", "center", "justify-content", "center", "flex-shrink", "0"], ["width", "20", "height", "20", "fill", "#2C3587", "viewBox", "0 0 20 20"], ["fill-rule", "evenodd", "d", "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z", "clip-rule", "evenodd"], [2, "color", "rgba(255,255,255,0.7)", "font-size", "14px", "font-weight", "500", "margin", "0 0 4px 0"], [2, "color", "#ffffff", "font-size", "14px", "font-weight", "600", "margin", "0", "line-height", "1.4"], [2, "display", "flex", "align-items", "center", "gap", "16px", "flex", "1", "min-width", "200px"], ["d", "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"], ["d", "M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"], [2, "color", "#ffffff", "font-size", "14px", "font-weight", "600", "margin", "0"], ["d", "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"], [2, "background", "#F9F9F9", "border-top", "1px solid #EBEBEB", "padding", "48px 24px 24px 24px"], [2, "max-width", "960px", "margin", "0 auto"], [1, "footer-links-grid", 2, "display", "grid", "grid-template-columns", "2fr 1fr 1.5fr", "gap", "48px", "margin-bottom", "40px"], [2, "font-size", "14px", "color", "#666666", "line-height", "1.8", "margin", "0 0 20px 0"], [2, "display", "flex", "align-items", "center", "gap", "12px"], [2, "font-size", "13px", "font-weight", "700", "color", "#111111"], ["href", "#", 2, "width", "30px", "height", "30px", "border-radius", "50%", "background", "#2D3192", "color", "#fff", "display", "flex", "align-items", "center", "justify-content", "center", "text-decoration", "none"], ["width", "14", "height", "14", "fill", "currentColor", "viewBox", "0 0 24 24"], ["d", "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"], ["d", "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.119 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"], ["d", "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"], [2, "font-size", "14px", "font-weight", "700", "color", "#111111", "margin", "0 0 16px 0"], [2, "list-style", "none", "padding", "0", "margin", "0", "display", "flex", "flex-direction", "column", "gap", "10px"], ["href", "#", 2, "font-size", "14px", "color", "#666666", "text-decoration", "none", "font-weight", "500"], ["routerLink", "/skillstorm/open-challenges", 2, "font-size", "14px", "color", "#666666", "text-decoration", "none", "font-weight", "500"], ["routerLink", "/skillstorm/mastery-battles", 2, "font-size", "14px", "color", "#666666", "text-decoration", "none", "font-weight", "500"], ["routerLink", "/skillstorm/school-competitions", 2, "font-size", "14px", "color", "#666666", "text-decoration", "none", "font-weight", "500"], [2, "border-top", "1px solid #EBEBEB", "padding-top", "20px", "font-size", "13px", "color", "#999999"], [2, "background", "linear-gradient(to bottom, #FDF4F4, #FFFFFF)", "padding", "80px 24px 48px 24px", "text-align", "center"], [2, "max-width", "900px", "margin", "0 auto"], [2, "font-size", "40px", "font-weight", "600", "color", "#000000", "margin", "0 0 16px 0", "line-height", "1.2", "letter-spacing", "-0.01em", "font-family", "'Gilmer', 'DM Sans', sans-serif"], [2, "font-size", "18px", "font-weight", "400", "color", "#020101", "margin", "0 0 22px 0"], [2, "font-size", "18px", "font-weight", "400", "color", "#757783", "margin", "0 auto 44px auto", "max-width", "700px", "line-height", "1.7"], [3, "ageGroup", "entryFee", "format"], [2, "background", "#FFFFFF", "padding", "64px 24px"], [2, "font-size", "28.8px", "font-weight", "700", "color", "#000000", "margin", "0 0 16px 0", "font-family", "'Gilmer', 'DM Sans', sans-serif"], [2, "font-size", "18px", "color", "#757783", "font-weight", "400", "margin", "0 0 16px 0", "line-height", "1.7"], [2, "list-style", "none", "padding", "0", "margin", "0 0 0 0", "display", "flex", "flex-direction", "column", "gap", "12px"], [2, "display", "flex", "align-items", "flex-start", "gap", "12px"], [2, "height", "24px"], [2, "font-size", "18px", "color", "#757783", "line-height", "1.7", "margin", "0", "font-weight", "400"], [3, "slug", "entryFee"], [3, "criteria"], [2, "background", "#FFFFFF", "padding", "80px 24px", "border-top", "1px solid #EBEBEB"], [2, "max-width", "1000px", "margin", "0 auto"], [2, "font-family", "'Gilmer', 'DM Sans', sans-serif", "font-size", "28.8px", "font-weight", "700", "color", "#000000", "margin", "0 0 40px 0", "text-align", "left"], [2, "display", "grid", "grid-template-columns", "repeat(auto-fit, minmax(200px, 1fr))", "gap", "24px"], [2, "background", "#FFFFFF", "border", "1.6px solid rgba(117,119,131,0.21)", "border-radius", "20px", "padding", "32px 24px", "display", "flex", "flex-direction", "column", "align-items", "flex-start", "text-align", "left", "box-shadow", "none"], ["width", "48", "height", "48", "viewBox", "0 0 64 64", "fill", "none", 2, "margin-bottom", "20px"], ["cx", "32", "cy", "32", "r", "32", "fill", "#ECFDF5"], ["d", "M32 46V32M24 28C24 28 28 26 32 30C36 26 40 28 40 28C40 28 39 34 32 34C25 34 24 28 24 28Z", "stroke", "#059669", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M22 46H42", "stroke", "#92400E", "stroke-width", "3", "stroke-linecap", "round"], [2, "font-size", "21px", "font-weight", "700", "color", "#000000", "font-family", "'Gilmer', 'DM Sans', sans-serif"], [2, "font-size", "16px", "color", "#757783", "margin", "8px 0 0 0", "line-height", "1.5"], ["cx", "32", "cy", "32", "r", "32", "fill", "#FFFBEB"], ["d", "M32 16L37 27.5L49 29L40 37.5L42.5 49.5L32 43L21.5 49.5L24 37.5L15 29L27 27.5L32 16Z", "fill", "#F59E0B", "stroke", "#D97706", "stroke-width", "2", "stroke-linejoin", "round"], ["cx", "32", "cy", "32", "r", "32", "fill", "#EFF6FF"], ["d", "M42 22L34 30M42 22C42 22 43 28 39 32L27 44L20 44L20 37L32 25C36 21 42 22 42 22Z", "stroke", "#2563EB", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M24 40L16 48M20 44L23 41", "stroke", "#EF4444", "stroke-width", "3", "stroke-linecap", "round"], ["cx", "32", "cy", "32", "r", "32", "fill", "#FEF2F2"], ["d", "M44 20H40V16H24V20H20C17.79 20 16 21.79 16 24V28C16 32.42 19.58 36 24 36H26.34C28.2 38.38 31.02 40 34.34 40H29.66C32.98 40 35.8 38.38 37.66 36H40C44.42 36 48 32.42 48 28V24C48 21.79 46.21 20 44 20ZM32 40C29.79 40 28 41.79 28 44V46H36V44C36 41.79 34.21 40 32 40ZM28 40C29.79 40 28 41.79 28 44V46H36V44C36 41.79 34.21 40 32 40ZM28 48H36V50H28V48Z", "fill", "#DC2626"], [3, "rewards"], [2, "width", "8px", "height", "8px", "border-radius", "50%", "background", "#D41101", "flex-shrink", "0", "display", "inline-block", "margin-top", "8px"], [2, "font-size", "18px", "color", "#020101", "font-weight", "400", "line-height", "1.6"]], template: function ChallengeDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ChallengeDetailsComponent_Conditional_0_Template, 8, 0, "div", 0)(1, ChallengeDetailsComponent_Conditional_1_Template, 83, 4);
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.notFound ? 0 : 1);
      }
    }, dependencies: [
      CommonModule,
      RouterModule,
      RouterLink,
      ChallengeInfoCardsComponent,
      CompetitionStepsComponent,
      ScoringSystemComponent,
      RewardsComponent,
      RegistrationFormComponent
    ], styles: ["\n\n@media (max-width: 768px) {\n  .footer-links-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n}\n/*# sourceMappingURL=challenge-details.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChallengeDetailsComponent, { className: "ChallengeDetailsComponent", filePath: "src\\app\\pages\\challenge-details\\challenge-details.component.ts", lineNumber: 27 });
})();
export {
  ChallengeDetailsComponent
};
//# sourceMappingURL=chunk-OJP3MDPB.js.map
