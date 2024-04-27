'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FcEnteringHeavenAlive } from "react-icons/fc";
export default function Herosection(){
    const clickhandler = () => {
        window.location.href = '/product';
    }
    return(
        <section className = "w-full bg-hero-pattern   relative py-16 px-12 text-left space-y-6 h-full">
            <div className = "w-full  h-full z-0"/>
           <div className = "w-full h-full space-y-6 z-100">
                <h1 className = "text-rose-400 drop-shadow-md new sm:text-5xl bg-white text-2xl rounded-lg px-4 py-2 w-fit font-semibold">INDULGE IN</h1>
                <h1 className = "text-rose-400 drop-shadow-md new sm:text-5xl bg-white text-2xl rounded-lg px-4 py-2 w-fit font-semibold">HEAVENLY </h1>
                <h1 className = "text-rose-400 drop-shadow-md new sm:text-5xl bg-white text-2xl rounded-lg px-4 py-2 w-fit font-semibold">SWEET DELIGHTS</h1>

                <p className = "text-red-700 px-4 py-2 rounded-lg w-fit bg-white font-serif text-lg">Cakes and Pastries for you from the Pastry Palace</p>
                <Button className = "bg-rose-700 cursor-pointer mx-4 z-10" onClick={clickhandler} variant={'link'}>Our Products</Button>
           </div>
        </section>
    )
}


//<Image className = "absolute top-0 left-4" src = "https://images.unsplash.com/photo-1559620192-032c4bc4674e?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt = "picture1" width = {300} height={300} />
//style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;"><span class="d-xl-block">Sweet Bakery offers the best</span><span class="d-xl-block">cakes and sweets for you.</span></h4><a class="button button-lg button-shadow-2 button-primary button-zakaria wow fadeInUp" href="grid-shop.html" style="visibility: visible; animation-name: fadeInUp;"
//style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInLeft;"