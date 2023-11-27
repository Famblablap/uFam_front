import { Grid } from "@mui/material"
import { Outlet } from "react-router-dom"
import LeftSide from "../Components/LeftSide/LeftSide"
import RigthSide from "../Components/RightSide/RightSide"

function Root() {
  return (
    <div id="page">
      <Grid container component="main" spacing={1} sx={{ height: "100vh", width: "100vw"}}>
          <Grid item xs={12} sm={3}>
            <LeftSide/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Outlet/>
          </Grid>
          <Grid item xs={12} sm={3}>
            <RigthSide/>
          </Grid>
      </Grid>
    </div>
    
  )
}

export default Root