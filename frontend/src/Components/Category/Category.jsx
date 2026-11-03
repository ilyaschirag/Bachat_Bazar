
import { useEffect, useState } from "react";
import "./Category.css";

function Category() {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadCategories = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/get_category_image");

                if (!response.ok) {
                    throw new Error("Unable to load categories");
                }

                const data = await response.json();

                const categoryProducts = data.products.map((product) => ({
                    name: product.name
                        .replace(/\.[^.]+$/, "")
                        .replaceAll("_", " "),
                    image: product.image_url,
                }));

                setCategories(categoryProducts);
            } catch (fetchError) {
                setError(fetchError.message);
            }
        };

        loadCategories();   
    }, []);

    return (
        <div className="outCategory">
        <div className="categoryHeading">
            <div>
                    <h2>Shop by Category</h2>
                    <p>Everything you need, just a click away.</p>
                </div>
        </div>
        
         <div className="quick">
            {error && <p>{error}</p>}
            {categories.map((category, index) => (
                    <button key={`${category.name}-${index}`} className="categoryCard">
                        <div>
                            <img src={category.image} alt={category.name}/>
                        </div>
                        <span>{category.name}</span>
                     </button>))}
        </div>
        </div>
    );
}

export default Category;
