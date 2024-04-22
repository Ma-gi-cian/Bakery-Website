'use client'
import { Button } from "@/components/ui/button";
import { CiLogin } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { useToast } from "@/components/ui/use-toast";
import { FormEventHandler, useState } from "react";
import { useSession, signOut, signIn } from "next-auth/react";




import Link from "next/link";
import { redirect } from "next/dist/server/api-utils";
export default function Login(){
    const {toast} = useToast();
    const {data : session} = useSession();
    console.log("session : "+session);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const LoginHandler = async (e : any) => {
        e.preventDefault;
        console.log(`Email : ${email} , password : ${password}`);
        console.log('Button clicked')
        const res : any  = await signIn('credentials', {
            redirect : false,
            email : email,
            password : password
        }, )
        /*
        toast({
            variant : "destructive",
            title : "Error Encountered",
            description : `Error : ${res.error}`
        })
        */
       toast({
        variant : "default",
        title : "Logged In successfully."
       })
    }
    
    //console.log(session);
    
    return(
        <main className = "flex items-center justify-center py-12">
            {session ? (<section>
                <h1 className = "text-xl text-center">You are Logged In !!</h1>
            </section>) : (<section className = "flex mt-8 items-center flex-col justify-center bg-rose-200 px-8 py-4 space-y-6 min-w-[20rem] rounded-md">
                <h1 className = "text-3xl flex items-center justify-center gap-4 font-serif">Login <CiLogin/></h1>
                <input value = {email} onChange = {(e : React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} className = "px-4 py-2 rounded-md border-2 w-full border-black" placeholder="Email"/>
                <input value = {password} onChange = {(e : React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} className = "px-4 py-2 rounded-md border-2 w-full border-black" placeholder = "Password"/>
                <Button onClick = {LoginHandler} className = "w-full rounded-md border-2 px-4 py-2">Login</Button>
                <div className = "flex items-center justify-between w-full ">
                    <Button onClick = {() => signIn('google')} className = "flex bg-white text-black hover:bg-slate-400 items-center justify-center gap-4"><FcGoogle /> Google</Button>
                    <Button className = "flex bg-white text-blue items-center hover:bg-slate-400 justify-center gap-4"><FaFacebook/> Facebook</Button>
                </div>
                <p className = "text-lg font-serif">Dont Have an Account ? Sign Up <Link className = "text-blue-500 underline" href = "/auth/Sign-up">here</Link> </p>
            </section>)}
        </main>
    )
}