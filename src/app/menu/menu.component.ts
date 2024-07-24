import { Component,OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { BoutonsComponent } from '../boutons/boutons.component';
import { CardsComponent } from '../cards/cards.component';
import { CarousselComponent } from '../carrousel/carrousel.component';
import { SinglecardComponent } from '../singlecard/singlecard.component';
import { FormationComponent } from '../formation/formation.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ContactComponent } from '../contact/contact.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ReaComponent } from '../rea/rea.component';

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
    ContactComponent,
    ReaComponent
  ]
})
export class MenuComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        // Utilisez setTimeout pour être sûr que le défilement se fait après le rendu complet de la vue
        setTimeout(() => {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 0);
      }
    });
  }
}
