import { Component } from '@angular/core';
import { CardformationComponent } from '../cardformation/cardformation.component';

@Component({
  selector: 'app-formation',
  standalone: true,
  imports: [CardformationComponent],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.css'
})
export class FormationComponent {

}
