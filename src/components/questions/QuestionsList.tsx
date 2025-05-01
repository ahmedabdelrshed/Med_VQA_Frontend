import { useEffect, useRef } from "react";
import Question from "./Question";
import QuestionResponse from "./QuestionResponse";
import { TQuestion } from "../../Types";
import DelQuestionModal from "../Modals/question/DelQuestionModel";
import UpdateQuestionModal from "../Modals/question/updateQuestionModel";

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
    <div className=" lg:max-w-2xl overflow-auto over m-auto h-full lg:pt-10 px-3   ">
      {Questions.map((question) => (
        <div key={question._id}>
          <Question
            imageUrl={question.imageUrl}
            question={question.question}
            id={question._id}
          />
          <QuestionResponse response={question.answer} />
        </div>
      ))}
      <div ref={messagesEndRef} />
      <DelQuestionModal />
      <UpdateQuestionModal />
    </div>
  );
};

export default QuestionsList;
