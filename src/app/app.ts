import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EditPermission } from './services/edit-permission';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('alex_marques_Learning_AngularF26');

  protected editPermission = inject(EditPermission);

}
