import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import { GiVineFlower } from "react-icons/gi";
import { HiOutlineCake } from "react-icons/hi2";
export default function Choose(){
    const data = [
        {
            id:1,
            name : "Quality Products",
            icon : HiOutlineCake,
            text : "We guarantee the quality of all the cakes we provide as they are baked using the freshest ingredients."
        },
        {
            id : 2,
            name : "Free Delivery",
            icon : TbTruckDelivery,
            text : "All orders submitted by our clients are delivered for free throughout the Country."
        },
        {
            id : 3,
            name : "Catering Service",
            icon : GiVineFlower,
            text : "Our bakery also provides an outstanding catering service for events and special occasions."
        },
        {
            id : 4,
            name : "Online Payment",
            icon : MdOutlinePayment,
            text : "We accepts all kindsod of online payments including Visa, MasterCard, American Express credit cards."
        }
    ]
    return(
        <section className = "w-full ">
            <div className = "w-full flex items-center gap-4 justify-center">
              <div className = "w-1/5 h-[1px] bg-rose-400"/>
              <h1 className = "text-center text-3xl new text-rose-400">Why Choose Us</h1>
              <div className = "w-1/5 h-[1px] bg-rose-400"/>
            </div>
            <div className = "flex items-center justify-center">
                <div className = "grid grid-cols-1 sm:grid-cols-2 gap-16 py-4">
                    {data.map((d) => (
                        <div key = {d.id} className = "  max-w-[30rem] space-y-6 bg-rose-100 mt-4 rounded-md py-4 px-2" >
                            <div className = "md:flex-shrink-0 flex justify-center">
                                <div className = "flex items-center justify-center h-16 w-16 rounded-full bg-rose-300">
                                    {<d.icon className = "w-2/3 text-rose-600 h-2/3"/>}
                                </div>
                            </div>
                            <div className = "space-y-5">
                                <h3 className = "text-center uppercase text-xl font-medium">{d.name}</h3>
                                <p className = "font-serif text-sm text-center sm:text-lg">{d.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
      </section>
    )
}