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
import Filmes from "./pages/Subpages/filmes"
import Livros from "./pages/Subpages/livros"
import Series from "./pages/Subpages/series"
import Animes from "./pages/Subpages/animes"
import Jogos from "./pages/Subpages/jogos"
import Decoracao from "./pages/Subpages/decoracao"


/* outras subpaginas */
import DIY from "./pages/Subpages/diy"
import PNG from "./pages/Subpages/png"
import Blinkies from "./pages/Subpages/blinkies"
import Papel from "./pages/Subpages/papel"
import Copiarcolar from "./pages/Subpages/copiarcolar"
import Wallpapers from "./pages/Subpages/wallpapers"

/*Comunidades */
import Nacional from "./pages/Subpages/nacional"

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
                <Route path="/filmes" element={<Filmes />} />
                <Route path="/livros" element={<Livros />} />
                <Route path="/series" element={<Series />} />
                <Route path="/animes" element={<Animes />} />
                <Route path="/jogos" element={<Jogos />} />
                <Route path="/decoracao" element={<Decoracao />} />

                <Route path="/png" element={<PNG />} />
                <Route path="/blinkies" element={<Blinkies />} />
                <Route path="/papel" element={<Papel />} />
                <Route path="/copiarcolar" element={<Copiarcolar />} />
                <Route path="/wallpapers" element={<Wallpapers />} />
                <Route path="/diy" element={<DIY />} />
                
                <Route path="/nacional" element={<Nacional />} />

                
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
