const {z} = require("zod");

const signupSchema = z.object({
    username:z
    .string({required_error: "Name is Required"})
    .trim()
    .min(3, "Name must be at least 3 characters long")
    .max(20, "Name can't be more than 20 characters long"),
    email: z
    .string({required_error: "Email is Required"})
    .trim()
    .email({message: "Please enter a valid email address"})
    .min(3, "Email must be at least 3 characters long")
    .max(50, "Email can't be more than 50 characters long"),
    phone: z
    .string({required_error: "Phone Number is Required"})
    .trim()
    .min(10, "Phone Number must be at least 10 digits long")
    .max(15, "Phone Number can't be more than 15 digits long"),
    password: z
    .string({required_error: "Password is Required"})
    .min(8, "Password must be at least 8 characters long")
    .max(100, "Password can't be more than 100 characters long"),
});

module.exports=signupSchema;