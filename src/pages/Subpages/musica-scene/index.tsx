import "./style.css"
import Header from "../../../components/header/header";
import Sidebar from "../../../components/sidebar/sidebar";
import BackgroundImage from '../../../assets/background.png'
import LinhaEmBranco from "../../../components/linha-embranco/linha-embranco";
import BotaoGrande from "../../../components/botao-grande/botao-grande";
import CaixaImagem from "../../../components/caixa-imagem/caixa-imagem";
import BotaoIcone from "../../../components/botao-icone/botao-icone";
import { useNavigate } from "react-router-dom";

function MusicaScene() {

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
                        <h2>♫ Música Scene</h2>
                    </div>
                    
                    {/* CONTEÚDO DA PÁGINA------------------------------------ */}

                    <h1>Apesar da confusão, <span className="estiloh1-3">{' '}não existe um gênero musical chamado Scene</span>.
                        O termo, na verdade, se refere a um estilo estético.
                        Ainda assim, a cena musical associada a esse estilo é bastante diversa,
                        abrangendo gêneros que a comunidade mistura.
                        Entre os estilos mais ouvidos estão <span className="estiloh1-3">{' '}Happy Hardcore, Techno,
                        Música Eletrônica, Crunkcore e Hyperpop</span>. 
                        Em plataformas como MySpace, YouTube e, mais recentemente, TikTok,
                        essas influências musicais ajudaram a moldar a identidade da comunidade,
                        fortalecendo a ligação entre estética e som, mesmo sem um gênero musical exclusivo definido.
                    </h1>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <div className="" onClick={() => irPara("/contexto")}>
                            <BotaoIcone imagem={0} texto='Conferir moda scene'/>
                        </div>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Letras</h3>

                    <h1>Os temas abordados nas músicas associadas ao estilo Scene são bastante variados,
                        refletindo a diversidade e a <span className="estiloh1-3">{' '}liberdade criativa da comunidade</span>.
                        Muitas composições exploram assuntos divertidos, como romances,
                        festas e experiências do dia a dia. Outras canções buscam transmitir mensagens de autoestima,
                        celebração da individualidade e aceitação pessoal. As podem também fazer referências a elementos da cultura pop,
                        como filmes, memes e tendências da internet.
                        Essa mistura de temas contribui para um repertório musical que pode oscilar entre o irreverente,
                        o inspirador e o puramente divertido.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/1200x/46/54/39/4654390e2affe0008f997cc7a5c50a27.jpg"
                            alt="brokencyde"
                            style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Brokencyde. Fonte: https://www.youtube.com/watch?v=AV8N44HzfBQ</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Videoclipes</h3>

                    <h1>
                        Os videoclipes das músicas Scene são conhecidos por sua estética vibrante e maximalista.
                        É comum que tragam <span className="estiloh1-3">{' '}cores intensas, roupas estampadas, luzes piscantes e cenários que remetem a discotecas,
                        festas</span> e encontros sociais. Podem aparecer danças do estilo <span className="estiloh1-3">{' '}Jumpstyle, Free Step ou Braindance.{' '}</span>
                        Os vídeos podem ser editados com elementos de texto, filtros, animações e efeitos especiais.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://elevenpercent.net/cdn/shop/files/FMPackEffecttest.gif?v=1736069255&width=1445"
                            alt="frutiger metro"
                            style={{
                            width: isMobile ? "30vh" : "60vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Frutiger Metro. Fonte: https://elevenpercent.net/products/frutiger-metro</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://media.tenor.com/YARkWCfBZk8AAAAM/rebolation-duelo-de-rebolation.gif"
                            alt="rebolation"
                            style={{
                            width: isMobile ? "30vh" : "60vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Rebolation. Fonte: https://tenor.com/pt-BR/view/rebolation-duelo-de-rebolation-dan%C3%A7a-dance-gif-21998422</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Instrumentos</h3>

                    <h1>
                        Geralmente são misturos diversos instrumentos e técnicas. Baterias eletrônicas, sintetizadores,
                        e samplers são usados para criar as batidas aceleradas. O uso de vocais processados com efeitos (como auto-tune e distorção) também é uma marca registrada.
                        A produção musical, em geral, é bastante focada em criar uma atmosfera energética e muitas vezes "caótica".
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://static.wixstatic.com/media/9e24e3_4a73b11262e74a588f98bc65f2424f3b~mv2.gif"
                            alt="DJ"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}DJ. Fonte: https://www.saelks.com/event-details/dj-majestic-mike-3</span></h1>
                    </div>

                    <LinhaEmBranco/>

                </div>
            </div>
        </div>
    );
}

export default MusicaScene;