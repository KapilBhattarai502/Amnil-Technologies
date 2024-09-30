import mongoose from 'mongoose'

const {Schema}=mongoose;

const todoSchema=new Schema({

    task:{
        type:String,
        required:true,
    },
    completed:{
        type:Boolean,
        default:false,
    }
    
})

export const todos=mongoose.model('todos',todoSchema);
