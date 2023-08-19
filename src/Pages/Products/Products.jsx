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
            if(toastrType === "delete") toast("Deleted Successfully!")
            else if(toastrType === "add") toast("Added Successfully!")
        }
        },[prods, isLoading,toastr,toastrHelper,toastrType])

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
                <button onClick={() => {setOpen(true); scrollToTop();}} className="p-[5px] rounded-md transition ease-in-out delay-150 bg-[color:var(--btn-bg)] text-[color:var(--btn-text)] hover:scale-105 hover:bg-gray-300 duration-300">
                    Add New Product
                </button>
            </div>
                <Table setToastrType={setToastrType} setToastrHelper={setToastrHelper} setToastr={setToastr} setIsLoading={setIsLoading} url="products" cols={colsData} rows={prods}/>
                {open && <NewData setToastrType={setToastrType} setToastrHelper={setToastrHelper} setToastr={setToastr} setIsLoading={setIsLoading} url="product" cols={colsData} setOpen={setOpen}/>}
        </div>
    )
}