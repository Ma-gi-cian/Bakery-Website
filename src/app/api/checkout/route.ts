import Stripe from "stripe"
import { Order } from "@/models/cart.model";
import Database from '@/lib/database';
import {NextResponse} from 'next/server';
import {stripe} from '@/lib/get-stripe'

export async function POST(req : Request){
    try{
        const data  = await req.json();
        const name = data.name;
        const email = data.email;
        const address = data.address;
        const products = data.Products;
     
        //console.log({name : name, email : email, address : address, products : products });
        const line_items : Stripe.Checkout.SessionCreateParams.LineItem[] = [];
        products.forEach((product : any) => (
            line_items.push({
                quantity : product.quantity,
                price_data : {
                    currency : 'USD',
                    product_data : {
                        name : product.name,
                        images : [product.image]
                    },
                    unit_amount : product.price * 100
                }
            })
        ));
        await Database();
        await Order.create({username : name, Address :  address, Email : email, cartProducts : products, });
        try{
            const session = await stripe.checkout.sessions.create({
                mode: 'payment',
                billing_address_collection : "required",
                phone_number_collection : {
                    enabled : true
                },
                success_url : "http://localhost:3000/product",
                cancel_url : 'http://localhost:3000/home',
                line_items : line_items,
                payment_method_types : ["card"]
            })
            //console.log(session);
            return NextResponse.json({stripeSession : session}, {status : 200})
        }
        catch(error){
            console.log(error);
            
        }
    }
    catch(error){
        console.log(error);
        return new NextResponse("Internal Error", {status : 500})
    }
}