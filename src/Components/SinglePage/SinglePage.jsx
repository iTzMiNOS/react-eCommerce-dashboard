/* eslint-disable react/prop-types */
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import './SinglePage.css'


export default function SinglePage(props) {

    return (
        <div className="single-page flex xxl:flex-row sm:flex-col xl:gap-[50px] md">
            <div className="view flex-[1]">
                <div className="info">
                    <div className="top-info flex items-center gap-[20px]">
                        <h1 className="font-[500] text-[32px]">{props.title}</h1>
                        <button className="p-[5px] rounded-md transition ease-in-out delay-150 bg-white text-black hover:scale-105 hover:bg-slate-100 duration-300">Update</button>
                    </div>
                    <div className="details text-[18px]">
                        {Object.entries(props.info).map((item) => (
                        <div key={item[0]} className="item my-[30px] mx-0">
                            <span className="item-title font-[600] mr-[10px] capitalize">{`${item[0]}:`}</span>
                            <span className="item-value">{item[1]}</span>
                        </div>
                        ))}
                    </div>
                </div>
                <hr className="w-[90%] lg:block sm:hidden h-0 border-[0.5] border-solid border-gray-600 my-[20px] mx-0"/>
                {props.chart && props.datas && <div className="chart lg:block sm:hidden mt-[50px] w-[80%] h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                        width={500}
                        height={300}
                        data={props.datas.data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        {props.datas.dataKeys.map(dataKey => (
                            <Line key={dataKey.id} type="monotone" dataKey={dataKey.name} stroke={dataKey.color} />
                        ))}
                        </LineChart>
                    </ResponsiveContainer>
                </div>}
            </div>
            <div className="activities flex-[1]">
                <h2 className="mb-[20px]">Latest Activities</h2>
                {props.activities && <ul>
                    {props.activities.map(act => (
                        <li key={act.text} className="list-none relative w-[1px] pt-[50px] bg-red-600 after:content-[''] after:absolute after:w-[10px] after:h-[10px] after:rounded-[50%] after:left-[50%] after:bottom-0 after:bg-red-600 after:translate-x-[-50%]">
                            <div className="lg:min-w-[480px] sm:min-w-[250px] p-[15px] bg-[#f45b6810]">
                                <p className="mb-[5px]">{act.text}</p>
                                <time className="text-[12px]">{act.time}</time>
                            </div>
                        </li>
                    ))}
                </ul>}
            </div>
        </div>
    )
}
