import { NgModule } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockFormComponent } from './stock-form/stock-form.component';

@NgModule({
  declarations: [
    AppComponent,
    StockFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormBuilder
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
