import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { Food } from '../../../shared/models/food';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../../services/cart.service';
import { NotFoundComponent } from '../../partials/not-found/not-found.component';


@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [RouterLink,CurrencyPipe,NotFoundComponent],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent {

  food!:Food;

  constructor(activatedRoute:ActivatedRoute,foodService:FoodService,private cartservice:CartService,private router:Router){
    activatedRoute.params.subscribe((params)=>{
      if(params['id']){
        this.food = foodService.getFoodById(params['id']);
      }
    })
  }

  addToCart(){
    this.cartservice.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

}
