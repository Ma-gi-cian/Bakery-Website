'use client'
import { useState } from "react";
import Link from "next/link";
export default function ContactPage(){

    const [sendmessage ,setSendMessage] = useState(false);
    const AgainSubmitHandler = () => {

    }
    const submitHandler = () => {

    }
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [subject, setSubject] = useState("");
    const [Email, setEmail] = useState("");
    return(
        <section 
            className = "h-50vh  w-full pb-16 "
            id = "contact"
            
        >
            <div className = "flex gap-4 items-center justify-between">
                <div className = "border-t-4 border-black w-2/5"></div>
                <h1 className = "text-5xl font-bold font-serif text-center text-black">Contact</h1>
                <div className = "border-t-4 border-black w-2/5"></div>
            </div>
            <div className = "flex items-center flex-col md:flex-row justify-around mt-8 w-full gap-2">
                <div className = "font-serif flex flex-col items-center justify-center mt-2 text-center md:text-left w-1/2 ">
                    <h1 className = "text-2xl mt-1">Let&apos;s Chat 👋</h1>
                    <h1 className = "text-2xl mt-2">Tell us about any of your queries.</h1>
                    <p className = "my-4 ">We will respond within the next 6 Hours.</p>
                </div>
                <div>
                    {!sendmessage ? (
                        <div className = ""> 
                        <h1 className = "text-xl font-serif">Send us a message <span className = "">✉️</span></h1>
                    <form className = "grid place-items-center relative pb-16 pt-2" onSubmit = {submitHandler}>
                    
                        <div className = "mt-1 flex flex-col items-center w-full mx-24">
                            <div className = "flex w-full gap-4 flex-col md:flex-row items-center justify-between">
                                <input placeholder = "Name*" required onChange={(e) => setName(e.target.value)} type = "text" className = "w-full md:w-1/2 bg-white border-rose-800 text-black  border-2 focus:border-black rounded p-4" /> 
                                <input placeholder = "Email*" type = "text" required onChange={(e) => setEmail(e.target.value)} className = "w-full md:w-1/2 bg-white border-rose-800 text-black border-2 focus:border-black rounded p-4" />
                            </div>
                            <div className = "w-full mt-2">
                                <input placeholder = "Subject*" type = "text" required onChange={(e) => setSubject(e.target.value)} className = "w-full text-black mt-2 bg-white border-2 border-rose-800 focus:border-black rounded p-4" />
                            </div>
                            <div className = "w-full mt-2">
                                <input placeholder = "Message" type = "text" onChange={(e) => setMessage(e.target.value)} className = "w-full text-black mt-2 border-2 bg-white border-rose-800 focus:border-black rounded p-4" />
                            </div>
                        </div>
                        <button type = "submit" className = " absolute bottom-0 right-0 bg-rose-500 text-white block px-8 py-4 rounded-md">Submit</button>
                    </form>
                    </div>
                    ) : (
                        <div className = "flex items-center justify-between pb-16 w-full pt-2">
                            <div className = "w-100% flex items-center flex-col gap-4">
                                <h1 className = "text-xl font-serif w-fit font-light text-center">THANK YOU FOR THE MESSAGE</h1>
                                <button type = "button" className = "font-serif w-fit rounded-md text-black border-gray-400 border-2 p-2 hover:bg-black hover:text-white bg-white " onClick={AgainSubmitHandler}>Send Message Again</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}