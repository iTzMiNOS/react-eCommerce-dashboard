/* eslint-disable react/prop-types */
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import './ChartArea.css'



export default function ChartArea(props) {
    return (
        <div className="chart-area w-[100%] h-[100%] flex flex-col justify-between">
            <h1 className="">{props.title}</h1>
            <div className="chart w-[100%] h-[300px]">
            <ResponsiveContainer width="99%" height="100%">
                <AreaChart
                data={props.datas}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={props.dataKey} />
                <YAxis />
                <Tooltip separator=" $"/>
                <Area type="monotone" dataKey="Woo" stackId="1" stroke="#0088FE" fill="#0088FE" />
                <Area type="monotone" dataKey="Shopify" stackId="1" stroke="#FF8042" fill="#FF8042" />
                <Area type="monotone" dataKey="Amazon" stackId="1" stroke="#FFBB28" fill="#FFBB28" />
                <Area type="monotone" dataKey="Other" stackId="1" stroke="gray" fill="gray" />
                </AreaChart>
            </ResponsiveContainer>
            </div>
        </div>
    )
}
