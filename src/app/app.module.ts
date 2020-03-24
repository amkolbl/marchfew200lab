import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavComponent } from './components/nav/nav.component';
import { TipCalculatorComponent } from './components/tip-calculator/tip-calculator.component';
import { TippingService } from './services/tipping.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    NavComponent,
    TipCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TippingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
