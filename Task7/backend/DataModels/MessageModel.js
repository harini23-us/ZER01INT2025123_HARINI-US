import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    receiverId: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    messages: {
        type: String,
        required: true
    },
    isRead: {
        type: Boolean,
        default: false
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    likes: {
        type: Number,
        default: 0
    }
});

const Message = mongoose.model("Message", MessageSchema);
export default Message;
