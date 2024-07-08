import { HomeComponent } from '../home/home.component';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CategoryComponent } from '../category/category.component';
import { AboutComponent } from '../about/about.component';
import { BannerComponent } from '../banner/banner.component';
import { MenuComponent } from '../menu/menu.component';
import { OrderComponent } from '../order/order.component';
import { BlogsComponent } from '../blogs/blogs.component';
import { FooterComponent } from '../footer/footer.component';
import { PopularComponent } from '../popular/popular.component';

@Component({
  selector: 'app-site',
  standalone: true,
  imports: [HomeComponent,NavbarComponent,CategoryComponent,AboutComponent,
    BannerComponent,MenuComponent,OrderComponent,BlogsComponent,FooterComponent,PopularComponent],
  templateUrl: './site.component.html',
  styleUrl: './site.component.scss'
})
export class SiteComponent {

}
