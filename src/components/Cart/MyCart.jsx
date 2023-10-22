import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";
 

const MyCart = () => {
  const { user } = useContext(AuthContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:7000/mycart/${user.email}`)
      .then((res) => res.json())
      .then((data) => setCartData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
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
            {/* rows */}
            {cartData.map((data, ) => (
              <tr key={data._id}> {/* Use a unique key for each row */}
               
                <td>{data.name}</td>
                <td>{data.brand}</td>
                <td>{data.type}</td>
                <td>{data.price}</td>
                <td>
                  <Link to='/delete'><button className="btn bg-red-600 rounded-lg ">Delete</button></Link>
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
