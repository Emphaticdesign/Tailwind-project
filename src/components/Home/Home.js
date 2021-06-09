import React from 'react';
import { Link } from 'react-router-dom'
import About from '../About/About';
import './Home.css';

const Home = () => {
    return (
        <>
            <section className="Home">
                <div className="overlay flex flex-col items-center justify-center text-white px-5">
                    <h1 className="text-5xl font-bold text-right mb-10 lg:text-center lg:text-7xl lg:px-56">
                        I create <span className="text-green-500">Tailwind</span> project for the first time
          </h1>

                    <div className="ml-auto lg:ml-0">
                        <Link
                            to="/hire"
                            className="mr-5 bg-green-500 p-2 px-4 rounded-full font-semibold transition-all hover:bg-green-800"
                        >
                            Get Started
                        </Link>
                        <Link
                            to="/projects"
                            className="mr-5 bg-white text-green-500 p-2 px-4 rounded-full font-semibold transition-all hover:bg-green-800 hover:text-white"
                        >
                            Projects
                        </Link>
                    </div>
                </div>
            </section>
            <div>
                <About></About>
            </div>
        </>
    );
};

export default Home;