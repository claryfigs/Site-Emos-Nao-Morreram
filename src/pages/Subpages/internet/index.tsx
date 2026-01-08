import "./style.css"
import Header from "../../../components/header/header";
import Sidebar from "../../../components/sidebar/sidebar";
import BackgroundImage from '../../../assets/background.png'
import LinhaEmBranco from "../../../components/linha-embranco/linha-embranco";
import { useNavigate } from "react-router-dom";
import BotaoIcone from "../../../components/botao-icone/botao-icone";
import CaixaImagem from "../../../components/caixa-imagem/caixa-imagem";
import BotaoGrande from "../../../components/botao-grande/botao-grande";
import BotaoGrandeEstatico from "../../../components/botao-grande-estatico/botao-grande-estatico";

function Internet() {

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
                        <h2> Internet</h2>
                    </div>
                    
                    {/* CONTEÚDO DA PÁGINA------------------------------------ */}
                    
                    <h1>
                        teste <span className="estiloh1-3">{' '}teste</span>.
                        Site: https://frutigeraeroarchive.org/
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://25.media.tumblr.com/38ba7aa23ce934325484372ae9e793f9/tumblr_mt9eusr6Tn1ryw6edo1_500.gif"
                            alt="tvs"
                            style={{
                            width: isMobile ? "30vh" : "80vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}TVs. Fonte: https://wifflegif.com/gifs/307282-television-screen-gif</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <h3>◉ teste ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">
                        
                        <a href="https://www.dailymotion.com/video/x6hhvds" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFbtPvrS7iyxQ6wpG13nOm9V8w5kQTnhBLw&s"
                            texto="Lip Service (2010)"
                            />
                        </a>

                    </div>
                    
                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <div className="caixa-de-texto">
                            <h1>Onde posso encontrar essas séries?</h1>
                        </div>
                    </div>

                    <LinhaEmBranco/>


                    <h1>
                        Grande parte das séries são encontradas em <span className="estiloh1-3">{' '}plataformas de mídias digitais</span>.
                        Alguns seriados mais antigos estão disponíveis no Youtube.
                        Você pode procurar os filmes em plataformas externas (🏴‍☠️) divulgadas via Twitter e Telegram.
                    </h1>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">

                        <CaixaImagem imagemIndice={12} texto="Gostou do conteúdo? Confira as outras páginas do site."
                        citacao="" />
                        
                        <LinhaEmBranco/>
                        
                        <div className="texto-centralizado">
                            <div className="" onClick={() => irPara("/animes")}>
                                <BotaoIcone imagem={0} texto='Conferir animes e mangás'/>
                            </div>
                            
                            <LinhaEmBranco/>

                            <div className="" onClick={() => irPara("/cultura")}>
                                <BotaoGrandeEstatico imagem={2} texto="Cultura pop" />
                            </div>
                            
                        </div>

                    </div>


                </div>

            </div>

        </div>
    );
}

export default Internet;