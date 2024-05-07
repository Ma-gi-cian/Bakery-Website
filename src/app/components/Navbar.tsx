'use client'
import { Button } from "@/components/ui/button";
import Link from "next/link"
import { usePathname } from "next/navigation";

import {CiUser} from "react-icons/ci";
import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import {GiCupcake} from "react-icons/gi";
import { useSession, signOut, signIn, getSession } from "next-auth/react";
export default   function Navbar(){
    const {data : session} =  useSession();
    const ButtonHandler = (path : string) => {
        window.location.href = path;
    }

    async function handlerGoogleSignIn(){
        //console.log("clicked Google signin")
        signIn('google', {callbackUrl : 'http://localhost:3000'})
    }
    
    const pathname = usePathname();
    const classnameFunction = (name : string) => {
        
        if(name == pathname){
            return `text-lg text-rose-400`;
            //ButtonHandler('/auth/Sign-up')
        }
        else{
            return `text-lg`;
        }
    }
    const [isloggedIn, setIsLoggedIn] = useState(false)
    return(
        <header className = "w-full">
            <div className = "w-full  flex items-center justify-between my-2">
                <div className = "w-full sm:w-fit">
                    <Link className = "flex items-center text-lg sm:text-2xl justify-center text-red-800  gap-2 font-curve md:text-3xl" href = "/">The Pastery <span className = "text-rose-800 text-3xl"><GiCupcake/></span> Palace</Link>
                </div>
                {session ? (<div className = "hidden sm:contents"><div className = " flex  items-center justify-center gap-4 rounded-md p-2"><Link className = "flex items-center justify-center gap-4" href = "/"><CiUser/><div className = "flex items-center justify-center  gap-2"><p>{session?.user?.name}</p></div></Link><Button onClick = {() => signOut()} variant={'destructive'}>LogOut</Button></div></div>) : (<div className = "hidden sm:contents"><div className = "flex items-center justify-center gap-4">
                    <Button onClick = {() => ButtonHandler('/auth/Sign-up')}>Sign Up</Button>
                    <Button onClick = {() => ButtonHandler('/auth/Login')}>Login</Button>
                    </div></div>)}
            </div>
            <div className = "hidden md:contents text-black border-gray-300 border-y-[1px] min-h-[4rem]  sticky z-10 top-0  py-2 font-mono w-full bg-white">
                <div className = "flex items-center justify-between px-4 gap-4 my-4 ">
                    <div className = "flex items-center justify-between w-[75%]">
                        <Link href = "/" className = {classnameFunction('/')}>Home</Link>
                        <Link href = "/product" className = {classnameFunction('/product')}>Our Products</Link>
                        <Link href = "/Order" className = {classnameFunction('/Order')}>Your Orders</Link>
                    </div>
                    <Link href = "/cart" className = {`flex items-center border-2 border-rose-300 hover:bg-white hover:text-rose-300 px-4 py-2 bg-rose-300 text-white rounded-md  justify-center gap-2 ${classnameFunction('/cart')}`} ><CiShoppingCart className = "text-xl"/>Cart</Link>
                </div>
            </div>
        </header>
    )
}

//`text-lg flex items-center border-2 border-rose-300 px-4 py-2 rounded-md  justify-center gap-2 `