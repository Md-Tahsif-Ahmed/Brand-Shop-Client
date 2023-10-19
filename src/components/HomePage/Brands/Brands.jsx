import { useEffect, useState } from "react";
import Brand from "./Brand";

const Brands = () => {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('brands.json')
        .then(result => result.json()) 
        .then(data => {
            setBrands(data);
        })
    }, []);

    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-xl md:text-5xl text-center font-bold my-10">Entertainment Brands</h1>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    brands.map((brand) => <Brand key={brand.id} brand={brand}></Brand>)
                }
           </div>
        </div>
    );
};

export default Brands;


