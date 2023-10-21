import { useLoaderData, useParams } from "react-router-dom";
import { FaDollarSign } from 'react-icons/fa';
const EachDetails = () => {
    const { id } = useParams();
    const products = useLoaderData();
    console.log('here:',products);
    const product = products.find((p) => p._id === id);
    const { _id, name, brand, type, price, rating, image, des} = product;
    
    return (
        <div>
            <div className="card w-1/2 glass">
            <div className="brand-card w-fit">
                <img
                    src={image}
                    alt={name}
                    style={{ width: "800px", height: "250px" }}
                />
                <div className="brand-title text-center mt-0 italic font-bold text-lg text-white bg-gray-800">
                    <h3>{name}</h3>
                </div>
            </div>
                <div className="card-body">
                    <p className="text-center">{des}</p>
                    <div className="flex items-center justify-between">
                    <h2 className="card-title">{brand}</h2>
                    <h2 className="card-title bg-pink-600 rounded-full font-semibold">{type}</h2>
                    </div>

                    <p className='flex items-center justify-between'>
                        <div className=" flex items-center space-x-2">
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <span>{rating}</span> 
                        </div>
                        <span className='flex items-center space-x-2'>Price:<FaDollarSign/>{price}</span>
                    </p>
                     

                    </div>
                </div>
            </div>
           
       
    );
};

export default EachDetails;