import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-gallery',
  standalone: true,
  templateUrl: './gallery.component.html',
  imports: [
    NgForOf,
    TranslatePipe,
    NgOptimizedImage
  ],
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  intrinsicWidth = 1200;
  intrinsicHeight = 800;

  allCategories = [
    {
      id: 'stambeni',
      name: 'CATEGORY.STAMBENI_PROSTORI',
      coverImage: 'assets/images/gallery/Stambeni prostori/cover.webp',
      children: [
        {
          id: 'stan-1',
          name: 'Stan 1',
          description: 'OBJECT.STAN_1',
          coverImage: 'assets/images/gallery/Stambeni prostori/Stan 1/img-3.webp',
          images: [
            'assets/images/gallery/Stambeni prostori/Stan 1/img-1.webp',
            'assets/images/gallery/Stambeni prostori/Stan 1/img-2.webp',
            'assets/images/gallery/Stambeni prostori/Stan 1/cover.webp',
            'assets/images/gallery/Stambeni prostori/Stan 1/img-4.webp',
          ]
        },
        {
          id: 'stan-2',
          name: 'Stan 2',
          description: 'OBJECT.STAN_2',
          coverImage: 'assets/images/gallery/Stambeni prostori/Stan 2/cover.webp',
          images: [
            'assets/images/gallery/Stambeni prostori/Stan 2/img-1.webp',
            'assets/images/gallery/Stambeni prostori/Stan 2/img-2.webp',
            'assets/images/gallery/Stambeni prostori/Stan 2/img-3.webp',
            'assets/images/gallery/Stambeni prostori/Stan 2/img-4.webp',
            'assets/images/gallery/Stambeni prostori/Stan 2/img-5.webp',
            'assets/images/gallery/Stambeni prostori/Stan 2/img-6.webp',
          ]
        },
        {
          id: 'razno',
          name: 'Razno',
          description: 'OBJECT.RAZNO',
          coverImage: 'assets/images/gallery/Stambeni prostori/Razni/cover.webp',
          images: [
            'assets/images/gallery/Stambeni prostori/Razni/img-1.webp',
            'assets/images/gallery/Stambeni prostori/Razni/img-2.webp',
            'assets/images/gallery/Stambeni prostori/Razni/img-3.webp',
            'assets/images/gallery/Stambeni prostori/Razni/img-4.webp',
            'assets/images/gallery/Stambeni prostori/Razni/img-5.webp',
            'assets/images/gallery/Stambeni prostori/Razni/img-6.webp',
            'assets/images/gallery/Stambeni prostori/Razni/img-7.webp',
            'assets/images/gallery/Stambeni prostori/Razni/img-8.webp',
            'assets/images/gallery/Stambeni prostori/Razni/img-9.webp',
            'assets/images/gallery/Stambeni prostori/Razni/img-10.webp',
            'assets/images/gallery/Stambeni prostori/Razni/img-11.webp',
            'assets/images/gallery/Stambeni prostori/Razni/img-12.webp',
            'assets/images/gallery/Stambeni prostori/Razni/img-13.webp',
            'assets/images/gallery/Stambeni prostori/Razni/img-14.webp',
            'assets/images/gallery/Stambeni prostori/Razni/img-15.webp',
            'assets/images/gallery/Stambeni prostori/Razni/img-16.webp'
          ]
        }
      ]
    },
    {
      id: 'poslovni',
      name: 'CATEGORY.POSLOVNI_PROSTORI',
      coverImage: 'assets/images/gallery/Poslovni prostori/Gorenje and Hisense Studio/cover.webp',
      children: [
        {
          id: 'biologique-recherche',
          name: 'Biologique recherche',
          description: 'OBJECT.BIOLOGIQUE_RECHERCHE',
          coverImage: 'assets/images/gallery/Poslovni prostori/biologique recherche/cover.webp',
          images: [
            'assets/images/gallery/Poslovni prostori/biologique recherche/cover.webp',
            'assets/images/gallery/Poslovni prostori/biologique recherche/img-1.webp',
            'assets/images/gallery/Poslovni prostori/biologique recherche/img-2.webp',
            'assets/images/gallery/Poslovni prostori/biologique recherche/img-3.webp',
          ]
        },
        {
          id: 'gorenje-hisense',
          name: 'Gorenje i Hisense Studio',
          description: 'OBJECT.GORENJE_HISENSE',
          coverImage: 'assets/images/gallery/Poslovni prostori/Gorenje and Hisense Studio/cover.webp',
          images: [
            'assets/images/gallery/Poslovni prostori/Gorenje and Hisense Studio/cover.webp',
            'assets/images/gallery/Poslovni prostori/Gorenje and Hisense Studio/img-1.webp',
            'assets/images/gallery/Poslovni prostori/Gorenje and Hisense Studio/img-2.webp',
            'assets/images/gallery/Poslovni prostori/Gorenje and Hisense Studio/img-3.webp',
            'assets/images/gallery/Poslovni prostori/Gorenje and Hisense Studio/img-4.webp',
            'assets/images/gallery/Poslovni prostori/Gorenje and Hisense Studio/img-5.webp',
            'assets/images/gallery/Poslovni prostori/Gorenje and Hisense Studio/img-6.webp',
            'assets/images/gallery/Poslovni prostori/Gorenje and Hisense Studio/img-7.webp',
            'assets/images/gallery/Poslovni prostori/Gorenje and Hisense Studio/img-8.webp',
            'assets/images/gallery/Poslovni prostori/Gorenje and Hisense Studio/img-9.webp',
            'assets/images/gallery/Poslovni prostori/Gorenje and Hisense Studio/img-10.webp',
            'assets/images/gallery/Poslovni prostori/Gorenje and Hisense Studio/img-11.webp',
            'assets/images/gallery/Poslovni prostori/Gorenje and Hisense Studio/img-12.webp',
            'assets/images/gallery/Poslovni prostori/Gorenje and Hisense Studio/img-13.webp',
            'assets/images/gallery/Poslovni prostori/Gorenje and Hisense Studio/img-14.webp',
            'assets/images/gallery/Poslovni prostori/Gorenje and Hisense Studio/img-15.webp',
          ]
        }
      ]
    },
    {
      id: 'ugostiteljski',
      name: 'CATEGORY.UGOSTITELJSKI_OBJEKTI',
      coverImage: 'assets/images/gallery/Ugostiteljski objekti/Kod Deda Stavre/cover.webp',
      children: [
        {
          id: 'frans',
          name: 'Frans',
          description: 'OBJECT.FRANS',
          coverImage: 'assets/images/gallery/Ugostiteljski objekti/Frans/cover.webp',
          images: [
            'assets/images/gallery/Ugostiteljski objekti/Frans/img-1.webp',
            'assets/images/gallery/Ugostiteljski objekti/Frans/img-2.webp',
            'assets/images/gallery/Ugostiteljski objekti/Frans/img-3.webp',
            'assets/images/gallery/Ugostiteljski objekti/Frans/img-4.webp',
            'assets/images/gallery/Ugostiteljski objekti/Frans/img-5.webp',
            'assets/images/gallery/Ugostiteljski objekti/Frans/img-6.webp',
            'assets/images/gallery/Ugostiteljski objekti/Frans/img-7.webp',
            'assets/images/gallery/Ugostiteljski objekti/Frans/img-8.webp',
          ]
        },
        {
          id: 'hotel-amsterdam',
          name: 'Hotel Amsterdam',
          description: 'OBJECT.HOTEL_AMSTERDAM',
          coverImage: 'assets/images/gallery/Ugostiteljski objekti/Hotel Amsterdam/cover.webp',
          images: [
            'assets/images/gallery/Ugostiteljski objekti/Hotel Amsterdam/cover.webp',
            'assets/images/gallery/Ugostiteljski objekti/Hotel Amsterdam/img-1.webp',
            'assets/images/gallery/Ugostiteljski objekti/Hotel Amsterdam/img-2.webp',
            'assets/images/gallery/Ugostiteljski objekti/Hotel Amsterdam/img-3.webp',
          ]
        },
        {
          id: 'kod-deda-stavre',
          name: 'Kod Deda Stavre',
          description: 'OBJECT.KOD_DEDA_STAVRE',
          coverImage: 'assets/images/gallery/Ugostiteljski objekti/Kod Deda Stavre/cover.webp',
          images: [
            'assets/images/gallery/Ugostiteljski objekti/Kod Deda Stavre/cover.webp',
            'assets/images/gallery/Ugostiteljski objekti/Kod Deda Stavre/img-1.webp',
            'assets/images/gallery/Ugostiteljski objekti/Kod Deda Stavre/img-2.webp',
            'assets/images/gallery/Ugostiteljski objekti/Kod Deda Stavre/img-3.webp',
            'assets/images/gallery/Ugostiteljski objekti/Kod Deda Stavre/img-4.webp',
            'assets/images/gallery/Ugostiteljski objekti/Kod Deda Stavre/img-5.webp',
            'assets/images/gallery/Ugostiteljski objekti/Kod Deda Stavre/img-6.webp',
          ]
        },
        {
          id: 'mokum',
          name: 'Mokum',
          description: 'OBJECT.MOKUM',
          coverImage: 'assets/images/gallery/Ugostiteljski objekti/Mokum/cover.webp',
          images: [
            'assets/images/gallery/Ugostiteljski objekti/Mokum/img-1.webp',
            'assets/images/gallery/Ugostiteljski objekti/Mokum/img-2.webp',
            'assets/images/gallery/Ugostiteljski objekti/Mokum/img-3.webp',
            'assets/images/gallery/Ugostiteljski objekti/Mokum/img-4.webp',
          ]
        }
      ]
    }
  ];

  displayItems: any[] = [];
  isSubCategoryView = false;
  currentCategoryId: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.currentCategoryId = params.get('categoryId');
      this.updateDisplayItems();
    });
  }

  updateDisplayItems(): void {
    if (!this.currentCategoryId) {
      this.isSubCategoryView = false;
      this.displayItems = this.allCategories;
    } else {
      const selectedCategory = this.allCategories.find(cat => cat.id === this.currentCategoryId);
      this.displayItems = selectedCategory?.children || [];
      this.isSubCategoryView = true;
    }
  }

  onCardClick(item: any): void {
    if (this.isSubCategoryView) {
      this.router.navigate([`/gallery/${this.currentCategoryId}/${item.id}`], {
        state: { gallery: item }
      });
    } else {
      this.router.navigate([`/gallery/${item.id}`]);
    }
  }

  getPrimarySrc(item: any): string {
    return item.coverImage;
  }
}
