import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CvComponent } from './cv/cv.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'cv', component: CvComponent },
  { path: 'contact', component: ContactComponent }
];