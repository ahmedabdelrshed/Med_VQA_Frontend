import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title,
  BubbleController,
} from "chart.js";
import { Bubble } from "react-chartjs-2";
import { ChartData, ChartOptions } from "chart.js";
import { Prediction } from "../../Types";
import { formatDate } from "../../utils/getTime";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title,
  BubbleController
);
interface BubbleDataPoint {
  x: number;
  y: number;
  r: number;
  formattedDate: string;
  level: string;
}

const BloodPressureBubbleChart = ({
  mockDataPrediction,
}: {
  mockDataPrediction: Prediction[];
}) => {
  interface PressureLevelInfo {
    value: number;
    color: string;
  }

  const levels: Record<string, PressureLevelInfo> = {
    Normal: { value: 0, color: "rgb(75, 192, 92)" },
    Warning: { value: 1, color: "rgb(255, 206, 86)" },
    "At Risk": { value: 2, color: "rgb(54, 162, 235)" },
    Borderline: { value: 3, color: "rgb(153, 102, 255)" },
    Danger: { value: 4, color: "rgb(255, 99, 132)" },
  };

  const sortedData = [...mockDataPrediction].sort(
    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  );

  const data: ChartData<"bubble"> = {
    datasets: [
      {
        type: "bubble",
        label: "Vertical Lines",
        data: sortedData.flatMap((item, index) => {
          // Create multiple points to form a vertical line
          const points = [];
          const y = levels[item.result].value;
          // Add points from y=0 to the bubble's position
          for (let i = 0; i <= y; i += 0.1) {
            points.push({
              x: index,
              y: i,
              r: 1, // Very small radius for line effect
              formattedDate: formatDate(item.createdAt),
            });
          }
          return points;
        }),
        backgroundColor: "rgba(200, 200, 200, 0.5)", // Light gray color
        borderColor: "rgba(200, 200, 200, 0.5)",
        hoverRadius: 0, // Disable hover effect
      },
      // Bubble dataset
      {
        type: "bubble",
        label: "Blood Pressure Status",
        data: sortedData.map((item, index) => ({
          x: index,
          y: levels[item.result].value,
          r: 10,
          formattedDate: formatDate(item.createdAt),
          level: item.result,
        })),
        backgroundColor: sortedData.map((item) => levels[item.result].color),
        borderColor: sortedData.map((item) => levels[item.result].color),
      },
    ],
  };

  const options: ChartOptions<"bubble"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        filter: (tooltipItem) => {
          return tooltipItem.datasetIndex === 1;
        },
        callbacks: {
          label: (context) => {
            const dataPoint = context.raw as BubbleDataPoint;
            return `${dataPoint.level} - ${dataPoint.formattedDate}`;
          },
        },
      },
      legend: {
        display: false, // Hide legend
      },
    },
    scales: {
      x: {
        type: "linear",
        offset: true,
        grid: {
          display: false,
        },
        ticks: {
          callback: function (value) {
            const dataPoint = data.datasets[1].data[
              value as number
            ] as BubbleDataPoint;
            return dataPoint?.formattedDate || "";
          },
          maxRotation: 45,
          minRotation: 45,
          autoSkip: true,
          maxTicksLimit: 10,
        },
      },
      y: {
        ticks: {
          callback: function (tickValue: string | number) {
            const entry = Object.entries(levels).find(
              ([, val]) => val.value === Number(tickValue)
            );
            return entry ? entry[0] : null;
          },
        },
        min: -0.5,
        max: 4.5,

        grid: {
          color: "rgba(0,0,0,0.1)",
          lineWidth: 1,
        },
      },
    },
  };

  return <Bubble data={data} options={options} height={300} />;
};

export default BloodPressureBubbleChart;
