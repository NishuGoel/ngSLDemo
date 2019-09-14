import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularSLModule} from '../../dist/angular-sl';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, AngularSLModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
