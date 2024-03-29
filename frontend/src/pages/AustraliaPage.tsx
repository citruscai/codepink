import React from 'react';
import AustraliaNews from '../components/Australianews';
import { emissionsData,waterUsageData } from '../data/AUemissionsdata';
import { Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import AustralianWasteData from '../components/AustralianWasteData';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    DoughnutController,
    ArcElement,
    Tooltip,
    Legend
  );
  

const AustraliaPage: React.FC = () => {
  return (
    <div>
    <h1 className="text-center mb-6">ConocoPhillips Australia</h1>
    <div className="flex justify-center gap-10 mb-10">
      <div className="w-1/2"  >
        <Bar data={emissionsData} />
      </div>
      <div className="w-1/2">
        <Doughnut data={waterUsageData} />
      </div>
      <div className="w-1/2">
          <AustralianWasteData/>
        </div>
    </div>

    <div className="flex flex-col min-h-screen">
        <h1 className='text-4xl font-bold animate-bounce color-darkblue text-center'>News Tracker:</h1>
      <AustraliaNews />
    </div>
  </div>
  );
}

export default AustraliaPage;
