import { useLoaderData } from "react-router-dom";
import ProductDetails from "./ProductDetails";

const ShowProduct = () => {
    // const [products, setProducts] = useState([]);
    const products = useLoaderData();
    console.log(products)

    
    return (
        <div className="grid grid-cols-1 px-4 my-10 md:px-0 md:grid-cols-2 lg:grid-cols-4">
            
            {
                products.map((product)=><ProductDetails key={product._id} product={product}></ProductDetails>)
            }
        </div>
    );
};

export default ShowProduct;