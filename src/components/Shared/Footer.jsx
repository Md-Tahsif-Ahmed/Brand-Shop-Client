const Footer = () => {
    return (
        <div className="mt-10">
            <footer className="p-10 bg-[#07301e] text-white">
                <div className="footer max-w-6xl mx-auto">
                     
                    <nav>
                        <header className="footer-title">Services</header> 
                        <a className="link link-hover">Cultural Programming</a> 
                        <a className="link link-hover">Events</a> 
                        <a className="link link-hover">Marketing</a> 
                        <a className="link link-hover">Advertisement</a>
                    </nav> 
                    <nav>
                        <header className="footer-title">Others</header> 
                        <a className="link link-hover">About Us</a> 
                        <a className="link link-hover">Contact Us</a> 
                        <a className="link link-hover">Career</a> 
                        
                    </nav> 
                    <nav>
                        <header className="footer-title">Social Platform</header> 
                        <a className="link link-hover">Facebook</a> 
                        <a className="link link-hover">Youtube</a> 
                        <a className="link link-hover">Instagram</a>
                    </nav>

                </div>
  
            </footer>
        </div>
    );
};

export default Footer;