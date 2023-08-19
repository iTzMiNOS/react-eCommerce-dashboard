/* eslint-disable react/prop-types */

import React from 'react';
import './NewData.css'

function formatDate(date) {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${day}/${month}/${year}`;
}

export default function NewData(props) {

  const [formData, setFormData] = React.useState({ created: formatDate(new Date()) });

  React.useEffect(() => {
    setFormData({ ...formData, created: formatDate(new Date()) });
  }, [formData]);

    const submitData = (event) => {

        event.preventDefault();


        fetch(`api/${props.url}s`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        })
          .then(res => {
            if (!res.ok) {
              throw new Error("Something went wrong");
            }
            props.setOpen(false);
            props.setIsLoading(false);
            props.setToastr(true);
            props.setToastrHelper(true);
            props.setToastrType("add");
          })
          .catch(e => {
            console.log(e);
          });
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
    
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

    return (
        <div className="new-data w-[100%] h-[100%] absolute flex items-center  justify-center top-0 left-0 bottom-0 right-0 overflow-hidden bg-[rgba(0,0,0,0.724)]">
            <div className="modal p-[50px] rounded-[10px] bg-[color:var(--main-bg)] relative">
                <span onClick={() => props.setOpen(false)} className="close absolute top-[10px] cursor-pointer right-[10px]">X</span>
                <h1 className="mb-[40px] text-[24px] text-[color:var(--soft-text)]">Add new {props.url}</h1>
                <form method="post" className="flex flex-wrap max-w-[500px] justify-between" onSubmit={submitData}>
                    {props.cols.filter((element) => element.field !== "id" && element.field !== "created").map(col => (
                        <div key={col.id} className="item w-[47%] flex flex-col gap-[10px] mb-[20px]">
                            <label className="text-[14px]">{col.headerName}</label>
                            {col.type === 'boolean' ? (
                            <input className="p-[10px] bg-transparent text-white outline-none border-[color:var(--soft-text)] border-solid border-[1px] rounded-[3px]" onChange={handleChange} name={col.field} type="checkbox" checked={formData[col.field] || false} placeholder={col.placehold} />
                            ) : (<input className="p-[10px] bg-transparent text-white outline-none border-[color:var(--soft-text)] border-solid border-[1px] rounded-[3px]" onChange={handleChange} name={col.field} type={col.type} value={formData[col.field] || ''} placeholder={col.placehold} />)}
                            </div>
                    ))}
                    <button type="submit" className="w-[100%] p-[10px] text-black rounded-[3px] bg-white cursor-pointer">Submit</button>
                </form>
            </div>
        </div>
    )
}
