import "./style.css"
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import MouseIcon from '../../assets/mouse-black.png'
import BackgroundImage from '../../assets/background.png'
import BotaoGrande from "../../components/botao-grande/botao-grande";
import BotaoGrandeEstatico from "../../components/botao-grande-estatico/botao-grande-estatico";
import LinhaEmBranco from "../../components/linha-embranco/linha-embranco";
import CaixaImagem from "../../components/caixa-imagem/caixa-imagem";

function Sobre() {
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
                        <img src={MouseIcon} alt="casa" className="images-title" />
                        <h2> Sobre o site</h2>
                    </div>
                    
                    {/* CONTEÚDO DA PÁGINA------------------------------------ */}
                    
                    <h1>
                        Nessa página você encontrará elementos usados dentro do site com créditos.
                    </h1>
                    <h1>Ainda é possível fazer quebra de linha.</h1>
                    
                    <LinhaEmBranco/>

                    <h3>◉ Materiais usados no site:</h3>

                    <h1>➜ Icones do menu: <span className="estiloh1-3">{' '}Iconify - Freehand Color icons</span></h1>
                    <h1>➜ Icones nos títulos das páginas: <span className="estiloh1-3">{' '}Iconify - Stickies Color icons</span></h1>
                    <h1>➜ Imagem na aba do site: <span className="estiloh1-3">{' '}Desconhecido</span></h1>
                    <h1>➜ Imagem de fundo do site: <span className="estiloh1-3">{' '}Autoral</span></h1>

                    <LinhaEmBranco/>

                    <h3>◉ Tipos de fontes texto base:</h3>
                    
                    <h1>Texto normal</h1>
                    <h1><span className="estiloh1-1">Texto de link</span></h1>
                    <h1><span className="estiloh1-3">{' '}Texto cor alternativa</span></h1>
                    <h1><span className="estiloh1-2">{' '}Texto itálico</span></h1>
                    <h1><span className="estiloh1-4">{' '}Texto itálico cor alternativa</span></h1>
                    <h1><span className="estiloh1-5">{' '}Texto itálico cor cinza</span></h1>

                    <LinhaEmBranco/>

                    <h3>◉ Fontes usadas:</h3>

                    <h1>➜ Fonte do título do site: <span className="estiloh1-3">{' '}Vazio</span></h1>
                    <h1>➜ Fonte do subtítulo do site: <span className="estiloh1-3">{' '}Vazio</span></h1>
                    <h1>➜ Fonte dos itens do menu do site: <span className="estiloh1-3">{' '}Vazio</span></h1>
                    <h1>➜ Fonte do título das páginas: <span className="estiloh1-3">{' '}Vazio</span></h1>
                    <h1>➜ Fonte do texto das páginas: <span className="estiloh1-3">{' '}Vazio</span></h1>

                    <LinhaEmBranco/>

                    <h3>◉ Componentes:</h3>

                    <LinhaEmBranco/>

                    <BotaoGrande
                        imageUrl="https://idealepapeis.com.br/wp-content/uploads/2021/07/PDL2101-600x600.jpg"
                        texto="Botão com imagem da web"
                    />

                    <LinhaEmBranco/>

                    <BotaoGrandeEstatico imagem={6} texto="Botão com imagem local" />

                    <LinhaEmBranco/>
                    
                    <div className="caixa-de-texto">
                        <h1>Caixa de texto</h1>
                    </div>

                    <LinhaEmBranco/>

                    <CaixaImagem imagemIndice={7} texto="Caixa com imagem" citacao="local" />

                    <LinhaEmBranco/>

                    <CaixaImagem imagemUrl="https://idealepapeis.com.br/wp-content/uploads/2021/07/PDL2101-600x600.jpg"
                    texto="Caixa com imagem" citacao="da web" />

                </div>

            </div>

        </div>
    );
}

export default Sobre;