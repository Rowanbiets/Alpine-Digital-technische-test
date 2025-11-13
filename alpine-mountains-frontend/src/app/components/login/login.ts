// src/app/components/login/login.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private api: ApiService) {}

  // Hier voeg je de functie toe die je template aanroept
  login() {
    this.api.login({ email: this.email, password: this.password }).subscribe({
      next: (res) => {
        this.api.setToken(res.token); // sla token op
        console.log('Logged in!', res);
      },
      error: (err) => {
        console.error('Login failed', err);
      },
    });
  }
}
