import { Grid } from "@mui/material"
import { Outlet } from "react-router-dom"
import LeftSide from "../Components/LeftSide/LeftSide"

function Root() {
  return (
    <div id="page">
      <Grid container component="main" sx={{ height: "100vh" }}>
          <Grid item xs={3}>
            <LeftSide/>
          </Grid>
          <Grid item xs={6}>
            <Outlet/>
          </Grid>
          <Grid item xs={3}></Grid>
      </Grid>
    </div>
    
  )
}

export default Root