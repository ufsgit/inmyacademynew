import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-RK72NEAB.js";
import {
  provideHttpClient
} from "./chunk-PLXL2LZV.js";
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
} from "./chunk-C72BQOBI.js";

// src/app/guards/auth.guard.ts
var authGuard = (route, state) => {
  const router = inject(Router);
  const userId = localStorage.getItem("openChallengeRegistrationDbId");
  if (!userId) {
    router.navigate(["/skillstorm/mastery-battles"]);
    return false;
  }
  const purchasedRaw = localStorage.getItem(`purchasedCourses-${userId}`);
  const purchased = purchasedRaw ? JSON.parse(purchasedRaw) : [];
  if (purchased.length === 0) {
    router.navigate(["/skillstorm/mastery-battles"]);
    return false;
  }
  return true;
};

// src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: "skillstorm/open-challenges", pathMatch: "full" },
  { path: "skillstorm/open-challenges", loadComponent: () => import("./chunk-TMFZSPLA.js").then((m) => m.OpenChallengesComponent) },
  { path: "skillstorm/school-competitions", loadComponent: () => import("./chunk-2FZOIAMM.js").then((m) => m.SchoolCompetitionsComponent) },
  { path: "skillstorm/registration-wizard", loadComponent: () => import("./chunk-VOIXS43C.js").then((m) => m.RegistrationWizardComponent) },
  { path: "skillstorm/mastery-battles", loadComponent: () => import("./chunk-7WNHVXMT.js").then((m) => m.MasteryBattlesComponent) },
  { path: "skillstorm/courses", loadComponent: () => import("./chunk-YPL7YUFI.js").then((m) => m.CoursesCatalogComponent) },
  { path: "skillstorm/tracks/:slug", loadComponent: () => import("./chunk-LGA2N7BV.js").then((m) => m.TrackDetailsComponent) },
  { path: "skillstorm/learning-lessons/:slug", loadComponent: () => import("./chunk-SG6CQW3Z.js").then((m) => m.LearningLessonsComponent) },
  { path: "skillstorm/challenges/:slug", loadComponent: () => import("./chunk-OJP3MDPB.js").then((m) => m.ChallengeDetailsComponent) },
  { path: "login", loadComponent: () => import("./chunk-C44UKSDP.js").then((m) => m.LoginComponent) },
  { path: "skillstorm/school-dashboard", loadComponent: () => import("./chunk-M7X3LCMS.js").then((m) => m.SchoolDashboardComponent) },
  { path: "skillstorm/open-challenges-dashboard", loadComponent: () => import("./chunk-SZFXXL2Y.js").then((m) => m.OpenChallengesDashboardComponent) },
  { path: "skillstorm/mastery-battles-dashboard", loadComponent: () => import("./chunk-WMMROB63.js").then((m) => m.MasteryBattlesDashboardComponent) },
  { path: "admin/dashboard", loadComponent: () => import("./chunk-4YDCZADN.js").then((m) => m.AdminDashboardComponent) },
  { path: "courses", canActivate: [authGuard], loadComponent: () => import("./chunk-ZTRB4LCD.js").then((m) => m.CoursesComponent) }
];

// src/app/app.config.ts
var appConfig = {
  providers: [provideRouter(routes), provideHttpClient()]
};

// src/app/components/navbar/navbar.component.ts
var _c0 = () => ({ exact: true });
function NavbarComponent_Conditional_5_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 19)(2, "a", 20);
    \u0275\u0275text(3, " Global Open Challenges ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 21);
    \u0275\u0275text(5, " Global Mastery Battles ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 22);
    \u0275\u0275text(7, " Global School Competitions ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(3, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(4, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(5, _c0));
  }
}
function NavbarComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "a", 11);
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
    \u0275\u0275template(12, NavbarComponent_Conditional_5_Conditional_12_Template, 8, 6, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "a", 11);
    \u0275\u0275text(14, "Blog");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "a", 11);
    \u0275\u0275text(16, "Contact");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 18);
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
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275text(1, "Logout");
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_Conditional_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 25);
    \u0275\u0275text(1, "Home");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 26);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_11_Conditional_2_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.isMobileMenuOpen = false);
    });
    \u0275\u0275text(3, "Courses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 27)(5, "div", 28);
    \u0275\u0275text(6, "SkillStorm Global Competitions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 29)(8, "a", 30);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_11_Conditional_2_Template_a_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.isMobileMenuOpen = false);
    });
    \u0275\u0275text(9, "Global Open Challenges");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 31);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_11_Conditional_2_Template_a_click_10_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.isMobileMenuOpen = false);
    });
    \u0275\u0275text(11, "Global Mastery Battles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "a", 32);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_11_Conditional_2_Template_a_click_12_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.isMobileMenuOpen = false);
    });
    \u0275\u0275text(13, "Global School Competitions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "a", 25);
    \u0275\u0275text(15, "About");
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_Conditional_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 33);
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
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 24);
    \u0275\u0275template(2, NavbarComponent_Conditional_11_Conditional_2_Template, 16, 0)(3, NavbarComponent_Conditional_11_Conditional_3_Template, 2, 0);
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
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 4, consts: [[1, "bg-white", "shadow-md", "w-full", "sticky", "top-0", "z-[9999]", "transition-transform", "duration-300"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8"], [1, "flex", "justify-between", "h-24", "items-center"], ["src", "assets/Logo-resized.svg", "alt", "inmyacademy logo", "routerLink", "/", 1, "h-[75px]", "w-auto", "cursor-pointer"], [1, "hidden", "md:flex", "items-center", "gap-10"], [1, "md:hidden", "flex", "items-center"], [1, "text-gray-600", "hover:text-blue-600", "focus:outline-none", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 6h16M4 12h16M4 18h16"], [1, "md:hidden", "bg-white", "border-t", "border-gray-100"], [1, "flex", "items-center", "gap-6"], ["href", "#", 1, "text-gray-800", "hover:text-[#2D3192]", "font-bold", "text-[16px]", "transition-colors"], ["routerLink", "/skillstorm/courses", 1, "text-gray-800", "hover:text-[#2D3192]", "font-bold", "text-[16px]", "transition-colors"], [1, "relative", "group", "h-full", "flex", "items-center", 3, "mouseenter", "mouseleave"], [1, "text-gray-800", "hover:text-[#2D3192]", "font-bold", "text-[16px]", "transition-colors", "flex", "items-center", "gap-1", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "transition-transform", "duration-200"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], [2, "position", "absolute", "left", "0", "top", "100%", "width", "260px", "background", "#ffffff", "border-radius", "0", "box-shadow", "0 8px 24px rgba(0,0,0,0.15)", "overflow", "hidden", "z-index", "10000"], [1, "bg-[#2D3192]", "hover:bg-opacity-90", "text-white", "px-8", "py-2.5", "rounded", "text-[15px]", "font-bold", "transition-all", "shadow-sm"], [2, "display", "flex", "flex-direction", "column"], ["routerLink", "/skillstorm/open-challenges", "routerLinkActive", "active-nav-link", 1, "nav-dropdown-link", 3, "routerLinkActiveOptions"], ["routerLink", "/skillstorm/mastery-battles", "routerLinkActive", "active-nav-link", 1, "nav-dropdown-link", 3, "routerLinkActiveOptions"], ["routerLink", "/skillstorm/school-competitions", "routerLinkActive", "active-nav-link", 1, "nav-dropdown-link", 3, "routerLinkActiveOptions"], ["routerLink", "/", 1, "bg-[#dc2626]", "hover:bg-opacity-90", "text-white", "px-8", "py-2.5", "rounded", "text-[15px]", "font-bold", "transition-all", "shadow-sm"], [1, "px-2", "pt-2", "pb-3", "space-y-1", "sm:px-3"], ["href", "#", 1, "block", "px-3", "py-2", "rounded-md", "text-base", "font-medium", "text-gray-700", "hover:text-blue-600", "hover:bg-gray-50"], ["routerLink", "/skillstorm/courses", 1, "block", "px-3", "py-2", "rounded-md", "text-base", "font-medium", "text-gray-700", "hover:text-blue-600", "hover:bg-gray-50", 3, "click"], [1, "px-3", "py-2"], [1, "text-base", "font-medium", "text-gray-900", "mb-2"], [1, "pl-4", "space-y-2", "border-l-2", "border-gray-200"], ["routerLink", "/skillstorm/open-challenges", 1, "block", "text-sm", "text-gray-600", "hover:text-blue-600", 3, "click"], ["routerLink", "/skillstorm/mastery-battles", 1, "block", "text-sm", "text-gray-600", "hover:text-blue-600", 3, "click"], ["routerLink", "/skillstorm/school-competitions", 1, "block", "text-sm", "text-gray-600", "hover:text-blue-600", 3, "click"], ["routerLink", "/", 1, "block", "px-3", "py-2", "rounded-md", "text-base", "font-medium", "text-red-600", "hover:bg-red-50", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) {
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
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(9, "svg", 7);
        \u0275\u0275element(10, "path", 8);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275template(11, NavbarComponent_Conditional_11_Template, 4, 1, "div", 9);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("-translate-y-full", ctx.isHidden);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(5, !ctx.isDashboardView ? 5 : 6);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(11, ctx.isMobileMenuOpen ? 11 : -1);
      }
    }, dependencies: [CommonModule, RouterModule, RouterLink, RouterLinkActive], styles: ["\n\n.nav-dropdown-link[_ngcontent-%COMP%] {\n  display: block;\n  padding: 12px 24px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #1f2937;\n  text-decoration: none;\n  transition: background 0.1s, color 0.1s;\n  white-space: nowrap;\n}\n.nav-dropdown-link[_ngcontent-%COMP%]:hover {\n  background: #2D3192;\n  color: #ffffff;\n}\n.nav-dropdown-link.active-nav-link[_ngcontent-%COMP%] {\n  background: #2D3192 !important;\n  color: #ffffff !important;\n  font-weight: 700;\n}\n/*# sourceMappingURL=navbar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "src\\app\\components\\navbar\\navbar.component.ts", lineNumber: 118 });
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
        "/skillstorm/registration-wizard",
        "/skillstorm/school-dashboard",
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
