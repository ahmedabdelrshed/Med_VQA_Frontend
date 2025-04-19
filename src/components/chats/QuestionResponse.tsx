const QuestionResponse = ({ response }: { response: string }) => {
  return (
    <div className="w-fit max-w-sm mt-2 py-1 lg:py-2 text-sm lg:text-[16px] gradient-bg  text-white rounded-full px-4 ml-auto">
      <h1 className="text-center">{response} 😔</h1>
    </div>
  );
};

export default QuestionResponse;
