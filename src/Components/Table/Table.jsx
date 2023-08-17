/* eslint-disable react/prop-types */
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import './Table.css'
import { Link } from 'react-router-dom'




export default function Table(props) {

    const deleteUser = (id) =>{
        console.log(id + ' has been deleted');
    }

    const actionColumn ={
        field: 'actions',
        headerName: 'Actions',
        width: 100,
        renderCell: (params) => {
            return <div className="action flex gap-[15px]">
                <Link to={`/${props.url}/${params.row.id}`}>
                    <img className="w-[20px] h-[20px] cursor-pointer" src="/view.svg" />
                </Link>
                <div className="delete" onClick={() => deleteUser(params.row.id)}>
                    <img className="w-[20px] h-[20px] cursor-pointer" src="/delete.svg" />
                </div>
            </div>
        }
    }
    return (
        <div className="table-container ">
            <DataGrid
                className="table-grid bg-white p-[20px] "
                rows={props.rows}
                columns={[...props.cols, actionColumn]}
                initialState={{
                pagination: {
                    paginationModel: {
                    pageSize: 10,
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
