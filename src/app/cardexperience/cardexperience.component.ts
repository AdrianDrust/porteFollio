import { Component, Input } from '@angular/core';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cardexperience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cardexperience.component.html',
  styleUrl: './cardexperience.component.css'
})

export class CardexperienceComponent {
  @Input() projectName: string = '';
  @Input() description: string = '';
  @Input() largeImage: string = '';
  @Input() smallImage: string = '';
  @Input() features: string[] = [];
  @Input() imagePosition: 'left' | 'right' = 'right';  // Position de l'image

}
