import {
  OPEN_CHALLENGES
} from "./chunk-QQUX5SO3.js";
import {
  Router,
  RouterModule
} from "./chunk-RK72NEAB.js";
import "./chunk-PLXL2LZV.js";
import {
  CommonModule,
  NgClass,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-C72BQOBI.js";

// src/app/pages/open-challenges/open-challenges.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function OpenChallengesComponent_For_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 105)(2, "div", 106);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(3, "svg", 107);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 108);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h3", 109);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 110);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 111)(11, "span", 112);
    \u0275\u0275text(12, "Your Task:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 113);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 114)(16, "div", 115)(17, "span", 116);
    \u0275\u0275text(18, "Earn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 117);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 115)(22, "span", 116);
    \u0275\u0275text(23, "Extras");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 117);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "button", 118);
    \u0275\u0275listener("click", function OpenChallengesComponent_For_59_Template_button_click_26_listener() {
      const challenge_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.enterChallenge(challenge_r2));
    });
    \u0275\u0275text(27, "Enter Challenge \u2013 \xA31");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const challenge_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("innerHTML", ctx_r2.getIconSvg(challenge_r2.icon), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "badge-" + challenge_r2.ageGroupColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(challenge_r2.ageGroup);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(challenge_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(challenge_r2.description);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(challenge_r2.task);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(challenge_r2.earn);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(challenge_r2.extras);
  }
}
function OpenChallengesComponent_For_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 105)(2, "div", 106);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(3, "svg", 107);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 108);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h3", 109);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 110);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 111)(11, "span", 112);
    \u0275\u0275text(12, "Your Task:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 113);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 114)(16, "div", 115)(17, "span", 116);
    \u0275\u0275text(18, "Earn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 117);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 115)(22, "span", 116);
    \u0275\u0275text(23, "Extras");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 117);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "button", 118);
    \u0275\u0275listener("click", function OpenChallengesComponent_For_62_Template_button_click_26_listener() {
      const challenge_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.enterChallenge(challenge_r5));
    });
    \u0275\u0275text(27, "Enter Challenge \u2013 \xA31");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const challenge_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("innerHTML", ctx_r2.getIconSvg(challenge_r5.icon), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "badge-" + challenge_r5.ageGroupColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(challenge_r5.ageGroup);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(challenge_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(challenge_r5.description);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(challenge_r5.task);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(challenge_r5.earn);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(challenge_r5.extras);
  }
}
function OpenChallengesComponent_For_192_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "div", 119);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(2, "svg", 107);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h4", 120);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 121);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const perk_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", ctx_r2.getPerkIcon(perk_r6.id), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(perk_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(perk_r6.subtitle);
  }
}
function OpenChallengesComponent_For_195_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "div", 119);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(2, "svg", 107);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h4", 120);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 121);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const perk_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", ctx_r2.getPerkIcon(perk_r7.id), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(perk_r7.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(perk_r7.subtitle);
  }
}
var OpenChallengesComponent = class _OpenChallengesComponent {
  constructor() {
    this.router = inject(Router);
    this.challenges = OPEN_CHALLENGES;
    this.perks = [
      { id: 1, title: "\xA31,000 Cash Prize", subtitle: "For each category champion" },
      { id: 2, title: "Engraved Trophy", subtitle: "And frame certificate." },
      { id: 3, title: "Flagship Course Access", subtitle: "Complimentary for top 100 candidates." },
      { id: 4, title: "Scholarship Pathways", subtitle: "Selected universities" },
      { id: 5, title: "Industry Immersions", subtitle: "Virtual or on-site visits" },
      { id: 6, title: "Digital Certificates", subtitle: "For every valid entry" },
      { id: 7, title: "Sponsorship Pathways", subtitle: "To sponsors connected" }
    ];
  }
  getBadgeClasses(color) {
    switch (color) {
      case "green":
        return "bg-[#ecfdf5] text-[#10b981] border border-[#a7f3d0]";
      case "blue":
        return "bg-[#e0e7ff] text-[#4f46e5] border border-[#c7d2fe]";
      case "red":
        return "bg-[#fef2f2] text-[#ef4444] border border-[#fecaca]";
      case "orange-outline":
        return "bg-transparent text-[#f97316] border border-[#f97316]";
      case "orange":
      default:
        return "bg-[#fff7ed] text-[#f97316] border border-[#fed7aa]";
    }
  }
  getIconSvg(iconName) {
    switch (iconName) {
      case "book-open":
        return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>';
      case "message-circle":
        return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>';
      case "lightbulb":
        return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>';
      case "smartphone":
        return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>';
      case "chef-hat":
        return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>';
      default:
        return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>';
    }
  }
  getPerkIcon(perkId) {
    const icons = {
      1: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>',
      2: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>',
      3: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>',
      4: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z"></path>',
      5: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>',
      6: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>',
      7: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>'
    };
    return icons[perkId] || icons[1];
  }
  enterChallenge(challenge) {
    this.router.navigate([
      "/skillstorm/challenges",
      challenge.slug
    ]);
  }
  scrollToChallenges() {
    const el = document.getElementById("challenges-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
  static {
    this.\u0275fac = function OpenChallengesComponent_Factory(t) {
      return new (t || _OpenChallengesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OpenChallengesComponent, selectors: [["app-open-challenges"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 293, vars: 0, consts: [[1, "hero-section", 2, "padding", "0"], [2, "width", "100%", "position", "relative", "background", "#000", "line-height", "0"], ["autoplay", "", "loop", "", "muted", "", "playsinline", "", 2, "width", "100%", "height", "auto", "display", "block"], ["src", "https://ufs.net.in/inmyacademy/video/globalopen.mp4", "type", "video/mp4"], [1, "container", 2, "padding-top", "52px"], [1, "hero-pill"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "stroke-width", "2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 4v16M4 12h16m-2.222-5.778L6.222 17.778M6.222 6.222l11.556 11.556"], [1, "hero-title"], [1, "accent"], [1, "hero-subtitle"], [1, "hero-buttons"], [1, "btn-red", 3, "click"], [1, "btn-outline", 3, "click"], [1, "stats-section"], [1, "container"], [1, "stats-grid"], [1, "stat-item"], [1, "stat-circle"], [1, "stat-value"], [1, "stat-label"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], ["id", "challenges-section", 1, "challenges-section"], [1, "section-header"], [1, "section-title"], [1, "section-subtitle"], [1, "challenges-grid"], [1, "challenge-card"], [1, "challenge-row-2"], [1, "scoring-section"], [1, "section-subtitle", 2, "color", "#FF8C00"], [1, "scoring-card"], [1, "scoring-card-row"], [1, "scoring-icon-box"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"], [1, "scoring-card-title"], [1, "scoring-card-body"], [1, "scoring-two-col"], [1, "scoring-card", 2, "margin-bottom", "0"], [1, "scoring-two-col-header"], [1, "scoring-pct-badge", "pct-orange"], [1, "scoring-pct-badge", "pct-red"], [1, "scoring-card", 2, "margin-top", "20px"], [1, "scoring-icon-box", "blue"], ["fill", "currentColor", "viewBox", "0 0 20 20"], ["d", "M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm1 4a1 1 0 011-1h2a1 1 0 110 2H6a1 1 0 01-1-1zm5-1a1 1 0 100 2h2a1 1 0 100-2h-2zm-5 4a1 1 0 011-1h2a1 1 0 110 2H6a1 1 0 01-1-1zm5-1a1 1 0 100 2h2a1 1 0 100-2h-2z"], [1, "formula-box"], [1, "examples-grid"], [1, "example-box"], [1, "example-label"], [1, "example-text"], [1, "scoring-italic-note"], [1, "scoring-card-row", 2, "margin-bottom", "10px"], [1, "scoring-icon-box", "pink"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "dates-rules-grid"], [1, "dates-card"], [1, "scoring-card-row", 2, "margin-bottom", "20px"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], [1, "date-row"], [1, "date-label"], [1, "date-badge", "date-badge-gray"], [1, "date-badge", "date-badge-outline"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"], [1, "rules-list"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "viewBox", "0 0 24 24"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M5 13l4 4L19 7"], [1, "prizes-section"], [1, "prizes-badge"], [1, "prizes-grid"], [1, "prize-card"], [1, "prizes-row-2", 2, "margin-top", "20px"], [1, "cta-section"], [1, "cta-inner"], [1, "cta-sparkle-box"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"], [1, "cta-title"], [1, "cta-subtitle"], [1, "cta-note"], [1, "site-footer"], [1, "footer-contact-bar"], [1, "footer-contact-item"], [1, "footer-contact-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"], [1, "footer-contact-label"], [1, "footer-contact-value"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"], [1, "footer-main"], [1, "footer-col-desc"], [1, "social-links"], [1, "social-label"], ["href", "#", "aria-label", "Facebook", 1, "social-icon-btn"], ["fill", "currentColor", "viewBox", "0 0 24 24"], ["d", "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"], ["href", "#", "aria-label", "LinkedIn", 1, "social-icon-btn"], ["d", "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.119 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"], ["href", "#", "aria-label", "YouTube", 1, "social-icon-btn"], ["d", "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"], [1, "footer-col-heading"], [1, "footer-links-list"], ["href", "#"], [1, "footer-bottom"], [1, "card-top-row"], [1, "card-icon-box"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 3, "innerHTML"], [1, "age-badge", 3, "ngClass"], [1, "card-title"], [1, "card-description"], [1, "card-task-box"], [1, "card-task-label"], [1, "card-task-text"], [1, "card-details-area"], [1, "card-detail-row"], [1, "detail-pill"], [1, "detail-text"], [1, "btn-card-enter", 3, "click"], [1, "prize-icon-box"], [1, "prize-title"], [1, "prize-subtitle"]], template: function OpenChallengesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "video", 2);
        \u0275\u0275element(3, "source", 3);
        \u0275\u0275text(4, " Your browser does not support the video tag. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 4)(6, "div", 5);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(7, "svg", 6);
        \u0275\u0275element(8, "path", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275text(9, " Quick Creative Challenges ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(10, "h1", 8);
        \u0275\u0275text(11, " Dive into the ");
        \u0275\u0275elementStart(12, "span", 9);
        \u0275\u0275text(13, "Ultimate Learning Challenge");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "p", 10);
        \u0275\u0275text(15, " Join a vibrant global community in an exciting online event designed to spark creativity and build skills through fun, quick projects. In just 5 minutes, dive into a bite-sized lesson, then craft and share your creation. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 11)(17, "button", 12);
        \u0275\u0275listener("click", function OpenChallengesComponent_Template_button_click_17_listener() {
          return ctx.scrollToChallenges();
        });
        \u0275\u0275text(18, "Enter a Challenge \u2013 \xA31");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "button", 13);
        \u0275\u0275listener("click", function OpenChallengesComponent_Template_button_click_19_listener() {
          return ctx.scrollToChallenges();
        });
        \u0275\u0275text(20, "Explore All Challenges");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(21, "section", 14)(22, "div", 15)(23, "div", 16)(24, "div", 17);
        \u0275\u0275element(25, "div", 18);
        \u0275\u0275elementStart(26, "div", 19);
        \u0275\u0275text(27, "\xA31,000");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 20);
        \u0275\u0275text(29, "Per Category");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 17);
        \u0275\u0275element(31, "div", 18);
        \u0275\u0275elementStart(32, "div", 19);
        \u0275\u0275text(33, "\xA31");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 20);
        \u0275\u0275text(35, "Entry Fee");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 17)(37, "div", 18);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(38, "svg", 21);
        \u0275\u0275element(39, "path", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(40, "div", 19);
        \u0275\u0275text(41, "5 min");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "div", 20);
        \u0275\u0275text(43, "Quick Lessons");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "div", 17);
        \u0275\u0275element(45, "div", 18);
        \u0275\u0275elementStart(46, "div", 19);
        \u0275\u0275text(47, "All Ages");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "div", 20);
        \u0275\u0275text(49, "Open to Everyone");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(50, "section", 23)(51, "div", 15)(52, "div", 24)(53, "h2", 25);
        \u0275\u0275text(54, "Explore the Challenges");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "p", 26);
        \u0275\u0275text(56, "Each entry is just \xA31. Entries are evaluated on creativity, clarity, and fit to the prompt, with added points from community support.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "div", 27);
        \u0275\u0275repeaterCreate(58, OpenChallengesComponent_For_59_Template, 28, 8, "div", 28, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "div", 29);
        \u0275\u0275repeaterCreate(61, OpenChallengesComponent_For_62_Template, 28, 8, "div", 28, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(63, "section", 30)(64, "div", 15)(65, "div", 24)(66, "h2", 25);
        \u0275\u0275text(67, "How Scoring Works");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "p", 31);
        \u0275\u0275text(69, "Merit-first scoring with community support");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(70, "div", 32)(71, "div", 33)(72, "div", 34);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(73, "svg", 21);
        \u0275\u0275element(74, "path", 35);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(75, "h3", 36);
        \u0275\u0275text(76, "Understanding Lift Support");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(77, "p", 37);
        \u0275\u0275text(78, "After approval, you'll get a personal shareable link and QR code. Supporters can send a \xA31 Lift to cheer you on, adding +1 to your community score per Lift. Your core project quality drives 65% of the score, making Lifts a helpful but secondary element.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(79, "div", 38)(80, "div", 39)(81, "div", 40)(82, "h3", 36);
        \u0275\u0275text(83, "Project Merit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "span", 41);
        \u0275\u0275text(85, "65%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(86, "p", 37);
        \u0275\u0275text(87, "Assessed for overall quality, originality, clarity, and relevance.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(88, "div", 39)(89, "div", 40)(90, "h3", 36);
        \u0275\u0275text(91, "Community Support");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "span", 42);
        \u0275\u0275text(93, "35%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(94, "p", 37);
        \u0275\u0275text(95, "Your Lifts, normalized against the category's top count for equity.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(96, "div", 43)(97, "div", 33)(98, "div", 44);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(99, "svg", 45);
        \u0275\u0275element(100, "path", 46);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(101, "h3", 36);
        \u0275\u0275text(102, "Score Calculation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(103, "div", 47);
        \u0275\u0275text(104, "Final Score = (Merit Score \xD7 0.65) + (Normalized Lifts \xD7 0.35)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(105, "div", 48)(106, "div", 49)(107, "span", 50);
        \u0275\u0275text(108, "Example A:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "p", 51);
        \u0275\u0275text(110, "90/100 merit with 850 Lifts (category max 1500) = ");
        \u0275\u0275elementStart(111, "strong");
        \u0275\u0275text(112, "79 points");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(113, "div", 49)(114, "span", 50);
        \u0275\u0275text(115, "Example B:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "p", 51);
        \u0275\u0275text(117, "84/100 with max Lifts = ");
        \u0275\u0275elementStart(118, "strong");
        \u0275\u0275text(119, "88.6 points");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(120, "p", 52);
        \u0275\u0275text(121, "Emphasizing strong ideas over sheer popularity.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(122, "div", 43)(123, "div", 53)(124, "div", 54);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(125, "svg", 21);
        \u0275\u0275element(126, "path", 55);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(127, "h3", 36);
        \u0275\u0275text(128, "Purpose of the \xA31 Entry Fee");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(129, "p", 37);
        \u0275\u0275text(130, "This small fee verifies your submission, covers prize pools and certificates, and maintains a level playing field. It never influences your score.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(131, "div", 56)(132, "div", 57)(133, "div", 58)(134, "div", 34);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(135, "svg", 21);
        \u0275\u0275element(136, "path", 59);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(137, "h3", 36);
        \u0275\u0275text(138, "Key Dates");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(139, "div", 60)(140, "span", 61);
        \u0275\u0275text(141, "Registration Opens");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(142, "span", 62);
        \u0275\u0275text(143, "7 November");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(144, "div", 60)(145, "span", 61);
        \u0275\u0275text(146, "Challenge Ends");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(147, "span", 63);
        \u0275\u0275text(148, "25 April 2026");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(149, "div", 57)(150, "div", 58)(151, "div", 54);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(152, "svg", 21);
        \u0275\u0275element(153, "path", 64);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(154, "h3", 36);
        \u0275\u0275text(155, "Essential Rules");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(156, "ul", 65)(157, "li");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(158, "svg", 66);
        \u0275\u0275element(159, "path", 67);
        \u0275\u0275elementEnd();
        \u0275\u0275text(160, " All regions must be open for a minimum ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(161, "li");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(162, "svg", 66);
        \u0275\u0275element(163, "path", 67);
        \u0275\u0275elementEnd();
        \u0275\u0275text(164, " Submit at least one image (Up to 20 MB) ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(165, "li");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(166, "svg", 66);
        \u0275\u0275element(167, "path", 67);
        \u0275\u0275elementEnd();
        \u0275\u0275text(168, " Video length: Maximum 30 seconds, horizontal only ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(169, "li");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(170, "svg", 66);
        \u0275\u0275element(171, "path", 67);
        \u0275\u0275elementEnd();
        \u0275\u0275text(172, " One entry per company or person (multi-category allowed) ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(173, "li");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(174, "svg", 66);
        \u0275\u0275element(175, "path", 67);
        \u0275\u0275elementEnd();
        \u0275\u0275text(176, " Winner will be contacted after judging process ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(177, "li");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(178, "svg", 66);
        \u0275\u0275element(179, "path", 67);
        \u0275\u0275elementEnd();
        \u0275\u0275text(180, " Submit in .JPG, .PNG, .MP4 (high resolution) ");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(181, "section", 68)(182, "div", 15)(183, "div", 24)(184, "div", 69);
        \u0275\u0275text(185, "Real Rewards");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(186, "h2", 25);
        \u0275\u0275text(187, "Prizes and Perks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(188, "p", 26);
        \u0275\u0275text(189, "Recognition, cash prizes, and career-boosting opportunities");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(190, "div", 70);
        \u0275\u0275repeaterCreate(191, OpenChallengesComponent_For_192_Template, 7, 3, "div", 71, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(193, "div", 72);
        \u0275\u0275repeaterCreate(194, OpenChallengesComponent_For_195_Template, 7, 3, "div", 71, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(196, "section", 73)(197, "div", 15)(198, "div", 74)(199, "div", 75);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(200, "svg", 21);
        \u0275\u0275element(201, "path", 76);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(202, "h2", 77);
        \u0275\u0275text(203, "Your Adventure Starts Here!");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(204, "p", 78);
        \u0275\u0275text(205, "Sign up now to gain fresh skills, showcase your talent, and compete for \xA31,000 prizes, certifications, and career-boosting connections.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(206, "div", 11)(207, "button", 12);
        \u0275\u0275listener("click", function OpenChallengesComponent_Template_button_click_207_listener() {
          return ctx.scrollToChallenges();
        });
        \u0275\u0275text(208, "Enter a Challenge - \xA31");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(209, "button", 13);
        \u0275\u0275listener("click", function OpenChallengesComponent_Template_button_click_209_listener() {
          return ctx.scrollToChallenges();
        });
        \u0275\u0275text(210, "Explore All Challenges");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(211, "p", 79);
        \u0275\u0275text(212, "Organised by In My Academy Ltd UK \u2014 empowering the next generation through project-based global learning.");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(213, "footer", 80)(214, "div", 15)(215, "div", 81)(216, "div", 82)(217, "div", 83);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(218, "svg", 21);
        \u0275\u0275element(219, "path", 84)(220, "path", 85);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(221, "div")(222, "span", 86);
        \u0275\u0275text(223, "Address");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(224, "div", 87);
        \u0275\u0275text(225, "IN MY ACADEMY LTD 71-75, Shelton Street,");
        \u0275\u0275element(226, "br");
        \u0275\u0275text(227, "Covent Garden, London, WC2H 9JQ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(228, "div", 82)(229, "div", 83);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(230, "svg", 21);
        \u0275\u0275element(231, "path", 88);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(232, "div")(233, "span", 86);
        \u0275\u0275text(234, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(235, "div", 87);
        \u0275\u0275text(236, "info@inmyacademy.com");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(237, "div", 82)(238, "div", 83);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(239, "svg", 21);
        \u0275\u0275element(240, "path", 89);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(241, "div")(242, "span", 86);
        \u0275\u0275text(243, "Call");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(244, "div", 87);
        \u0275\u0275text(245, "+447748416224");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(246, "div", 90)(247, "div")(248, "p", 91);
        \u0275\u0275text(249, "We're more than a platform\u2014we're a global powerhouse redefining education with interactive, real-world mastery that excites, engages, and empowers you to achieve the impossible.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(250, "div", 92)(251, "span", 93);
        \u0275\u0275text(252, "Follow on:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(253, "a", 94);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(254, "svg", 95);
        \u0275\u0275element(255, "path", 96);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(256, "a", 97);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(257, "svg", 95);
        \u0275\u0275element(258, "path", 98);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(259, "a", 99);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(260, "svg", 95);
        \u0275\u0275element(261, "path", 100);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(262, "div")(263, "h4", 101);
        \u0275\u0275text(264, "Quick Links");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(265, "ul", 102)(266, "li")(267, "a", 103);
        \u0275\u0275text(268, "About");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(269, "li")(270, "a", 103);
        \u0275\u0275text(271, "Course");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(272, "li")(273, "a", 103);
        \u0275\u0275text(274, "Contact Us");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(275, "li")(276, "a", 103);
        \u0275\u0275text(277, "Blog");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(278, "div")(279, "h4", 101);
        \u0275\u0275text(280, "SkillStorm Global Competitions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(281, "ul", 102)(282, "li")(283, "a", 103);
        \u0275\u0275text(284, "Global Open Challenges");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(285, "li")(286, "a", 103);
        \u0275\u0275text(287, "Global Mastery Battles");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(288, "li")(289, "a", 103);
        \u0275\u0275text(290, "Global School competitions");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(291, "div", 104);
        \u0275\u0275text(292, "\xA9 2025 All Rights Reserved");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(58);
        \u0275\u0275repeater(ctx.challenges.slice(0, 3));
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.challenges.slice(3, 5));
        \u0275\u0275advance(130);
        \u0275\u0275repeater(ctx.perks.slice(0, 4));
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.perks.slice(4, 7));
      }
    }, dependencies: [CommonModule, NgClass, RouterModule], styles: ['@import "https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;400;500;600;700&family=DM+Sans:wght@400;500;600;700;800&display=swap";\n\n\n\n@font-face {\n  font-family: "Gilmer";\n  src:\n    local("Gilmer Bold"),\n    url(/assets/fonts/Gilmer-Bold.woff2) format("woff2"),\n    url(/assets/fonts/Gilmer-Bold.woff) format("woff");\n  font-weight: 700;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: "Gilmer";\n  src:\n    local("Gilmer"),\n    url(/assets/fonts/Gilmer-Regular.woff2) format("woff2"),\n    url(/assets/fonts/Gilmer-Regular.woff) format("woff");\n  font-weight: 400;\n  font-style: normal;\n  font-display: swap;\n}\n[_nghost-%COMP%] {\n  display: block;\n  font-family: "Kumbh Sans", sans-serif;\n  background: #FFFFFF;\n  color: #333333;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-size: 16px;\n  line-height: 1.5;\n}\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1320px;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 20px;\n  padding-right: 20px;\n  box-sizing: border-box;\n}\n.hero-section[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  padding: 52px 0 0 0;\n  text-align: center;\n}\n.hero-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  border: 1.5px solid #FF8C00;\n  border-radius: 50px;\n  padding: 8px 20px;\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  color: #FF8C00;\n  margin-bottom: 32px;\n  background: transparent;\n  line-height: 1;\n}\n.hero-pill[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  flex-shrink: 0;\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-family:\n    "Gilmer",\n    "DM Sans",\n    "Poppins",\n    sans-serif;\n  font-size: 44px;\n  font-weight: 700;\n  color: #000000;\n  line-height: 1.2;\n  margin: 0 0 20px 0;\n  letter-spacing: -0.5px;\n}\n.hero-title[_ngcontent-%COMP%]   .accent[_ngcontent-%COMP%] {\n  color: #FF8C00;\n}\n.hero-subtitle[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 17px;\n  font-weight: 400;\n  color: #4B5563;\n  line-height: 1.65;\n  max-width: 720px;\n  width: 100%;\n  margin: 0 auto 40px auto;\n  text-align: center;\n}\n.hero-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 60px;\n}\n.btn-red[_ngcontent-%COMP%] {\n  background: #FF8C00;\n  color: #FFFFFF;\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 16px;\n  font-weight: 700;\n  padding: 14px 30px;\n  border-radius: 50px;\n  border: none;\n  cursor: pointer;\n  white-space: nowrap;\n  display: inline-flex;\n  align-items: center;\n  line-height: 1;\n  transition: background 0.2s;\n}\n.btn-red[_ngcontent-%COMP%]:hover {\n  background: #E67E00;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  color: #111111;\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  padding: 13px 30px;\n  border-radius: 50px;\n  border: 1.5px solid #111111;\n  cursor: pointer;\n  white-space: nowrap;\n  display: inline-flex;\n  align-items: center;\n  line-height: 1;\n  transition: background 0.2s;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  background: #F5F5F5;\n}\n.stats-section[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  padding: 40px 0 80px 0;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  max-width: 1120px;\n  width: 100%;\n  padding: 0 20px;\n  margin: 0 auto;\n  align-items: flex-start;\n}\n.stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.stat-circle[_ngcontent-%COMP%] {\n  width: 96px;\n  height: 96px;\n  border-radius: 50%;\n  background: #FFF5E9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n  color: #FF8C00;\n  flex-shrink: 0;\n}\n.stat-circle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-family:\n    "Gilmer",\n    "DM Sans",\n    "Poppins",\n    sans-serif;\n  font-size: 28px;\n  font-weight: 700;\n  color: #000000;\n  line-height: 1.2;\n  margin-bottom: 6px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 15px;\n  font-weight: 400;\n  color: #6B7280;\n  line-height: 1.4;\n}\n.section-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 48px;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-family:\n    "Gilmer",\n    "DM Sans",\n    "Poppins",\n    sans-serif;\n  font-size: 28px;\n  font-weight: 700;\n  color: #000000;\n  line-height: 1.25;\n  margin: 0 0 12px 0;\n}\n.section-subtitle[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  color: #6B7280;\n  line-height: 1.5;\n  max-width: 760px;\n  margin: 0 auto;\n}\n.challenges-section[_ngcontent-%COMP%] {\n  background: #fbfbfb;\n  padding: 80px 0;\n}\n.challenges-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 28px;\n  align-items: stretch;\n}\n.challenge-row-2[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 28px;\n  margin-top: 28px;\n  justify-content: center;\n  align-items: stretch;\n}\n.challenge-row-2[_ngcontent-%COMP%]   .challenge-card[_ngcontent-%COMP%] {\n  width: calc(33.333% - 9px);\n  flex-shrink: 0;\n}\n.challenge-card[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1.6px solid rgba(117, 119, 131, 0.21);\n  border-radius: 10px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  box-shadow: none;\n  height: 100%;\n}\n.card-top-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 20px;\n}\n.card-icon-box[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  background: #fff6e7;\n  border-radius: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.card-icon-box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  color: #ff9c31;\n  stroke: #ff9c31;\n}\n.age-badge[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 12px 24px;\n  border-radius: 35px;\n  white-space: nowrap;\n  line-height: 1;\n}\n.badge-green[_ngcontent-%COMP%] {\n  background: #E8F8EF;\n  color: #1A7A45;\n  border: 1.5px solid #5DBE8A;\n}\n.badge-blue[_ngcontent-%COMP%] {\n  background: #0019ff59;\n  color: #2c3587;\n  border: 0.8px solid #2c3587;\n}\n.badge-red[_ngcontent-%COMP%] {\n  background: #FDEAEA;\n  color: #C0392B;\n  border: 1.5px solid #E88B8B;\n}\n.badge-orange[_ngcontent-%COMP%] {\n  background: #FFF5E9;\n  color: #CC6600;\n  border: 1.5px solid #FFBE7A;\n}\n.badge-orange-outline[_ngcontent-%COMP%] {\n  background: #fe9a0024;\n  color: #fe9a00;\n  border: 0.8px solid #fe9a00;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-family:\n    "Gilmer",\n    "DM Sans",\n    "Poppins",\n    sans-serif;\n  font-size: 18px;\n  font-weight: 700;\n  color: #000000;\n  line-height: 18px;\n  margin: 0 0 12px 0;\n}\n.card-description[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  color: #757783;\n  line-height: 28px;\n  margin: 0 0 16px 0;\n}\n.card-task-box[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  border-radius: 8px;\n  padding: 10px;\n  margin-bottom: 22px;\n  border: none;\n}\n.card-task-label[_ngcontent-%COMP%] {\n  font-family:\n    "Gilmer",\n    "DM Sans",\n    "Poppins",\n    sans-serif;\n  font-size: 18px;\n  font-weight: 700;\n  color: #000000;\n  display: block;\n  margin-bottom: 8px;\n}\n.card-task-text[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  color: #757783;\n  line-height: 1.6;\n  margin: 0;\n}\n.card-details-area[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.card-detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.detail-pill[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  color: #000000;\n  background: #f5f5f5;\n  border-radius: 35px;\n  padding: 12px 24px;\n  white-space: nowrap;\n  flex-shrink: 0;\n  text-align: center;\n}\n.detail-text[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  color: #757783;\n  line-height: 1.4;\n}\n.btn-card-enter[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  background: #fe9a00;\n  color: #ffffff;\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 10px;\n  border-radius: 3px;\n  border: none;\n  cursor: pointer;\n  text-align: center;\n  margin-top: auto;\n  line-height: 1;\n  transition: background 0.2s;\n}\n.btn-card-enter[_ngcontent-%COMP%]:hover {\n  background: #E67E00;\n}\n.scoring-section[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  padding: 80px 0;\n}\n.scoring-card[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border: 1px solid #E8E8E8;\n  border-radius: 12px;\n  padding: 28px 32px;\n  box-shadow: 0 2px 14px rgba(224, 224, 224, 0.7);\n  margin-bottom: 20px;\n}\n.scoring-card-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 14px;\n}\n.scoring-icon-box[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  background: #FFF5E9;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  color: #FF8C00;\n}\n.scoring-icon-box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n}\n.scoring-icon-box.blue[_ngcontent-%COMP%] {\n  background: #EEF2FF;\n  color: #3B5FDB;\n}\n.scoring-icon-box.pink[_ngcontent-%COMP%] {\n  background: #FFF0F3;\n  color: #E84393;\n}\n.scoring-card-title[_ngcontent-%COMP%] {\n  font-family:\n    "Gilmer",\n    "DM Sans",\n    "Poppins",\n    sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n  color: #000000;\n  line-height: 1.35;\n  margin: 0;\n}\n.scoring-card-body[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 17px;\n  font-weight: 400;\n  color: #6B7280;\n  line-height: 1.65;\n  margin: 0;\n}\n.scoring-two-col[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  margin-bottom: 20px;\n  align-items: stretch;\n}\n.scoring-two-col[_ngcontent-%COMP%]   .scoring-card[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.scoring-two-col-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.scoring-pct-badge[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 13px;\n  font-weight: 700;\n  padding: 4px 12px;\n  border-radius: 50px;\n  line-height: 1.4;\n}\n.pct-orange[_ngcontent-%COMP%] {\n  background: #FFF5E9;\n  color: #CC6600;\n  border: 1.5px solid #FFBE7A;\n}\n.pct-red[_ngcontent-%COMP%] {\n  background: #FDEAEA;\n  color: #C0392B;\n  border: 1.5px solid #E88B8B;\n}\n.formula-box[_ngcontent-%COMP%] {\n  background: #F9F9F9;\n  border-radius: 8px;\n  padding: 16px 20px;\n  font-family: "Courier New", monospace;\n  font-size: 15px;\n  font-weight: 600;\n  color: #111111;\n  margin: 16px 0 20px 0;\n  border: 1px solid #EEEEEE;\n  line-height: 1.4;\n}\n.examples-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  margin-bottom: 14px;\n}\n.example-box[_ngcontent-%COMP%] {\n  background: #F9F9F9;\n  border-radius: 8px;\n  padding: 16px 20px;\n  border: 1px solid #EEEEEE;\n}\n.example-label[_ngcontent-%COMP%] {\n  font-family:\n    "Gilmer",\n    "DM Sans",\n    "Poppins",\n    sans-serif;\n  font-size: 15px;\n  font-weight: 700;\n  color: #000000;\n  display: block;\n  margin-bottom: 6px;\n}\n.example-text[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 14.5px;\n  font-weight: 400;\n  color: #6B7280;\n  line-height: 1.55;\n  margin: 0;\n}\n.example-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #000000;\n  font-weight: 700;\n}\n.scoring-italic-note[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 13px;\n  font-style: italic;\n  color: #9CA3AF;\n  margin: 0;\n  line-height: 1.4;\n}\n.dates-rules-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  margin-top: 20px;\n  align-items: stretch;\n}\n.dates-card[_ngcontent-%COMP%] {\n  background: #fbfbfb;\n  border: 1.6px solid rgba(117, 119, 131, 0.21);\n  border-radius: 12px;\n  padding: 28px 32px;\n  box-shadow: none;\n  height: 100%;\n}\n.date-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 0;\n  border-bottom: 1px solid #F3F4F6;\n}\n.date-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  padding-bottom: 0;\n}\n.date-row[_ngcontent-%COMP%]:first-child {\n  padding-top: 0;\n}\n.date-label[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  color: #6B7280;\n  line-height: 1.4;\n}\n.date-badge[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 14.5px;\n  font-weight: 600;\n  padding: 6px 16px;\n  border-radius: 8px;\n  line-height: 1.4;\n}\n.date-badge-gray[_ngcontent-%COMP%] {\n  background: #374151;\n  color: #FFFFFF;\n}\n.date-badge-outline[_ngcontent-%COMP%] {\n  color: #FF8C00;\n  border: 1.5px solid #FF8C00;\n  border-radius: 50px;\n}\n.rules-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.rules-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 15px;\n  font-weight: 400;\n  color: #374151;\n  line-height: 1.6;\n  margin-bottom: 14px;\n}\n.rules-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.rules-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  color: #FF8C00;\n  stroke: #FF8C00;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.prizes-section[_ngcontent-%COMP%] {\n  background: #fbfbfb;\n  padding: 80px 0;\n}\n.prizes-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 4px 16px;\n  border: 1px solid #FFBE7A;\n  background: #FFF5E9;\n  color: #CC6600;\n  border-radius: 50px;\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 13px;\n  font-weight: 600;\n  margin-bottom: 14px;\n  line-height: 1.6;\n}\n.prizes-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 20px;\n  align-items: stretch;\n}\n.prizes-row-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n  max-width: 75%;\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  align-items: stretch;\n}\n.prize-card[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  border: 0.8px solid rgba(117, 119, 131, 0.21);\n  border-radius: 15px;\n  padding: 15px;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 5px 0px;\n  height: 100%;\n}\n.prize-icon-box[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  background: #FFF5E9;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 14px;\n  color: #FF8C00;\n}\n.prize-icon-box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  stroke: #FF8C00;\n}\n.prize-title[_ngcontent-%COMP%] {\n  font-family:\n    "Gilmer",\n    "DM Sans",\n    "Poppins",\n    sans-serif;\n  font-size: 16px;\n  font-weight: 700;\n  color: #000000;\n  line-height: 1.35;\n  margin: 0 0 8px 0;\n}\n.prize-subtitle[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 13px;\n  font-weight: 400;\n  color: #6B7280;\n  line-height: 1.5;\n  margin: 0;\n}\n.cta-section[_ngcontent-%COMP%] {\n  background: transparent;\n  padding: 40px 0 80px 0;\n  text-align: center;\n}\n.cta-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.cta-sparkle-box[_ngcontent-%COMP%] {\n  width: 68px;\n  height: 68px;\n  background: #FFF5E9;\n  border-radius: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 24px;\n  color: #FF8C00;\n}\n.cta-sparkle-box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n}\n.cta-title[_ngcontent-%COMP%] {\n  font-family:\n    "Gilmer",\n    "DM Sans",\n    "Poppins",\n    sans-serif;\n  font-size: 36px;\n  font-weight: 700;\n  color: #000000;\n  line-height: 1.2;\n  margin: 0 0 14px 0;\n}\n.cta-subtitle[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  color: #555555;\n  line-height: 1.6;\n  margin: 0 auto 32px auto;\n  max-width: 580px;\n  width: 100%;\n  text-align: center;\n}\n.cta-note[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  color: #9CA3AF;\n  margin: 28px 0 0 0;\n  line-height: 1.5;\n}\n.cta-note[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #FF8C00;\n  text-decoration: none;\n}\n.site-footer[_ngcontent-%COMP%] {\n  background: #F3F4F6;\n  padding: 60px 0 40px 0;\n  font-family: "Kumbh Sans", sans-serif;\n}\n.footer-contact-bar[_ngcontent-%COMP%] {\n  background: #2c3587;\n  border-radius: 20px;\n  padding: 36px 44px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 24px;\n  margin-bottom: 56px;\n}\n.footer-contact-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex: 1;\n}\n.footer-contact-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: #FFFFFF;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #2A2F7F;\n  flex-shrink: 0;\n}\n.footer-contact-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.footer-contact-label[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 13px;\n  font-weight: 600;\n  color: #A5B4FC;\n  letter-spacing: 0.04em;\n  display: block;\n  margin-bottom: 4px;\n  text-transform: uppercase;\n}\n.footer-contact-value[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 15.5px;\n  font-weight: 600;\n  color: #FFFFFF;\n  line-height: 1.45;\n}\n.footer-main[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2.5fr 1fr 1.3fr;\n  gap: 48px;\n  margin-bottom: 44px;\n}\n.footer-col-desc[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 15px;\n  font-weight: 400;\n  color: #4B5563;\n  line-height: 1.7;\n  margin-bottom: 20px;\n}\n.social-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.social-label[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 14.5px;\n  font-weight: 600;\n  color: #4B5563;\n}\n.social-icon-btn[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: #2A2F7F;\n  color: #FFFFFF;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  transition: opacity 0.2s;\n}\n.social-icon-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.social-icon-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n}\n.footer-col-heading[_ngcontent-%COMP%] {\n  font-family:\n    "Gilmer",\n    "DM Sans",\n    "Poppins",\n    sans-serif;\n  font-size: 17px;\n  font-weight: 700;\n  color: #000000;\n  margin: 0 0 18px 0;\n  line-height: 1.3;\n}\n.footer-links-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.footer-links-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.footer-links-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 15px;\n  font-weight: 400;\n  color: #4B5563;\n  text-decoration: none;\n  line-height: 1.4;\n  transition: color 0.2s;\n}\n.footer-links-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #FF8C00;\n}\n.footer-bottom[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 48px;\n  padding-top: 32px;\n  border-top: 1px solid #E5E7EB;\n}\n.footer-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  color: #6B7280;\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0 20px;\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n  .hero-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n  }\n  .hero-buttons[_ngcontent-%COMP%]   .btn-red[_ngcontent-%COMP%], .hero-buttons[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 32px;\n    align-items: center;\n  }\n  .challenges-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .challenge-row-2[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .challenge-row-2[_ngcontent-%COMP%]   .challenge-card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .scoring-two-col[_ngcontent-%COMP%], .examples-grid[_ngcontent-%COMP%], .dates-rules-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .prizes-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .prizes-row-2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    max-width: 100%;\n  }\n  .footer-contact-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 24px;\n  }\n  .footer-main[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 32px;\n  }\n  .scoring-card-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n@media (max-width: 1380px) {\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0 40px;\n  }\n}\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 0 15px;\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .hero-subtitle[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .cta-subtitle[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .section-title[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 32px;\n  }\n  .challenges-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .challenge-row-2[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .challenge-row-2[_ngcontent-%COMP%]   .challenge-card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .scoring-two-col[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .examples-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .dates-rules-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .prizes-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .prizes-row-2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    max-width: 100%;\n  }\n  .footer-contact-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 28px 20px;\n    gap: 20px;\n  }\n  .footer-main[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 28px;\n  }\n}\n/*# sourceMappingURL=open-challenges.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OpenChallengesComponent, { className: "OpenChallengesComponent", filePath: "src\\app\\pages\\open-challenges\\open-challenges.component.ts", lineNumber: 13 });
})();
export {
  OpenChallengesComponent
};
//# sourceMappingURL=chunk-TMFZSPLA.js.map
