// cart.service.ts
import { Injectable } from '@angular/core';
import { Preset } from '../models/preset';
import {BehaviorSubject, Observable} from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: Preset[] = [];
  private itemsCount = new BehaviorSubject<number>(0);
  constructor() {
    this.loadCart();
    this.updateItemsCount();
  }

  addToCart(item: Preset) {
    const existingItem = this.items.find(preset => preset.id === item.id);
    if (!existingItem) {
      this.items.push(item);
      localStorage.setItem('cart', JSON.stringify(this.items));
      this.updateItemsCount();
    } else {
      alert("This item is already in your cart.");
    }
  }
  getItems(): Preset[] {
    return this.items;
  }
  getTotalPrice(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }


  removeItem(itemId: number) {
    this.items = this.items.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(this.items)); // Обновляем localStorage
    this.updateItemsCount();
  }

  clearCart() {
    this.items = [];
    localStorage.removeItem('cart'); // Очищаем localStorage
    this.updateItemsCount();
    return this.items;
  }

  getItemsCount(): Observable<number> {
    return this.itemsCount.asObservable();
  }
  private updateItemsCount() {
    this.itemsCount.next(this.items.length);
  }
private loadCart() {
  if (typeof window !== 'undefined') {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.items = JSON.parse(savedCart);
      this.updateItemsCount();
    }
  }
}

}
