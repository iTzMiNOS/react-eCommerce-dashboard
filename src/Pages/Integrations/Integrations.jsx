import React from 'react'
import Table from '../../Components/Table/Table'
import './Integrations.css'
import NewData from '../NewData/NewData'
import { ToastContainer, toast } from 'react-toastify'

const colsData = [
    { field: 'id', headerName: 'ID', width: 50 },
    {
        field: 'dispName',
        headerName: 'Display Name',
        type: "text",
        width: 150,
        editable: true,
    },
    {
        field: 'shopAddress',
        headerName: 'Shop Address',
        type: "text",
        width: 150,
        editable: true,
    },
    {
        field: 'visits',
        headerName: 'Visits (Weekly)',
        type: "number",
        headerAlign: "center",
        align: "center",
        width: 150,
        editable: true,
    },
    {
        field: 'orders',
        headerName: 'Orders (Weekly)',
        type: "number",
        align: "center",
        width: 150,
        editable: true,
    },
    {
        field: 'activeAPI',
        headerName: 'API',
        headerAlign: "center",
        type: "boolean",
        align: "center",
        width: 100,
        editable: true,
    },
    {
        field: 'sync',
        headerName: 'Product Sync',
        headerAlign: "center",
        type: "boolean",
        align: "center",
        width: 100,
        editable: true,
    },
]

export default function Integrations(){

    const [integrations,setIntegrations] = React.useState([])
    
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
        fetch('/api/integrations')
            .then(res => res.json())
            .then(data => setIntegrations(data.integrations))
            .catch(err => console.log(err))
            setIsLoading(true)
        }else if(toastr && toastrHelper){
            fetch('/api/integrations')
            .then(res => res.json())
            .then(data => setIntegrations(data.integrations))
            .catch(err => console.log(err))
            setToastr(false)
            if(toastrType === "delete") toast("Deleted Successfully!")
            else if(toastrType === "add") toast("Added Successfully!")
        }
        },[integrations, isLoading,toastr,toastrHelper,toastrType])
    

    const [open, setOpen] = React.useState(false)
    open ? document.body.style.overflow ="hidden" : document.body.style.overflow ="auto";
    return (
        <div className="integrations">
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
                <h1 className="text-2xl">Integrations</h1>
                <button onClick={() => {setOpen(true); scrollToTop();}} className="p-[5px] rounded-md transition ease-in-out delay-150 bg-white text-black hover:scale-105 hover:bg-gray-300 duration-300">
                    Add New Integration
                </button>
            </div>
                <Table setToastrType={setToastrType} setToastrHelper={setToastrHelper} setToastr={setToastr} setIsLoading={setIsLoading} url="integrations" cols={colsData} rows={integrations}/>
                {open && <NewData setToastrType={setToastrType} setToastrHelper={setToastrHelper} setToastr={setToastr} setIsLoading={setIsLoading} url="integration" cols={colsData} setOpen={setOpen}/>}
        </div>
    )
}