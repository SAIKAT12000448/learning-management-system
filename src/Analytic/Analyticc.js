import React, { PureComponent } from 'react';
import {Barchart,Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart } from 'recharts';

const data = [
  {
    name: 'A',
    year: 2010,
    growth: 2400,
    amt: 2400,
  },
  {
    name: ' B',
    year: 2011,
    growth: 1398,
    amt: 2210,
  },
  {
    name: 'C',
    year: 2012,
    growth: 2800,
    amt: 2290,
  },
  {
    name: 'D',
    year: 2013,
    growth: 3908,
    amt: 2000,
  },
  {
    name: 'E',
    year: 2014,
    growth: 4800,
    amt: 2181,
  },
  {
    name: 'F',
    year: 2015,
    growth: 3800,
    amt: 3000,
  },
  {
    name: 'G',
    year:2020,
    growth: 4300,
    amt: 4400,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/synchronized-area-chart-kpg1s';
  render() {
    return (
      <div style={{ width: '80%' }}>
       
            <h1 className="text-center p-3">Analytic of growth</h1>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="growth" stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
        </ResponsiveContainer>


        <br />
        <h1 className="text-center p-3">student get job</h1>
        <ResponsiveContainer width="80%" height={200}>
          <BarChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Bar type="monotone" dataKey="amt" />
          </BarChart>
        </ResponsiveContainer>  
      
      </div>
    );
  }
}
