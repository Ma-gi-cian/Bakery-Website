'use client'
import axios from "axios";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";
import Link from "next/link";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";

export default function Home(){
    const {toast} = useToast();
    const {data : session} = useSession();
    const [items, setItems] = useState<any>([]);

    useEffect(() => {
        async function CallingProducts(){
            await getOrder();
        }
        CallingProducts();
    }, [])

    async function getOrder(){
        await axios.post('/api/getOrder', {
            name : session?.user?.name,
            email : session?.user?.email,
            image : session?.user?.image
        }).then((response : any) => {
            setItems(response.data.CartProducts);
        }).catch((Error) => {
            console.log(Error);
        })
    }
    console.log(items);

    const placeButton = async() => {
        await getOrder()
        toast({
            variant : "default",
            title : "Checking the Order"
        })
    }

    const heading = ['Image', 'Product', 'Quantity']
    return(
        <main className = "flex items-center justify-center mt-4 gap-4">
            {items ? (<section className = "w-full space-y-6 py-8">
                <p className = "text-center text-3xl font-serif">Here is the List of Your Orders </p>
                <Table>
                    <TableHeader>
                        <TableRow>
                            {heading.map((data, index) => (
                                <TableHead className = "text-center" key = {index}>
                                    <p>{data}</p>
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {items.map((item : any, index : number) => (
                            <TableRow key = {index}>
                                <TableCell className = "flex items-center justify-center">
                                    <div><Image className = "rounded-md" src = {item.image} alt = {item.product} width = {100} height = {100}/></div>
                                </TableCell>
                                <TableCell className = "text-center font-semibold font-mono"><p>{item.name}</p></TableCell>
                                <TableCell className = "text-center"><p>{item.quantity}</p></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>) : (<section><p>You do not have any order. Please visit our <Link className = "text-blue-700" href = "/product">Products</Link> page.</p></section>)}
        </main>
    );
}

// <DataTable columns={columns} data = {cartItems} />