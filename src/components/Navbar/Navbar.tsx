import FavoriteIcon from '@mui/icons-material/Favorite';
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { CustomDialog, dialogOpenSubject$ } from "../CustomModal";
import { FavoriteTable } from "./FavoriteTable";

export const Navbar = () => {

    const handleClick = () => {
        dialogOpenSubject$.setSubject = true;
    }



    return (
        <>
            <CustomDialog>
                <FavoriteTable />
            </CustomDialog>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        New test
                    </Typography>
                    <Button variant="contained" startIcon={<FavoriteIcon />} onClick={handleClick}>
                        Open favorites
                    </Button>

                </Toolbar>
            </AppBar>
        </>
    )
}