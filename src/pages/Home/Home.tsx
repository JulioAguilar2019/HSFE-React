import { People } from '@/DATA';
import { Person } from '@/models';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { useState } from 'react';
import { Checkbox } from '@mui/material';



export const Home = () => {
    const pageSize = 5;
    const [selectedPeople, setSelectedPeople] = useState<Person[]>([])

    const findPerson = (person: Person) => !!selectedPeople.find(p => p.id === person.id)
    const filterPerson = (person: Person) => selectedPeople.filter(p => p.id !== person.id)

    const handleChange = (person: Person) => {
        setSelectedPeople(findPerson(person) ? filterPerson(person) : [...selectedPeople, person])
    }

    const columns = [
        {
            field: 'actions',
            type: 'actions',
            sortable: false,
            headerName: '',
            width: 50,
            renderCell: (params: GridRenderCellParams) => <> {
                <Checkbox size='small' checked={findPerson(params.row)} onChange={() => handleChange(params.row)} />
            }</>
        },
        {
            field: 'name',
            headerName: 'Name',
            flex: 1,
            minWidth: 150,
            // para renderizar el contenido de la celda con otros datos de la fila
            // renderCell: (params: GridRenderCellParams) => <> {params.value + params.row.category}</>
            renderCell: (params: GridRenderCellParams) => <> {params.value}</>
        },
        {
            field: 'category',
            headerName: 'Category',
            flex: 1,
            renderCell: (params: GridRenderCellParams) => <> {params.value}</>
        },
        {
            field: 'company',
            headerName: 'Company',
            flex: 1,
            renderCell: (params: GridRenderCellParams) => <> {params.value}</>
        },
        {
            field: 'levelOfHappiness',
            headerName: 'Level Of Happiness',
            flex: 1,
            renderCell: (params: GridRenderCellParams) => <> {params.value}</>
        }
    ]
    return (

        <DataGrid
            rows={People}
            columns={columns}
            disableColumnSelector
            disableSelectionOnClick
            autoHeight
            pageSize={pageSize}
            rowsPerPageOptions={[pageSize]}
            getRowId={(row) => row.id}
        />

    )
}