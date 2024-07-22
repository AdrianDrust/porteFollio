import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [
    ContactComponent  // Déclaration de votre ContactComponent
  ],
  imports: [
    CommonModule,        // Module Angular pour les directives communes
    ReactiveFormsModule,  // Pour les formulaires réactifs
    HttpClientModule,     // Pour les requêtes HTTP
    ToastrModule.forRoot()  // Configuration globale de Toastr
  ],
  exports: [
    ContactComponent  // Exporter ContactComponent pour utilisation externe
  ]
})
export class ContactModule {}
