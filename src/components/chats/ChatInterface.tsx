import { useParams } from "react-router";
import QuestionInput from "./QuestionInput";
import QuestionsList from "./QuestionsList";
import { useGetQuestionsQuery } from "../../store/questions/questionsApi";
// import WelcomeMessage from "./WelcomeMessage";

const ChatInterface = () => {
  const { id } = useParams();
  const { data: questions } = useGetQuestionsQuery(id as string);
  return (
    <div className="h-[80vh] lg:h-screen relative  z-0">
      {questions && <QuestionsList Questions={questions.data} />}
      {/* <WelcomeMessage /> */}
      <QuestionInput />
    </div>
  );
};

export default ChatInterface;
