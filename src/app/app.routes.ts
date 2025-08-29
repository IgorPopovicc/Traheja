import { Routes } from '@angular/router';
import { MainLayoutComponent } from "./layouts/main-layout/main-layout.component";
import { HomeComponent } from "./features/home/home.component";
import { GalleryComponent } from "./features/gallery/gallery.component";
import { GalleryDetailComponent } from "./features/gallery/gallery-detail/gallery-detail.component";

export const routes: Routes = [{
  path: '',
  component: MainLayoutComponent,
  children: [
    {
      path: '',
      component: HomeComponent,
      data: {
        seo: {
          title: 'Traheja — Početna',
          description: 'Prilagođeni namještaj, stolarija i enterijeri po mjeri.',
          image: 'https://traheja.vercel.app/assets/images/logo/footer-logo.png',
        }
      }
    },
    {
      path: 'gallery',
      component: GalleryComponent,
      data: {
        seo: {
          title: 'Traheja — Galerija radova',
          description: 'Pogledajte naše projekte: kuhinje, dnevne sobe, kancelarije.',
          image: 'https://traheja.vercel.app/assets/images/logo/footer-logo.png',
        }
      }
    },
    {
      path: 'gallery/:categoryId',
      component: GalleryComponent,
      data: {
        seo: {
          title: 'Traheja — Galerija radova',
          description: 'Pogledajte naše projekte: kuhinje, dnevne sobe, kancelarije.',
          image: 'https://traheja.vercel.app/assets/images/logo/footer-logo.png',
        }
      }
    },
    {
      path: 'gallery/:categoryId/:projectId',
      component: GalleryDetailComponent,
      data: {
        seo: {
          title: 'Traheja — Galerija radova',
          description: 'Pogledajte naše projekte: kuhinje, dnevne sobe, kancelarije.',
          image: 'https://traheja.vercel.app/assets/images/logo/footer-logo.png',
        }
      }
    }

  ]
},
  { path: '**', redirectTo: '' }];
