import { Routes } from '@angular/router';
import { MainLayoutComponent } from "./layouts/main-layout/main-layout.component";
import { HomeComponent } from "./features/home/home.component";
import { GalleryComponent } from "./features/gallery/gallery.component";
import { GalleryDetailComponent } from "./features/gallery/gallery-detail/gallery-detail.component";

export const routes: Routes = [{
  path: '',
  component: MainLayoutComponent,
  children: [
    { path: '', component: HomeComponent },
    {
      path: 'gallery',
      component: GalleryComponent
    },
    {
      path: 'gallery/:categoryId',
      component: GalleryComponent
    },
    {
      path: 'gallery/:categoryId/:projectId',
      component: GalleryDetailComponent
    }

  ]
},
  { path: '**', redirectTo: '' }];
