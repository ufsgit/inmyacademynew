import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  // Default redirect
  { path: '', redirectTo: 'open-challenges', pathMatch: 'full' },

  // ── Clean new URLs ──────────────────────────────────────────
  { path: 'open-challenges', loadComponent: () => import('./pages/open-challenges/open-challenges.component').then(m => m.OpenChallengesComponent) },
  { path: 'school-competitions', loadComponent: () => import('./pages/school-competitions/school-competitions.component').then(m => m.SchoolCompetitionsComponent) },
  { path: 'skillstorm-leaderboard', loadComponent: () => import('./pages/leaderboard/leaderboard.component').then(m => m.LeaderboardComponent) },
  { path: 'registration-wizard', loadComponent: () => import('./pages/registration-wizard/registration-wizard.component').then(m => m.RegistrationWizardComponent) },
  { path: 'mastery-battles', loadComponent: () => import('./pages/mastery-battles/mastery-battles.component').then(m => m.MasteryBattlesComponent) },
  { path: 'courses-catalog', loadComponent: () => import('./pages/courses-catalog/courses-catalog.component').then(m => m.CoursesCatalogComponent) },
  { path: 'tracks/:slug', loadComponent: () => import('./pages/track-details/track-details.component').then(m => m.TrackDetailsComponent) },
  { path: 'learning-lessons/:slug', loadComponent: () => import('./pages/learning-lessons/learning-lessons.component').then(m => m.LearningLessonsComponent) },
  { path: 'challenges/:slug', loadComponent: () => import('./pages/challenge-details/challenge-details.component').then(m => m.ChallengeDetailsComponent) },
  { path: 'school-dashboard', loadComponent: () => import('./pages/school-dashboard/school-dashboard.component').then(m => m.SchoolDashboardComponent) },
  { path: 'open-challenges-dashboard', loadComponent: () => import('./pages/open-challenges-dashboard/open-challenges-dashboard.component').then(m => m.OpenChallengesDashboardComponent) },
  { path: 'mastery-battles-dashboard', loadComponent: () => import('./pages/mastery-battles-dashboard/mastery-battles-dashboard.component').then(m => m.MasteryBattlesDashboardComponent) },

  // ── Other pages ─────────────────────────────────────────────
  { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
  { path: 'admin/dashboard', loadComponent: () => import('./pages/admin-dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent) },
  { path: 'courses', canActivate: [authGuard], loadComponent: () => import('./pages/courses/courses.component').then(m => m.CoursesComponent) },

  // ── Legacy redirects (old skillstorm/* paths) ───────────────
  { path: 'skillstorm/open-challenges', redirectTo: 'open-challenges', pathMatch: 'full' },
  { path: 'skillstorm/school-competitions', redirectTo: 'school-competitions', pathMatch: 'full' },
  { path: 'skillstorm/leaderboard', redirectTo: 'skillstorm-leaderboard', pathMatch: 'full' },
  { path: 'skillstorm/registration-wizard', redirectTo: 'registration-wizard', pathMatch: 'full' },
  { path: 'skillstorm/mastery-battles', redirectTo: 'mastery-battles', pathMatch: 'full' },
  { path: 'skillstorm/courses', redirectTo: 'courses-catalog', pathMatch: 'full' },
  { path: 'skillstorm/school-dashboard', redirectTo: 'school-dashboard', pathMatch: 'full' },
  { path: 'skillstorm/open-challenges-dashboard', redirectTo: 'open-challenges-dashboard', pathMatch: 'full' },
  { path: 'skillstorm/mastery-battles-dashboard', redirectTo: 'mastery-battles-dashboard', pathMatch: 'full' },
];


