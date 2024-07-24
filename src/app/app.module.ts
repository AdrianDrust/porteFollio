import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';  // Importez vos routes ici
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CvComponent } from './cv/cv.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,  // Déclarez ici
    CvComponent,    // Déclarez ici
    ContactComponent, // Déclarez ici
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)  // Configurez les routes ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
