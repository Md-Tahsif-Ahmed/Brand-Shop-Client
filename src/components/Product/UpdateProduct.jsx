import { useLoaderData, useParams } from "react-router-dom";
import Swal from 'sweetalert2';

const UpdateProduct = () => {
    
    const { id } = useParams();
    const products = useLoaderData();
    console.log('here:',products);
    const product = products.find((p) => p._id === id);
    const { _id, name, brand, type, price, rating, image, des} = product;
    

    const handleUpdateProduct = (e) => {
        e.preventDefault();
        const form = e.target;
    
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const des = form.des.value;
        const image = form.image.value;
    
        const updateProduct = {
          name,
          brand,
          type,
          price,
          rating,
          des,
          image,
        };
    
        console.log(updateProduct);
    
        // Send data to the server
        fetch(`http://localhost:7000/products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateProduct),
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
                if(data.modifiedCount > 0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Successfully Updated',
                        icon: 'success',
                        confirmButtonText: 'done'
                      })
                }
            })
            .catch((error) => {
                console.error('Fetch error:', error.message);
            });
    
          
      };
    

    return (
        <div>
            <div className="flex flex-col items-center justify-center space-y-10 mt-10">
        <h1 className="text-2xl md:text-5xl font-bold">Update {name}</h1>
        <div className="w-1/2 bg-[#32cc8c] p-4 rounded-lg">
          <form onSubmit={handleUpdateProduct} className="card-body">
            <div className="block md:flex md:space-x-4">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Product Name"
                  defaultValue={name}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Brand Name</span>
                </label>
                <input
                  type="text"
                  name="brand"
                  placeholder="Enter Brand Name"
                  defaultValue={brand}
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
            <div className="block md:flex md:space-x-4">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Type Name</span>
                </label>
                <input
                  type="text"
                  name="type"
                  placeholder="Enter Type Name"
                  defaultValue={type}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Product Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  placeholder="Enter Product Price"
                  defaultValue={price}
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
            <div className="block md:flex md:space-x-4">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="text"
                  name="rating"
                  placeholder="Enter Rating"
                  defaultValue={rating}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Short description</span>
                </label>
                <textarea
                  name="des"
                  placeholder="Short Description"
                  defaultValue={des}
                  className="textarea textarea-bordered textarea-xs w-full max-w-xs"
                ></textarea>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="url"
                name="image"
                placeholder="Enter Image Url"
                defaultValue={image}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn bg-[#146542] hover:bg-green-600 border-0  md:w-1/2 mx-auto text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
   

export default UpdateProduct;