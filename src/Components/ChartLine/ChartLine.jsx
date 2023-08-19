/* eslint-disable react/prop-types */


import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts'
import './ChartLine.css'
import {Link } from "react-router-dom"

export default function ChartLine(props) {
    return (
        <div className="chart-container sm:flex-col md:flex-col lg:flex-row flex h-[100%]">
            <div className="box lg:gap-1 md:gap-[20px] sm:gap-[20px] flex flex-[3] flex-col justify-between">
                <div className="title flex items-center gap-[10px] xxl:text-[14px]">
                    <img src={props.icon} />
                    <span>{props.title}</span>
                </div>
                <h1 className="xxl:text-[14px]">{props.datas.map(obj => obj.val).reduce((acc, cur) => acc + cur, 0)}</h1>
                <Link tp="/" style={{color:props.color}}>View More</Link>
            </div>
            <div className="chart-info flex flex-[2] flex-col justify-between">
                <div className="chart w-[100%] h-[100%]">
                <ResponsiveContainer width="99%" height="99%">
                    <LineChart data={props.datas}>
                    <Tooltip cursor={{display: "none"}} position={{x:10, y:60}} labelStyle={{display:"none"}} contentStyle={{background:"transparent" , border: "none"}} />
                    <Line 
                        dot={false}
                        type="monotone" 
                        dataKey={props.dataKey} 
                        stroke={props.color}
                        strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
                </div>
                <div className="text flex flex-col text-right">
                    <span className="percentage font-bold text-[20px]" style={{color:props.rate < 0 ? "tomato" : "limegreen"}}>{props.rate}%</span>
                    <span className="time text-[14px]">This Week</span>
                </div>

            </div>
        </div>
    )
}
