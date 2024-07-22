import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';  // Importez vos routes ici
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CvComponent } from './cv/cv.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),  // Configurez les routes ici
    
    MenuComponent,     // Assurez-vous que tous les composants de route sont déclarés
    CvComponent,
    ContactComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
