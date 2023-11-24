import { Outlet } from "react-router-dom"

function HomeRoot () {
    return (
        <>
        <div>header</div>
        <Outlet/>
        <div>footer</div>
        </>
        
    )
}

export default HomeRoot