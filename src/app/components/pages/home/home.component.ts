import { Component } from '@angular/core';
import { Food } from '../../../shared/models/food';
import { FoodService } from '../../../services/food.service';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SearchComponent } from '../../partials/search/search.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,CurrencyPipe,SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  foods:Food[]=[];
  constructor(private foodService:FoodService,private activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params)=>{
      if(params['searchTerm']){
        this.foods = this.foodService.getAllFoodsBySearchTerm(params['searchTerm']);
      }else{
        this.foods=this.foodService.getAll();
      }
    })
    
  }

  

}
