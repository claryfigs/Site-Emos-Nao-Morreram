import "./style.css"
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import PcIcon from '../../assets/pc-black.png'
import BackgroundImage from '../../assets/background.png'
import LinhaEmBranco from "../../components/linha-embranco/linha-embranco";
import BotaoGrandeEstatico from "../../components/botao-grande-estatico/botao-grande-estatico";
import { useNavigate } from "react-router-dom";

function Comunidades() {

    // const isMobile = window.innerWidth < 768;

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
                        <img src={PcIcon} alt="computador" className="images-title" />
                        <h2> Comunidades</h2>
                    </div>
                    
                    {/* CONTEÚDO DA PÁGINA------------------------------------ */}
                    
                    <h1>
                        Os estilos emo e scene se popularizaram ao redor do <span className="estiloh1-3">{' '}mundo</span>, criando comunidades em diferentes países.
                        Cada região desenvolveu sua própria identidade, adaptando a estética, a música e o comportamento às influências culturais locais.
                        Enquanto a base do movimento está na expressão emocional e na música alternativa, <span className="estiloh1-3">{' '}cada comunidade acrescenta elementos únicos</span>, seja na moda, nas cores utilizadas, nas bandas locais ou nas redes sociais que frequentam.
                    </h1>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <div className="caixa-de-texto">
                            <h1>Confira as páginas para saber mais sobre as comunidades</h1>
                        </div>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">
                        <div className="" onClick={() => irPara("/nacional")}>
                            <BotaoGrandeEstatico imagem={21} texto="Nacional" />
                        </div>
                        
                        <div className="" onClick={() => irPara("/")}>
                            <BotaoGrandeEstatico imagem={22} texto="Internacional" />
                        </div>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <h3>◉ Acesse também ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">
                        <div className="" onClick={() => irPara("/contexto")}>
                            <BotaoGrandeEstatico imagem={1} texto="Contexto histórico" />
                        </div>
                    </div>

                    <LinhaEmBranco/>

                </div>

            </div>

        </div>
    );
}

export default Comunidades;