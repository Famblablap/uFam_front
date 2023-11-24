import { Grid } from "@mui/material"
import { Outlet } from "react-router-dom"
import LeftSide from "../Components/LeftSide/LeftSide"
import RigthSide from "../Components/RightSide/RightSide"

function Root() {
  return (
    <div id="page">
      <Grid container component="main" sx={{ height: "100vh" }}>
          <Grid item sm={3}>
            <LeftSide/>
          </Grid>
          <Grid item sm={6}>
            <Outlet/>
          </Grid>
          <Grid item sm={3}>
            <RigthSide/>
          </Grid>
      </Grid>
    </div>
    
  )
}

export default Root