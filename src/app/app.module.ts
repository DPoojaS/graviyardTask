import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbordComponent } from './shared/component/dashbord/dashbord.component';
import { GooglecardComponent } from './shared/component/googlecard/googlecard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    GooglecardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
