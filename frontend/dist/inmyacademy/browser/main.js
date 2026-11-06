import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  provideRouter
} from "./chunk-25CH7CJK.js";
import {
  bootstrapApplication
} from "./chunk-FHQOC34G.js";
import {
  provideHttpClient
} from "./chunk-QGS4RBVK.js";
import {
  CommonModule,
  filter,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-EW7BAGJT.js";

// src/app/guards/auth.guard.ts
var authGuard = (route, state) => {
  const router = inject(Router);
  const userId = localStorage.getItem("openChallengeRegistrationDbId") || localStorage.getItem("userId");
  const role = localStorage.getItem("currentUserRole");
  if (!userId && !role) {
    router.navigate(["/login"]);
    return false;
  }
  return true;
};

// src/app/app.routes.ts
var routes = [
  // Default redirect
  { path: "", redirectTo: "open-challenges", pathMatch: "full" },
  // ── Clean new URLs ──────────────────────────────────────────
  { path: "open-challenges", loadComponent: () => import("./chunk-4565CWMJ.js").then((m) => m.OpenChallengesComponent) },
  { path: "school-competitions", loadComponent: () => import("./chunk-R5IJ72QC.js").then((m) => m.SchoolCompetitionsComponent) },
  { path: "skillstorm-leaderboard", loadComponent: () => import("./chunk-JQP3W5OS.js").then((m) => m.LeaderboardComponent) },
  { path: "registration-wizard", loadComponent: () => import("./chunk-TSV6FVU6.js").then((m) => m.RegistrationWizardComponent) },
  { path: "mastery-battles", loadComponent: () => import("./chunk-HH2U4TEY.js").then((m) => m.MasteryBattlesComponent) },
  { path: "courses-catalog", loadComponent: () => import("./chunk-O5PQA4RA.js").then((m) => m.CoursesCatalogComponent) },
  { path: "tracks/:slug", loadComponent: () => import("./chunk-2ZNMDMZ2.js").then((m) => m.TrackDetailsComponent) },
  { path: "learning-lessons/:slug", loadComponent: () => import("./chunk-ZSJSJBX2.js").then((m) => m.LearningLessonsComponent) },
  { path: "challenges/:slug", loadComponent: () => import("./chunk-2CRP7H6Y.js").then((m) => m.ChallengeDetailsComponent) },
  { path: "school-dashboard", loadComponent: () => import("./chunk-75752ZSV.js").then((m) => m.SchoolDashboardComponent) },
  { path: "open-challenges-dashboard", loadComponent: () => import("./chunk-56B57IV6.js").then((m) => m.OpenChallengesDashboardComponent) },
  { path: "mastery-battles-dashboard", loadComponent: () => import("./chunk-J5PYOT6Z.js").then((m) => m.MasteryBattlesDashboardComponent) },
  // ── Other pages ─────────────────────────────────────────────
  { path: "login", loadComponent: () => import("./chunk-SHAH4YKE.js").then((m) => m.LoginComponent) },
  { path: "admin/dashboard", loadComponent: () => import("./chunk-3SXXK4H7.js").then((m) => m.AdminDashboardComponent) },
  { path: "courses", canActivate: [authGuard], loadComponent: () => import("./chunk-WSN77LTQ.js").then((m) => m.CoursesComponent) },
  // ── Legacy redirects (old skillstorm/* paths) ───────────────
  { path: "skillstorm/open-challenges", redirectTo: "open-challenges", pathMatch: "full" },
  { path: "skillstorm/school-competitions", redirectTo: "school-competitions", pathMatch: "full" },
  { path: "skillstorm/leaderboard", redirectTo: "skillstorm-leaderboard", pathMatch: "full" },
  { path: "skillstorm/registration-wizard", redirectTo: "registration-wizard", pathMatch: "full" },
  { path: "skillstorm/mastery-battles", redirectTo: "mastery-battles", pathMatch: "full" },
  { path: "skillstorm/courses", redirectTo: "courses-catalog", pathMatch: "full" },
  { path: "skillstorm/school-dashboard", redirectTo: "school-dashboard", pathMatch: "full" },
  { path: "skillstorm/open-challenges-dashboard", redirectTo: "open-challenges-dashboard", pathMatch: "full" },
  { path: "skillstorm/mastery-battles-dashboard", redirectTo: "mastery-battles-dashboard", pathMatch: "full" }
];

// src/app/app.config.ts
var appConfig = {
  providers: [provideRouter(routes), provideHttpClient()]
};

// src/app/components/navbar/navbar.component.ts
var _c0 = () => ({ exact: true });
function NavbarComponent_Conditional_5_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 21)(2, "a", 22);
    \u0275\u0275text(3, " Global Open Challenges ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 23);
    \u0275\u0275text(5, " Global Mastery Battles ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 24);
    \u0275\u0275text(7, " Global School Competitions ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 25);
    \u0275\u0275text(9, " SkillStorm Global Leaderboard ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(4, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(5, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(6, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(7, _c0));
  }
}
function NavbarComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "a", 10);
    \u0275\u0275text(2, "Home");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 11);
    \u0275\u0275text(4, "About Us");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 12);
    \u0275\u0275text(6, "Courses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 13);
    \u0275\u0275listener("mouseenter", function NavbarComponent_Conditional_5_Template_div_mouseenter_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.isDropdownOpen = true);
    })("mouseleave", function NavbarComponent_Conditional_5_Template_div_mouseleave_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.isDropdownOpen = false);
    });
    \u0275\u0275elementStart(8, "button", 14);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_5_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.isDropdownOpen = !ctx_r1.isDropdownOpen);
    });
    \u0275\u0275text(9, " SkillStorm Global Competitions ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 15);
    \u0275\u0275element(11, "path", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, NavbarComponent_Conditional_5_Conditional_12_Template, 10, 8, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "a", 18);
    \u0275\u0275text(14, "Blog");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "a", 19);
    \u0275\u0275text(16, "Contact");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 20);
    \u0275\u0275text(18, "Get Started");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275classProp("text-[#2D3192]", ctx_r1.isDropdownOpen);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("rotate-180", ctx_r1.isDropdownOpen);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(12, ctx_r1.isDropdownOpen ? 12 : -1);
  }
}
function NavbarComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275text(1, "Logout");
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 7);
    \u0275\u0275element(1, "path", 27);
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 7);
    \u0275\u0275element(1, "path", 28);
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_Conditional_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 30);
    \u0275\u0275text(1, "Home");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 31);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_11_Conditional_2_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.isMobileMenuOpen = false);
    });
    \u0275\u0275text(3, "Courses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 32)(5, "div", 33);
    \u0275\u0275text(6, "SkillStorm Global Competitions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 34)(8, "a", 35);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_11_Conditional_2_Template_a_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.isMobileMenuOpen = false);
    });
    \u0275\u0275text(9, "Global Open Challenges");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 36);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_11_Conditional_2_Template_a_click_10_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.isMobileMenuOpen = false);
    });
    \u0275\u0275text(11, "Global Mastery Battles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "a", 37);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_11_Conditional_2_Template_a_click_12_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.isMobileMenuOpen = false);
    });
    \u0275\u0275text(13, "Global School Competitions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "a", 38);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_11_Conditional_2_Template_a_click_14_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.isMobileMenuOpen = false);
    });
    \u0275\u0275text(15, "SkillStorm Global Leaderboard");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "a", 30);
    \u0275\u0275text(17, "About");
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_Conditional_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 39);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_11_Conditional_3_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.isMobileMenuOpen = false);
    });
    \u0275\u0275text(1, "Logout");
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 29);
    \u0275\u0275template(2, NavbarComponent_Conditional_11_Conditional_2_Template, 18, 0)(3, NavbarComponent_Conditional_11_Conditional_3_Template, 2, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, !ctx_r1.isDashboardView ? 2 : 3);
  }
}
var NavbarComponent = class _NavbarComponent {
  constructor() {
    this.isDropdownOpen = false;
    this.isMobileMenuOpen = false;
    this.isHidden = false;
    this.lastScrollTop = 0;
    this.isDashboardView = false;
    this.router = inject(Router);
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      const url = event.urlAfterRedirects || event.url;
      this.isDashboardView = url.includes("dashboard");
      window.scrollTo(0, 0);
    });
    const currentUrl = this.router.url;
    this.isDashboardView = currentUrl.includes("dashboard");
  }
  onScroll() {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollTop > this.lastScrollTop && currentScrollTop > 80) {
      this.isHidden = true;
    } else {
      this.isHidden = false;
    }
    this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  }
  static {
    this.\u0275fac = function NavbarComponent_Factory(t) {
      return new (t || _NavbarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarComponent, selectors: [["app-navbar"]], hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("scroll", function NavbarComponent_scroll_HostBindingHandler() {
          return ctx.onScroll();
        }, false, \u0275\u0275resolveWindow);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 5, consts: [[1, "bg-white", "shadow-md", "w-full", "sticky", "top-0", "z-[9999]", "transition-transform", "duration-300"], [1, "max-w-[1366px]", "mx-auto", "px-[15px]", "lg:px-[50px]", "xl:px-[50px]"], [1, "flex", "justify-between", "h-24", "items-center"], ["src", "assets/Logo-resized.svg", "alt", "inmyacademy logo", "routerLink", "/", 1, "h-[60px]", "lg:h-[70px]", "xl:h-[75px]", "w-auto", "cursor-pointer", "flex-shrink-0"], [1, "hidden", "xl:flex", "items-center", "gap-8"], [1, "xl:hidden", "flex", "items-center"], [1, "text-gray-600", "hover:text-blue-600", "focus:outline-none", "p-2", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-7", "w-7"], [1, "xl:hidden", "bg-white", "border-t", "border-gray-100"], [1, "flex", "items-center", "gap-3", "lg:gap-5", "xl:gap-6"], ["href", "https://inmyacademy.com/", 1, "text-gray-800", "hover:text-[#2D3192]", "font-bold", "text-[14px]", "lg:text-[15px]", "xl:text-[16px]", "transition-colors", "whitespace-nowrap"], ["href", "https://inmyacademy.com/about-us/", 1, "text-gray-800", "hover:text-[#2D3192]", "font-bold", "text-[14px]", "lg:text-[15px]", "xl:text-[16px]", "transition-colors", "whitespace-nowrap"], ["routerLink", "/courses-catalog", 1, "text-gray-800", "hover:text-[#2D3192]", "font-bold", "text-[14px]", "lg:text-[15px]", "xl:text-[16px]", "transition-colors", "whitespace-nowrap"], [1, "relative", "group", "h-full", "flex", "items-center", 3, "mouseenter", "mouseleave"], [1, "text-gray-800", "hover:text-[#2D3192]", "font-bold", "text-[14px]", "lg:text-[15px]", "xl:text-[16px]", "transition-colors", "flex", "items-center", "gap-1", "whitespace-nowrap", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "transition-transform", "duration-200", "flex-shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], [2, "position", "absolute", "left", "0", "top", "100%", "width", "260px", "background", "#ffffff", "border-radius", "0", "box-shadow", "0 8px 24px rgba(0,0,0,0.15)", "overflow", "hidden", "z-index", "10000"], ["href", "https://inmyacademy.com/blog/", 1, "text-gray-800", "hover:text-[#2D3192]", "font-bold", "text-[14px]", "lg:text-[15px]", "xl:text-[16px]", "transition-colors", "whitespace-nowrap"], ["href", "https://inmyacademy.com/contact/", 1, "text-gray-800", "hover:text-[#2D3192]", "font-bold", "text-[14px]", "lg:text-[15px]", "xl:text-[16px]", "transition-colors", "whitespace-nowrap"], [1, "bg-[#2D3192]", "hover:bg-opacity-90", "text-white", "px-5", "lg:px-7", "xl:px-8", "py-2.5", "rounded", "text-[14px]", "lg:text-[15px]", "font-bold", "transition-all", "shadow-sm", "whitespace-nowrap"], [2, "display", "flex", "flex-direction", "column"], ["routerLink", "/open-challenges", "routerLinkActive", "active-nav-link", 1, "nav-dropdown-link", 3, "routerLinkActiveOptions"], ["routerLink", "/mastery-battles", "routerLinkActive", "active-nav-link", 1, "nav-dropdown-link", 3, "routerLinkActiveOptions"], ["routerLink", "/school-competitions", "routerLinkActive", "active-nav-link", 1, "nav-dropdown-link", 3, "routerLinkActiveOptions"], ["routerLink", "/skillstorm-leaderboard", "routerLinkActive", "active-nav-link", 1, "nav-dropdown-link", 3, "routerLinkActiveOptions"], ["routerLink", "/", 1, "bg-[#dc2626]", "hover:bg-opacity-90", "text-white", "px-6", "lg:px-8", "py-2.5", "rounded", "text-[14px]", "lg:text-[15px]", "font-bold", "transition-all", "shadow-sm", "whitespace-nowrap"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 6h16M4 12h16M4 18h16"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "px-2", "pt-2", "pb-3", "space-y-1", "sm:px-3"], ["href", "#", 1, "block", "px-3", "py-2", "rounded-md", "text-base", "font-medium", "text-gray-700", "hover:text-blue-600", "hover:bg-gray-50"], ["routerLink", "/courses-catalog", 1, "block", "px-3", "py-2", "rounded-md", "text-base", "font-medium", "text-gray-700", "hover:text-blue-600", "hover:bg-gray-50", 3, "click"], [1, "px-3", "py-2"], [1, "text-base", "font-medium", "text-gray-900", "mb-2"], [1, "pl-4", "space-y-2", "border-l-2", "border-gray-200"], ["routerLink", "/open-challenges", 1, "block", "text-sm", "text-gray-600", "hover:text-blue-600", 3, "click"], ["routerLink", "/mastery-battles", 1, "block", "text-sm", "text-gray-600", "hover:text-blue-600", 3, "click"], ["routerLink", "/school-competitions", 1, "block", "text-sm", "text-gray-600", "hover:text-blue-600", 3, "click"], ["routerLink", "/skillstorm-leaderboard", 1, "block", "text-sm", "text-gray-600", "hover:text-blue-600", 3, "click"], ["routerLink", "/", 1, "block", "px-3", "py-2", "rounded-md", "text-base", "font-medium", "text-red-600", "hover:bg-red-50", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275element(3, "img", 3);
        \u0275\u0275elementStart(4, "div", 4);
        \u0275\u0275template(5, NavbarComponent_Conditional_5_Template, 19, 5)(6, NavbarComponent_Conditional_6_Template, 2, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 5)(8, "button", 6);
        \u0275\u0275listener("click", function NavbarComponent_Template_button_click_8_listener() {
          return ctx.isMobileMenuOpen = !ctx.isMobileMenuOpen;
        });
        \u0275\u0275template(9, NavbarComponent_Conditional_9_Template, 2, 0, ":svg:svg", 7)(10, NavbarComponent_Conditional_10_Template, 2, 0);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(11, NavbarComponent_Conditional_11_Template, 4, 1, "div", 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("-translate-y-full", ctx.isHidden);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(5, !ctx.isDashboardView ? 5 : 6);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(9, !ctx.isMobileMenuOpen ? 9 : 10);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(11, ctx.isMobileMenuOpen ? 11 : -1);
      }
    }, dependencies: [CommonModule, RouterModule, RouterLink, RouterLinkActive], styles: ["\n\n.nav-dropdown-link[_ngcontent-%COMP%] {\n  display: block;\n  padding: 12px 24px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #1f2937;\n  text-decoration: none;\n  transition: background 0.1s, color 0.1s;\n  white-space: nowrap;\n}\n.nav-dropdown-link[_ngcontent-%COMP%]:hover {\n  background: #2D3192;\n  color: #ffffff;\n}\n.nav-dropdown-link.active-nav-link[_ngcontent-%COMP%] {\n  background: #2D3192 !important;\n  color: #ffffff !important;\n  font-weight: 700;\n}\n/*# sourceMappingURL=navbar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "src\\app\\components\\navbar\\navbar.component.ts", lineNumber: 134 });
})();

// src/app/app.component.ts
function AppComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-navbar");
  }
}
var AppComponent = class _AppComponent {
  constructor() {
    this.title = "inmyacademy";
    this.showNavbar = true;
    this.router = inject(Router);
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      const url = event.urlAfterRedirects || event.url;
      const hideRoutes = [
        "/login",
        "/registration-wizard",
        "/school-dashboard",
        "/admin/dashboard"
      ];
      this.showNavbar = !hideRoutes.some((route) => url.includes(route));
    });
  }
  static {
    this.\u0275fac = function AppComponent_Factory(t) {
      return new (t || _AppComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 1, consts: [[1, "min-h-screen", "bg-gray-50"]], template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, AppComponent_Conditional_0_Template, 1, 0, "app-navbar");
        \u0275\u0275elementStart(1, "main", 0);
        \u0275\u0275element(2, "router-outlet");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.showNavbar ? 0 : -1);
      }
    }, dependencies: [RouterOutlet, NavbarComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 20 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
