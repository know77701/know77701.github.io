import "./chart.css";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart({title, data, dataKey, grid}) {

  return (
    <div className='chart'>
      <h3>{title}</h3>
      <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart data={data}>
        {grid &&<CartesianGrid strokeDasharray="5 5" />}
          <XAxis dataKey="name" stroke="#8884d8"/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
