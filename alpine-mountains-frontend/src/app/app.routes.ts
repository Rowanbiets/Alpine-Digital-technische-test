// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { RegisterComponent } from './components/register/register';
import { MountainsComponent } from './components/mountains/mountains';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'mountains', component: MountainsComponent },
];
