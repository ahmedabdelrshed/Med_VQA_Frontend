import Button from "../../ui/Button";
import Input from "../../ui/Input";

const ContactUS = () => {
  return (
    <section className="bg-sky-100 ">
      <div className="py-8  lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl italic  font-bold  tracking-wide text-blue-600  text-center  ">
          Contact US
        </h2>
        <p className="mb-8 lg:mb-16 italic text-center text-gray-600  sm:text-xl">
          Got a technical issue? Want to send feedback about a any feature? Need
          details about our Business plan? Let us know.
        </p>
        <div className="p-6 lg:py-10 bg-white w-sm md:w-[768px]  m-auto space-y-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row lg:space-x-4  mb-4">
            <div className="w-full mb-4 md:mb-0">
              <label
                htmlFor="firstName"
                className="block text-sm  font-medium text-gray-700"
              >
                First Name
              </label>
              <Input
                placeholder="First Name"
                // {...register("firstName")}
              />
              {/* {errors.firstName && <ErrorMsg msg={errors.firstName?.message} />} */}
            </div>
            <div className="w-full mb-4 md:mb-0">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <Input
                placeholder="Last Name"
                // {...register("firstName")}
              />
              {/* {errors.firstName && <ErrorMsg msg={errors.firstName?.message} />} */}
            </div>
          </div>
          <div className="my-3">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <Input
              placeholder="Email Address"
              // {...register("email")}
              // className="p-3"
            />
            {/* {errors.email && <ErrorMsg msg={errors.email?.message} />} */}
          </div>
          <div className="my-3">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="block p-2.5 w-full shadow-sm text-sm text-gray-900 bg-white mt-3 rounded-lg border-[1.7px] border-gray-300 focus:outline-none  focus:ring-blue-400 focus:border-blue-400"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <Button width="w-fit" className="bg-blue-600 mt-2 px-6 hover:bg-blue-500">
            Send Message
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactUS;
