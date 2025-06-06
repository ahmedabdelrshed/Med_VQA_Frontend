import Button from "../../ui/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IContact } from "../../Types";
import contactSchema from "../../validations/contactSchema";
import ErrorMsg from "../../ui/ErrorMsg";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect } from "react";
import toast from "react-hot-toast";
import actContactUs from "../../store/user/act/actContactUs";
import { motion } from "framer-motion";

const ContactForm = () => {
  const dispatch = useAppDispatch();
  const { error, loading } = useAppSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IContact>({
    resolver: yupResolver(contactSchema),
  });
  const onSubmit: SubmitHandler<IContact> = async (data) => {
    await dispatch(actContactUs(data))
      .unwrap()
      .then(() => {
        const modal = document.getElementById(
          "doneContactMod"
        ) as HTMLDialogElement | null;
        modal?.showModal();
        reset();
      });
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error, dispatch]);
  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      className="p-6  w-[100%]  xl:w-[50%]   flex flex-col  rounded-lg shadow-lg"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col md:flex-row md:space-x-4  ">
        <div className="w-full mb-4 md:mb-0">
          <label
            htmlFor="firstName"
            className="block text-sm  font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            {...register("firstName")}
            placeholder="First Name"
            autoComplete="new-password"
            className="mt-4 block w-full rounded-md border-[1.5px] border-gray-300 px-4 py-2.5 placeholder-gray-400 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 text-lg"
          />
          {errors.firstName && <ErrorMsg msg={errors.firstName?.message} />}
        </div>
        <div className="w-full ">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            {...register("lastName")}
            placeholder="Last Name"
            autoComplete="new-password"
            className="mt-4 block w-full rounded-md border-[1.5px] border-gray-300 px-4 py-2.5 placeholder-gray-400 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 text-lg"
          />
          {errors.lastName && <ErrorMsg msg={errors.lastName?.message} />}
        </div>
      </div>
      <div className="my-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email address
        </label>
        <input
          type="text"
          id="email"
          placeholder="Email Address"
          {...register("email")}
          autoComplete="new-password"
          className="mt-4 block w-full rounded-md border-[1.5px] border-gray-300 px-4 py-2.5 placeholder-gray-400 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 text-lg"
        />
        {errors.email && <ErrorMsg msg={errors.email?.message} />}
      </div>
      <div className="my-2">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message
        </label>
        <textarea
          id="message"
          {...register("message")}
          rows={4}
          className="block p-2.5 w-full shadow-sm text-lg text-gray-900  mt-3 rounded-lg border-[1.5px] border-gray-300  focus:outline-none  focus:ring-blue-500  focus:border-blue-500 "
          placeholder="Write your message here..."
        ></textarea>
        {errors.message && <ErrorMsg msg={errors.message?.message} />}
      </div>
      <Button
        width="w-fit"
        isLoading={loading}
        className="bg-blue-600 mt-2 px-6 hover:bg-blue-500"
        disabled={Object.keys(errors).length > 0 || loading}
      >
        Send Message
      </Button>
    </motion.form>
  );
};

export default ContactForm;
