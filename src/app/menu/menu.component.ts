import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { BoutonsComponent } from '../boutons/boutons.component';
import { CardsComponent } from '../cards/cards.component';
import { CarousselComponent } from '../carrousel/carrousel.component';
import { SinglecardComponent } from '../singlecard/singlecard.component';
import { FormationComponent } from '../formation/formation.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    BoutonsComponent,
    CardsComponent,
    CarousselComponent,
    SinglecardComponent,
    FormationComponent,
    ExperienceComponent,
    ContactComponent
  ]
})
export class MenuComponent { }
