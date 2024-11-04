import React from 'react';

export const Work = () => {
    return (
        <section
            id="work"
            className="min-h-screen flex flex-col items-center justify-center py-10 px-5 bg-[#f4f4f5]"
        >
            <div className="max-w-screen-lg w-full">

                {/* Section Title */}
                <h1 className="text-center text-4xl font-roboto-slab font-bold mb-10">Work Experience & Education</h1>

                {/* Download Resume */}
                <div className="flex justify-end mb-8">
                <a href="./assets/current-resume.pdf" download="Caiden Merklin's Resume.pdf" className="text-gray-400 hover:underline">
    Download My Resume :)
</a>                </div>

                {/* Careers Section */}
                <div className="mb-16">
                    <h2 className="text-center text-red-600 font-bold text-lg mb-8">Careers</h2>

                    {/* Timeline Entry */}
                    <div className="grid grid-cols-5 gap-4 items-start mb-10">
                        {/* Date */}
                        <div className="col-span-2 text-right text-gray-600 pr-2">
                            <p>Current - May 2023</p>
                        </div>

                        {/* Circle and Line */}
                        <div className="relative flex flex-col items-center">
                            <div className="w-4 h-4 rounded-full bg-gray-400"></div>
                            <div className="w-[1px] h-full bg-black absolute top-4" style={{ height: 'calc(100% + 2rem)' }}></div>
                        </div>

                        {/* Job Details */}
                        <div className="col-span-2 text-left pl-2">
                            <h3 className="font-bold">EHS Systems Development</h3>
                            <a href="https://www.group20consulting.com" className="text-blue-500">Group20 Consulting</a>
                            <p className="mt-2">Skills: UI Development, Client Consultation, Project Management, JavaScript, Unit Testing, Regression Testing, Documentation</p>
                        </div>
                    </div>

                    {/* Another Timeline Entry */}
                    <div className="grid grid-cols-5 gap-4 items-start mb-10">
                        {/* Date */}
                        <div className="col-span-2 text-right text-gray-600 pr-2">
                            <p>Sep 2022 - Apr 2023</p>
                        </div>

                        {/* Circle and Line */}
                        <div className="relative flex flex-col items-center">
                            <div className="w-4 h-4 rounded-full bg-gray-400"></div>
                            <div className="w-[1px] h-full bg-black absolute top-4" style={{ height: 'calc(100% + 2rem)' }}></div>
                        </div>

                        {/* Job Details */}
                        <div className="col-span-2 text-left pl-2">
                            <h3 className="font-bold">EHS Application Analyst</h3>
                            <a href="https://www.westfraser.com" className="text-blue-500">West Fraser</a>
                            <p className="mt-2">Skills: Data Analysis, C#, .NET, ETL, SQL, JavaScript, Reporting</p>
                        </div>
                        {/* TODO ADD ROBOT SOCCER */}
                    </div>
                </div>

                {/* Education Section */}
                <div className="mt-10">
                    <h2 className="text-center text-red-600 font-bold text-lg mb-8">Education</h2>

                    {/* Timeline Entry for Education */}
                    <div className="grid grid-cols-5 gap-4 items-start mb-10">
                        {/* Date */}
                        <div className="col-span-2 text-right text-gray-600 pr-2">
                            <p>2021 - 2025</p>
                        </div>

                        {/* Circle and Line */}
                        <div className="relative flex flex-col items-center">
                            <div className="w-4 h-4 rounded-full bg-gray-400"></div>
                            <div className="w-[1px] h-full bg-black absolute top-4" style={{ height: 'calc(100% + 2rem)' }}></div>
                        </div>

                        {/* Education Details */}
                        <div className="col-span-2 text-left pl-2">
                            <h3 className="font-bold">Bachelor of Computing Science</h3>
                            <a href="https://www.sfu.ca" className="text-blue-500">Simon Fraser University</a>
                            <p className="mt-2">Relevant Courses: Software Engineering</p>
                        </div>
                    </div>

                    {/* Additional Education Timeline Entry */}
                    <div className="grid grid-cols-5 gap-4 items-start mb-10">
                        {/* Date */}
                        <div className="col-span-2 text-right text-gray-600 pr-2">
                            <p>Sep 2021 - Sep 2024</p>
                        </div>

                        {/* Circle and Line */}
                        <div className="relative flex flex-col items-center">
                            <div className="w-4 h-4 rounded-full bg-gray-400"></div>
                            {/* This line won't extend beyond the last circle */}
                            <div className="w-[1px] h-10 bg-black absolute top-4"></div>
                        </div>

                        {/* Education Details */}
                        <div className="col-span-2 text-left pl-2">
                            <h3 className="font-bold">Associates of Computer Science </h3>
                            <a href="https://langara.ca" className="text-blue-500">Langara College</a>
                            <p className="mt-2">Key Courses: Operating Systems, Object Oriented Programming, Data Structures</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}