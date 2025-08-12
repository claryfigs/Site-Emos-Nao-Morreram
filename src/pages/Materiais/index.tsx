import "./style.css"
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import PenIcon from '../../assets/pen-black.png'
import BackgroundImage from '../../assets/background.png'
import LinhaEmBranco from "../../components/linha-embranco/linha-embranco";
import BotaoGrandeEstatico from "../../components/botao-grande-estatico/botao-grande-estatico";
import { useNavigate } from "react-router-dom";
import BotaoIcone from "../../components/botao-icone/botao-icone";

function Materiais() {

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
                        <img src={PenIcon} alt="caneta" className="images-title" />
                        <h2> Materiais</h2>
                    </div>
                    
                    {/* CONTEÚDO DA PÁGINA------------------------------------ */}
                    
                    <h1>
                        Você é do tipo que gosta de fazer <span className="estiloh1-3">{' '}arte</span> e usar a criatividade?
                        Aqui você vai encontrar <span className="estiloh1-3">{' '}materais para colagens</span>, molduras, sugestões de sites, programas e aplicativos para fazer sua arte.
                        Lembrando que a maioria dos conteúdos do site são apenas uma coletânea de imagens encontradas na internet,
                        então <span className="estiloh1-3">{' '}lembre-se de conferir os direitos de uso e dar os devidos créditos</span>.
                    </h1>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <h3>◉ Lista de Materiais ◉</h3>
                    </div>
                    
                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">
                        <BotaoGrandeEstatico imagem={18} texto="Ideias de DIY" />
                        
                        <div className="" onClick={() => irPara("/png")}>
                            <BotaoGrandeEstatico imagem={18} texto="PNGs e molduras" />
                        </div>
                        
                        <BotaoGrandeEstatico imagem={18} texto="Blinkies e gifs" />
                        <BotaoGrandeEstatico imagem={18} texto="Papel carta" />
                        <BotaoGrandeEstatico imagem={18} texto="copiar e colar" />
                        <BotaoGrandeEstatico imagem={18} texto="Wallpapers" />

                    </div>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://static.wixstatic.com/media/f282f5_63b013093cc344698cd3886ed18a451f~mv2.gif"
                            alt="pintando"
                            style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Pintando. Fonte: https://www.thefortstudios.sg/acrylic-painting-structured-course</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <div className="caixa-de-texto">
                            <h1>Quais aplicativos e programas posso usar?</h1>
                        </div>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Aplicativos gratuitos de edição</h3>

                    <h1>➜ <span className="estiloh1-3">{' '}SketchBook</span>: O apliciativo muito usado para desenhar, mas também é muito útil para fazer camadas em imagens e fazer colagens.</h1>
                    <h1>➜ <span className="estiloh1-3">{' '}InShot</span>: O aplicativo é mais conhecido pela edição de vídeo, mas nele é possível personalizar coletâneas de imagens, usar filtros e colocar PNGs em cima das fotos.</h1>
                    <h1>➜ <span className="estiloh1-3">{' '}AirBrush</span>: O aplicativo foca principalmente em ferramentas de ajuste de fotos, como suavizar, remover imperfeições e etc. Também oferece muitas opções de filtros prontos.
                        A versão paga costuma ter mais opções de filtros e manipulações de imagem.
                    </h1>
                    <h1>➜ <span className="estiloh1-3">{' '}SnapSeed</span>: O aplicativo foca principalmente em manipulação de imagem, ajustando contrate, brilho, dupla exposição, etc.</h1>

                    <LinhaEmBranco/>

                    <h3>◉ Programas gratuitos de edição</h3>

                    <h1>➜<span className="estiloh1-3">{' '}Gimp</span>: O programa é um editor gráfico voltado para criação e edição de imagens e desenhos vetoriais.</h1>
                    <h1>➜<span className="estiloh1-3">{' '}Inkscape</span>: O programa é usado para criar e editar imagens vetoriais.</h1>
                    <h1>➜<span className="estiloh1-3">{' '}Blender</span>: O programa é usado para criações 3D. Serve para modelar, esculpir, animar, renderizar e editar vídeos.</h1>

                    <LinhaEmBranco/>

                    <h3>◉ Plataformas online</h3>

                    <h1>➜<span className="estiloh1-3">{' '}Canva</span>: É uma plataforma online de design gráfico que permite criar imagens, apresentações,
                    cartazes e outros materiais visuais. Possui uma grande biblioteca de imagens e fontes para utilização.</h1>
                    <h1>➜<span className="estiloh1-3">{' '}PicMix</span>: É um site e aplicativo que permite criar imagens personalizadas,
                    geralmente no estilo de colagens, montagens e cartões virtuais. Também possui uma grande biblioteca de imagens, gifs, molduras e outros materiais.</h1>
                    <h1>➜<span className="estiloh1-3">{' '}Figma</span>: É uma ferramenta online para criação e edição de interfaces e protótipos.
                    Muito usada por designers para desenvolver layouts de sites, aplicativos e outros produtos digitais.</h1>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <div className="" onClick={() => irPara("/")}>
                            <BotaoIcone imagem={0} texto='Conferir arte e estética'/>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Materiais;