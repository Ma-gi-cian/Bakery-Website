'use client'
import { useAppDispatch, useAppSelector } from "@/hooks/storeHooks";

import {loadStripe} from "@stripe/stripe-js";
import Image from "next/image";
import { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import Link from "next/link";
import { increaseHandler, minusHandler, deleteHandler } from "@/redux/features/cart/cart";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Button } from "@/components/ui/button";
import { ProtectedRoutes } from "@/lib/getAuthentication";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import { stripe } from "@/lib/get-stripe";

const datas = ['Image', 'Product', 'Price', 'Quantity', 'How to Customize']
export default function Home(){
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_PUBLISHABLE_KEY as string)
    const {cartItems} = useAppSelector(state => state.cart);
    const dispatch = useAppDispatch();
    const {data : session} = useSession();
    const {toast} = useToast();
    
    const increase = ( name: string) => {
        
        dispatch(increaseHandler({name}))
        console.log("Increase Handler")
    }
    useEffect(() => {
        toast({
            variant : "destructive",
            title : "Please Login to access cart.",
            description : "Redirecting  to Login Page."
        })

        setTimeout(ProtectedRoutes, 2000);
    }, [])
    const decreaseHandler = (name : string) => {
        dispatch(minusHandler({name}));
        console.log("Decrese clicked.")
    }
    const DeleteHandler = (name : string) =>{
        dispatch(deleteHandler({name}));
    }

    async function createOrder(address : string, products : object){
        await axios.post('/api/Order', {
            name : session?.user?.name,
            email : session?.user?.email,
            address : address,
            Products : products
        }).then((response) => {
            console.log(response);
        })
    }

    const placeButton = async(address : string, products : object) => {
        const stripeCheckout = await stripePromise
        const stripesession  = await axios.post('/api/checkout', {
            name : session?.user?.name,
            email : session?.user?.email,
            address : address,
            Products : products
        })
        try{
            //await stripeCheckout?.redirectToCheckout({sess})
            //console.log(stripesession.data.stripeSession.id);
            await stripeCheckout?.redirectToCheckout({sessionId : stripesession.data.stripeSession.id})
        }
        catch(error){
            console.log(error);
        }
        console.log("clicked -- placeButton");
        
        console.log("Order Placed Check database");
        toast({
            variant : "default",
            title : "created order"
        })
    }
   

    var total = 0 ;
    cartItems.map((item) => {
        total += item.price * item.quantity;
    })
    return(
        <main>
            {cartItems.length > 0 ? (
                <section className = "w-full space-y-6 py-8">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                {datas.map((data, index) => (
                                    <TableHead className = "text-center" key = {index}>
                                        {data}
                                    </TableHead>
                                ) )}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {cartItems.map((item, index) => (
                                <TableRow key = {index}>
                                    <TableCell className = "flex items-center justify-center">
                                        <div><Image className = "rounded-md" src = {item.image} alt = {item.name} width = {100} height = {100} /></div>
                                    </TableCell>
                                    <TableCell className = "text-center font-medium"><p>{item.name}</p></TableCell>
                                    <TableCell className = "text-center"><p>${item.price}</p></TableCell>
                                    <TableCell className = "text-center">
                                        <div className = "flex items-center justify-center w-1/2 flex-col gap-4">
                                            <div className = "flex items-center justify-between w-full">
                                                <Button onClick = {() =>increase(item.name)}>+</Button>
                                                <p>{item.quantity}</p>
                                                <Button onClick = {() => decreaseHandler(item.name)}>-</Button>
                                            </div>
                                            <Button onClick = {() => DeleteHandler(item.name)} className = "text-red-700"><MdDelete/></Button>
                                        </div></TableCell>
                                    <TableCell className = "w-fit">{item.customizable ? (<div className = "flex  items-center  justify-center"><textarea className = "border-2 p-4 border-black"/></div>) : (<><p className = "text-center">Product is not customizable</p></>)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <div className = "flex items-center gap-2 justify-center flex-col">
                        <p className = "text-xl font-semibold">Your total amount is : ${total}</p>
                        <Button onClick = {() => placeButton('jaigaon', cartItems)} className = "bg-green-800">Proceed to Pay</Button>
                    </div>
                </section>
                
            ) : (<h1 className = "text-center mt-4 new text-xl">Please add Items to your cart from the <Link className = "text-blue-500 underline" href = "/product">Products</Link> page.</h1>)}

        </main>
    );
}



// <DataTable columns={columns} data = {cartItems} />