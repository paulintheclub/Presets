import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {PresetsComponent} from "./presets/presets.component";
import {PresetCardComponent} from "./preset-card/preset-card.component";
import {GuideComponent} from "./guide/guide.component";
import {AboutComponent} from "./about/about.component";
import {CartComponent} from "./cart/cart.component";
import {CartPayComponent} from "./cart-pay/cart-pay.component";

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'presets', component: PresetsComponent},
  { path: 'preset-card/:id', component: PresetCardComponent },
  {path: 'guide', component: GuideComponent},
  {path: 'about', component: AboutComponent},
  {path: 'cart', component: CartComponent},
  {path: 'cart-pay', component: CartPayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
