import React from 'react';
import { NavLink } from 'react-router-dom';

const Categories = ({ categories }) => {
    // const {category} = categories;
    console.log(categories)
    return (
        <div>
            
            <div role="tablist" className="tabs tabs-boxed justify-center gap-y-2 bg-transparent absolute z-10 mt-[215px] ml-[145px] float-start flex flex-col">
                {categories.map(category => (
                    <NavLink key={category.category} to={`/category/${category.category}`} role="tab" 
                     className={( {isActive} ) => `tab ${isActive? 'tab-active' : ''} w-[180px] btn border border-[#a94cf5] text-center text-[#9538E2]`}>
                    {category.category}
                    </NavLink>
                    
                ))}

                
            </div>
        </div>
    );
};

export default Categories;