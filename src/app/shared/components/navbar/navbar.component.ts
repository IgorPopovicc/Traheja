import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule} from '@angular/router';
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

  constructor(private translate: TranslateService, private router: Router) {
    const savedLang = localStorage.getItem('lang') || 'serbian';
    this.translate.setDefaultLang('serbian');
    this.translate.use(savedLang);
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  setLang(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  scrollTo(fragment: string): void {
    if (this.router.url.includes(`#${fragment}`)) {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/'], { fragment });
      });
    } else {
      this.router.navigate(['/'], { fragment });
    }
  }

}
