'use client'
import Image from "next/image"
import { Button } from "@/components/ui/button"
export default function Offer(){
    const data = [
        {
            id : 1,
            title : "Customized Birthday Cakes",
            text : "We provide all the trendy and favorite designs. Our cakes makes sure that the cake matches you on your special day.",
            image_url : "https://images.unsplash.com/photo-1545696563-af8f6ec2295a?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id : 2,
            title : "Pastries and Cup Cakes",
            text : "We provide a variety of cupcakes and pastries for any party made with high-quality natural ingredients and no preservatives.",
            image_url : "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id : 3,
            title : "Wedding Cakes",
            text : "Want to make your wedding unforgettable? Then you need to order a unique wedding cake at the Pastry Palace.",
            image_url : "https://images.unsplash.com/photo-1623428454614-abaf00244e52?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]

    const clickHandler = () => {
        window.location.href = "/product";
    }
    return(
        <section className = "w-full ">
            <div className = "w-full flex items-center text-lg sm:text-3xl gap-4 mt-8 justify-center">
                <div className = "bg-rose-400 h-[1px] w-1/5 rounded-md"/>
                <h1 className = "text-center new  text-rose-400">What We Offer</h1>
                <div className = "bg-rose-400 h-[1px] w-1/5 rounded-md"/>
            </div>
            <div className = "grid sm:grid-cols-3 grid-cols-1 gap-8 w-full py-4">
                {data.map((d) => (
                    <div key = {d.id} className = "flex py-2 items-center mt-4 justify-center gap-4 flex-col rounded-md bg-rose-100 ">
                        <div className = "border-2 bg-white border-rose-300 p-2 rounded-md">
                            <Image className = "rounded-xl" src = {d.image_url} alt = {d.title} width = {300} height = {300}/>
                        </div>
                        <div>
                            <p className = "text-center uppercase font-medium text-xl">{d.title}</p>
                            <div className = "px-8 py-2 font-serif "><p className = "text-center">{d.text}</p></div>
                        </div>
                        <Button className = "" onClick = {clickHandler}>View The Item</Button>
                    </div>
                ))}
            </div>
        </section>
    )
}