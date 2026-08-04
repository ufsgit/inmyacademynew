import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
    <div style="min-height: calc(100vh - 70px); background: #FFF6F6; display: flex; align-items: center; justify-content: center; padding: 60px 24px; font-family: 'Poppins', 'Inter', sans-serif;">
      <div class="login-card" style="background: #FFFFFF; border: 1px solid #EBEBEB; border-radius: 12px; padding: 48px; width: 100%; max-width: 480px; box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04); box-sizing: border-box;">
        
        <!-- Welcome Heading -->
        <h2 style="font-size: 24px; font-weight: 700; color: #111111; margin: 0 0 28px 0; font-family: 'Poppins', 'Inter', sans-serif;">
          Hi, Welcome back!
        </h2>

        @if (errorMessage) {
          <div style="background-color: #ffebee; color: #c62828; padding: 12px 16px; border-radius: 8px; margin-bottom: 24px; font-size: 14px; text-align: center; font-weight: 500;">
            {{ errorMessage }}
          </div>
        }

        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
          
          <!-- Username / Email Field -->
          <div style="margin-bottom: 20px;">
            <input 
              type="text" 
              formControlName="username" 
              placeholder="Username or Email Address" 
              class="login-input" 
              [class.is-error]="isTouchedAndInvalid('username')"
            />
            @if (isTouchedAndInvalid('username')) {
              <span class="error-text">Please enter your username or email</span>
            }
          </div>

          <!-- Password Field -->
          <div style="margin-bottom: 24px;">
            <input 
              type="password" 
              formControlName="password" 
              placeholder="Password" 
              class="login-input" 
              [class.is-error]="isTouchedAndInvalid('password')"
            />
            @if (isTouchedAndInvalid('password')) {
              <span class="error-text">Password is required</span>
            }
          </div>

          <!-- Keep me signed in & Forgot Password Row -->
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 32px; flex-wrap: wrap; gap: 12px;">
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; font-size: 14px; color: #666666; font-weight: 500;">
              <input type="checkbox" formControlName="keepMeSignedIn" style="width: 16px; height: 16px; cursor: pointer; accent-color: #2D3192;" />
              Keep me signed in
            </label>
            
            <button type="button" class="simple-link">
              Forgot Password?
            </button>
          </div>

          <!-- Sign In Button -->
          <button type="submit" class="signin-btn">
            Sign In
          </button>

        </form>

        <!-- Don't have an account Row -->
        <div style="margin-top: 28px; display: flex; align-items: center; justify-content: center; gap: 8px; font-size: 14px; color: #666666;">
          <span>Don't have an account?</span>
          <button type="button" routerLink="/skillstorm/open-challenges" class="simple-link">
            Register Now
          </button>
        </div>

      </div>
    </div>
  `,
  styles: [`
    .login-input {
      width: 100%;
      background-color: #ffffff;
      border: 1px solid #DDDDDD;
      border-radius: 8px;
      padding: 14px 16px;
      font-size: 15px;
      color: #333333;
      outline: none;
      transition: border-color 0.2s, box-shadow 0.2s;
      box-sizing: border-box;
    }
    .login-input:focus {
      border-color: #999999;
      box-shadow: 0 0 0 3px rgba(0,0,0,0.04);
    }
    .login-input.is-error {
      border-color: #FF0000;
    }
    .login-input::placeholder {
      color: #888888;
    }
    .error-text {
      font-size: 12px;
      color: #FF0000;
      margin-top: 4px;
      display: block;
    }
    .simple-link {
      background: none;
      border: none;
      color: #2D3192;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      padding: 0;
      font-family: 'Poppins', 'Inter', sans-serif;
    }
    .simple-link:hover {
      text-decoration: underline;
    }
    .signin-btn {
      width: 100%;
      background-color: #2D3192;
      color: #ffffff;
      border: none;
      border-radius: 8px;
      padding: 14px 24px;
      font-size: 16px;
      font-weight: 700;
      cursor: pointer;
      transition: opacity 0.2s, background-color 0.2s;
      letter-spacing: 0.01em;
      font-family: 'Poppins', 'Inter', sans-serif;
    }
    .signin-btn:hover {
      background-color: #1E2270;
    }
    @media (max-width: 480px) {
      .login-card {
        padding: 32px 24px !important;
      }
    }
  `]
})
export class LoginComponent implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private http = inject(HttpClient);

  errorMessage: string = '';
  returnUrl: string = '';

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.returnUrl = params['returnUrl'] || '';
    });
  }

  loginForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    keepMeSignedIn: [false]
  });

  isTouchedAndInvalid(ctrl: string): boolean {
    const c = this.loginForm.get(ctrl);
    return !!(c && c.touched && c.invalid);
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.errorMessage = '';
      const { username, password } = this.loginForm.value;

      this.http.post('http://localhost:5001/api/auth/login', { username, password }).subscribe({
        next: (res: any) => {
          if (res.role === 'superadmin' || res.role === 'admin') {
            this.router.navigate(['/admin/dashboard']);
          } else {
            // It's a participant
            localStorage.setItem('openChallengeParticipantName', res.user.fullName);
            localStorage.setItem('openChallengeSelectedChallenge', res.user.challengeName || 'General Challenge');
            localStorage.setItem('openChallengeRegistrationId', 'OC-2026-' + res.user.id);
            localStorage.setItem('openChallengeRegistrationDbId', res.user.id.toString());
            
            if (this.returnUrl === 'courses_dashboard') {
              this.router.navigate(['/courses'], { queryParams: { tab: 'all' } });
            } else if (res.dashboardType === 'mastery') {
              this.router.navigate(['/skillstorm/mastery-battles-dashboard']);
            } else if (res.dashboardType === 'school') {
              this.router.navigate(['/skillstorm/school-dashboard']);
            } else {
              this.router.navigate(['/skillstorm/open-challenges-dashboard']);
            }
          }
        },
        error: (err) => {
          this.errorMessage = err.error.message || 'Invalid username/email or password';
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
