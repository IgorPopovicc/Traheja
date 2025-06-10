import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslatePipe, TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isMenuOpen = false;

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('lang') || 'sr';
    this.translate.setDefaultLang('sr');
    this.translate.use(savedLang);
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  setLang(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }
}
