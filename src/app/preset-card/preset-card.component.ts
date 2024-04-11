import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {PresetNavigationService} from "../services/preset-navigation.service";
import {Preset} from "../models/preset";
import {CartService} from "../services/cart.service";
import {PresetsService} from "../services/presets.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-preset-card',
  templateUrl: './preset-card.component.html',
  styleUrl: './preset-card.component.scss'
})
export class PresetCardComponent implements OnInit{
  @ViewChild('slider') slider!: ElementRef;
  @ViewChild('imagePart') imagePart!: ElementRef;
  @ViewChild('imgAfter') imgAfter!: ElementRef;
  preset: Preset | undefined = undefined;
  isDragging = false;
  showCopiedMessage: boolean = false;
  activeTab: 'description' | 'instruction' | 'recommendation' = 'description';

  constructor(private presetNavigationService: PresetNavigationService, private cartService: CartService,  private route: ActivatedRoute,
  private presetsService: PresetsService) {
  }
    ngOnInit() {
    this.presetNavigationService.currentPreset.subscribe(preset => this.preset = preset);
      this.route.params.subscribe(params => {
    const id = +params['id'];
    this.preset = this.presetsService.getPresetById(id);
  });
  }

addToCart() {
  if (this.preset) {
    this.cartService.addToCart(this.preset);
    localStorage.setItem('cart', JSON.stringify(this.cartService.getItems()));
  }

  this.triggerMessageAnimation();
}

  triggerMessageAnimation() {
    this.showCopiedMessage = true;
    requestAnimationFrame(() => {
      const messageElement = document.querySelector('.add-to-cart-message');
      messageElement?.classList.add('show');
      setTimeout(() => {
        messageElement?.classList.add('hide');
        setTimeout(() => {
          this.showCopiedMessage = false;
          messageElement?.classList.remove('show', 'hide');
        }, 500);
      }, 2000);
    });
  }



  setActiveTab(tab: 'description' | 'instruction' | 'recommendation'): void {
    this.activeTab = tab;
  }



  startDragging(event: MouseEvent): void {
    this.isDragging = true;
    event.preventDefault();
  }

  @HostListener('document:mouseup', ['$event'])
  stopDragging(event: MouseEvent): void {
    if (this.isDragging) {
      this.isDragging = false;
    }
  }

  @HostListener('document:mousemove', ['$event'])
  drag(event: MouseEvent): void {
    if (this.isDragging) {
      const rect = this.imagePart.nativeElement.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const width = this.imagePart.nativeElement.offsetWidth;
      const position = (x / width) * 100;
      if (position >= 0 && position <= 100) {
        this.slider.nativeElement.style.left = position + '%';
        this.imgAfter.nativeElement.style.clipPath = `inset(0 ${100 - position}% 0 0)`;
      }
    }
  }

}
