import "./style.css"
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import StarIcon from '../../assets/star-black.png'
import BackgroundImage from '../../assets/background.png'
import LinhaEmBranco from "../../components/linha-embranco/linha-embranco";
import BotaoGrandeEstatico from "../../components/botao-grande-estatico/botao-grande-estatico";
import { useNavigate } from "react-router-dom";

function Cultura() {

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
                        <img src={StarIcon} alt="estrela" className="images-title" />
                        <h2> Cultura pop</h2>
                    </div>
                    
                    {/* CONTEÚDO DA PÁGINA------------------------------------ */}
                    
                    <h1>
                        Você já deve ter visto algum filme ou série onde aparece um personagem de franjinha,
                        roupas pretas e personalidade exêntrica. A populaziração da subculta Emo e Scene gerou um impacto significativo na cultura pop e na arte.
                        Nesta página você poderá encontrar obras e referencias á subcultura, direta ou indeiretamente.
                    </h1>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <div className="caixa-de-texto">
                            <h1>As páginas de moda e música possuem distinção entre conteúdo Emo e Scene para melhor entendimento.</h1>
                        </div>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <h3>◉ Música ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">
                        <div className="" onClick={() => irPara("/musica-emo")}>
                            <BotaoGrandeEstatico imagem={6} texto="Música Emo" />
                        </div>
                        <BotaoGrandeEstatico imagem={7} texto="Música Scene" />
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <h3>◉ Moda ◉</h3>
                    </div>
                    
                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">
                        <BotaoGrandeEstatico imagem={8} texto="Moda Emo" />
                        <BotaoGrandeEstatico imagem={9} texto="Moda Scene" />
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <h3>◉ Outros ◉</h3>
                    </div>
                    
                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">
                        <BotaoGrandeEstatico imagem={10} texto="Filmes" />
                        <BotaoGrandeEstatico imagem={11} texto="Livros" />
                        <BotaoGrandeEstatico imagem={12} texto="Séries" />
                        <BotaoGrandeEstatico imagem={13} texto="Animes" />
                        <BotaoGrandeEstatico imagem={14} texto="Jogos" />
                        <BotaoGrandeEstatico imagem={15} texto="Memes" />
                        <BotaoGrandeEstatico imagem={16} texto="Fotografia" />
                        <BotaoGrandeEstatico imagem={17} texto="Decoração" />
                        <BotaoGrandeEstatico imagem={18} texto="Arte e Estética" />
                        <BotaoGrandeEstatico imagem={19} texto="Internet" />
                        <BotaoGrandeEstatico imagem={20} texto="Saúde Mental" />
                    </div>



                    
                </div>

            </div>

        </div>
    );
}

export default Cultura;