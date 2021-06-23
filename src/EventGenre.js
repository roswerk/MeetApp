import { getDefaultNormalizer } from '@testing-library/react';
import React, { PureComponent } from 'react';
import {useEffect, useState} from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


const EventGenre = ({events}) => {

useEffect(() => {setData(() => getData()); }, [events]);
const [data, setData] = useState([]);

// const data = [
//   { name: 'Group A', value: 400 },
//   { name: 'Group B', value: 300 },
//   { name: 'Group C', value: 300 },
//   { name: 'Group D', value: 200 },
// ];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };

// export default class Example extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj';

 const getData = () => {
    
  const genres = ["React", "JavaScript", "Node", "jQuery", "AngularJs"];

  const data = genres.map((genre) => {

    const value = events.filter(({summary}) => 
      summary.split(" ").includes(genre)).length
  return {name: genre, value};
  })
return data;
}


    return (
      <ResponsiveContainer height={400}>
        <PieChart width={400} height={400}>
          <Pie
            data={getData()}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }

    export default EventGenre;

