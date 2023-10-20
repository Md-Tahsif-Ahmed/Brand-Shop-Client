import { FaDollarSign } from 'react-icons/fa';

const ProductDetails = ({product}) => {
    const {name, brand, image, rating, price, type} = product;
    return (
        <div>
            <div className="card w-96 glass">
            <div className="brand-card w-fit">
                <img
                    src={image}
                    alt={name}
                    style={{ width: "400px", height: "250px" }}
                />
                <div className="brand-title text-center mt-0 italic font-bold text-lg text-white bg-gray-800">
                    <h3>{name}</h3>
                </div>
            </div>
                <div className="card-body">
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
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Details</button>
                    <button className="btn btn-primary">Update</button>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default ProductDetails;