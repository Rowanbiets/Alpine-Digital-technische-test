// src/app/components/mountains/mountains.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-mountains',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './mountains.html',
})
export class MountainsComponent {
  mountains: any[] = [];
  name = '';
  location = '';
  height: number | null = null;

  constructor(private api: ApiService) {
    this.loadMountains();
  }

  loadMountains() {
    this.api.getMountains().subscribe({
      next: (res) => this.mountains = res,
      error: (err) => console.error(err)
    });
  }

  addMountain() {
    this.api.createMountain({ name: this.name, location: this.location, height: this.height }).subscribe({
      next: () => {
        this.name = '';
        this.location = '';
        this.height = null;
        this.loadMountains();
      },
      error: (err) => console.error(err)
    });
  }

  deleteMountain(id: number) {
    this.api.deleteMountain(id).subscribe({
      next: () => this.loadMountains(),
      error: (err) => console.error(err)
    });
  }
}
