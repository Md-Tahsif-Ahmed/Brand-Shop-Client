import { useLoaderData, useParams } from "react-router-dom";
import { FaDollarSign } from 'react-icons/fa';
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";
import Swal from 'sweetalert2';
const EachDetails = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const products = useLoaderData();
    const product = products.find((p) => p._id === id);
    const { _id, name, brand, type, price, rating, image, des} = product;

    const handleCart = ()=> {
        product.email = user.email;
        console.log('all are in', product);
        // send data to the server
        fetch(`https://brand-shop-new-server-n07wv1tuz-tahsif1010s-projects.vercel.app/mycart/${product.email}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product),
            
        })
        .then((res) => {
            if (!res.ok) {
            throw new Error(`Server responded with status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => {
            console.log(data);
            // Handle the response from the server as needed
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product Successfully Added',
                    icon: 'success',
                    confirmButtonText: 'done'
                  })
            }
        })
        .catch((error) => {
            console.error('Fetch error:', error.message);
        });

        


    }
    
    return (
        <div className="flex items-center justify-center mt-10">
            <div className="card md:w-1/2 glass">
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
                    <h2 className="card-title bg-[#07301e] text-white rounded-full font-semibold px-2">{brand}</h2>
                    <h2 className="card-title bg-[#07301e] text-white rounded-full font-semibold px-2">{type}</h2>
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
                     
                    <button onClick={()=>handleCart(product)} className="btn bg-[#146542] hover:bg-green-600 border-0 text-white w-full mt-6">Add to Cart</button>
                    </div>
                </div>
            </div>
           
       
    );
};

export default EachDetails;