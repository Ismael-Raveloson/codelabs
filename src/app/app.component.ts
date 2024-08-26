import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `<h1>Hello World!</h1>`,
  templateUrl : './app.html',
  styleUrls: ['./app.component.css'],
  imports : [HomeComponent,RouterModule]
})
export class AppComponent {
  title = 'homes';
}
