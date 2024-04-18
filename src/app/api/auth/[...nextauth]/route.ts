import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import GoogleProvider from "next-auth/providers/google";

const google_client_id = '287260589548-1mbbl30o0gqacpjqm90gomk29ll63nms.apps.googleusercontent.com'
const google_client_secret = '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'

interface returnData {
    id : Number,
    name : String,
    email : String,
}

const authOptions : NextAuthOptions = {
    session : {
        strategy : 'jwt'
    },
    providers : [
        CredentialsProvider({
            type : 'credentials',
            credentials : { email : {
                label : "Email",
                type : 'email',
                placeholder : 'helloworld@gmail.com'
            },
            password : {
                label : "Password",
                type : "password",
            }
        },
            async authorize(credentials, req){
                const {email , password} = credentials as {
                    email : string,
                    password : string
                };
                if(email == 'helloworld@gmail.com' || password == 'jha'){
                    return {user : {
                        name : "Aditya Jha",
                        email : 'jhaishere@jha'
                    }} as any ;
                }
                else {
                    return {messsage : 'error'};
                }
            }
        }),
        GoogleProvider({
            clientId : google_client_id,
            clientSecret : google_client_secret
        })
    ]
}

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST}