
const Footer = () => {
    return (
        <footer className="mt-5">
            <div className="lg:w-10/12 mx-auto py-8">
                <div className="flex flex-col justify-center gap-y-4">
                    <h1 className="font-bold text-center text-3xl text-[#09080F]">Gadget Heaven</h1>
                    <p className="text-[#09080f98] text-[#09080F] font-normal text-base text-center">Landing the way in cutting-edge technology and innovation</p>
                    <div className="border-b border-gray-200 pb-3"></div>
                </div>
                
                <div className="lg:flex flex-none pt-6 lg:w-7/12 mx-auto justify-between items-center">
                    <div>
                        <h2 className="font-bold text-center text-[#09080F] text-lg">Services</h2>
                        <div className="text-[#09080f98] text-[#09080F] font-normal text-base text-center">
                            <p>Product Support</p>
                            <p>Order Tracking</p>
                            <p>Shipping & Delivery</p>
                            <p>Returns</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-bold text-center text-[#09080F] text-lg">Company</h2>
                        <div className="text-[#09080f98] font-normal text-base text-center">
                            <p>About Us</p>
                            <p>Careers</p>
                            <p>Contact</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-bold text-center text-[#09080F] text-lg">Legal</h2>
                        <div className="text-[#09080f98] font-normal text-base text-center">
                            <p>Terms of Service</p>
                            <p>Privacy Policy</p>
                            <p>Cookie Policy</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;