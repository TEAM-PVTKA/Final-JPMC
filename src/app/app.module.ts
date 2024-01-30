import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CommonModule } from '@angular/common';

import { HighchartsChartModule } from 'highcharts-angular';
import { HeaderComponent } from './header/header.component';
import { AlertsComponent } from './alerts/alerts.component';
import { CardsComponent } from './cards/cards.component';
import { LimitsComponent } from './limits/limits.component';
import { LoginComponent } from './login/login.component';
import { CouponsComponent } from './coupons/coupons.component';
import { DataComponent } from './data/data.component';
import { SavingrecommendationsComponent } from './savingrecommendations/savingrecommendations.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AlertsComponent,
    CardsComponent,
    LimitsComponent,
    LoginComponent,
    CouponsComponent,
    DataComponent,
    SavingrecommendationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    CommonModule,

    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent, HomeComponent]
})
export class AppModule { }
