import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  const user = JSON.parse(sessionStorage.getItem('userInfo') || '{}');

  if (user?.role === 'admin') {
    return true;
  } else {
    if (isPlatformBrowser(platformId)) {
      window.alert('You do not have permission to access this page.');
    }
    router.navigate(['/']);
    return false;
  }
};
