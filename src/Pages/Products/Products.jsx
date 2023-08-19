import React from 'react'
import Table from '../../Components/Table/Table'
import './Products.css'
import NewData from '../NewData/NewData'
import { ToastContainer, toast } from 'react-toastify'

const colsData = [
    { field: 'id', headerName: 'ID', width: 50 },
    {
      field: 'name',
      headerName: 'Product Name',
      width: 150,
      editable: true,
    },
    {
        field: 'source',
        headerName: 'Supplier',
        width: 150,
        editable: true,
    },
    {
        field: 'market',
        headerName: 'Market',
        headerAlign: "left",
        width: 150,
        editable: true,
    },
    {
      field: 'price',
      headerName: 'Price',
      type: "number",
      headerAlign: "center",
      align: "center",
      width: 100,
      editable: true,
    },
    {
      field: 'profit',
      headerName: 'Profit',
      type: "number",
      headerAlign: "center",
      align: "center",
      width: 100,
      editable: true,
    },
    {
        field: 'sold',
        headerName: 'Sold Units',
        type: "number",
        align: "center",
        width: 100,
        editable: true,
    },
    {
        field: 'created',
        headerName: 'Add Date',
        headerAlign: "center",
        align: "center",
        width: 150,
        editable: true,
    },
    {
      field: 'stock',
      headerName: 'In Stock Units',
      type: "number",
      align: "center",
      width: 100,
      editable: true,
  },]

export default function Products(){

    const [prods,setProds] = React.useState([])

    const [isLoading, setIsLoading] = React.useState(false);

    const [toastr, setToastr] = React.useState(true);
    
    const [toastrHelper, setToastrHelper]  = React.useState(false);
    
    React.useEffect(() => {
        if (!isLoading) {
        fetch('/api/products')
            .then(res => res.json())
            .then(data => setProds(data.products))
            .catch(err => console.log(err))
            setIsLoading(true)
        }else if(toastr && toastrHelper){
            fetch('/api/products')
            .then(res => res.json())
            .then(data => setProds(data.products))
            .catch(err => console.log(err))
            setToastr(false)
            toast("Deleted Successfully!")
        }
        },[prods, isLoading,toastr,toastrHelper])

    const [open, setOpen] = React.useState(false)
    open ? document.body.style.overflow ="hidden" : document.body.style.overflow ="auto";
    return (
        <div className="products">
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
                <h1 className="text-2xl">Products</h1>
                <button onClick={() => setOpen(true)} className="p-[5px] rounded-md transition ease-in-out delay-150 bg-white text-black hover:scale-105 hover:bg-gray-300 duration-300">
                    Add New Product
                </button>
            </div>
                <Table setToastrHelper={setToastrHelper} setToastr={setToastr} setIsLoading={setIsLoading} url="products" cols={colsData} rows={prods}/>
                {open && <NewData url="product" cols={colsData} setOpen={setOpen}/>}
        </div>
    )
}