import EmpyProduct from "./EmpyProduct";
import ProductDetails from "./ProductDetails";
import Sliders from "./Sliders";
import { useLoaderData, useParams } from "react-router-dom";


const ShowProduct = () => {
    // const [products, setProducts] = useState([]);
    const { title } = useParams();
    const products = useLoaderData();
    console.log('lolo:',products);
    const filter = products.filter((p) => p.brand === title);
    console.log('kolo:',filter);
    if (filter.length === 0) {
        return (
            <div>
                 <EmpyProduct></EmpyProduct>
            </div>
        );
    }

    
    return (
        <div className="">
            <div className="mb-20">
              <Sliders></Sliders>
            </div>
            {/* <h1 className="font-bold mt-20">Products Trending</h1> */}
            <div className="grid grid-cols-1 px-4 my-10 md:px-0 md:grid-cols-2 lg:grid-cols-4">
            
                {
                    filter.map((product)=><ProductDetails key={product._id} product={product}></ProductDetails>)
                }
                 
           </div>
        </div>
    );
};

export default ShowProduct;