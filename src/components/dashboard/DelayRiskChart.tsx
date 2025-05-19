import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DelayRiskChart: React.FC = () => {
  // Sample data - in a real app, this would come from the backend
  const data = [
    {
      name: 'Highland Towers',
      predicted: 5,
      actual: 7,
    },
    {
      name: 'Harbor Bridge',
      predicted: 3,
      actual: 2,
    },
    {
      name: 'Metro Station',
      predicted: 8,
      actual: 10,
    },
    {
      name: 'Office Complex',
      predicted: 4,
      actual: 4,
    },
    {
      name: 'Riverside Apartments',
      predicted: 6,
      actual: 8,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
        <XAxis 
          dataKey="name" 
          tick={{ fontSize: 12 }}
          tickFormatter={(value) => value.split(' ')[0]} // Show only first word
        />
        <YAxis 
          tick={{ fontSize: 12 }}
          label={{ value: 'Delay (days)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle' } }} 
        />
        <Tooltip />
        <Legend />
        <Bar dataKey="predicted" name="Predicted Delay" fill="#3B82F6" />
        <Bar dataKey="actual" name="Actual Delay" fill="#F97316" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DelayRiskChart;