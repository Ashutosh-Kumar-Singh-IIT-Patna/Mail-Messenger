import { CircularProgress,Box, Typography } from "@mui/material";

const SuspenseLoader=()=>{
    return(
        <Box
            style={{textAlign:'center'}}
        >
            <CircularProgress/>
            <Typography>Loading...</Typography>
        </Box>
    )
}

export default SuspenseLoader;