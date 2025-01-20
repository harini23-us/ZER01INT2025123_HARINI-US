import mongoose from "mongoose"

const FollowSchema = new mongoose.Schema({
    followerId: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    followingId: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const Follow = mongoose.model("Follow", FollowSchema);
export default Follow;
