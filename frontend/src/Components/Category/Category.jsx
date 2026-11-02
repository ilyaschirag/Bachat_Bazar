
import React from "react";
import dairy from "../../assets/images/dairy_products.png";
import fruits from "../../assets/images/fruits.png";
import household from "../../assets/images/household_care.png";
import personal from "../../assets/images/personal_care.png";
import snacks from "../../assets/images/snacks.png";
import vegetables from "../../assets/images/vegetables.png";
import kitchen from "../../assets/images/kitchen_essentials.png";
import "./Category.css";

function Category() {

    const categories=[
        {name:'Snacks',image:snacks},
        {name:'Dairy Products',image:dairy},
        {name:'Kitchen Essentials',image:kitchen},
        {name:'fruits',image:fruits},
        {name:'vegetables',image:vegetables},
        {name:'Skin Care',image:personal},
        {name:'Household Care',image:household},
    ]
    return (
        <div className="outCategory">
        <div className="categoryHeading">
            <div>
                    <h2>Shop by Category</h2>
                    <p>Everything you need, just a click away.</p>
                </div>
        </div>
        
         <div className="quick">
            {categories.map((category, index) => (
                    <button key={index} className="categoryCard"><
                        div>
                            <img src={category.image} alt={category.name}/>
                        </div>
                        <span>{category.name}</span>
                     </button>))}
        </div>
        </div>
    );
}

export default Category;
