/* eslint-disable react/prop-types */
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import './Table.css'



export default function Table(props) {

    return (
        <div className="table-container ">
            <DataGrid
                className="table-grid bg-white p-[20px] "
                rows={props.rows}
                columns={props.cols}
                initialState={{
                pagination: {
                    paginationModel: {
                    pageSize: 5,
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
