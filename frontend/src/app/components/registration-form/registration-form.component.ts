import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { getTrackSlug } from '../../data/mastery-tracks.data';

@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  styles: [`
    /* Force white background on all inputs, overriding browser autofill blue tint */
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px #ffffff inset !important;
      -webkit-text-fill-color: #333333 !important;
      box-shadow: 0 0 0 30px #ffffff inset !important;
    }

    .form-input {
      width: 100%;
      background-color: #ffffff !important;
      border: 1px solid #DDDDDD;
      border-radius: 6px;
      padding: 11px 14px;
      font-size: 15px;
      color: #333333;
      outline: none;
      transition: border-color 0.2s;
      box-shadow: 0 1px 3px rgba(0,0,0,0.06);
      appearance: none;
      -webkit-appearance: none;
    }

    .form-input:focus {
      border-color: #999999;
      box-shadow: 0 0 0 3px rgba(0,0,0,0.05);
    }

    .form-input.is-error {
      border-color: #FF0000;
    }

    .form-input::placeholder {
      color: #AAAAAA;
    }

    .form-label {
      display: block;
      font-size: 14px;
      font-weight: 700;
      color: #111111;
      margin-bottom: 6px;
    }

    .form-label .required-star {
      color: #FF0000;
      margin-left: 2px;
    }

    .error-text {
      font-size: 12px;
      color: #FF0000;
      margin-top: 4px;
      display: block;
    }

    .register-btn {
      width: 100%;
      background-color: #D41101;
      color: #ffffff;
      border: none;
      border-radius: 6px;
      padding: 14px 24px;
      font-size: 16px;
      font-weight: 700;
      cursor: pointer;
      transition: background-color 0.2s;
      letter-spacing: 0.01em;
    }

    .register-btn:hover {
      background-color: #B50E01;
    }

    .register-btn:disabled {
      background-color: #D41101;
      opacity: 0.7;
      cursor: not-allowed;
    }

    .country-option {
      padding: 12px 16px;
      cursor: pointer;
      font-size: 14px;
      color: #333333;
      transition: background-color 0.15s ease;
    }
    .country-option:hover {
      background-color: #F3F4F6;
    }

    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: transparent;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #D1D5DB;
      border-radius: 10px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: #9CA3AF;
    }
  `],
  template: `
    <section style="padding:80px 24px; background:#FFFFFF; border-top:1px solid #EBEBEB; font-family:'Kumbh Sans',sans-serif;">
      <div class="max-w-[1000px] mx-auto px-6">

        <!-- Section Heading and Login Link -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; flex-wrap: wrap; gap: 16px;">
          <h2 style="font-size:28.8px; font-weight:700; color:#000000; margin: 0; font-family:'Gilmer', 'DM Sans', sans-serif;">
            Register for This Challenge
          </h2>
          <div style="font-size: 15px; color: #666666; font-weight: 500;">
            Already registered? 
            <a routerLink="/login" [queryParams]="{ returnUrl: 'courses_dashboard' }" style="color: #2D3192; font-weight: 700; text-decoration: none; margin-left: 4px; transition: opacity 0.2s;" onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'">Login here</a>
          </div>
        </div>

        <!-- Card -->
        <div style="background:#F8F8F8; border:1.6px solid rgba(117,119,131,0.21); border-radius:20px; padding:40px 48px; box-shadow:none;">

          <!-- Entry Fee Banner -->
          <div style="background:#FEF2F2; border:1px solid #FEE2E2; border-radius:10px; padding:16px 20px; margin-bottom:28px;">
            <div style="font-size:15px; font-weight:800; color:#991B1B; margin-bottom:4px;">Entry Fee: £{{ entryFee }}</div>
            <div style="font-size:13px; font-weight:500; color:#991B1B;">Complete the form below and proceed to payment of £{{ entryFee }}.</div>
          </div>

          <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">

            <!-- Full Name -->
            <div style="margin-bottom:18px;">
              <label class="form-label">Full Name <span class="required-star">*</span></label>
              <input class="form-input" [class.is-error]="isTouchedAndInvalid('fullName')"
                     type="text" formControlName="fullName" placeholder="Enter Full Name" autocomplete="name" />
              @if (isTouchedAndInvalid('fullName')) {
                <span class="error-text">Full Name is required</span>
              }
            </div>

            <!-- Age -->
            <div style="margin-bottom:18px;">
              <label class="form-label">Age <span class="required-star">*</span></label>
              <input class="form-input" [class.is-error]="isTouchedAndInvalid('age')"
                     type="number" formControlName="age" placeholder="Enter Age" min="1" max="120" autocomplete="off" />
              @if (isTouchedAndInvalid('age')) {
                <span class="error-text">Please enter a valid age</span>
              }
            </div>

            <!-- Country -->
            <div style="margin-bottom:18px;">
              <label class="form-label">Country <span class="required-star">*</span></label>
              <div style="position:relative;">
                <input class="form-input" [class.is-error]="isTouchedAndInvalid('country')"
                       formControlName="country" 
                       placeholder="Type to search country..." 
                       autocomplete="off" 
                       (focus)="isDropdownOpen = true"
                       (blur)="onCountryBlur()"
                       style="padding-right:40px;" />
                       
                <!-- Custom Dropdown Panel -->
                @if (isDropdownOpen) {
                  <div class="custom-scrollbar" style="position:absolute; top:100%; left:0; width:100%; max-height:220px; overflow-y:auto; background:#ffffff; border:1px solid #EBEBEB; border-radius:8px; z-index:50; box-shadow:0 10px 25px rgba(0,0,0,0.1); margin-top:6px;">
                    @for (country of filteredCountries; track country) {
                      <div class="country-option" (mousedown)="selectCountry(country)">
                        {{ country }}
                      </div>
                    }
                    @if (filteredCountries.length === 0) {
                      <div style="padding:12px 16px; font-size:14px; color:#999999; font-style:italic;">
                        No countries found
                      </div>
                    }
                  </div>
                }

                <!-- Chevron -->
                <div style="pointer-events:none; position:absolute; top:0; bottom:0; right:0; display:flex; align-items:center; padding:0 14px; color:#666;">
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
                  </svg>
                </div>
              </div>
              @if (isTouchedAndInvalid('country')) {
                <span class="error-text">Country is required</span>
              }
            </div>

            <!-- City -->
            <div style="margin-bottom:18px;">
              <label class="form-label">City <span class="required-star">*</span></label>
              <input class="form-input" [class.is-error]="isTouchedAndInvalid('city')"
                     type="text" formControlName="city" placeholder="Enter city" autocomplete="address-level2" />
              @if (isTouchedAndInvalid('city')) {
                <span class="error-text">City is required</span>
              }
            </div>

            <!-- Email Address -->
            <div style="margin-bottom:18px;">
              <label class="form-label">Email Address <span class="required-star">*</span></label>
              <input class="form-input" [class.is-error]="isTouchedAndInvalid('email')"
                     type="email" formControlName="email" placeholder="Enter Email Address" autocomplete="email" />
              @if (isTouchedAndInvalid('email')) {
                <span class="error-text">Please enter a valid email address</span>
              }
            </div>

            <!-- Password -->
            <div style="margin-bottom:18px;">
              <label class="form-label">Password <span class="required-star">*</span></label>
              <input class="form-input" [class.is-error]="isTouchedAndInvalid('password')"
                     type="password" formControlName="password" placeholder="Enter Password" autocomplete="new-password" />
              @if (isTouchedAndInvalid('password')) {
                <span class="error-text">Password must be at least 6 characters</span>
              }
            </div>

            <!-- Parent / Guardian Consent (Under 18) — always visible -->
            <div style="margin-top:8px; padding-top:20px; border-top:1px solid #EBEBEB;">
              <h4 style="font-size:15px; font-weight:800; color:#111111; margin-bottom:18px;">
                Parent / Guardian Consent (Under 18)
              </h4>

              <div style="margin-bottom:18px;">
                <label style="display:flex; align-items:flex-start; gap:10px; cursor:pointer;">
                  <input type="checkbox" formControlName="parentConsent"
                         style="margin-top:3px; width:16px; height:16px; cursor:pointer; accent-color:#D41101;" />
                  <span style="font-size:14px; color:#666666; font-weight:500; line-height:1.5;">
                    I confirm that I approve this participation. @if (showParentFields) { <span class="required-star" style="font-size: 14px;">*</span> }
                  </span>
                </label>
                @if (isTouchedAndInvalid('parentConsent')) {
                  <span class="error-text" style="margin-left:26px;">Approval confirmation is required</span>
                }
              </div>
            </div>

            <!-- Payment Section -->
            <div style="padding-top:20px; border-top:1px solid #EBEBEB; margin-top:8px;">
              <div style="font-size:15px; font-weight:800; color:#111111; margin-bottom:6px;">
                Payment <span style="color:#FF0000;">*</span>
              </div>
              <div style="font-size:14px; color:#666666; font-weight:500; margin-bottom:20px;">
                Total : £{{ entryFee }}.00
              </div>

              <button type="submit" class="register-btn">
                Register &amp; Pay £{{ entryFee }}
              </button>
            </div>

          </form>

          <!-- Success message -->
          @if (isSubmitted) {
            <div style="margin-top:20px; padding:16px; background:#ECFDF5; border:1px solid #A7F3D0; color:#065F46; border-radius:8px; text-align:center; font-weight:700; font-size:15px;">
              🎉 Registration Successful! Payment of £{{ entryFee }}.00 processed.
            </div>
          }

          <!-- Caption -->
          <div style="font-size:13px; color:#666666; text-align:center; margin-top:18px; font-weight:400;">
            @if (entryFee === 25) {
              After registration, you will receive access to your Mastery Battles dashboard to begin Phase 1.
            } @else {
              After registration you will receive access to your submission dashboard and QR support code.
            }
          </div>

        </div>
      </div>
    </section>
  `
})
export class RegistrationFormComponent implements OnInit {
  @Input() entryFee: number = 1;
  @Input() challengeName: string = '';
  @Input() category: string = '';

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private http = inject(HttpClient);
  registerForm!: FormGroup;
  showParentFields = false;
  isSubmitted = false;
  isDropdownOpen = false;

  countriesList: string[] = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
    "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
    "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia", "Côte d'Ivoire",
    "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
    "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
    "Fiji", "Finland", "France",
    "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
    "Haiti", "Holy See", "Honduras", "Hungary",
    "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
    "Jamaica", "Japan", "Jordan",
    "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
    "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
    "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
    "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway",
    "Oman",
    "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
    "Qatar",
    "Romania", "Russia", "Rwanda",
    "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
    "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
    "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
    "Vanuatu", "Venezuela", "Vietnam",
    "Yemen",
    "Zambia", "Zimbabwe"
  ];

  get filteredCountries(): string[] {
    const term = this.registerForm?.get('country')?.value || '';
    if (!term || typeof term !== 'string') return this.countriesList;
    const lower = term.toLowerCase();
    return this.countriesList.filter(c => c.toLowerCase().includes(lower));
  }

  selectCountry(country: string): void {
    this.registerForm.patchValue({ country: country });
    this.isDropdownOpen = false;
  }

  onCountryBlur(): void {
    setTimeout(() => {
      this.isDropdownOpen = false;
      
      // Optional: Enforce selection from list
      const currentVal = this.registerForm.get('country')?.value;
      if (currentVal && !this.countriesList.includes(currentVal)) {
        this.registerForm.patchValue({ country: '' });
      }
    }, 150);
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      fullName:      ['', Validators.required],
      age:           ['', [Validators.required, Validators.min(1), Validators.max(120)]],
      country:       ['', Validators.required],
      city:          ['', Validators.required],
      email:         ['', [Validators.required, Validators.email]],
      password:      ['', [Validators.required, Validators.minLength(6)]],
      parentName:    [''],
      parentEmail:   [''],
      parentConsent: [false]
    });

    this.registerForm.get('age')?.valueChanges.subscribe(age => {
      const num = Number(age);
      this.showParentFields = !!(age && num < 18);
      this.registerForm.get('parentName')?.clearValidators();
      this.registerForm.get('parentEmail')?.clearValidators();
      if (this.showParentFields) {
        this.registerForm.get('parentConsent')?.setValidators([Validators.requiredTrue]);
      } else {
        this.registerForm.get('parentConsent')?.clearValidators();
      }
      this.registerForm.get('parentName')?.updateValueAndValidity();
      this.registerForm.get('parentEmail')?.updateValueAndValidity();
      this.registerForm.get('parentConsent')?.updateValueAndValidity();
    });
  }

  isTouchedAndInvalid(ctrl: string): boolean {
    const c = this.registerForm.get(ctrl);
    return !!(c && c.touched && c.invalid);
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const formValue = {
        ...this.registerForm.value,
        challengeName: this.challengeName,
        category: this.category || (this.entryFee === 25 ? 'Global Mastery Battles' : 'Global Open Challenges')
      };
      
      this.http.post('http://localhost:5001/api/challenges/register', formValue).subscribe({
        next: (response: any) => {
          const participantName = formValue.fullName;
          localStorage.setItem('openChallengeParticipantName', participantName);
          localStorage.setItem('openChallengeSelectedChallenge', this.challengeName);
          
          const randomId = Math.floor(10000 + Math.random() * 90000);
          // Always store the real DB ID for uploads
          localStorage.setItem('openChallengeRegistrationDbId', response.id.toString());

          if (this.entryFee === 25) {
            localStorage.setItem('masteryBattleRegistrationId', `MB-2024-${randomId}`);
            localStorage.setItem('dashboardType', 'mastery');
          } else {
            localStorage.setItem('openChallengeRegistrationId', `OC-2024-${randomId}`);
            localStorage.setItem('dashboardType', 'open');
          }

          const userId = response.id?.toString() || localStorage.getItem('openChallengeRegistrationDbId');
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
            this.router.navigate(['/courses'], { queryParams: { tab: 'all' } });
          }, 1500);
        },
        error: (err) => {
          console.error('Registration failed:', err);
          alert('Registration failed. Please try again later.');
        }
      });
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
