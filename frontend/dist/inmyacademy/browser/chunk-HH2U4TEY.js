import {
  RouterLink,
  RouterModule
} from "./chunk-25CH7CJK.js";
import "./chunk-FHQOC34G.js";
import {
  environment
} from "./chunk-NTES7WD5.js";
import {
  HttpClient
} from "./chunk-QGS4RBVK.js";
import {
  CommonModule,
  __spreadProps,
  __spreadValues,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-EW7BAGJT.js";

// src/app/pages/mastery-battles/mastery-battles.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = () => [16, 8, 4, 2];
var _c1 = () => ["Work must be original \u2014 no AI or copied submissions", "Submit via YouTube or Google Drive (max 200 MB)", "Video length: 30 seconds \u2013 3 minutes (depends on track)", "One entry per track (multi-track participation allowed)", "Under-18s need parent/guardian consent", "Fees shown in \xA3; local promotions may display equivalents"];
var _c2 = (a0) => ["/tracks", a0];
function MasteryBattlesComponent_For_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 172);
    \u0275\u0275element(2, "img", 173);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 174)(4, "div", 175)(5, "div")(6, "h3", 176);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 177);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "button", 178);
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
    \u0275\u0275textInterpolate1("", track_r1.lectures || 0, " Modules");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c2, ctx_r1.getSlug(track_r1.title)));
  }
}
function MasteryBattlesComponent_For_235_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 179);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 180);
    \u0275\u0275text(3, "\u2192");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r3);
  }
}
function MasteryBattlesComponent_For_280_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 134);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 181);
    \u0275\u0275element(2, "polyline", 182);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 183);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const rule_r4 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(rule_r4);
  }
}
var MasteryBattlesComponent = class _MasteryBattlesComponent {
  constructor() {
    this.http = inject(HttpClient);
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
      { title: "\xA310,000 Prize Pool", subtitle: "Shared across tracks and age categories" },
      { title: "Cash + Trophy + Certificate", subtitle: "For each Champion" },
      { title: "Premium Course Access", subtitle: "For top finalists" },
      { title: "Scholarship Pathways", subtitle: "Via partner programs and universities" },
      { title: "Industry Immersions", subtitle: "In law, media, tech, business, and finance" },
      { title: "Digital Certificates", subtitle: "For all approved entries" },
      { title: "Sponsorship Introductions", subtitle: "Linking top talents with mentors and investors" }
    ];
    this.perkIcons = [
      "M2 6h20v12H2zm10 8a2 2 0 100-4 2 2 0 000 4zm-6 0h.01M18 12h.01",
      // Money / Cash
      "M6 9H4a2 2 0 00-2 2v1a5 5 0 005 5h.09M18 9h2a2 2 0 012 2v1a5 5 0 01-5 5h-.09M6 3h12v10a6 6 0 01-12 0V3zM9 21h6M12 17v4",
      // Trophy
      "M22 10L12 5 2 10l10 5 10-5zM6 12v5c3 3 9 3 12 0v-5",
      // Graduation Cap / Course
      "M12 15l-2 5l2-1l2 1l-2-5M12 3a6 6 0 1 0 0 12a6 6 0 0 0 0-12z",
      // Medal / Ribbon
      "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      // Building / Industry
      "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      // Document / Certificate
      "M17 21v-2a4 4 0 00-3-3.87M7 21v-2a4 4 0 013-3.87M12 14a4 4 0 100-8 4 4 0 000 8z"
      // People / Sponsorship
    ];
  }
  ngOnInit() {
    this.fetchTracks();
  }
  fetchTracks() {
    this.http.get(`${environment.apiUrl}/courses`).subscribe({
      next: (apiTracks) => {
        if (Array.isArray(apiTracks) && apiTracks.length > 0) {
          this.tracks = apiTracks.map((t) => {
            const defaultMatch = this.tracks.find((dt) => dt.title.trim().toLowerCase() === t.title.trim().toLowerCase());
            return __spreadProps(__spreadValues(__spreadValues({}, defaultMatch), t), {
              id: t.id,
              title: t.title,
              description: t.description || defaultMatch?.description || "",
              image: t.image || defaultMatch?.image || "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&q=80",
              lectures: this.getLessonCount(t)
            });
          });
        }
      },
      error: (err) => console.error("Failed to fetch tracks:", err)
    });
  }
  getLessonCount(track) {
    if (!track)
      return 0;
    if (Array.isArray(track.lessons))
      return track.lessons.length;
    if (typeof track.lessons === "string" && track.lessons.trim()) {
      try {
        const parsed = JSON.parse(track.lessons);
        if (Array.isArray(parsed))
          return parsed.length;
      } catch {
      }
    }
    return Number(track.lectures) || 0;
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MasteryBattlesComponent, selectors: [["app-mastery-battles"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 388, vars: 2, consts: [[2, "font-family", "'Poppins','Inter',sans-serif", "background", "#FFFFFF", "color", "#333333", "min-height", "100vh"], [1, "video-banner", 2, "width", "100%", "position", "relative", "background", "#000", "line-height", "0"], ["autoplay", "", "loop", "", "muted", "", "playsinline", "", 2, "width", "100%", "height", "auto", "display", "block"], ["src", "https://ufs.net.in/inmyacademy/video/globalmastery.mp4", "type", "video/mp4"], [1, "hero-section", "section-pad", 2, "background", "#FFFFFF", "text-align", "center"], [2, "display", "inline-flex", "align-items", "center", "gap", "6px", "border", "1px solid #E60000", "border-radius", "50px", "padding", "4px 16px", "margin-bottom", "20px"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#E60000", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 6v12"], ["d", "M17.196 9 6.804 15"], ["d", "M6.804 9l10.392 6"], [2, "font-size", "12px", "font-weight", "600", "color", "#E60000", "letter-spacing", "0.02em"], [2, "font-size", "46px", "font-weight", "800", "color", "#000000", "line-height", "1.2", "margin", "0 0 20px 0"], [2, "color", "#E60000"], [2, "font-size", "15px", "color", "#555555", "line-height", "1.7", "margin", "0 auto 48px", "max-width", "680px"], [2, "display", "flex", "gap", "20px", "justify-content", "center", "flex-wrap", "wrap", "margin-bottom", "80px"], ["onmouseover", "this.style.background='#C40000'", "onmouseout", "this.style.background='#E60000'", 2, "background", "#E60000", "color", "#FFFFFF", "border", "none", "border-radius", "8px", "padding", "12px 28px", "font-size", "13px", "font-weight", "700", "cursor", "pointer", "font-family", "'Poppins','Inter',sans-serif", "transition", "all 0.3s ease", 3, "click"], [2, "background", "#FFFFFF", "color", "#333333", "border", "1px solid #333333", "border-radius", "8px", "padding", "12px 28px", "font-size", "13px", "font-weight", "700", "cursor", "pointer", "font-family", "'Poppins','Inter',sans-serif", "transition", "all 0.3s ease", 3, "click"], [1, "format-container", 2, "max-width", "1050px", "margin", "0 auto"], [1, "stats-grid", 2, "display", "flex", "justify-content", "space-between", "gap", "24px"], [2, "display", "flex", "flex-direction", "column", "align-items", "center"], [2, "width", "64px", "height", "64px", "background", "#FDE8E8", "border-radius", "14px", "display", "flex", "align-items", "center", "justify-content", "center", "margin-bottom", "12px"], ["width", "26", "height", "26", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#E60000", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M6 9H4a2 2 0 0 0-2 2v1a5 5 0 0 0 5 5h.09"], ["d", "M18 9h2a2 2 0 0 1 2 2v1a5 5 0 0 1-5 5h-.09"], ["d", "M6 3h12v10a6 6 0 0 1-12 0V3z"], ["d", "M9 21h6"], ["d", "M12 17v4"], [2, "font-size", "20px", "font-weight", "800", "color", "#000000", "line-height", "1"], [2, "font-size", "13px", "color", "#888888", "margin-top", "4px"], ["cx", "12", "cy", "7", "r", "4"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "12", "r", "9"], ["d", "M3.6 9h16.8"], ["d", "M3.6 15h16.8"], ["d", "M11.5 3a17 17 0 0 0 0 18"], ["d", "M12.5 3a17 17 0 0 1 0 18"], ["width", "26", "height", "26", "viewBox", "0 0 24 24", "fill", "#FDE8E8", "stroke", "#E60000", "stroke-width", "1", "stroke-linecap", "round", "stroke-linejoin", "round"], ["transform", "rotate(-135 12 12)"], ["d", "M10 10.5 L19.5 10.5 L21 12 L19.5 13.5 L10 13.5 Z"], ["x1", "10", "y1", "12", "x2", "19.5", "y2", "12"], ["x", "8", "y", "8", "width", "2", "height", "8", "rx", "1"], ["x", "4", "y", "11", "width", "4", "height", "2"], ["cx", "3", "cy", "12", "r", "1.5"], ["transform", "rotate(-45 12 12)"], ["id", "tracks-section", 1, "tracks-section", "section-pad", 2, "background", "#FFFFFF"], [1, "format-container", 2, "max-width", "1100px", "margin", "0 auto"], [2, "font-size", "32px", "font-weight", "800", "color", "#000000", "text-align", "center", "margin", "0 0 16px 0"], [2, "font-size", "15px", "color", "#555555", "text-align", "center", "margin", "0 auto 40px auto", "max-width", "700px"], [2, "display", "flex", "justify-content", "center", "gap", "16px", "margin-bottom", "48px", "flex-wrap", "wrap"], [2, "font-size", "12px", "font-weight", "600", "color", "#333333", "background", "#FFFFFF", "border", "1px solid #E5E7EB", "padding", "6px 16px", "border-radius", "24px"], [1, "courses-grid"], [1, "course-card"], [1, "prizes-perks-section", "section-pad", 2, "background", "#FFFFFF", "border-top", "1px solid #E8E8E8"], [2, "max-width", "1240px", "margin", "0 auto"], [2, "text-align", "center", "margin-bottom", "16px"], [2, "display", "inline-block", "background", "#FFF7ED", "border", "1px solid #FED7AA", "border-radius", "50px", "padding", "6px 20px", "font-size", "12px", "font-weight", "600", "color", "#F97316"], [2, "font-size", "36px", "font-weight", "800", "color", "#000000", "text-align", "center", "margin", "0 0 12px 0"], [2, "font-size", "15px", "color", "#6B7280", "text-align", "center", "margin", "0 auto 56px auto", "max-width", "600px"], [1, "perks-grid", 2, "display", "grid", "grid-template-columns", "repeat(4,1fr)", "gap", "24px"], [2, "background", "#FAF8F5", "border", "1px solid #F3F0EC", "border-radius", "16px", "padding", "28px 24px", "display", "flex", "flex-direction", "column", "align-items", "flex-start", "text-align", "left"], [2, "width", "40px", "height", "40px", "background", "#FDE8E8", "border-radius", "10px", "margin-bottom", "20px", "display", "flex", "align-items", "center", "justify-content", "center"], ["width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#E60000", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x", "2", "y", "6", "width", "20", "height", "12", "rx", "2"], ["cx", "12", "cy", "12", "r", "3"], ["x1", "6", "y1", "12", "x2", "6.01", "y2", "12"], ["x1", "18", "y1", "12", "x2", "18.01", "y2", "12"], [2, "font-size", "15px", "font-weight", "800", "color", "#000000", "margin-bottom", "8px", "line-height", "1.3"], [2, "font-size", "13px", "color", "#777777", "line-height", "1.5", "font-weight", "400"], ["d", "M22 10L12 5 2 10l10 5 10-5z"], ["d", "M6 12v5c3 3 9 3 12 0v-5"], ["cx", "12", "cy", "8", "r", "6"], ["d", "M15.477 12.89L17 22l-5-3l-5 3l1.523-9.11"], ["x", "4", "y", "2", "width", "16", "height", "20", "rx", "2"], ["d", "M9 6h2M13 6h2M9 10h2M13 10h2M9 14h2M13 14h2M10 22v-4h4v4"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"], ["points", "14 2 14 8 20 8"], ["x1", "16", "y1", "13", "x2", "8", "y2", "13"], ["x1", "16", "y1", "17", "x2", "8", "y2", "17"], ["points", "10 9 9 9 8 9"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], [1, "competition-format-section", "section-pad", 2, "background", "#FBFBFB", "border-top", "1px solid #E8E8E8"], [1, "format-container"], [2, "font-size", "28px", "font-weight", "700", "color", "#000000", "text-align", "center", "margin", "0 0 10px 0"], [2, "font-size", "15px", "color", "#666666", "text-align", "center", "margin", "0 0 40px 0"], [1, "phases-grid", 2, "display", "grid", "grid-template-columns", "1fr 1fr", "gap", "24px", "margin-bottom", "28px"], [2, "background", "#FFFFFF", "border", "1px solid #F3EBE3", "border-radius", "16px", "padding", "30px"], [2, "display", "flex", "align-items", "center", "gap", "12px", "margin-bottom", "16px"], [2, "width", "40px", "height", "40px", "background", "#FDE8E8", "border-radius", "10px", "display", "flex", "align-items", "center", "justify-content", "center"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#E60000", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x", "2", "y", "4", "width", "20", "height", "12", "rx", "2"], ["x1", "2", "y1", "20", "x2", "22", "y2", "20"], [2, "display", "inline-block", "background", "#FBFBFB", "border", "1px solid #E5E7EB", "border-radius", "12px", "padding", "2px 10px", "font-size", "11px", "font-weight", "700", "color", "#333333", "margin-bottom", "4px"], [2, "font-size", "17px", "font-weight", "700", "color", "#000000"], [2, "font-size", "14px", "color", "#555555", "line-height", "1.7", "margin", "0 0 16px 0"], [2, "font-size", "13px", "font-weight", "800", "color", "#000000", "margin-bottom", "6px"], [2, "font-size", "13px", "color", "#555555", "margin", "0"], [2, "background", "#FFFFFF", "border", "1px solid #FDF0E6", "border-radius", "16px", "padding", "30px"], [2, "width", "40px", "height", "40px", "background", "#FFF3E0", "border-radius", "10px", "display", "flex", "align-items", "center", "justify-content", "center"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#EA580C", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"], ["cx", "12", "cy", "10", "r", "3"], [2, "margin-bottom", "10px"], [2, "display", "flex", "align-items", "center", "gap", "8px", "margin-bottom", "6px"], [2, "width", "6px", "height", "6px", "border-radius", "50%", "background", "#E60000"], [2, "font-size", "13px", "color", "#555"], [2, "display", "flex", "align-items", "center", "gap", "8px"], [2, "font-size", "13px", "font-weight", "800", "color", "#000000", "margin-bottom", "8px"], [2, "display", "flex", "align-items", "center", "gap", "6px", "flex-wrap", "wrap"], [2, "background", "#FFF7ED", "color", "#EA580C", "border", "1px solid #FED7AA", "border-radius", "6px", "padding", "5px 10px", "font-size", "13px", "font-weight", "700"], [2, "font-size", "12px", "color", "#999", "margin-top", "6px"], [2, "background", "#FFFFFF", "border", "1px solid #FDF0E6", "border-radius", "16px", "padding", "24px 28px", "display", "flex", "gap", "20px", "align-items", "flex-start", "margin-top", "24px"], [2, "background", "#FDE8E8", "color", "#E60000", "font-size", "16px", "font-weight", "800", "padding", "8px 14px", "border-radius", "12px", "display", "flex", "align-items", "center", "justify-content", "center", "flex-shrink", "0"], [2, "font-size", "15px", "font-weight", "700", "color", "#000000", "margin-bottom", "6px"], [2, "font-size", "14px", "color", "#555555", "line-height", "1.7", "margin", "0"], [1, "key-dates-rules-section", "section-pad", 2, "background", "#FBFBFB", "border-top", "1px solid #E8E8E8"], [1, "dates-grid", "format-container"], [2, "background", "#FFFFFF", "border", "1px solid #F3F0EC", "border-radius", "16px", "padding", "30px"], [2, "display", "flex", "align-items", "center", "gap", "12px", "margin-bottom", "24px"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2", "ry", "2"], ["x1", "16", "y1", "2", "x2", "16", "y2", "6"], ["x1", "8", "y1", "2", "x2", "8", "y2", "6"], ["x1", "3", "y1", "10", "x2", "21", "y2", "10"], [2, "font-size", "18px", "font-weight", "800", "color", "#000000", "margin", "0"], [2, "display", "flex", "justify-content", "space-between", "align-items", "center", "padding", "14px 0", "border-bottom", "1px solid #F5F5F5"], [2, "font-size", "14px", "color", "#555555", "font-weight", "500"], [2, "font-size", "12px", "font-weight", "700", "color", "#333333", "background", "#F5F5F5", "border", "1px solid #E5E7EB", "padding", "4px 12px", "border-radius", "16px"], [2, "display", "flex", "justify-content", "space-between", "align-items", "center", "padding", "14px 0"], [2, "font-size", "12px", "font-weight", "700", "color", "#E60000", "background", "#FDE8E8", "border", "1px solid #FCA5A5", "padding", "4px 12px", "border-radius", "16px"], ["width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#EA580C", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], [2, "display", "flex", "align-items", "flex-start", "gap", "10px", "margin-bottom", "12px"], [1, "cta-section", "section-pad", 2, "background", "#FFFFFF", "text-align", "center", "border-top", "1px solid #E8E8E8"], [2, "max-width", "600px", "margin", "0 auto"], [2, "width", "48px", "height", "48px", "background", "#FDE8E8", "border-radius", "12px", "margin", "0 auto 20px", "display", "flex", "align-items", "center", "justify-content", "center"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "#FDE8E8", "stroke", "#E60000", "stroke-width", "1.2", "stroke-linecap", "round", "stroke-linejoin", "round"], [2, "font-size", "32px", "font-weight", "800", "color", "#000000", "margin", "0 0 14px 0"], [2, "font-size", "16px", "color", "#555555", "line-height", "1.7", "margin", "0 0 32px 0"], [2, "display", "flex", "gap", "16px", "justify-content", "center", "flex-wrap", "wrap", "margin-bottom", "40px"], ["onmouseover", "this.style.background='#C40000'", "onmouseout", "this.style.background='#E60000'", 2, "background", "#E60000", "color", "#FFFFFF", "border", "none", "border-radius", "50px", "padding", "14px 32px", "font-size", "16px", "font-weight", "700", "cursor", "pointer", "font-family", "'Poppins','Inter',sans-serif", "transition", "background 0.3s ease", 3, "click"], [2, "background", "#FFFFFF", "color", "#000000", "border", "2px solid #000000", "border-radius", "50px", "padding", "14px 32px", "font-size", "16px", "font-weight", "700", "cursor", "pointer", "font-family", "'Poppins','Inter',sans-serif", 3, "click"], [2, "font-size", "13px", "color", "#999999"], [1, "site-footer"], [1, "footer-container"], [1, "footer-contact-bar"], [1, "footer-contact-item"], [1, "footer-contact-icon"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"], [1, "footer-contact-label"], [1, "footer-contact-value"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"], [1, "footer-main"], [1, "footer-col-desc"], [1, "social-links"], [1, "social-label"], ["href", "#", "aria-label", "Facebook", 1, "social-icon-btn"], ["fill", "currentColor", "viewBox", "0 0 24 24"], ["d", "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"], ["href", "#", "aria-label", "LinkedIn", 1, "social-icon-btn"], ["d", "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.119 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"], ["href", "#", "aria-label", "YouTube", 1, "social-icon-btn"], ["d", "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"], [1, "footer-col-heading"], [1, "footer-links-list"], ["href", "#"], [1, "footer-bottom"], [1, "course-card-image"], [1, "course-image", 3, "src", "alt"], [1, "course-card-body"], [1, "course-card-top-row"], [1, "course-card-title"], [1, "course-card-lessons"], [1, "enroll-btn", 3, "routerLink"], [2, "background", "#F5F5F5", "color", "#333", "border-radius", "6px", "padding", "5px 10px", "font-size", "13px", "font-weight", "700"], [2, "color", "#999", "font-size", "12px"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#EA580C", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round", 2, "flex-shrink", "0", "margin-top", "2px"], ["points", "20 6 9 17 4 12"], [2, "font-size", "13px", "color", "#555555", "line-height", "1.5"]], template: function MasteryBattlesComponent_Template(rf, ctx) {
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
        \u0275\u0275elementStart(28, "div", 17)(29, "div", 18)(30, "div", 19)(31, "div", 20);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(32, "svg", 21);
        \u0275\u0275element(33, "path", 22)(34, "path", 23)(35, "path", 24)(36, "path", 25)(37, "path", 26);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(38, "div", 27);
        \u0275\u0275text(39, "\xA320,000");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 28);
        \u0275\u0275text(41, "Prize Pool");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "div", 19)(43, "div", 20);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(44, "svg", 21);
        \u0275\u0275element(45, "circle", 29)(46, "path", 30);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(47, "div", 27);
        \u0275\u0275text(48, "Solo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "div", 28);
        \u0275\u0275text(50, "Competition Style");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "div", 19)(52, "div", 20);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(53, "svg", 21);
        \u0275\u0275element(54, "circle", 31)(55, "path", 32)(56, "path", 33)(57, "path", 34)(58, "path", 35);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(59, "div", 27);
        \u0275\u0275text(60, "9");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "div", 28);
        \u0275\u0275text(62, "Pro Tracks");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "div", 19)(64, "div", 20);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(65, "svg", 36)(66, "g", 37);
        \u0275\u0275element(67, "path", 38)(68, "line", 39)(69, "rect", 40)(70, "rect", 41)(71, "circle", 42);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "g", 43);
        \u0275\u0275element(73, "path", 38)(74, "line", 39)(75, "rect", 40)(76, "rect", 41)(77, "circle", 42);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(78, "div", 27);
        \u0275\u0275text(79, "7-19");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "div", 28);
        \u0275\u0275text(81, "Ages");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(82, "section", 44)(83, "div", 45)(84, "h2", 46);
        \u0275\u0275text(85, "Choose Your Mastery Battle Track");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "p", 47);
        \u0275\u0275text(87, "Select one or more professional-grade tracks aligned with your career interests. Each costs \xA325 to enter.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "div", 48)(89, "span", 49);
        \u0275\u0275text(90, "Trailblazers (10 and under)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "span", 49);
        \u0275\u0275text(92, "Visioneers (11-14)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "span", 49);
        \u0275\u0275text(94, "Strategists (15-19)");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(95, "div", 50);
        \u0275\u0275repeaterCreate(96, MasteryBattlesComponent_For_97_Template, 12, 7, "div", 51, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(98, "section", 52)(99, "div", 53)(100, "div", 54)(101, "span", 55);
        \u0275\u0275text(102, "Total Pool: \xA320,000");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(103, "h2", 56);
        \u0275\u0275text(104, "Prizes & Perks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(105, "p", 57);
        \u0275\u0275text(106, "Recognition, rewards, and career-boosting opportunities");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "div", 58)(108, "div", 59)(109, "div", 60);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(110, "svg", 61);
        \u0275\u0275element(111, "rect", 62)(112, "circle", 63)(113, "line", 64)(114, "line", 65);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(115, "div", 66);
        \u0275\u0275text(116, "\xA310,000 Prize Pool");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(117, "div", 67);
        \u0275\u0275text(118, "Shared across tracks and age categories");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(119, "div", 59)(120, "div", 60);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(121, "svg", 61);
        \u0275\u0275element(122, "path", 22)(123, "path", 23)(124, "path", 24)(125, "path", 25)(126, "path", 26);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(127, "div", 66);
        \u0275\u0275text(128, "Cash + Trophy + Certificate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(129, "div", 67);
        \u0275\u0275text(130, "For each Champion");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(131, "div", 59)(132, "div", 60);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(133, "svg", 61);
        \u0275\u0275element(134, "path", 68)(135, "path", 69);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(136, "div", 66);
        \u0275\u0275text(137, "Premium Course Access");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(138, "div", 67);
        \u0275\u0275text(139, "For top finalists");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(140, "div", 59)(141, "div", 60);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(142, "svg", 61);
        \u0275\u0275element(143, "circle", 70)(144, "path", 71);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(145, "div", 66);
        \u0275\u0275text(146, "Scholarship Pathways");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(147, "div", 67);
        \u0275\u0275text(148, "Via partner programs and universities");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(149, "div", 59)(150, "div", 60);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(151, "svg", 61);
        \u0275\u0275element(152, "rect", 72)(153, "path", 73);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(154, "div", 66);
        \u0275\u0275text(155, "Industry Immersions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(156, "div", 67);
        \u0275\u0275text(157, "In law, media, tech, business, and finance");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(158, "div", 59)(159, "div", 60);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(160, "svg", 61);
        \u0275\u0275element(161, "path", 74)(162, "polyline", 75)(163, "line", 76)(164, "line", 77)(165, "polyline", 78);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(166, "div", 66);
        \u0275\u0275text(167, "Digital Certificates");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(168, "div", 67);
        \u0275\u0275text(169, "For all approved entries");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(170, "div", 59)(171, "div", 60);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(172, "svg", 61);
        \u0275\u0275element(173, "path", 79)(174, "circle", 80)(175, "path", 81)(176, "path", 82);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(177, "div", 66);
        \u0275\u0275text(178, "Sponsorship Introductions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(179, "div", 67);
        \u0275\u0275text(180, "Linking top talents with mentors and investors");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(181, "section", 83)(182, "div", 84)(183, "h2", 85);
        \u0275\u0275text(184, "Competition Format");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(185, "p", 86);
        \u0275\u0275text(186, "Two phases: online shortlisting and live knockout Grand Finale.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(187, "div", 87)(188, "div", 88)(189, "div", 89)(190, "div", 90);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(191, "svg", 91);
        \u0275\u0275element(192, "rect", 92)(193, "line", 93);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(194, "div")(195, "span", 94);
        \u0275\u0275text(196, "Phase 1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(197, "div", 95);
        \u0275\u0275text(198, "Online Shortlisting");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(199, "p", 96);
        \u0275\u0275text(200, "Submit your task (video, document, or project) as per the brief. Entries judged for creativity, clarity, and relevance.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(201, "div", 97);
        \u0275\u0275text(202, "Advancement:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(203, "p", 98);
        \u0275\u0275text(204, "Top 48 per track (16 per age group) advance to the Grand Finale.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(205, "div", 99)(206, "div", 89)(207, "div", 100);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(208, "svg", 101);
        \u0275\u0275element(209, "path", 102)(210, "circle", 103);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(211, "div")(212, "span", 94);
        \u0275\u0275text(213, "Phase 2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(214, "div", 95);
        \u0275\u0275text(215, "Offline Grand Finale");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(216, "p", 96);
        \u0275\u0275text(217, "Location announced (regional hubs for accessibility).");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(218, "div", 104)(219, "div", 105);
        \u0275\u0275element(220, "div", 106);
        \u0275\u0275elementStart(221, "span", 107);
        \u0275\u0275text(222, "1-vs-1 live knockout battles \u2014 5\u20137 minutes each");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(223, "div", 105);
        \u0275\u0275element(224, "div", 106);
        \u0275\u0275elementStart(225, "span", 107);
        \u0275\u0275text(226, "Industry and academic expert judges");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(227, "div", 108);
        \u0275\u0275element(228, "div", 106);
        \u0275\u0275elementStart(229, "span", 107);
        \u0275\u0275text(230, "Judged on clarity, confidence, creativity, and skill");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(231, "div", 109);
        \u0275\u0275text(232, "Progression:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(233, "div", 110);
        \u0275\u0275repeaterCreate(234, MasteryBattlesComponent_For_235_Template, 4, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementStart(236, "div", 111);
        \u0275\u0275text(237, "1 Champion");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(238, "div", 112);
        \u0275\u0275text(239, "Per track per age category");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(240, "div", 113)(241, "div", 114);
        \u0275\u0275text(242, " \xA325 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(243, "div")(244, "div", 115);
        \u0275\u0275text(245, "Purpose of the Entry Fee");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(246, "p", 116);
        \u0275\u0275text(247, "Your entry fee guarantees verified participation, funds the \xA310,000 global prize pool, and covers certification and logistics. It never affects your competition score.");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(248, "section", 117)(249, "div", 118)(250, "div", 119)(251, "div", 120)(252, "div", 90);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(253, "svg", 61);
        \u0275\u0275element(254, "rect", 121)(255, "line", 122)(256, "line", 123)(257, "line", 124);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(258, "h3", 125);
        \u0275\u0275text(259, "Key Dates");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(260, "div", 126)(261, "span", 127);
        \u0275\u0275text(262, "Registration Opened");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(263, "span", 128);
        \u0275\u0275text(264, "Now Open");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(265, "div", 129)(266, "span", 127);
        \u0275\u0275text(267, "Competition Ends");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(268, "span", 130);
        \u0275\u0275text(269, "30th December 2026");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(270, "div", 99)(271, "div", 120)(272, "div", 100);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(273, "svg", 131);
        \u0275\u0275element(274, "circle", 31)(275, "line", 132)(276, "line", 133);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(277, "h3", 125);
        \u0275\u0275text(278, "Rules");
        \u0275\u0275elementEnd()();
        \u0275\u0275repeaterCreate(279, MasteryBattlesComponent_For_280_Template, 5, 1, "div", 134, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(281, "section", 135)(282, "div", 136)(283, "div", 137);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(284, "svg", 138)(285, "g", 37);
        \u0275\u0275element(286, "path", 38)(287, "line", 39)(288, "rect", 40)(289, "rect", 41)(290, "circle", 42);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(291, "g", 43);
        \u0275\u0275element(292, "path", 38)(293, "line", 39)(294, "rect", 40)(295, "rect", 41)(296, "circle", 42);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(297, "h2", 139);
        \u0275\u0275text(298, "Ready to Rise?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(299, "p", 140);
        \u0275\u0275text(300, "Select your track, unleash your skills, and become a Global Mastery Champion.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(301, "div", 141)(302, "button", 142);
        \u0275\u0275listener("click", function MasteryBattlesComponent_Template_button_click_302_listener() {
          return ctx.scrollToTracks();
        });
        \u0275\u0275text(303, "Choose Your Track");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(304, "button", 143);
        \u0275\u0275listener("click", function MasteryBattlesComponent_Template_button_click_304_listener() {
          return ctx.scrollToTracks();
        });
        \u0275\u0275text(305, "View All Tracks");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(306, "p", 144);
        \u0275\u0275text(307, "Organised by In My Academy Ltd (UK) \u2014 empowering the next generation through global, project-based learning.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(308, "footer", 145)(309, "div", 146)(310, "div", 147)(311, "div", 148)(312, "div", 149);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(313, "svg", 150);
        \u0275\u0275element(314, "path", 151)(315, "path", 152);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(316, "div")(317, "span", 153);
        \u0275\u0275text(318, "Address");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(319, "div", 154);
        \u0275\u0275text(320, "IN MY ACADEMY LTD 71-75, Shelton Street,");
        \u0275\u0275element(321, "br");
        \u0275\u0275text(322, "Covent Garden, London, WC2H 9JQ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(323, "div", 148)(324, "div", 149);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(325, "svg", 150);
        \u0275\u0275element(326, "path", 155);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(327, "div")(328, "span", 153);
        \u0275\u0275text(329, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(330, "div", 154);
        \u0275\u0275text(331, "info@inmyacademy.com");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(332, "div", 148)(333, "div", 149);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(334, "svg", 150);
        \u0275\u0275element(335, "path", 156);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(336, "div")(337, "span", 153);
        \u0275\u0275text(338, "Call");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(339, "div", 154);
        \u0275\u0275text(340, "+447748416224");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(341, "div", 157)(342, "div")(343, "p", 158);
        \u0275\u0275text(344, "We're more than a platform\u2014we're a global powerhouse redefining education with interactive, real-world mastery that excites, engages, and empowers you to achieve the impossible.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(345, "div", 159)(346, "span", 160);
        \u0275\u0275text(347, "Follow on:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(348, "a", 161);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(349, "svg", 162);
        \u0275\u0275element(350, "path", 163);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(351, "a", 164);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(352, "svg", 162);
        \u0275\u0275element(353, "path", 165);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(354, "a", 166);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(355, "svg", 162);
        \u0275\u0275element(356, "path", 167);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(357, "div")(358, "h4", 168);
        \u0275\u0275text(359, "Quick Links");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(360, "ul", 169)(361, "li")(362, "a", 170);
        \u0275\u0275text(363, "About");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(364, "li")(365, "a", 170);
        \u0275\u0275text(366, "Course");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(367, "li")(368, "a", 170);
        \u0275\u0275text(369, "Contact Us");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(370, "li")(371, "a", 170);
        \u0275\u0275text(372, "Blog");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(373, "div")(374, "h4", 168);
        \u0275\u0275text(375, "SkillStorm Global Competitions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(376, "ul", 169)(377, "li")(378, "a", 170);
        \u0275\u0275text(379, "Global Open Challenges");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(380, "li")(381, "a", 170);
        \u0275\u0275text(382, "Global Mastery Battles");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(383, "li")(384, "a", 170);
        \u0275\u0275text(385, "Global School competitions");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(386, "div", 171);
        \u0275\u0275text(387, "\xA9 2025 All Rights Reserved");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(96);
        \u0275\u0275repeater(ctx.tracks);
        \u0275\u0275advance(138);
        \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
        \u0275\u0275advance(45);
        \u0275\u0275repeater(\u0275\u0275pureFunction0(1, _c1));
      }
    }, dependencies: [CommonModule, RouterModule, RouterLink], styles: ['\n\n.courses-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 24px;\n}\n[_nghost-%COMP%] {\n  display: block;\n  overflow-x: hidden;\n  background: #f9fafb;\n  min-height: 100vh;\n  font-family: "Inter", sans-serif;\n}\n.hero-section[_ngcontent-%COMP%] {\n  position: relative;\n}\n.course-card[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 15px;\n  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);\n  overflow: hidden;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  display: flex;\n  flex-direction: column;\n}\n.course-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);\n}\n.course-card-image[_ngcontent-%COMP%] {\n  position: relative;\n  height: 180px;\n  overflow: hidden;\n}\n.course-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.course-card-body[_ngcontent-%COMP%] {\n  padding: 18px 18px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  flex: 1;\n  justify-content: space-between;\n}\n.course-card-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #111827;\n  line-height: 1.3;\n  margin: 0 0 4px 0;\n}\n.course-card-lessons[_ngcontent-%COMP%] {\n  margin: 6px 0 0 0;\n  font-size: 13px;\n  font-weight: 600;\n  color: #4b5563;\n}\n.enroll-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #7c3aed;\n  color: #ffffff;\n  border: none;\n  border-radius: 10px;\n  padding: 10px 14px;\n  font-size: 13px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition:\n    transform 0.15s ease,\n    background 0.15s ease,\n    color 0.15s ease;\n  line-height: 1;\n}\n.enroll-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  background: #6d28d9;\n}\n.site-footer[_ngcontent-%COMP%] {\n  background: #F3F4F6;\n  padding: 60px 0 40px 0;\n  font-family: "Kumbh Sans", sans-serif;\n}\n.footer-contact-bar[_ngcontent-%COMP%] {\n  background: #2A2F7F;\n  border-radius: 20px;\n  padding: 36px 44px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 24px;\n  margin-bottom: 56px;\n}\n.footer-contact-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex: 1;\n}\n.footer-contact-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: #FFFFFF;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #2A2F7F;\n  flex-shrink: 0;\n}\n.footer-contact-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.footer-contact-label[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 13px;\n  font-weight: 600;\n  color: #A5B4FC;\n  letter-spacing: 0.04em;\n  display: block;\n  margin-bottom: 4px;\n  text-transform: uppercase;\n}\n.footer-contact-value[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 15.5px;\n  font-weight: 600;\n  color: #FFFFFF;\n  line-height: 1.45;\n}\n.footer-main[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2.5fr 1fr 1.3fr;\n  gap: 48px;\n  margin-bottom: 44px;\n}\n.footer-col-desc[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 15px;\n  font-weight: 400;\n  color: #4B5563;\n  line-height: 1.7;\n  margin-bottom: 20px;\n}\n.social-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.social-label[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 14.5px;\n  font-weight: 600;\n  color: #4B5563;\n}\n.social-icon-btn[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: #2A2F7F;\n  color: #FFFFFF;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  transition: opacity 0.2s;\n}\n.social-icon-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.social-icon-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n}\n.footer-col-heading[_ngcontent-%COMP%] {\n  font-family:\n    "Gilmer",\n    "DM Sans",\n    "Poppins",\n    sans-serif;\n  font-size: 17px;\n  font-weight: 700;\n  color: #000000;\n  margin: 0 0 18px 0;\n  line-height: 1.3;\n}\n.footer-links-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.footer-links-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.footer-links-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 15px;\n  font-weight: 400;\n  color: #4B5563;\n  text-decoration: none;\n  line-height: 1.4;\n  transition: color 0.2s;\n}\n.footer-links-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #FF8C00;\n}\n.footer-bottom[_ngcontent-%COMP%] {\n  border-top: 1px solid #E5E7EB;\n  padding-top: 24px;\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 14.5px;\n  font-weight: 400;\n  color: #6B7280;\n  line-height: 1.4;\n}\n.format-container[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: 0 auto;\n}\n.dates-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n}\n.footer-container[_ngcontent-%COMP%] {\n  max-width: 1320px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n@media (min-width: 1200px) and (max-width: 1365px) {\n  .format-container[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .footer-container[_ngcontent-%COMP%] {\n    padding-left: 50px;\n    padding-right: 50px;\n  }\n}\n@media (max-width: 1023px) {\n  .footer-contact-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 28px 20px;\n    gap: 20px;\n  }\n  .footer-contact-item[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .footer-contact-value[_ngcontent-%COMP%] {\n    word-break: break-word;\n  }\n  .footer-main[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 28px;\n  }\n}\n@media (max-width: 767px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n    gap: 24px;\n  }\n  .tracks-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n  .perks-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr) !important;\n  }\n  .phases-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n  .dates-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n}\n@media (max-width: 567px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    display: grid !important;\n    grid-template-columns: repeat(2, 1fr);\n    justify-items: center;\n    gap: 24px;\n    text-align: center;\n  }\n}\n@media (max-width: 400px) {\n  .section-pad[_ngcontent-%COMP%] {\n    padding: 40px 15px;\n  }\n  .hero-section[_ngcontent-%COMP%] {\n    padding-left: 15px !important;\n    padding-right: 15px !important;\n  }\n  .footer-contact-bar[_ngcontent-%COMP%] {\n    padding: 24px 15px;\n    gap: 18px;\n  }\n  .footer-col-desc[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .footer-links-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .footer-bottom[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .footer-col-heading[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n  .footer-contact-value[_ngcontent-%COMP%] {\n    font-size: 15px;\n    line-height: 1.5;\n  }\n  .footer-contact-label[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .footer-contact-item[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .footer-contact-icon[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n    width: 40px;\n    height: 40px;\n  }\n}\n/*# sourceMappingURL=mastery-battles.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MasteryBattlesComponent, { className: "MasteryBattlesComponent", filePath: "src\\app\\pages\\mastery-battles\\mastery-battles.component.ts", lineNumber: 14 });
})();
export {
  MasteryBattlesComponent
};
//# sourceMappingURL=chunk-HH2U4TEY.js.map
