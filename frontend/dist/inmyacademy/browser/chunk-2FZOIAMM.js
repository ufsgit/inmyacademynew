import {
  RouterLink
} from "./chunk-RK72NEAB.js";
import "./chunk-PLXL2LZV.js";
import {
  CommonModule,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-C72BQOBI.js";

// src/app/pages/school-competitions/school-competitions.component.ts
var _forTrack0 = ($index, $item) => $item.title;
var _c0 = () => ({ plan: "single" });
var _c1 = () => ({ plan: "full" });
var _c2 = () => ({ plan: "additional" });
function SchoolCompetitionsComponent_div_187_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 165);
    \u0275\u0275text(1, "Most Popular");
    \u0275\u0275elementEnd();
  }
}
function SchoolCompetitionsComponent_For_362__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 98);
    \u0275\u0275element(1, "path", 169);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const perk_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275attribute("d", perk_r1.icon);
  }
}
function SchoolCompetitionsComponent_For_362_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110)(1, "div", 166);
    \u0275\u0275template(2, SchoolCompetitionsComponent_For_362__svg_svg_2_Template, 2, 1, "svg", 167);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 168);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 95);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const perk_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", perk_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(perk_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(perk_r1.subtitle);
  }
}
function SchoolCompetitionsComponent_For_365__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 98);
    \u0275\u0275element(1, "path", 169);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const perk_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275attribute("d", perk_r2.icon);
  }
}
function SchoolCompetitionsComponent_For_365_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110)(1, "div", 166);
    \u0275\u0275template(2, SchoolCompetitionsComponent_For_365__svg_svg_2_Template, 2, 1, "svg", 167);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 168);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 95);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const perk_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", perk_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(perk_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(perk_r2.subtitle);
  }
}
var SchoolCompetitionsComponent = class _SchoolCompetitionsComponent {
  constructor() {
    this.activePlan = "full";
    this.perks = [
      { title: "Cash Awards", subtitle: "For Champions and top runners-up", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
      { title: "Custom Trophies", subtitle: "And framed certificates", icon: "" },
      { title: "Premium Course Access", subtitle: "For top teams", icon: "" },
      { title: "Scholarship Pathways", subtitle: "Via partner schools and programs", icon: "" },
      { title: "Industry Visits", subtitle: "Virtual or in-person experiences", icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" },
      { title: "Digital Certificates", subtitle: "For all approved participants", icon: "" },
      { title: "Sponsorship Introductions", subtitle: "For outstanding teams", icon: "" }
    ];
  }
  scrollToPricing() {
    const el = document.getElementById("pricing-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
  static {
    this.\u0275fac = function SchoolCompetitionsComponent_Factory(t) {
      return new (t || _SchoolCompetitionsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SchoolCompetitionsComponent, selectors: [["app-school-competitions"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 518, vars: 19, consts: [[2, "width", "100%", "position", "relative", "background", "#000", "line-height", "0"], ["autoplay", "", "loop", "", "muted", "", "playsinline", "", 2, "width", "100%", "height", "auto", "display", "block"], ["src", "https://ufs.net.in/inmyacademy/video/globalschool.mp4", "type", "video/mp4"], [2, "background", "#FFFFFF", "padding", "80px 24px 32px", "text-align", "center", "font-family", "'Poppins','Inter',sans-serif"], [2, "max-width", "800px", "margin", "0 auto", "display", "flex", "flex-direction", "column", "align-items", "center"], [2, "display", "inline-flex", "align-items", "center", "gap", "8px", "border", "1px solid #4D7BFF", "border-radius", "50px", "padding", "8px 24px", "margin-bottom", "32px"], ["width", "16", "height", "16", "fill", "none", "stroke", "#4D7BFF", "stroke-width", "2", "viewBox", "0 0 24 24", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 4v16m8-8H4m11.314-5.657l-11.314 11.314m0-11.314l11.314 11.314"], [2, "font-family", "'Kumbh Sans',sans-serif", "font-size", "14px", "font-weight", "700", "color", "#4D7BFF", "letter-spacing", "0.5px"], [2, "font-family", "'Gilmer', 'DM Sans', 'Poppins', sans-serif", "font-size", "56px", "font-weight", "800", "color", "#000000", "line-height", "1.1", "margin", "0 0 32px 0"], [2, "color", "#2563EB"], [2, "font-family", "'Kumbh Sans',sans-serif", "font-size", "18px", "color", "#444444", "line-height", "1.6", "margin", "0 auto 48px", "font-weight", "400", "max-width", "100%"], [1, "hero-buttons", 2, "display", "flex", "justify-content", "center", "gap", "20px", "width", "100%"], [2, "background", "#2563EB", "color", "#FFFFFF", "border", "none", "border-radius", "6px", "padding", "14px 32px", "font-family", "'Kumbh Sans',sans-serif", "font-size", "15px", "font-weight", "700", "cursor", "pointer", "transition", "background 0.2s", 3, "click"], [2, "background", "#FFFFFF", "color", "#000000", "border", "1px solid #000000", "border-radius", "6px", "padding", "14px 32px", "font-family", "'Kumbh Sans',sans-serif", "font-size", "15px", "font-weight", "700", "cursor", "pointer", "transition", "background 0.2s"], [2, "background", "#F9FAFB", "padding-bottom", "60px", "margin-top", "100px"], [2, "max-width", "1100px", "margin", "0 auto", "padding", "0 40px"], [1, "stats-grid", 2, "display", "flex", "justify-content", "space-between", "text-align", "center"], [2, "display", "flex", "flex-direction", "column", "align-items", "center", "transform", "translateY(-48px)"], [2, "width", "96px", "height", "96px", "border-radius", "16px", "background", "#EEF2FF", "margin-bottom", "32px"], [2, "font-family", "'Gilmer', 'DM Sans', sans-serif", "font-size", "26px", "font-weight", "800", "color", "#000000", "margin-bottom", "4px"], [2, "font-family", "'Kumbh Sans',sans-serif", "font-size", "15px", "color", "#888888", "font-weight", "400"], [1, "py-16", "bg-white", "font-sans", "border-t", "border-gray-100"], [1, "max-w-[1200px]", "mx-auto", "px-4", "sm:px-6", "lg:px-8"], [1, "text-center", "mb-16"], [1, "text-[32px]", "font-extrabold", "text-[#111827]", "mb-4"], [1, "text-[16px]", "text-[#6B7280]"], [1, "text-center", "mb-8"], [1, "text-[18px]", "font-bold", "text-[#111827]"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-6", "mb-12"], [2, "background-color", "#f5f5f5", "padding", "20px", "border-radius", "15px", "border", "0.8px solid rgba(117,119,131,0.13)", "box-shadow", "rgba(0,0,0,0.12) 0px 0px 2px 0px", "display", "flex", "flex-direction", "column"], [2, "background-color", "rgba(0,187,67,0.16)", "color", "#14c88c", "border", "0.8px solid #14c88c", "border-radius", "15px", "font-size", "11px", "font-weight", "400", "padding", "10px", "align-self", "flex-start", "margin-bottom", "20px", "line-height", "1"], [2, "font-size", "21px", "font-weight", "700", "color", "#000000", "line-height", "21px", "margin", "0 0 8px 0", "font-family", "'Gilmer', 'DM Sans', 'Poppins', sans-serif"], [2, "font-size", "16px", "font-weight", "400", "color", "#ff0000", "line-height", "16px", "margin", "0 0 16px 0"], [2, "font-size", "16px", "font-weight", "400", "color", "#757783", "line-height", "28px", "margin", "0 0 16px 0"], [1, "phases-grid", 2, "display", "grid", "grid-template-columns", "repeat(2, 1fr)", "gap", "32px", "margin-bottom", "96px"], [2, "border", "1px solid #E0E7FF", "border-radius", "24px", "padding", "40px"], [2, "display", "flex", "align-items", "center", "gap", "24px", "margin-bottom", "32px"], [2, "width", "72px", "height", "72px", "border-radius", "16px", "background", "#EEF2FF", "flex-shrink", "0"], [2, "display", "flex", "flex-direction", "column", "align-items", "flex-start"], [2, "border", "1.5px solid #333333", "border-radius", "24px", "padding", "4px 14px", "font-size", "12px", "font-weight", "600", "color", "#333333", "margin-bottom", "12px", "font-family", "'Kumbh Sans',sans-serif"], [2, "font-size", "17px", "font-weight", "800", "font-family", "'Gilmer', 'DM Sans', sans-serif", "color", "#000000", "margin", "0"], [2, "font-size", "14.5px", "color", "#888888", "line-height", "1.7", "margin", "0 0 32px 0", "font-family", "'Kumbh Sans',sans-serif"], [2, "background", "#F8F9FA", "border-radius", "20px", "padding", "28px"], [2, "font-size", "16px", "font-weight", "800", "font-family", "'Gilmer', 'DM Sans', sans-serif", "color", "#000000", "margin", "0 0 16px 0"], [2, "display", "flex", "flex-direction", "column", "gap", "10px"], [2, "font-size", "13.5px", "color", "#888888", "font-family", "'Kumbh Sans',sans-serif"], [2, "border", "1px solid #FEE2E2", "border-radius", "24px", "padding", "40px"], [2, "width", "72px", "height", "72px", "border-radius", "16px", "background", "#FEF2F2", "flex-shrink", "0"], [2, "background", "#F8F9FA", "border-radius", "20px", "padding", "24px 28px", "margin-bottom", "16px"], [2, "font-size", "16px", "font-weight", "800", "font-family", "'Gilmer', 'DM Sans', sans-serif", "color", "#000000", "margin", "0 0 12px 0"], [2, "background", "#F8F9FA", "border-radius", "20px", "padding", "24px 28px"], [2, "display", "grid", "grid-template-columns", "auto auto auto", "gap", "12px 24px", "justify-content", "start"], [2, "font-size", "13.5px", "color", "#000000", "font-family", "'Kumbh Sans',sans-serif"], ["id", "pricing-section", 2, "padding", "80px 24px", "background", "#FFFFFF", "font-family", "'Poppins','Inter',sans-serif"], [2, "max-width", "1100px", "margin", "0 auto"], [2, "text-align", "center", "margin-bottom", "64px"], [2, "font-family", "'Gilmer', 'DM Sans', sans-serif", "font-size", "32px", "font-weight", "800", "color", "#000000", "margin", "0 0 12px 0"], [2, "font-family", "'Kumbh Sans',sans-serif", "font-size", "16px", "color", "#888888", "font-weight", "400", "margin", "0"], [2, "display", "grid", "grid-template-columns", "repeat(3, 1fr)", "gap", "24px", "align-items", "center", "margin-bottom", "64px"], [1, "pricing-card", 3, "mouseenter", "mouseleave"], [2, "font-family", "'Kumbh Sans',sans-serif", "font-size", "17px", "font-weight", "600", "color", "#000000", "margin", "0 0 16px 0"], [2, "font-family", "'Gilmer', 'DM Sans', sans-serif", "font-size", "46px", "font-weight", "800", "color", "#000000", "line-height", "1", "margin", "0 0 16px 0"], [2, "font-family", "'Kumbh Sans',sans-serif", "font-size", "14px", "color", "#888888", "margin", "0 0 40px 0"], [2, "list-style", "none", "padding", "0", "margin", "0 0 auto 0", "text-align", "left", "display", "flex", "flex-direction", "column", "gap", "16px"], [2, "display", "flex", "align-items", "flex-start", "gap", "12px"], ["width", "18", "height", "18", "fill", "none", "stroke", "#E60000", "stroke-width", "3", "viewBox", "0 0 24 24", 2, "margin-top", "2px", "flex-shrink", "0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M5 13l4 4L19 7"], [2, "font-family", "'Kumbh Sans',sans-serif", "font-size", "14.5px", "color", "#555555"], ["routerLink", "/skillstorm/registration-wizard", 1, "plan-btn", 3, "queryParams"], ["style", "position:absolute; top:-16px; left:50%; transform:translateX(-50%); background:#E60000; color:#FFFFFF; font-family:'Kumbh Sans',sans-serif; font-size:13px; font-weight:700; padding:8px 24px; border-radius:30px; transition: opacity 0.3s;", 4, "ngIf"], [1, "pb-16", "bg-[#FFFFFF]", "font-sans"], [1, "bg-white", "border", "border-gray-200", "rounded-[24px]", "p-10", "shadow-sm", "max-w-[1000px]", "mx-auto"], [1, "flex", "items-center", "gap-4", "mb-8"], [1, "w-12", "h-12", "rounded-xl", "bg-[#FCE7F3]", "flex", "items-center", "justify-center"], [1, "text-[20px]", "font-extrabold", "text-[#111827]"], [1, "grid", "md:grid-cols-2", "gap-x-8", "gap-y-4"], [1, "flex", "gap-3", "items-start"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-[#DC2626]", "shrink-0", "mt-0.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], [1, "text-[15px]", "text-[#4B5563]"], [1, "py-24", "bg-white", "font-sans"], [1, "max-w-[1000px]", "mx-auto", "px-4", "sm:px-6", "lg:px-8"], [1, "bg-white", "border", "border-gray-200", "rounded-[24px]", "p-8", "mb-8", "shadow-sm"], [1, "flex", "items-center", "gap-4", "mb-6"], [1, "w-10", "h-10", "rounded-xl", "bg-[#FEF9C3]", "flex", "items-center", "justify-center"], [1, "text-[18px]", "font-extrabold", "text-[#111827]"], [1, "text-[15px]", "text-[#6B7280]", "leading-relaxed", "mb-6"], [1, "text-[15px]", "font-extrabold", "text-[#111827]"], [1, "grid", "md:grid-cols-2", "gap-8", "mb-8"], [1, "bg-white", "border", "border-gray-200", "rounded-[24px]", "p-8", "shadow-sm", "flex", "flex-col"], [1, "flex", "justify-between", "items-center", "mb-8"], [1, "px-4", "py-1.5", "rounded-full", "border", "border-[#FCD34D]", "bg-[#FFFBEB]", "text-[#F59E0B]", "text-[13px]", "font-bold"], [1, "space-y-4", "text-[15px]", "text-[#6B7280]"], [1, "px-4", "py-1.5", "rounded-full", "border", "border-[#FECACA]", "bg-[#FEF2F2]", "text-[#DC2626]", "text-[13px]", "font-bold"], [1, "text-[15px]", "text-[#6B7280]", "leading-relaxed"], [1, "bg-white", "border", "border-gray-200", "rounded-[24px]", "p-8", "shadow-sm"], [1, "w-12", "h-12", "rounded-xl", "bg-[#EFF6FF]", "flex", "items-center", "justify-center", "text-[#2563EB]"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"], [1, "bg-[#F9FAFB]", "rounded-xl", "p-5", "font-medium", "text-[#111827]", "text-[15px]", "mb-6"], [1, "grid", "md:grid-cols-2", "gap-6", "mb-8"], [1, "bg-[#F9FAFB]", "rounded-xl", "p-6"], [1, "font-bold", "text-[#111827]", "mb-4"], [1, "text-[#6B7280]", "text-[15px]"], [1, "font-bold", "text-[#111827]"], [1, "italic", "text-[#9CA3AF]", "text-[15px]"], [1, "text-center", "mb-16", "flex", "flex-col", "items-center"], [1, "inline-flex", "mb-6", "px-5", "py-1.5", "rounded-full", "border", "border-[#FDBA74]", "text-[#F97316]", "text-[13px]", "font-semibold", "tracking-wide"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-6"], [1, "bg-white", "border", "border-gray-100", "p-8", "rounded-[24px]", "shadow-sm"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-6", "mt-6"], [1, "text-center", "mt-16"], [1, "text-[13px]", "text-[#9CA3AF]", "italic"], [1, "py-16", "bg-[#F9FAFB]", "font-sans"], [1, "grid", "md:grid-cols-2", "gap-8", "mb-24"], [1, "w-12", "h-12", "rounded-xl", "bg-[#EFF6FF]", "flex", "items-center", "justify-center"], [1, "flex", "justify-between", "items-center", "mb-6"], [1, "px-4", "py-1.5", "bg-[#F3F4F6]", "text-[#111827]", "rounded-full", "text-[13px]", "font-bold"], [1, "border-gray-200", "mb-6"], [1, "px-4", "py-1.5", "bg-[#FEF2F2]", "border", "border-[#FECACA]", "text-[#DC2626]", "rounded-full", "text-[13px]", "font-bold"], [1, "text-[14px]", "text-[#9CA3AF]", "italic"], [1, "w-12", "h-12", "rounded-xl", "bg-[#FEF2F2]", "flex", "items-center", "justify-center"], [1, "space-y-4"], [1, "text-[15px]", "text-[#6B7280]"], [1, "text-center", "flex", "flex-col", "items-center"], [1, "w-14", "h-14", "rounded-2xl", "bg-[#EFF6FF]", "mb-6", "flex", "items-center", "justify-center"], [1, "text-[36px]", "font-extrabold", "text-[#111827]", "mb-4"], [1, "text-[16px]", "text-[#6B7280]", "mb-10", "max-w-2xl", "mx-auto", "leading-relaxed"], [1, "flex", "flex-col", "sm:flex-row", "justify-center", "gap-4", "w-full", "sm:w-auto"], [1, "bg-[#2563EB]", "hover:bg-[#1D4ED8]", "text-white", "px-[32px]", "py-[12px]", "rounded-lg", "font-bold", "text-[15px]", "transition-colors", "w-full", "sm:w-auto", 3, "click"], [1, "bg-white", "hover:bg-gray-50", "text-[#111827]", "border", "border-[#111827]", "px-[32px]", "py-[12px]", "rounded-lg", "font-bold", "text-[15px]", "transition-colors", "w-full", "sm:w-auto"], [1, "bg-white", "py-8", "text-center", "font-sans"], [1, "text-[13px]", "text-[#6B7280]"], [1, "bg-[#F3F4F6]", "pt-16", "pb-10", "font-sans", "border-t", "border-gray-200"], [1, "bg-[#2D3192]", "rounded-[32px]", "py-10", "px-12", "flex", "flex-col", "md:flex-row", "justify-between", "items-start", "md:items-center", "gap-10", "mb-20"], [1, "flex", "items-center", "gap-5", "w-full", "md:w-1/3"], [1, "w-14", "h-14", "bg-white", "rounded-full", "flex", "items-center", "justify-center", "text-[#2D3192]", "flex-shrink-0"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-6", "h-6"], ["fill-rule", "evenodd", "d", "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z", "clip-rule", "evenodd"], [1, "text-indigo-200", "text-[14px]", "font-semibold", "mb-1"], [1, "text-white", "text-[15px]", "font-bold", "leading-snug"], ["d", "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"], ["d", "M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"], [1, "text-white", "text-[15px]", "font-bold"], ["d", "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"], [1, "grid", "grid-cols-1", "md:grid-cols-12", "gap-12", "mb-16"], [1, "md:col-span-5", "pr-4"], [1, "text-[#374151]", "text-[15px]", "leading-relaxed", "mb-8"], [1, "flex", "items-center", "gap-4"], [1, "text-[#374151]", "text-[15px]"], ["href", "#", 1, "w-10", "h-10", "rounded-full", "bg-[#2D3192]", "text-white", "flex", "items-center", "justify-center", "hover:bg-opacity-90", "transition-opacity"], ["fill", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["d", "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"], ["d", "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.119 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"], ["d", "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"], [1, "md:col-span-3"], [1, "text-[#111827]", "font-extrabold", "text-[16px]", "mb-6"], [1, "space-y-4", "text-[15px]", "text-[#4B5563]"], ["href", "#", 1, "hover:text-[#2563EB]", "transition-colors"], [1, "md:col-span-4"], ["href", "/skillstorm/open-challenges", 1, "hover:text-[#2563EB]", "transition-colors"], ["href", "/skillstorm/mastery-battles", 1, "hover:text-[#2563EB]", "transition-colors"], ["href", "/skillstorm/school-competitions", 1, "hover:text-[#2563EB]", "transition-colors"], [1, "pt-8", "text-[14px]", "text-[#4B5563]"], [2, "position", "absolute", "top", "-16px", "left", "50%", "transform", "translateX(-50%)", "background", "#E60000", "color", "#FFFFFF", "font-family", "'Kumbh Sans',sans-serif", "font-size", "13px", "font-weight", "700", "padding", "8px 24px", "border-radius", "30px", "transition", "opacity 0.3s"], [1, "w-14", "h-14", "bg-[#FEF2F2]", "rounded-2xl", "mb-6", "flex", "items-center", "justify-center", "text-[#DC2626]"], ["class", "w-6 h-6", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "text-[18px]", "font-extrabold", "text-[#111827]", "mb-3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2"]], template: function SchoolCompetitionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "video", 1);
        \u0275\u0275element(2, "source", 2);
        \u0275\u0275text(3, " Your browser does not support the video tag. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "section", 3)(5, "div", 4)(6, "div", 5);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(7, "svg", 6);
        \u0275\u0275element(8, "path", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(9, "span", 8);
        \u0275\u0275text(10, "Team-Based Competition");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "h1", 9);
        \u0275\u0275text(12, " Take the Stage.");
        \u0275\u0275element(13, "br");
        \u0275\u0275elementStart(14, "span", 10);
        \u0275\u0275text(15, "Rise as a Global Champion.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "p", 11);
        \u0275\u0275text(17, " Join hundreds of schools worldwide in a record-breaking educational event built");
        \u0275\u0275element(18, "br");
        \u0275\u0275text(19, " to inspire tomorrow's leaders. Teams take on story-driven challenges that feel like");
        \u0275\u0275element(20, "br");
        \u0275\u0275text(21, " real adventures. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 12)(23, "button", 13);
        \u0275\u0275listener("click", function SchoolCompetitionsComponent_Template_button_click_23_listener() {
          return ctx.scrollToPricing();
        });
        \u0275\u0275text(24, " Register Your School ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "button", 14);
        \u0275\u0275text(26, " Download Teacher Kit ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(27, "section", 15)(28, "div", 16)(29, "div", 17)(30, "div", 18);
        \u0275\u0275element(31, "div", 19);
        \u0275\u0275elementStart(32, "div", 20);
        \u0275\u0275text(33, "\xA330,000");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 21);
        \u0275\u0275text(35, "Per Category");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 18);
        \u0275\u0275element(37, "div", 19);
        \u0275\u0275elementStart(38, "div", 20);
        \u0275\u0275text(39, "5");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 21);
        \u0275\u0275text(41, "Students per Team");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "div", 18);
        \u0275\u0275element(43, "div", 19);
        \u0275\u0275elementStart(44, "div", 20);
        \u0275\u0275text(45, "3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "div", 21);
        \u0275\u0275text(47, "Age Categories");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "div", 18);
        \u0275\u0275element(49, "div", 19);
        \u0275\u0275elementStart(50, "div", 20);
        \u0275\u0275text(51, "100+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 21);
        \u0275\u0275text(53, "Schools Joining");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(54, "section", 22)(55, "div", 23)(56, "div", 24)(57, "h2", 25);
        \u0275\u0275text(58, "Competition Format");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "p", 26);
        \u0275\u0275text(60, " Two thrilling phases designed to challenge and inspire ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "div", 27)(62, "h3", 28);
        \u0275\u0275text(63, "Age Categories & Story Tracks");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(64, "div", 29)(65, "div", 30)(66, "div", 31);
        \u0275\u0275text(67, " 10 and under ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "h4", 32);
        \u0275\u0275text(69, "Trailblazers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "p", 33);
        \u0275\u0275text(71, "Quest for the Crown of Light");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "p", 34);
        \u0275\u0275text(73, " Fantasy problem-solving in Aurelia \u2014 ethical choices, teamwork drills, and imaginative storytelling. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(74, "div", 30)(75, "div", 31);
        \u0275\u0275text(76, " 11\u201314 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "h4", 32);
        \u0275\u0275text(78, "Visioneers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "p", 33);
        \u0275\u0275text(80, "Crisis City \u2014 Rebuilding the Future");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "p", 34);
        \u0275\u0275text(82, " Rebuild a city's services: justice, tech, economy, public health and governance. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(83, "div", 30)(84, "div", 31);
        \u0275\u0275text(85, " 15\u201319 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "h4", 32);
        \u0275\u0275text(87, "Strategists");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "p", 33);
        \u0275\u0275text(89, "The Trial of Nations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "p", 34);
        \u0275\u0275text(91, " Diplomacy, law and policy in action \u2014 debates, mock treaties, simulated courts and summits. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(92, "div", 35)(93, "div", 36)(94, "div", 37);
        \u0275\u0275element(95, "div", 38);
        \u0275\u0275elementStart(96, "div", 39)(97, "div", 40);
        \u0275\u0275text(98, " Phase 1 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "h3", 41);
        \u0275\u0275text(100, " Online Immersive Story Simulations ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(101, "p", 42);
        \u0275\u0275text(102, " Teams progress through five chapters tailored to their age group. After each");
        \u0275\u0275element(103, "br");
        \u0275\u0275text(104, " chapter, submit a creative task (poster, slides, video, brief or report). ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(105, "div", 43)(106, "h4", 44);
        \u0275\u0275text(107, " Judging Criteria: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(108, "div", 45)(109, "div", 46);
        \u0275\u0275text(110, "Creativity & Originality");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "div", 46);
        \u0275\u0275text(112, "Clarity of Communication");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(113, "div", 46);
        \u0275\u0275text(114, "Teamwork & Collaboration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(115, "div", 46);
        \u0275\u0275text(116, "Leadership Demonstration");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(117, "div", 47)(118, "div", 37);
        \u0275\u0275element(119, "div", 48);
        \u0275\u0275elementStart(120, "div", 39)(121, "div", 40);
        \u0275\u0275text(122, " Phase 2 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "h3", 41);
        \u0275\u0275text(124, " Offline Grand Finale (2-Day Knockout) ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(125, "p", 42);
        \u0275\u0275text(126, " Top teams from Phase 1 meet in person for two days of live challenges at a");
        \u0275\u0275element(127, "br");
        \u0275\u0275text(128, " regional hub. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(129, "div", 49)(130, "h4", 50);
        \u0275\u0275text(131, " Day 1: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(132, "div", 46);
        \u0275\u0275text(133, " Role-play missions and on-the-spot tasks (knockout rounds) ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(134, "div", 51)(135, "h4", 44);
        \u0275\u0275text(136, " Day 2 \u2014 Five Championship Rounds: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(137, "div", 52)(138, "div", 53);
        \u0275\u0275text(139, "Business Simulations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(140, "div", 53);
        \u0275\u0275text(141, "Courtroom Trials");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(142, "div", 53);
        \u0275\u0275text(143, "Political Summits");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(144, "div", 53);
        \u0275\u0275text(145, "Innovation Pitches");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(146, "div", 53);
        \u0275\u0275text(147, "Surprise Live Challenge");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(148, "section", 54)(149, "div", 55)(150, "div", 56)(151, "h2", 57);
        \u0275\u0275text(152, "Competition Format");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(153, "p", 58);
        \u0275\u0275text(154, "Merit-first scoring with community support");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(155, "div", 59)(156, "div", 60);
        \u0275\u0275listener("mouseenter", function SchoolCompetitionsComponent_Template_div_mouseenter_156_listener() {
          return ctx.activePlan = "single";
        })("mouseleave", function SchoolCompetitionsComponent_Template_div_mouseleave_156_listener() {
          return ctx.activePlan = "full";
        });
        \u0275\u0275elementStart(157, "h3", 61);
        \u0275\u0275text(158, "Single Team");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(159, "div", 62);
        \u0275\u0275text(160, "\xA350");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(161, "p", 63);
        \u0275\u0275text(162, "1 team in any category");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(163, "ul", 64)(164, "li", 65);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(165, "svg", 66);
        \u0275\u0275element(166, "path", 67);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(167, "span", 68);
        \u0275\u0275text(168, "Up to 5 students");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(169, "li", 65);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(170, "svg", 66);
        \u0275\u0275element(171, "path", 67);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(172, "span", 68);
        \u0275\u0275text(173, "Premium course access");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(174, "li", 65);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(175, "svg", 66);
        \u0275\u0275element(176, "path", 67);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(177, "span", 68);
        \u0275\u0275text(178, "Digital certificates for all");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(179, "li", 65);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(180, "svg", 66);
        \u0275\u0275element(181, "path", 67);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(182, "span", 68);
        \u0275\u0275text(183, "Competition kit & handbook");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(184, "button", 69);
        \u0275\u0275text(185, "Select Plan");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(186, "div", 60);
        \u0275\u0275listener("mouseenter", function SchoolCompetitionsComponent_Template_div_mouseenter_186_listener() {
          return ctx.activePlan = "full";
        })("mouseleave", function SchoolCompetitionsComponent_Template_div_mouseleave_186_listener() {
          return ctx.activePlan = "full";
        });
        \u0275\u0275template(187, SchoolCompetitionsComponent_div_187_Template, 2, 0, "div", 70);
        \u0275\u0275elementStart(188, "h3", 61);
        \u0275\u0275text(189, "Full Set");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(190, "div", 62);
        \u0275\u0275text(191, "\xA3150");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(192, "p", 63);
        \u0275\u0275text(193, "1 team in each of 3 categories");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(194, "ul", 64)(195, "li", 65);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(196, "svg", 66);
        \u0275\u0275element(197, "path", 67);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(198, "span", 68);
        \u0275\u0275text(199, "Up to 15 students total");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(200, "li", 65);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(201, "svg", 66);
        \u0275\u0275element(202, "path", 67);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(203, "span", 68);
        \u0275\u0275text(204, "Premium course access");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(205, "li", 65);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(206, "svg", 66);
        \u0275\u0275element(207, "path", 67);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(208, "span", 68);
        \u0275\u0275text(209, "Digital certificates for all");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(210, "li", 65);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(211, "svg", 66);
        \u0275\u0275element(212, "path", 67);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(213, "span", 68);
        \u0275\u0275text(214, "Competition kit & handbook");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(215, "li", 65);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(216, "svg", 66);
        \u0275\u0275element(217, "path", 67);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(218, "span", 68);
        \u0275\u0275text(219, "Teacher mentorship tools");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(220, "li", 65);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(221, "svg", 66);
        \u0275\u0275element(222, "path", 67);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(223, "span", 68);
        \u0275\u0275text(224, "Priority support");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(225, "button", 69);
        \u0275\u0275text(226, "Select Plan");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(227, "div", 60);
        \u0275\u0275listener("mouseenter", function SchoolCompetitionsComponent_Template_div_mouseenter_227_listener() {
          return ctx.activePlan = "additional";
        })("mouseleave", function SchoolCompetitionsComponent_Template_div_mouseleave_227_listener() {
          return ctx.activePlan = "full";
        });
        \u0275\u0275elementStart(228, "h3", 61);
        \u0275\u0275text(229, "Additional Team");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(230, "div", 62);
        \u0275\u0275text(231, "+\xA350");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(232, "p", 63);
        \u0275\u0275text(233, "Per extra team in any category");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(234, "ul", 64)(235, "li", 65);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(236, "svg", 66);
        \u0275\u0275element(237, "path", 67);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(238, "span", 68);
        \u0275\u0275text(239, "Up to 5 additional students");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(240, "li", 65);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(241, "svg", 66);
        \u0275\u0275element(242, "path", 67);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(243, "span", 68);
        \u0275\u0275text(244, "Same benefits as above");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(245, "li", 65);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(246, "svg", 66);
        \u0275\u0275element(247, "path", 67);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(248, "span", 68);
        \u0275\u0275text(249, "Deeper school participation");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(250, "button", 69);
        \u0275\u0275text(251, "Select Plan");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(252, "section", 71)(253, "div", 23)(254, "div", 72)(255, "div", 73);
        \u0275\u0275element(256, "div", 74);
        \u0275\u0275elementStart(257, "h3", 75);
        \u0275\u0275text(258, "What Schools Receive");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(259, "div", 76)(260, "div", 77);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(261, "svg", 78);
        \u0275\u0275element(262, "path", 79);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(263, "span", 80);
        \u0275\u0275text(264, "Access to premium In My Academy courses (project-based)");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(265, "div", 77);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(266, "svg", 78);
        \u0275\u0275element(267, "path", 79);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(268, "span", 80);
        \u0275\u0275text(269, "Digital competition kits: handbooks, posters, rubrics, templates");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(270, "div", 77);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(271, "svg", 78);
        \u0275\u0275element(272, "path", 79);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(273, "span", 80);
        \u0275\u0275text(274, "Teacher mentorship tools and session guides");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(275, "div", 77);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(276, "svg", 78);
        \u0275\u0275element(277, "path", 79);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(278, "span", 80);
        \u0275\u0275text(279, "Global shout-outs and features for winning schools");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(280, "div", 77);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(281, "svg", 78);
        \u0275\u0275element(282, "path", 79);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(283, "span", 80);
        \u0275\u0275text(284, "Live leaderboards to track progress in real time");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(285, "section", 81)(286, "div", 82)(287, "div", 24)(288, "h2", 25);
        \u0275\u0275text(289, "Scoring System");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(290, "p", 26);
        \u0275\u0275text(291, "Merit-first scoring with community support");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(292, "div", 83)(293, "div", 84);
        \u0275\u0275element(294, "div", 85);
        \u0275\u0275elementStart(295, "h3", 86);
        \u0275\u0275text(296, "Lift Support (Community Boost)");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(297, "p", 87);
        \u0275\u0275text(298, " After your Phase 1 submission is approved, you'll receive a unique Lift link and QR code. Families and friends can Send a Lift (\xA31) to support your project \u2014 each Lift adds +1 to your Community Support score. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(299, "p", 88);
        \u0275\u0275text(300, "Project quality still matters most.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(301, "div", 89)(302, "div", 90)(303, "div", 91)(304, "h3", 86);
        \u0275\u0275text(305, "Project Merit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(306, "span", 92);
        \u0275\u0275text(307, "65%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(308, "ul", 93)(309, "li");
        \u0275\u0275text(310, "Creativity & Originality");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(311, "li");
        \u0275\u0275text(312, "Clarity of presentation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(313, "li");
        \u0275\u0275text(314, "Alignment with the task");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(315, "li");
        \u0275\u0275text(316, "Overall quality");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(317, "div", 90)(318, "div", 91)(319, "h3", 86);
        \u0275\u0275text(320, "Community Support");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(321, "span", 94);
        \u0275\u0275text(322, "35%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(323, "p", 95);
        \u0275\u0275text(324, " Your Lifts, normalised against the top count in your category for equity. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(325, "div", 96)(326, "div", 73)(327, "div", 97);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(328, "svg", 98);
        \u0275\u0275element(329, "path", 99);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(330, "h3", 75);
        \u0275\u0275text(331, "Score Calculation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(332, "div", 100);
        \u0275\u0275text(333, " Final Score = (Merit Score \xD7 0.65) + (Normalized Lifts \xD7 0.35) ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(334, "div", 101)(335, "div", 102)(336, "p", 103);
        \u0275\u0275text(337, "Example A:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(338, "p", 104);
        \u0275\u0275text(339, "90/100 merit with 850 Lifts (category max 1500) = ");
        \u0275\u0275elementStart(340, "span", 105);
        \u0275\u0275text(341, "79 points");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(342, "div", 102)(343, "p", 103);
        \u0275\u0275text(344, "Example B:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(345, "p", 104);
        \u0275\u0275text(346, "84/100 with max Lifts = ");
        \u0275\u0275elementStart(347, "span", 105);
        \u0275\u0275text(348, "88.6 points");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(349, "p", 106);
        \u0275\u0275text(350, "Strong skills can beat popularity!");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(351, "section", 81)(352, "div", 23)(353, "div", 107)(354, "div", 108);
        \u0275\u0275text(355, " Total pool: \xA330,000 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(356, "h2", 25);
        \u0275\u0275text(357, "Prizes & Opportunities");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(358, "p", 26);
        \u0275\u0275text(359, "Awards distributed across age categories and the Grand Finale");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(360, "div", 109);
        \u0275\u0275repeaterCreate(361, SchoolCompetitionsComponent_For_362_Template, 7, 3, "div", 110, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(363, "div", 111);
        \u0275\u0275repeaterCreate(364, SchoolCompetitionsComponent_For_365_Template, 7, 3, "div", 110, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(366, "div", 112)(367, "p", 113);
        \u0275\u0275text(368, "Exact allocation announced with each finalist roster to reflect participation and regions.");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(369, "section", 114)(370, "div", 82)(371, "div", 115)(372, "div", 96)(373, "div", 73);
        \u0275\u0275element(374, "div", 116);
        \u0275\u0275elementStart(375, "h3", 75);
        \u0275\u0275text(376, "Key Dates");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(377, "div", 117)(378, "span", 26);
        \u0275\u0275text(379, "Registration Opens");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(380, "span", 118);
        \u0275\u0275text(381, "7 November");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(382, "hr", 119);
        \u0275\u0275elementStart(383, "div", 117)(384, "span", 26);
        \u0275\u0275text(385, "Challenge Ends");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(386, "span", 120);
        \u0275\u0275text(387, "25 April 2026");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(388, "p", 121);
        \u0275\u0275text(389, "Exact dates and venue announced later");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(390, "div", 96)(391, "div", 73);
        \u0275\u0275element(392, "div", 122);
        \u0275\u0275elementStart(393, "h3", 75);
        \u0275\u0275text(394, "Simple Rules");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(395, "ul", 123)(396, "li", 77);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(397, "svg", 78);
        \u0275\u0275element(398, "path", 79);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(399, "span", 124);
        \u0275\u0275text(400, "Everything must be original \u2014 no copying or AI-generated content");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(401, "li", 77);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(402, "svg", 78);
        \u0275\u0275element(403, "path", 79);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(404, "span", 124);
        \u0275\u0275text(405, "Submit via YouTube or Google Drive (max 200 MB)");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(406, "li", 77);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(407, "svg", 78);
        \u0275\u0275element(408, "path", 79);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(409, "span", 124);
        \u0275\u0275text(410, "Entry formats: videos (30 sec\u20133 min) and digital files as requested per chapter");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(411, "li", 77);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(412, "svg", 78);
        \u0275\u0275element(413, "path", 79);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(414, "span", 124);
        \u0275\u0275text(415, "One team per category per school (enter all three if you wish)");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(416, "li", 77);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(417, "svg", 78);
        \u0275\u0275element(418, "path", 79);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(419, "span", 124);
        \u0275\u0275text(420, "Under-18s require parent/guardian consent");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(421, "li", 77);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(422, "svg", 78);
        \u0275\u0275element(423, "path", 79);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(424, "span", 124);
        \u0275\u0275text(425, "Fees shown in \xA3 (local currencies only in regional marketing)");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(426, "div", 125);
        \u0275\u0275element(427, "div", 126);
        \u0275\u0275elementStart(428, "h2", 127);
        \u0275\u0275text(429, "Ready to Rally Your School?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(430, "p", 128);
        \u0275\u0275text(431, " Register your teams, download your teacher kit, and unleash your students' best work. Let's make history together \u2014 and give your school the spotlight it deserves. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(432, "div", 129)(433, "button", 130);
        \u0275\u0275listener("click", function SchoolCompetitionsComponent_Template_button_click_433_listener() {
          return ctx.scrollToPricing();
        });
        \u0275\u0275text(434, " Register Your School ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(435, "button", 131);
        \u0275\u0275text(436, " Download Teacher Kit ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(437, "div", 132)(438, "p", 133);
        \u0275\u0275text(439, "Organised by In My Academy Ltd (UK) \u2014 empowering the next generation through project-based global learning.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(440, "footer", 134)(441, "div", 23)(442, "div", 135)(443, "div", 136)(444, "div", 137);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(445, "svg", 138);
        \u0275\u0275element(446, "path", 139);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(447, "div")(448, "p", 140);
        \u0275\u0275text(449, "Address");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(450, "p", 141);
        \u0275\u0275text(451, "IN MY ACADEMY LTD 71-75, Shelton Street, Covent Garden, London, WC2H 9JQ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(452, "div", 136)(453, "div", 137);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(454, "svg", 138);
        \u0275\u0275element(455, "path", 142)(456, "path", 143);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(457, "div")(458, "p", 140);
        \u0275\u0275text(459, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(460, "p", 144);
        \u0275\u0275text(461, "info@inmyacademy.com");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(462, "div", 136)(463, "div", 137);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(464, "svg", 138);
        \u0275\u0275element(465, "path", 145);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(466, "div")(467, "p", 140);
        \u0275\u0275text(468, "Call");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(469, "p", 144);
        \u0275\u0275text(470, "+447748416224");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(471, "div", 146)(472, "div", 147)(473, "p", 148);
        \u0275\u0275text(474, " We're more than a platform\u2014we're a global powerhouse redefining education with interactive, real-world mastery that excites, engages, and empowers you to achieve the impossible. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(475, "div", 149)(476, "span", 150);
        \u0275\u0275text(477, "Follow on:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(478, "a", 151);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(479, "svg", 152);
        \u0275\u0275element(480, "path", 153);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(481, "a", 151);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(482, "svg", 152);
        \u0275\u0275element(483, "path", 154);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(484, "a", 151);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(485, "svg", 152);
        \u0275\u0275element(486, "path", 155);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(487, "div", 156)(488, "h4", 157);
        \u0275\u0275text(489, "Quick Links");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(490, "ul", 158)(491, "li")(492, "a", 159);
        \u0275\u0275text(493, "About");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(494, "li")(495, "a", 159);
        \u0275\u0275text(496, "Course");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(497, "li")(498, "a", 159);
        \u0275\u0275text(499, "Contact Us");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(500, "li")(501, "a", 159);
        \u0275\u0275text(502, "Blog");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(503, "div", 160)(504, "h4", 157);
        \u0275\u0275text(505, "SkillStorm Global Competitions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(506, "ul", 158)(507, "li")(508, "a", 161);
        \u0275\u0275text(509, "Global Open Challenges");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(510, "li")(511, "a", 162);
        \u0275\u0275text(512, "Global Mastery Battles");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(513, "li")(514, "a", 163);
        \u0275\u0275text(515, "Global School competitions");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(516, "div", 164);
        \u0275\u0275text(517, " \xA9 2025 All Rights Reserved ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(156);
        \u0275\u0275classProp("active", ctx.activePlan === "single");
        \u0275\u0275advance(28);
        \u0275\u0275classProp("active", ctx.activePlan === "single");
        \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(16, _c0));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activePlan === "full");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activePlan === "full");
        \u0275\u0275advance(38);
        \u0275\u0275classProp("active", ctx.activePlan === "full");
        \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(17, _c1));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activePlan === "additional");
        \u0275\u0275advance(23);
        \u0275\u0275classProp("active", ctx.activePlan === "additional");
        \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(18, _c2));
        \u0275\u0275advance(111);
        \u0275\u0275repeater(ctx.perks.slice(0, 4));
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.perks.slice(4, 7));
      }
    }, dependencies: [CommonModule, NgIf, RouterLink], styles: ['\n\n.pricing-card[_ngcontent-%COMP%] {\n  position: relative;\n  background: #F5F5F5;\n  border: 2px solid transparent;\n  border-radius: 16px;\n  padding: 48px 32px;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  height: 100%;\n  transition: all 0.3s ease;\n}\n.pricing-card.active[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border-color: #E60000;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);\n}\n.plan-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #FFFFFF;\n  color: #000000;\n  font-family: "Kumbh Sans", sans-serif;\n  font-size: 15px;\n  font-weight: 700;\n  border: none;\n  border-radius: 8px;\n  padding: 16px;\n  cursor: pointer;\n  margin-top: 40px;\n  text-align: center;\n  display: block;\n  transition: all 0.3s ease;\n}\n.plan-btn.active[_ngcontent-%COMP%] {\n  background: #E60000;\n  color: #FFFFFF;\n}\n@media (max-width: 768px) {\n  .hero-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .hero-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 32px;\n  }\n  .phases-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n}\n/*# sourceMappingURL=school-competitions.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SchoolCompetitionsComponent, { className: "SchoolCompetitionsComponent", filePath: "src\\app\\pages\\school-competitions\\school-competitions.component.ts", lineNumber: 12 });
})();
export {
  SchoolCompetitionsComponent
};
//# sourceMappingURL=chunk-2FZOIAMM.js.map
