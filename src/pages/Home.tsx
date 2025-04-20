import Hero from "../components/common/Hero/Hero";
import NavBar from "../components/common/NavBar/NavBar";

const Home = () => {
  
  return (
    <div className="min-h-screen">
      <div className="flex flex-col h-screen">
        <NavBar />
        <Hero />
      </div>
    </div>
  );
};

export default Home;
