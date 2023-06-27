import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ArrayComponent } from './array/array.component';
import { DetailContactComponent } from './detail-contact/detail-contact.component';
import { AppRootingModule } from './app-rooting.module';

@NgModule({
  declarations: [AppComponent, CardComponent, ArrayComponent, DetailContactComponent],
  imports: [BrowserModule, AppRootingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
