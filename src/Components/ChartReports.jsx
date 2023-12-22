import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Container } from 'react-bootstrap';

const ChartReports = () => {
  // Sample data 
  const lineChartData = [
    { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  ];

  const barChartData = [
    { name: 'Category A', uv: 300, pv: 456 },
    { name: 'Category B', uv: 456, pv: 789 },
    { name: 'Category C', uv: 789, pv: 123 },
  ];

  return (
    <div>
      <Container>
            {/* Line Chart */}
        <LineChart width={600} height={300} data={lineChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
        </LineChart>

        {/* Bar Chart */}
        <BarChart width={600} height={300} data={barChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="uv" fill="#8884d8" />
            <Bar dataKey="pv" fill="#82ca9d" />
        </BarChart>
      </Container>
    </div>
  );
};

export default ChartReports;
