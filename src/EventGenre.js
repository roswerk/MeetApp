import { getDefaultNormalizer } from '@testing-library/react';
import React, { PureComponent } from 'react';
import {useEffect, useState} from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from 'recharts';


const EventGenre = ({events}) => {

useEffect(() => {setData(() => getData()); }, [events]);
const [data, setData] = useState([]);

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

 const getData = () => {
    
  const genres = ["React", "JavaScript", "Node", "jQuery", "AngularJs"];

  let data = genres.map((genre) => {

    const value = events.filter(({summary}) => 
      summary.split(" ").includes(genre)).length
  return {name: genre, value};
  })
  data = data.filter(data => data.value)
return data;
}


    return (
      <ResponsiveContainer height={400}>
        <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ percent }) => `${(percent * 100).toFixed(0)}%`}>
          {
            data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))
          }
        </Pie>
        <Legend align="center" height={45} />
        </PieChart>
      </ResponsiveContainer>
    );
  }

    export default EventGenre;

