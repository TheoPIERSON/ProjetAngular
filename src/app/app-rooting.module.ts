import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { DetailContactComponent } from './detail-contact/detail-contact.component';

const routes: Routes = [
  { path: 'detail-contact/:id', component: DetailContactComponent },
  { path: '', component: LandingPageComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRootingModule {}
