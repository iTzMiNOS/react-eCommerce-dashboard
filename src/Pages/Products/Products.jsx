import React from 'react'
import Table from '../../Components/Table/Table'
import { prodColumns, prodRows } from '../../Components/Table/data'
import './Products.css'
import NewData from '../NewData/NewData'

export default function Products(){

    const [open, setOpen] = React.useState(false)
    open ? document.body.style.overflow ="hidden" : document.body.style.overflow ="auto";
    return (
        <div className="products">
            <div className="info-container flex items-center gap-[20px] mb-[20px]">
                <h1 className="text-2xl">Products</h1>
                <button onClick={() => setOpen(true)} className="p-[5px] rounded-md transition ease-in-out delay-150 bg-white text-black hover:scale-105 hover:bg-gray-300 duration-300">
                    Add New Product
                </button>
            </div>
                <Table url="products" cols={prodColumns} rows={prodRows}/>
                {open && <NewData url="user" cols={prodColumns} setOpen={setOpen}/>}
        </div>
    )
}