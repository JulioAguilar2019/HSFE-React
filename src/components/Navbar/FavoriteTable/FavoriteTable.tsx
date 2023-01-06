import { Person } from "@/models";
import { addFavorite, removeFavorite } from "@/redux/slices";
import { AppStore } from "@/redux/store";
import { IconButton } from "@mui/material";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';


export const FavoriteTable = () => {
    const pageSize = 5;
    const dispatch = useDispatch();
    const stateFavorites = useSelector((state: AppStore) => state.favorites)

    const handleClick = (person: Person) => {
        dispatch(removeFavorite(person))

    }
    const columns = [
        {
            field: 'actions',
            type: 'actions',
            sortable: false,
            headerName: '',
            width: 50,
            renderCell: (params: GridRenderCellParams) => <> {
                <IconButton aria-label="favorite" onClick={() => handleClick(params.row)}>
                    <DeleteIcon />
                </IconButton>
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