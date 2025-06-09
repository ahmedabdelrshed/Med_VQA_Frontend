import { useEffect, useRef } from "react";
import QuestionWithImage from "./QuestionWithImage";
import QuestionResponse from "./QuestionResponse";
import { TQuestion } from "../../Types";
import DelQuestionModal from "../Modals/question/DelQuestionModel";
import UpdateQuestionModal from "../Modals/question/updateQuestionModel";
import QuestionWithSymptoms from "./QuestionWithSymptoms";

interface IProps {
  Questions: TQuestion[];
}
const QuestionsList = ({ Questions }: IProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const currentlyPlayingRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = (newAudio: HTMLAudioElement) => {
    if (
      currentlyPlayingRef.current &&
      currentlyPlayingRef.current !== newAudio
    ) {
      currentlyPlayingRef.current.pause();
      currentlyPlayingRef.current.currentTime = 0;
    }
    currentlyPlayingRef.current = newAudio;
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const isFirstRender = useRef(true);

  useEffect(() => {
    isFirstRender.current = false;
  }, []);
  useEffect(() => {
    scrollToBottom();
  });
  return (
    <div className=" lg:max-w-3xl overflow-auto over m-auto h-full lg:pt-10 px-3   ">
      {Questions.map((question, index) => (
        <div key={question._id}>
          {question.type === "Image" ? (
            <QuestionWithImage imageUrl={question.imageUrl} id={question._id} />
          ) : (
            <QuestionWithSymptoms symptoms={question.symptoms} />
          )}
          <QuestionResponse
            response={question.answer}
            isNew={!isFirstRender.current && index === Questions.length - 1}
            responseVoiceUrl={question.responseVoiceUrl}
            onPlay={handlePlay}
          />
        </div>
      ))}
      <div ref={messagesEndRef} />
      <DelQuestionModal />
      <UpdateQuestionModal />
    </div>
  );
};

export default QuestionsList;
