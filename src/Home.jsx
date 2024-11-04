import backgroundLocation from './assets/background-image.webp';
const Home = () => {
    return (
        <div style={{ abackgroundImage: `url(${backgroundLocation})` }}>
            <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r bg-gray-100 bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundLocation})` }}>
                <div className='text-center flex flex-col items-center'>
                    <h1 className="text-6xl font-thin font-little-days antialiased">Caiden Merklin</h1>
                    <h2 className="font-Gruppo antialiased">Software Engineer | Business Analyst | Computing Science</h2>
                    <hr className="w-[110%] border-t border-gray-400 mt-2" />

                </div>
                {/* Make a line here */}
            </section>
        </div>
    );
};

export default Home;