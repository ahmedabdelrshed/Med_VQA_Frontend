import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { ChartData, ChartOptions } from "chart.js";
import { LevelTypeDiabetes, PredictionDiabetes } from "../../Types";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BloodSugarChar = ({
  mockDataPrediction,
}: {
  mockDataPrediction: PredictionDiabetes[];
}) => {
  // Define the levels and their corresponding colors
  const mockData = mockDataPrediction;
  interface LevelInfo {
    value: number;
    color: string;
  }

  type LevelMap = Record<LevelTypeDiabetes, LevelInfo>;

  // Define type for data points

  // Define the levels with proper typing
  const levels: LevelMap = {
    Normal: { value: 0, color: "rgb(75, 192, 92)" },
    "Potentially Dangerous": { value: 1, color: "rgb(255, 159, 64)" },
    Dangerous: { value: 2, color: "rgb(255, 99, 132)" },
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);

    // Format options
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "UTC", // Explicitly use UTC
    };

    return date.toLocaleString("en-US", options);
  };

  const data: ChartData<"line"> = {
    labels: mockData.map((item) => formatDate(item.createdAt)),
    datasets: [
      {
        label: "Blood Sugar Level",
        data: mockData.map((item) => levels[item.result].value),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.3,
        pointBackgroundColor: mockData.map((item) => levels[item.result].color),
        pointBorderColor: mockData.map((item) => levels[item.result].color),
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  };

  // Chart options with proper typing
  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },

      tooltip: {
        callbacks: {
          label: (context) => {
            const levelEntry = Object.entries(levels).find(
              ([, value]) => value.value === context.parsed.y
            );
            return levelEntry ? levelEntry[0] : "";
          },
        },
      },
    },
    scales: {
      y: {
        ticks: {
          callback: function (tickValue: number | string): string | null {
            const levelEntry = Object.entries(levels).find(
              ([, level]) => level.value === Number(tickValue)
            );
            return levelEntry ? levelEntry[0] : null;
          },
        },
        min: -0.5,
        max: 2.5,
        grid: {
          color: "rgba(0,0,0,0.1)",
          lineWidth: 1,
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default BloodSugarChar;
