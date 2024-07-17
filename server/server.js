require("dotenv").config();
const express= require("express");
const app = express();
const authRoute=require("./router/auth-router");
const contactRoute=require("./router/contact-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");


//adding middleware

app.use(express.json());
//adding routes

app.use("/",authRoute);

app.use("/form",contactRoute);

app.use(errorMiddleware);

const PORT=5000;

connectDb().then(()=>{
app.listen(PORT,()=>{
    console.log(`Server is Running on PORT: ${PORT}`);
})
});
