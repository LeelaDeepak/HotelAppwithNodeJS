import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { UserService } from '../../../services/user.service';
import { User } from '../../../shared/models/user';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private route:Router,cartService:CartService,private userService:UserService){
    cartService.getCartObservable().subscribe((newCart)=>{
      if (newCart && newCart.totalCount !== undefined) {
        this.cartQuantity = newCart.totalCount;
      }
    })

    userService.userObservable.subscribe((newUser)=>{
      this.user = newUser;
    })
  }

  cartQuantity=0;
  user!:User;
  gotoHome(){
    this.route.navigateByUrl('/');
  }

  logOutUser(){
    this.userService.logOut();
  }

  get isAuth(){
    return this.user.id;
  }
}
