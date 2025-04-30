import { Component } from '@angular/core';
import {RouterLink, RouterModule} from '@angular/router';

@Component({
  selector: 'app-left-sidbar',
  imports: [RouterModule],
  templateUrl: './left-sidbar.component.html',
  styleUrl: './left-sidbar.component.css'
})
export class LeftSidbarComponent {
  items = [
    {routeLink: 'dashboard',
    label: 'dashboard'},
    {routeLink: 'products',
      label: 'products'},
    {routeLink: 'pages',
      label: 'pages'},
    {}
  ];
}
