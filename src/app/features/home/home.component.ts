import { Component, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from "@angular/common";
import { TranslatePipe } from "@ngx-translate/core";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
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

  constructor(private el: ElementRef, private renderer: Renderer2) {}

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
  }

}
