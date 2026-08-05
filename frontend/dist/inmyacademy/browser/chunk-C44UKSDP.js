import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-Z5MBKUDO.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-RK72NEAB.js";
import {
  HttpClient
} from "./chunk-PLXL2LZV.js";
import {
  CommonModule,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-C72BQOBI.js";

// src/app/pages/login/login.component.ts
function LoginComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function LoginComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1, "Please enter your username or email");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
var LoginComponent = class _LoginComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.router = inject(Router);
    this.route = inject(ActivatedRoute);
    this.http = inject(HttpClient);
    this.errorMessage = "";
    this.returnUrl = "";
    this.loginForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
      keepMeSignedIn: [false]
    });
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.returnUrl = params["returnUrl"] || "";
    });
  }
  isTouchedAndInvalid(ctrl) {
    const c = this.loginForm.get(ctrl);
    return !!(c && c.touched && c.invalid);
  }
  onSubmit() {
    if (this.loginForm.valid) {
      this.errorMessage = "";
      const { username, password } = this.loginForm.value;
      this.http.post("http://localhost:5001/api/auth/login", { username, password }).subscribe({
        next: (res) => {
          if (res.role === "superadmin" || res.role === "admin") {
            this.router.navigate(["/admin/dashboard"]);
          } else {
            localStorage.setItem("openChallengeParticipantName", res.user.fullName);
            localStorage.setItem("openChallengeSelectedChallenge", res.user.challengeName || "General Challenge");
            localStorage.setItem("openChallengeRegistrationId", "OC-2026-" + res.user.id);
            localStorage.setItem("openChallengeRegistrationDbId", res.user.id.toString());
            if (this.returnUrl === "courses_dashboard") {
              this.router.navigate(["/courses"], { queryParams: { tab: "all" } });
            } else if (res.dashboardType === "mastery") {
              this.router.navigate(["/skillstorm/mastery-battles-dashboard"]);
            } else if (res.dashboardType === "school") {
              this.router.navigate(["/skillstorm/school-dashboard"]);
            } else {
              this.router.navigate(["/skillstorm/open-challenges-dashboard"]);
            }
          }
        },
        error: (err) => {
          this.errorMessage = err.error.message || "Invalid username/email or password";
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(t) {
      return new (t || _LoginComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 25, vars: 8, consts: [[2, "min-height", "calc(100vh - 70px)", "background", "#FFF6F6", "display", "flex", "align-items", "center", "justify-content", "center", "padding", "60px 24px", "font-family", "'Poppins', 'Inter', sans-serif"], [1, "login-card", 2, "background", "#FFFFFF", "border", "1px solid #EBEBEB", "border-radius", "12px", "padding", "48px", "width", "100%", "max-width", "480px", "box-shadow", "0 4px 24px rgba(0, 0, 0, 0.04)", "box-sizing", "border-box"], [2, "font-size", "24px", "font-weight", "700", "color", "#111111", "margin", "0 0 28px 0", "font-family", "'Poppins', 'Inter', sans-serif"], [2, "background-color", "#ffebee", "color", "#c62828", "padding", "12px 16px", "border-radius", "8px", "margin-bottom", "24px", "font-size", "14px", "text-align", "center", "font-weight", "500"], [3, "ngSubmit", "formGroup"], [2, "margin-bottom", "20px"], ["type", "text", "formControlName", "username", "placeholder", "Username or Email Address", 1, "login-input"], [1, "error-text"], [2, "margin-bottom", "24px"], ["type", "password", "formControlName", "password", "placeholder", "Password", 1, "login-input"], [2, "display", "flex", "align-items", "center", "justify-content", "space-between", "margin-bottom", "32px", "flex-wrap", "wrap", "gap", "12px"], [2, "display", "flex", "align-items", "center", "gap", "8px", "cursor", "pointer", "font-size", "14px", "color", "#666666", "font-weight", "500"], ["type", "checkbox", "formControlName", "keepMeSignedIn", 2, "width", "16px", "height", "16px", "cursor", "pointer", "accent-color", "#2D3192"], ["type", "button", 1, "simple-link"], ["type", "submit", 1, "signin-btn"], [2, "margin-top", "28px", "display", "flex", "align-items", "center", "justify-content", "center", "gap", "8px", "font-size", "14px", "color", "#666666"], ["type", "button", "routerLink", "/skillstorm/open-challenges", 1, "simple-link"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
        \u0275\u0275text(3, " Hi, Welcome back! ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, LoginComponent_Conditional_4_Template, 2, 1, "div", 3);
        \u0275\u0275elementStart(5, "form", 4);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(6, "div", 5);
        \u0275\u0275element(7, "input", 6);
        \u0275\u0275template(8, LoginComponent_Conditional_8_Template, 2, 0, "span", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 8);
        \u0275\u0275element(10, "input", 9);
        \u0275\u0275template(11, LoginComponent_Conditional_11_Template, 2, 0, "span", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 10)(13, "label", 11);
        \u0275\u0275element(14, "input", 12);
        \u0275\u0275text(15, " Keep me signed in ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "button", 13);
        \u0275\u0275text(17, " Forgot Password? ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "button", 14);
        \u0275\u0275text(19, " Sign In ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 15)(21, "span");
        \u0275\u0275text(22, "Don't have an account?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "button", 16);
        \u0275\u0275text(24, " Register Now ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275conditional(4, ctx.errorMessage ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.loginForm);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("is-error", ctx.isTouchedAndInvalid("username"));
        \u0275\u0275advance();
        \u0275\u0275conditional(8, ctx.isTouchedAndInvalid("username") ? 8 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("is-error", ctx.isTouchedAndInvalid("password"));
        \u0275\u0275advance();
        \u0275\u0275conditional(11, ctx.isTouchedAndInvalid("password") ? 11 : -1);
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink], styles: ['\n\n.login-input[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #ffffff;\n  border: 1px solid #DDDDDD;\n  border-radius: 8px;\n  padding: 14px 16px;\n  font-size: 15px;\n  color: #333333;\n  outline: none;\n  transition: border-color 0.2s, box-shadow 0.2s;\n  box-sizing: border-box;\n}\n.login-input[_ngcontent-%COMP%]:focus {\n  border-color: #999999;\n  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.04);\n}\n.login-input.is-error[_ngcontent-%COMP%] {\n  border-color: #FF0000;\n}\n.login-input[_ngcontent-%COMP%]::placeholder {\n  color: #888888;\n}\n.error-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #FF0000;\n  margin-top: 4px;\n  display: block;\n}\n.simple-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #2D3192;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 0;\n  font-family:\n    "Poppins",\n    "Inter",\n    sans-serif;\n}\n.simple-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.signin-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #2D3192;\n  color: #ffffff;\n  border: none;\n  border-radius: 8px;\n  padding: 14px 24px;\n  font-size: 16px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: opacity 0.2s, background-color 0.2s;\n  letter-spacing: 0.01em;\n  font-family:\n    "Poppins",\n    "Inter",\n    sans-serif;\n}\n.signin-btn[_ngcontent-%COMP%]:hover {\n  background-color: #1E2270;\n}\n@media (max-width: 480px) {\n  .login-card[_ngcontent-%COMP%] {\n    padding: 32px 24px !important;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\pages\\login\\login.component.ts", lineNumber: 152 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-C44UKSDP.js.map
