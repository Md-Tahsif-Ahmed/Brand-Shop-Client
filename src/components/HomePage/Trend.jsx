import React from "react";
import a from "../../assets/1.jpg";
import b from "../../assets/2.webp";
import c from "../../assets/3.jpeg";
import d from "../../assets/4.jfif";
import e from "../../assets/5.jpg";
import f from "../../assets/6.webp";

const imageStyle = {
  width: "260px", // Adjust the width to your desired size
  height: "150px", // Adjust the height to your desired size
};
const hrStyle = {
    height: "4px",  
    backgroundColor: "red",  
    width: "10%",  
    margin: "0 auto",  
    borderRadius: "20px",
};

const Trend = () => {
  return (
    <div>
         <h2 className="mt-10 text-black font-semibold italic">What's Trending</h2>
      <div className="">
       
        <hr style={hrStyle} />
     </div>
      <div className="grid grid-cols-6 gap-0">
        <img src={a} alt="Image 1" style={imageStyle} />
        <img src={b} alt="Image 2" style={imageStyle} />
        <img src={c} alt="Image 3" style={imageStyle} />
        <img src={d} alt="Image 4" style={imageStyle} />
        <img src={e} alt="Image 5" style={imageStyle} />
        <img src={f} alt="Image 6" style={imageStyle} />
      </div>
    </div>
  );
};

export default Trend;




