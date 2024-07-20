const User=require('../models/user-model');
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");

const home = async(req,res)=>{
    try{
        res
        .status(200)
        .send("Welcome to Home Page");

    }catch(error){
        res.status(400).send({msg:"Page not Found"});
    }
};
const register=async(req,res)=>{
    try{
    console.log(req.body);
    const {username,email,phone,password}=req.body;
    const userExists=await User.findOne({email});

    if(userExists){
        return res.status(400).json({msg:"User already exists"});
    }

    const saltRound=10;
    const hashedPassword=await bcrypt.hash(password,saltRound);

    const userCreated= await User.create({username,email,phone,password:hashedPassword});
        res
        .status(201)
        .json({msg:"Registration Successful", token: await userCreated.generateToken(),
            userId: userCreated._id.toString(),
        });
     }catch(error){
        // res.status(500).json("Internal server error");
        next(error);
    }
}

const login=async(req, res,) => {
    try {
        const { email, password } = req.body;

        const userExists = await User.findOne({ email: email});

        if (!userExists) {
            return res.status(400).json({ msg: "Invalid Credentials" });
        }

         const user= await bcrypt.compare(password, userExists.password);

        //const user = await userExists.comparePassword(password);

        if(user){
            res
            .status(200)
            .json({msg:"Login Successful", token: await userExists.generateToken(),
                userId: userExists._id.toString(),
            });
        }else{
            return res.status(401).json({ msg: "Invalid Credentials" });
        }

    } catch (e) {
        res.status(500).json("Internal server error");
    }
}

// to send user data- user logic

const user=async(req,res)=>{
    try{
       const userData=req.user;
       console.log(userData);
       return res
        .status(200)
        .json({userData});
    }catch(error){
        res.status(500).json("Internal server error");
    }
};

module.exports={home,register,login,user};