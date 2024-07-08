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

  onHome(){
    const homeSelection = document.getElementById('home')
    if(homeSelection){
      homeSelection.scrollIntoView({behavior:'smooth',block:'start'})
    }
  }

  onAbout(){
    const aboutSelection = document.getElementById('about')
    if(aboutSelection){
      aboutSelection.scrollIntoView({behavior:'smooth',block:'start'})
    }
  }

  onPopular(){
    const popularSelection = document.getElementById('popular')
    if(popularSelection){
      popularSelection.scrollIntoView({behavior:'smooth',block:'start'})
    }
  }

  onMenu(){
    const menuSelection = document.getElementById('menu')
    if(menuSelection){
      menuSelection.scrollIntoView({behavior:'smooth',block:'start'})
    }
  }

  onOrder(){
    const orderSelection = document.getElementById('order')
    if(orderSelection){
      orderSelection.scrollIntoView({behavior:'smooth',block:'start'})
    }
  }

  onBlogs(){
    const blogsSelection = document.getElementById('blogs')
    if(blogsSelection){
      blogsSelection.scrollIntoView({behavior:'smooth',block:'start'})
    }
  }

}
