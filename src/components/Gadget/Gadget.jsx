import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
const Gadget = ( {gadget} ) => {

    const {product_id, product_title, product_image, category,
        price, description, Specification, availability, rating} = gadget || {};

    return (
        <div>
            <div className="card card-compact bg-white w-80">
                <figure>
                    <img className="px-5 pt-5 rounded-[30px] h-full w-full object-cover"
                    src={product_image}
                    alt="gadget" />
                </figure>
                <div className="card-body px-4 py-4">
                    <h2 className="font-semibold text-2xl text-[#09080F] card-title">{product_title}</h2>
                    <p className="text-[#09080f98]">{category}</p>
                    <p className="text-[#09080f98]">{description}</p>
                    <p>{Specification}</p>
                    <h3 className="border border-green-400 text-green-600 bg-green-200 px-3 py-1 rounded-full max-w-[90px]">{availability == true ? 'In Stock' : 'Out Stock'}</h3>
                    <div className="">
                        <h4 className="font-medium text-[#09080f98] text-lg">Price: ${price}</h4>
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
                    </div>
                    <div className="card-actions justify-center">
                        <Link to={`gadget/${product_id}`}>
                            <button className="btn font-semibold text-lg rounded-full text-white bg-[#9538E2] hover:bg-[#9538E2]">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gadget;