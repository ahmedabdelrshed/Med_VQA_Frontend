import { useParams } from "react-router";
import QuestionForm from "./QuestionForm";
import QuestionsList from "./QuestionsList";
import { useGetQuestionsQuery } from "../../store/questions/questionsApi";
import WelcomeMessage from "./WelcomeMessage";
import RenderQuestionSkeleton from "./RenderQuestionSkeleton";

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
