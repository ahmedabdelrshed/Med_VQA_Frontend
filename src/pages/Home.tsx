import Features from "../components/Features/Features";
import Hero from "../components/Hero/Hero";
import NavBar from "../components/NavBar/NavBar";

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col h-screen">
        <NavBar />
        <Hero />
      </div>
      <Features/>
    </div>
  );
};

export default Home;
