import { Person } from "@/models";
import { addFavorite } from "@/redux/slices";
import { AppStore } from "@/redux/store";
import { Checkbox } from "@mui/material";
import { GridRenderCellParams, DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const FavoriteTable = () => {
    const pageSize = 5;
    const dispatch = useDispatch();
    const stateFavorites = useSelector((state: AppStore) => state.favorites)
    const [selectedPeople, setSelectedPeople] = useState<Person[]>([])

    const findPerson = (person: Person) => !!selectedPeople.find(p => p.id === person.id)
    const filterPerson = (person: Person) => selectedPeople.filter(p => p.id !== person.id)

    const handleChange = (person: Person) => {
        const filteredPeople = findPerson(person) ? filterPerson(person) : [...selectedPeople, person]
        dispatch(addFavorite(filteredPeople))
        setSelectedPeople(filteredPeople)
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
            rows={stateFavorites}
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