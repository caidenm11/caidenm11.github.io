import backgroundLocation from './assets/background-image.webp';
const Home = () => {
    return (
        <div style={{backgroundImage: `url(${backgroundLocation})`}}>
      <section id="home" className="min-h-screen flex items-center justify-center bg-gray-100 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundLocation})` }}>
       
        <h1 className="text-4xl font-bold">Welcome to My Website</h1>
        {/* Make a line here */}
      </section>
      </div>
    );
  };
  
  export default Home;