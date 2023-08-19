import React from 'react'
import Table from '../../Components/Table/Table'
import './Orders.css'
import NewData from '../NewData/NewData'
import { ToastContainer, toast } from 'react-toastify'

const colsData = [
    { field: 'id', headerName: 'ID', width: 50 },
    {
      field: 'name',
      headerName: 'Product Name',
      width: 130,
      editable: true,
    },
    {
        field: 'source',
        headerName: 'Supplier',
        width: 130,
        editable: true,
    },
    {
        field: 'market',
        headerName: 'Market',
        headerAlign: "left",
        width: 130,
        editable: true,
    },
    {
      field: 'price',
      headerName: 'Price',
      type: "number",
      headerAlign: "center",
      align: "center",
      width: 70,
      editable: true,
    },
    {
      field: 'profit',
      headerName: 'Profit',
      type: "number",
      headerAlign: "center",
      align: "center",
      width: 70,
      editable: true,
    },
    {
        field: 'created',
        headerName: 'Add Date',
        headerAlign: "center",
        align: "center",
        width: 130,
        editable: true,
    },
    {
      field: 'customer',
      headerName: 'Customer',
      headerAlign: "center",
      align: "center",
      width: 100,
      editable: true,
    },
    {
        field: 'shipped',
        headerName: 'Shipped',
        headerAlign: "center",
        type: "boolean",
        align: "center",
        width: 70,
        editable: true,
    },
]

export default function Orders(){

    const [orders,setOrders] = React.useState([])
    
    const [isLoading, setIsLoading] = React.useState(false);

    const [toastr, setToastr] = React.useState(true);

    const [toastrType, setToastrType] = React.useState("");
    
    const [toastrHelper, setToastrHelper]  = React.useState(false);

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    }


    React.useEffect(() => {
        if (!isLoading) {
        fetch('/api/orders')
            .then(res => res.json())
            .then(data => setOrders(data.orders))
            .catch(err => console.log(err))
            setIsLoading(true)
        }else if(toastr && toastrHelper){
            fetch('/api/orders')
            .then(res => res.json())
            .then(data => setOrders(data.orders))
            .catch(err => console.log(err))
            setToastr(false)
            if(toastrType === "delete") toast("Deleted Successfully!")
            else if(toastrType === "add") toast("Added Successfully!")
        }
        },[orders, isLoading,toastr,toastrHelper,toastrType])
    

    const [open, setOpen] = React.useState(false)
    open ? document.body.style.overflow ="hidden" : document.body.style.overflow ="auto";
    return (
        <div className="orders">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="light"
            />
            <div className="info-container flex items-center gap-[20px] mb-[20px]">
                <h1 className="text-2xl">Orders</h1>
                <button onClick={() => {setOpen(true); scrollToTop();}} className="p-[5px] rounded-md transition ease-in-out delay-150 bg-white text-black hover:scale-105 hover:bg-gray-300 duration-300">
                    Add New Order
                </button>
            </div>
                <Table setToastrType={setToastrType} setToastrHelper={setToastrHelper} setToastr={setToastr} setIsLoading={setIsLoading} url="orders" cols={colsData} rows={orders}/>
                {open && <NewData setToastrType={setToastrType} setToastrHelper={setToastrHelper} setToastr={setToastr} setIsLoading={setIsLoading} url="order" cols={colsData} setOpen={setOpen}/>}
        </div>
    )
}