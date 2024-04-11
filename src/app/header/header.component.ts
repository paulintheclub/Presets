import {Component, OnInit, OnDestroy} from '@angular/core';
import {CartService} from "../services/cart.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  isMenuOpen = false;
  itemsCount!: number;
  private subscription: Subscription = new Subscription();
  screenWidth!: number;
  constructor(private cartService: CartService) { }
  ngOnInit(): void {
    this.subscription.add(this.cartService.getItemsCount().subscribe(count => {
      this.itemsCount = count;
    }));
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
    toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.screenWidth = window.innerWidth;
      if (this.isMenuOpen && this.screenWidth < 680) {

    document.body.style.overflow = 'hidden';
  } else {

    document.body.style.overflow = 'auto';
  }
  }

}
