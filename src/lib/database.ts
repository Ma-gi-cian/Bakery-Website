'use server'
import mongoose from 'mongoose'

const mongodb = "mongodb+srv://user_1:fHDeYJGuGVZVEapu@18thapril.bzfiqts.mongodb.net/?retryWrites=true&w=majority&appName=18thapril"

async function Database(){
    const client = await mongoose.connect(mongodb)
    if(client){
        console.log("DataBase connected");
    }
    else{
        console.log("database not connected.");
    }
}

export default Database;