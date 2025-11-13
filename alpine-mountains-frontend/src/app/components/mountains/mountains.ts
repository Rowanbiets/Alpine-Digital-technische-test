import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-mountains',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './mountains.html',
  styleUrls: ['./mountains.css'],
})
export class MountainsComponent {
  mountains: any[] = [];
  name = '';
  location = '';
  height!: number;
  editingId: number | null = null;

  constructor(private api: ApiService) {
    this.loadMountains();
  }

  loadMountains() {
    this.api.getMountains().subscribe({
      next: (res) => {
        this.mountains = res;
      },
      error: (err) => console.error('Could not load mountains', err),
    });
  }

  submit() {
    const data = { name: this.name, location: this.location, height: this.height };
    if (this.editingId) {
      this.api.updateMountain(this.editingId, data).subscribe(() => this.loadMountains());
      this.editingId = null;
    } else {
      this.api.createMountain(data).subscribe(() => this.loadMountains());
    }
    this.name = '';
    this.location = '';
    this.height = 0;
  }

  edit(mountain: any) {
    this.editingId = mountain.id;
    this.name = mountain.name;
    this.location = mountain.location;
    this.height = mountain.height;
  }

  delete(id: number) {
    this.api.deleteMountain(id).subscribe(() => this.loadMountains());
  }
}
