import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { Food } from '../../../shared/models/food';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [RouterLink,CurrencyPipe],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent {

  food!:Food;

  constructor(activatedRoute:ActivatedRoute,foodService:FoodService){
    activatedRoute.params.subscribe((params)=>{
      if(params['id']){
        this.food = foodService.getFoodById(params['id']);
      }
    })
  }

}
