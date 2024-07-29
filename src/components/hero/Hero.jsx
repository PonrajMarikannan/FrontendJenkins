import React from "react";

function Hero() {
    

    return (
        <div className="bg-gray-900 min-h-screen">
            <header>
                <nav className="items-center pt-5 px-4 mx-auto max-w-screen-4xl sm:px-8 sm:flex sm:space-x-6">
                    <ul className="py-4 flex-1 items-center flex space-x-3 sm:space-x-6 sm:justify-end">
                        
                        <li>
                            <a href="./Login" className="flex items-center text-gray-100">
                                Log In
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
                <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                    <h1 role='hero-name' className="text-white font-bold text-4xl xl:text-3xl">
                        MANAGING CRIME DATA
                        <span className="text-blue-500"> TRACKING JUSTICE EFFICIENTLY</span>
                    </h1>
                    <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                        A modern crime file management system ensures secure storage, efficient
                        organization, and transparent access to critical information. It integrates
                         advanced technology to streamline data entry, retrieval, and analysis, facilitating
                          swift decision-making by law enforcement agencies. By centralizing and digitizing 
                          records, it enhances collaboration among investigators, prosecutors, and other 
                          stakeholders, improving overall efficiency in handling cases.
                    </p>
                    <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                        <a href="./Login" className="px-7 py-3 w-full bg-white text-gray-800 text-center rounded-md shadow-md block sm:w-auto">
                            Get started
                        </a>
                    </div>
                </div>
                <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
                    <img src="https://myciti.in/wp-content/uploads/2021/02/complaint-01.png" className="w-full mx-auto sm:w-10/12 lg:w-full" alt="Students" />
                </div>
            </section>
        </div>
    );
}

export default Hero;

