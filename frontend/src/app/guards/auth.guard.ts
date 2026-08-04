import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userId = localStorage.getItem('openChallengeRegistrationDbId');
  
  if (!userId) {
    router.navigate(['/skillstorm/mastery-battles']);
    return false;
  }

  const purchasedRaw = localStorage.getItem(`purchasedCourses-${userId}`);
  const purchased: string[] = purchasedRaw ? JSON.parse(purchasedRaw) : [];

  if (purchased.length === 0) {
    router.navigate(['/skillstorm/mastery-battles']);
    return false;
  }

  return true;
};
