import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SavedService {
  private storageKey = 'meal.saved';
  private saved = signal<string[]>(this.load());
  savedIds = this.saved.asReadonly();

  constructor() {
    effect(() => {
      try {
        localStorage.setItem(this.storageKey, JSON.stringify(this.saved()));
      } catch {
        /* Storage full or blocked: keep working in memory */
      }
    });
  }

  toggle(id: string): void {
    this.saved.update((list: string[]): string[] => {
      // Checking if id exists
      if (list.includes(id)) {
        // Returning the array without the id
        return list.filter((savedId) => savedId !== id);
      } else {
        // Return a new array with this id
        return [...list, id];
      }
    });
  }

  // Checks the saved array for an id
  isSaved(id: string): boolean {
    return this.saved().includes(id);
  }

  // Retrieves the stored value or returns an empty array
  private load(): string[] {
    try {
      return JSON.parse(localStorage.getItem(this.storageKey) ?? '[]');
    } catch {
      return [];
    }
  }
}
