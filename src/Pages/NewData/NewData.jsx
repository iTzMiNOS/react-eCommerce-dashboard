/* eslint-disable react/prop-types */
import './NewData.css'



export default function NewData(props) {

    const submitData = (event) => {
        event.preventDefault();
        //add to api
    }

    return (
        <div className="new-data w-[100%] h-[100%] absolute flex items-center  justify-center top-0 left-0 bottom-0 right-0 overflow-hidden bg-[rgba(0,0,0,0.724)]">
            <div className="modal p-[50px] rounded-[10px] bg-[color:var(--main-bg)] relative">
                <span onClick={() => props.setOpen(false)} className="close absolute top-[10px] cursor-pointer right-[10px]">X</span>
                <h1 className="mb-[40px] text-[24px] text-[color:var(--soft-text)]">Add new {props.url}</h1>
                <form className="flex flex-wrap max-w-[500px] justify-between" onSubmit={submitData}>
                    {props.cols.filter((element) => element.field !== "id" && element.field !== "created" && element.field !== "customer").map(col => (
                        <div key={col.id} className="item w-[47%] flex flex-col gap-[10px] mb-[20px]">
                            <label className="text-[14px]">{col.headerName}</label>
                            <input className="p-[10px] bg-transparent text-white outline-none border-[color:var(--soft-text)] border-solid border-[1px] rounded-[3px]" type={col.type} placeholder={col.placehold} />
                        </div>
                    ))}
                    <button className="w-[100%] p-[10px] text-black rounded-[3px] bg-white cursor-pointer">Submit</button>
                </form>
            </div>
        </div>
    )
}
