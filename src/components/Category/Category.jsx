import { NavLink, useLoaderData, useNavigate, useParams } from "react-router-dom";
// import Card from "../Card/Card";
import Gadget from "../Gadget/Gadget";
import { useEffect, useState } from "react";


const Category = () => {
    const data = useLoaderData();
    const {category} = useParams();
    const [gadgets, setgadgets] = useState([]);
    useEffect(() => {
        if(category){
            const filterByCategory = [...data].filter(gadget => gadget.category == category)
            setgadgets(filterByCategory)
        }
        else{
            setgadgets(data);
        }
        
    }, [category, data])

    console.log(data)
    return (
        <div className="bg-[#f6f4f4] pb-10">
                <div className="lg:w-10/12 mx-auto">
                <h2 className="text-center pt-5 font-bold text-[40px] text-[#0B0B0B] ">Explore Cutting-Edge Gadgets</h2>
                <div className="flex justify-between pt-10 gap-8">
                    <div className="w-[18%] h-80 mt-5 flex flex-col justify-between rounded-xl border border-gray-300 relative">
                        <NavLink to="/" className={({ isActive }) => `btn ${isActive ? 'btn-active' : ''}
                        m-5 border border-[#a94cf5] text-[#9538E2]`}>All gadgets</NavLink>
                        <NavLink to="" className="btn border border-[#a94cf5] avtice-btn m-5 text-[#9538E2]">Accessories</NavLink>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 gap-y-10">
                        {
                            gadgets.map(gadget => (<Gadget key={gadget.product_id} gadget={gadget}></Gadget>))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}; 

export default Category