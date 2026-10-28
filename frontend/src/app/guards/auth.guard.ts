import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userId = localStorage.getItem('openChallengeRegistrationDbId') || localStorage.getItem('userId');
  const role = localStorage.getItem('currentUserRole');

  if (!userId && !role) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
