import { Router } from "express";
import { sample_Users } from "../data";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import { User, UserModel } from "../models/user.model";
import { HTTP_BAD_REQUEST } from "../constants/http_status";
import bcrypt from 'bcryptjs';

const router = Router();

router.get("/seed", asyncHandler (async(req, res) => {
    const userCount = await UserModel.countDocuments();
    if(userCount>0){
        res.send("Seed is already done");
        return;
    }
    //Using async make the code much more cleaner than using then function
    await UserModel.create(sample_Users);
    res.send("Seed is Done!");
}))

router.post("/login", asyncHandler(
    async(req, res) => {
        const { email, password } = req.body;
        const user = await UserModel.findOne({email,password})
        if (user) {
            res.send(generateTokenResponse(user));
        } else {
            res.status(HTTP_BAD_REQUEST).send("Username or Password is not valid");
        }
    }
));

router.post('/register',asyncHandler(async(req,res)=>{
    const{name,email,password,address}=req.body;
    const user = await UserModel.findOne({email});
    if(user){
        res.status(HTTP_BAD_REQUEST).send("User already exist, please Login!");
        return;
    }//if user is already regsitered
    const encryptedPassword = await bcrypt.hash(password,10);

    const newUser:User={
        id:'',
        name,
        email:email.toLowerCase(),
        password:encryptedPassword,
        address,
        isAdmin:false,
    }

    const dbUser = await UserModel.create(newUser);
    res.send(generateTokenResponse(dbUser));

}))

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

export default router;


