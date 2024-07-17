const Contact=require("../models/contact-model");

const contactForm=async(req,res)=>{
    try{
        const responce=req.body;
        await Contact.create(responce);
        return res.status(200).json({message: "message sent successfully"})
    }

    catch(error){
        console.error(error);
        return res.status(500).json({message: "Message could not be sent"})
    }
};

module.exports=contactForm;