import { NextResponse, NextRequest } from "next/server"
import {Order} from "@/models/cart.model";
import Database from "@/lib/database";
export async function GET(){
    return Response.json({message : "This is get"})
}

export async function POST(req : NextRequest){
    const data  = await req.json();
    await Database()
    const order = await Order.findOne({Email : `${data.email}`});
    //console.log(order.cartProducts);
    if(order){
        return Response.json({CartProducts : order.cartProducts, Delivered : true});
    }
    else{
        return Response.json({message : "No order exists"
        })
    }
    
}