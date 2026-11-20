import { Directive, input, signal } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host: {
    '(mouseenter)': 'active.set(true)',
    '(mouseleave)': 'active.set(false)',
    '[style.backgroundColor]': "active() ? (color() || '#F4F1EA') : ''",
  },
})
export class Highlight {
  color = input('#DDD6C0', { alias: 'appHighlight' });
  protected active = signal(false);
  constructor() {}
}
