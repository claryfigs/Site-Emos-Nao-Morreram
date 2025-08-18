import "./style.css"
import Header from "../../../components/header/header";
import Sidebar from "../../../components/sidebar/sidebar";
import BackgroundImage from '../../../assets/background.png'
import LinhaEmBranco from "../../../components/linha-embranco/linha-embranco";
import BotaoGrandeEstatico from "../../../components/botao-grande-estatico/botao-grande-estatico";
import { useNavigate } from "react-router-dom";
import BotaoIcone from "../../../components/botao-icone/botao-icone";
import CaixaImagem from "../../../components/caixa-imagem/caixa-imagem";

function Copiarcolar() {

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
                        <h2> Copiar e colar シ</h2>
                    </div>
                    
                    {/* CONTEÚDO DA PÁGINA------------------------------------ */}
                    
                    <h1>
                        Antigamente, nem todas plataformas tinham suporte para emojis.
                        Algumas plataformas possuíam seus próprios emojis de forma bem mais limitada do que temos hoje em dia.
                        Para acrescentar expressão, muitas pessoas usavam <span className="estiloh1-3">{' '}emojis improvisados com caractres</span>,
                        que imitavam rostos ou imagens feitas com arte em ASCII, também conhecidas como "kaomojis".
                        Muitas vezes essas imagens eram compartilhadas como correntes online com alguma mensagem adicional ou somente por diversão.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.giphy.com/0DS59Df3jfHQpNqc7b.gif"
                            alt="Emojis"
                            style={{
                            width: isMobile ? "20vh" : "30vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Emojis. Fonte: https://ios.gadgethacks.com/how-to/unlock-secret-emoticon-keyboard-your-iphone-0183106/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <div className="caixa-de-texto">
                            <h1>Onde posso achar imagens e emojis?</h1>
                        </div>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Christopher Johnson's ASCII Art Collection</h3>

                    <h1>O site oferece várias imagens formadas por caracteres separadas por categorias.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://meizhishuowebapp.oss-cn-hangzhou.aliyuncs.com/attachments-p6p/2023/11/asciiart-website-1.webp"
                            alt="Asciiart"
                            style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Asciiart. Fonte: https://p6p.net/24831.html</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <a href="https://asciiart.website/index.php" target="_blank" rel="noopener noreferrer">
                            <BotaoIcone imagem={0} texto='Acessar Ascii Art Website' />
                        </a>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Kaomoji Japanese Emoticons</h3>

                    <h1>O site possui muitas opções de carinhas diferentes para copiar e colar, separadas por categorias de sentimentos e ações.
                        A plataforma também oferece a opção de baixar o aplicaitvo na Play Store.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://daisuki-na-fansub.com/wp-content/uploads/2018/07/kaomoji-1.png"
                            alt="Kaomoji Japanese Emoticons"
                            style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Kaomoji Japanese Emoticons. Fonte: https://kaomoji.ru/en/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <a href="https://kaomoji.ru/en/" target="_blank" rel="noopener noreferrer">
                            <BotaoIcone imagem={0} texto='Acessar Kaomoji Japanese Emoticons' />
                        </a>
                    </div>

                                        <LinhaEmBranco/>

                    <h3>◉ Emoji Db Org</h3>

                    <h1>O site oferece muitas caterogorias de emojis para copiar e colar, além de uma barra de pesquisa para procurar por outros tipos de caracteres.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHeoXe33kS1AcrWWWsGimV7cnJpoJK1GMIGg&s"
                            alt="emoji db Org"
                            style={{
                            width: isMobile ? "30vh" : "30vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Emoji DB ORG. Fonte: https://www.threads.com/@ruruuu.tw/post/C9UiivFSju6</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <a href="https://emojidb.org/" target="_blank" rel="noopener noreferrer">
                            <BotaoIcone imagem={0} texto='Acessar Emoji DB ORG' />
                        </a>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Emojis Combos</h3>

                    <h1>Semelhante ao anterior, porém possui mais opções de imagens grandes para copiar e colar.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://raw.githubusercontent.com/pikapower9080/emoji-combos/main/screenshot.png"
                            alt="emoji combos"
                            style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Emoji combos. Fonte: https://github.com/pikapower9080/emoji-combos</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <a href="https://emojicombos.com/cute" target="_blank" rel="noopener noreferrer">
                            <BotaoIcone imagem={0} texto='Acessar Emoji Combos' />
                        </a>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">

                        <CaixaImagem imagemIndice={18} texto="Gostou do conteúdo? Confira as outras páginas do site."
                        citacao="" />
                        
                        <LinhaEmBranco/>
                        
                        <div className="" onClick={() => irPara("/materiais")}>
                            <BotaoGrandeEstatico imagem={3} texto="Materiais" />
                        </div>

                    </div>


                </div>

            </div>

        </div>
    );
}

export default Copiarcolar;