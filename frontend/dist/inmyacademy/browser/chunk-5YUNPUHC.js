import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-Z5MBKUDO.js";
import {
  getTrackSlug
} from "./chunk-CEXANK6Z.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-RK72NEAB.js";
import {
  HttpClient
} from "./chunk-PLXL2LZV.js";
import {
  CommonModule,
  __spreadProps,
  __spreadValues,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-C72BQOBI.js";

// src/app/components/registration-form/registration-form.component.ts
var _c0 = () => ({ returnUrl: "courses_dashboard" });
function RegistrationFormComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, "Full Name is required");
    \u0275\u0275elementEnd();
  }
}
function RegistrationFormComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, "Please enter a valid age");
    \u0275\u0275elementEnd();
  }
}
function RegistrationFormComponent_Conditional_34_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275listener("mousedown", function RegistrationFormComponent_Conditional_34_For_2_Template_div_mousedown_0_listener() {
      const country_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectCountry(country_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const country_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", country_r2, " ");
  }
}
function RegistrationFormComponent_Conditional_34_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1, " No countries found ");
    \u0275\u0275elementEnd();
  }
}
function RegistrationFormComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275repeaterCreate(1, RegistrationFormComponent_Conditional_34_For_2_Template, 2, 1, "div", 30, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275template(3, RegistrationFormComponent_Conditional_34_Conditional_3_Template, 2, 0, "div", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.filteredCountries);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(3, ctx_r2.filteredCountries.length === 0 ? 3 : -1);
  }
}
function RegistrationFormComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, "Country is required");
    \u0275\u0275elementEnd();
  }
}
function RegistrationFormComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, "City is required");
    \u0275\u0275elementEnd();
  }
}
function RegistrationFormComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, "Please enter a valid email address");
    \u0275\u0275elementEnd();
  }
}
function RegistrationFormComponent_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, "Password must be at least 6 characters");
    \u0275\u0275elementEnd();
  }
}
function RegistrationFormComponent_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F389} Registration Successful! Payment of \xA3", ctx_r2.entryFee, ".00 processed. ");
  }
}
function RegistrationFormComponent_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " After registration, you will receive access to your Mastery Battles dashboard to begin Phase 1. ");
  }
}
function RegistrationFormComponent_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " After registration you will receive access to your submission dashboard and QR support code. ");
  }
}
var RegistrationFormComponent = class _RegistrationFormComponent {
  constructor() {
    this.entryFee = 1;
    this.challengeName = "";
    this.category = "";
    this.fb = inject(FormBuilder);
    this.router = inject(Router);
    this.http = inject(HttpClient);
    this.showParentFields = false;
    this.isSubmitted = false;
    this.isDropdownOpen = false;
    this.countriesList = [
      "Afghanistan",
      "Albania",
      "Algeria",
      "Andorra",
      "Angola",
      "Antigua and Barbuda",
      "Argentina",
      "Armenia",
      "Australia",
      "Austria",
      "Azerbaijan",
      "Bahamas",
      "Bahrain",
      "Bangladesh",
      "Barbados",
      "Belarus",
      "Belgium",
      "Belize",
      "Benin",
      "Bhutan",
      "Bolivia",
      "Bosnia and Herzegovina",
      "Botswana",
      "Brazil",
      "Brunei",
      "Bulgaria",
      "Burkina Faso",
      "Burundi",
      "Cabo Verde",
      "Cambodia",
      "Cameroon",
      "Canada",
      "Central African Republic",
      "Chad",
      "Chile",
      "China",
      "Colombia",
      "Comoros",
      "Congo (Congo-Brazzaville)",
      "Costa Rica",
      "Croatia",
      "Cuba",
      "Cyprus",
      "Czechia",
      "C\xF4te d'Ivoire",
      "Democratic Republic of the Congo",
      "Denmark",
      "Djibouti",
      "Dominica",
      "Dominican Republic",
      "Ecuador",
      "Egypt",
      "El Salvador",
      "Equatorial Guinea",
      "Eritrea",
      "Estonia",
      "Eswatini",
      "Ethiopia",
      "Fiji",
      "Finland",
      "France",
      "Gabon",
      "Gambia",
      "Georgia",
      "Germany",
      "Ghana",
      "Greece",
      "Grenada",
      "Guatemala",
      "Guinea",
      "Guinea-Bissau",
      "Guyana",
      "Haiti",
      "Holy See",
      "Honduras",
      "Hungary",
      "Iceland",
      "India",
      "Indonesia",
      "Iran",
      "Iraq",
      "Ireland",
      "Israel",
      "Italy",
      "Jamaica",
      "Japan",
      "Jordan",
      "Kazakhstan",
      "Kenya",
      "Kiribati",
      "Kuwait",
      "Kyrgyzstan",
      "Laos",
      "Latvia",
      "Lebanon",
      "Lesotho",
      "Liberia",
      "Libya",
      "Liechtenstein",
      "Lithuania",
      "Luxembourg",
      "Madagascar",
      "Malawi",
      "Malaysia",
      "Maldives",
      "Mali",
      "Malta",
      "Marshall Islands",
      "Mauritania",
      "Mauritius",
      "Mexico",
      "Micronesia",
      "Moldova",
      "Monaco",
      "Mongolia",
      "Montenegro",
      "Morocco",
      "Mozambique",
      "Myanmar",
      "Namibia",
      "Nauru",
      "Nepal",
      "Netherlands",
      "New Zealand",
      "Nicaragua",
      "Niger",
      "Nigeria",
      "North Korea",
      "North Macedonia",
      "Norway",
      "Oman",
      "Pakistan",
      "Palau",
      "Palestine State",
      "Panama",
      "Papua New Guinea",
      "Paraguay",
      "Peru",
      "Philippines",
      "Poland",
      "Portugal",
      "Qatar",
      "Romania",
      "Russia",
      "Rwanda",
      "Saint Kitts and Nevis",
      "Saint Lucia",
      "Saint Vincent and the Grenadines",
      "Samoa",
      "San Marino",
      "Sao Tome and Principe",
      "Saudi Arabia",
      "Senegal",
      "Serbia",
      "Seychelles",
      "Sierra Leone",
      "Singapore",
      "Slovakia",
      "Slovenia",
      "Solomon Islands",
      "Somalia",
      "South Africa",
      "South Korea",
      "South Sudan",
      "Spain",
      "Sri Lanka",
      "Sudan",
      "Suriname",
      "Sweden",
      "Switzerland",
      "Syria",
      "Tajikistan",
      "Tanzania",
      "Thailand",
      "Timor-Leste",
      "Togo",
      "Tonga",
      "Trinidad and Tobago",
      "Tunisia",
      "Turkey",
      "Turkmenistan",
      "Tuvalu",
      "Uganda",
      "Ukraine",
      "United Arab Emirates",
      "United Kingdom",
      "United States",
      "Uruguay",
      "Uzbekistan",
      "Vanuatu",
      "Venezuela",
      "Vietnam",
      "Yemen",
      "Zambia",
      "Zimbabwe"
    ];
  }
  get filteredCountries() {
    const term = this.registerForm?.get("country")?.value || "";
    if (!term || typeof term !== "string")
      return this.countriesList;
    const lower = term.toLowerCase();
    return this.countriesList.filter((c) => c.toLowerCase().includes(lower));
  }
  selectCountry(country) {
    this.registerForm.patchValue({ country });
    this.isDropdownOpen = false;
  }
  onCountryBlur() {
    setTimeout(() => {
      this.isDropdownOpen = false;
      const currentVal = this.registerForm.get("country")?.value;
      if (currentVal && !this.countriesList.includes(currentVal)) {
        this.registerForm.patchValue({ country: "" });
      }
    }, 150);
  }
  ngOnInit() {
    this.registerForm = this.fb.group({
      fullName: ["", Validators.required],
      age: ["", [Validators.required, Validators.min(1), Validators.max(120)]],
      country: ["", Validators.required],
      city: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      parentName: [""],
      parentEmail: [""],
      parentConsent: [false]
    });
    this.registerForm.get("age")?.valueChanges.subscribe((age) => {
      const num = Number(age);
      this.showParentFields = !!(age && num < 18);
      this.registerForm.get("parentName")?.clearValidators();
      this.registerForm.get("parentEmail")?.clearValidators();
      this.registerForm.get("parentName")?.updateValueAndValidity();
      this.registerForm.get("parentEmail")?.updateValueAndValidity();
    });
  }
  isTouchedAndInvalid(ctrl) {
    const c = this.registerForm.get(ctrl);
    return !!(c && c.touched && c.invalid);
  }
  onSubmit() {
    if (this.registerForm.valid) {
      const formValue = __spreadProps(__spreadValues({}, this.registerForm.value), {
        challengeName: this.challengeName,
        category: this.category || (this.entryFee === 25 ? "Global Mastery Battles" : "Global Open Challenges")
      });
      this.http.post("http://localhost:5001/api/challenges/register", formValue).subscribe({
        next: (response) => {
          const participantName = formValue.fullName;
          localStorage.setItem("openChallengeParticipantName", participantName);
          localStorage.setItem("openChallengeSelectedChallenge", this.challengeName);
          const randomId = Math.floor(1e4 + Math.random() * 9e4);
          localStorage.setItem("openChallengeRegistrationDbId", response.id.toString());
          if (this.entryFee === 25) {
            localStorage.setItem("masteryBattleRegistrationId", `MB-2024-${randomId}`);
            localStorage.setItem("dashboardType", "mastery");
          } else {
            localStorage.setItem("openChallengeRegistrationId", `OC-2024-${randomId}`);
            localStorage.setItem("dashboardType", "open");
          }
          const userId = response.id?.toString() || localStorage.getItem("openChallengeRegistrationDbId");
          if (userId) {
            const slug = getTrackSlug(this.challengeName);
            const purchasedRaw = localStorage.getItem(`purchasedCourses-${userId}`);
            const purchased = purchasedRaw ? JSON.parse(purchasedRaw) : [];
            if (!purchased.includes(slug)) {
              purchased.push(slug);
              localStorage.setItem(`purchasedCourses-${userId}`, JSON.stringify(purchased));
            }
          }
          this.isSubmitted = true;
          this.registerForm.reset();
          this.showParentFields = false;
          setTimeout(() => {
            this.router.navigate(["/courses"], { queryParams: { tab: "all" } });
          }, 1500);
        },
        error: (err) => {
          console.error("Registration failed:", err);
          alert("Registration failed. Please try again later.");
        }
      });
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
  static {
    this.\u0275fac = function RegistrationFormComponent_Factory(t) {
      return new (t || _RegistrationFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegistrationFormComponent, selectors: [["app-registration-form"]], inputs: { entryFee: "entryFee", challengeName: "challengeName", category: "category" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 74, vars: 26, consts: [[2, "padding", "60px 24px", "background", "#FFFFFF", "border-top", "1px solid #EBEBEB", "font-family", "'Kumbh Sans',sans-serif"], [1, "max-w-[700px]", "mx-auto", "px-4"], [2, "display", "flex", "justify-content", "space-between", "align-items", "center", "margin-bottom", "28px", "flex-wrap", "wrap", "gap", "16px"], [2, "font-size", "26px", "font-weight", "700", "color", "#000000", "margin", "0", "font-family", "'Gilmer', 'DM Sans', sans-serif"], [2, "font-size", "14px", "color", "#666666", "font-weight", "500"], ["routerLink", "/login", "onmouseover", "this.style.opacity='0.8'", "onmouseout", "this.style.opacity='1'", 2, "color", "#7c3aed", "font-weight", "700", "text-decoration", "none", "margin-left", "4px", "transition", "opacity 0.2s", 3, "queryParams"], [2, "background", "#F8F8F8", "border", "1.6px solid rgba(117,119,131,0.21)", "border-radius", "18px", "padding", "32px 36px", "box-shadow", "none"], [3, "ngSubmit", "formGroup"], [1, "form-row"], [1, "form-label"], [1, "required-star"], ["type", "text", "formControlName", "fullName", "placeholder", "Enter Full Name", "autocomplete", "name", 1, "form-input"], [1, "error-text"], ["type", "number", "formControlName", "age", "placeholder", "Enter Age", "min", "1", "max", "120", "autocomplete", "off", 1, "form-input"], [2, "position", "relative"], ["formControlName", "country", "placeholder", "Type to search country...", "autocomplete", "off", 1, "form-input", 2, "padding-right", "40px", 3, "focus", "blur"], [1, "custom-scrollbar", 2, "position", "absolute", "top", "100%", "left", "0", "width", "100%", "max-height", "220px", "overflow-y", "auto", "background", "#ffffff", "border", "1px solid #EBEBEB", "border-radius", "8px", "z-index", "50", "box-shadow", "0 10px 25px rgba(0,0,0,0.1)", "margin-top", "6px"], [2, "pointer-events", "none", "position", "absolute", "top", "0", "bottom", "0", "right", "0", "display", "flex", "align-items", "center", "padding", "0 14px", "color", "#666"], ["width", "16", "height", "16", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5", "d", "M19 9l-7 7-7-7"], ["type", "text", "formControlName", "city", "placeholder", "Enter city", "autocomplete", "address-level2", 1, "form-input"], ["type", "email", "formControlName", "email", "placeholder", "Enter Email Address", "autocomplete", "email", 1, "form-input"], ["type", "password", "formControlName", "password", "placeholder", "Enter Password", "autocomplete", "new-password", 1, "form-input"], [2, "padding-top", "16px", "border-top", "1px solid #EBEBEB", "margin-top", "8px"], [2, "font-size", "15px", "font-weight", "800", "color", "#111111", "margin-bottom", "4px"], [2, "color", "#FF0000"], [2, "font-size", "14px", "color", "#666666", "font-weight", "500", "margin-bottom", "18px"], ["type", "submit", 1, "register-btn"], [2, "margin-top", "20px", "padding", "16px", "background", "#ECFDF5", "border", "1px solid #A7F3D0", "color", "#065F46", "border-radius", "8px", "text-align", "center", "font-weight", "700", "font-size", "15px"], [2, "font-size", "13px", "color", "#666666", "text-align", "center", "margin-top", "18px", "font-weight", "400"], [1, "country-option"], [2, "padding", "12px 16px", "font-size", "14px", "color", "#999999", "font-style", "italic"], [1, "country-option", 3, "mousedown"]], template: function RegistrationFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
        \u0275\u0275text(4, " Register for This Challenge ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 4);
        \u0275\u0275text(6, " Already registered? ");
        \u0275\u0275elementStart(7, "a", 5);
        \u0275\u0275text(8, "Login here");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 6)(10, "form", 7);
        \u0275\u0275listener("ngSubmit", function RegistrationFormComponent_Template_form_ngSubmit_10_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(11, "div", 8)(12, "div")(13, "label", 9);
        \u0275\u0275text(14, "Full Name ");
        \u0275\u0275elementStart(15, "span", 10);
        \u0275\u0275text(16, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(17, "input", 11);
        \u0275\u0275template(18, RegistrationFormComponent_Conditional_18_Template, 2, 0, "span", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div")(20, "label", 9);
        \u0275\u0275text(21, "Age ");
        \u0275\u0275elementStart(22, "span", 10);
        \u0275\u0275text(23, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(24, "input", 13);
        \u0275\u0275template(25, RegistrationFormComponent_Conditional_25_Template, 2, 0, "span", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 8)(27, "div")(28, "label", 9);
        \u0275\u0275text(29, "Country ");
        \u0275\u0275elementStart(30, "span", 10);
        \u0275\u0275text(31, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "div", 14)(33, "input", 15);
        \u0275\u0275listener("focus", function RegistrationFormComponent_Template_input_focus_33_listener() {
          return ctx.isDropdownOpen = true;
        })("blur", function RegistrationFormComponent_Template_input_blur_33_listener() {
          return ctx.onCountryBlur();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(34, RegistrationFormComponent_Conditional_34_Template, 4, 1, "div", 16);
        \u0275\u0275elementStart(35, "div", 17);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(36, "svg", 18);
        \u0275\u0275element(37, "path", 19);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(38, RegistrationFormComponent_Conditional_38_Template, 2, 0, "span", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(39, "div")(40, "label", 9);
        \u0275\u0275text(41, "City ");
        \u0275\u0275elementStart(42, "span", 10);
        \u0275\u0275text(43, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(44, "input", 20);
        \u0275\u0275template(45, RegistrationFormComponent_Conditional_45_Template, 2, 0, "span", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div", 8)(47, "div")(48, "label", 9);
        \u0275\u0275text(49, "Email Address ");
        \u0275\u0275elementStart(50, "span", 10);
        \u0275\u0275text(51, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(52, "input", 21);
        \u0275\u0275template(53, RegistrationFormComponent_Conditional_53_Template, 2, 0, "span", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "div")(55, "label", 9);
        \u0275\u0275text(56, "Password ");
        \u0275\u0275elementStart(57, "span", 10);
        \u0275\u0275text(58, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(59, "input", 22);
        \u0275\u0275template(60, RegistrationFormComponent_Conditional_60_Template, 2, 0, "span", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "div", 23)(62, "div", 24);
        \u0275\u0275text(63, " Payment ");
        \u0275\u0275elementStart(64, "span", 25);
        \u0275\u0275text(65, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(66, "div", 26);
        \u0275\u0275text(67);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "button", 27);
        \u0275\u0275text(69);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(70, RegistrationFormComponent_Conditional_70_Template, 2, 1, "div", 28);
        \u0275\u0275elementStart(71, "div", 29);
        \u0275\u0275template(72, RegistrationFormComponent_Conditional_72_Template, 1, 0)(73, RegistrationFormComponent_Conditional_73_Template, 1, 0);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(25, _c0));
        \u0275\u0275advance(3);
        \u0275\u0275property("formGroup", ctx.registerForm);
        \u0275\u0275advance(7);
        \u0275\u0275classProp("is-error", ctx.isTouchedAndInvalid("fullName"));
        \u0275\u0275advance();
        \u0275\u0275conditional(18, ctx.isTouchedAndInvalid("fullName") ? 18 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275classProp("is-error", ctx.isTouchedAndInvalid("age"));
        \u0275\u0275advance();
        \u0275\u0275conditional(25, ctx.isTouchedAndInvalid("age") ? 25 : -1);
        \u0275\u0275advance(8);
        \u0275\u0275classProp("is-error", ctx.isTouchedAndInvalid("country"));
        \u0275\u0275advance();
        \u0275\u0275conditional(34, ctx.isDropdownOpen ? 34 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(38, ctx.isTouchedAndInvalid("country") ? 38 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275classProp("is-error", ctx.isTouchedAndInvalid("city"));
        \u0275\u0275advance();
        \u0275\u0275conditional(45, ctx.isTouchedAndInvalid("city") ? 45 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275classProp("is-error", ctx.isTouchedAndInvalid("email"));
        \u0275\u0275advance();
        \u0275\u0275conditional(53, ctx.isTouchedAndInvalid("email") ? 53 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275classProp("is-error", ctx.isTouchedAndInvalid("password"));
        \u0275\u0275advance();
        \u0275\u0275conditional(60, ctx.isTouchedAndInvalid("password") ? 60 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" Total : \xA3", ctx.entryFee, ".00 ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" Register & Pay \xA3", ctx.entryFee, " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(70, ctx.isSubmitted ? 70 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(72, ctx.entryFee === 25 ? 72 : 73);
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, FormGroupDirective, FormControlName, RouterModule, RouterLink], styles: ["\n\ninput[_ngcontent-%COMP%]:-webkit-autofill, input[_ngcontent-%COMP%]:-webkit-autofill:hover, input[_ngcontent-%COMP%]:-webkit-autofill:focus, input[_ngcontent-%COMP%]:-webkit-autofill:active {\n  -webkit-box-shadow: 0 0 0 30px #ffffff inset !important;\n  -webkit-text-fill-color: #333333 !important;\n  box-shadow: 0 0 0 30px #ffffff inset !important;\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #ffffff !important;\n  border: 1px solid #DDDDDD;\n  border-radius: 6px;\n  padding: 11px 14px;\n  font-size: 15px;\n  color: #333333;\n  outline: none;\n  transition: border-color 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n  appearance: none;\n  -webkit-appearance: none;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: #999999;\n  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.05);\n}\n.form-input.is-error[_ngcontent-%COMP%] {\n  border-color: #FF0000;\n}\n.form-input[_ngcontent-%COMP%]::placeholder {\n  color: #AAAAAA;\n}\n.form-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 700;\n  color: #111111;\n  margin-bottom: 6px;\n}\n.form-label[_ngcontent-%COMP%]   .required-star[_ngcontent-%COMP%] {\n  color: #FF0000;\n  margin-left: 2px;\n}\n.error-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #FF0000;\n  margin-top: 4px;\n  display: block;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n@media (max-width: 640px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n}\n.register-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #7c3aed;\n  color: #ffffff;\n  border: none;\n  border-radius: 8px;\n  padding: 14px 24px;\n  font-size: 16px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background-color 0.2s;\n  letter-spacing: 0.01em;\n}\n.register-btn[_ngcontent-%COMP%]:hover {\n  background-color: #6d28d9;\n}\n.register-btn[_ngcontent-%COMP%]:disabled {\n  background-color: #7c3aed;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.country-option[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  cursor: pointer;\n  font-size: 14px;\n  color: #333333;\n  transition: background-color 0.15s ease;\n}\n.country-option[_ngcontent-%COMP%]:hover {\n  background-color: #F3F4F6;\n}\n.custom-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.custom-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.custom-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #D1D5DB;\n  border-radius: 10px;\n}\n.custom-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #9CA3AF;\n}\n/*# sourceMappingURL=registration-form.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegistrationFormComponent, { className: "RegistrationFormComponent", filePath: "src\\app\\components\\registration-form\\registration-form.component.ts", lineNumber: 284 });
})();

export {
  RegistrationFormComponent
};
//# sourceMappingURL=chunk-5YUNPUHC.js.map
