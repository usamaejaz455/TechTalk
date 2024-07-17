const mongoose = require('mongoose');
const { Schema } = mongoose;
const jwt = require('jsonwebtoken');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
});


userSchema.methods.generateToken = async function() {
    try {
        return jwt.sign({
            UserId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
        },
        process.env.JWT_SECRET_KEY,{
            expiresIn: '30d',
        }
        );
    } catch (e) {
        console.error("Error generating token", e);
        throw new Error("Server Error");
    }
};

// define the model or collection name
const User = mongoose.model("User", userSchema);

module.exports = User;