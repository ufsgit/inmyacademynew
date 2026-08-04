import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration-wizard',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './registration-wizard.component.html',
  styleUrls: ['./registration-wizard.component.css']
})
export class RegistrationWizardComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private http = inject(HttpClient);

  selectedPlan = '';

  // Wizard Stepper State
  currentStep = 1;
  steps = [
    { number: 1, label: 'Teams' },
    { number: 2, label: 'Pricing' },
    { number: 3, label: 'School' },
    { number: 4, label: 'Coordinator' },
    { number: 5, label: 'Team Members' },
    { number: 6, label: 'Confirmation' },
    { number: 7, label: 'Payment' }
  ];

  // Step 1: Teams State
  trailblazersCount = 0;
  visioneersCount = 0;
  strategistsCount = 0;

  // Step 3: School Details State
  schoolName = '';
  schoolCountry = '';
  schoolCity = '';
  schoolEmail = '';
  schoolPhone = '';
  schoolWebsite = '';

  // Step 4: Coordinator State
  coordinatorName = '';
  coordinatorEmail = '';
  coordinatorPhone = '';

  // Step 5: Team Members State (key format: 'category-teamIndex-memberIndex')
  studentNames: { [key: string]: string } = {};

  // Step 6: Confirmation State
  consentObtained = true;
  isAuthorized = true;
  agreeToRules = true;

  // Step 7: Payment State
  cardNumber = '4111 2222 3333 4444';
  cardExpiry = '12/26';
  cardCvc = '123';
  paymentSuccess = false;

  // Validation States
  showErrors = false;

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      const plan = params['plan'];
      this.selectedPlan = plan;
      if (plan === 'full') {
        this.trailblazersCount = 1;
        this.visioneersCount = 1;
        this.strategistsCount = 1;
      } else if (plan === 'single') {
        this.trailblazersCount = 1;
        this.visioneersCount = 0;
        this.strategistsCount = 0;
      } else if (plan === 'additional') {
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

  onSchoolNameChange(newName: string) {
    if (!newName || newName.trim() === '') {
      this.schoolCountry = '';
      this.schoolCity = '';
      this.schoolEmail = '';
      this.schoolPhone = '';
      this.schoolWebsite = '';
      this.coordinatorName = '';
      this.coordinatorEmail = '';
      this.coordinatorPhone = '';
      return;
    }

    const savedRegistration = localStorage.getItem('schoolRegistrationData');
    if (savedRegistration) {
      try {
        const data = JSON.parse(savedRegistration);
        if (data.schoolName && data.schoolName.toLowerCase() === newName.toLowerCase()) {
          if (data.schoolCountry) this.schoolCountry = data.schoolCountry;
          if (data.schoolCity) this.schoolCity = data.schoolCity;
          if (data.schoolEmail) this.schoolEmail = data.schoolEmail;
          if (data.schoolPhone) this.schoolPhone = data.schoolPhone;
          if (data.schoolWebsite) this.schoolWebsite = data.schoolWebsite;
          if (data.coordinatorName) this.coordinatorName = data.coordinatorName;
          if (data.coordinatorEmail) this.coordinatorEmail = data.coordinatorEmail;
          if (data.coordinatorPhone) this.coordinatorPhone = data.coordinatorPhone;
        }
      } catch (e) {
        console.error('Error parsing saved registration data', e);
      }
    }
  }

  // Counter logic
  increment(category: 'trailblazers' | 'visioneers' | 'strategists') {
    if (category === 'trailblazers') this.trailblazersCount++;
    if (category === 'visioneers') this.visioneersCount++;
    if (category === 'strategists') this.strategistsCount++;
  }

  decrement(category: 'trailblazers' | 'visioneers' | 'strategists') {
    if (category === 'trailblazers' && this.trailblazersCount > 0) this.trailblazersCount--;
    if (category === 'visioneers' && this.visioneersCount > 0) this.visioneersCount--;
    if (category === 'strategists' && this.strategistsCount > 0) this.strategistsCount--;
  }

  get totalTeams(): number {
    return this.trailblazersCount + this.visioneersCount + this.strategistsCount;
  }

  get maxStudentCapacity(): number {
    return this.totalTeams * 5;
  }

  get totalPrice(): number {
    return this.totalTeams * 50;
  }

  // Helpers for generating Team arrays in HTML template
  get trailblazersTeams(): number[] {
    return Array.from({ length: this.trailblazersCount }, (_, i) => i);
  }

  get visioneersTeams(): number[] {
    return Array.from({ length: this.visioneersCount }, (_, i) => i);
  }

  get strategistsTeams(): number[] {
    return Array.from({ length: this.strategistsCount }, (_, i) => i);
  }

  // Get range 1 to 5 for members
  get memberIndexes(): number[] {
    return [1, 2, 3, 4, 5];
  }

  // Validation checking per step
  isCardNumberInvalid(): boolean {
    return this.showErrors && this.cardNumber.replace(/\s+/g, '').length !== 16;
  }

  isStepValid(): boolean {
    if (this.currentStep === 1) {
      return this.totalTeams > 0;
    }
    if (this.currentStep === 2) {
      return true;
    }
    if (this.currentStep === 3) {
      return !!(
        this.schoolName.trim() &&
        this.schoolCountry.trim() &&
        this.schoolCity.trim() &&
        this.schoolEmail.trim()
      );
    }
    if (this.currentStep === 4) {
      return !!(
        this.coordinatorName.trim() &&
        this.coordinatorEmail.trim() &&
        this.coordinatorPhone.trim()
      );
    }
    if (this.currentStep === 5) {
      return true; // Optional step, students can be added later
    }
    if (this.currentStep === 6) {
      return this.consentObtained && this.isAuthorized && this.agreeToRules;
    }
    if (this.currentStep === 7) {
      return !!(
        this.cardNumber.replace(/\s+/g, '').length === 16 &&
        this.cardExpiry.trim() &&
        this.cardCvc.trim().length === 3
      );
    }
    return true;
  }

  nextStep() {
    this.showErrors = false;
    if (this.isStepValid()) {
      if (this.currentStep < 7) {
        this.currentStep++;
      } else {
        // Complete payment & submit
        let planName = 'School Competition';
        if (this.selectedPlan === 'full') planName = 'School Competition - Full Set';
        else if (this.selectedPlan === 'single') planName = 'School Competition - Single Team';
        else if (this.selectedPlan === 'additional') planName = 'School Competition - Additional Team';

        const payload = {
          fullName: this.schoolName,
          age: 0, // Age cannot be null in the DB, using 0
          country: this.schoolCountry,
          city: this.schoolCity,
          email: this.schoolEmail,
          password: 'school_default_password', // Dummy password for school registrations
          challengeName: planName,
          category: 'Global School Competitions',
          parentName: this.coordinatorName,
          parentEmail: this.coordinatorEmail,
          teamsData: {
            trailblazersCount: this.trailblazersCount,
            visioneersCount: this.visioneersCount,
            strategistsCount: this.strategistsCount,
            studentNames: this.studentNames
          }
        };

        this.http.post('http://localhost:5001/api/challenges/register', payload).subscribe({
          next: (res: any) => {
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
            localStorage.setItem('schoolRegistrationData', JSON.stringify(registrationData));
            localStorage.setItem('openChallengeParticipantName', this.schoolName);
            localStorage.setItem('openChallengeRegistrationId', 'WSM-2024-' + String(res.id).padStart(3, '0'));
            // Save teamsData so dashboard can build teams/members dynamically
            localStorage.setItem('schoolTeamsData', JSON.stringify({
              trailblazersCount: this.trailblazersCount,
              visioneersCount: this.visioneersCount,
              strategistsCount: this.strategistsCount,
              studentNames: this.studentNames
            }));

            this.paymentSuccess = true;
          },
          error: (err) => {
            console.error('School registration failed', err);
            alert('School registration failed. Please try again.');
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
}
