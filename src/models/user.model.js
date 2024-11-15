import {model, models, Schema } from 'mongoose';

const UserSchema = new Schema({
    name : {
        type : String, 
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    }
}, {timestamps : true});

export const User = models?.User || model('User', UserSchema);