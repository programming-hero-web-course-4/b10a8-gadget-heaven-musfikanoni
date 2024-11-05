
const Banner = () => {
    return (
        <div className="lg:w-11/12 mx-auto">
            <div className="">
                <div className="bg-[#9538E2] rounded-b-3xl">
                    <div className="lg:w-9/12 mx-auto pt-6">
                        <h1 className="leading-tight font-bold text-[56px] text-white text-center">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    </div>
                    <div className="lg:w-6/12 mx-auto pt-6">
                        <p className="font-normal text-base text-white text-center">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    </div>
                    <div className="flex justify-center pt-6 pb-80">
                        <button className="rounded-full px-6 py-4 text-xl font-bold bg-white text-[#9538E2]">Shop Now</button>
                    </div>
                </div>

                <div className="lg:w-11/12 mx-auto -mt-72">
                    <div className=" w-9/12 border border-white rounded-3xl mw-5xl h-[55vh] mx-auto z-10 relative bg-slate-100 bg-opacity-10 px-5 py-4">
                        <img className="rounded-3xl w-full h-[563px] object-cover" src="images/banner.jpg" alt="" />
                    </div>       
                </div>
            </div>
        </div>
    );
};

export default Banner;