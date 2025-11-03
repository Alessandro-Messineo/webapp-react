// importo Outlet
import { Outlet } from "react-router-dom"

// importo Header
import Header from "../components/Header"


export default function DefaultLayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    )
}

