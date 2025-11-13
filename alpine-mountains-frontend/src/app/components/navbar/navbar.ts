// src/app/components/navbar/navbar.ts
import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NgIf, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class NavbarComponent {
  constructor(private api: ApiService) {}

  isLoggedIn() {
    return !!this.api.getToken();
  }

  logout() {
    localStorage.removeItem('token');
    // eventueel router navigatie toevoegen
  }
}
