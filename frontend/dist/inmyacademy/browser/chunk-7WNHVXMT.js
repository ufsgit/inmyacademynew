import {
  RouterLink,
  RouterModule
} from "./chunk-RK72NEAB.js";
import "./chunk-PLXL2LZV.js";
import {
  CommonModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-C72BQOBI.js";

// src/app/pages/mastery-battles/mastery-battles.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.title;
var _c0 = () => [16, 4, 2, 1];
var _c1 = () => ["Work must be original \u2014 no AI or copied submissions", "Submit via YouTube or Google Drive (max 200 MB)", "Video length: 30 seconds \u2013 3 minutes (depends on track)", "One entry per track (multi-track participation allowed)", "Under-18s need parent/guardian consent", "Fees shown in \xA3; local promotions may display equivalents"];
var _c2 = (a0) => ["/skillstorm/tracks", a0];
function MasteryBattlesComponent_For_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 138);
    \u0275\u0275element(2, "img", 139);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 140)(4, "div", 141)(5, "div")(6, "h3", 142);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 143);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "button", 144);
    \u0275\u0275text(11, " Enter Track - \xA325 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const track_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", track_r1.image, \u0275\u0275sanitizeUrl)("alt", track_r1.title);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(track_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", track_r1.lectures || 0, " Lessons");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c2, ctx_r1.getSlug(track_r1.title)));
  }
}
function MasteryBattlesComponent_For_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 145);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 146);
    \u0275\u0275element(3, "path");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "div", 147);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 148);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const perk_r3 = ctx.$implicit;
    const i_r4 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275attribute("d", ctx_r1.perkIcons[i_r4] || ctx_r1.perkIcons[0]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(perk_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(perk_r3.subtitle);
  }
}
function MasteryBattlesComponent_For_148_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 150);
    \u0275\u0275text(1, "\u2192");
    \u0275\u0275elementEnd();
  }
}
function MasteryBattlesComponent_For_148_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 149);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, MasteryBattlesComponent_For_148_Conditional_2_Template, 2, 0, "span", 150);
  }
  if (rf & 2) {
    const n_r5 = ctx.$implicit;
    \u0275\u0275styleProp("background", n_r5 === 1 ? "#E60000" : "#F5F5F5")("color", n_r5 === 1 ? "#fff" : "#333");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r5);
    \u0275\u0275advance();
    \u0275\u0275conditional(2, n_r5 !== 1 ? 2 : -1);
  }
}
function MasteryBattlesComponent_For_191_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96)(1, "div", 151);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 152);
    \u0275\u0275element(3, "path", 153);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 154);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const rule_r6 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(rule_r6);
  }
}
var MasteryBattlesComponent = class _MasteryBattlesComponent {
  constructor() {
    this.tracks = [
      {
        id: 1,
        title: "Diplomatic Policy Leadership",
        description: "Dive into governance, diplomacy, and global relations \u2014 from public policy and civic leadership to persuasive debate and campaign strategy.",
        phase1: "Submit a policy pitch or debate video for shortlisting",
        final: "Shine in live negotiations and panel diplomacy rounds",
        extras: "Policy templates and access to virtual youth summits",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&q=80",
        lectures: 2
      },
      {
        id: 2,
        title: "Legal Advocacy Professional",
        description: "Understand justice systems, legal research, case writing, and courtroom communication.",
        phase1: "Submit a mock-trial or advocacy video",
        final: "Face live legal argument sessions with expert judges",
        extras: "Legal writing guides and virtual courtroom workshops",
        image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=500&q=80",
        lectures: 7
      },
      {
        id: 3,
        title: "Advanced Research Publication",
        description: "Apply real-world science and engineering skills \u2014 from research design to data storytelling.",
        phase1: "Submit a research abstract or visualisation",
        final: "Defend your findings live before academic judges",
        extras: "Research toolkits and academic publishing resources",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&q=80",
        lectures: 8
      },
      {
        id: 4,
        title: "Digital Media Strategy",
        description: "Create high-impact media content \u2014 mastering storytelling, editing, branding, and campaign strategy.",
        phase1: "Submit a digital media piece or article",
        final: "Present your live strategy to industry professionals",
        extras: "Media starter packs and virtual journalism labs",
        image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=500&q=80",
        lectures: 10
      },
      {
        id: 5,
        title: "Entrepreneurial Visionary Accelerator",
        description: "Turn ideas into ventures \u2014 explore innovation, market research, finance basics, and pitching mastery.",
        phase1: "Submit a business pitch video",
        final: "Pitch live to industry guests and investors",
        extras: "Business plan templates and mentorship opportunities",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&q=80",
        lectures: 7
      },
      {
        id: 6,
        title: "Executive Project Management",
        description: "Master leadership, time management, risk handling, and execution excellence.",
        phase1: "Submit a project plan or simulation",
        final: "Perform live project briefs under real constraints",
        extras: "Leadership frameworks and project templates",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80",
        lectures: 4
      },
      {
        id: 7,
        title: "Global Communication Mastery",
        description: "Develop confident communication through structured speech, presentation, and persuasive dialogue.",
        phase1: "Submit a communication analysis video",
        final: "Participate in live panel discussions",
        extras: "Public speaking guides and debate resources",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&q=80",
        lectures: 12
      },
      {
        id: 8,
        title: "Digital Systems Architecture",
        description: "Design the future \u2014 from coding logic and software design to complex system building.",
        phase1: "Submit a system design architecture plan",
        final: "Defend your architecture live before technical experts",
        extras: "Coding templates and cloud architecture credits",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&q=80",
        lectures: 6
      },
      {
        id: 9,
        title: "Investment Banking Elite",
        description: "Understand global finance \u2014 investment banking, markets, M&A, ethics, and modelling.",
        phase1: "Submit a financial model or market analysis",
        final: "Present a live M&A pitch to finance professionals",
        extras: "Financial modelling templates and industry reports",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&q=80",
        lectures: 6
      }
    ];
    this.perks = [
      { title: "Cash Awards", subtitle: "For Champions and top runners-up" },
      { title: "Custom Trophies", subtitle: "And framed certificates" },
      { title: "Premium Course Access", subtitle: "For top teams" },
      { title: "Scholarship Pathways", subtitle: "Via partner schools and programs" },
      { title: "Industry Visits", subtitle: "Virtual or in-person experiences" },
      { title: "Digital Certificates", subtitle: "For all approved participants" },
      { title: "Sponsorship Introductions", subtitle: "For outstanding teams" }
    ];
    this.perkIcons = [
      "M2 6h20v12H2zm10 8a2 2 0 100-4 2 2 0 000 4zm-6 0h.01M18 12h.01",
      "M9.937 15.5A2 2 0 008.5 14.063l-6.135-1.582a.5.5 0 010-.962L8.5 9.936A2 2 0 009.937 8.5l1.582-6.135a.5.5 0 01.963 0L14.063 8.5A2 2 0 0015.5 9.937l6.135 1.581a.5.5 0 010 .964L15.5 14.063a2 2 0 00-1.437 1.437l-1.582 6.135a.5.5 0 01-.963 0z",
      "M6 3h12l4 6-10 12-10-12z",
      "M22 10l-10-5-10 5 10 5zM6 12v5c3 3 9 3 12 0v-5",
      "M4 8h16v12H4zM8 8V6a2 2 0 012-2h4a2 2 0 012 2v2",
      "M12 22l-3-3-4 .5.5-4-3-3 3-3-.5-4 4-.5 3-3 3 3 4-.5-.5 4 3 3-3 3 .5 4-4 .5zM9 12l2 2 4-4",
      "M13 2L3 14h9l-1 8 10-12h-9z"
    ];
  }
  scrollToTracks() {
    const el = document.getElementById("tracks-section");
    if (el)
      el.scrollIntoView({ behavior: "smooth" });
  }
  getSlug(title) {
    return title.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");
  }
  static {
    this.\u0275fac = function MasteryBattlesComponent_Factory(t) {
      return new (t || _MasteryBattlesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MasteryBattlesComponent, selectors: [["app-mastery-battles"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 291, vars: 2, consts: [[2, "font-family", "'Poppins','Inter',sans-serif", "background", "#FFFFFF", "color", "#333333", "min-height", "100vh"], [2, "width", "100%", "position", "relative", "background", "#000", "line-height", "0"], ["autoplay", "", "loop", "", "muted", "", "playsinline", "", 2, "width", "100%", "height", "auto", "display", "block"], ["src", "https://ufs.net.in/inmyacademy/video/globalmastery.mp4", "type", "video/mp4"], [2, "background", "#FFFFFF", "padding", "64px 24px 56px", "text-align", "center"], [2, "display", "inline-flex", "align-items", "center", "gap", "6px", "border", "1px solid #E60000", "border-radius", "50px", "padding", "4px 16px", "margin-bottom", "20px"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#E60000", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 6v12"], ["d", "M17.196 9 6.804 15"], ["d", "M6.804 9l10.392 6"], [2, "font-size", "12px", "font-weight", "600", "color", "#E60000", "letter-spacing", "0.02em"], [2, "font-size", "46px", "font-weight", "800", "color", "#000000", "line-height", "1.2", "margin", "0 0 20px 0"], [2, "color", "#E60000"], [2, "font-size", "15px", "color", "#555555", "line-height", "1.7", "margin", "0 auto 48px", "max-width", "680px"], [2, "display", "flex", "gap", "20px", "justify-content", "center", "flex-wrap", "wrap", "margin-bottom", "80px"], ["onmouseover", "this.style.background='#C40000'", "onmouseout", "this.style.background='#E60000'", 2, "background", "#E60000", "color", "#FFFFFF", "border", "none", "border-radius", "8px", "padding", "12px 28px", "font-size", "13px", "font-weight", "700", "cursor", "pointer", "font-family", "'Poppins','Inter',sans-serif", "transition", "all 0.3s ease", 3, "click"], [2, "background", "#FFFFFF", "color", "#333333", "border", "1px solid #333333", "border-radius", "8px", "padding", "12px 28px", "font-size", "13px", "font-weight", "700", "cursor", "pointer", "font-family", "'Poppins','Inter',sans-serif", "transition", "all 0.3s ease", 3, "click"], [2, "max-width", "1050px", "margin", "0 auto"], [1, "stats-grid", 2, "display", "flex", "justify-content", "space-between", "gap", "24px"], [2, "display", "flex", "flex-direction", "column", "align-items", "center"], [2, "width", "96px", "height", "96px", "background", "#FDE8E8", "border-radius", "16px", "display", "flex", "align-items", "center", "justify-content", "center", "margin-bottom", "16px"], [2, "font-size", "20px", "font-weight", "800", "color", "#000000", "line-height", "1"], [2, "font-size", "13px", "color", "#888888", "margin-top", "4px"], ["width", "44", "height", "44", "viewBox", "0 0 24 24", "fill", "#FDE8E8", "stroke", "#E60000", "stroke-width", "1", "stroke-linecap", "round", "stroke-linejoin", "round"], ["transform", "rotate(-135 12 12)"], ["d", "M10 10.5 L19.5 10.5 L21 12 L19.5 13.5 L10 13.5 Z"], ["x1", "10", "y1", "12", "x2", "19.5", "y2", "12"], ["x", "8", "y", "8", "width", "2", "height", "8", "rx", "1"], ["x", "4", "y", "11", "width", "4", "height", "2"], ["cx", "3", "cy", "12", "r", "1.5"], ["transform", "rotate(-45 12 12)"], ["id", "tracks-section", 2, "background", "#FFFFFF", "padding", "64px 48px"], [2, "max-width", "1100px", "margin", "0 auto"], [2, "font-size", "32px", "font-weight", "800", "color", "#000000", "text-align", "center", "margin", "0 0 16px 0"], [2, "font-size", "15px", "color", "#555555", "text-align", "center", "margin", "0 auto 40px auto", "max-width", "700px"], [2, "display", "flex", "justify-content", "center", "gap", "16px", "margin-bottom", "48px", "flex-wrap", "wrap"], [2, "font-size", "12px", "font-weight", "600", "color", "#333333", "background", "#FFFFFF", "border", "1px solid #E5E7EB", "padding", "6px 16px", "border-radius", "24px"], [1, "courses-grid"], [1, "course-card"], [2, "background", "#FFFFFF", "padding", "80px 48px", "border-top", "1px solid #E8E8E8"], [2, "max-width", "1240px", "margin", "0 auto"], [2, "text-align", "center", "margin-bottom", "16px"], [2, "display", "inline-block", "border", "1px solid #F97316", "border-radius", "50px", "padding", "6px 20px", "font-size", "12px", "font-weight", "600", "color", "#F97316"], [2, "font-size", "36px", "font-weight", "800", "color", "#000000", "text-align", "center", "margin", "0 0 16px 0"], [2, "font-size", "16px", "color", "#6B7280", "text-align", "center", "margin", "0 auto 56px auto", "max-width", "600px"], [1, "perks-grid", 2, "display", "grid", "grid-template-columns", "repeat(4,1fr)", "gap", "24px"], [2, "background", "#FFFFFF", "border", "1px solid #E5E7EB", "border-radius", "16px", "padding", "32px", "display", "flex", "flex-direction", "column", "align-items", "flex-start", "text-align", "left", "box-shadow", "none"], [2, "background", "#FBFBFB", "padding", "64px 48px", "border-top", "1px solid #E8E8E8"], [2, "max-width", "1000px", "margin", "0 auto"], [2, "font-size", "28px", "font-weight", "700", "color", "#000000", "text-align", "center", "margin", "0 0 10px 0"], [2, "font-size", "15px", "color", "#666666", "text-align", "center", "margin", "0 0 40px 0"], [1, "phases-grid", 2, "display", "grid", "grid-template-columns", "1fr 1fr", "gap", "24px", "margin-bottom", "28px"], [2, "background", "#FBFBFB", "border", "0.8px solid rgba(21, 93, 252, 0.2)", "border-radius", "10px", "padding", "30px"], [2, "display", "flex", "align-items", "center", "gap", "12px", "margin-bottom", "16px"], [2, "width", "36px", "height", "36px", "background", "#155dfc", "border-radius", "8px", "display", "flex", "align-items", "center", "justify-content", "center"], ["width", "18", "height", "18", "fill", "none", "stroke", "#fff", "stroke-width", "2", "viewBox", "0 0 24 24"], ["d", "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"], [2, "font-size", "11px", "font-weight", "700", "color", "#155dfc", "text-transform", "uppercase", "letter-spacing", "0.08em"], [2, "font-size", "17px", "font-weight", "700", "color", "#000000"], [2, "font-size", "14px", "color", "#555555", "line-height", "1.7", "margin", "0 0 16px 0"], [2, "font-size", "13px", "font-weight", "800", "color", "#000000", "margin-bottom", "6px"], [2, "font-size", "13px", "color", "#555555", "margin", "0"], [2, "background", "#FBFBFB", "border", "0.8px solid rgba(252, 21, 21, 0.2)", "border-radius", "10px", "padding", "30px"], [2, "width", "36px", "height", "36px", "background", "#E60000", "border-radius", "8px", "display", "flex", "align-items", "center", "justify-content", "center"], ["d", "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"], ["d", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"], [2, "font-size", "11px", "font-weight", "700", "color", "#E60000", "text-transform", "uppercase", "letter-spacing", "0.08em"], [2, "margin-bottom", "10px"], [2, "display", "flex", "align-items", "center", "gap", "8px", "margin-bottom", "6px"], [2, "width", "6px", "height", "6px", "border-radius", "50%", "background", "#E60000"], [2, "font-size", "13px", "color", "#555"], [2, "display", "flex", "align-items", "center", "gap", "8px"], [2, "font-size", "13px", "font-weight", "800", "color", "#000000", "margin-bottom", "8px"], [2, "display", "flex", "align-items", "center", "gap", "6px", "flex-wrap", "wrap"], [2, "font-size", "12px", "color", "#E60000", "font-weight", "800", "margin-left", "4px"], [2, "font-size", "12px", "color", "#999", "margin-top", "6px"], [2, "background", "#FBFBFB", "border", "1px solid rgba(252, 21, 21, 0.2)", "border-radius", "10px", "padding", "24px 28px", "display", "flex", "gap", "20px", "align-items", "flex-start"], [2, "width", "40px", "height", "40px", "background", "#FEE2E2", "border-radius", "50%", "display", "flex", "align-items", "center", "justify-content", "center", "flex-shrink", "0"], ["width", "20", "height", "20", "fill", "none", "stroke", "#E60000", "stroke-width", "2", "viewBox", "0 0 24 24"], ["d", "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [2, "font-size", "15px", "font-weight", "700", "color", "#000000", "margin-bottom", "6px"], [2, "font-size", "14px", "color", "#555555", "line-height", "1.7", "margin", "0"], [1, "dates-grid", 2, "max-width", "1000px", "margin", "0 auto", "display", "grid", "grid-template-columns", "1fr 1fr", "gap", "24px"], [2, "background", "#FBFBFB", "border", "1.6px solid rgba(117, 119, 131, 0.21)", "border-radius", "10px", "padding", "30px"], [2, "display", "flex", "align-items", "center", "gap", "10px", "margin-bottom", "20px"], [2, "width", "32px", "height", "32px", "background", "#FEE2E2", "border-radius", "8px", "display", "flex", "align-items", "center", "justify-content", "center"], ["width", "16", "height", "16", "fill", "none", "stroke", "#E60000", "stroke-width", "2", "viewBox", "0 0 24 24"], ["d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], [2, "font-size", "18px", "font-weight", "700", "color", "#000000", "margin", "0"], [2, "display", "flex", "justify-content", "space-between", "align-items", "center", "padding", "14px 0", "border-bottom", "1px solid #F0F0F0"], [2, "font-size", "14px", "color", "#333333", "font-weight", "500"], [2, "font-size", "14px", "font-weight", "700", "color", "#10B981", "background", "#ECFDF5", "padding", "4px 12px", "border-radius", "20px"], [2, "display", "flex", "justify-content", "space-between", "align-items", "center", "padding", "14px 0"], [2, "font-size", "14px", "font-weight", "700", "color", "#FFFFFF", "background", "#E60000", "padding", "4px 12px", "border-radius", "20px"], [2, "font-size", "13px", "color", "#888888", "font-style", "italic", "margin-top", "8px"], ["d", "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"], [2, "display", "flex", "align-items", "flex-start", "gap", "10px", "margin-bottom", "10px"], [2, "background", "#FFFFFF", "padding", "72px 48px", "text-align", "center", "border-top", "1px solid #E8E8E8"], [2, "max-width", "600px", "margin", "0 auto"], [2, "width", "52px", "height", "52px", "background", "#FEE2E2", "border-radius", "12px", "margin", "0 auto 20px", "display", "flex", "align-items", "center", "justify-content", "center"], ["width", "26", "height", "26", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#E60000", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x1", "3", "y1", "21", "x2", "21", "y2", "3"], ["x1", "5.5", "y1", "13.5", "x2", "10.5", "y2", "18.5"], ["x1", "21", "y1", "21", "x2", "3", "y2", "3"], ["x1", "18.5", "y1", "13.5", "x2", "13.5", "y2", "18.5"], [2, "font-size", "32px", "font-weight", "800", "color", "#000000", "margin", "0 0 14px 0"], [2, "font-size", "16px", "color", "#555555", "line-height", "1.7", "margin", "0 0 32px 0"], [2, "display", "flex", "gap", "16px", "justify-content", "center", "flex-wrap", "wrap", "margin-bottom", "40px"], ["onmouseover", "this.style.background='#C40000'", "onmouseout", "this.style.background='#E60000'", 2, "background", "#E60000", "color", "#FFFFFF", "border", "none", "border-radius", "50px", "padding", "14px 32px", "font-size", "16px", "font-weight", "700", "cursor", "pointer", "font-family", "'Poppins','Inter',sans-serif", "transition", "background 0.3s ease", 3, "click"], [2, "background", "#FFFFFF", "color", "#000000", "border", "2px solid #000000", "border-radius", "50px", "padding", "14px 32px", "font-size", "16px", "font-weight", "700", "cursor", "pointer", "font-family", "'Poppins','Inter',sans-serif", 3, "click"], [2, "font-size", "13px", "color", "#999999"], [1, "site-footer"], [2, "max-width", "1320px", "margin", "0 auto", "padding", "0 20px"], [1, "footer-contact-bar"], [1, "footer-contact-item"], [1, "footer-contact-icon"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"], [1, "footer-contact-label"], [1, "footer-contact-value"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"], [1, "footer-main"], [1, "footer-col-desc"], [1, "social-links"], [1, "social-label"], ["href", "#", "aria-label", "Facebook", 1, "social-icon-btn"], ["fill", "currentColor", "viewBox", "0 0 24 24"], ["d", "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"], ["href", "#", "aria-label", "LinkedIn", 1, "social-icon-btn"], ["d", "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.119 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"], ["href", "#", "aria-label", "YouTube", 1, "social-icon-btn"], ["d", "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"], [1, "footer-col-heading"], [1, "footer-links-list"], ["href", "#"], [1, "footer-bottom"], [1, "course-card-image"], [1, "course-image", 3, "src", "alt"], [1, "course-card-body"], [1, "course-card-top-row"], [1, "course-card-title"], [1, "course-card-lessons"], [1, "enroll-btn", 3, "routerLink"], [2, "width", "48px", "height", "48px", "background", "#FDE8E8", "border-radius", "12px", "margin-bottom", "24px", "display", "flex", "align-items", "center", "justify-content", "center"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#E60000", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [2, "font-size", "16px", "font-weight", "800", "color", "#000000", "margin-bottom", "10px"], [2, "font-size", "14px", "color", "#888888", "line-height", "1.6", "font-weight", "400"], [2, "border-radius", "6px", "padding", "5px 10px", "font-size", "13px", "font-weight", "700"], [2, "color", "#999", "font-size", "12px"], [2, "width", "16px", "height", "16px", "border-radius", "50%", "background", "#E60000", "display", "flex", "align-items", "center", "justify-content", "center", "flex-shrink", "0", "margin-top", "2px"], ["width", "10", "height", "10", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#fff", "stroke-width", "3"], ["d", "M5 13l4 4L19 7"], [2, "font-size", "13px", "color", "#555555", "line-height", "1.5"]], template: function MasteryBattlesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "video", 2);
        \u0275\u0275element(3, "source", 3);
        \u0275\u0275text(4, " Your browser does not support the video tag. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "section", 4)(6, "div", 5);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(7, "svg", 6);
        \u0275\u0275element(8, "path", 7)(9, "path", 8)(10, "path", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(11, "span", 10);
        \u0275\u0275text(12, "Individual Competition");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "h1", 11);
        \u0275\u0275text(14, " Take the Stage.");
        \u0275\u0275element(15, "br");
        \u0275\u0275elementStart(16, "span", 12);
        \u0275\u0275text(17, "Rise as a Global Champion.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "p", 13);
        \u0275\u0275text(19, " Step into Global Mastery Battles, where ");
        \u0275\u0275elementStart(20, "strong", 12);
        \u0275\u0275text(21, "solo competitors aged 7 to 19");
        \u0275\u0275elementEnd();
        \u0275\u0275text(22, " showcase their skills in elite, career-focused challenges. Choose your track, prove your mastery, and rise as a Global Champion in your chosen field. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 14)(24, "button", 15);
        \u0275\u0275listener("click", function MasteryBattlesComponent_Template_button_click_24_listener() {
          return ctx.scrollToTracks();
        });
        \u0275\u0275text(25, "Choose Your Track");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "button", 16);
        \u0275\u0275listener("click", function MasteryBattlesComponent_Template_button_click_26_listener() {
          return ctx.scrollToTracks();
        });
        \u0275\u0275text(27, "View All Tracks");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 17)(29, "div", 18)(30, "div", 19);
        \u0275\u0275element(31, "div", 20);
        \u0275\u0275elementStart(32, "div", 21);
        \u0275\u0275text(33, "\xA320,000");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 22);
        \u0275\u0275text(35, "Prize Pool");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 19);
        \u0275\u0275element(37, "div", 20);
        \u0275\u0275elementStart(38, "div", 21);
        \u0275\u0275text(39, "Solo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 22);
        \u0275\u0275text(41, "Competition Style");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "div", 19);
        \u0275\u0275element(43, "div", 20);
        \u0275\u0275elementStart(44, "div", 21);
        \u0275\u0275text(45, "9");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "div", 22);
        \u0275\u0275text(47, "Pro Tracks");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "div", 19)(49, "div", 20);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(50, "svg", 23)(51, "g", 24);
        \u0275\u0275element(52, "path", 25)(53, "line", 26)(54, "rect", 27)(55, "rect", 28)(56, "circle", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "g", 30);
        \u0275\u0275element(58, "path", 25)(59, "line", 26)(60, "rect", 27)(61, "rect", 28)(62, "circle", 29);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(63, "div", 21);
        \u0275\u0275text(64, "7-19");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "div", 22);
        \u0275\u0275text(66, "Ages");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(67, "section", 31)(68, "div", 32)(69, "h2", 33);
        \u0275\u0275text(70, "Choose Your Mastery Battle Track");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "p", 34);
        \u0275\u0275text(72, "Select one or more professional-grade tracks aligned with your career interests. Each costs \xA325 to enter.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "div", 35)(74, "span", 36);
        \u0275\u0275text(75, "Trailblazers (10 and under)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "span", 36);
        \u0275\u0275text(77, "Visioneers (11-14)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "span", 36);
        \u0275\u0275text(79, "Strategists (15-19)");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(80, "div", 37);
        \u0275\u0275repeaterCreate(81, MasteryBattlesComponent_For_82_Template, 12, 7, "div", 38, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(83, "section", 39)(84, "div", 40)(85, "div", 41)(86, "span", 42);
        \u0275\u0275text(87, "Total pool: \xA330,000");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(88, "h2", 43);
        \u0275\u0275text(89, "Prizes & Opportunities");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "p", 44);
        \u0275\u0275text(91, "Awards distributed across age categories and the Grand Finale");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "div", 45);
        \u0275\u0275repeaterCreate(93, MasteryBattlesComponent_For_94_Template, 8, 3, "div", 46, _forTrack1);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(95, "section", 47)(96, "div", 48)(97, "h2", 49);
        \u0275\u0275text(98, "Competition Format");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "p", 50);
        \u0275\u0275text(100, "Two phases: online shortlisting and live knockout Grand Finale.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "div", 51)(102, "div", 52)(103, "div", 53)(104, "div", 54);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(105, "svg", 55);
        \u0275\u0275element(106, "path", 56);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(107, "div")(108, "div", 57);
        \u0275\u0275text(109, "Phase 1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "div", 58);
        \u0275\u0275text(111, "Online Shortlisting");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(112, "p", 59);
        \u0275\u0275text(113, "Submit your task (video, document, or project) as per the brief. Entries judged for creativity, clarity, and relevance.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "div", 60);
        \u0275\u0275text(115, "Advancement:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "p", 61);
        \u0275\u0275text(117, "Top 48 per track (16 per age group) advance to the Grand Finale.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(118, "div", 62)(119, "div", 53)(120, "div", 63);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(121, "svg", 55);
        \u0275\u0275element(122, "path", 64)(123, "path", 65);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(124, "div")(125, "div", 66);
        \u0275\u0275text(126, "Phase 2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(127, "div", 58);
        \u0275\u0275text(128, "Offline Grand Finale");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(129, "p", 59);
        \u0275\u0275text(130, "Location announced (regional hubs for accessibility).");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(131, "div", 67)(132, "div", 68);
        \u0275\u0275element(133, "div", 69);
        \u0275\u0275elementStart(134, "span", 70);
        \u0275\u0275text(135, "1-vs-1 live knockout battles \u2014 5\u20137 minutes each");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(136, "div", 68);
        \u0275\u0275element(137, "div", 69);
        \u0275\u0275elementStart(138, "span", 70);
        \u0275\u0275text(139, "Industry and academic expert judges");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(140, "div", 71);
        \u0275\u0275element(141, "div", 69);
        \u0275\u0275elementStart(142, "span", 70);
        \u0275\u0275text(143, "Judged on clarity, confidence, creativity, and skill");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(144, "div", 72);
        \u0275\u0275text(145, "Progression:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(146, "div", 73);
        \u0275\u0275repeaterCreate(147, MasteryBattlesComponent_For_148_Template, 3, 6, null, null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementStart(149, "span", 74);
        \u0275\u0275text(150, "Champion");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(151, "div", 75);
        \u0275\u0275text(152, "Per track per age category");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(153, "div", 76)(154, "div", 77);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(155, "svg", 78);
        \u0275\u0275element(156, "path", 79);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(157, "div")(158, "div", 80);
        \u0275\u0275text(159, "Purpose of the Entry Fee");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(160, "p", 81);
        \u0275\u0275text(161, "Your entry fee guarantees verified participation, funds the \xA310,000 global prize pool, and covers certification and logistics. It never affects your competition score.");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(162, "section", 47)(163, "div", 82)(164, "div", 83)(165, "div", 84)(166, "div", 85);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(167, "svg", 86);
        \u0275\u0275element(168, "path", 87);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(169, "h3", 88);
        \u0275\u0275text(170, "Key Dates");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(171, "div", 89)(172, "span", 90);
        \u0275\u0275text(173, "Registration Opened");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(174, "span", 91);
        \u0275\u0275text(175, "Now Open");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(176, "div", 92)(177, "span", 90);
        \u0275\u0275text(178, "Competition Ends:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(179, "span", 93);
        \u0275\u0275text(180, "30th December 2026");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(181, "div", 94);
        \u0275\u0275text(182, "Exact dates and venue announced later");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(183, "div", 83)(184, "div", 84)(185, "div", 85);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(186, "svg", 86);
        \u0275\u0275element(187, "path", 95);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(188, "h3", 88);
        \u0275\u0275text(189, "Rules");
        \u0275\u0275elementEnd()();
        \u0275\u0275repeaterCreate(190, MasteryBattlesComponent_For_191_Template, 6, 1, "div", 96, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(192, "section", 97)(193, "div", 98)(194, "div", 99);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(195, "svg", 100);
        \u0275\u0275element(196, "line", 101)(197, "line", 102)(198, "line", 103)(199, "line", 104);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(200, "h2", 105);
        \u0275\u0275text(201, "Ready to Rise?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(202, "p", 106);
        \u0275\u0275text(203, "Select your track, unleash your skills, and become a Global Mastery Champion.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(204, "div", 107)(205, "button", 108);
        \u0275\u0275listener("click", function MasteryBattlesComponent_Template_button_click_205_listener() {
          return ctx.scrollToTracks();
        });
        \u0275\u0275text(206, "Choose Your Track");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(207, "button", 109);
        \u0275\u0275listener("click", function MasteryBattlesComponent_Template_button_click_207_listener() {
          return ctx.scrollToTracks();
        });
        \u0275\u0275text(208, "View All Tracks");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(209, "p", 110);
        \u0275\u0275text(210, "Organised by In My Academy Ltd (UK) \u2014 empowering the next generation through global, project-based learning.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(211, "footer", 111)(212, "div", 112)(213, "div", 113)(214, "div", 114)(215, "div", 115);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(216, "svg", 116);
        \u0275\u0275element(217, "path", 117)(218, "path", 118);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(219, "div")(220, "span", 119);
        \u0275\u0275text(221, "Address");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(222, "div", 120);
        \u0275\u0275text(223, "IN MY ACADEMY LTD 71-75, Shelton Street,");
        \u0275\u0275element(224, "br");
        \u0275\u0275text(225, "Covent Garden, London, WC2H 9JQ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(226, "div", 114)(227, "div", 115);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(228, "svg", 116);
        \u0275\u0275element(229, "path", 121);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(230, "div")(231, "span", 119);
        \u0275\u0275text(232, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(233, "div", 120);
        \u0275\u0275text(234, "info@inmyacademy.com");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(235, "div", 114)(236, "div", 115);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(237, "svg", 116);
        \u0275\u0275element(238, "path", 122);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(239, "div")(240, "span", 119);
        \u0275\u0275text(241, "Call");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(242, "div", 120);
        \u0275\u0275text(243, "+447748416224");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(244, "div", 123)(245, "div")(246, "p", 124);
        \u0275\u0275text(247, "We're more than a platform\u2014we're a global powerhouse redefining education with interactive, real-world mastery that excites, engages, and empowers you to achieve the impossible.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(248, "div", 125)(249, "span", 126);
        \u0275\u0275text(250, "Follow on:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(251, "a", 127);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(252, "svg", 128);
        \u0275\u0275element(253, "path", 129);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(254, "a", 130);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(255, "svg", 128);
        \u0275\u0275element(256, "path", 131);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(257, "a", 132);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(258, "svg", 128);
        \u0275\u0275element(259, "path", 133);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(260, "div")(261, "h4", 134);
        \u0275\u0275text(262, "Quick Links");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(263, "ul", 135)(264, "li")(265, "a", 136);
        \u0275\u0275text(266, "About");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(267, "li")(268, "a", 136);
        \u0275\u0275text(269, "Course");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(270, "li")(271, "a", 136);
        \u0275\u0275text(272, "Contact Us");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(273, "li")(274, "a", 136);
        \u0275\u0275text(275, "Blog");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(276, "div")(277, "h4", 134);
        \u0275\u0275text(278, "SkillStorm Global Competitions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(279, "ul", 135)(280, "li")(281, "a", 136);
        \u0275\u0275text(282, "Global Open Challenges");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(283, "li")(284, "a", 136);
        \u0275\u0275text(285, "Global Mastery Battles");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(286, "li")(287, "a", 136);
        \u0275\u0275text(288, "Global School competitions");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(289, "div", 137);
        \u0275\u0275text(290, "\xA9 2025 All Rights Reserved");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(81);
        \u0275\u0275repeater(ctx.tracks);
        \u0275\u0275advance(12);
        \u0275\u0275repeater(ctx.perks);
        \u0275\u0275advance(54);
        \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
        \u0275\u0275advance(43);
        \u0275\u0275repeater(\u0275\u0275pureFunction0(1, _c1));
      }
    }, dependencies: [CommonModule, RouterModule, RouterLink], styles: ['\n\n.courses-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 280px);\n  justify-content: center;\n  gap: 24px;\n}\n.course-card[_ngcontent-%COMP%] {\n  width: 280px;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 15px;\n  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);\n  overflow: hidden;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  display: flex;\n  flex-direction: column;\n}\n.course-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);\n}\n.course-card-image[_ngcontent-%COMP%] {\n  position: relative;\n  height: 180px;\n  overflow: hidden;\n}\n.course-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.course-card-body[_ngcontent-%COMP%] {\n  padding: 18px 18px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  flex: 1;\n  justify-content: space-between;\n}\n.course-card-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #111827;\n  line-height: 1.3;\n  margin: 0 0 4px 0;\n}\n.course-card-lessons[_ngcontent-%COMP%] {\n  margin: 6px 0 0 0;\n  font-size: 13px;\n  font-weight: 600;\n  color: #4b5563;\n}\n.enroll-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #7c3aed;\n  color: #ffffff;\n  border: none;\n  border-radius: 10px;\n  padding: 10px 14px;\n  font-size: 13px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition:\n    transform 0.15s ease,\n    background 0.15s ease,\n    color 0.15s ease;\n  line-height: 1;\n}\n.enroll-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  background: #6d28d9;\n}\n.site-footer[_ngcontent-%COMP%] {\n  background: #F3F4F6;\n  padding: 60px 0 40px 0;\n  font-family: "Kumbh Sans", sans-serif;\n}\n.footer-contact-bar[_ngcontent-%COMP%] {\n  background: #2A2F7F;\n  border-radius: 20px;\n  padding: 36px 44px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 24px;\n  margin-bottom: 56px;\n}\n.footer-contact-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex: 1;\n}\n.footer-contact-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: #FFFFFF;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #2A2F7F;\n  flex-shrink: 0;\n}\n.footer-contact-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.footer-contact-label[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 13px;\n  font-weight: 600;\n  color: #A5B4FC;\n  letter-spacing: 0.04em;\n  display: block;\n  margin-bottom: 4px;\n  text-transform: uppercase;\n}\n.footer-contact-value[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 15.5px;\n  font-weight: 600;\n  color: #FFFFFF;\n  line-height: 1.45;\n}\n.footer-main[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2.5fr 1fr 1.3fr;\n  gap: 48px;\n  margin-bottom: 44px;\n}\n.footer-col-desc[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 15px;\n  font-weight: 400;\n  color: #4B5563;\n  line-height: 1.7;\n  margin-bottom: 20px;\n}\n.social-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.social-label[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 14.5px;\n  font-weight: 600;\n  color: #4B5563;\n}\n.social-icon-btn[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: #2A2F7F;\n  color: #FFFFFF;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  transition: opacity 0.2s;\n}\n.social-icon-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.social-icon-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n}\n.footer-col-heading[_ngcontent-%COMP%] {\n  font-family:\n    "Gilmer",\n    "DM Sans",\n    "Poppins",\n    sans-serif;\n  font-size: 17px;\n  font-weight: 700;\n  color: #000000;\n  margin: 0 0 18px 0;\n  line-height: 1.3;\n}\n.footer-links-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.footer-links-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.footer-links-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 15px;\n  font-weight: 400;\n  color: #4B5563;\n  text-decoration: none;\n  line-height: 1.4;\n  transition: color 0.2s;\n}\n.footer-links-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #FF8C00;\n}\n.footer-bottom[_ngcontent-%COMP%] {\n  border-top: 1px solid #E5E7EB;\n  padding-top: 24px;\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 14.5px;\n  font-weight: 400;\n  color: #6B7280;\n  line-height: 1.4;\n}\n@media (max-width: 768px) {\n  .footer-contact-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 28px 20px;\n    gap: 20px;\n  }\n  .footer-main[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 28px;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n    gap: 40px;\n  }\n  .tracks-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n  .perks-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n  .phases-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n  .dates-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n}\n/*# sourceMappingURL=mastery-battles.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MasteryBattlesComponent, { className: "MasteryBattlesComponent", filePath: "src\\app\\pages\\mastery-battles\\mastery-battles.component.ts", lineNumber: 12 });
})();
export {
  MasteryBattlesComponent
};
//# sourceMappingURL=chunk-7WNHVXMT.js.map
