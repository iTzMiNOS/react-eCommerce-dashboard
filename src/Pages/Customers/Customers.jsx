import React from 'react'
import Table from '../../Components/Table/Table'
import './Customers.css'
import NewData from '../NewData/NewData'
import { ToastContainer, toast } from 'react-toastify';

const colsData = [
    
    { field: 'id', headerName: 'ID', width: 50 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
        field: 'email',
        headerName: 'Mail Address',
        width: 200,
        editable: true,
    },
    {
        field: 'phone',
        headerName: 'Phone Number',
        width: 200,
        editable: true,
    },
    {
        field: 'country',
        headerName: 'Country',
        width: 100,
        editable: true,
    },
    {
        field: 'created',
        headerName: 'Joined Date',
        width: 100,
        editable: true,
    },
    {
        field: 'customer',
        headerName: 'Ordered',
        type: "boolean",
        width: 70,
        editable: true,
    },
];

export default function Customers(){

    const [customers,setCustomers] = React.useState([])

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
        if(!isLoading){
        fetch('/api/customers')
            .then(res => res.json())
            .then(data => setCustomers(data.customers))
            .catch(err => console.log(err))
            setIsLoading(true)
        }else if(toastr && toastrHelper){
            fetch('/api/customers')
            .then(res => res.json())
            .then(data => setCustomers(data.customers))
            .catch(err => console.log(err))
            setToastr(false)
            if(toastrType === "delete") toast("Deleted Successfully!")
            else if(toastrType === "add") toast("Added Successfully!")
        }
        },[customers, isLoading, toastr, toastrHelper,toastrType])

        
    const [open, setOpen] = React.useState(false)
    open ? document.body.style.overflow ="hidden" : document.body.style.overflow ="auto";
    return (
        <div className="customers">
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
                <h1 className="text-2xl">Customers</h1>
                <button onClick={() => {setOpen(true); scrollToTop();}} className="p-[5px] rounded-md transition ease-in-out delay-150 bg-white text-black hover:scale-105 hover:bg-gray-300 duration-300">
                    Add New Customer
                </button>
            </div>
                <Table setToastrType={setToastrType} setToastrHelper={setToastrHelper} setToastr={setToastr} setIsLoading={setIsLoading} url="customers" cols={colsData} rows={customers}/>
                {open && <NewData setToastrType={setToastrType} setToastrHelper={setToastrHelper} setToastr={setToastr} setIsLoading={setIsLoading} url="customer" cols={colsData} setOpen={setOpen}/>}
        </div>
    )
}