import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: 'website', loadChildren: ()=> import('./website/website.module').then(m => m.WebsiteModule)}
];
