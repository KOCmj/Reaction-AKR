import { useState } from 'react';
import Modal from './Modal';
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';



const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90, hideable: true},
    { field: 'IBSN', headerName: 'IBSN', flex: 1},
    { field: 'author', headerName: 'Author', flex: 1 },
    { field: 'category', headerName: 'Category', flex: 1 },
    { field: 'image', headerName: 'Image URL', flex: 1, renderCell: (params) => (<img src={params.value} alt="Book" style={{ width: 100, height: 100 }} />) },
    { field: 'published_date', headerName: 'Published Date', flex: 1 },
    { field: 'title', headerName: 'Title', flex: 2 }
];

function DataTable() {
    const [open, setOpen] = useState(false);
    const { contactData, getData } = useGetData();
    const [selectionModel, setSelectionModel] = useState<string[]>([]);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => { window.location.reload()}, 500)
      }
  

    return (
        <>
            <Modal
                id={selectionModel}
                open={open}
                onClose={handleClose}
            />
            <div className='flex flex-row justify-center items-center'>
                <div>
                    <button
                        className='border border-black m-3 p-3 bg-purple-700 rounded hover:bg-blue-800 hover:text-blue-300'
                        onClick={() => handleOpen()}
                    >
                        Create A Book
                    </button>
                    <button 
                        onClick={handleOpen} 
                        className='border px-8 border-black m-3 p-3 bg-purple-700 rounded hover:bg-blue-800 hover:text-blue-300'
                    >
                        Update
                    </button>
                    <button 
                        onClick={deleteData} 
                        className='border px-8 border-black m-3 p-3 bg-purple-700 rounded hover:bg-blue-800 hover:text-blue-300'
                    >
                        Delete
                    </button>
                </div>
            </div>
            <div className={open ? "hidden" : "container mx-auto my-5 flex flex-col"} style={{ height: 400, width: '100%' }}>
                <h2 className="p-3 bg-purple-700 my-2 rounded">Akashic Collections</h2>
                <DataGrid
                    rows={contactData}
                    columns={columns}
                    rowCount={5}
                    checkboxSelection={true}
                    onRowSelectionModelChange={(item: any) => { setSelectionModel(item) }}
                />
            </div>
        </>
    )
}

export default DataTable;
