import ChartArea from '../../Components/ChartArea/ChartArea'
import { areaData } from '../../Components/ChartArea/data'
import ChartBox from '../../Components/ChartBox/ChartBox'
import { revenueData, visitData } from '../../Components/ChartBox/data'
import ChartLine from '../../Components/ChartLine/ChartLine'
import { leadData, salesData, orderData, marketingData } from '../../Components/ChartLine/data'
import ChartPie from '../../Components/ChartPie/ChartPie'
import { pieData } from '../../Components/ChartPie/data'
import RecentTransactions from '../../Components/RecentTransactions/RecentTransactions'
import './Home.css'

export default function Home(){
    return (
        <div className="home grid grid-cols-4 auto-rows-[minmax(180px,auto)] gap-[20px] ">
            <div className="box col-span-1 row-span-3 p-[20px] rounded-[10px] border-solid border-[1px] border-[color:var(--soft-bg)]">
                <RecentTransactions />
            </div>
            <div className="box col-span-1 row-span-1 p-[20px] rounded-[10px] border-solid border-[1px] border-[color:var(--soft-bg)]"><ChartLine {...leadData} /></div>
            <div className="box col-span-1 row-span-1 p-[20px] rounded-[10px] border-solid border-[1px] border-[color:var(--soft-bg)]"><ChartLine {...salesData} /></div>
            <div className="box col-span-1 row-span-3 p-[20px] rounded-[10px] border-solid border-[1px] border-[color:var(--soft-bg)]"><ChartPie {...pieData} /></div>
            <div className="box col-span-1 row-span-1 p-[20px] rounded-[10px] border-solid border-[1px] border-[color:var(--soft-bg)]"><ChartLine {...orderData} /></div>
            <div className="box col-span-1 row-span-1 p-[20px] rounded-[10px] border-solid border-[1px] border-[color:var(--soft-bg)]"><ChartLine {...marketingData} /></div>
            <div className="box col-span-2 row-span-2 p-[20px] rounded-[10px] border-solid border-[1px] border-[color:var(--soft-bg)]"><ChartArea {...areaData} /> </div>
            <div className="box col-span-1 row-span-1 p-[20px] rounded-[10px] border-solid border-[1px] border-[color:var(--soft-bg)]"><ChartBox {...revenueData}/></div>
            <div className="box col-span-1 row-span-1 p-[20px] rounded-[10px] border-solid border-[1px] border-[color:var(--soft-bg)]"><ChartBox {...visitData}/></div>
        </div>
    )
}