"use client"

import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Tell ChartJS the data that is going to be displayed
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

// Configuration of graph
export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Time Increase Per Lap',
      },
    },
};

const labels = [0,1,2,3,4,5,6,7,8,9] // The x-axis labels

// Placeholder data
export const data = {
    labels,
    datasets: [
      {
        label: 'C3 Compound',
        data: [0,0.05,0.1,0.15,0.2,0.25,0.3,0.35,0.4],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
};

export default function TirePerformanceGraph() {
    return (
        <div className="rounded-xl bg-white mt-5 w-2/5">
            <p className="font-kanit not-italic font-medium text-4xl flex w-full items-center justify-center">Time Increase Per Lap</p>
            <Line options={options} data={data} />
        </div>
    );
}