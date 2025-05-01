import { useEffect, useState } from "react";
import getSharedChat from "../hooks/useGetSharedChat";
import { TQuestion } from "../Types";
import RenderQuestionSkeleton from "../components/questions/RenderQuestionSkeleton";
import QuestionsList from "../components/questions/QuestionsList";
import { useParams } from "react-router";

const ShareChat = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState<TQuestion[] | null>(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) getSharedChat({ setIsLoading, setQuestions, id });
  }, [id]);

  return (
    <div>
      <header className="flex items-center bg-gray-300 px-5 py-2 justify-between lg:px-20 lg:py-3">
        <img src="/images/logo.png" className="w-30 lg:w-38 " alt="" />
        <button className="bg-white cursor-pointer border py-2 px-6 w-fit  rounded-lg font-medium border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">
          Join US
        </button>
      </header>
      <div className=" relative    z-0 mt-5">
        {isLoading ? (
          <RenderQuestionSkeleton />
        ) : (
          questions?.length && (
            <div className="h-[84vh]">
              <QuestionsList Questions={questions} />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ShareChat;
