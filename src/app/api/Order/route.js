'use server'
import { Order } from "@/models/cart.model";
import Database from '@/lib/database';

export async function GET(){
    return Response.json({message : "This is order api."})
}

export async function POST(req){
    const data = await req.json();
    console.log("hello");
    console.log(data);
    const Products = data.Products;
    const username = data.name;
    const email  = data.email;
    const address = data.address;
    if(!Products || !username || !address || !email){
        console.log("Something is missing");
        console.log({Products : Products, username : username, address : address, email : email});
        return Response.json({message : "The server is not getting all the required fields"});
    }
    await Database();
    const orderCreated = await Order.create({username : username, Address :  address, Email : email, cartProducts : Products});
    console.log(orderCreated);
    return Response.json({message : "Order created."})
}