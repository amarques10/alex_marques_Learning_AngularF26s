import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EditPermission {
  guardEnabled = signal(false);

  toggleEditing(): void {
    this.guardEnabled.update(enabled => !enabled);
  }
}
