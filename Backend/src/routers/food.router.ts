import { Router } from "express";
import asyncHandler from 'express-async-handler';
import { FoodModel } from "../models/food.model";


const router = Router();

router.get("/seed", asyncHandler (async(req, res) => {
    const foodCount = await FoodModel.countDocuments();
    if(foodCount>0){
        res.send("Seed is already done");
        return;
    }
    //Using async make the code much more cleaner than using then function
    await FoodModel.create();
    res.send("Seed is Done!");
}))

router.get("/", asyncHandler(
    async(req, res) => {
        const foods = await FoodModel.find();
        res.send(foods); //get All Foods
    }
))

router.get("/search/:searchTerm",asyncHandler(
    async(req, res) => {//search by food name
        const searchRegex = new RegExp(req.params.searchTerm,'i') // to make the search Term insensitive
       const foods = await FoodModel.find({name:{$regex:searchRegex}})
        res.send(foods);
    }
))

router.get("/tags",asyncHandler(
    async (req, res) => { // get food by tags
        const tags = await FoodModel.aggregate([
            {
                $unwind: "$tags"
            },
            {
                $group: {
                    _id: "$tags",
                    count:{$sum:1}
                }
            },
            {
                $project:{
                    _id:0,
                    name:'$_id',
                    count:'$count',
                }
            }
        ]).sort({count:-1});
        const all = {
            name:"All",
            count:await FoodModel.countDocuments()
        }

        tags.unshift(all);
        res.send(tags);
    }
))

router.get("/tag/:tagName",asyncHandler(
    async(req, res) => { //get food by Tagname
        const foods = await FoodModel.find({tags:req.params.tagName})
        res.send(foods);
    }
))

router.get("/:foodId", asyncHandler(
    async(req, res) => { //get food by ID
        const food = await FoodModel.findById(req.params.foodId)
        res.send(food);
    }
))

export default router;