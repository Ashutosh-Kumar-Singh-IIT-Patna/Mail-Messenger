import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import SuspenseLoader from "../components/common/SuspenseLoader";
import { Box } from "@mui/material";

const Main=()=>{
    const [openDrawer,setOpenDrawer]=useState(true);
    const toggleDrawer=()=>{
        setOpenDrawer(prevState=>!prevState);
    }
    return (
        <>
            <Header toggleDrawer={toggleDrawer}/>
            <Box>
                <SideBar openDrawer={openDrawer}/>
                <Suspense fallback={<SuspenseLoader/>}>
                    <div style={openDrawer ? { marginLeft: 250, width: 'calc(100%-250px)' } : { width: 'calc(100%-250px)' }}>
                        <Outlet />
                    </div>
                </Suspense>
            </Box>
        </>
    )
}

export default  Main; 