const express=require("express");
const router=express.Router();
const contactForm=require("../controllers/contact-controller");

// Importing routes

router.route("/contact").post(contactForm);



module.exports = router;