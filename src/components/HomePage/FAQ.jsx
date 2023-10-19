 const FAQ = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl text-center font-bold my-10">Frequently Asked Questions</h1>
            <div className="collapse collapse-plus bg-gray-800">
                    <input type="radio" name="my-accordion-3" checked="checked" /> 
                    <div className="collapse-title text-xl font-medium text-white">
                         What is Entertainemnt and Media?
                    </div>
                    <div className="collapse-content text-white"> 
                        <p> Entertainemnt and Media is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
                           You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
                    </div>
                    </div>
                    <div className="collapse collapse-plus bg-gray-800">
                    <input type="radio" name="my-accordion-3" /> 
                    <div className="collapse-title text-xl font-medium text-white">
                         How much does Cost of any Brands?
                    </div>
                    <div className="collapse-content text-white"> 
                        <p>Watch  Entertainemnt and Medias any brand show on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD2.99 to USD9.99 a month. No extra costs, no contracts.</p>
                    </div>
                    </div>
                    <div className="collapse collapse-plus bg-gray-800">
                    <input type="radio" name="my-accordion-3" /> 
                    <div className="collapse-title text-xl font-medium text-white">
                         Where can I watch?
                    </div>
                    <div className="collapse-content text-white"> 
                        <p>Watch anywhere, anytime. Sign in with your Entertainment and Media account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the this app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                            You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take brands with you anywhere.</p>
                    </div>
                    </div>
                    <div className="collapse collapse-plus bg-gray-800">
                    <input type="radio" name="my-accordion-3" /> 
                    <div className="collapse-title text-xl font-medium text-white">
                         Is Entertainment and Media is good for Kids?
                    </div>
                    <div className="collapse-content text-white"> 
                        <p>The Entertainment and Media Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
                            Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
                    </div>
            </div>
        </div>
    );
};

export default FAQ;