import { Inject, Injectable,PLATFORM_ID } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../shared/models/food';
import { CartItem } from '../shared/models/cartItem';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  private getCartfromLocalStorage():Cart{
    if(isPlatformBrowser(this.platformId)){
      const cartJson = localStorage.getItem('cart');
    return cartJson? JSON.parse( cartJson): new Cart();
    }else{
      return this.cart;
    }
    
   }

  private cart:Cart = this.getCartfromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

   addToCart(food:Food){
      let cartItems = this.cart.items.find(item=>item.food.id ===food.id)
      if(cartItems) return;
      this.cart.items.push(new CartItem(food));
      this.setCartToLocalStorge();
   }

   removeFromCart(foodId:string){
    this.cart.items = this.cart.items.filter(item=>item.food.id!=foodId);
    this.setCartToLocalStorge();
   }

   changeQuantity(foodId:string,quantity:number){
    let cartItem = this.cart.items.find(item=>item.food.id ===foodId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.food.price;
    this.setCartToLocalStorge();
   }

   clearCart(){
    this.cart = new Cart();
    this.setCartToLocalStorge();
   }

   getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable();
   }


   private setCartToLocalStorge(){
    this.cart.totalPrice = this.cart.items
    .reduce((prevSum,currentItem)=>prevSum+currentItem.price,0);
    this.cart.totalCount = this.cart.items
    .reduce((prevSum,currentItem)=>prevSum+currentItem.quantity,0);
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('cart',cartJson);
    this.cartSubject.next(this.cart);
   }

   


}
