import { IconButton } from '@mui/material';
import {styled} from "@mui/material/styles";


const CustomIconButton = styled(IconButton)(({theme})=>({
    color: "white",
    backgroundColor: theme.palette.primary.main,
    borderRadius: 0,
    "&:hover": {
        color: "white",
        backgroundColor: theme.palette.primary.dark
    }
}))

export default CustomIconButton
