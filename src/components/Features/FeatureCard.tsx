import { IconType } from "react-icons/lib";

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: IconType;
}
const FeatureCard = ({ description, Icon, title }: FeatureCardProps) => {
  return (
    <div className="rounded-lg border border-none shadow-lg  bg-white ">
      <div className="p-6 flex flex-col text-center items-center">
        <div className="mb-4 rounded-full bg-blue-100 p-3">
          <Icon className="h-6 w-6 text-blue-500" />
        </div>
        <h3 className="text-lg font-semibold  mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
