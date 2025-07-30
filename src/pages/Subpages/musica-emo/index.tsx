import "./style.css"
import Header from "../../../components/header/header";
import Sidebar from "../../../components/sidebar/sidebar";
import BackgroundImage from '../../../assets/background.png'
import LinhaEmBranco from "../../../components/linha-embranco/linha-embranco";
import BotaoGrande from "../../../components/botao-grande/botao-grande";

function MusicaEmo() {
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
                        <h2> Música Emo</h2>
                    </div>
                    
                    {/* CONTEÚDO DA PÁGINA------------------------------------ */}
                    
                    <h1>
                        A musica emo inclui muitas coisas.
                    </h1>

                    <LinhaEmBranco/>

                    <h3>◉ O que pode ser considerado música emo?</h3>
                    <h1>
                        Ainda vou pensar
                    </h1>

                    <div className="texto-centralizado">
                        <h3>◉ Bandas Pop-Punk ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                        <BotaoGrande
                        imageUrl="https://i1.sndcdn.com/artworks-S8jtz5cW5fLh-0-t500x500.jpg"
                        texto="My Chemical Romance"
                        />

                        <BotaoGrande
                        imageUrl="https://www.shirtsnthingsaz.com/cdn/shop/products/BLINK182_Album-Cover-Smiley_WhiteTs_Ft-2sqr.jpg?v=1626748500"
                        texto="Blink-182"
                        />

                    </div>

                </div>

            </div>

        </div>
    );
}

export default MusicaEmo;