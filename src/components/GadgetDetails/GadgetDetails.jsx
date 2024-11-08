import { useLoaderData, useParams } from "react-router-dom";
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";
// import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
// import { addStoreCartList } from "../../utility/addToDb";
import { addToCart } from "../../utilites/addToCart";

const GadgetDetails = () => {
    const { gadgetId } = useParams();
    const id = parseInt(gadgetId);
    const data = useLoaderData();

    const gadget = data.find(gadget => gadget.product_id === gadgetId)

    console.log(gadget);
    const {product_id, product_title, product_image, category,
        price, description, Specification, availability, rating} = gadget;

        const handleCart = (id) => {

            
            addToCart(id)
        }

    return (
        <div>
            <div className="bg-[#9538E2] pb-60">
                <h2 className="pt-10 text-white font-bold text-[32px] text-center">Product Details</h2>
                <div className="lg:w-5/12 mx-auto pt-3">
                    <p className="text-center text-white font-normal text-base">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
            </div>
            <div className="bg-[#f6f4f4] flex justify-center">
                <div className="lg:w-10/12 flex gap-10 -mt-40 mb-10 border-white rounded-3xl mw-5xl h-[55vh] relative mx-auto z-10 bg-[#ffffff] px-4 py-4">
                    <div className="">
                        <img className="rounded-2xl" src={product_image} alt="" />
                    </div>
                    <div className="">
                        <h1 className="font-semibold text-[28px] text-[#09080F]">{product_title}</h1>
                        <h3 className="text-[#09080f98] mt-2">Price: ${price}</h3>
                        <h3 className="border mt-5 border-green-400 text-green-600 bg-green-200 px-4 py-1 rounded-full max-w-[105px]">{availability == true ? 'In Stock' : 'Out Stock'}</h3>
                        <p className="text-gray-500 mt-3">{description}</p>
                        <h4 className="font-bold mt-3">Specification:</h4>
                        <p>{Specification}</p>
                        <h4 className="font-bold text-[#09080F] mt-3">Rating:</h4>
                        <div className="flex items-center gap-2 pb-5">
                            <h4 className="font-medium text-[#09080f98] text-lg">{rating}</h4>
                            <div className="flex text-xl text-amber-400">
                                {gadget.rating == 5 ? <><TiStarFullOutline />
                                <TiStarFullOutline /><TiStarFullOutline />
                                <TiStarFullOutline /><TiStarFullOutline /></>
                                 :
                                <><TiStarFullOutline/><TiStarFullOutline/>
                                <TiStarFullOutline/><TiStarFullOutline/><TiStarHalfOutline /></> }
                            </div>
                        </div> 
                        <div className="card-actions justify-start flex">
                                <button onClick={() => handleCart(gadgetId)} className="btn font-semibold text-lg rounded-full text-white bg-[#9538E2] hover:text-[#9538E2]">Add To Card <BsCart3></BsCart3></button>
                            <div className="bg-white text-xl border border-[#0b0b0b49] text-[#3A3A3A] rounded-full p-3">
                                <FaRegHeart></FaRegHeart>
                            </div>
                        </div>
                    </div>
                </div>       

            </div>
        </div>
    );
};

export default GadgetDetails;