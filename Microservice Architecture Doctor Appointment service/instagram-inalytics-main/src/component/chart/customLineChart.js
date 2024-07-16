import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ImpressionsBarChart = ({ data, name, days }) => {
  console.log("name", name, typeof name, days);
  const labels = data.map((item) =>
    new Date(item.end_time).toLocaleDateString()
  );
  const values = data.map((item) => item.value);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: name,
        data: values,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `${name}Impressions Over the Last 30 ${days}`,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default ImpressionsBarChart;
