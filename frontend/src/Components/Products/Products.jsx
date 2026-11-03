import "./Products.css";

const productImages = import.meta.glob(
    "../../assets/images/products/**/*.jpeg",
    {
        eager: true,
        query: "?url",
        import: "default",
    }
);

function Products() {
    const products = Object.entries(productImages).map(([path, image]) => ({
        path,
        image,
    }));

    console.log(products);

    return (
        <div className="products">
            {products.map((product) => (
                <img key={product.path} src={product.image} alt="Product" />
            ))}
        </div>
    );
}

export default Products;