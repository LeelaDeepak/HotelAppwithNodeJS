import express from "express";
import cors from "cors";
import { sample_Users, sample_food, sample_tags } from "./data";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]
}));

app.get("/api/foods", (req, res) => {
    res.send(sample_food); //get All Foods
})

app.get("/api/foods/search/:searchTerm", (req, res) => {//search by food name
    const searchTerm = req.params.searchTerm;
    const foods = sample_food.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
    res.send(foods);
})

app.get("/api/foods/tags", (req, res) => { // get food by tags
    res.send(sample_tags);
})

app.get("/api/foods/tag/:tagName", (req, res) => { //get food by Tagname
    const tagName = req.params.tagName;
    const foods = sample_food.filter(food => food.tags?.includes(tagName));
    res.send(foods);
})

app.get("/api/foods/:foodId", (req, res) => { //get food by ID
    const foodId = req.params.foodId;
    const food = sample_food.find(food => food.id === foodId);
    res.send(food);
})


const port = 5000;
app.listen(port, () => {
    console.log(`Website served on http://localhost:${port}`);
})

app.post("/api/Users/login", (req, res) => {
    const { email, password } = req.body;
    const user = sample_Users.find(user => user.email === email && user.password === password);
    if (user) {
        res.send(generateTokenResponse(user));
    } else {
        res.status(400).send("Username or Password is not valid");
    }
})

const generateTokenResponse = (user: any) => {
    const token = jwt.sign({
        email: user.email,
        isAdmin: user.isAdmin
    }, "SomeRandomText", {
        expiresIn: "30d" //Expires in 30Days
    });
    user.token = token;
    return user;
}


app.listen(port, () => {
    console.log(`Website served on http://localhost:${port}`);
})
