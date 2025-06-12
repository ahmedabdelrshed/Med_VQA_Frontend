import ContactUS from "../components/ContactUS/ContactUS";
import Features from "../components/Features/Features";
import AssignHealthyDataModel from "../components/HealthyProfile/HealthyStatus/HealthyStatusData/AssignHealthyDataModel";
import FillOrSkipHealthyDataModel from "../components/HealthyProfile/HealthyStatus/HomeHealthyRecord/FillOrSkipHealthyDataModel";
import Hero from "../components/Hero/Hero";
import HowItWorks from "../components/HowItWork/HowItWork";
import LogoutModel from "../components/Modals/LogoutModel";
import NavBar from "../components/NavBar/NavBar";
import { useAppSelector } from "../store/hooks";
import { openModel } from "../utils/modelsFuns";

const Home = () => {
  const { isHasHealthRecord } = useAppSelector((state) => state.auth.user);
  if (isHasHealthRecord) {
    openModel("FillOrSkipHealthyDataModel");
  }
  const defaultHealthyData = {
    height_cm: "",
    weight_kg: "",
    has_diabetes: "",
    has_hypertension: "",
    has_heart_disease: "",
    is_smoker: "",
    activity_level: "",
  };
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
      <FillOrSkipHealthyDataModel />
      <AssignHealthyDataModel updateHealthData={defaultHealthyData} />
    </div>
  );
};

export default Home;
