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
                        <img src="https://lh3.googleusercontent.com/Udlfwaw0MZAG_gfYzt-YoEEd0nRpzgSj5lrIEM2SjPHMGE116R7g_mCJzkFi7QETV2cV6Aftx75SKFmiRPqkeb1nZ2g=s1600-w1600-h1000"
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

                    <h3>◉ PicMix</h3>

                    <h1>Conhecido pelas edições extravagantes e retrôs, o site possui imagens e gifs que podem ser utilizados pela comunidade dentro da plataforma.
                        Você pode compartilhar suas criações e deixa-las públicas para uso.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://site-images.similarcdn.com/image?url=picmix.com&t=1&s=1&h=89b263a263072f92326552a4f7e90c5f301bca1371f597e7c8daa16a8c51b6a0"
                            alt="picmix"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}PicMix. Fonte: https://www.grafiktor.com/articles/best-websites-to-download-transparent-png-images/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <a href="https://pt.picmix.com/stamp/search/blinkie" target="_blank" rel="noopener noreferrer">
                            <BotaoIcone imagem={0} texto='Acessar Picmix' />
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

                    <h3>◉ PresenterMedia</h3>

                    <h1>O site oferece modelos de gifs em 3D que ficaram muito populares na antiga internet. Alguns modelos tem a opção de escolher cores e personalizações.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://cdn2.free-power-point-templates.com/articles/wp-content/uploads/2012/07/PowerPoint-Animations-Animated-Clipart-at-PresenterMedia.jpg"
                            alt="tumblr"
                            style={{
                            width: isMobile ? "30vh" : "60vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Tumblr. Fonte: https://www.lifewire.com/what-is-tumblr-7094867</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <a href="https://www.presentermedia.com/" target="_blank" rel="noopener noreferrer">
                            <BotaoIcone imagem={0} texto='Acessar Presenter Media' />
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