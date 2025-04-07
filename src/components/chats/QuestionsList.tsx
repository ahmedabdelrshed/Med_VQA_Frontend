import { useEffect, useRef } from "react";
import Question from "./Question";
import QuestionResponse from "./QuestionResponse";

const QuestionsList = () => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, []);
  return (
    <div className="h-[65vh] lg:h-[72vh] lg:max-w-2xl overflow-auto over m-auto  pt-10 px-3   ">
      <Question />
      <QuestionResponse />
      <Question />
      <QuestionResponse /> <Question />
      <QuestionResponse />
      <div ref={messagesEndRef} />
    </div>
  );
};

export default QuestionsList;
