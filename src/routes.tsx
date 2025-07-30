import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Cultura from "./pages/Cultura"
import Contexto from "./pages/Contexto"
import Materiais from "./pages/Materiais"
import Comunidades from "./pages/Comunidades"

import MusicaEmo from "./pages/Subpages/musica-emo"

function AppRoutes(){
    return(
        <BrowserRouter basename="/Site-Emos-Nao-Morreram">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/cultura" element={<Cultura />} />
                <Route path="/contexto" element={<Contexto />} />
                <Route path="/materiais" element={<Materiais />} />
                <Route path="/comunidades" element={<Comunidades />} />

                <Route path="/musica-emo" element={<MusicaEmo />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
