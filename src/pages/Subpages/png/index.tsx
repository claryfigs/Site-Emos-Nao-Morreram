import "./style.css"
import Header from "../../../components/header/header";
import Sidebar from "../../../components/sidebar/sidebar";
import BackgroundImage from '../../../assets/background.png'
import LinhaEmBranco from "../../../components/linha-embranco/linha-embranco";
import BotaoGrandeEstatico from "../../../components/botao-grande-estatico/botao-grande-estatico";
import { useNavigate } from "react-router-dom";
import BotaoIcone from "../../../components/botao-icone/botao-icone";
import CaixaImagem from "../../../components/caixa-imagem/caixa-imagem";

function PNG() {

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
                        <h2> PNGs e Molduras</h2>
                    </div>
                    
                    {/* CONTEÚDO DA PÁGINA------------------------------------ */}
                    
                    <h1>
                        Caso não saiba, o png é um tipo de imagem que não perde qualidade ao ser salva e possui <span className="estiloh1-3">{' '}suporte a transparência</span>.
                        Essas características facilitam a criação de colagens sobrepostas a outras imagens. São utilizados em logotipos, icones, artes digitais e muito mais.
                        Nesta página você irá encontrar sugestões de sites para procurar os arquivos necessários para suas criações. <span className="estiloh1-3">{' '}Lembre-se de dar os créditos</span> aos criadores das imagens.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/a5/ed/76/a5ed76527c03323b16d34a04dd8b90dd.jpg"
                            alt="gato espacial"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Gato espacial. Fonte: https://in.pinterest.com/pin/975803444258491841/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <div className="caixa-de-texto">
                            <h1>Onde posso encontrar boas imagens?</h1>
                        </div>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ PngImg</h3>

                    <h1>O site possui uma grande biblioteca de PNGs e molduras separados por categorias.
                        As imagens encontradas costumam ser genéricas, mas você pode buscar personalizar o png desejado para ficar de acordo com o seu gosto.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://www.grafiktor.com/wp-content/uploads/2021/09/Best-Websites-to-Download-Transparent-PNG-Images-03-1200x771.jpg"
                            alt="pngimg"
                            style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}PngImg. Fonte: https://www.grafiktor.com/articles/best-websites-to-download-transparent-png-images/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <a href="https://pngimg.com/" target="_blank" rel="noopener noreferrer">
                            <BotaoIcone imagem={0} texto='Acessar PngImg' />
                        </a>
                    </div>

                                        <LinhaEmBranco/>

                    <h3>◉ Free Png Img</h3>

                    <h1>Assim como o anterior, o site também possui imagens genérias, classificadas por categoria.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://pbs.twimg.com/profile_images/1012331657385242624/-4iTKLYv_400x400.jpg"
                            alt="freepngimg"
                            style={{
                            width: isMobile ? "30vh" : "40vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Free Png Img. Fonte: https://freepngimg.com/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <a href="https://freepngimg.com/" target="_blank" rel="noopener noreferrer">
                            <BotaoIcone imagem={0} texto='Acessar Free Png Img' />
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
                        <a href="https://pt.picmix.com/stamp?search=png" target="_blank" rel="noopener noreferrer">
                            <BotaoIcone imagem={0} texto='Acessar Picmix' />
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
                        <a href="https://www.tumblr.com/search/png" target="_blank" rel="noopener noreferrer">
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

export default PNG;