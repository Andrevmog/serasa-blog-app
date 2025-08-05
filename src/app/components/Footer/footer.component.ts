import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  // Propriedade para obter o ano atual dinamicamente
  currentYear: number;

  constructor() {
    this.currentYear = new Date().getFullYear(); // Ex: 2025
  }
}
