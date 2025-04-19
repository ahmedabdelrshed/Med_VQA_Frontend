import QuestionSkeleton from "./QuestionSkeleton";

const RenderQuestionSkeleton = () => {
  return (
    <div className="lg:pt-10 px-3 pt-2 lg:max-w-2xl overflow-auto over m-auto">
      <QuestionSkeleton />
      <QuestionSkeleton />
    </div>
  );
};

export default RenderQuestionSkeleton;
