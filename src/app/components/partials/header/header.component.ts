import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private route:Router,cartService:CartService){
    cartService.getCartObservable().subscribe((newCart)=>{
      if (newCart && newCart.totalCount !== undefined) {
        this.cartQuantity = newCart.totalCount;
      }
    })
  }

  cartQuantity=0;
  gotoHome(){
    this.route.navigateByUrl('/');
  }
}
