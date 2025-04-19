import { useParams } from "react-router";
import QuestionForm from "../questions/QuestionForm";
import QuestionsList from "../questions/QuestionsList";
import { useGetQuestionsQuery } from "../../store/questions/questionsApi";
import WelcomeMessage from "./WelcomeMessage";
import RenderQuestionSkeleton from "../questions/RenderQuestionSkeleton";

const ChatInterface = () => {
  const { id } = useParams();

  const { data: questions, isLoading } = useGetQuestionsQuery(id as string);
  return (
    <div className="h-[80vh] lg:h-screen relative   z-0">
      {isLoading ? (
        <RenderQuestionSkeleton />
      ) : questions?.data.length ? (
        <QuestionsList Questions={questions.data} />
      ) : (
        <WelcomeMessage />
      )}
      <QuestionForm />
    </div>
  );
};

export default ChatInterface;
