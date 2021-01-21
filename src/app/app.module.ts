import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ApiService } from './api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Service1Component } from './service/service1/service1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    AboutComponent,
    ServiceComponent,
    Service1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
