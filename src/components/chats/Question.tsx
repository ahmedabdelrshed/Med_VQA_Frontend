interface IProps {
  question: string;
  imageUrl: string;
}
const Question = ({ imageUrl, question }: IProps) => {
  return (
    <div className="max-w-sm mt-2">
      <img
        className="rounded-md  w-48 h-28 lg:w-2xs lg:h-40"
        src={imageUrl}
        alt=""
      />
      <div className="w-fit max-w-sm mt-2 text-sm lg:text-[16px] py-1 px-4 bg-white border lg:border-3 border-[#6178ff] rounded-full text-blue-400">
        <h1 className="   text-center ">{question}</h1>
      </div>
    </div>
  );
};

export default Question;
