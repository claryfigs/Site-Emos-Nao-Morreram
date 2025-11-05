import "./style.css"
import Header from "../../../components/header/header";
import Sidebar from "../../../components/sidebar/sidebar";
import BackgroundImage from '../../../assets/background.png'
import LinhaEmBranco from "../../../components/linha-embranco/linha-embranco";
import BotaoGrandeEstatico from "../../../components/botao-grande-estatico/botao-grande-estatico";
import CaixaImagem from "../../../components/caixa-imagem/caixa-imagem";
import BotaoIcone from "../../../components/botao-icone/botao-icone";
import { useNavigate } from "react-router-dom";

function Decoracao() {

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
                        <h2>Decoração</h2>
                    </div>
                    
                    {/* CONTEÚDO DA PÁGINA------------------------------------ */}

                    <h1>Estar em um lugar onde você se sente confortável é importante, né? Algumas pessoas não se contentam em somente fazer parte das subculturas, mas também querem<span className="estiloh1-3">{' '}expressar seus gostos pessoais</span> dentro de casa ou em pequenos espaços.
                        Você pode usar a sua criatividade para deixar seu espaço personalizado com a sua cara.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://capricho.abril.com.br/wp-content/uploads/2017/03/pll.gif"
                            alt="quarto"
                            style={{
                            width: isMobile ? "30vh" : "80vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Arrumando quarto. Fonte: https://capricho.abril.com.br/comportamento/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Quais as influências?</h3>

                    <h1>A decoração emo e scene é, na verdade, uma mistura de elementos de outros estilo de decoração. 
                        Elementos sombrios são comumente encontrados nos estilos <span className="estiloh1-3">{' '}Vitoriano, Gótico Moderno, Punk, Grunge, Dark Academia, Steampunk, Dark Fantasy, Neo-Noir e Industrial</span>.
                        Já elementos mais alegres e divertidos podem ser encontrados no estilos <span className="estiloh1-3">{' '}Pop Art, Retrô, Memphis, Kawaii, Wacky Pomo</span> e outros.
                    </h1>
                    
                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://img1.picmix.com/output/stamp/normal/5/3/9/6/1836935_3b7d1.gif"
                            alt="quarto"
                            style={{
                            width: isMobile ? "30vh" : "60vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Quarto. Fonte: https://lv.picmix.com/stamp/soave-background-animated-gothic-room-purple-1836935</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://cdn.shopify.com/s/files/1/0691/8363/5772/files/Memphis_Design_1_600x600.jpg?v=1741000039"
                            alt="quarto colorido"
                            style={{
                            width: isMobile ? "30vh" : "60vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Quarto colorido. Fonte: https://the-rugs.com/blogs/interior-design-guides/memphis-design-characteristics</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Principais caraterísticas</h3>

                    <h1>Geralmente os ambientes possuem características <span className="estiloh1-3">{' '}maximalistas, ou seja, usam muitos elementos para compor o ambiente</span>.
                        Itens como pôsteres de bandas, luzes de LED, painéis de fotos, adesivos e objetos de colecionador ajudam a criar um espaço <span className="estiloh1-3">{' '}expressivo</span>.
                        Tecidos como veludo, couro e pelúcia aparecem com frequência misturados com outros elementos.
                        A iluminação também desempenha um papel importante: luzes indiretas, neons e lâmpadas coloridas ajudam a criar uma atmosfera dramática.
                    </h1>



                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/1200x/86/88/67/868867d3b4e29d0b14501e5cbc0468bd.jpg"
                            alt="dark kawaii"
                            style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Dark kawaii. Fonte: https://kr.pinterest.com/pin/11047961582257864/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://cdn.shopify.com/s/files/1/0516/3279/9935/files/0_1_2_1_1024x1024.png?v=1722821854"
                            alt="dark pop art"
                            style={{
                            width: isMobile ? "30vh" : "60vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Dark pop art. Fonte: https://musaartgallery.com/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <div className="" onClick={() => irPara("/diy")}>
                            <BotaoIcone imagem={0} texto='Conferir ideias de DIY'/>
                        </div>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Arquitetura </h3>

                    <h1>No universo emo e scene, diversos estilos de arquitetura podem servir de inspiração, sendo os mais comuns o gótico, brutalista, moderno, neoclássico, Art Déco e Art Nouveau.
                        Embora esses estilos tenham origens internacionais, nada impede que se explore também a arquitetura local, criando combinações únicas
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://pbs.twimg.com/media/FuDLH2kWcAE7yLS.jpg"
                            alt="estilo"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Estilo de arquitetura. Fonte: https://x.com/culturaltutor/status/1648551786121134080</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://kimberleyagius.wordpress.com/wp-content/uploads/2016/05/artdecoorartnouveau03.jpg"
                            alt="art deco vs art nouveau"
                            style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}art deco vs art nouveau. Fonte: https://decopolis.net/pages/art-deco-versus-art-nouveau?srsltid=AfmBOorAie4KNNS9lHgtHcqDzMSyimOwy96gXjnaOSKcDrgcKtUoJjnV</span></h1>
                    </div>

                    

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <CaixaImagem imagemIndice={17} texto="Gostou do conteúdo? Confira as outras páginas do site."
                            citacao="" />
                        
                        <LinhaEmBranco/>
                    
                        <div className="" onClick={() => irPara("/cultura")}>
                            <BotaoGrandeEstatico imagem={2} texto="Cultura pop" />
                        </div>
                    
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Decoracao;