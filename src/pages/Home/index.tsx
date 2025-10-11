import "./style.css"
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import HeartIcon from '../../assets/heart-black.png'
import BackgroundImage from '../../assets/background.png'
import CaixaImagem from "../../components/caixa-imagem/caixa-imagem";
import BotaoGrandeEstatico from "../../components/botao-grande-estatico/botao-grande-estatico";
import LinhaEmBranco from "../../components/linha-embranco/linha-embranco";
import { useNavigate } from "react-router-dom";

function Home() {
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
                    <div className="title-space-home">
                        <img src={HeartIcon} alt="coração" className="images-title" />
                        <h2>Emos Não Morreram</h2>
                        <img src={HeartIcon} alt="coração" className="images-title" />
                    </div>

                    <LinhaEmBranco/>
                    
                    {/* CONTEÚDO DA PÁGINA------------------------------------ */}
                    
                    <div className="texto-centralizado">
                        <h1>
                            Já teve vontade de entrar no mundo emo e scene, mas não sabe por onde começar ou o que pesquisar?
                        </h1>
                        <h1>
                            <span className="estiloh1-3">{' '}Então você encontrou o lugar certo!</span>
                        </h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <div className="caixa-de-texto">
                            <h1>Nesse blog você encontrará conteúdos sobre moda, música, arte e muito mais sobre as subculturas.
                                <span className="estiloh1-3">{' '}Afinal, nunca foi só uma fase né?</span></h1>
                        </div>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <h1>Você pode começar acessando as principais páginas do site:</h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                        <div className="" onClick={() => irPara("/contexto")}>
                            <BotaoGrandeEstatico imagem={1} texto="Contexto histórico" />
                        </div>

                        <div className="" onClick={() => irPara("/cultura")}>
                            <BotaoGrandeEstatico imagem={2} texto="Cultura pop" />
                        </div>
                        
                        <div className="" onClick={() => irPara("/materiais")}>
                            <BotaoGrandeEstatico imagem={3} texto="Materiais" />
                        </div>

                        <div className="" onClick={() => irPara("/comunidades")}>
                            <BotaoGrandeEstatico imagem={4} texto="Comunidades" />
                        </div>

                        <div className="" onClick={() => irPara("/sobre")}>
                            <BotaoGrandeEstatico imagem={5} texto="Sobre o site" />
                        </div>

                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <h1>Conheça a mascote do site:</h1>
                    </div>

                    <div className="texto-centralizado">
                        <CaixaImagem
                            imagemUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuIC9rAQYB41iAb3VW8hIAkI6d2CL6LgUUxg&s"
                            texto='"Olá me chamo <nome>, você vai me ver em alguns lugares do site. Você pode ler mais sobre mim na página Sobre O Site"'
                            citacao="<nome>"
                        />
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Home;