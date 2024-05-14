'use server'
import mongoose from 'mongoose'

//const mongodb = "mongodb+srv://user_1:fHDeYJGuGVZVEapu@18thapril.bzfiqts.mongodb.net/?retryWrites=true&w=majority&appName=18thapril"

async function Database(){
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URL as string);
}

export default Database;