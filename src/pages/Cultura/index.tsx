import "./style.css"
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import StarIcon from '../../assets/star-black.png'
import BackgroundImage from '../../assets/background.png'
import LinhaEmBranco from "../../components/linha-embranco/linha-embranco";

function Cultura() {
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
                    
                </div>

            </div>

        </div>
    );
}

export default Cultura;