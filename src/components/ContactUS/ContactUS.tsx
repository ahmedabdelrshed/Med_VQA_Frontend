import contact from "../../Animations/Contact.json";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import ContactForm from "./ContactForm";
import DoneContact from "../Modals/DoneContact";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const ContactUS = () => {
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);
  useEffect(() => {
    const lottie = lottieRef.current;
    if (!lottie) return;

    // 3 seconds = frame 90 (assuming 30fps)
    const startFrame = 55;
    const endFrame = contact.op;

    // Play only from 3s to the end and loop
    lottie.playSegments([startFrame, endFrame], true);
  }, []);
  return (
    <section
      className="bg-slate-100 dark:bg-black lg:px-16 transition-colors duration-300"
      id="contact"
    >
      <div className="py-8 px-4">
        {/* Heading */}
        <motion.h2
          className="mb-4 text-4xl italic font-bold tracking-wide text-blue-600 dark:text-blue-400 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Contact US
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="mb-8 lg:mb-10 italic xl:px-96 text-center text-gray-600 dark:text-gray-300 sm:text-xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Got a technical issue? Want to send feedback about any feature? Need
          details about our Business plan? Let us know.
        </motion.p>

        {/* Form & Animation */}
        <div className="flex items-center flex-col-reverse xl:flex-row">
          <ContactForm />

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="hidden mx-auto xl:block"
          >
            <Lottie
              animationData={contact}
              loop
              autoplay={false}
              lottieRef={lottieRef}
            />
          </motion.div>
        </div>
      </div>

      <DoneContact />
    </section>
  );
};

export default ContactUS;
