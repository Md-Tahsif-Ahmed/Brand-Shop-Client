import PropTypes from 'prop-types';

const Banner = () => {
    const bgStyle = {
        backgroundImage: "url('https://i.ibb.co/rdf6sBK/ban.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // opacity: "75%",
        // // backgroundColor: "black",
    };

    const hrStyle = {
        height: "4px",  
        backgroundColor: "green",  
        width: "10%",  
        margin: "0 auto",  
        borderRadius: "20px",
    };

    return (
        <div style={bgStyle} className="mb-16 relative ">
            <div className="bg-black bg-opacity-70 hero-overlay"></div>
            <div className="absolute">
                <h1 className="text-center font-bold text-xl md:text-2xl lg:text-5xl italic text-white mb-4">
                    See the Greatest Shows
                </h1>
                <div className="">
                    <hr style={hrStyle} />
                </div>
                <p className="text-white font-semibold px-8 py-4">
                    Discover a world of movies, TV shows, and more as we bring the silver screen to your fingertips.
                    Get ready to embark on an epic journey of entertainment and media like never before
                </p>
                <div className="text-center my-8"></div>
            </div>
        </div>
    );
};

Banner.propTypes = {
    handleSubmit: PropTypes.any,
};

export default Banner;
