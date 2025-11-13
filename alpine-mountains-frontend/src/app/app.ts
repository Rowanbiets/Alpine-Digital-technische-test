// src/app/app.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // <-- import toevoegen
import { NavbarComponent } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet], // <-- RouterOutlet hier toevoegen
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
