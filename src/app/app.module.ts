import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactDetailsComponent } from './main/contact-details/contact-details.component';
import { WelcomePageComponent } from './main/welcome-page/welcome-page.component';
import { PresetsComponent } from './presets/presets.component';
import { PresetCardComponent } from './preset-card/preset-card.component';
import { GuideComponent } from './guide/guide.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { CartComponent } from './cart/cart.component';
import {ActivatedRoute, Router} from "@angular/router";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import { LoaderComponent } from './loader/loader.component';
import { CartPayComponent } from './cart-pay/cart-pay.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    ContactDetailsComponent,
    WelcomePageComponent,
    PresetsComponent,
    PresetCardComponent,
    GuideComponent,
    AboutComponent,
    CartComponent,
    LoaderComponent,
    CartPayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    provideClientHydration(),
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
