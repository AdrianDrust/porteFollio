import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cardformation',
  standalone: true,
  imports: [],
  templateUrl: './cardformation.component.html',
  styleUrls: ['./cardformation.component.css']
})
export class CardformationComponent {
    @Input() title: string = '';
    @Input() subtitle: string = '';
    @Input() content: string = '';
    @Input() description: string = ''; // Ajout d'une description détaillée
    @Input() projects: string = ''; // Projets réalisés
    @Input() achievements: string = ''; 
}