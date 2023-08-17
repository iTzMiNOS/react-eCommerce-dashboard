/* eslint-disable react/prop-types */
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts'
import './ChartBox.css'

export default function ChartBox(props) {
    return (
        <div className="chart-box w-[100%] h-[100%]">
            <h1 className="text[20px] mb-[20px]">{props.title}</h1>
            <div className="chart w-[100%] h-[100%]">
            <ResponsiveContainer width="99%" height={150}>
                <BarChart width={150} height={40} data={props.datas}>
                <XAxis dataKey="name" />
                <Tooltip cursor={{fill:"none"}} labelStyle={{display:"none"}} contentStyle={{backgroundColor: '#2a3447', borderRadius:"5px"}}/>
                <Bar dataKey={props.dataKey} fill={props.color} />
                </BarChart>
            </ResponsiveContainer>
            </div>
        </div>
    )
}
