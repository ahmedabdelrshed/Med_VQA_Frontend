import { IconType } from "react-icons/lib";

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: IconType;
}
const FeatureCard = ({ description, Icon, title }: FeatureCardProps) => {
  return (
    <div className="flex flex-col h-full rounded-lg border border-none shadow-lg bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="p-6 flex flex-col text-center items-center">
        <div className="mb-4 rounded-full bg-blue-100 dark:bg-blue-900 p-3 transition-colors duration-300">
          <Icon className="h-6 w-6 text-blue-500 dark:text-blue-300" />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
};


export default FeatureCard;
