// importo elementi per gestione router
import { BrowserRouter, Routes, Route } from "react-router-dom"

// importo il layout
import DefaultLayout from "../layouts/DefaultLayout"

// importo le page
import HomePage from "../pages/HomePage"
import FilmPage from "../pages/FilmPage"

// importo del provider context globale
import { GlobalProvider } from "../contexts/GlobalContext"

function App() {

  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path='/' element={<HomePage />} />
              <Route path='/movies/:id' element={<FilmPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
