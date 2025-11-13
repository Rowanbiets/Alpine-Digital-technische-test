// src/app/components/register/register.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css'], 
})

export class RegisterComponent {
  name = '';
  email = '';
  password = '';

  constructor(private api: ApiService) {}

  register() {
    this.api.register({ name: this.name, email: this.email, password: this.password }).subscribe({
      next: (res) => {
        this.api.setToken(res.token);
        console.log('Registered!', res);
      },
      error: (err) => console.error('Registration failed', err),
    });
  }
}
