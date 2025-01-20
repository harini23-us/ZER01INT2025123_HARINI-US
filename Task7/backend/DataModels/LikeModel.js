import mongoose from "mongoose"
const LikeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    blogId: {
        type: mongoose.Schema.ObjectId,
        ref: "Blog",
        required: true
    },
    dateOfLike: {
        type: Date,
        default: Date.now
    }
});

const Like = mongoose.model("Like", LikeSchema);
export default Like;
