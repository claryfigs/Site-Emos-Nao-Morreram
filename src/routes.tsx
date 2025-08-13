import { BrowserRouter, Route, Routes } from "react-router-dom"

/*paginas basicas */
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Cultura from "./pages/Cultura"
import Contexto from "./pages/Contexto"
import Materiais from "./pages/Materiais"
import Comunidades from "./pages/Comunidades"

/*paginas de cultura pop */
import MusicaEmo from "./pages/Subpages/musica-emo"
import MusicaScene from "./pages/Subpages/musica-scene"
import ModaEmo from "./pages/Subpages/moda-emo"
import ModaScene from "./pages/Subpages/moda-scene"
import Fotografia from "./pages/Subpages/fotografia"

/* outras subpaginas */
import PNG from "./pages/Subpages/png"
import Blinkies from "./pages/Subpages/blinkies"
import Papel from "./pages/Subpages/papel"

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
                <Route path="/musica-scene" element={<MusicaScene />} />
                <Route path="/moda-emo" element={<ModaEmo />} />
                <Route path="/moda-scene" element={<ModaScene />} />
                <Route path="/fotografia" element={<Fotografia />} />

                <Route path="/png" element={<PNG />} />
                <Route path="/blinkies" element={<Blinkies />} />
                <Route path="/papel" element={<Papel />} />

                
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
