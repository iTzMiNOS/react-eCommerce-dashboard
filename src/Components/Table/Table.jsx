/* eslint-disable react/prop-types */
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import './Table.css'
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'


export default function Table(props) {

    const deleteItem = (id) => {
        
        fetch(`api/${props.url}/${id}`, {
          method: "DELETE"
        })
          .then(res => {
            if(!res.ok){
                throw new Error("Something went wrong");
            }
          })
          .catch(e => {
            console.log(e);
          });
      };
    

    const actionColumn ={
        field: 'actions',
        headerName: 'Actions',
        width: 100,
        renderCell: (params) => {
            return <div className="action flex gap-[15px]">
                <Link to={`/${props.url}/${params.row.id}`}>
                    <img className="w-[20px] h-[20px] cursor-pointer" src="/view.svg" />
                </Link>
                <div className="delete" onClick={() => {
                        deleteItem(params.row.id);
                        props.setIsLoading(false);
                        props.setToastr(true);
                        props.setToastrHelper(true);
                        props.setToastrType("delete");
                    }}>
                    <img className="w-[20px] h-[20px] cursor-pointer" src="/delete.svg" />
                </div>
            </div>
        }
    }
    return (
        <div className="table-container ">
            <DataGrid
                className="table-grid w-[80%] bg-white p-[20px] "
                rows={props.rows}
                columns={[...props.cols, actionColumn]}
                initialState={{
                pagination: {
                    paginationModel: {
                    pageSize: 7,
                    },
                },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                slots={{toolbar:GridToolbar}}
                slotProps={{toolbar:{
                                showQuickFilter:true,
                                quickFilterProps:{debounceMs:300},
                            }}}
            />
        </div>
    )
}
