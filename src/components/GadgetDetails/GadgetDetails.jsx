import { useLoaderData, useParams } from "react-router-dom";

const GadgetDetails = () => {
    const { gadgetId } = useParams();
    const id = parseInt(gadgetId);
    const data = useLoaderData();

    const gadget = data.find(gadget => gadget.product_id === gadgetId)

    console.log(gadget);

    return (
        <div>
            <div className="bg-[#9538E2] pb-60">
                <h2 className="pt-10 text-white font-bold text-[32px] text-center">Product Details</h2>
                <div className="lg:w-5/12 mx-auto pt-3">
                    <p className="text-center text-white font-normal text-base">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
            </div>
            <div className="bg-[#f6f4f4] flex justify-center">
                <div className="lg:w-10/12  -mt-40 mb-10 border-white rounded-3xl mw-5xl h-[55vh] relative mx-auto z-10 bg-[#ffffff] px-5 py-5">
                    <div className="">

                    </div>
                    <div className=""></div>
                </div>       

            </div>
        </div>
    );
};

export default GadgetDetails;