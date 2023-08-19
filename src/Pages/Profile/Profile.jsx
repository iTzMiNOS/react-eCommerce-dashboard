import React from 'react'
import './Profile.css'



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

    return (
        <div className="profile grid grid-flow-dense xxl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 sm:auto-rows-[minmax(120px,auto)] md:auto-rows-[minmax(180px,auto)] gap-[20px] ">
            <div className="box1 sm:hidden md:grid col-span-1 row-span-1 w-[100%] h-[100%] p-[20px] rounded-[10px]"></div>
            <div className="box2 col-span-1 row-span-1 p-[20px] rounded-[10px]"><img src={prof.imgUrl} className="rounded-[50%]" /></div>
            <div className="box3 col-span-1 row-span-1 p-[20px] rounded-[10px] border-solid border-[1px] border-[color:var(--soft-bg)]"></div>
            <div className="box4 col-span-1 row-span-1 p-[20px] rounded-[10px] border-solid border-[1px] border-[color:var(--soft-bg)]"></div>
            <div className="box5 col-span-1 row-span-1 p-[20px] rounded-[10px] border-solid border-[1px] border-[color:var(--soft-bg)]">
                
            </div>
            <div className="box6 col-span-1 row-span-1 p-[20px] rounded-[10px] border-solid border-[1px] border-[color:var(--soft-bg)]"></div>
        </div>
    )
}
