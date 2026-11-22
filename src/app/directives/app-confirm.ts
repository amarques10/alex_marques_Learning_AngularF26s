import { Directive, input, output } from '@angular/core';

@Directive({
  selector: '[appConfirm]',
  host: {
    "(click)": 'askConfirmation($event)',
  },
})
export class AppConfirm {
  question = input('Delete this item?', {alias: 'appConfirm'});
  confirmed = output();

  askConfirmation(event: MouseEvent): void {
    // To stop my (click) toggle() activating
    event.stopPropagation();

    // Confirm Box with question, emits response if true
    if (window.confirm(this.question())) {
      this.confirmed.emit();
    }
  }
  constructor() {}
}
