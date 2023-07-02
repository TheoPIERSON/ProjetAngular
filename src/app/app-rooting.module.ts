import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ListDetailContactComponent } from './list-detail-contact/list-detail-contact.component';

const routes: Routes = [
  { path: 'list-detail-contact', component: ListDetailContactComponent },
  { path: '', component: LandingPageComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRootingModule {}
