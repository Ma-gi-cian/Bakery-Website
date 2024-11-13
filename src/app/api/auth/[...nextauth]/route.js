'use server'
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google'
import {User} from "@/models/user.model";
import Database from '@/lib/database';
import { verifyPassword } from '@/lib/auth';

/*
Revoked authorization for url leak
*/


const handler  =  NextAuth({
    session : {
        jwt : true,
    },
    providers : [
        GoogleProvider({
            clientId : process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret : process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
        }),

        Credentials({
            async authorize(credentials){
                //console.log("async handler");
                await Database();
                const user = await User.findOne({email : credentials.email});
                //console.log({user : user});
                const valid = await verifyPassword(credentials.password, user.password)
                //console.log("helloworld");
                if(user && valid){
                    return user;
                }
                else{
                    return null;
                }
            }
        })
    ]
});

export { handler as GET , handler as POST }
