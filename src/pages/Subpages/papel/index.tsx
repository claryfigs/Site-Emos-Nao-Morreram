import "./style.css"
import Header from "../../../components/header/header";
import Sidebar from "../../../components/sidebar/sidebar";
import BackgroundImage from '../../../assets/background.png'
import LinhaEmBranco from "../../../components/linha-embranco/linha-embranco";
import BotaoGrandeEstatico from "../../../components/botao-grande-estatico/botao-grande-estatico";
import { useNavigate } from "react-router-dom";
import BotaoIcone from "../../../components/botao-icone/botao-icone";
import CaixaImagem from "../../../components/caixa-imagem/caixa-imagem";

function Papel() {

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
                        <h2> Papel carta</h2>
                    </div>
                    
                    {/* CONTEÚDO DA PÁGINA------------------------------------ */}
                    
                    <h1>
                        Caso não saiba, o papel carta é um tipo de <span className="estiloh1-3">{' '}papel decorado</span>, geralmente com desenhos, bordas ou estampas delicadas, feito para escrever cartas à mão.
                        Nos anos 80, 90 e início dos 2000, o papel carta era muito usado para trocas de correspondência entre amigos e colecionadores, muitas vezes guardado em pastas plásticas para preservar os desenhos.
                        Hoje em dia, é mais um item nostálgico e colecionável, mas ainda é produzido para quem gosta de <span className="estiloh1-3">{' '}escrita manual</span> e de colecionar papéis decorativos.
                        Aqui você vai encontrar algumas opções para imprimir.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/8a/d1/65/8ad165ef66b06a29e9127a743413a804.jpg"
                            alt="papel carta"
                            style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Papel carta. Fonte: https://br.pinterest.com/pin/67765169387409176/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <div className="caixa-de-texto">
                            <h1>Onde posso encontrar boas imagens?</h1>
                        </div>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Pinterest</h3>

                    <h1>A plataforma oferece uma grande biblioteca de imagens, gifs e vídeos. É possível encontrar paéis vintage e mordernos. As imagens podem ser salvas em pastas e colocadas na plataforma com link externo.
                        Utilize a barra de pesquisa para procurar o que deseja.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://upload.wikimedia.org/wikipedia/en/9/9c/Pinterest_home.png"
                            alt="Pinterest"
                            style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Pinterest. Fonte: https://en.wikipedia.org/wiki/Pinterest</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <a href="https://br.pinterest.com/" target="_blank" rel="noopener noreferrer">
                            <BotaoIcone imagem={0} texto='Acessar Pinterest' />
                        </a>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Muse Printables</h3>

                    <h1>O site oferece opção de papel carta, marcadores de página, desenhos pra colorir, placas e muito mais.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://static.vecteezy.com/ti/vetor-gratis/p1/30528762-borboleta-grosso-linha-preenchidas-cores-icone-para-pessoal-e-comercial-usar-gratis-vetor.jpg"
                            alt="borboleta"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}borboleta. Fonte: https://static.vecteezy.com/ti/vetor-gratis/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <a href="https://museprintables.com/c/stationery/" target="_blank" rel="noopener noreferrer">
                            <BotaoIcone imagem={0} texto='Acessar MusePrintables' />
                        </a>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Amor de papéis</h3>

                    <h1>O site oferece algumas opções de papéis carta e desenhos para imprimir e recortar. A maior parte dos desenhos são retrôs e vintages.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQV1xOklrVjmjAoNTmaxazdaRaavNwmW5SA&s"
                            alt="Amor de papéis"
                            style={{
                            width: isMobile ? "30vh" : "40vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Amor de papéis. Fonte: https://www.facebook.com/desenhos.para.colorir.01/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <a href="https://amordepapeis.com.br/papel-de-carta-para-imprimir/" target="_blank" rel="noopener noreferrer">
                            <BotaoIcone imagem={0} texto='Acessar Amor de papéis' />
                        </a>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Artes Prontas</h3>

                    <h1>O site possui uma variedade de opções de materias para imprimir e utilizar. As categorias incluem planners, cartões, marcadores de página e mais.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://artesprontas.art.blog/wp-content/uploads/2023/07/logotipo-blog-artes-prontas.png?w=500"
                            alt="Artes Prontas"
                            style={{
                            width: isMobile ? "30vh" : "40vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '} Artes Prontas. Fonte: https://artesprontas.art.blog/category/logotipo/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <a href="https://artesprontas.art.blog/category/papel-de-carta/" target="_blank" rel="noopener noreferrer">
                            <BotaoIcone imagem={0} texto='Acessar Artes Prontas' />
                        </a>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Sun Catcher Studio</h3>

                    <h1>O site além de oferecer algumas opções de papel carta, também disponibiliza calendários, um gerador de paleta de cores, texto curvado e mais ferramentas.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://suncatcherstudio.com/uploads/misc/headers/suncatcherstudio-printables-patterns-lheader.jpg"
                            alt="Pinterest"
                            style={{
                            width: isMobile ? "30vh" : "60vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Pinterest. Fonte: https://suncatcherstudio.com/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <a href="https://suncatcherstudio.com/printables/stationery/" target="_blank" rel="noopener noreferrer">
                            <BotaoIcone imagem={0} texto='Acessar Sun Catcher Studio' />
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

export default Papel;