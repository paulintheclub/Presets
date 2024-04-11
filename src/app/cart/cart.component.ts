import {Component, OnInit} from '@angular/core';
import {CartService} from "../services/cart.service";
import {Preset} from "../models/preset";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
  items: Preset[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }
removeItem(itemId: number) {
  this.cartService.removeItem(itemId);
  this.items = this.cartService.getItems();
}
getTotal (){
    return this.cartService.getTotalPrice();
}

clearCart() {
  this.cartService.clearCart();
  this.items = [];
}


}
