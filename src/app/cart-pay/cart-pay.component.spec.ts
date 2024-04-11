import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPayComponent } from './cart-pay.component';

describe('CartPayComponent', () => {
  let component: CartPayComponent;
  let fixture: ComponentFixture<CartPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartPayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
