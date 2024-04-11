import { Component } from '@angular/core';
import {Preset} from "../models/preset";
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-cart-pay',
  templateUrl: './cart-pay.component.html',
  styleUrl: './cart-pay.component.scss'
})
export class CartPayComponent {
  items: Preset[] = [];
  paymentMethod: boolean = false;
  activePaymentMethod: 'card' | 'paypal' = 'card';
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }
  // В CartComponent
removeItem(itemId: number) {
  this.cartService.removeItem(itemId);
  this.items = this.cartService.getItems();
}
getTotal (){
    return this.cartService.getTotalPrice();
}

  setActivePaymentMethod(method: 'card' | 'paypal') {
    this.activePaymentMethod = method;
  }
clearCart() {
  this.cartService.clearCart();
  this.items = [];
}
}
