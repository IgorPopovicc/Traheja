import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Lightbox, LightboxModule } from 'ngx-lightbox';
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  standalone: true,
  selector: 'app-gallery-detail',
  imports: [CommonModule, LightboxModule, TranslatePipe],
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.scss']
})
export class GalleryDetailComponent implements OnInit {
  gallery: any;
  albums: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private lightbox: Lightbox
  ) {}

  ngOnInit(): void {
    const state = history.state;
    const cachedGallery = localStorage.getItem('selectedGallery');

    if (state.gallery) {
      this.gallery = state.gallery;
      localStorage.setItem('selectedGallery', JSON.stringify(this.gallery));
    } else if (cachedGallery) {
      this.gallery = JSON.parse(cachedGallery);
    } else {
      this.router.navigate(['/gallery']);
      return;
    }

    if (this.gallery?.images?.length) {
      this.gallery.images.forEach((img: string) => {
        this.albums.push({ src: img, caption: '', thumb: img });
      });
    }
  }

  open(index: number): void {
    if (this.albums.length) {
      this.lightbox.open(this.albums, index);
    }
  }

  close(): void {
    this.lightbox.close();
  }
}
