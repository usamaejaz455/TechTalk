require("dotenv").config();
const express= require("express");
const cors= require("cors");
const app = express();
const authRoute=require("./router/auth-router");
const contactRoute=require("./router/contact-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");


//adding middleware

// Handling Cors

const corsOptions={
    origin: "http://localhost:5173",
    method: "GET, POST, PUT, DELETE, PATCH,HEAD",
    credentials: true,
};

app.use(cors());

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
