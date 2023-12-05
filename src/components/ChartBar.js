import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: "Chart.js Bar Chart - Stacked",
    },
  },
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
};

const labels = [
  "Northern America",
  "Central America",
  "World",
  "",
  "Western Africa",
  "Western Asia",
  "Eastern Europe",
  "Central Africa",
  "Northern Africa",
  "Southern Africa",
  "Southern Asia",
  "Central Asia",
  "Eastern Asia",
  "South America",
  "South-Eastern Asia",
  "Eastern Africa",
  "Europe",
  "Western Europe",
  "Northern Europe",
  "Southern Europe",
  "Oceania",
  "Africa",
  "Asia",
  "world",
];

// import the json file and use it to populate the data
const fakedata = require("../jsondata.json");

const intensity = new Map();
for (const item of fakedata) {
  // Increase count +1 for regation if it exists
  if (intensity.has(item.region)) {
    intensity.set(item.region, intensity.get(item.region) + 1);
  } else {
    // Add new region to map
    intensity.set(item.region, 1);
  }
}

export const data = {
  labels,
  datasets: [
    {
      label: "Intensity",
      data: Array.from(intensity.values()),
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgb(255, 99, 132)",
      borderWidth: 1,
    },
  ],
};

export function ChartBar() {
  return <Bar options={options} data={data} />;
}
