import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [
    CommonModule,  // Assurez-vous que CommonModule est importé pour les directives Angular de base
    RouterModule   // Importez RouterModule pour les directives de routage
  ]
})
export class NavbarComponent implements OnInit  {

  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

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
