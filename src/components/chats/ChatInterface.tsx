import { useParams } from "react-router";
import QuestionForm from "../questions/QuestionForm";
import QuestionsList from "../questions/QuestionsList";
import { useGetQuestionsQuery } from "../../store/questions/questionsApi";
import WelcomeMessage from "./WelcomeMessage";
import RenderQuestionSkeleton from "../questions/RenderQuestionSkeleton";
import ButtonShareShat from "./ButtonShareShat";

const ChatInterface = () => {
  const { id } = useParams();
  const { data: questions, isLoading } = useGetQuestionsQuery(id as string);
  return (
    <div className="h-[80vh] lg:h-screen relative    z-0">
      {isLoading ? (
        <RenderQuestionSkeleton />
      ) : questions?.data.length ? (
        <div className="">
          <ButtonShareShat />
            <div className="h-[58vh] lg:h-[79vh]">
            <QuestionsList Questions={questions.data} />
        </div>
        </div>
      ) : (
        <WelcomeMessage />
      )}
      <QuestionForm />
    </div>
  );
};

export default ChatInterface;
