import React from 'react'
import Table from '../../Components/Table/Table'
// eslint-disable-next-line no-unused-vars
import { userColumns, userRows } from '../../Components/Table/data'
import './Users.css'
import NewData from '../NewData/NewData'

export default function Users(){
    const [users,setUsers] = React.useState([])
    
    React.useEffect(() => {
        fetch('/api/users')
            .then(res => res.json())
            .then(data => setUsers(data.users))
            .catch(err => console.log(err))
        },[])

    const [open, setOpen] = React.useState(false)
    open ? document.body.style.overflow ="hidden" : document.body.style.overflow ="auto";
    return (
        <div className="customers">
            <div className="info-container flex items-center gap-[20px] mb-[20px]">
                <h1 className="text-2xl">Customers</h1>
                <button onClick={() => setOpen(true)} className="p-[5px] rounded-md transition ease-in-out delay-150 bg-white text-black hover:scale-105 hover:bg-gray-300 duration-300">
                    Add New Customer
                </button>
            </div>
                <Table url="customers" cols={userColumns} rows={users}/>
                {open && <NewData url="user" cols={userColumns} setOpen={setOpen}/>}
        </div>
    )
}