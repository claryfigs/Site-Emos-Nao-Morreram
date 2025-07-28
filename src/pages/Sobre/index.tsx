import "./style.css"
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import MouseIcon from '../../assets/mouse-black.png'

function Sobre() {
    return (
        <div className="container">

            <div className="background-image">
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

                    <h3>◉ Materiais usados no site:</h3>

                    <h1>➜ Icones do menu: <span className="estiloh1-3">{' '}Iconify - Freehand Color icons</span></h1>
                    <h1>➜ Icones nos títulos das páginas: <span className="estiloh1-3">{' '}Iconify - Stickies Color icons</span></h1>
                    <h1>➜ Imagem na aba do site: <span className="estiloh1-3">{' '}Vazio</span></h1>
                    <h1>➜ Imagem de fundo do site: <span className="estiloh1-3">{' '}Vazio</span></h1>

                    <h3>◉ Tipos de fontes texto base:</h3>
                    
                    <h1>
                        Texto normal{' '}
                        <span className="estiloh1-1">Texto de link</span>
                        <span className="estiloh1-2">{' '}Texto itálico</span>
                        <span className="estiloh1-3">{' '}Texto cor alternativa</span>
                    </h1>

                    <h3>◉ Fontes usadas:</h3>

                    <h1>➜ Fonte do título do site: <span className="estiloh1-3">{' '}Vazio</span></h1>
                    <h1>➜ Fonte do subtítulo do site: <span className="estiloh1-3">{' '}Vazio</span></h1>
                    <h1>➜ Fonte dos itens do menu do site: <span className="estiloh1-3">{' '}Vazio</span></h1>
                    <h1>➜ Fonte do título das páginas: <span className="estiloh1-3">{' '}Vazio</span></h1>
                    <h1>➜ Fonte do texto das páginas: <span className="estiloh1-3">{' '}Vazio</span></h1>

                    
                
                </div>

            </div>

        </div>
    );
}

export default Sobre;