import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent} from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { BannerComponent } from './banner/banner.component';
import { BlogsComponent } from './blogs/blogs.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { PopularComponent } from './popular/popular.component';
import { SearchComponent } from './search/search.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { SiteComponent } from './site/site.component';

const routes: Routes = [
  {path:'navbar', component:NavbarComponent},
  {path:'footer', component:FooterComponent},
  {path:'about', component:AboutComponent},
  {path:'banner', component:BannerComponent},
  {path:'blogs', component:BlogsComponent},
  {path:'category', component:CategoryComponent},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'menu', component:MenuComponent},
  {path:'order', component:OrderComponent},
  {path:'popular', component:PopularComponent},
  {path:'search', component:SearchComponent},
  {path:'shopping', component:ShoppingComponent},
  {path:'site', component:SiteComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
