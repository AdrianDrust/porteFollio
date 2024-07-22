import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-singlecard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './singlecard.component.html',
  styleUrl: './singlecard.component.css'
})
export class SinglecardComponent {
  @Input() className: string = '';
  @Input() imageUrl: string = '';
  @Input() paragraphText: string = '';
  @Input() cardTitle: string = '';
  @Input() imageAlt: string = '';
  @Input() linkUrl: string = '#';
  @Input() linkText: string = 'Read Full';
}
