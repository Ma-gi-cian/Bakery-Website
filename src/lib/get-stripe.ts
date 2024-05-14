import Stripe from 'stripe'

// publishable_key = "pk_test_51OnDMFSHOFSYbtCbOwEtmW81UzrRR2TxxhdlvtEnqvGnKxwv6as3hU44cDwKqwxbcB3nH3n4bGaCJ5y51mXY1WYb00WcYXEozo"
// secret_key = "sk_test_51OnDMFSHOFSYbtCbszc16QyCqY06wpw9fuTGSPNbQN7GBd5OkXGU7qA34xdhI0wHgnWLOYXwW5Y6HC0dBYmdNdp300Hb8PVpaV"

export const stripe = new Stripe(process.env.NEXT_PUBLIC_SECRET_KEY as string, {
    apiVersion : "2024-04-10",
    typescript : true,
});