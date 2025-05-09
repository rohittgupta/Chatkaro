import moongoose from "mongoose";
import User from "./user.model.js";

const messageSchema = moongoose.Schema(
    {
        senderId: {
            type: moongoose.Schema.Types.ObjectId, 
            required: User,
            unique: true,
        },
        receiverId:{
            type: moongoose.Schema.Types.ObjectId, 
            required: User,
            unique: true,
        },
        text:{
            type: String, 
        },
        image:{
            type: String,
        }
    }
, {timestamps: true});


const Message = moongoose.model("Message", messageSchema);

export default User;