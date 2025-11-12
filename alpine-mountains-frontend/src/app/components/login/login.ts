// src/app/components/login/login.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private api: ApiService, private router: Router) {}

  login() {
    this.api.login({ email: this.email, password: this.password }).subscribe({
      next: (res: any) => {
        this.api.setToken(res.token); // token opslaan
        this.router.navigate(['/mountains']);
      },
      error: (err) => console.error(err)
    });
  }
}
