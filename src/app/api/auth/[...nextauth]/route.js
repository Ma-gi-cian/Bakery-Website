'use server'
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google'
import {User} from "@/models/user.model";
import Database from '@/lib/database';
import { verifyPassword } from '@/lib/auth';
import { verify } from 'crypto';
// client_id = "287260589548-1mbbl30o0gqacpjqm90gomk29ll63nms.apps.googleusercontent.com"
// client_secret = "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"
//console.log("nextauth folder");
const handler  =  NextAuth({
    session : {
        jwt : true,
    },
    providers : [
        GoogleProvider({
            clientId : "287260589548-1mbbl30o0gqacpjqm90gomk29ll63nms.apps.googleusercontent.com",
            clientSecret : "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"
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