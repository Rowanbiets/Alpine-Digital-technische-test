import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div class="bg-white p-4 rounded w-96">
        <h3 class="font-bold mb-2">{{ title }}</h3>
        <form (ngSubmit)="submit()">
          <input type="text" [(ngModel)]="name" name="name" placeholder="Name" class="mb-2 p-2 border rounded w-full" />
          <input type="text" [(ngModel)]="location" name="location" placeholder="Location" class="mb-2 p-2 border rounded w-full" />
          <input type="number" [(ngModel)]="height" name="height" placeholder="Height" class="mb-2 p-2 border rounded w-full" />
          <div class="flex justify-end gap-2">
            <button type="button" (click)="close.emit()" class="bg-gray-300 p-2 rounded">Cancel</button>
            <button type="submit" class="bg-blue-500 text-white p-2 rounded">Save</button>
          </div>
        </form>
      </div>
    </div>
  `,
})
export class ModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<{ name: string; location: string; height: number }>();

  title = 'Add/Edit Mountain';
  name = '';
  location = '';
  height = 0;

  submit() {
    this.save.emit({ name: this.name, location: this.location, height: this.height });
    this.close.emit();
  }
}
