import Table from '../../Components/Table/Table'
import { columns, rows } from '../../Components/Table/data'
import './Users.css'

export default function Users(){
    return (
        <div className="users">
            <div className="info">
                <h1 className="">Users</h1>
                <button className="">Add New User</button>
            </div>
                <Table cols={columns} rows={rows}/>
        </div>
    )
}