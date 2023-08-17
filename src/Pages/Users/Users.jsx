import Table from '../../Components/Table/Table'
import { columns, rows } from '../../Components/Table/data'
import './Users.css'

export default function Users(){
    return (
        <div className="users">
            <div className="info-container flex items-center gap-[20px] mb-[20px]">
                <h1 className="text-2xl">Users</h1>
                <button className="p-[5px] rounded-md transition ease-in-out delay-150 bg-white text-black hover:scale-105 hover:bg-gray-300 duration-300">
                    Add New User
                </button>
            </div>
                <Table url="users" cols={columns} rows={rows}/>
        </div>
    )
}