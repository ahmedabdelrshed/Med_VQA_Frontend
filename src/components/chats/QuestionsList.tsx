import { useEffect, useRef } from "react";
import Question from "./Question";
import QuestionResponse from "./QuestionResponse";
import { TQuestion } from "../../Types";

interface IProps {
  Questions: TQuestion[];
}
const QuestionsList = ({ Questions }: IProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  });
  return (
    <div className="h-[58vh] lg:h-[72vh] lg:max-w-2xl overflow-auto over m-auto  lg:pt-10 px-3   ">
      {Questions.map((question) => (
        <div key={question._id}>
          <Question imageUrl={question.imageUrl} question={question.question} />
          <QuestionResponse response={question.answer} />
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default QuestionsList;
