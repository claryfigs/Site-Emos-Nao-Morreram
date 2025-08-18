import "./style.css"
import Header from "../../../components/header/header";
import Sidebar from "../../../components/sidebar/sidebar";
import BackgroundImage from '../../../assets/background.png'
import LinhaEmBranco from "../../../components/linha-embranco/linha-embranco";
import BotaoGrandeEstatico from "../../../components/botao-grande-estatico/botao-grande-estatico";
import { useNavigate } from "react-router-dom";
import BotaoIcone from "../../../components/botao-icone/botao-icone";
import CaixaImagem from "../../../components/caixa-imagem/caixa-imagem";

function Wallpapers() {

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
                        <h2> Wallpapers</h2>
                    </div>
                    
                    {/* CONTEÚDO DA PÁGINA------------------------------------ */}
                    
                    <h1>
                        Wallpapers são imagens usadas como <span className="estiloh1-3">{' '}plano de fundo</span> em dispositivos digitais, como computadores, celulares e tablets.
                        Eles servem para personalizar a tela inicial ou a área de trabalho.
                        O termo vem do inglês wallpaper, que significa “papel de parede”, fazendo uma analogia com a decoração de paredes em casas.
                        Além das imagens estáticas, é possível também colocar wallpapers animados usando aplicativos ou programas.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://wallpaperaccess.com/full/3195797.jpg"
                            alt="wallpaper"
                            style={{
                            width: isMobile ? "20vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Wallpaper. Fonte: https://wallpaperaccess.com/emo-desktop</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <div className="caixa-de-texto">
                            <h1>Onde posso achar bons Wallpapers?</h1>
                        </div>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Wallpaper Access</h3>

                    <h1>O site oferece muitas opções de wallpapers em alta qualidade, separados por categoria. As imagens são no formato de computador.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://r.tourboxtech.com/file/202305/WallpaperAccess.jpg"
                            alt="Wallpaper Access"
                            style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Wallpaper Access. Fonte: https://p6p.net/24831.html</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <a href="https://wallpaperaccess.com/" target="_blank" rel="noopener noreferrer">
                            <BotaoIcone imagem={0} texto='Acessar Wallpaper Access' />
                        </a>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ DeviantArt</h3>

                    <h1>A plataforma funciona como uma rede social para artistas. Lá você irá encontrar muitas opções de artes e imagens para usar como fundo do seu celular ou computador.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://ia801304.us.archive.org/7/items/archive-image-deviant-art/Archive%20Image-DeviantArt.png"
                            alt="DeviantArt"
                            style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}DeviantArt. Fonte: https://archive.org/details/archive-image-deviant-art</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <a href="https://www.deviantart.com/" target="_blank" rel="noopener noreferrer">
                            <BotaoIcone imagem={0} texto='Acessar DeviantArt' />
                        </a>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Wallpapers</h3>

                    <h1>O site possui várias categorias de wallpapers para celular e computador.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://img.sur.ly/thumbnails/620x343/d/desktopwallpapers4.me.png"
                            alt="Wallpapers"
                            style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Wallpapers. Fonte: https://wallpapers.com/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <a href="https://wallpapers.com/" target="_blank" rel="noopener noreferrer">
                            <BotaoIcone imagem={0} texto='Acessar Wallpapers' />
                        </a>
                    </div>

                    <LinhaEmBranco/>

                     <h3>◉ Pinterest</h3>

                    <h1>A plataforma oferece uma grande biblioteca de imagens, gifs e vídeos. As imagens podem ser salvas em pastas e colocadas na plataforma com link externo.
                        Utilize a barra de pesquisa para procurar o que deseja.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://upload.wikimedia.org/wikipedia/en/9/9c/Pinterest_home.png"
                            alt="Pinterest"
                            style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Pinterest. Fonte: https://en.wikipedia.org/wiki/Pinterest</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <a href="https://br.pinterest.com/" target="_blank" rel="noopener noreferrer">
                            <BotaoIcone imagem={0} texto='Acessar Pinterest' />
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

export default Wallpapers;