import contact from "../../Animations/Contact.json";
import Lottie from "lottie-react";
import ContactForm from "./ContactForm";
import DoneContact from "../Modals/DoneContact";

const ContactUS = () => {
  return (
    <section className="bg-slate-100  mb-4 lg:px-16" id="contact">
      <div className="py-8 px-4 ">
        <h2 className="mb-4 text-4xl italic  font-bold  tracking-wide text-blue-600  text-center  ">
          Contact US
        </h2>
        <p className="mb-8 lg:mb-10 italic xl:px-96 text-center text-gray-600  sm:text-xl">
          Got a technical issue? Want to send feedback about a any feature? Need
          details about our Business plan? Let us know.
        </p>
        <div className="flex items-center">
          <ContactForm />
          <div className="hidden mx-auto xl:block">
            <Lottie animationData={contact} />
          </div>
        </div>
      </div>
      <DoneContact />
    </section>
  );
};

export default ContactUS;
