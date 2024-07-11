import { model, Schema } from "mongoose";

export interface Food{
    id:string;
    name:string;
    price:number;
    tags:string[];
    favorite:boolean;
    stars:number;
    imageUrl:string;
    origins:string[];
    cookTime:string;
}

export const FoodSchema = new Schema<Food>(
    {
        name: {type:String,required:true},
        price: {type:Number,required:true},
        tags: {type:[String]},
        favorite: {type:Boolean,default:false},
        stars: {type:Number,required:true},
        imageUrl: {type:String,required:true},
        origins: {type:[String],required:true},
        cookTime: {type:String,required:true}
    },{
        toJSON:{
            virtuals:true // for setting the IDs dynamically
        },
        toObject:{
            virtuals:true // when you get the value from database and want to work with it
        },
        timestamps:true // To know when it is created and updated (observe the activity)
    }
);

export const FoodModel = model<Food>('food',FoodSchema);