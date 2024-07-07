import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SearchComponent } from '../search/search.component';
import { ShoppingComponent } from '../shopping/shopping.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LoginComponent,SearchComponent,ShoppingComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(public router:Router){}

}
