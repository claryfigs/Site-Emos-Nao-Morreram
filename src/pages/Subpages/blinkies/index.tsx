import "./style.css"
import Header from "../../../components/header/header";
import Sidebar from "../../../components/sidebar/sidebar";
import BackgroundImage from '../../../assets/background.png'
import LinhaEmBranco from "../../../components/linha-embranco/linha-embranco";
import BotaoGrandeEstatico from "../../../components/botao-grande-estatico/botao-grande-estatico";
import { useNavigate } from "react-router-dom";
import BotaoIcone from "../../../components/botao-icone/botao-icone";
import CaixaImagem from "../../../components/caixa-imagem/caixa-imagem";

function Blinkies() {

    const isMobile = window.innerWidth < 768;

    const navigate = useNavigate();

     const irPara = (caminho: string) => {
         window.scrollTo(0, 0);
         navigate(caminho);
     };


    return (
        <div className="container">

            <div className="background-image" style={{ backgroundImage: `url(${BackgroundImage})` }}>
            </div>
            
            <Header/>

            <div className="box">
                <Sidebar/>

                {/* CAIXA BRANCA */}
                <div className="box-infos">

                    {/* Título com icone */}
                    <div className="title-space">
                        <h2> Blinkies e Gifs</h2>
                    </div>
                    
                    {/* CONTEÚDO DA PÁGINA------------------------------------ */}
                    
                    <h1>
                        Caso não saiba, GIF é a sigla para Graphics Interchange Format,
                        um formato de imagem que se tornou muito popular por permitir não apenas imagens estáticas, mas também <span className="estiloh1-3">{' '}animações simples</span>.
                        Blinkies são pequenas imagens gif que “piscam” ou trocam de cor, usadas principalmente em perfis, blogs,
                        fóruns e redes sociais antigas, geralmente em formato retangular.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://blinkies.cafe/blog/2022-06-06-recent-blinkies-feed/blinkiefeed-2022-06-03-500x170.gif"
                            alt="blinkies"
                            style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Blinkies. Fonte: https://blinkies.cafe/blog/2022-06-06-recent-blinkies-feed</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <div className="caixa-de-texto">
                            <h1>Onde posso encontrar bons gifs?</h1>
                        </div>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Blinkies Cafe</h3>

                    <h1>O site possui uma grande biblioteca de Blinkies separados por categorias. O site também disponibiliza uma extensão para google chrome.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://lh3.googleusercontent.com/CiNQj1qeDWJBZMldH05sn0TZEN7bH3V0DFPbyA6uEW31xYFj5HmwsQfOF_i4unp_KitwxYEPQJsSdO-a0T9AQkvK0g=s1280-w1280-h800"
                            alt="blinkies"
                            style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Blinkies. Fonte: https://chromewebstore.google.com/detail/blinkie-maker-blinkiescaf/eopblkihdgjjlipjpdjpekabokhlenoo?hl=pt_br&pli=1</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <a href="https://blinkies.cafe/" target="_blank" rel="noopener noreferrer">
                            <BotaoIcone imagem={0} texto='Acessar Blinkies Cafe' />
                        </a>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Glitter-Graphics</h3>

                    <h1>O site possui gifs e blinkies em png, classificados por categoria. Disponibiliza também um gerador de texto e gifs com HTML personalizado.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://img.sur.ly/thumbnails/620x343/g/glitter-graphics.com.png"
                            alt="glitter graphics"
                            style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Glitter Graphics. Fonte: https://sur.ly/i/glitter-graphics.com/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <a href="https://www.glitter-graphics.com/" target="_blank" rel="noopener noreferrer">
                            <BotaoIcone imagem={0} texto='Acessar Glitter Graphics' />
                        </a>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Y2k Neocities</h3>

                    <h1>Além de gif e Blinkies,  osite também disponibiiza botões e estampas diferenciadas para utilização.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://neocities.org/site_screenshots/24/73/y2k/collections.html.jpg"
                            alt="Y2k Neocities"
                            style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Y2k Neocities. Fonte: https://y2k.neocities.org/collections</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <a href="https://y2k.neocities.org/collections" target="_blank" rel="noopener noreferrer">
                            <BotaoIcone imagem={0} texto='Acessar Y2k Neocities' />
                        </a>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Animated Images</h3>

                    <h1>O site possui uma grande variedade de categorias de gifs em png disponíveis para download.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://nogentech.org/wp-content/uploads/2022/09/animatedimage.org_-1024x519.png"
                            alt="Animated Images"
                            style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Animated Images. Fonte: https://www.nogentech.org/best-websites-to-download-animated-gify-gifs-for-free/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <a href="https://www.animatedimages.org/" target="_blank" rel="noopener noreferrer">
                            <BotaoIcone imagem={0} texto='Acessar Animated Images' />
                        </a>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Tumblr</h3>

                    <h1>Existem comunidades de designers no Tumblr que criam perfis somente para postar pngs, icones, molduras e gifs.
                        Para encontrar as imagens você pode navegar pelas tags e barra de pesquisa.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://www.lifewire.com/thmb/_IKJCjgyJUbwdp4K40clVHBUe3s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tumblr-1192bb21d751401b9e6e10b6c0eeb459.jpg"
                            alt="tumblr"
                            style={{
                            width: isMobile ? "30vh" : "60vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Tumblr. Fonte: https://www.lifewire.com/what-is-tumblr-7094867</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <a href="https://www.tumblr.com/search/blinkies" target="_blank" rel="noopener noreferrer">
                            <BotaoIcone imagem={0} texto='Acessar tag Tumblr' />
                        </a>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">

                        <CaixaImagem imagemIndice={18} texto="Gostou do conteúdo? Confira as outras páginas do site."
                        citacao="" />
                        
                        <LinhaEmBranco/>
                        
                        <div className="" onClick={() => irPara("/materiais")}>
                            <BotaoGrandeEstatico imagem={3} texto="Materiais" />
                        </div>

                    </div>


                </div>

            </div>

        </div>
    );
}

export default Blinkies;