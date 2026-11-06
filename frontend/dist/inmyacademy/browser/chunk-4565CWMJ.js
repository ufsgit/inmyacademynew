import {
  OPEN_CHALLENGES
} from "./chunk-7KHVYY66.js";
import {
  Router,
  RouterModule
} from "./chunk-25CH7CJK.js";
import "./chunk-FHQOC34G.js";
import "./chunk-QGS4RBVK.js";
import {
  CommonModule,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵtext
} from "./chunk-EW7BAGJT.js";

// src/app/pages/open-challenges/open-challenges.component.ts
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
        return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>';
      case "message-circle":
        return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>';
      case "lightbulb":
        return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 18h6M10 22h4M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z"></path>';
      case "smartphone":
        return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 18h.01M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"></path>';
      case "chef-hat":
        return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 10.58 0A4 4 0 0 1 18 13.87V21H6zM6 17h12"></path>';
      default:
        return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M5 13l4 4L19 7"></path>';
    }
  }
  getPerkIcon(perkId) {
    const icons = {
      // 1: £1,000 Cash Prize (Cash Note)
      1: '<rect x="2" y="6" width="20" height="12" rx="2" stroke-width="1.8"/><circle cx="12" cy="12" r="3" stroke-width="1.8"/><line x1="6" y1="12" x2="6.01" y2="12" stroke-width="2"/><line x1="18" y1="12" x2="18.01" y2="12" stroke-width="2"/>',
      // 2: Engraved Trophy (Trophy Cup)
      2: '<path stroke-width="1.8" d="M6 9H4a2 2 0 0 0-2 2v1a5 5 0 0 0 5 5h.09"/><path stroke-width="1.8" d="M18 9h2a2 2 0 0 1 2 2v1a5 5 0 0 1-5 5h-.09"/><path stroke-width="1.8" d="M6 3h12v10a6 6 0 0 1-12 0V3z"/><path stroke-width="1.8" d="M9 21h6"/><path stroke-width="1.8" d="M12 17v4"/>',
      // 3: Flagship Course Access (Graduation Cap)
      3: '<path stroke-width="1.8" d="M22 10L12 5 2 10l10 5 10-5z"/><path stroke-width="1.8" d="M6 12v5c3 3 9 3 12 0v-5"/>',
      // 4: Scholarship Pathways (Award Ribbon Medal)
      4: '<circle cx="12" cy="8" r="5" stroke-width="1.8"/><path stroke-width="1.8" d="M15.477 12.89L17 22l-5-3l-5 3l1.523-9.11"/>',
      // 5: Industry Immersions (Building)
      5: '<rect x="4" y="2" width="16" height="20" rx="2" stroke-width="1.8"/><path stroke-width="1.8" d="M9 6h2M13 6h2M9 10h2M13 10h2M9 14h2M13 14h2M10 22v-4h4v4"/>',
      // 6: Digital Certificates (Document Sheet)
      6: '<path stroke-width="1.8" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline stroke-width="1.8" points="14 2 14 8 20 8"/><line stroke-width="1.8" x1="16" y1="13" x2="8" y2="13"/><line stroke-width="1.8" x1="16" y1="17" x2="8" y2="17"/>',
      // 7: Sponsorship Pathways (People Mentors)
      7: '<path stroke-width="1.8" d="M17 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4" stroke-width="1.8"/><path stroke-width="1.8" d="M23 21v-2a4 4 0 0 0-3-3.87"/><path stroke-width="1.8" d="M16 3.13a4 4 0 0 1 0 7.75"/>'
    };
    return icons[perkId] || icons[1];
  }
  enterChallenge(challenge) {
    this.router.navigate([
      "/challenges",
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OpenChallengesComponent, selectors: [["app-open-challenges"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 542, vars: 0, consts: [[1, "hero-section", 2, "padding", "0"], [2, "width", "100%", "position", "relative", "background", "#000", "line-height", "0"], ["autoplay", "", "loop", "", "muted", "", "playsinline", "", 2, "width", "100%", "height", "auto", "display", "block"], ["src", "https://ufs.net.in/inmyacademy/video/globalopen.mp4", "type", "video/mp4"], [1, "container", 2, "padding-top", "52px"], [1, "hero-pill"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "stroke-width", "2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 4v16M4 12h16m-2.222-5.778L6.222 17.778M6.222 6.222l11.556 11.556"], [1, "hero-title"], [1, "accent"], [1, "hero-subtitle"], [1, "hero-buttons"], [1, "btn-red", 3, "click"], [1, "btn-outline", 3, "click"], [1, "stats-section"], [1, "container"], [1, "stats-grid"], [1, "stat-item"], [1, "stat-circle"], ["width", "26", "height", "26", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#D97706", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M6 4h12v6a6 6 0 0 1-12 0V4z"], ["d", "M6 6H3.5a2.5 2.5 0 0 0 0 5H6"], ["d", "M18 6h2.5a2.5 2.5 0 0 1 0 5H18"], ["d", "M12 16v3"], ["d", "M7 21h10"], [1, "stat-value"], [1, "stat-label"], ["d", "M10 2C10 7.5 6.5 10 2 10C6.5 10 10 12.5 10 18C10 12.5 13.5 10 18 10C13.5 10 10 7.5 10 2Z", "fill", "none"], ["d", "M19 2v4m-2-2h4", "stroke-width", "1.8"], ["d", "M4 17.5L5 19L4 20.5L3 19Z", "fill", "#D97706", "stroke", "none"], ["cx", "12", "cy", "12", "r", "9"], ["points", "12 7 12 12 15 15"], ["d", "M3.6 9h16.8"], ["d", "M3.6 15h16.8"], ["d", "M11.5 3a17 17 0 0 0 0 18"], ["d", "M12.5 3a17 17 0 0 1 0 18"], ["id", "challenges-section", 1, "challenges-section"], [1, "section-header"], [1, "section-title"], [1, "section-subtitle"], [1, "challenges-grid"], [1, "challenge-card"], [1, "card-top-row"], [1, "card-icon-box"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#EA580C", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"], ["d", "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"], [1, "age-badge", "badge-green"], [1, "card-title"], [1, "card-description"], [1, "card-task-box"], [1, "card-task-label"], [1, "card-task-text"], [1, "card-details-area"], [1, "card-detail-row"], [1, "detail-pill"], [1, "detail-text"], [1, "btn-card-enter", 3, "click"], ["d", "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"], [1, "age-badge", "badge-blue"], ["d", "M9 18h6"], ["d", "M10 22h4"], ["d", "M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z"], [1, "age-badge", "badge-red"], [1, "challenge-row-2"], ["x", "7", "y", "2", "width", "10", "height", "20", "rx", "2"], ["x1", "12", "y1", "18", "x2", "12.01", "y2", "18"], ["d", "M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 10.58 0A4 4 0 0 1 18 13.87V21H6z"], ["x1", "6", "y1", "17", "x2", "18", "y2", "17"], [1, "age-badge", "badge-orange-outline"], [1, "scoring-section"], [1, "section-subtitle", 2, "color", "#FF8C00"], [1, "scoring-card"], [1, "scoring-card-row"], [1, "scoring-icon-box"], ["fill", "none", "stroke", "#EA580C", "stroke-width", "1.8", "viewBox", "0 0 24 24", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"], [1, "scoring-card-title"], [1, "scoring-card-body"], [1, "scoring-two-col"], [1, "scoring-card", 2, "margin-bottom", "0"], [1, "scoring-two-col-header", 2, "display", "flex", "align-items", "center", "justify-content", "space-between", "margin-bottom", "12px"], [2, "display", "flex", "align-items", "center", "gap", "10px"], [1, "scoring-icon-box", 2, "margin-bottom", "0", "width", "32px", "height", "32px", "border-radius", "8px"], ["fill", "none", "stroke", "#EA580C", "stroke-width", "1.8", "viewBox", "0 0 24 24", "stroke-linecap", "round", "stroke-linejoin", "round", 2, "width", "18px", "height", "18px"], ["points", "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"], [1, "scoring-card-title", 2, "margin", "0"], [1, "scoring-pct-badge", "pct-orange"], [1, "scoring-pct-badge", "pct-red"], [1, "scoring-card", 2, "margin-top", "20px"], [1, "scoring-icon-box", "blue"], ["fill", "none", "stroke", "#2563EB", "stroke-width", "1.8", "viewBox", "0 0 24 24", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x", "4", "y", "2", "width", "16", "height", "20", "rx", "2"], ["x1", "8", "y1", "6", "x2", "16", "y2", "6"], ["x1", "16", "y1", "14", "x2", "16", "y2", "18"], ["d", "M16 10h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01"], [1, "formula-box"], [1, "examples-grid"], [1, "example-box"], [1, "example-label"], [1, "example-text"], [1, "scoring-italic-note"], [1, "scoring-card-row", 2, "margin-bottom", "10px"], [1, "scoring-icon-box", 2, "background", "#FFF7ED"], ["fill", "none", "stroke", "#EA580C", "stroke-width", "1.8", "viewBox", "0 0 24 24", "stroke-linecap", "round", "stroke-linejoin", "round", 2, "width", "20px", "height", "20px"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "16", "x2", "12", "y2", "12"], ["x1", "12", "y1", "8", "x2", "12.01", "y2", "8"], [1, "dates-rules-grid"], [1, "dates-card"], [1, "scoring-card-row", 2, "margin-bottom", "20px"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2", "ry", "2"], ["x1", "16", "y1", "2", "x2", "16", "y2", "6"], ["x1", "8", "y1", "2", "x2", "8", "y2", "6"], ["x1", "3", "y1", "10", "x2", "21", "y2", "10"], [1, "date-row"], [1, "date-label"], [1, "date-badge", "date-badge-gray"], [1, "date-badge", "date-badge-outline"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], [1, "rules-list"], ["fill", "none", "stroke", "#EA580C", "stroke-width", "2.5", "viewBox", "0 0 24 24", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M5 13l4 4L19 7"], [1, "prizes-section"], [1, "prizes-badge"], [1, "prizes-grid"], [1, "prize-card"], [1, "prize-icon-box"], ["width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#EA580C", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x", "2", "y", "6", "width", "20", "height", "12", "rx", "2"], ["cx", "12", "cy", "12", "r", "3"], ["x1", "6", "y1", "12", "x2", "6.01", "y2", "12"], ["x1", "18", "y1", "12", "x2", "18.01", "y2", "12"], [1, "prize-title"], [1, "prize-subtitle"], ["d", "M6 9H4a2 2 0 0 0-2 2v1a5 5 0 0 0 5 5h.09"], ["d", "M18 9h2a2 2 0 0 1 2 2v1a5 5 0 0 1-5 5h-.09"], ["d", "M6 3h12v10a6 6 0 0 1-12 0V3z"], ["d", "M9 21h6"], ["d", "M12 17v4"], ["d", "M22 10L12 5 2 10l10 5 10-5z"], ["d", "M6 12v5c3 3 9 3 12 0v-5"], ["cx", "12", "cy", "8", "r", "5"], ["d", "M15.477 12.89L17 22l-5-3l-5 3l1.523-9.11"], [1, "prizes-row-2", 2, "margin-top", "20px"], ["d", "M9 6h2M13 6h2M9 10h2M13 10h2M9 14h2M13 14h2M10 22v-4h4v4"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"], ["points", "14 2 14 8 20 8"], ["x1", "16", "y1", "13", "x2", "8", "y2", "13"], ["x1", "16", "y1", "17", "x2", "8", "y2", "17"], ["d", "M17 21v-2a4 4 0 0 0-3-3.87"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], [1, "cta-section"], [1, "cta-inner"], [1, "cta-sparkle-box"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"], [1, "cta-title"], [1, "cta-subtitle"], [1, "cta-note"], [1, "site-footer"], [1, "footer-contact-bar"], [1, "footer-contact-item"], [1, "footer-contact-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"], [1, "footer-contact-label"], [1, "footer-contact-value"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"], [1, "footer-main"], [1, "footer-col-desc"], [1, "social-links"], [1, "social-label"], ["href", "#", "aria-label", "Facebook", 1, "social-icon-btn"], ["fill", "currentColor", "viewBox", "0 0 24 24"], ["d", "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"], ["href", "#", "aria-label", "LinkedIn", 1, "social-icon-btn"], ["d", "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.119 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"], ["href", "#", "aria-label", "YouTube", 1, "social-icon-btn"], ["d", "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"], [1, "footer-col-heading"], [1, "footer-links-list"], ["href", "#"], [1, "footer-bottom"]], template: function OpenChallengesComponent_Template(rf, ctx) {
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
        \u0275\u0275elementStart(21, "section", 14)(22, "div", 15)(23, "div", 16)(24, "div", 17)(25, "div", 18);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(26, "svg", 19);
        \u0275\u0275element(27, "path", 20)(28, "path", 21)(29, "path", 22)(30, "path", 23)(31, "path", 24);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(32, "div", 25);
        \u0275\u0275text(33, "\xA31,000");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 26);
        \u0275\u0275text(35, "Per Category");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 17)(37, "div", 18);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(38, "svg", 19);
        \u0275\u0275element(39, "path", 27)(40, "path", 28)(41, "path", 29);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(42, "div", 25);
        \u0275\u0275text(43, "\xA31");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "div", 26);
        \u0275\u0275text(45, "Entry Fee");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div", 17)(47, "div", 18);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(48, "svg", 19);
        \u0275\u0275element(49, "circle", 30)(50, "polyline", 31);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(51, "div", 25);
        \u0275\u0275text(52, "5 min");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "div", 26);
        \u0275\u0275text(54, "Quick Lessons");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "div", 17)(56, "div", 18);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(57, "svg", 19);
        \u0275\u0275element(58, "circle", 30)(59, "path", 32)(60, "path", 33)(61, "path", 34)(62, "path", 35);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(63, "div", 25);
        \u0275\u0275text(64, "All Ages");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "div", 26);
        \u0275\u0275text(66, "Open to Everyone");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(67, "section", 36)(68, "div", 15)(69, "div", 37)(70, "h2", 38);
        \u0275\u0275text(71, "Explore the Challenges");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "p", 39);
        \u0275\u0275text(73, "Each entry is just \xA31. Entries are evaluated on creativity, clarity, and fit to the prompt, with added points from community support.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(74, "div", 40)(75, "div", 41)(76, "div", 42)(77, "div", 43);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(78, "svg", 44);
        \u0275\u0275element(79, "path", 45)(80, "path", 46);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(81, "span", 47);
        \u0275\u0275text(82, "Ages 4-10");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(83, "h3", 48);
        \u0275\u0275text(84, "Creative Storytelling Certificate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "p", 49);
        \u0275\u0275text(86, "Uncover the essentials of crafting compelling stories from start to finish. Bring your imagination to life and capture your audience's attention.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "div", 50)(88, "span", 51);
        \u0275\u0275text(89, "Your Task:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "p", 52);
        \u0275\u0275text(91, "Create a 1-2 minute video sharing your original tale using sketches, props, or pure narration.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(92, "div", 53)(93, "div", 54)(94, "span", 55);
        \u0275\u0275text(95, "Earn");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "span", 56);
        \u0275\u0275text(97, "Junior Storyteller Certificate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(98, "div", 54)(99, "span", 55);
        \u0275\u0275text(100, "Extras");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "span", 56);
        \u0275\u0275text(102, "Storytelling templates and access to our online imagination workshop series.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(103, "button", 57);
        \u0275\u0275listener("click", function OpenChallengesComponent_Template_button_click_103_listener() {
          return ctx.enterChallenge(ctx.challenges[0]);
        });
        \u0275\u0275text(104, "Enter Challenge \u2013 \xA31");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(105, "div", 41)(106, "div", 42)(107, "div", 43);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(108, "svg", 44);
        \u0275\u0275element(109, "path", 58);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(110, "span", 59);
        \u0275\u0275text(111, "All Ages");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(112, "h3", 48);
        \u0275\u0275text(113, "Global Oratory and Communication Certificate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "p", 49);
        \u0275\u0275text(115, "Communication is one of the most powerful leadership skills. This challenge invites participants to deliver a short speech that inspires or informs an audience.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "div", 50)(117, "span", 51);
        \u0275\u0275text(118, "Your Task:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "p", 52);
        \u0275\u0275text(120, "Record a 1-2 minute video speech or pitch on a passion topic, like sustainability or personal interests.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(121, "div", 53)(122, "div", 54)(123, "span", 55);
        \u0275\u0275text(124, "Earn");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(125, "span", 56);
        \u0275\u0275text(126, "Oratory Excellence Certificate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(127, "div", 54)(128, "span", 55);
        \u0275\u0275text(129, "Extras");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(130, "span", 56);
        \u0275\u0275text(131, "Public speaking tip sheets and invites to virtual debate clubs.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(132, "button", 57);
        \u0275\u0275listener("click", function OpenChallengesComponent_Template_button_click_132_listener() {
          return ctx.enterChallenge(ctx.challenges[1]);
        });
        \u0275\u0275text(133, "Enter Challenge \u2013 \xA31");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(134, "div", 41)(135, "div", 42)(136, "div", 43);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(137, "svg", 44);
        \u0275\u0275element(138, "path", 60)(139, "path", 61)(140, "path", 62);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(141, "span", 63);
        \u0275\u0275text(142, "Ages 11+");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(143, "h3", 48);
        \u0275\u0275text(144, "Entrepreneurship and Innovation Accelerator");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(145, "p", 49);
        \u0275\u0275text(146, "Spot everyday challenges and devise innovative fixes. Develop a business mindset and learn how to present your ideas with confidence.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(147, "div", 50)(148, "span", 51);
        \u0275\u0275text(149, "Your Task:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(150, "p", 52);
        \u0275\u0275text(151, "Pitch your idea in a sharp 90-second video, outlining beneficiaries, mechanics, and standout features.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(152, "div", 53)(153, "div", 54)(154, "span", 55);
        \u0275\u0275text(155, "Earn");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(156, "span", 56);
        \u0275\u0275text(157, "Emerging Innovator Credential");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(158, "div", 54)(159, "span", 55);
        \u0275\u0275text(160, "Extras");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(161, "span", 56);
        \u0275\u0275text(162, "Business plan templates and mentorship matching opportunities.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(163, "button", 57);
        \u0275\u0275listener("click", function OpenChallengesComponent_Template_button_click_163_listener() {
          return ctx.enterChallenge(ctx.challenges[2]);
        });
        \u0275\u0275text(164, "Enter Challenge \u2013 \xA31");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(165, "div", 64)(166, "div", 41)(167, "div", 42)(168, "div", 43);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(169, "svg", 44);
        \u0275\u0275element(170, "rect", 65)(171, "line", 66);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(172, "span", 59);
        \u0275\u0275text(173, "Ages 5+");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(174, "h3", 48);
        \u0275\u0275text(175, "App Design and Logic Certification");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(176, "p", 49);
        \u0275\u0275text(177, "Brainstorm an app concept, draw key screens, and outline simple interactions.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(178, "div", 50)(179, "span", 51);
        \u0275\u0275text(180, "Your Task:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(181, "p", 52);
        \u0275\u0275text(182, "Present in a 2-minute video \u2014 no code necessary.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(183, "div", 53)(184, "div", 54)(185, "span", 55);
        \u0275\u0275text(186, "Earn");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(187, "span", 56);
        \u0275\u0275text(188, "Digital Design Certification");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(189, "div", 54)(190, "span", 55);
        \u0275\u0275text(191, "Extras");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(192, "span", 56);
        \u0275\u0275text(193, "UI/UX starter kits and logic puzzle resources.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(194, "button", 57);
        \u0275\u0275listener("click", function OpenChallengesComponent_Template_button_click_194_listener() {
          return ctx.enterChallenge(ctx.challenges[3]);
        });
        \u0275\u0275text(195, "Enter Challenge \u2013 \xA31");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(196, "div", 41)(197, "div", 42)(198, "div", 43);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(199, "svg", 44);
        \u0275\u0275element(200, "path", 67)(201, "line", 68);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(202, "span", 69);
        \u0275\u0275text(203, "Open to All Ages");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(204, "h3", 48);
        \u0275\u0275text(205, "QuickChef Culinary Mastery Award");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(206, "p", 49);
        \u0275\u0275text(207, "Race the clock for 25 minutes to prepare a dish from scratch.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(208, "div", 50)(209, "span", 51);
        \u0275\u0275text(210, "Your Task:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(211, "p", 52);
        \u0275\u0275text(212, "Capture the journey and edit into a 2-minute video sharing its personal story.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(213, "div", 53)(214, "div", 54)(215, "span", 55);
        \u0275\u0275text(216, "Earn");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(217, "span", 56);
        \u0275\u0275text(218, "Culinary Speed Mastery Award");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(219, "div", 54)(220, "span", 55);
        \u0275\u0275text(221, "Extras");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(222, "span", 56);
        \u0275\u0275text(223, "Recipe archives and virtual cooking class previews.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(224, "button", 57);
        \u0275\u0275listener("click", function OpenChallengesComponent_Template_button_click_224_listener() {
          return ctx.enterChallenge(ctx.challenges[4]);
        });
        \u0275\u0275text(225, "Enter Challenge \u2013 \xA31");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(226, "section", 70)(227, "div", 15)(228, "div", 37)(229, "h2", 38);
        \u0275\u0275text(230, "How Scoring Works");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(231, "p", 71);
        \u0275\u0275text(232, "Merit-first scoring with community support");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(233, "div", 72)(234, "div", 73)(235, "div", 74);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(236, "svg", 75);
        \u0275\u0275element(237, "path", 76);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(238, "h3", 77);
        \u0275\u0275text(239, "Understanding Lift Support");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(240, "p", 78);
        \u0275\u0275text(241, "After approval, you'll get a personal shareable link and QR code. Supporters can send a \xA31 Lift to cheer you on, adding +1 to your community score per Lift. Your core project quality drives 65% of the score, making Lifts a helpful but secondary element.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(242, "div", 79)(243, "div", 80)(244, "div", 81)(245, "div", 82)(246, "div", 83);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(247, "svg", 84);
        \u0275\u0275element(248, "polygon", 85);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(249, "h3", 86);
        \u0275\u0275text(250, "Project Merit");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(251, "span", 87);
        \u0275\u0275text(252, "65%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(253, "p", 78);
        \u0275\u0275text(254, "Assessed for overall quality, originality, clarity, and relevance.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(255, "div", 80)(256, "div", 81)(257, "div", 82)(258, "div", 83);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(259, "svg", 84);
        \u0275\u0275element(260, "path", 76);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(261, "h3", 86);
        \u0275\u0275text(262, "Community Support");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(263, "span", 88);
        \u0275\u0275text(264, "35%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(265, "p", 78);
        \u0275\u0275text(266, "Your Lifts, normalized against the category's top count for equity.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(267, "div", 89)(268, "div", 73)(269, "div", 90);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(270, "svg", 91);
        \u0275\u0275element(271, "rect", 92)(272, "line", 93)(273, "line", 94)(274, "path", 95);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(275, "h3", 77);
        \u0275\u0275text(276, "Score Calculation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(277, "div", 96);
        \u0275\u0275text(278, "Final Score = (Merit Score \xD7 0.65) + (Normalized Lifts \xD7 0.35)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(279, "div", 97)(280, "div", 98)(281, "span", 99);
        \u0275\u0275text(282, "Example A:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(283, "p", 100);
        \u0275\u0275text(284, "90/100 merit with 850 Lifts (category max 1500) = ");
        \u0275\u0275elementStart(285, "strong");
        \u0275\u0275text(286, "79 points");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(287, "div", 98)(288, "span", 99);
        \u0275\u0275text(289, "Example B:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(290, "p", 100);
        \u0275\u0275text(291, "84/100 with max Lifts = ");
        \u0275\u0275elementStart(292, "strong");
        \u0275\u0275text(293, "88.6 points");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(294, "p", 101);
        \u0275\u0275text(295, "Emphasizing strong ideas over sheer popularity.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(296, "div", 89)(297, "div", 102)(298, "div", 103);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(299, "svg", 104);
        \u0275\u0275element(300, "circle", 105)(301, "line", 106)(302, "line", 107);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(303, "h3", 77);
        \u0275\u0275text(304, "Purpose of the \xA31 Entry Fee");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(305, "p", 78);
        \u0275\u0275text(306, "This small fee verifies your submission, covers prize pools and certificates, and maintains a level playing field. It never influences your score.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(307, "div", 108)(308, "div", 109)(309, "div", 110)(310, "div", 103);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(311, "svg", 104);
        \u0275\u0275element(312, "rect", 111)(313, "line", 112)(314, "line", 113)(315, "line", 114);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(316, "h3", 77);
        \u0275\u0275text(317, "Key Dates");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(318, "div", 115)(319, "span", 116);
        \u0275\u0275text(320, "Registration Opens");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(321, "span", 117);
        \u0275\u0275text(322, "7 November");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(323, "div", 115)(324, "span", 116);
        \u0275\u0275text(325, "Challenge Ends");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(326, "span", 118);
        \u0275\u0275text(327, "25 April 2026");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(328, "div", 109)(329, "div", 110)(330, "div", 103);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(331, "svg", 104);
        \u0275\u0275element(332, "circle", 105)(333, "line", 119)(334, "line", 120);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(335, "h3", 77);
        \u0275\u0275text(336, "Essential Rules");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(337, "ul", 121)(338, "li");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(339, "svg", 122);
        \u0275\u0275element(340, "path", 123);
        \u0275\u0275elementEnd();
        \u0275\u0275text(341, " All original work \u2014 no copies or AI creations ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(342, "li");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(343, "svg", 122);
        \u0275\u0275element(344, "path", 123);
        \u0275\u0275elementEnd();
        \u0275\u0275text(345, " Submit via YouTube or Google Drive (up to 200 MB) ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(346, "li");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(347, "svg", 122);
        \u0275\u0275element(348, "path", 123);
        \u0275\u0275elementEnd();
        \u0275\u0275text(349, " Video lengths: 30 seconds to 3 minutes, based on category ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(350, "li");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(351, "svg", 122);
        \u0275\u0275element(352, "path", 123);
        \u0275\u0275elementEnd();
        \u0275\u0275text(353, " One entry per category per person (multi-category entries welcome) ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(354, "li");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(355, "svg", 122);
        \u0275\u0275element(356, "path", 123);
        \u0275\u0275elementEnd();
        \u0275\u0275text(357, " Under-18s must have parent/guardian approval ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(358, "li");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(359, "svg", 122);
        \u0275\u0275element(360, "path", 123);
        \u0275\u0275elementEnd();
        \u0275\u0275text(361, " Shown in \xA3; local currencies may vary in promotions ");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(362, "section", 124)(363, "div", 15)(364, "div", 37)(365, "div", 125);
        \u0275\u0275text(366, "Real Rewards");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(367, "h2", 38);
        \u0275\u0275text(368, "Prizes and Perks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(369, "p", 39);
        \u0275\u0275text(370, "Recognition, cash prizes, and career-boosting opportunities");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(371, "div", 126)(372, "div", 127)(373, "div", 128);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(374, "svg", 129);
        \u0275\u0275element(375, "rect", 130)(376, "circle", 131)(377, "line", 132)(378, "line", 133);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(379, "h4", 134);
        \u0275\u0275text(380, "\xA31,000 Cash Prize");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(381, "p", 135);
        \u0275\u0275text(382, "For each category champion");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(383, "div", 127)(384, "div", 128);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(385, "svg", 129);
        \u0275\u0275element(386, "path", 136)(387, "path", 137)(388, "path", 138)(389, "path", 139)(390, "path", 140);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(391, "h4", 134);
        \u0275\u0275text(392, "Engraved Trophy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(393, "p", 135);
        \u0275\u0275text(394, "And framed certificate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(395, "div", 127)(396, "div", 128);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(397, "svg", 129);
        \u0275\u0275element(398, "path", 141)(399, "path", 142);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(400, "h4", 134);
        \u0275\u0275text(401, "Flagship Course Access");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(402, "p", 135);
        \u0275\u0275text(403, "Complimentary for top 100 entries");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(404, "div", 127)(405, "div", 128);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(406, "svg", 129);
        \u0275\u0275element(407, "circle", 143)(408, "path", 144);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(409, "h4", 134);
        \u0275\u0275text(410, "Scholarship Pathways");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(411, "p", 135);
        \u0275\u0275text(412, "Shared with partner universities");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(413, "div", 145)(414, "div", 127)(415, "div", 128);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(416, "svg", 129);
        \u0275\u0275element(417, "rect", 92)(418, "path", 146);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(419, "h4", 134);
        \u0275\u0275text(420, "Industry Immersions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(421, "p", 135);
        \u0275\u0275text(422, "Virtual or on-site visits");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(423, "div", 127)(424, "div", 128);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(425, "svg", 129);
        \u0275\u0275element(426, "path", 147)(427, "polyline", 148)(428, "line", 149)(429, "line", 150);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(430, "h4", 134);
        \u0275\u0275text(431, "Digital Certificates");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(432, "p", 135);
        \u0275\u0275text(433, "For every valid entry");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(434, "div", 127)(435, "div", 128);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(436, "svg", 129);
        \u0275\u0275element(437, "path", 151)(438, "circle", 152)(439, "path", 153)(440, "path", 154);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(441, "h4", 134);
        \u0275\u0275text(442, "Sponsorship Pathways");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(443, "p", 135);
        \u0275\u0275text(444, "To sponsors connected");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(445, "section", 155)(446, "div", 15)(447, "div", 156)(448, "div", 157);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(449, "svg", 158);
        \u0275\u0275element(450, "path", 159);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(451, "h2", 160);
        \u0275\u0275text(452, "Your Adventure Starts Here!");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(453, "p", 161);
        \u0275\u0275text(454, "Sign up now to gain fresh skills, showcase your talent, and compete for \xA31,000 prizes, certifications, and career-boosting connections.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(455, "div", 11)(456, "button", 12);
        \u0275\u0275listener("click", function OpenChallengesComponent_Template_button_click_456_listener() {
          return ctx.scrollToChallenges();
        });
        \u0275\u0275text(457, "Enter a Challenge - \xA31");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(458, "button", 13);
        \u0275\u0275listener("click", function OpenChallengesComponent_Template_button_click_458_listener() {
          return ctx.scrollToChallenges();
        });
        \u0275\u0275text(459, "Explore All Challenges");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(460, "p", 162);
        \u0275\u0275text(461, "Organised by In My Academy Ltd UK \u2014 empowering the next generation through project-based global learning.");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(462, "footer", 163)(463, "div", 15)(464, "div", 164)(465, "div", 165)(466, "div", 166);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(467, "svg", 158);
        \u0275\u0275element(468, "path", 167)(469, "path", 168);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(470, "div")(471, "span", 169);
        \u0275\u0275text(472, "Address");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(473, "div", 170);
        \u0275\u0275text(474, "IN MY ACADEMY LTD 71-75, Shelton Street,");
        \u0275\u0275element(475, "br");
        \u0275\u0275text(476, "Covent Garden, London, WC2H 9JQ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(477, "div", 165)(478, "div", 166);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(479, "svg", 158);
        \u0275\u0275element(480, "path", 171);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(481, "div")(482, "span", 169);
        \u0275\u0275text(483, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(484, "div", 170);
        \u0275\u0275text(485, "info@inmyacademy.com");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(486, "div", 165)(487, "div", 166);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(488, "svg", 158);
        \u0275\u0275element(489, "path", 172);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(490, "div")(491, "span", 169);
        \u0275\u0275text(492, "Call");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(493, "div", 170);
        \u0275\u0275text(494, "+447748416224");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(495, "div", 173)(496, "div")(497, "p", 174);
        \u0275\u0275text(498, "We're more than a platform\u2014we're a global powerhouse redefining education with interactive, real-world mastery that excites, engages, and empowers you to achieve the impossible.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(499, "div", 175)(500, "span", 176);
        \u0275\u0275text(501, "Follow on:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(502, "a", 177);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(503, "svg", 178);
        \u0275\u0275element(504, "path", 179);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(505, "a", 180);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(506, "svg", 178);
        \u0275\u0275element(507, "path", 181);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(508, "a", 182);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(509, "svg", 178);
        \u0275\u0275element(510, "path", 183);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(511, "div")(512, "h4", 184);
        \u0275\u0275text(513, "Quick Links");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(514, "ul", 185)(515, "li")(516, "a", 186);
        \u0275\u0275text(517, "About");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(518, "li")(519, "a", 186);
        \u0275\u0275text(520, "Course");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(521, "li")(522, "a", 186);
        \u0275\u0275text(523, "Contact Us");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(524, "li")(525, "a", 186);
        \u0275\u0275text(526, "Blog");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(527, "div")(528, "h4", 184);
        \u0275\u0275text(529, "SkillStorm Global Competitions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(530, "ul", 185)(531, "li")(532, "a", 186);
        \u0275\u0275text(533, "Global Open Challenges");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(534, "li")(535, "a", 186);
        \u0275\u0275text(536, "Global Mastery Battles");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(537, "li")(538, "a", 186);
        \u0275\u0275text(539, "Global School competitions");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(540, "div", 187);
        \u0275\u0275text(541, "\xA9 2025 All Rights Reserved");
        \u0275\u0275elementEnd()()();
      }
    }, dependencies: [CommonModule, RouterModule], styles: ['@import "https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;400;500;600;700&family=DM+Sans:wght@400;500;600;700;800&display=swap";\n\n\n\n@font-face {\n  font-family: "Gilmer";\n  src:\n    local("Gilmer Bold"),\n    url(/assets/fonts/Gilmer-Bold.woff2) format("woff2"),\n    url(/assets/fonts/Gilmer-Bold.woff) format("woff");\n  font-weight: 700;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: "Gilmer";\n  src:\n    local("Gilmer"),\n    url(/assets/fonts/Gilmer-Regular.woff2) format("woff2"),\n    url(/assets/fonts/Gilmer-Regular.woff) format("woff");\n  font-weight: 400;\n  font-style: normal;\n  font-display: swap;\n}\n[_nghost-%COMP%] {\n  display: block;\n  font-family: "Kumbh Sans", sans-serif;\n  background: #FFFFFF;\n  color: #333333;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-size: 16px;\n  line-height: 1.5;\n}\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1320px;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 20px;\n  padding-right: 20px;\n  box-sizing: border-box;\n}\n.hero-section[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  padding: 52px 0 0 0;\n  text-align: center;\n}\n.hero-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  border: 1.5px solid #FF8C00;\n  border-radius: 50px;\n  padding: 8px 20px;\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  color: #FF8C00;\n  margin-bottom: 32px;\n  background: transparent;\n  line-height: 1;\n}\n.hero-pill[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  flex-shrink: 0;\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-family:\n    "Gilmer",\n    "DM Sans",\n    "Poppins",\n    sans-serif;\n  font-size: 44px;\n  font-weight: 700;\n  color: #000000;\n  line-height: 1.2;\n  margin: 0 0 20px 0;\n  letter-spacing: -0.5px;\n}\n.hero-title[_ngcontent-%COMP%]   .accent[_ngcontent-%COMP%] {\n  color: #FF8C00;\n}\n.hero-subtitle[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 17px;\n  font-weight: 400;\n  color: #4B5563;\n  line-height: 1.65;\n  max-width: 720px;\n  width: 100%;\n  margin: 0 auto 40px auto;\n  text-align: center;\n}\n.hero-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 60px;\n}\n.btn-red[_ngcontent-%COMP%] {\n  background: #FF8C00;\n  color: #FFFFFF;\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 16px;\n  font-weight: 700;\n  padding: 14px 30px;\n  border-radius: 50px;\n  border: none;\n  cursor: pointer;\n  white-space: nowrap;\n  display: inline-flex;\n  align-items: center;\n  line-height: 1;\n  transition: background 0.2s;\n}\n.btn-red[_ngcontent-%COMP%]:hover {\n  background: #E67E00;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  color: #111111;\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  padding: 13px 30px;\n  border-radius: 50px;\n  border: 1.5px solid #111111;\n  cursor: pointer;\n  white-space: nowrap;\n  display: inline-flex;\n  align-items: center;\n  line-height: 1;\n  transition: background 0.2s;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  background: #F5F5F5;\n}\n.stats-section[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  padding: 30px 0 80px 0;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  max-width: 1120px;\n  width: 100%;\n  padding: 80px 50px;\n  margin: 0 auto;\n  align-items: flex-start;\n}\n.stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.stat-circle[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 16px;\n  background: #FFF7ED;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n  color: #EA580C;\n  flex-shrink: 0;\n}\n.stat-circle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-family:\n    "Gilmer",\n    "DM Sans",\n    "Poppins",\n    sans-serif;\n  font-size: 28px;\n  font-weight: 700;\n  color: #000000;\n  line-height: 1.2;\n  margin-bottom: 6px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 15px;\n  font-weight: 400;\n  color: #6B7280;\n  line-height: 1.4;\n}\n.section-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 48px;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-family:\n    "Gilmer",\n    "DM Sans",\n    "Poppins",\n    sans-serif;\n  font-size: 28px;\n  font-weight: 700;\n  color: #000000;\n  line-height: 1.25;\n  margin: 0 0 12px 0;\n}\n.section-subtitle[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  color: #6B7280;\n  line-height: 1.5;\n  max-width: 760px;\n  margin: 0 auto;\n}\n.challenges-section[_ngcontent-%COMP%] {\n  background: #fbfbfb;\n  padding: 80px 0;\n}\n.challenges-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 28px;\n  align-items: stretch;\n}\n.challenge-row-2[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 28px;\n  margin-top: 28px;\n  justify-content: center;\n  align-items: stretch;\n}\n.challenge-row-2[_ngcontent-%COMP%]   .challenge-card[_ngcontent-%COMP%] {\n  width: calc(33.333% - 9px);\n  flex-shrink: 0;\n}\n.challenge-card[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1.6px solid rgba(117, 119, 131, 0.21);\n  border-radius: 10px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  box-shadow: none;\n  height: 100%;\n}\n.card-top-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 20px;\n}\n.card-icon-box[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  background: #FFF7ED;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.card-icon-box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  color: #EA580C;\n  stroke: #EA580C;\n}\n.age-badge[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 12px 24px;\n  border-radius: 35px;\n  white-space: nowrap;\n  line-height: 1;\n}\n.badge-green[_ngcontent-%COMP%] {\n  background: #E8F8EF;\n  color: #1A7A45;\n  border: 1.5px solid #5DBE8A;\n}\n.badge-blue[_ngcontent-%COMP%] {\n  background: #0019ff59;\n  color: #2c3587;\n  border: 0.8px solid #2c3587;\n}\n.badge-red[_ngcontent-%COMP%] {\n  background: #FDEAEA;\n  color: #C0392B;\n  border: 1.5px solid #E88B8B;\n}\n.badge-orange[_ngcontent-%COMP%] {\n  background: #FFF5E9;\n  color: #CC6600;\n  border: 1.5px solid #FFBE7A;\n}\n.badge-orange-outline[_ngcontent-%COMP%] {\n  background: #fe9a0024;\n  color: #fe9a00;\n  border: 0.8px solid #fe9a00;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-family:\n    "Gilmer",\n    "DM Sans",\n    "Poppins",\n    sans-serif;\n  font-size: 18px;\n  font-weight: 700;\n  color: #000000;\n  line-height: 18px;\n  margin: 0 0 12px 0;\n}\n.card-description[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  color: #757783;\n  line-height: 28px;\n  margin: 0 0 16px 0;\n}\n.card-task-box[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  border-radius: 8px;\n  padding: 10px;\n  margin-bottom: 22px;\n  border: none;\n}\n.card-task-label[_ngcontent-%COMP%] {\n  font-family:\n    "Gilmer",\n    "DM Sans",\n    "Poppins",\n    sans-serif;\n  font-size: 18px;\n  font-weight: 700;\n  color: #000000;\n  display: block;\n  margin-bottom: 8px;\n}\n.card-task-text[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  color: #757783;\n  line-height: 1.6;\n  margin: 0;\n}\n.card-details-area[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.card-detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.detail-pill[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  color: #000000;\n  background: #f5f5f5;\n  border-radius: 35px;\n  padding: 12px 24px;\n  white-space: nowrap;\n  flex-shrink: 0;\n  text-align: center;\n}\n.detail-text[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  color: #757783;\n  line-height: 1.4;\n}\n.btn-card-enter[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  background: #fe9a00;\n  color: #ffffff;\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 10px;\n  border-radius: 3px;\n  border: none;\n  cursor: pointer;\n  text-align: center;\n  margin-top: auto;\n  line-height: 1;\n  transition: background 0.2s;\n}\n.btn-card-enter[_ngcontent-%COMP%]:hover {\n  background: #E67E00;\n}\n.scoring-section[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  padding: 80px 0;\n}\n.scoring-card[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border: 1px solid #E8E8E8;\n  border-radius: 12px;\n  padding: 28px 32px;\n  box-shadow: 0 2px 14px rgba(224, 224, 224, 0.7);\n  margin-bottom: 20px;\n}\n.scoring-card-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 14px;\n}\n.scoring-icon-box[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  background: #FFF5E9;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  color: #FF8C00;\n}\n.scoring-icon-box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n}\n.scoring-icon-box.blue[_ngcontent-%COMP%] {\n  background: #EEF2FF;\n  color: #3B5FDB;\n}\n.scoring-icon-box.pink[_ngcontent-%COMP%] {\n  background: #FFF0F3;\n  color: #E84393;\n}\n.scoring-card-title[_ngcontent-%COMP%] {\n  font-family:\n    "Gilmer",\n    "DM Sans",\n    "Poppins",\n    sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n  color: #000000;\n  line-height: 1.35;\n  margin: 0;\n}\n.scoring-card-body[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 17px;\n  font-weight: 400;\n  color: #6B7280;\n  line-height: 1.65;\n  margin: 0;\n}\n.scoring-two-col[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  margin-bottom: 20px;\n  align-items: stretch;\n}\n.scoring-two-col[_ngcontent-%COMP%]   .scoring-card[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.scoring-two-col-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.scoring-pct-badge[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 13px;\n  font-weight: 700;\n  padding: 4px 12px;\n  border-radius: 50px;\n  line-height: 1.4;\n}\n.pct-orange[_ngcontent-%COMP%] {\n  background: #FFF5E9;\n  color: #CC6600;\n  border: 1.5px solid #FFBE7A;\n}\n.pct-red[_ngcontent-%COMP%] {\n  background: #FDEAEA;\n  color: #C0392B;\n  border: 1.5px solid #E88B8B;\n}\n.formula-box[_ngcontent-%COMP%] {\n  background: #F9F9F9;\n  border-radius: 8px;\n  padding: 16px 20px;\n  font-family: "Courier New", monospace;\n  font-size: 15px;\n  font-weight: 600;\n  color: #111111;\n  margin: 16px 0 20px 0;\n  border: 1px solid #EEEEEE;\n  line-height: 1.4;\n}\n.examples-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  margin-bottom: 14px;\n}\n.example-box[_ngcontent-%COMP%] {\n  background: #F9F9F9;\n  border-radius: 8px;\n  padding: 16px 20px;\n  border: 1px solid #EEEEEE;\n}\n.example-label[_ngcontent-%COMP%] {\n  font-family:\n    "Gilmer",\n    "DM Sans",\n    "Poppins",\n    sans-serif;\n  font-size: 15px;\n  font-weight: 700;\n  color: #000000;\n  display: block;\n  margin-bottom: 6px;\n}\n.example-text[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 14.5px;\n  font-weight: 400;\n  color: #6B7280;\n  line-height: 1.55;\n  margin: 0;\n}\n.example-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #000000;\n  font-weight: 700;\n}\n.scoring-italic-note[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 13px;\n  font-style: italic;\n  color: #9CA3AF;\n  margin: 0;\n  line-height: 1.4;\n}\n.dates-rules-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  margin-top: 20px;\n  align-items: stretch;\n}\n.dates-card[_ngcontent-%COMP%] {\n  background: #fbfbfb;\n  border: 1.6px solid rgba(117, 119, 131, 0.21);\n  border-radius: 12px;\n  padding: 28px 32px;\n  box-shadow: none;\n  height: 100%;\n}\n.date-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 0;\n  border-bottom: 1px solid #F3F4F6;\n}\n.date-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  padding-bottom: 0;\n}\n.date-row[_ngcontent-%COMP%]:first-child {\n  padding-top: 0;\n}\n.date-label[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  color: #6B7280;\n  line-height: 1.4;\n}\n.date-badge[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 14.5px;\n  font-weight: 600;\n  padding: 6px 16px;\n  border-radius: 8px;\n  line-height: 1.4;\n}\n.date-badge-gray[_ngcontent-%COMP%] {\n  background: #374151;\n  color: #FFFFFF;\n}\n.date-badge-outline[_ngcontent-%COMP%] {\n  color: #FF8C00;\n  border: 1.5px solid #FF8C00;\n  border-radius: 50px;\n}\n.rules-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.rules-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 15px;\n  font-weight: 400;\n  color: #374151;\n  line-height: 1.6;\n  margin-bottom: 14px;\n}\n.rules-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.rules-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  color: #FF8C00;\n  stroke: #FF8C00;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.prizes-section[_ngcontent-%COMP%] {\n  background: #fbfbfb;\n  padding: 80px 0;\n}\n.prizes-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 4px 16px;\n  border: 1px solid #FFBE7A;\n  background: #FFF5E9;\n  color: #CC6600;\n  border-radius: 50px;\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 13px;\n  font-weight: 600;\n  margin-bottom: 14px;\n  line-height: 1.6;\n}\n.prizes-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 20px;\n  align-items: stretch;\n}\n.prizes-row-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n  max-width: 75%;\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  align-items: stretch;\n}\n.prize-card[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  border: 0.8px solid rgba(117, 119, 131, 0.21);\n  border-radius: 15px;\n  padding: 15px;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 5px 0px;\n  height: 100%;\n}\n.prize-icon-box[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  background: #FFF5E9;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 14px;\n  color: #FF8C00;\n}\n.prize-icon-box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  stroke: #FF8C00;\n}\n.prize-title[_ngcontent-%COMP%] {\n  font-family:\n    "Gilmer",\n    "DM Sans",\n    "Poppins",\n    sans-serif;\n  font-size: 16px;\n  font-weight: 700;\n  color: #000000;\n  line-height: 1.35;\n  margin: 0 0 8px 0;\n}\n.prize-subtitle[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 13px;\n  font-weight: 400;\n  color: #6B7280;\n  line-height: 1.5;\n  margin: 0;\n}\n.cta-section[_ngcontent-%COMP%] {\n  background: transparent;\n  padding: 40px 0 80px 0;\n  text-align: center;\n}\n.cta-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.cta-sparkle-box[_ngcontent-%COMP%] {\n  width: 68px;\n  height: 68px;\n  background: #FFF5E9;\n  border-radius: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 24px;\n  color: #FF8C00;\n}\n.cta-sparkle-box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n}\n.cta-title[_ngcontent-%COMP%] {\n  font-family:\n    "Gilmer",\n    "DM Sans",\n    "Poppins",\n    sans-serif;\n  font-size: 36px;\n  font-weight: 700;\n  color: #000000;\n  line-height: 1.2;\n  margin: 0 0 14px 0;\n}\n.cta-subtitle[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  color: #555555;\n  line-height: 1.6;\n  margin: 0 auto 32px auto;\n  max-width: 580px;\n  width: 100%;\n  text-align: center;\n}\n.cta-note[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  color: #9CA3AF;\n  margin: 28px 0 0 0;\n  line-height: 1.5;\n}\n.cta-note[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #FF8C00;\n  text-decoration: none;\n}\n.site-footer[_ngcontent-%COMP%] {\n  background: #F3F4F6;\n  padding: 60px 0 40px 0;\n  font-family: "Kumbh Sans", sans-serif;\n}\n.footer-contact-bar[_ngcontent-%COMP%] {\n  background: #2c3587;\n  border-radius: 20px;\n  padding: 36px 44px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 24px;\n  margin-bottom: 56px;\n}\n.footer-contact-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex: 1;\n}\n.footer-contact-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: #FFFFFF;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #2A2F7F;\n  flex-shrink: 0;\n}\n.footer-contact-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.footer-contact-label[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 13px;\n  font-weight: 600;\n  color: #A5B4FC;\n  letter-spacing: 0.04em;\n  display: block;\n  margin-bottom: 4px;\n  text-transform: uppercase;\n}\n.footer-contact-value[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 15.5px;\n  font-weight: 600;\n  color: #FFFFFF;\n  line-height: 1.45;\n}\n.footer-main[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2.5fr 1fr 1.3fr;\n  gap: 48px;\n  margin-bottom: 44px;\n}\n.footer-col-desc[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 15px;\n  font-weight: 400;\n  color: #4B5563;\n  line-height: 1.7;\n  margin-bottom: 20px;\n}\n.social-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.social-label[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 14.5px;\n  font-weight: 600;\n  color: #4B5563;\n}\n.social-icon-btn[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: #2A2F7F;\n  color: #FFFFFF;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  transition: opacity 0.2s;\n}\n.social-icon-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.social-icon-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n}\n.footer-col-heading[_ngcontent-%COMP%] {\n  font-family:\n    "Gilmer",\n    "DM Sans",\n    "Poppins",\n    sans-serif;\n  font-size: 17px;\n  font-weight: 700;\n  color: #000000;\n  margin: 0 0 18px 0;\n  line-height: 1.3;\n}\n.footer-links-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.footer-links-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.footer-links-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 15px;\n  font-weight: 400;\n  color: #4B5563;\n  text-decoration: none;\n  line-height: 1.4;\n  transition: color 0.2s;\n}\n.footer-links-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #FF8C00;\n}\n.footer-bottom[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 48px;\n  padding-top: 32px;\n  border-top: 1px solid #E5E7EB;\n}\n.footer-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  color: #6B7280;\n  margin: 0;\n}\n@media (max-width: 1023px) {\n  .footer-contact-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 24px;\n  }\n  .footer-main[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 32px;\n  }\n  .footer-contact-item[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .footer-contact-value[_ngcontent-%COMP%] {\n    word-break: break-word;\n  }\n}\n@media (max-width: 767px) {\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0 15px;\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n  .hero-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n  }\n  .hero-buttons[_ngcontent-%COMP%]   .btn-red[_ngcontent-%COMP%], .hero-buttons[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 32px;\n    align-items: center;\n  }\n  .challenges-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .challenge-row-2[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .challenge-row-2[_ngcontent-%COMP%]   .challenge-card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .scoring-two-col[_ngcontent-%COMP%], .examples-grid[_ngcontent-%COMP%], .dates-rules-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .prizes-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .prizes-row-2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    max-width: 100%;\n  }\n  .scoring-card-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n@media (max-width: 1380px) {\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0 30px;\n  }\n}\n@media (max-width: 767px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 0 30px;\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .hero-subtitle[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .cta-subtitle[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .section-title[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 32px;\n  }\n  .challenges-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .challenge-row-2[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .challenge-row-2[_ngcontent-%COMP%]   .challenge-card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .scoring-two-col[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .examples-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .dates-rules-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .prizes-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .prizes-row-2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    max-width: 100%;\n  }\n}\n@media (min-width: 1200px) and (max-width: 1365px) {\n  .container[_ngcontent-%COMP%] {\n    padding-left: 50px;\n    padding-right: 50px;\n  }\n}\n/*# sourceMappingURL=open-challenges.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OpenChallengesComponent, { className: "OpenChallengesComponent", filePath: "src\\app\\pages\\open-challenges\\open-challenges.component.ts", lineNumber: 13 });
})();
export {
  OpenChallengesComponent
};
//# sourceMappingURL=chunk-4565CWMJ.js.map
