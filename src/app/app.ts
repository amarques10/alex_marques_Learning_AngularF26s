import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})


export class App {
  protected readonly title = signal('alex_marques_Learning_AngularF26');

  colour = "black";
  number = 89;
}
