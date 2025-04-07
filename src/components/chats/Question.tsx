interface IProps {
  question: string;
  imageUrl: string;
}
const Question = ({ imageUrl, question }: IProps) => {
  return (
    <div className="max-w-sm mt-2">
      <img className="rounded-md w-2xs h-40" src={imageUrl} alt="" />
      <div className="w-fit max-w-sm mt-2 py-2 px-4 bg-white border-3 border-[#6178ff] rounded-full text-blue-400">
        <h1 className="   text-center ">{question}</h1>
      </div>
    </div>
  );
};

export default Question;
