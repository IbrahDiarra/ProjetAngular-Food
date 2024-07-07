import { HomeComponent } from '../home/home.component';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-site',
  standalone: true,
  imports: [HomeComponent,NavbarComponent],
  templateUrl: './site.component.html',
  styleUrl: './site.component.scss'
})
export class SiteComponent {

}
