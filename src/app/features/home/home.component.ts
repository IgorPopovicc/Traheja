import {AfterViewInit, Component, ElementRef, Renderer2} from '@angular/core';
import { CommonModule } from "@angular/common";
import { TranslatePipe } from "@ngx-translate/core";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit{
  features = [
    {
      icon: 'precision_manufacturing',
      title: 'FEATURES.PRECISE.TITLE',
      description: 'FEATURES.PRECISE.DESC'
    },
    {
      icon: 'design_services',
      title: 'FEATURES.DESIGN.TITLE',
      description: 'FEATURES.DESIGN.DESC'
    },
    {
      icon: 'handyman',
      title: 'FEATURES.HANDMADE.TITLE',
      description: 'FEATURES.HANDMADE.DESC'
    },
    {
      icon: 'workspace_premium',
      title: 'FEATURES.MATERIALS.TITLE',
      description: 'FEATURES.MATERIALS.DESC'
    },
    {
      icon: 'event_seat',
      title: 'FEATURES.FUNCTION.TITLE',
      description: 'FEATURES.FUNCTION.DESC'
    },
    {
      icon: 'forest',
      title: 'FEATURES.ECO.TITLE',
      description: 'FEATURES.ECO.DESC'
    }
  ];

  constructor(private el: ElementRef, private renderer: Renderer2, private route: ActivatedRoute, private router: Router) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(entry.target, 'visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    const items = this.el.nativeElement.querySelectorAll('.feature');
    items.forEach((el: HTMLElement) => observer.observe(el));

    // Skroluj ako fragment postoji i posle reload-a
    this.scrollToFragment(this.route.snapshot.fragment);

    // Skroluj svaki put kad se promeni ruta (uključujući fragment)
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const fragment = this.route.snapshot.fragment;
        this.scrollToFragment(fragment);
      });
  }

  private scrollToFragment(fragment: string | null): void {
    if (fragment) {
      setTimeout(() => {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // čekaj da DOM bude spreman
    }
  }

}
