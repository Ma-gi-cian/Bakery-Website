import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import {User} from "@/models/user.model";
import Database from '@/lib/database';
import { verifyPassword } from '@/lib/auth';
const handler  =  NextAuth({
    session : {
        jwt : true,
    },
    providers : [
        Credentials({
            async authorize(credentials){
                await Database();
                console.log(`The credentials are : `);
                console.log( credentials)
                console.log(`NextAuth :- email : ${credentials.email} password : ${credentials.password}`)
                const user = await User.findOne({email : credentials.email});
                console.log({
                    user : user
                });
                if(!user){
                    throw new Error('User does not exist');
                    //return Response.json({message : "User Does not exist"});
                }
                
                const isValid = await verifyPassword(credentials.password, user.password);

                if(!isValid){
                    throw new Error('Not valid');
                    //return Response.json({message : "Enter correct credentials"})
                }
                //console.log(`user : ${user}, isValid : ${isValid}`);
                return {email : user.email , name : user.name};
            }
        })
    ]
});

export { handler as GET , handler as POST }