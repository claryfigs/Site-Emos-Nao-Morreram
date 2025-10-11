import "./style.css"
import Header from "../../../components/header/header";
import Sidebar from "../../../components/sidebar/sidebar";
import BackgroundImage from '../../../assets/background.png'
import LinhaEmBranco from "../../../components/linha-embranco/linha-embranco";
import { useNavigate } from "react-router-dom";
import BotaoIcone from "../../../components/botao-icone/botao-icone";
import CaixaImagem from "../../../components/caixa-imagem/caixa-imagem";
import BotaoGrande from "../../../components/botao-grande/botao-grande";

function Filmes() {

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
                        <h2> Filmes</h2>
                    </div>
                    
                    {/* CONTEÚDO DA PÁGINA------------------------------------ */}
                    
                    <h1>
                        Os filmes têm o poder de transmitir emoções, retratar realidades diferentes, contar histórias incríveis e muito mais.
                        Apesar de existirem milhares de produções profissionais e amadoras para assistir, <span className="estiloh1-3">{' '}a quantidade de filmes que focam na cultura emo e scene é bem pequena</span>.
                        Geralmente, o público se apega a pequenos elementos com os quais a comunidade se identifica, e isso acaba transformando o filme em um clássico dentro das subculturas.
                    </h1>

                    <LinhaEmBranco/>

                    <h1>
                        Nem sempre o filme vai ter um personagem emo ou scene como protagonista, mas os filmes podem focar em <span className="estiloh1-3">{' '}temas profundos, como adolescencia, autoconhecimento e aceitação</span>.
                        Você também encontrará filmes que focam em subculturas semelhantes, como filmes com <span className="estiloh1-3">{' '}foco na música punk, rock ou cultura gótica</span>.
                        Alguns filmes de fantasia também trazem um <span className="estiloh1-3">{' '}lado poético e sombrio</span> que pode ser agregado ao emo.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://static.wixstatic.com/media/cc4b4d_2c5f597355684fe589245e7370a308d8~mv2.gif"
                            alt="filme"
                            style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Filme. Fonte: https://www.flo2media.com/film-tv-and-streaming</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <CaixaImagem
                            imagemUrl="https://st.depositphotos.com/1258245/2970/i/950/depositphotos_29708113-stock-photo-usa-and-england-flag-together.jpg"
                            texto="Filmes e produções internacionais"
                            citacao=""
                        />
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <h3>◉ Juventude caótica ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                        <BotaoGrande
                            imageUrl="https://br.web.img3.acsta.net/pictures/210/077/21007756_2013052223593443.jpg"
                            texto="Scott Pilgrim contra o Mundo (2010)"
                            />

                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/S/pv-target-images/05925f794d4f36400ef1b4cd5290a86d21140f75c58f813177937a2e6b7d28de.jpg"
                            texto="Sala Samobójców (2011)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/S/pv-target-images/619e94e633dd548e817f7c2c7d39523572260d2f28352f705d7a85be124fe5dc.jpg"
                            texto="Os Reis de Dogtown (2005)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://images.justwatch.com/poster/242325735/s718/aos-treze.jpg"
                            texto="Aos Treze (2003)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://upload.wikimedia.org/wikipedia/pt/f/f1/Kids_1995.png"
                            texto="Kids (1995)"
                            />

                    </div>
                    
                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <h3>◉ Fantasia e Animação ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                        <BotaoGrande
                            imageUrl="https://lumiere-a.akamaihd.net/v1/images/p_movieposters_edward_scissorhands_22277_554dae91.jpeg?region=0,178,540,388"
                            texto="Edward Mãos de Tesoura (1990)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://br.web.img2.acsta.net/pictures/14/09/23/20/17/225218.jpg"
                            texto="Jovens Bruxas (1996)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://br.web.img2.acsta.net/pictures/16/09/29/22/31/239318.jpg"
                            texto="O Lar das Crianças Peculiares (2016)"
                            />

                        <BotaoGrande
                            imageUrl="https://br.web.img3.acsta.net/medias/nmedia/18/90/48/68/20099172.jpg"
                            texto="O Estranho Mundo de Jack (1993)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://play-lh.googleusercontent.com/f4bWOao2Cr43L3til_Dyk4UrmOyx0S7W_1g1V9M8rl7k8bN4y4ycWniA_3us0uN8Aa8"
                            texto="A Noiva-Cadáver (2005)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://weliveentertainment.com/wp-content/uploads/2012/08/paranorman2012-poster-wide.jpg"
                            texto="ParaNorman (2012)"
                            />

                        <BotaoGrande
                            imageUrl="https://br.web.img2.acsta.net/medias/nmedia/18/89/39/58/20321715.jpg"
                            texto="Frankenweenie (2012)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://br.web.img2.acsta.net/pictures/19/07/16/15/22/3649338.jpg"
                            texto="Invasor Zim e o Florpus (2019)"
                            />

                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <h3>◉ Divertidos ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                        <BotaoGrande
                            imageUrl="https://br.web.img3.acsta.net/medias/nmedia/18/91/90/98/20169244.jpg"
                            texto="Escola de Rock (2003)"
                            />

                        <BotaoGrande
                            imageUrl="https://upload.wikimedia.org/wikipedia/pt/5/58/A_Fam%C3%ADlia_Addams_P%C3%B4ster.jpg"
                            texto="A Família Addams (1991)"
                            />
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/M/MV5BMDUwYWUxNWEtZjJlOC00OWE1LTljNDQtMjYwZjFiYzVmZjZhXkEyXkFqcGc@._V1_.jpg"
                            texto="Metal Lords (2022)"
                            />
                        
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <h3>◉ Filmes góticos/punks ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/S/pv-target-images/4b9ad3bdb06a657edb2bda823df5cc907c451ed66aa0fd1c16b3b7ee01392acc.jpg"
                            texto="O Corvo (1994)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://br.web.img2.acsta.net/pictures/210/506/21050637_20131017235623573.jpg"
                            texto="V de Vingança (2005)"
                            />

                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <CaixaImagem
                            imagemUrl="https://static4.depositphotos.com/1006839/378/i/950/depositphotos_3789362-stock-photo-flag-of-brasil.jpg"
                            texto="Filmes e produções nacionais"
                            citacao=""
                        />
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <h3>◉ Juventude ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                        <BotaoGrande
                            imageUrl="https://upload.wikimedia.org/wikipedia/pt/4/47/Desenrola.jpg"
                            texto="Desenrola (2011)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/S/pv-target-images/d886deef67b863c451560c345ee2d47e1082906b5fff2f8c78a2059a7a08e332.jpg"
                            texto="O Diário de Tati  (2012)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://upload.wikimedia.org/wikipedia/pt/a/a8/P%C3%B4ster_As_Melhores_Coisas_do_Mundo.jpg"
                            texto="As Melhores Coisas Do Mundo (2010)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/I/91MTX4DYC0L._UF894,1000_QL80_.jpg"
                            texto="Confissões de Adolescente (2013)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://upload.wikimedia.org/wikipedia/pt/thumb/3/33/Antes-que-o-mundo-acabe-poster.jpg/250px-Antes-que-o-mundo-acabe-poster.jpg"
                            texto="Antes que o Mundo Acabe (2009)"
                            />

                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <h3>◉ Sobre música ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                        <BotaoGrande
                            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWjtP7FNQH063W0mUnHFEbOsIvXi1vSJXv5g&s"
                            texto="Somos Tão Jovens (2013)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/S/pv-target-images/598d1f7bf3461a7b64f1490eacd0c198e20758bc09424333fd9e24732dcd3f66.png"
                            texto="Legalize Já (2017)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/M/MV5BZjE1ZWU1YWQtNzExZi00NjU1LWE1OGYtNGFlNTA2NTJjZWMyXkEyXkFqcGc@._V1_.jpg"
                            texto="Chorão: Marginal Alado (2019)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://upload.wikimedia.org/wikipedia/pt/3/3a/Mamonas_Assassinas_-_O_Filme.jpg"
                            texto="Mamonas Assassinas (2023)"
                            />

                        <BotaoGrande
                            imageUrl="https://upload.wikimedia.org/wikipedia/pt/c/cc/OTempoNaoPara.jpg"
                            texto="Cazuza – O Tempo Não Para (2004)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS64ZuBGDIIa9tXCPKy4uUHZ-KxSmkG3RS-YA&s"
                            texto="Guidable – A Verdadeira História do Ratos de Porão (2008)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://br.web.img3.acsta.net/pictures/15/01/30/15/28/429276.jpg"
                            texto="Botinada, Punk no Brasil (2006)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://i.ytimg.com/vi/63NubigNFKc/hqdefault.jpg"
                            texto="Que Esse Grito Não Seja em Vão! Tributo ao Cólera (2012)"
                            />
                        
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <div className="" onClick={() => irPara("/nacional")}>
                            <BotaoIcone imagem={0} texto='Conferir documentários e entrevistas'/>
                        </div>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <div className="caixa-de-texto">
                            <h1>Onde posso encontrar esses filmes?</h1>
                        </div>
                    </div>

                    <LinhaEmBranco/>

                    <h1>
                        Grande parte dos filmes são encontrados em <span className="estiloh1-3">{' '}plataformas de mídias digitais</span>.
                        Alguns filmes nacionais e documentários estão disponíveis no Youtube.
                        Você pode procurar os filmes em plataformas externas (🏴‍☠️) divulgadas via Twitter e Telegram.
                    </h1>


                    <LinhaEmBranco/>

                    <div className="texto-centralizado">

                        <CaixaImagem imagemIndice={10} texto="Gostou do conteúdo? Confira as outras páginas do site."
                        citacao="" />
                        
                        <LinhaEmBranco/>
                        
                        <div className="texto-centralizado">
                            <div className="" onClick={() => irPara("/series")}>
                                <BotaoIcone imagem={0} texto='Conferir séries'/>
                            </div>
                        </div>


                    </div>


                </div>

            </div>

        </div>
    );
}

export default Filmes;