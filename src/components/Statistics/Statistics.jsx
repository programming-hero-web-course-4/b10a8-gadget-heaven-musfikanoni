// import Chart from "../Chart/Chart";
import { useEffect, useState } from "react";
// import ComposedCharts from "../ComposedCharts/ComposedCharts";
import {ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    Legend,
    Scatter,
  } from 'recharts'; 


const Statistics = () => {
    const [charts, setChart] = useState([])
    useEffect(() =>{
        fetch('./allProducts.json')
        .then(res => res.json())
        .then(data => setChart(data))
    }, [])
    console.log(charts)
    return (
        <div>
            <div className="bg-[#9538E2]">
                <h2 className="text-white font-bold text-center text-[32px] pt-12">Statistics</h2>
                <div className="lg:w-5/12 mx-auto pt-3 pb-12">
                    <p className="text-center pt-5 text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
            </div>
            <div className="bg-[#F6F6F6]">
                <div className="lg:w-10/12 mx-auto">
                    <h3 className="text-[#0B0B0B] font-bold text-2xl pt-10">Statistics</h3>
                    <div className="bg-white rounded-xl py-5 border-b-8 border-[#f6f4f4]">
                        <ComposedChart height={400} width={1140} data={charts}>
                            <CartesianGrid stroke="#f5f5f5" />
                            <XAxis dataKey={'product_title'} scale="band" />
                            <YAxis dataKey={'price'} />
                            <Tooltip />
                            <Legend />
                            <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />
                            <Bar dataKey="price" barSize={20} fill="#413ea0" />
                            <Scatter dataKey="rating" fill="red" />
                        </ComposedChart>
                    </div>
                </div>
            </div>

            
            
            {/* {
                charts.map(chart => 
                <ComposedCharts chart={chart} key={chart.product_id}></ComposedCharts>)
            } */}
        </div>
    );
};

export default Statistics;