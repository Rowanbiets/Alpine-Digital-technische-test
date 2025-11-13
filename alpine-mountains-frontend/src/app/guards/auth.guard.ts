import { inject, Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ApiService } from '../services/api';

export const authGuard: CanActivateFn = (route, state) => {
  const api = inject(ApiService);
  const router = inject(Router);

  const token = api.getToken();
  if (!token) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};
