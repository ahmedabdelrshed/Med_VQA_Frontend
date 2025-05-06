import { TypeAnimation } from "react-type-animation";

const QuestionResponse = ({
  response,
  isNew,
}: {
  response: string;
  isNew: boolean;
}) => {
  return (
    <div className="w-fit max-w-sm  py-1 lg:py-2 text-sm lg:text-[16px] gradient-bg  text-white rounded-full px-4 ml-auto">
      <h1 className="text-center">
        {isNew ? (
          <>
            <span>{response.split(" ")[0]} </span>
            <TypeAnimation
              sequence={[response.split(" ").slice(1).join(" ")]}
              speed={30}
              wrapper="span"
              cursor={false}
            />
          </>
        ) : (
          response
        )}
      </h1>
    </div>
  );
};

export default QuestionResponse;
