import {User} from "@/models/user.model";
import Database from '@/lib/database';
import { hashPassword } from '@/lib/auth';

export async function GET(){
    return Response.json({message : "hello world"});
}


export async function POST(req) {
    const data = await req.json();
    console.log("--"+data);
    const { name ,email , password } = data;
    if (!email || !(name.trim()) || !email.includes('@') || !password){
        Response.json({
            message : 
            `Invalid input. Please enter a valid email and password`
        });
    }
    //console.log(`name : ${name}, email : ${email}, password : ${password}`);
    await Database();

    const hashedPassword = await hashPassword(password);
    const  user_data = {
        name : name,
        email : email,
        password : hashedPassword
    };
    const created_user = await User.create({name : name , email : email, password : hashedPassword});
    console.log(`User_data : ${user_data}`)
    return Response.json({message : `${created_user}`})
    //res.status(201).json({message : `User : ${name} with email : ${email} created.`})
    
}
