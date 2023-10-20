import Swal from 'sweetalert2';
const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const des = form.des.value;
    const image = form.image.value;

    const newProduct = {
      name,
      brand,
      type,
      price,
      rating,
      des,
      image,
    };

    console.log(newProduct);

    // Send data to the server
    fetch('http://localhost:7000/product', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(newProduct),
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

      
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center space-y-10 mt-10">
        <h1 className="text-5xl font-bold">Add Product</h1>
        <div className="w-1/2 bg-orange-400 p-4">
          <form onSubmit={handleAddProduct} className="card-body">
            <div className="md:flex space-x-4">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Product Name"
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
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
            <div className="md:flex space-x-4">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Type Name</span>
                </label>
                <input
                  type="text"
                  name="type"
                  placeholder="Enter Type Name"
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
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
            <div className="md:flex space-x-4">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="text"
                  name="rating"
                  placeholder="Enter Rating"
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
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-secondary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
