import React from 'react';
import projectMobile from '../../Picture/project-mobile.png';
import AboutDetails from './AboutDetails';
import useWindowPosition from './AboutHooks';



const About = () => {
    const animated = useWindowPosition('header', 0.6);
    return (
        <div>
            <div
                className="min-h-screen flex justify-center items-center flex-col"
                style={{
                    background: '#FEFEFE',
                }}
                id="mywork"
            >
                <h1 className="text-5xl font-dosis font-bold">About</h1>
                <p className="text-gray-600 text-2xl font-dosis mb-10">I have done</p>
                <div className="flex flex-col md:flex-row justify-between items-center w-11/12 ">
                    <img
                        src={projectMobile}
                        alt="phone prototype"
                        className="m-10 transtion width-20 duration-2000 ease-in-out z-10  md:w-3/5 w-4/5"
                        style={{ width: "40%" }}
                    />
                    <div
                        className="transtion duration-2000 ease-in-out p-10 max-w-xl lg:max-w-3xl rounded-lg hidden md:block"
                        style={{
                            border: '1px solid #e5ecf9',
                            transform: animated
                                ? 'translate(-10%, 0%) rotate3d(0.540, -0.95, 0, 22deg) rotateZ(7deg)'
                                : '',
                            boxShadow:
                                '35px 50px 90px -25px rgba(50, 50, 95, 0.5), 20px 35px 75px -35px rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        <AboutDetails />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;