import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LeftSidbarComponent} from './left-sidbar/left-sidbar.component';
import {MainComponent} from './main/main.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LeftSidbarComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'menu';
}
