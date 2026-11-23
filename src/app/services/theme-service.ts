import { effect, Injectable, signal } from '@angular/core';

type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private storageKey = 'meal.theme';
  private theme = signal<Theme>(this.loadTheme());
  currentTheme = this.theme.asReadonly();

  constructor() {
    effect(() => {
      try {
        localStorage.setItem(this.storageKey, this.theme());
      } catch {
        // Storage unavailable, continue working in memory
      }
    })
  }

  toggle(): void {
    this.theme.update(current => current === 'light' ? 'dark' : 'light');
  }

  private loadTheme(): Theme {
    try {
      const stored = localStorage.getItem(this.storageKey);
      return stored === 'dark' ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  }


}
