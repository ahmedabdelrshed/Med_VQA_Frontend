import ContactUS from "../components/ContactUS/ContactUS";
import Features from "../components/Features/Features";
import Hero from "../components/Hero/Hero";
import HowItWorks from "../components/HowItWork/HowItWork";
import LogoutModel from "../components/Modals/LogoutModel";
import NavBar from "../components/NavBar/NavBar";

const Home = () => {
  return (
    <div className="min-h-screen scroll-smooth">
      <div className="flex flex-col h-screen">
        <NavBar />
        <Hero />
      </div>
      <Features />
      <HowItWorks />
      <ContactUS />
      <LogoutModel />
    </div>
  );
};

export default Home;
