import { Outlet } from "react-router-dom";
import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";
import { useState } from 'react';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = e => {
    setIsDarkMode(!isDarkMode);
    const c = e.target.checked;
    console.log(c);
    
  };
  
 

  return (
    <div data-theme={isDarkMode ? "dark" : "light"}>
      <Navbar toggleDarkMode={toggleDarkMode} /> {/* Pass the function to the Navbar component */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
