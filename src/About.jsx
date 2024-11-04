import React from 'react'
import { ABOUT_TEXT, HOBBIES_TEXT } from './constants'
import programming from './assets/programming-languages.png';
import computerStack from './assets/stack-of-computers.jpg';

export const About = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center bg-[#9aa3a5] bg-cover bg-center py-10"
        >
            <div className="grid grid-cols-5 gap-4 w-full max-w-screen-xl px-10">

                {/* Left box */}
                <div className="col-span-1  min-h-[10vh] self-start flex items-center justify-center">
                    {/* src = https://www.pngegg.com/en/png-ctesp */}
                    <img src={programming} alt="Programming Languages" className="object-contain max-h-full" />
                </div>

                {/* Main content */}
                <div className="col-span-3 text-center" >

                    <h1 className="text-1xl font-bold text-red-800 mb-2 font-roboto-slab">About</h1>
                    {/* Make about Roboto Slab */}
                    <p className=" text-4xl font-bold font-roboto-slab ">A Quick Introduction</p>
                    {/* Make this text  Roboto Slab*/}
                    <p className="text-stone-800 text-lg text-left mt-10 font-roboto-mono font-thin">{ABOUT_TEXT}</p>
                    {/* Make this text Roboto Mono */}
                    <p className="text-stone-800 text-lg text-left mt-4 font-roboto-mono font-thin">{HOBBIES_TEXT}</p>
                    {/* Make this text Roboto Mono */}
                </div>

                {/* Right box */}
                <div className="col-span-1 h-[80vh] flex items-center justify-center">
                    <img src={computerStack} alt="Stack of Computers" className="object-cover h-full w-full" />
                </div>
            </div>
        </section>
    );
};
