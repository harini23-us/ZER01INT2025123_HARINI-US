import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: false
    },
    DOB: {
        type: Date,
        required: false
    },
    Blog: {
        type: mongoose.Schema.ObjectId,
        ref: "Blog"
    },
    followesCount: {
        type: Number,
        required: false,
        default: 0
    },
    followingCount: {
        type: Number,
        required: false,
        default: 0
    },
    Follows: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "User"
        }
    ],
    AccountCreatedAt: {
        type: Date,
        default: Date.now
    },
    SavedBlog: {
        type: mongoose.Schema.ObjectId,
        ref: "Blog"
    },
    Messagers: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    otp: {
        type: Number,
        required: false
    },
    otpExpire: {
        type: Date,
        required: false
    }
});

const UserModel = mongoose.model("UserModel", UserSchema);
export default UserModel;
