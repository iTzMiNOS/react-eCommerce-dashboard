import React from 'react'
import './Profile.css'
import ChartLine from '../../Components/ChartLine/ChartLine'
import { profileData } from '../../Components/ChartLine/data'
import { Link } from 'react-router-dom'



export default function Profile() {
    // eslint-disable-next-line no-unused-vars
    const [prof,setProf] = React.useState({})

    React.useEffect(() => {
        fetch('/api/profiles')
            .then(res => res.json())
            .then(data => setProf(data.profiles))
            .catch(err => console.log(err))
    },[])
    console.log(prof)

    const memberColor = () => {
        if(prof.subscription === "GOLD"){
            return "gold"
        }else if(prof.subscription === "DIAMOND"){
            return "cyan"
        }
    }

    return (
        <div className="profile grid grid-flow-dense xxl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 sm:auto-rows-[minmax(120px,auto)] md:auto-rows-[minmax(180px,auto)] gap-[20px] ">
            <div className="box1 mx-auto text-center w-[100%] h-[100%] md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-1 p-[20px] rounded-[10px] border-solid border-[1px] border-[color:var(--soft-bg)]">
                <img src={prof.imgUrl} className="rounded-[50%] border-4 border-double border-black mx-auto w-[200px] h-[200px] mb-4" />
                <div className="info text-center">
                    <div className="name mb-2">{prof.name}</div>
                    <div style={{backgroundColor: memberColor()}} className="membership text-black max-w-max mb-2 mx-auto p-[5px] rounded-md">{`${prof.subscription} Member`}</div>
                    <div className="integrations font-semibold mb-6">{`Integrations: ${prof.integrations}`}</div>
                    <div className="created font-[500]" style={{display: prof.disp}}>{`Membership Valid Until ${prof.valid}`}</div>
                </div>
            </div>
            <div className="box2 col-span-1 row-span-1 p-[20px] rounded-[10px] border-solid border-[1px] border-[color:var(--soft-bg)]"><ChartLine {...profileData} /></div>
            <div className="box3 col-span-1 row-span-1 p-[20px] rounded-[10px] border-solid border-[1px] border-[color:var(--soft-bg)]">
                <div className="chart-container sm:flex-col md:flex-col lg:flex-row flex h-[100%]">
                    <div className="box lg:gap-1 md:gap-[20px] sm:gap-[20px] flex flex-[3] flex-col justify-between">
                        <div className="title flex items-center gap-[10px]">
                            <div className="text-[24px] mb-4">Personalized AI Assistant<hr className="border-t-2 border-[color:var(--soft-bg)]"/></div>
                        </div>
                            <p>Our Personalized AI Assistant streamlines your e-commerce dashboard, making it more efficient and insightful.</p>
                        <Link to="/" className="bg-[color:var(--btn-bg)] text-[color:var(--btn-text)] max-w-max p-2 rounded-md ml-auto mt-6">Learn More</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
