import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MainHeaderComponent} from "./core/main-header/main-header.component";
import {MainFooterComponent} from "./core/main-footer/main-footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MainHeaderComponent,MainFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Front-web-app';
}
