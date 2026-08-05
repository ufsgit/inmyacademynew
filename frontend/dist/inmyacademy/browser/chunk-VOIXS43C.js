import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgModel
} from "./chunk-Z5MBKUDO.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-C72BQOBI.js";

// src/app/pages/registration-wizard/registration-wizard.component.ts
var _forTrack0 = ($index, $item) => $item.number;
function RegistrationWizardComponent_For_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 15);
    \u0275\u0275element(2, "polyline", 16);
    \u0275\u0275elementEnd()();
  }
}
function RegistrationWizardComponent_For_14_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", step_r1.number, " ");
  }
}
function RegistrationWizardComponent_For_14_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", step_r1.number, " ");
  }
}
function RegistrationWizardComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275template(1, RegistrationWizardComponent_For_14_Conditional_1_Template, 3, 0, "div", 13)(2, RegistrationWizardComponent_For_14_Conditional_2_Template, 2, 1)(3, RegistrationWizardComponent_For_14_Conditional_3_Template, 2, 1);
    \u0275\u0275elementStart(4, "div", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(1, ctx_r1.currentStep > step_r1.number ? 1 : ctx_r1.currentStep === step_r1.number ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", ctx_r1.currentStep >= step_r1.number ? "#D20A00" : "#9CA3AF")("font-weight", ctx_r1.currentStep >= step_r1.number ? "700" : "500");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", step_r1.label, " ");
  }
}
function RegistrationWizardComponent_Conditional_16_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1, " Please select at least 1 team to register before proceeding. ");
    \u0275\u0275elementEnd();
  }
}
function RegistrationWizardComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "h2", 20);
    \u0275\u0275text(2, "Step 1 \u2014 Select Teams");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 21);
    \u0275\u0275text(4, " Choose how many teams you want to register in each category. Each team includes up to 5 students. Student names can be added later in the school dashboard after registration. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 22)(6, "div", 23)(7, "div", 24)(8, "div", 25)(9, "h4", 26);
    \u0275\u0275text(10, "Trailblazers (\u226410 Years)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 27);
    \u0275\u0275text(12, "Young explorers developing creativity, teamwork, and problem-solving skills.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 28)(14, "div", 29)(15, "span", 30);
    \u0275\u0275text(16, "Teams to Register");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 31)(18, "button", 32);
    \u0275\u0275listener("click", function RegistrationWizardComponent_Conditional_16_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.decrement("trailblazers"));
    });
    \u0275\u0275text(19, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 33);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 32);
    \u0275\u0275listener("click", function RegistrationWizardComponent_Conditional_16_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.increment("trailblazers"));
    });
    \u0275\u0275text(23, "+");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "span", 34);
    \u0275\u0275text(25, "Each team can include up to 5 students.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "div", 23)(27, "div", 24)(28, "div", 25)(29, "h4", 26);
    \u0275\u0275text(30, "Visioneers (11-14 Years)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p", 27);
    \u0275\u0275text(32, "Future innovators learning leadership, communication, and strategic thinking.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 28)(34, "div", 29)(35, "span", 30);
    \u0275\u0275text(36, "Teams to Register");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 31)(38, "button", 32);
    \u0275\u0275listener("click", function RegistrationWizardComponent_Conditional_16_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.decrement("visioneers"));
    });
    \u0275\u0275text(39, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span", 33);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 32);
    \u0275\u0275listener("click", function RegistrationWizardComponent_Conditional_16_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.increment("visioneers"));
    });
    \u0275\u0275text(43, "+");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "span", 34);
    \u0275\u0275text(45, "Each team can include up to 5 students.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(46, "div", 35)(47, "div", 24)(48, "div", 25)(49, "h4", 26);
    \u0275\u0275text(50, "Strategists (15-19 Years)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "p", 27);
    \u0275\u0275text(52, "Advanced competitors tackling complex challenges in law, innovation, business, and technology.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 28)(54, "div", 29)(55, "span", 30);
    \u0275\u0275text(56, "Teams to Register");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 31)(58, "button", 32);
    \u0275\u0275listener("click", function RegistrationWizardComponent_Conditional_16_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.decrement("strategists"));
    });
    \u0275\u0275text(59, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "span", 33);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "button", 32);
    \u0275\u0275listener("click", function RegistrationWizardComponent_Conditional_16_Template_button_click_62_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.increment("strategists"));
    });
    \u0275\u0275text(63, "+");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(64, "span", 34);
    \u0275\u0275text(65, "Each team can include up to 5 students.");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(66, RegistrationWizardComponent_Conditional_16_Conditional_66_Template, 2, 0, "div", 36);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(21);
    \u0275\u0275textInterpolate(ctx_r1.trailblazersCount);
    \u0275\u0275advance(20);
    \u0275\u0275textInterpolate(ctx_r1.visioneersCount);
    \u0275\u0275advance(20);
    \u0275\u0275textInterpolate(ctx_r1.strategistsCount);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(66, ctx_r1.showErrors && ctx_r1.totalTeams === 0 ? 66 : -1);
  }
}
function RegistrationWizardComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "h2", 20);
    \u0275\u0275text(2, "Step 2 \u2014 Pricing Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 21);
    \u0275\u0275text(4, " Team Registration Fee: ");
    \u0275\u0275elementStart(5, "strong", 37);
    \u0275\u0275text(6, "\xA350 per team");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 38)(8, "div", 39)(9, "span");
    \u0275\u0275text(10, "Trailblazers Teams:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 40);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 39)(14, "span");
    \u0275\u0275text(15, "Visioneers Teams:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 40);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 41)(19, "span");
    \u0275\u0275text(20, "Strategists Teams:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 40);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 42)(24, "span");
    \u0275\u0275text(25, "Total Teams:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 43);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 44)(29, "span");
    \u0275\u0275text(30, "Maximum Student Capacity:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 43);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 45)(34, "span", 46);
    \u0275\u0275text(35, "Total Fee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 47);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "p", 48);
    \u0275\u0275text(39, " Note: Student names are not required now. They can be added later. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r1.trailblazersCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.visioneersCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.strategistsCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.totalTeams);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.maxStudentCapacity);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\xA3", ctx_r1.totalPrice, "");
  }
}
function RegistrationWizardComponent_Conditional_18_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1, "School Name is required");
    \u0275\u0275elementEnd();
  }
}
function RegistrationWizardComponent_Conditional_18_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1, "Country is required");
    \u0275\u0275elementEnd();
  }
}
function RegistrationWizardComponent_Conditional_18_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1, "City is required");
    \u0275\u0275elementEnd();
  }
}
function RegistrationWizardComponent_Conditional_18_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1, "School Email is required");
    \u0275\u0275elementEnd();
  }
}
function RegistrationWizardComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "h2", 20);
    \u0275\u0275text(2, "Step 3 \u2014 School Details");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 49)(4, "div")(5, "label", 50);
    \u0275\u0275text(6, "School Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function RegistrationWizardComponent_Conditional_18_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.schoolName, $event) || (ctx_r1.schoolName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function RegistrationWizardComponent_Conditional_18_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSchoolNameChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, RegistrationWizardComponent_Conditional_18_Conditional_8_Template, 2, 0, "span", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 53)(10, "div")(11, "label", 50);
    \u0275\u0275text(12, "Country *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function RegistrationWizardComponent_Conditional_18_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.schoolCountry, $event) || (ctx_r1.schoolCountry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, RegistrationWizardComponent_Conditional_18_Conditional_14_Template, 2, 0, "span", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div")(16, "label", 50);
    \u0275\u0275text(17, "City *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 55);
    \u0275\u0275twoWayListener("ngModelChange", function RegistrationWizardComponent_Conditional_18_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.schoolCity, $event) || (ctx_r1.schoolCity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, RegistrationWizardComponent_Conditional_18_Conditional_19_Template, 2, 0, "span", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div")(21, "label", 50);
    \u0275\u0275text(22, "School Email *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function RegistrationWizardComponent_Conditional_18_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.schoolEmail, $event) || (ctx_r1.schoolEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, RegistrationWizardComponent_Conditional_18_Conditional_24_Template, 2, 0, "span", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 53)(26, "div")(27, "label", 50);
    \u0275\u0275text(28, "School Phone (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 57);
    \u0275\u0275twoWayListener("ngModelChange", function RegistrationWizardComponent_Conditional_18_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.schoolPhone, $event) || (ctx_r1.schoolPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div")(31, "label", 50);
    \u0275\u0275text(32, "School Website (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function RegistrationWizardComponent_Conditional_18_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.schoolWebsite, $event) || (ctx_r1.schoolWebsite = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275styleProp("border-color", ctx_r1.showErrors && !ctx_r1.schoolName ? "#EF4444" : "#D1D5DB");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.schoolName);
    \u0275\u0275advance();
    \u0275\u0275conditional(8, ctx_r1.showErrors && !ctx_r1.schoolName ? 8 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("border-color", ctx_r1.showErrors && !ctx_r1.schoolCountry ? "#EF4444" : "#D1D5DB");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.schoolCountry);
    \u0275\u0275advance();
    \u0275\u0275conditional(14, ctx_r1.showErrors && !ctx_r1.schoolCountry ? 14 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("border-color", ctx_r1.showErrors && !ctx_r1.schoolCity ? "#EF4444" : "#D1D5DB");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.schoolCity);
    \u0275\u0275advance();
    \u0275\u0275conditional(19, ctx_r1.showErrors && !ctx_r1.schoolCity ? 19 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("border-color", ctx_r1.showErrors && !ctx_r1.schoolEmail ? "#EF4444" : "#D1D5DB");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.schoolEmail);
    \u0275\u0275advance();
    \u0275\u0275conditional(24, ctx_r1.showErrors && !ctx_r1.schoolEmail ? 24 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.schoolPhone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.schoolWebsite);
  }
}
function RegistrationWizardComponent_Conditional_19_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1, "Coordinator Full Name is required");
    \u0275\u0275elementEnd();
  }
}
function RegistrationWizardComponent_Conditional_19_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1, "Coordinator Email is required");
    \u0275\u0275elementEnd();
  }
}
function RegistrationWizardComponent_Conditional_19_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1, "Coordinator Phone is required");
    \u0275\u0275elementEnd();
  }
}
function RegistrationWizardComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "h2", 20);
    \u0275\u0275text(2, "Step 4 \u2014 School Coordinator");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 21);
    \u0275\u0275text(4, " The coordinator will manage team submissions and communication with SkillStorm. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 49)(6, "div")(7, "label", 50);
    \u0275\u0275text(8, "Coordinator Full Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 59);
    \u0275\u0275twoWayListener("ngModelChange", function RegistrationWizardComponent_Conditional_19_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.coordinatorName, $event) || (ctx_r1.coordinatorName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, RegistrationWizardComponent_Conditional_19_Conditional_10_Template, 2, 0, "span", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div")(12, "label", 50);
    \u0275\u0275text(13, "Coordinator Email *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 60);
    \u0275\u0275twoWayListener("ngModelChange", function RegistrationWizardComponent_Conditional_19_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.coordinatorEmail, $event) || (ctx_r1.coordinatorEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, RegistrationWizardComponent_Conditional_19_Conditional_15_Template, 2, 0, "span", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div")(17, "label", 50);
    \u0275\u0275text(18, "Coordinator Phone *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function RegistrationWizardComponent_Conditional_19_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.coordinatorPhone, $event) || (ctx_r1.coordinatorPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, RegistrationWizardComponent_Conditional_19_Conditional_20_Template, 2, 0, "span", 52);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275styleProp("border-color", ctx_r1.showErrors && !ctx_r1.coordinatorName ? "#EF4444" : "#D1D5DB");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.coordinatorName);
    \u0275\u0275advance();
    \u0275\u0275conditional(10, ctx_r1.showErrors && !ctx_r1.coordinatorName ? 10 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("border-color", ctx_r1.showErrors && !ctx_r1.coordinatorEmail ? "#EF4444" : "#D1D5DB");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.coordinatorEmail);
    \u0275\u0275advance();
    \u0275\u0275conditional(15, ctx_r1.showErrors && !ctx_r1.coordinatorEmail ? 15 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("border-color", ctx_r1.showErrors && !ctx_r1.coordinatorPhone ? "#EF4444" : "#D1D5DB");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.coordinatorPhone);
    \u0275\u0275advance();
    \u0275\u0275conditional(20, ctx_r1.showErrors && !ctx_r1.coordinatorPhone ? 20 : -1);
  }
}
function RegistrationWizardComponent_Conditional_20_Conditional_6_For_4_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 67);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function RegistrationWizardComponent_Conditional_20_Conditional_6_For_4_For_5_Template_input_ngModelChange_3_listener($event) {
      const memberIdx_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const teamIdx_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.studentNames["trailblazers-" + teamIdx_r8 + "-" + memberIdx_r7], $event) || (ctx_r1.studentNames["trailblazers-" + teamIdx_r8 + "-" + memberIdx_r7] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const memberIdx_r7 = ctx.$implicit;
    const teamIdx_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" Member ", memberIdx_r7, " ", memberIdx_r7 === 1 ? "(Team Lead) (optional)" : "(optional)", " ");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.studentNames["trailblazers-" + teamIdx_r8 + "-" + memberIdx_r7]);
  }
}
function RegistrationWizardComponent_Conditional_20_Conditional_6_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "h4", 65);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 66);
    \u0275\u0275repeaterCreate(4, RegistrationWizardComponent_Conditional_20_Conditional_6_For_4_For_5_Template, 4, 3, "div", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const teamIdx_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Team ", teamIdx_r8 + 1, "");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.memberIndexes);
  }
}
function RegistrationWizardComponent_Conditional_20_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3", 63);
    \u0275\u0275text(2, "Trailblazers (\u226410 Years)");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, RegistrationWizardComponent_Conditional_20_Conditional_6_For_4_Template, 6, 1, "div", 64, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.trailblazersTeams);
  }
}
function RegistrationWizardComponent_Conditional_20_Conditional_7_For_4_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 67);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function RegistrationWizardComponent_Conditional_20_Conditional_7_For_4_For_5_Template_input_ngModelChange_3_listener($event) {
      const memberIdx_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const teamIdx_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.studentNames["visioneers-" + teamIdx_r11 + "-" + memberIdx_r10], $event) || (ctx_r1.studentNames["visioneers-" + teamIdx_r11 + "-" + memberIdx_r10] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const memberIdx_r10 = ctx.$implicit;
    const teamIdx_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" Member ", memberIdx_r10, " ", memberIdx_r10 === 1 ? "(Team Lead) (optional)" : "(optional)", " ");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.studentNames["visioneers-" + teamIdx_r11 + "-" + memberIdx_r10]);
  }
}
function RegistrationWizardComponent_Conditional_20_Conditional_7_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "h4", 65);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 66);
    \u0275\u0275repeaterCreate(4, RegistrationWizardComponent_Conditional_20_Conditional_7_For_4_For_5_Template, 4, 3, "div", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const teamIdx_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Team ", teamIdx_r11 + 1, "");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.memberIndexes);
  }
}
function RegistrationWizardComponent_Conditional_20_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3", 69);
    \u0275\u0275text(2, "Visioneers (11-14 Years)");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, RegistrationWizardComponent_Conditional_20_Conditional_7_For_4_Template, 6, 1, "div", 64, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.visioneersTeams);
  }
}
function RegistrationWizardComponent_Conditional_20_Conditional_8_For_4_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 67);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function RegistrationWizardComponent_Conditional_20_Conditional_8_For_4_For_5_Template_input_ngModelChange_3_listener($event) {
      const memberIdx_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const teamIdx_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.studentNames["strategists-" + teamIdx_r14 + "-" + memberIdx_r13], $event) || (ctx_r1.studentNames["strategists-" + teamIdx_r14 + "-" + memberIdx_r13] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const memberIdx_r13 = ctx.$implicit;
    const teamIdx_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" Member ", memberIdx_r13, " ", memberIdx_r13 === 1 ? "(Team Lead) (optional)" : "(optional)", " ");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.studentNames["strategists-" + teamIdx_r14 + "-" + memberIdx_r13]);
  }
}
function RegistrationWizardComponent_Conditional_20_Conditional_8_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "h4", 65);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 66);
    \u0275\u0275repeaterCreate(4, RegistrationWizardComponent_Conditional_20_Conditional_8_For_4_For_5_Template, 4, 3, "div", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const teamIdx_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Team ", teamIdx_r14 + 1, "");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.memberIndexes);
  }
}
function RegistrationWizardComponent_Conditional_20_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3", 69);
    \u0275\u0275text(2, "Strategists (15-19 Years)");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, RegistrationWizardComponent_Conditional_20_Conditional_8_For_4_Template, 6, 1, "div", 64, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.strategistsTeams);
  }
}
function RegistrationWizardComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "h2", 20);
    \u0275\u0275text(2, "Step 5 \u2014 Team Members");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 21);
    \u0275\u0275text(4, " Add team member names for each team. Student names can be edited later in the dashboard. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 62);
    \u0275\u0275template(6, RegistrationWizardComponent_Conditional_20_Conditional_6_Template, 5, 0, "div")(7, RegistrationWizardComponent_Conditional_20_Conditional_7_Template, 5, 0, "div")(8, RegistrationWizardComponent_Conditional_20_Conditional_8_Template, 5, 0, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275conditional(6, ctx_r1.trailblazersCount > 0 ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(7, ctx_r1.visioneersCount > 0 ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(8, ctx_r1.strategistsCount > 0 ? 8 : -1);
  }
}
function RegistrationWizardComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "h2", 20);
    \u0275\u0275text(2, "Step 6 \u2014 Confirmation");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 70)(4, "div", 71)(5, "input", 72);
    \u0275\u0275twoWayListener("ngModelChange", function RegistrationWizardComponent_Conditional_21_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.consentObtained, $event) || (ctx_r1.consentObtained = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "label", 73);
    \u0275\u0275text(7, " I confirm that parental/guardian consent has been obtained from all participating students for their participation in SkillStorm competitions. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 71)(9, "input", 74);
    \u0275\u0275twoWayListener("ngModelChange", function RegistrationWizardComponent_Conditional_21_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.isAuthorized, $event) || (ctx_r1.isAuthorized = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "label", 75);
    \u0275\u0275text(11, " I confirm that I am authorized by the school to complete this registration. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 71)(13, "input", 76);
    \u0275\u0275twoWayListener("ngModelChange", function RegistrationWizardComponent_Conditional_21_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.agreeToRules, $event) || (ctx_r1.agreeToRules = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "label", 77);
    \u0275\u0275text(15, " I agree to the SkillStorm competition rules and submission deadlines. ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.consentObtained);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.isAuthorized);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.agreeToRules);
  }
}
function RegistrationWizardComponent_Conditional_22_Conditional_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1, "Please enter a valid 16-digit card number");
    \u0275\u0275elementEnd();
  }
}
function RegistrationWizardComponent_Conditional_22_Conditional_0_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1, "Expiry date is required");
    \u0275\u0275elementEnd();
  }
}
function RegistrationWizardComponent_Conditional_22_Conditional_0_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1, "3-digit CVC is required");
    \u0275\u0275elementEnd();
  }
}
function RegistrationWizardComponent_Conditional_22_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "h2", 20);
    \u0275\u0275text(2, "Step 7 \u2014 Payment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 21);
    \u0275\u0275text(4, " Enter your payment details to complete the registration. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 49)(6, "div", 78)(7, "span", 79);
    \u0275\u0275text(8, "Total to Pay:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 80);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div")(12, "label", 50);
    \u0275\u0275text(13, "Card Number *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 81);
    \u0275\u0275twoWayListener("ngModelChange", function RegistrationWizardComponent_Conditional_22_Conditional_0_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.cardNumber, $event) || (ctx_r1.cardNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, RegistrationWizardComponent_Conditional_22_Conditional_0_Conditional_15_Template, 2, 0, "span", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 82)(17, "div")(18, "label", 50);
    \u0275\u0275text(19, "Expiry Date *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 83);
    \u0275\u0275twoWayListener("ngModelChange", function RegistrationWizardComponent_Conditional_22_Conditional_0_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.cardExpiry, $event) || (ctx_r1.cardExpiry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, RegistrationWizardComponent_Conditional_22_Conditional_0_Conditional_21_Template, 2, 0, "span", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div")(23, "label", 50);
    \u0275\u0275text(24, "CVC *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 84);
    \u0275\u0275twoWayListener("ngModelChange", function RegistrationWizardComponent_Conditional_22_Conditional_0_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.cardCvc, $event) || (ctx_r1.cardCvc = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, RegistrationWizardComponent_Conditional_22_Conditional_0_Conditional_26_Template, 2, 0, "span", 52);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("\xA3", ctx_r1.totalPrice, ".00");
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("border-color", ctx_r1.isCardNumberInvalid() ? "#EF4444" : "#D1D5DB");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.cardNumber);
    \u0275\u0275advance();
    \u0275\u0275conditional(15, ctx_r1.isCardNumberInvalid() ? 15 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("border-color", ctx_r1.showErrors && !ctx_r1.cardExpiry ? "#EF4444" : "#D1D5DB");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.cardExpiry);
    \u0275\u0275advance();
    \u0275\u0275conditional(21, ctx_r1.showErrors && !ctx_r1.cardExpiry ? 21 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("border-color", ctx_r1.showErrors && ctx_r1.cardCvc.length !== 3 ? "#EF4444" : "#D1D5DB");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.cardCvc);
    \u0275\u0275advance();
    \u0275\u0275conditional(26, ctx_r1.showErrors && ctx_r1.cardCvc.length !== 3 ? 26 : -1);
  }
}
function RegistrationWizardComponent_Conditional_22_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85)(1, "div", 86);
    \u0275\u0275text(2, " \u2713 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 87);
    \u0275\u0275text(4, "Registration Successful!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 88);
    \u0275\u0275text(6, " Thank you! Your school registration for ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " has been processed. We have sent a confirmation email to the coordinator at ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, ". ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 89);
    \u0275\u0275text(14, " Go to School Dashboard ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.schoolName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.coordinatorEmail);
  }
}
function RegistrationWizardComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, RegistrationWizardComponent_Conditional_22_Conditional_0_Template, 27, 13)(1, RegistrationWizardComponent_Conditional_22_Conditional_1_Template, 15, 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, !ctx_r1.paymentSuccess ? 0 : 1);
  }
}
function RegistrationWizardComponent_Conditional_23_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 92);
    \u0275\u0275listener("click", function RegistrationWizardComponent_Conditional_23_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.prevStep());
    });
    \u0275\u0275text(1, " Back ");
    \u0275\u0275elementEnd();
  }
}
function RegistrationWizardComponent_Conditional_23_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
}
function RegistrationWizardComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275template(1, RegistrationWizardComponent_Conditional_23_Conditional_1_Template, 2, 0, "button", 90)(2, RegistrationWizardComponent_Conditional_23_Conditional_2_Template, 1, 0);
    \u0275\u0275elementStart(3, "button", 91);
    \u0275\u0275listener("click", function RegistrationWizardComponent_Conditional_23_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextStep());
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(1, ctx_r1.currentStep > 1 ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r1.isStepValid() ? "#D20A00" : "#E8908C")("cursor", ctx_r1.isStepValid() ? "pointer" : "not-allowed");
    \u0275\u0275property("disabled", !ctx_r1.isStepValid());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentStep === 7 ? "Complete & Pay" : "Next", " ");
  }
}
var RegistrationWizardComponent = class _RegistrationWizardComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.http = inject(HttpClient);
    this.selectedPlan = "";
    this.currentStep = 1;
    this.steps = [
      { number: 1, label: "Teams" },
      { number: 2, label: "Pricing" },
      { number: 3, label: "School" },
      { number: 4, label: "Coordinator" },
      { number: 5, label: "Team Members" },
      { number: 6, label: "Confirmation" },
      { number: 7, label: "Payment" }
    ];
    this.trailblazersCount = 0;
    this.visioneersCount = 0;
    this.strategistsCount = 0;
    this.schoolName = "";
    this.schoolCountry = "";
    this.schoolCity = "";
    this.schoolEmail = "";
    this.schoolPhone = "";
    this.schoolWebsite = "";
    this.coordinatorName = "";
    this.coordinatorEmail = "";
    this.coordinatorPhone = "";
    this.studentNames = {};
    this.consentObtained = true;
    this.isAuthorized = true;
    this.agreeToRules = true;
    this.cardNumber = "4111 2222 3333 4444";
    this.cardExpiry = "12/26";
    this.cardCvc = "123";
    this.paymentSuccess = false;
    this.showErrors = false;
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const plan = params["plan"];
      this.selectedPlan = plan;
      if (plan === "full") {
        this.trailblazersCount = 1;
        this.visioneersCount = 1;
        this.strategistsCount = 1;
      } else if (plan === "single") {
        this.trailblazersCount = 1;
        this.visioneersCount = 0;
        this.strategistsCount = 0;
      } else if (plan === "additional") {
        this.trailblazersCount = 0;
        this.visioneersCount = 0;
        this.strategistsCount = 0;
      } else {
        this.trailblazersCount = 0;
        this.visioneersCount = 0;
        this.strategistsCount = 0;
      }
    });
  }
  onSchoolNameChange(newName) {
    if (!newName || newName.trim() === "") {
      this.schoolCountry = "";
      this.schoolCity = "";
      this.schoolEmail = "";
      this.schoolPhone = "";
      this.schoolWebsite = "";
      this.coordinatorName = "";
      this.coordinatorEmail = "";
      this.coordinatorPhone = "";
      return;
    }
    const savedRegistration = localStorage.getItem("schoolRegistrationData");
    if (savedRegistration) {
      try {
        const data = JSON.parse(savedRegistration);
        if (data.schoolName && data.schoolName.toLowerCase() === newName.toLowerCase()) {
          if (data.schoolCountry)
            this.schoolCountry = data.schoolCountry;
          if (data.schoolCity)
            this.schoolCity = data.schoolCity;
          if (data.schoolEmail)
            this.schoolEmail = data.schoolEmail;
          if (data.schoolPhone)
            this.schoolPhone = data.schoolPhone;
          if (data.schoolWebsite)
            this.schoolWebsite = data.schoolWebsite;
          if (data.coordinatorName)
            this.coordinatorName = data.coordinatorName;
          if (data.coordinatorEmail)
            this.coordinatorEmail = data.coordinatorEmail;
          if (data.coordinatorPhone)
            this.coordinatorPhone = data.coordinatorPhone;
        }
      } catch (e) {
        console.error("Error parsing saved registration data", e);
      }
    }
  }
  // Counter logic
  increment(category) {
    if (category === "trailblazers")
      this.trailblazersCount++;
    if (category === "visioneers")
      this.visioneersCount++;
    if (category === "strategists")
      this.strategistsCount++;
  }
  decrement(category) {
    if (category === "trailblazers" && this.trailblazersCount > 0)
      this.trailblazersCount--;
    if (category === "visioneers" && this.visioneersCount > 0)
      this.visioneersCount--;
    if (category === "strategists" && this.strategistsCount > 0)
      this.strategistsCount--;
  }
  get totalTeams() {
    return this.trailblazersCount + this.visioneersCount + this.strategistsCount;
  }
  get maxStudentCapacity() {
    return this.totalTeams * 5;
  }
  get totalPrice() {
    return this.totalTeams * 50;
  }
  // Helpers for generating Team arrays in HTML template
  get trailblazersTeams() {
    return Array.from({ length: this.trailblazersCount }, (_, i) => i);
  }
  get visioneersTeams() {
    return Array.from({ length: this.visioneersCount }, (_, i) => i);
  }
  get strategistsTeams() {
    return Array.from({ length: this.strategistsCount }, (_, i) => i);
  }
  // Get range 1 to 5 for members
  get memberIndexes() {
    return [1, 2, 3, 4, 5];
  }
  // Validation checking per step
  isCardNumberInvalid() {
    return this.showErrors && this.cardNumber.replace(/\s+/g, "").length !== 16;
  }
  isStepValid() {
    if (this.currentStep === 1) {
      return this.totalTeams > 0;
    }
    if (this.currentStep === 2) {
      return true;
    }
    if (this.currentStep === 3) {
      return !!(this.schoolName.trim() && this.schoolCountry.trim() && this.schoolCity.trim() && this.schoolEmail.trim());
    }
    if (this.currentStep === 4) {
      return !!(this.coordinatorName.trim() && this.coordinatorEmail.trim() && this.coordinatorPhone.trim());
    }
    if (this.currentStep === 5) {
      return true;
    }
    if (this.currentStep === 6) {
      return this.consentObtained && this.isAuthorized && this.agreeToRules;
    }
    if (this.currentStep === 7) {
      return !!(this.cardNumber.replace(/\s+/g, "").length === 16 && this.cardExpiry.trim() && this.cardCvc.trim().length === 3);
    }
    return true;
  }
  nextStep() {
    this.showErrors = false;
    if (this.isStepValid()) {
      if (this.currentStep < 7) {
        this.currentStep++;
      } else {
        let planName = "School Competition";
        if (this.selectedPlan === "full")
          planName = "School Competition - Full Set";
        else if (this.selectedPlan === "single")
          planName = "School Competition - Single Team";
        else if (this.selectedPlan === "additional")
          planName = "School Competition - Additional Team";
        const payload = {
          fullName: this.schoolName,
          age: 0,
          // Age cannot be null in the DB, using 0
          country: this.schoolCountry,
          city: this.schoolCity,
          email: this.schoolEmail,
          password: "school_default_password",
          // Dummy password for school registrations
          challengeName: planName,
          category: "Global School Competitions",
          parentName: this.coordinatorName,
          parentEmail: this.coordinatorEmail,
          teamsData: {
            trailblazersCount: this.trailblazersCount,
            visioneersCount: this.visioneersCount,
            strategistsCount: this.strategistsCount,
            studentNames: this.studentNames
          }
        };
        this.http.post("http://localhost:5001/api/challenges/register", payload).subscribe({
          next: (res) => {
            const registrationData = {
              schoolName: this.schoolName,
              schoolCountry: this.schoolCountry,
              schoolCity: this.schoolCity,
              schoolEmail: this.schoolEmail,
              schoolPhone: this.schoolPhone,
              schoolWebsite: this.schoolWebsite,
              coordinatorName: this.coordinatorName,
              coordinatorEmail: this.coordinatorEmail,
              coordinatorPhone: this.coordinatorPhone
            };
            localStorage.setItem("schoolRegistrationData", JSON.stringify(registrationData));
            localStorage.setItem("openChallengeParticipantName", this.schoolName);
            localStorage.setItem("openChallengeRegistrationId", "WSM-2024-" + String(res.id).padStart(3, "0"));
            localStorage.setItem("schoolTeamsData", JSON.stringify({
              trailblazersCount: this.trailblazersCount,
              visioneersCount: this.visioneersCount,
              strategistsCount: this.strategistsCount,
              studentNames: this.studentNames
            }));
            this.paymentSuccess = true;
          },
          error: (err) => {
            console.error("School registration failed", err);
            alert("School registration failed. Please try again.");
          }
        });
      }
    } else {
      this.showErrors = true;
    }
  }
  prevStep() {
    this.showErrors = false;
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
  static {
    this.\u0275fac = function RegistrationWizardComponent_Factory(t) {
      return new (t || _RegistrationWizardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegistrationWizardComponent, selectors: [["app-registration-wizard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 24, vars: 8, consts: [[1, "wizard-section", 2, "padding", "130px 24px 80px 24px", "background", "#FAFAFB", "font-family", "'Poppins','Inter',sans-serif", "min-height", "100vh"], [2, "max-width", "850px", "margin", "0 auto"], ["routerLink", "/skillstorm/school-competitions", 2, "display", "inline-flex", "align-items", "center", "gap", "8px", "color", "#666666", "text-decoration", "none", "font-family", "'Kumbh Sans',sans-serif", "font-size", "14px", "font-weight", "600", "margin-bottom", "32px", "transition", "color 0.2s"], ["width", "18", "height", "18", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M10 19l-7-7m0 0l7-7m-7 7h18"], [2, "margin-bottom", "56px"], [2, "font-family", "'Gilmer', 'DM Sans', sans-serif", "font-size", "36px", "font-weight", "800", "color", "#000000", "margin", "0 0 12px 0"], [2, "font-family", "'Kumbh Sans',sans-serif", "font-size", "16px", "color", "#666666", "line-height", "1.6", "margin", "0", "max-width", "100%"], [2, "display", "flex", "justify-content", "space-between", "align-items", "center", "width", "100%", "margin", "0 0 56px 0", "position", "relative"], [2, "position", "absolute", "top", "20px", "left", "40px", "right", "40px", "height", "2px", "background", "#E5E7EB", "z-index", "1"], [2, "display", "flex", "flex-direction", "column", "align-items", "center", "z-index", "2", "position", "relative", "width", "90px", "text-align", "center"], [1, "wizard-card", 2, "width", "100%", "background", "#FFFFFF", "border", "1px solid #E5E7EB", "border-radius", "16px", "padding", "48px", "box-shadow", "0 10px 30px rgba(0,0,0,0.02)", "box-sizing", "border-box"], [2, "display", "flex", "justify-content", "space-between", "align-items", "center", "margin-top", "48px", "padding-top", "24px", "border-top", "1px solid #F3F4F6"], [2, "width", "40px", "height", "40px", "border-radius", "50%", "background", "#D20A00", "border", "2px solid #D20A00", "display", "flex", "align-items", "center", "justify-content", "center", "transition", "all 0.3s ease", "box-shadow", "0 4px 10px rgba(210,10,0,0.2)"], [2, "font-family", "'Kumbh Sans',sans-serif", "font-size", "13px", "margin-top", "8px", "transition", "all 0.3s ease", "white-space", "nowrap"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#FFFFFF", "stroke-width", "3.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["points", "20 6 9 17 4 12"], [2, "width", "40px", "height", "40px", "border-radius", "50%", "background", "#D20A00", "border", "2px solid #D20A00", "color", "#FFFFFF", "display", "flex", "align-items", "center", "justify-content", "center", "font-family", "'Gilmer', 'DM Sans', sans-serif", "font-size", "15px", "font-weight", "700", "transition", "all 0.3s ease", "box-shadow", "0 4px 10px rgba(210,10,0,0.2)"], [2, "width", "40px", "height", "40px", "border-radius", "50%", "background", "#FFFFFF", "border", "2px solid #E5E7EB", "color", "#9CA3AF", "display", "flex", "align-items", "center", "justify-content", "center", "font-family", "'Gilmer', 'DM Sans', sans-serif", "font-size", "15px", "font-weight", "700", "transition", "all 0.3s ease", "box-shadow", "0 4px 6px -1px rgba(0, 0, 0, 0.02)"], [2, "margin-bottom", "32px"], [2, "font-family", "'Gilmer', 'DM Sans', sans-serif", "font-size", "20px", "font-weight", "800", "color", "#000000", "margin", "0 0 12px 0"], [2, "font-family", "'Kumbh Sans',sans-serif", "font-size", "14.5px", "color", "#666666", "line-height", "1.6", "margin", "0"], [2, "display", "flex", "flex-direction", "column", "gap", "8px"], [2, "padding", "28px 0", "border-bottom", "1px solid #F3F4F6"], [1, "category-row", 2, "display", "flex", "justify-content", "space-between", "align-items", "flex-start", "gap", "24px"], [2, "flex", "1"], [2, "font-family", "'Gilmer', 'DM Sans', sans-serif", "font-size", "16px", "font-weight", "800", "color", "#000000", "margin", "0 0 6px 0"], [2, "font-family", "'Kumbh Sans',sans-serif", "font-size", "14px", "color", "#888888", "margin", "0", "line-height", "1.5"], [2, "display", "flex", "flex-direction", "column", "align-items", "flex-end", "gap", "8px", "flex-shrink", "0"], [2, "display", "flex", "align-items", "center", "gap", "16px"], [2, "font-family", "'Kumbh Sans',sans-serif", "font-size", "14px", "font-weight", "600", "color", "#374151"], [2, "display", "flex", "align-items", "center", "border", "1px solid #D1D5DB", "border-radius", "6px", "background", "#FAFAFA", "overflow", "hidden"], [2, "background", "none", "border", "none", "padding", "6px 14px", "font-size", "18px", "font-weight", "600", "color", "#EF4444", "cursor", "pointer", "outline", "none", 3, "click"], [2, "font-family", "'Gilmer', 'DM Sans', sans-serif", "font-size", "15px", "font-weight", "700", "color", "#111827", "min-width", "32px", "text-align", "center"], [2, "font-family", "'Kumbh Sans',sans-serif", "font-size", "12px", "color", "#9CA3AF"], [2, "padding", "28px 0"], [2, "margin-top", "16px", "padding", "12px", "background", "#FEF2F2", "border", "1px solid #FCA5A5", "color", "#991B1B", "border-radius", "6px", "font-size", "14px", "font-family", "'Kumbh Sans',sans-serif"], [2, "color", "#000000", "font-weight", "700"], [2, "background", "#F9FAFB", "border-radius", "12px", "padding", "32px", "border", "1px solid #E5E7EB", "margin-bottom", "24px"], [2, "display", "flex", "justify-content", "space-between", "margin-bottom", "16px", "font-family", "'Kumbh Sans',sans-serif", "font-size", "14.5px", "color", "#4B5563"], [2, "font-weight", "700", "color", "#111827"], [2, "display", "flex", "justify-content", "space-between", "margin-bottom", "16px", "font-family", "'Kumbh Sans',sans-serif", "font-size", "14.5px", "color", "#4B5563", "padding-bottom", "16px", "border-bottom", "1px solid #E5E7EB"], [2, "display", "flex", "justify-content", "space-between", "margin-bottom", "12px", "font-family", "'Kumbh Sans',sans-serif", "font-size", "14.5px", "color", "#4B5563", "font-weight", "700"], [2, "color", "#111827"], [2, "display", "flex", "justify-content", "space-between", "margin-bottom", "16px", "font-family", "'Kumbh Sans',sans-serif", "font-size", "14.5px", "color", "#4B5563", "font-weight", "700", "padding-bottom", "16px", "border-bottom", "1px solid #E5E7EB"], [2, "display", "flex", "justify-content", "space-between", "align-items", "center"], [2, "font-family", "'Gilmer', 'DM Sans', sans-serif", "font-size", "16px", "font-weight", "800", "color", "#111827"], [2, "font-family", "'Gilmer', 'DM Sans', sans-serif", "font-size", "24px", "font-weight", "800", "color", "#D20A00"], [2, "font-family", "'Kumbh Sans',sans-serif", "font-size", "13px", "color", "#888888", "margin", "0"], [2, "display", "flex", "flex-direction", "column", "gap", "20px", "font-family", "'Kumbh Sans',sans-serif"], [2, "display", "block", "font-size", "14px", "font-weight", "700", "color", "#1F2937", "margin-bottom", "8px"], ["type", "text", "placeholder", "test", 2, "width", "100%", "padding", "11px 14px", "border", "1px solid #D1D5DB", "border-radius", "6px", "background", "#FFFFFF", "font-size", "14.5px", "outline", "none", 3, "ngModelChange", "ngModel"], [2, "color", "#EF4444", "font-size", "12px", "margin-top", "4px", "display", "block"], [1, "form-grid", 2, "display", "grid", "grid-template-columns", "1fr 1fr", "gap", "16px"], ["type", "text", "placeholder", "india", 2, "width", "100%", "padding", "11px 14px", "border", "1px solid #D1D5DB", "border-radius", "6px", "background", "#FFFFFF", "font-size", "14.5px", "outline", "none", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "kochi", 2, "width", "100%", "padding", "11px 14px", "border", "1px solid #D1D5DB", "border-radius", "6px", "background", "#FFFFFF", "font-size", "14.5px", "outline", "none", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "test@test.com", 2, "width", "100%", "padding", "11px 14px", "border", "1px solid #D1D5DB", "border-radius", "6px", "background", "#FFFFFF", "font-size", "14.5px", "outline", "none", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "+91963321587", 2, "width", "100%", "padding", "11px 14px", "border", "1px solid #D1D5DB", "border-radius", "6px", "background", "#FFFFFF", "font-size", "14.5px", "outline", "none", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "www.testschool.com", 2, "width", "100%", "padding", "11px 14px", "border", "1px solid #D1D5DB", "border-radius", "6px", "background", "#FFFFFF", "font-size", "14.5px", "outline", "none", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Full name", 2, "width", "100%", "padding", "11px 14px", "border", "1px solid #D1D5DB", "border-radius", "6px", "background", "#FFFFFF", "font-size", "14.5px", "outline", "none", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "coordinator@example.com", 2, "width", "100%", "padding", "11px 14px", "border", "1px solid #D1D5DB", "border-radius", "6px", "background", "#FFFFFF", "font-size", "14.5px", "outline", "none", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "+44...", 2, "width", "100%", "padding", "11px 14px", "border", "1px solid #D1D5DB", "border-radius", "6px", "background", "#FFFFFF", "font-size", "14.5px", "outline", "none", 3, "ngModelChange", "ngModel"], [2, "display", "flex", "flex-direction", "column", "gap", "24px", "font-family", "'Kumbh Sans',sans-serif"], [2, "font-size", "16px", "font-weight", "700", "color", "#000000", "margin", "0 0 16px 0"], [2, "border", "1px solid #E5E7EB", "border-radius", "8px", "padding", "24px", "margin-bottom", "20px", "background", "#FFFFFF"], [2, "font-size", "15px", "font-weight", "700", "color", "#111827", "margin", "0 0 20px 0"], [2, "display", "flex", "flex-direction", "column", "gap", "16px"], [2, "display", "block", "font-size", "13.5px", "font-weight", "700", "color", "#374151", "margin-bottom", "6px"], ["type", "text", "placeholder", "Student name", 2, "width", "100%", "padding", "10px 14px", "border", "1px solid #D1D5DB", "border-radius", "6px", "background", "#FFFFFF", "font-size", "14px", "outline", "none", 3, "ngModelChange", "ngModel"], [2, "font-size", "16px", "font-weight", "700", "color", "#000000", "margin", "24px 0 16px 0"], [2, "background", "#FAFAFA", "border", "1px solid #E5E7EB", "border-radius", "12px", "padding", "32px 24px", "display", "flex", "flex-direction", "column", "gap", "20px", "font-family", "'Kumbh Sans',sans-serif"], [2, "display", "flex", "gap", "12px", "align-items", "flex-start", "line-height", "1.5", "font-size", "14px", "color", "#374151"], ["type", "checkbox", "id", "consentCheckbox", 2, "margin-top", "4px", "cursor", "pointer", "transform", "scale(1.1)", 3, "ngModelChange", "ngModel"], ["for", "consentCheckbox", 2, "cursor", "pointer", "user-select", "none"], ["type", "checkbox", "id", "authorizedCheckbox", 2, "margin-top", "4px", "cursor", "pointer", "transform", "scale(1.1)", 3, "ngModelChange", "ngModel"], ["for", "authorizedCheckbox", 2, "cursor", "pointer", "user-select", "none"], ["type", "checkbox", "id", "rulesCheckbox", 2, "margin-top", "4px", "cursor", "pointer", "transform", "scale(1.1)", 3, "ngModelChange", "ngModel"], ["for", "rulesCheckbox", 2, "cursor", "pointer", "user-select", "none"], [2, "background", "#FAFAFA", "border", "1px solid #E5E7EB", "border-radius", "8px", "padding", "16px", "display", "flex", "justify-content", "space-between", "align-items", "center"], [2, "font-weight", "700", "color", "#374151"], [2, "font-family", "'Gilmer', 'DM Sans', sans-serif", "font-size", "20px", "font-weight", "800", "color", "#D20A00"], ["type", "text", "placeholder", "4111 2222 3333 4444", "maxlength", "19", 2, "width", "100%", "padding", "11px 14px", "border", "1px solid #D1D5DB", "border-radius", "6px", "background", "#FFFFFF", "font-size", "14.5px", "outline", "none", 3, "ngModelChange", "ngModel"], [2, "display", "grid", "grid-template-columns", "1fr 1fr", "gap", "16px"], ["type", "text", "placeholder", "MM/YY", "maxlength", "5", 2, "width", "100%", "padding", "11px 14px", "border", "1px solid #D1D5DB", "border-radius", "6px", "background", "#FFFFFF", "font-size", "14.5px", "outline", "none", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "123", "maxlength", "3", 2, "width", "100%", "padding", "11px 14px", "border", "1px solid #D1D5DB", "border-radius", "6px", "background", "#FFFFFF", "font-size", "14.5px", "outline", "none", 3, "ngModelChange", "ngModel"], [2, "text-align", "center", "padding", "40px 20px", "font-family", "'Kumbh Sans',sans-serif"], [2, "width", "72px", "height", "72px", "background", "#DEF7EC", "border-radius", "50%", "display", "inline-flex", "align-items", "center", "justify-content", "center", "color", "#0E9F6E", "font-size", "36px", "margin-bottom", "24px"], [2, "font-family", "'Gilmer', 'DM Sans', sans-serif", "font-size", "24px", "font-weight", "800", "color", "#0E9F6E", "margin", "0 0 12px 0"], [2, "font-size", "15px", "color", "#4B5563", "line-height", "1.6", "max-width", "500px", "margin", "0 auto 32px auto"], ["routerLink", "/skillstorm/school-dashboard", 2, "background", "#D20A00", "border", "none", "border-radius", "6px", "padding", "12px 32px", "font-weight", "700", "color", "#FFFFFF", "cursor", "pointer", "font-size", "14.5px", "transition", "all 0.2s"], [2, "background", "#FFFFFF", "border", "1px solid #D1D5DB", "border-radius", "6px", "padding", "10px 24px", "font-family", "'Kumbh Sans',sans-serif", "font-size", "14px", "font-weight", "700", "color", "#374151", "cursor", "pointer", "transition", "all 0.2s"], [2, "border", "none", "border-radius", "6px", "padding", "10px 28px", "font-family", "'Kumbh Sans',sans-serif", "font-size", "14px", "font-weight", "700", "color", "#FFFFFF", "transition", "all 0.2s", "box-shadow", "0 4px 12px rgba(210,10,0,0.15)", 3, "click", "disabled"], [2, "background", "#FFFFFF", "border", "1px solid #D1D5DB", "border-radius", "6px", "padding", "10px 24px", "font-family", "'Kumbh Sans',sans-serif", "font-size", "14px", "font-weight", "700", "color", "#374151", "cursor", "pointer", "transition", "all 0.2s", 3, "click"]], template: function RegistrationWizardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "a", 2);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(3, "svg", 3);
        \u0275\u0275element(4, "path", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " Back to Competitions ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(6, "div", 5)(7, "h1", 6);
        \u0275\u0275text(8, "School Registration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 7);
        \u0275\u0275text(10, " Register your school to participate in SkillStorm Global Competitions, where students collaborate, compete, and develop real-world skills through exciting challenges. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 8);
        \u0275\u0275element(12, "div", 9);
        \u0275\u0275repeaterCreate(13, RegistrationWizardComponent_For_14_Template, 6, 6, "div", 10, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 11);
        \u0275\u0275template(16, RegistrationWizardComponent_Conditional_16_Template, 67, 4)(17, RegistrationWizardComponent_Conditional_17_Template, 40, 6)(18, RegistrationWizardComponent_Conditional_18_Template, 34, 18)(19, RegistrationWizardComponent_Conditional_19_Template, 21, 12)(20, RegistrationWizardComponent_Conditional_20_Template, 9, 3)(21, RegistrationWizardComponent_Conditional_21_Template, 16, 3)(22, RegistrationWizardComponent_Conditional_22_Template, 2, 1)(23, RegistrationWizardComponent_Conditional_23_Template, 5, 7, "div", 12);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275repeater(ctx.steps);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(16, ctx.currentStep === 1 ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(17, ctx.currentStep === 2 ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(18, ctx.currentStep === 3 ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(19, ctx.currentStep === 4 ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(20, ctx.currentStep === 5 ? 20 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(21, ctx.currentStep === 6 ? 21 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(22, ctx.currentStep === 7 ? 22 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(23, ctx.currentStep !== 7 || !ctx.paymentSuccess ? 23 : -1);
      }
    }, dependencies: [CommonModule, RouterLink, FormsModule, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, MaxLengthValidator, NgModel], styles: ['\n\na[_ngcontent-%COMP%]:hover {\n  color: #D20A00 !important;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n@media (max-width: 768px) {\n  .wizard-section[_ngcontent-%COMP%] {\n    padding: 100px 16px 40px 16px !important;\n  }\n  .wizard-card[_ngcontent-%COMP%] {\n    padding: 24px !important;\n  }\n  .category-row[_ngcontent-%COMP%] {\n    flex-direction: column !important;\n    gap: 16px !important;\n  }\n  .category-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n    align-items: flex-start !important;\n    width: 100%;\n  }\n  .wizard-card[_ngcontent-%COMP%]    > div[style*="display:flex"][_ngcontent-%COMP%] {\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n}\n/*# sourceMappingURL=registration-wizard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegistrationWizardComponent, { className: "RegistrationWizardComponent", filePath: "src\\app\\pages\\registration-wizard\\registration-wizard.component.ts", lineNumber: 14 });
})();
export {
  RegistrationWizardComponent
};
//# sourceMappingURL=chunk-VOIXS43C.js.map
