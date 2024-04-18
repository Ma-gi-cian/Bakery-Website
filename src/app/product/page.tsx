'use client'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Data from "@/Data"
import { useAppDispatch, useAppSelector } from "@/hooks/storeHooks";
import { addToCart } from "@/redux/features/cart/cart";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
export default function Home(){

    const dispatch = useAppDispatch();
    const {toast} = useToast();
    /*
    id : number,
    name : string,
    image : string, 
    price : number,
    quantity : number,
    */

    const birthday = {
        id : 7,
        customizable: true,
        price : 13,
        name : "Birthday Cake",
        url : "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        quantity : 1,
    }

    const ReduxButtonHandler = (id : number, name : string, image : string, price : number, quantity : 1, customizable : boolean) => {
        const product_data = {
            id : id,
            name : name,
            image : image,
            price : price,
            quantity : 1,
            customizable: customizable
        }
        dispatch(addToCart(product_data));
        toast({
            title : `${product_data.name} added to the Cart`,
        })
        //console.log(product_data)
    }
    return(
        <main className = "space-y-6 flex py-4 items-center justify-center flex-col">
            <h1 className = "text-center new text-3xl">Fresh from the Oven</h1>
            <p className = "text-center text-lg font-serif">We use only the finest ingredients, and we favour organic, sustainable and local produce.</p>
            <p className = "text-center text-lg font-serif">The result is hearfelt goodness with quality baked in.</p>
            <div className = "grid grid-cols-2 gap-8">
                {Data.map((d) => (
                    <div key = {d.id} className = "flex relative bg-rose-50 rounded-lg px-4 py-2 items-center justify-center gap-4 flex-col">
                        <div className = "overflow-hidden bg-white rounded-md p-4 ">
                            <Image className = "w-full rounded-md" src = {d.url} alt = {d.name} width = {300} height = {300} />
                        </div>
                        <div className = "space-y-4">
                            <h3 className = "text-center font-serif">{d.name}</h3>
                            <p className = "text-center underline ">${d.price}</p>
                            <Button onClick = {() => ReduxButtonHandler(d.id, d.name, d.url, d.price, 1, d.customizable)}>Add To Cart</Button>
                        </div>
                        {d.customizable ? (<p className = "absolute top-5 right-5 bg-black text-white p-2 new rounded-md">Customizable</p>) : (<></>)}
                    </div>
                ))}
            </div>
            <div key = {birthday.id} className = "flex bg-rose-50 relative rounded-lg px-4 py-2 items-center justify-center gap-4 flex-col">
                        <div className = "overflow-hidden bg-white rounded-md p-4 ">
                            <Image className = "w-full rounded-md" src = {birthday.url} alt = {birthday.name} width = {300} height = {300} />
                        </div>
                        <div className = "space-y-4">
                            <h3 className = "text-center font-serif">{birthday.name}</h3>
                            <p className = "text-center">${birthday.price}</p>
                            <Button onClick = {() => ReduxButtonHandler(birthday.id, birthday.name, birthday.url, birthday.price, 1, birthday.customizable)}>Add To Cart</Button>
                        </div>
                        <p className = "absolute top-5 right-5 bg-black text-white p-2 new rounded-md">Customizable</p>
                    </div>
        </main>
    )
}