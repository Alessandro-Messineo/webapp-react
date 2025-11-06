// importo Outlet
import { Outlet } from "react-router-dom"

// importo Header
import Header from "../components/Header"

// import comp loader
import Loader from "../components/Loader";

// import hook per contesto
import { useGlobal } from "../contexts/GlobalContext" 


export default function DefaultLayout() {

     const { isLoading } = useGlobal();

    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            {isLoading && <Loader />}
        </>
    )
}

