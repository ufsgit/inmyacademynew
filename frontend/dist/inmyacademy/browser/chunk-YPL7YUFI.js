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
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-C72BQOBI.js";

// src/app/pages/courses-catalog/courses-catalog.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/skillstorm/tracks", a0];
function CoursesCatalogComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 44);
    \u0275\u0275element(2, "img", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 46)(4, "div", 47)(5, "div")(6, "h3", 48);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 49);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "button", 50);
    \u0275\u0275text(11, " Enroll Now ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const course_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", course_r1.image, \u0275\u0275sanitizeUrl)("alt", course_r1.title);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(course_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", course_r1.lessons, " Lessons");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c0, ctx_r1.getSlug(course_r1.title)));
  }
}
var CoursesCatalogComponent = class _CoursesCatalogComponent {
  constructor() {
    this.courses = [
      {
        id: 1,
        title: "Diplomatic Policy Leadership",
        lessons: 2,
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&q=80"
      },
      {
        id: 2,
        title: "Legal Advocacy Professional",
        lessons: 7,
        image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=500&q=80"
      },
      {
        id: 3,
        title: "Advanced Research Publication",
        lessons: 8,
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&q=80"
      },
      {
        id: 4,
        title: "Digital Media Strategy",
        lessons: 10,
        image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=500&q=80"
      },
      {
        id: 5,
        title: "Entrepreneurial Visionary Accelerator",
        lessons: 7,
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&q=80"
      },
      {
        id: 6,
        title: "Executive Project Management",
        lessons: 4,
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80"
      },
      {
        id: 7,
        title: "Global Communication Mastery",
        lessons: 12,
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&q=80"
      },
      {
        id: 8,
        title: "Digital Systems Architecture",
        lessons: 6,
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&q=80"
      },
      {
        id: 9,
        title: "Investment Banking Elite",
        lessons: 6,
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&q=80"
      }
    ];
  }
  getSlug(title) {
    return title.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");
  }
  scrollToCourses() {
    const el = document.getElementById("courses-grid-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
  static {
    this.\u0275fac = function CoursesCatalogComponent_Factory(t) {
      return new (t || _CoursesCatalogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CoursesCatalogComponent, selectors: [["app-courses-catalog"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 100, vars: 0, consts: [[1, "courses-page-container"], [1, "courses-hero-section"], [1, "hero-title"], [1, "hero-subtitle"], [1, "hero-explore-btn", 3, "click"], ["id", "courses-grid-section", 1, "courses-grid-wrapper"], [1, "courses-grid"], [1, "course-card"], [1, "courses-cta-section"], [1, "cta-title"], [1, "cta-subtitle"], [1, "cta-buttons"], [1, "cta-btn-primary", 3, "click"], ["routerLink", "/skillstorm/mastery-battles", 1, "cta-btn-secondary"], [1, "site-footer"], [1, "footer-container"], [1, "footer-contact-bar"], [1, "footer-contact-item"], [1, "footer-contact-icon"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"], [1, "footer-contact-label"], [1, "footer-contact-value"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"], [1, "footer-main"], [1, "footer-col-desc"], [1, "social-links"], [1, "social-label"], ["href", "#", "aria-label", "Facebook", 1, "social-icon-btn"], ["fill", "currentColor", "viewBox", "0 0 24 24"], ["d", "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"], ["href", "#", "aria-label", "LinkedIn", 1, "social-icon-btn"], ["d", "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.119 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"], ["href", "#", "aria-label", "YouTube", 1, "social-icon-btn"], ["d", "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"], [1, "footer-col-heading"], [1, "footer-links-list"], ["href", "#"], ["routerLink", "/skillstorm/courses"], ["routerLink", "/skillstorm/open-challenges"], ["routerLink", "/skillstorm/mastery-battles"], ["routerLink", "/skillstorm/school-competitions"], [1, "course-card-image"], [1, "course-image", 3, "src", "alt"], [1, "course-card-body"], [1, "course-card-top-row"], [1, "course-card-title"], [1, "course-card-lessons"], [1, "enroll-btn", 3, "routerLink"]], template: function CoursesCatalogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Master In-Demand Skills");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, " Elevate your expertise with comprehensive certifications across diplomacy, law, research, media, entrepreneurship, project management, communication, technology, and finance. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "button", 4);
        \u0275\u0275listener("click", function CoursesCatalogComponent_Template_button_click_6_listener() {
          return ctx.scrollToCourses();
        });
        \u0275\u0275text(7, " Explore Courses ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "section", 5)(9, "div", 6);
        \u0275\u0275repeaterCreate(10, CoursesCatalogComponent_For_11_Template, 12, 7, "div", 7, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "section", 8)(13, "h2", 9);
        \u0275\u0275text(14, "Ready to Master Your Craft?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "p", 10);
        \u0275\u0275text(16, " Join thousands of students worldwide who are gaining elite certifications, professional skills, and career-boosting credentials. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 11)(18, "button", 12);
        \u0275\u0275listener("click", function CoursesCatalogComponent_Template_button_click_18_listener() {
          return ctx.scrollToCourses();
        });
        \u0275\u0275text(19, " Start Your Course \u2192 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "a", 13);
        \u0275\u0275text(21, " Learn More ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "footer", 14)(23, "div", 15)(24, "div", 16)(25, "div", 17)(26, "div", 18);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(27, "svg", 19);
        \u0275\u0275element(28, "path", 20)(29, "path", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(30, "div")(31, "span", 22);
        \u0275\u0275text(32, "Address");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 23);
        \u0275\u0275text(34, "IN MY ACADEMY LTD 71-75, Shelton Street,");
        \u0275\u0275element(35, "br");
        \u0275\u0275text(36, "Covent Garden, London, WC2H 9JQ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "div", 17)(38, "div", 18);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(39, "svg", 19);
        \u0275\u0275element(40, "path", 24);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(41, "div")(42, "span", 22);
        \u0275\u0275text(43, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "div", 23);
        \u0275\u0275text(45, "info@inmyacademy.com");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(46, "div", 17)(47, "div", 18);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(48, "svg", 19);
        \u0275\u0275element(49, "path", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(50, "div")(51, "span", 22);
        \u0275\u0275text(52, "Call");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "div", 23);
        \u0275\u0275text(54, "+447748416224");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(55, "div", 26)(56, "div")(57, "p", 27);
        \u0275\u0275text(58, " We're more than a platform\u2014we're a global powerhouse redefining education with interactive, real-world mastery that excites, engages, and empowers you to achieve the impossible. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "div", 28)(60, "span", 29);
        \u0275\u0275text(61, "Follow on:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "a", 30);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(63, "svg", 31);
        \u0275\u0275element(64, "path", 32);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(65, "a", 33);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(66, "svg", 31);
        \u0275\u0275element(67, "path", 34);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(68, "a", 35);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(69, "svg", 31);
        \u0275\u0275element(70, "path", 36);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(71, "div")(72, "h4", 37);
        \u0275\u0275text(73, "Quick Links");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "ul", 38)(75, "li")(76, "a", 39);
        \u0275\u0275text(77, "About");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(78, "li")(79, "a", 40);
        \u0275\u0275text(80, "Course");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(81, "li")(82, "a", 39);
        \u0275\u0275text(83, "Contact Us");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(84, "li")(85, "a", 39);
        \u0275\u0275text(86, "Blog");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(87, "div")(88, "h4", 37);
        \u0275\u0275text(89, "SkillStorm Global Competitions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "ul", 38)(91, "li")(92, "a", 41);
        \u0275\u0275text(93, "Global Open Challenges");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(94, "li")(95, "a", 42);
        \u0275\u0275text(96, "Global Mastery Battles");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(97, "li")(98, "a", 43);
        \u0275\u0275text(99, "Global School competitions");
        \u0275\u0275elementEnd()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275repeater(ctx.courses);
      }
    }, dependencies: [CommonModule, RouterModule, RouterLink], styles: ['\n\n.courses-page-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background-color: #ffffff;\n  padding: 0;\n  font-family:\n    "Poppins",\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    sans-serif;\n}\n.courses-hero-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #FFFFFF 0%,\n      #FFF4F4 100%);\n  padding: 64px 24px 56px;\n  text-align: center;\n  margin-bottom: 40px;\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: 800;\n  color: #111827;\n  margin: 0 0 16px 0;\n  font-family:\n    "Poppins",\n    "Inter",\n    sans-serif;\n  line-height: 1.2;\n}\n.hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #4b5563;\n  max-width: 720px;\n  margin: 0 auto 28px;\n  line-height: 1.6;\n  font-weight: 400;\n}\n.hero-explore-btn[_ngcontent-%COMP%] {\n  background-color: #D41101;\n  color: #ffffff;\n  border: none;\n  border-radius: 8px;\n  padding: 13px 28px;\n  font-size: 15px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background-color 0.2s ease, transform 0.1s ease;\n  font-family: inherit;\n}\n.hero-explore-btn[_ngcontent-%COMP%]:hover {\n  background-color: #b50e01;\n}\n.courses-grid-wrapper[_ngcontent-%COMP%] {\n  padding: 0 24px 60px;\n}\n.courses-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 280px);\n  justify-content: center;\n  gap: 24px;\n  max-width: 1050px;\n  margin: 0 auto;\n}\n.course-card[_ngcontent-%COMP%] {\n  width: 280px;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 15px;\n  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);\n  overflow: hidden;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  display: flex;\n  flex-direction: column;\n}\n.course-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);\n}\n.course-card-image[_ngcontent-%COMP%] {\n  position: relative;\n  height: 180px;\n  overflow: hidden;\n}\n.course-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.course-card-body[_ngcontent-%COMP%] {\n  padding: 18px 18px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  flex: 1;\n  justify-content: space-between;\n}\n.course-card-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #111827;\n  line-height: 1.3;\n  margin: 0 0 4px 0;\n}\n.course-card-lessons[_ngcontent-%COMP%] {\n  margin: 6px 0 0 0;\n  font-size: 13px;\n  font-weight: 600;\n  color: #4b5563;\n}\n.enroll-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #7c3aed;\n  color: #ffffff;\n  border: none;\n  border-radius: 10px;\n  padding: 10px 14px;\n  font-size: 13px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition:\n    transform 0.15s ease,\n    background 0.15s ease,\n    color 0.15s ease;\n  line-height: 1;\n  font-family: inherit;\n}\n.enroll-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  background: #6d28d9;\n}\n.courses-cta-section[_ngcontent-%COMP%] {\n  padding: 80px 24px 60px;\n  text-align: center;\n  background-color: #ffffff;\n  border-top: 1px solid #E5E7EB;\n}\n.cta-title[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 800;\n  color: #111827;\n  margin: 0 0 12px 0;\n  font-family:\n    "Poppins",\n    "Inter",\n    sans-serif;\n}\n.cta-subtitle[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #6b7280;\n  max-width: 660px;\n  margin: 0 auto 28px;\n  line-height: 1.6;\n}\n.cta-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.cta-btn-primary[_ngcontent-%COMP%] {\n  background-color: #D41101;\n  color: #ffffff;\n  border: none;\n  border-radius: 8px;\n  padding: 13px 28px;\n  font-size: 15px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  font-family: inherit;\n}\n.cta-btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #b50e01;\n}\n.cta-btn-secondary[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #111827;\n  border: 1px solid #374151;\n  border-radius: 8px;\n  padding: 12px 24px;\n  font-size: 15px;\n  font-weight: 600;\n  text-decoration: none;\n  display: inline-block;\n  transition: background-color 0.2s ease;\n  font-family: inherit;\n}\n.cta-btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n}\n.site-footer[_ngcontent-%COMP%] {\n  background: #F3F4F6;\n  padding: 0 0 40px 0;\n  font-family:\n    "Kumbh Sans",\n    "Poppins",\n    sans-serif;\n}\n.footer-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 24px;\n}\n.footer-contact-bar[_ngcontent-%COMP%] {\n  background: #2A2F7F;\n  border-radius: 20px;\n  padding: 36px 44px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 24px;\n  margin: 0 0 56px 0;\n  position: relative;\n  transform: translateY(-30px);\n}\n.footer-contact-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex: 1;\n}\n.footer-contact-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: #FFFFFF;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #2A2F7F;\n  flex-shrink: 0;\n}\n.footer-contact-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.footer-contact-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #A5B4FC;\n  letter-spacing: 0.04em;\n  display: block;\n  margin-bottom: 4px;\n  text-transform: uppercase;\n}\n.footer-contact-value[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #FFFFFF;\n  line-height: 1.45;\n}\n.footer-main[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2.5fr 1fr 1.3fr;\n  gap: 48px;\n  margin-bottom: 44px;\n}\n.footer-col-desc[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 400;\n  color: #4B5563;\n  line-height: 1.7;\n  margin-bottom: 20px;\n}\n.social-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.social-label[_ngcontent-%COMP%] {\n  font-size: 14.5px;\n  font-weight: 600;\n  color: #4B5563;\n}\n.social-icon-btn[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: #2A2F7F;\n  color: #FFFFFF;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  transition: opacity 0.2s;\n}\n.social-icon-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.social-icon-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n}\n.footer-col-heading[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  color: #000000;\n  margin: 0 0 18px 0;\n  line-height: 1.3;\n}\n.footer-links-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.footer-links-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.footer-links-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 400;\n  color: #4B5563;\n  text-decoration: none;\n  line-height: 1.4;\n  transition: color 0.2s;\n}\n.footer-links-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #FF8C00;\n}\n@media (max-width: 768px) {\n  .footer-contact-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 28px 20px;\n    gap: 20px;\n    transform: none;\n  }\n  .footer-main[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 28px;\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n  .cta-title[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n}\n/*# sourceMappingURL=courses-catalog.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CoursesCatalogComponent, { className: "CoursesCatalogComponent", filePath: "src\\app\\pages\\courses-catalog\\courses-catalog.component.ts", lineNumber: 12 });
})();
export {
  CoursesCatalogComponent
};
//# sourceMappingURL=chunk-YPL7YUFI.js.map
