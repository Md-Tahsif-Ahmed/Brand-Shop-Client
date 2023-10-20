import { useLoaderData } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import Sliders from "./Sliders";

const ShowProduct = () => {
    // const [products, setProducts] = useState([]);
    const products = useLoaderData();
    console.log(products)

    
    return (
        <div className="">
            <div className="mb-20">
              <Sliders></Sliders>
            </div>
            {/* <h1 className="font-bold mt-20">Products Trending</h1> */}
            <div className="grid grid-cols-1 px-4 my-10 md:px-0 md:grid-cols-2 lg:grid-cols-4">
            
                {
                    products.map((product)=><ProductDetails key={product._id} product={product}></ProductDetails>)
                }
           </div>
        </div>
    );
};

export default ShowProduct;