import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
// import Gadgets from "../Gadgets/Gadgets";
import Categories from "../Categories/Categories";

const Home = () => {
    const categories = useLoaderData();
    console.log(categories)
    return (
        <div>
            <Banner></Banner>
            <Categories categories={categories} />
            <Outlet></Outlet>
            {/* <Gadgets></Gadgets> */}
        </div>
    );
};

export default Home;