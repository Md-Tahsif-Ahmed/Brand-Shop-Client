// import  { useState } from 'react';

const DarkModeToggle = ({toggleDarkMode}) => {
    return (
        <div className="dark-mode-toggle">
            <label>
                <input type="checkbox" className="toggle w-8 h-4 md:w-10 md:h-6"  onChange={toggleDarkMode} />
                 
            </label>
        </div>
    );
};

export default DarkModeToggle;
