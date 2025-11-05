import "./sidebar.css"
import { useNavigate } from "react-router-dom";

function Sidebar() {

    const navigate = useNavigate();

    const irPara = (caminho: string) => {
        window.scrollTo(0, 0);
        navigate(caminho);
    };


    return (
        <div className="sidebar-menu">

            <div className="sidebar-title-space">    
                <div className="sidebar-title">𖦹 Navegação 𖦹</div>
            </div>
                
                <div className="" onClick={() => irPara("/home")}>
                <p className="sidebar-textbig">• Página inicial</p>
                </div>
                
                <div className="" onClick={() => irPara("/contexto")}>
                <p className="sidebar-textbig">• Contexto histórico</p>
                </div>
                
                <div className="" onClick={() => irPara("/cultura")}>
                <p className="sidebar-textbig">• Cultura pop</p>
                </div>
                    
                    <div className="" onClick={() => irPara("/musica-emo")}>
                    <p className="sidebar-textlittle">Música Emo</p>
                    </div>
                    
                    <div className="" onClick={() => irPara("/musica-scene")}>
                    <p className="sidebar-textlittle">Música Scene</p>
                    </div>
                    
                    <div className="" onClick={() => irPara("/moda-emo")}>
                    <p className="sidebar-textlittle">Moda Emo</p>
                    </div>
                    
                    <div className="" onClick={() => irPara("/moda-scene")}>
                    <p className="sidebar-textlittle">Moda Scene</p>
                    </div>
                    
                    <div className="" onClick={() => irPara("/filmes")}>
                    <p className="sidebar-textlittle">Filmes</p>
                    </div>
                    
                    <div className="" onClick={() => irPara("/livros")}>
                    <p className="sidebar-textlittle">Livros</p>
                    </div>
                    
                    <div className="" onClick={() => irPara("/series")}>
                    <p className="sidebar-textlittle">Séries</p>
                    </div>
                    
                    <div className="" onClick={() => irPara("/animes")}>
                    <p className="sidebar-textlittle">Animes</p>
                    </div>

                    <div className="" onClick={() => irPara("/jogos")}>
                    <p className="sidebar-textlittle">Jogos</p>
                    </div>
                    
                    <p className="sidebar-textlittle">Memes</p>
                    
                    <div className="" onClick={() => irPara("/fotografia")}>
                    <p className="sidebar-textlittle">Fotografia</p>
                    </div>
                    
                    <div className="" onClick={() => irPara("/decoracao")}>
                    <p className="sidebar-textlittle">Decoração</p>
                    </div>
                    
                    <p className="sidebar-textlittle">Arte e Estética</p>
                    
                    <p className="sidebar-textlittle">Internet</p>
                    
                    <p className="sidebar-textlittle">Saúde mental</p>

                <div className="" onClick={() => irPara("/materiais")}>
                <p className="sidebar-textbig">• Materiais</p>
                </div>

                    <div className="" onClick={() => irPara("/diy")}>
                    <p className="sidebar-textlittle">Ideias de DIY</p>
                    </div>
                    
                    <div className="" onClick={() => irPara("/wallpapers")}>
                    <p className="sidebar-textlittle">Wallpapers</p>
                    </div>
                    
                    <div className="" onClick={() => irPara("/png")}>
                    <p className="sidebar-textlittle">PNGs</p>
                    </div>
                    
                    <div className="" onClick={() => irPara("/blinkies")}>
                    <p className="sidebar-textlittle">Blinkies e Gifs</p>
                    </div>
                    
                    <div className="" onClick={() => irPara("/papel")}>
                    <p className="sidebar-textlittle">Papel carta</p>
                    </div>
                    
                    <div className="" onClick={() => irPara("/copiarcolar")}>
                    <p className="sidebar-textlittle">Copiar e colar</p>
                    </div>
                
                <div className="" onClick={() => irPara("/comunidades")}>
                <p className="sidebar-textbig">• Comunidades</p>
                </div>

                    <div className="" onClick={() => irPara("/nacional")}>
                    <p className="sidebar-textlittle">Nacional</p>
                    </div>

                    <p className="sidebar-textlittle">Internacional</p>

                <div className="" onClick={() => irPara("/sobre")}>
                <p className="sidebar-textbig">• Sobre o site</p>
                </div>

            
        
        </div>
    );
}

export default Sidebar;