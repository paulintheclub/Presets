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
    // Проверяем, существует ли уже этот пресет в корзине
    const existingItem = this.items.find(preset => preset.id === item.id);
    if (!existingItem) {
      this.items.push(item);
      // Обновляем localStorage после добавления нового элемента
      localStorage.setItem('cart', JSON.stringify(this.items));
      this.updateItemsCount();
    } else {
      // Товар уже в корзине, можно уведомить пользователя
      alert("This item is already in your cart.");
    }
  }
  getItems(): Preset[] {
    return this.items;
  }
  getTotalPrice(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

// В CartService

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
    this.itemsCount.next(this.items.length); // Уведомляем подписчиков об изменении
  }
private loadCart() {
  if (typeof window !== 'undefined') { // Проверяем, что код выполняется в браузере
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.items = JSON.parse(savedCart);
      this.updateItemsCount();
    }
  }
}

}
