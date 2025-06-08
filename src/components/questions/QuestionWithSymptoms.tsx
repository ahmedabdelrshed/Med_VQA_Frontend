interface QuestionWithSymptomsProps {
  symptoms: string;
}
const QuestionWithSymptoms = ({ symptoms }: QuestionWithSymptomsProps) => {
  return (
    <div className="question-text w-fit max-w-sm my-4 text-sm lg:text-[16px] py-1 px-4 bg-white border lg:border-3 border-[#6178ff] rounded-xl text-blue-400">
      <h1 className="   text-center ">{symptoms}</h1>
    </div>
  );
};

export default QuestionWithSymptoms;
