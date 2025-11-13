// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { RegisterComponent } from './components/register/register';
import { MountainsComponent } from './components/mountains/mountains';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'mountains', component: MountainsComponent, canActivate: [authGuard] }, // enkel voor ingelogde users
  { path: '**', redirectTo: '/login' } // fallback
];
