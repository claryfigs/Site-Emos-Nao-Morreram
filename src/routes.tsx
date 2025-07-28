import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Cultura from "./pages/Cultura"
import Contexto from "./pages/Contexto"
import Materiais from "./pages/Materiais"
import Comunidades from "./pages/Comunidades"

// Aqui são definidas todas as rotas existentes no sistema

function AppRoutes(){
    return(
        <BrowserRouter>
        
        <Routes>
            {/* Essa é a primeira página chamada */}
            <Route path="/" element={<Home/>}></Route>

            {/* Páginas principais */}
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/sobre" element={<Sobre/>}></Route>
            <Route path="/cultura" element={<Cultura/>}></Route>
            <Route path="/contexto" element={<Contexto/>}></Route>
            <Route path="/materiais" element={<Materiais/>}></Route>
            <Route path="/comunidades" element={<Comunidades/>}></Route>
        </Routes>
        
        </BrowserRouter>
    )
}
export default AppRoutes