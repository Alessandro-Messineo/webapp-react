// importo elementi per gestione router
import { BrowserRouter, Routes, Route } from "react-router-dom"

// importo il layout
import DefaultLayout from "../layouts/DefaultLayout"

// importo le page
import HomePage from "../pages/HomePage"
import FilmPage from "../pages/FilmPage"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/films/:id' element={<FilmPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
