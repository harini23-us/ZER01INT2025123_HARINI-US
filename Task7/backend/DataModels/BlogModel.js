import mongoose, { mongo } from "mongoose"; 

const  BlogSchema = new mongoose.Schema(
    {
        UserId:{
            
            type:mongoose.Schema.ObjectId,
            ref:"User",
            required:true,
        },
        BlogId:{
            type:String,
            required:true

        },
        Content:{
            type:String,
            required:true
        },
        Comments:{
            type:String,
            required:false
        },
        Likes:{
            type:Number,
            required:true,
            default:0,

        },
        ViewersCount:{
            type:Number,
            requied:true,
            default:0
        }
    }

)
const Blog =mongoose.model('Blog',BlogSchema);
export default Blog;