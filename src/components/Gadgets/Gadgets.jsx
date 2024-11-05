import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";
import Category from "../Category/Category";

const Gadgets = () => {
    
    const [gadets, setgadgets] = useState([]);

    useEffect (() => {
        fetch('./allProducts.json')
        .then(res => res.json())
        .then(data => setgadgets(data))
    }, [])

    return (
        <div className="bg-[#F6F6F6]">
`            <div className="lg:w-10/12 mx-auto">
                <h2 className="text-center pt-5 font-bold text-[40px] text-[#0B0B0B] ">Explore Cutting-Edge Gadgets</h2>
                <div className="flex justify-between pt-10 gap-8">
                    <div className="w-[18%]"><Category></Category></div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 gap-y-10">
                        {
                            gadets.map(gadget => 
                            <Gadget gadget={gadget} key={gadget.product_id}></Gadget>)
                        }
                    </div>
                </div>
            </div>`
        </div>
    );
};

export default Gadgets;