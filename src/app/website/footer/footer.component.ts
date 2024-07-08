import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
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
