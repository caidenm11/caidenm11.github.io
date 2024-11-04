import React from 'react'

export const About = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-[#9aa3a5] bg-cover bg-center">
            <div></div>
            {/* Start 1/3 down the page and add the red about text with the A quick introduction */}

            <div className=" text-red-800 text-center" style={{ marginTop: '-20%' }}>
                <h1 className="text-4xl font-bold">About</h1>
                <p className="mt-4 text-lg">A quick introduction</p>
            </div>
        </section>
    )
}
