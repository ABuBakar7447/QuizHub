import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip} from 'recharts';

import './Statistics.css'

const Statistics = () => {
    const data = useLoaderData()
    
    const chartdata = data.data
    

    // const data = [
    //     {
    //       name: 'Page A',
    //       uv: 4000,
    //       pv: 2400,
    //       amt: 2400,
    //     },
    //     {
    //       name: 'Page B',
    //       uv: 3000,
    //       pv: 1398,
    //       amt: 2210,
    //     },
    //     {
    //       name: 'Page C',
    //       uv: 2000,
    //       pv: 9800,
    //       amt: 2290,
    //     },
    //     {
    //       name: 'Page D',
    //       uv: 2780,
    //       pv: 3908,
    //       amt: 2000,
    //     },
    //     {
    //       name: 'Page E',
    //       uv: 1890,
    //       pv: 4800,
    //       amt: 2181,
    //     },
    //     {
    //       name: 'Page F',
    //       uv: 2390,
    //       pv: 3800,
    //       amt: 2500,
    //     },
    //     {
    //       name: 'Page G',
    //       uv: 3490,
    //       pv: 4300,
    //       amt: 2100,
    //     },
    //   ];
    return (
        <div className='linechart'>
            <div>
                <LineChart  width={300}
                    height={300}
                    data={chartdata}><Line type="monotone" dataKey="total" stroke="#82ca9d" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip></Tooltip>
                </LineChart>
            </div>

        </div>
    );
};

export default Statistics;