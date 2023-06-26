import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ArrayComponent } from './array/array.component';
import { DetailContactComponent } from './detail-contact/detail-contact.component';

@NgModule({
  declarations: [AppComponent, CardComponent, ArrayComponent, DetailContactComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
