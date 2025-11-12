// src/app/components/register/register.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.html',
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';

  constructor(private api: ApiService, private router: Router) {}

  register() {
    this.api.register({ name: this.name, email: this.email, password: this.password }).subscribe({
      next: (res: any) => {
        this.api.setToken(res.token);
        this.router.navigate(['/mountains']);
      },
      error: (err) => console.error(err)
    });
  }
}
