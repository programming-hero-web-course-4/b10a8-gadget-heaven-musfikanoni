
const Category = () => {
    return (
        <div className="flex flex-col rounded-2xl bg-white border border-gray-200 pb-5">
            <button className="btn rounded-full mt-5 ml-5 mr-5 bg-gray-200 text-zinc-500">All Categories</button>
            <button className="btn rounded-full mt-5 ml-5 mr-5 bg-gray-200 text-zinc-500">Laptop</button>
            <button className="btn rounded-full mt-5 ml-5 mr-5 bg-gray-200 text-zinc-500">Phone</button>
            <button className="btn rounded-full mt-5 ml-5 mr-5 bg-gray-200 text-zinc-500">Airpods</button>
            <button className="btn rounded-full mt-5 ml-5 mr-5 bg-gray-200 text-zinc-500">Accessories</button>
        </div>
    );
};

export default Category;