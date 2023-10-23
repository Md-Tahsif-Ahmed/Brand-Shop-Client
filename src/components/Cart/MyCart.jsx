import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from 'sweetalert2';

const MyCart = () => {
  const { user } = useContext(AuthContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:7000/mycart/${user.email}`)
      .then((res) => res.json())
      .then((data) => setCartData(data))
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = (_id) => {
    console.log(_id)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:7000/mycart/${_id}`, {
          method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log('bala',data)
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your product has been deleted.', 'success');
              // Update the UI by filtering out the deleted product
            //   const remainingProducts = cartData.filter((d) => d._id !== id);
            //   setCartData(remainingProducts);
            } else {
              Swal.fire('Error!', 'Failed to delete the product.', 'error');
            }
          })
          .catch((error) => {
            console.error(error);
            Swal.fire('Error!', 'An error occurred while deleting the product.', 'error');
          });
      }
    });
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Brand</th>
              <th>Type</th>
              <th>Price</th>
              <th>Method</th>
            </tr>
          </thead>
          <tbody>
            {cartData.map((data) => (
              <tr key={data._id}>
                <td>{data.name}</td>
                <td>{data.brand}</td>
                <td>{data.type}</td>
                <td>{data.price}</td>
                <td>
                  <button onClick={() => handleDelete(data._id)} className="btn bg-red-600 rounded-lg">X</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
