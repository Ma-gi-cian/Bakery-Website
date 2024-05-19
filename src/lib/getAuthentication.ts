import { getSession } from "next-auth/react";

export async function ProtectedRoutes(){
    const session = await getSession();
    if(!session){
        //console.log("No session")
        window.location.href = '/auth/Login'
    }
}