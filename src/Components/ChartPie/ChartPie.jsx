/* eslint-disable react/prop-types */
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import './ChartPie.css'

export default function ChartPie(props) {
    const COLORS = ['#0088FE', '#FF8042', '#FFBB28', 'gray'];

    return (
        <div className="chart-pie h-[100%] flex flex-col justify-between">
            <h1 className="xxl:text-[24px]">{`${props.title} (Total: ${props.datas.map(obj => obj.count).reduce((acc, cur) => acc + cur, 0)})`}</h1>
            <div className="chart h-[100%] w-[100%] items-center justify-center flex">
                <ResponsiveContainer width="99%" height={300}>
                    <PieChart> 
                        <Tooltip contentStyle={{background:"white",borderRadius:"5px"}}/>
                        <Pie
                        data={props.datas}
                        innerRadius={"70%"}
                        outerRadius={"90%"}
                        paddingAngle={5}
                        dataKey={props.dataKey}
                        >
                        {props.datas.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="legends sm:hidden lg:flex justify-between text-[12px] gap-[10px]">
                {props.datas.map(element =>(
                    <div className="legend flex flex-col gap-[5px] items-center" key={element.name}>
                        <div className="title flex gap-[5px] items-center">
                            <div className="dot w-[10px] h-[10px] rounded-[5px]" style={{background:element.color}} />
                            <span>{element.name}</span>
                        </div>
                        <span className="ml-5">{element.count}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
