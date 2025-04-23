import Button from "../../ui/Button";

const ContactForm = () => {
  return (
    <form
      autoComplete="off"
      className="p-6 lg:py-10 w-[100%]  xl:w-[50%]   flex flex-col  rounded-lg shadow-lg"
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
            placeholder="First Name"
            autoComplete="new-password"
            className="mt-4 block w-full rounded-md border-[1.5px] border-gray-300 px-4 py-3 placeholder-gray-400 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 text-lg"
          />
          {/* {errors.firstName && <ErrorMsg msg={errors.firstName?.message} />} */}
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
            placeholder="Last Name"
            autoComplete="new-password"
            className="mt-4 block w-full rounded-md border-[1.5px] border-gray-300 px-4 py-3 placeholder-gray-400 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 text-lg"
          />
          {/* {errors.firstName && <ErrorMsg msg={errors.firstName?.message} />} */}
        </div>
      </div>
      <div className="my-6">
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
          autoComplete="new-password"
          className="mt-4 block w-full rounded-md border-[1.5px] border-gray-300 px-4 py-3 placeholder-gray-400 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 text-lg"
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
          className="block p-2.5 w-full shadow-sm text-lg text-gray-900  mt-3 rounded-lg border-[1.5px] border-gray-300  focus:outline-none  focus:ring-blue-500  focus:border-blue-500 "
          placeholder="Write your message here..."
        ></textarea>
      </div>
      <Button width="w-fit" className="bg-blue-600 mt-2 px-6 hover:bg-blue-500">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
