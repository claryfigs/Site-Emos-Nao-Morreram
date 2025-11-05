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

                        <a href="https://drive.google.com/file/d/1B2thG6SWul6kHtc4g2abveAbkREJZXQC/view" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/S/pv-target-images/05925f794d4f36400ef1b4cd5290a86d21140f75c58f813177937a2e6b7d28de.jpg"
                            texto="Sala Samobójców (2011)"
                            />
                        </a>

                        <a href="https://www.youtube.com/watch?v=oCZI8YFDCx0" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/M/MV5BYmIxYzUxYWEtMDIxNi00NmEwLTg2OWEtN2E5OTllN2NjMjViXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                            texto="Cat Skin (2017)"
                            />
                        </a>
                        
                        <a href="https://www.youtube.com/watch?v=7PULcuky9vw" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/M/MV5BYzE4NGUxMmItM2M5OC00ZTEwLWJhMjItOTYwYjYxMGY2NmI3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                            texto="Engel & Joe (2001)"
                            />
                        </a>
                        
                        <a href="https://www.tokyvideo.com/video/os-reis-de-dogtown-felipe-interventivo" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/S/pv-target-images/619e94e633dd548e817f7c2c7d39523572260d2f28352f705d7a85be124fe5dc.jpg"
                            texto="Os Reis de Dogtown (2005)"
                            />
                        </a>
                        
                        <a href="https://drive.google.com/file/d/10so9yl2dw09YmyqgT7bNH6J_H-nIQnIj/view" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://images.justwatch.com/poster/242325735/s718/aos-treze.jpg"
                            texto="Aos Treze (2003)"
                            />
                        </a>

                        <a href="https://m.ok.ru/video/1655632759371" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/20/37/19873069.jpg"
                            texto="Rebeldes (1996)"
                            />
                        </a>

                        <a href="https://www.youtube.com/watch?v=GT8ihKhuQGc" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/M/MV5BOGY3YzUyNjItNTZjNi00ZTE3LTlhZmQtODRlNDJhYmZkNTFiXkEyXkFqcGc@._V1_.jpg"
                            texto="L.I.E (2001)"
                            />
                        </a>

                        <a href="https://www.tokyvideo.com/br/video/the-runaways-garotas-do-rock-2010" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://cdn1023.clicrbs.com.br/wp-content/uploads/sites/2/2021/11/the-runaways-capa.jpg"
                            texto="The Runaways Garotas Do Rock (2010)"
                            />
                        </a>

                        <a href="https://www.youtube.com/watch?v=xzEAosl4w50" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/M/MV5BODUwMTc2NTUyMl5BMl5BanBnXkFtZTcwMjI3NTU2Mg@@._V1_FMjpg_UX1000_.jpg"
                            texto="Teenage Dirtbag (2009)"
                            />
                        </a>

                        <a href="https://m.ok.ru/video/1729895729865" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/M/MV5BMTc1NTk4MzkxOF5BMl5BanBnXkFtZTcwNDkxMDAxMw@@._V1_FMjpg_UX1000_.jpg"
                            texto="Fish Tank (2009)"
                            />
                        </a>

                        <a href="https://ok.ru/video/2679115156166" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://www.dvdplanetstore.pk/wp-content/uploads/2018/02/odfDqo9epa93X8rHxnaa5fA04TV.jpg"
                            texto="yo soy la juani (2006)"
                            />
                        </a>

                        <a href="https://www.youtube.com/watch?v=B5xemX7tXRQ" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/M/MV5BMTU2MDkxNDA1Ml5BMl5BanBnXkFtZTcwNjg5MjMzMQ@@._V1_FMjpg_UX1000_.jpg"
                            texto="Mouth to Mouth (2005)"
                            />
                        </a>

                        <a href="https://ok.ru/video/1263664828851" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/M/MV5BMWVmOGZlMmYtMDJiMi00ZTlkLWJkOWEtMTdhYmU2Nzk0MDA0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                            texto="Lollipop Monster (2011)"
                            />
                        </a>

                        <a href="https://ok.ru/video/6214352505387" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/M/MV5BMjY2Njg1ZmEtZGE0My00YTE3LWI2MjUtOWNhZWUwNmEzMTQ4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                            texto="My First Mister (2001)"
                            />
                        </a>

                        <a href="https://m.ok.ru/video/9373301017251" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLyBbWdt2K8hEm4yZSRQQ6lL7y6c00iRqdfg&s"
                            texto="Plush (2013)"
                            />
                        </a>

                        <a href="https://www.youtube.com/watch?v=CzX6AHmdG_A&rco=1" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/I/51lMNRiakqL._AC_UF350,350_QL50_.jpg"
                            texto="Wassup Rockers (2005)"
                            />
                        </a>

                        <a href="https://m.ok.ru/video/1379218229835" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://br.web.img2.acsta.net/medias/nmedia/18/91/02/65/20126083.jpg"
                            texto="Garotas Sem Rumo (2005)"
                            />
                        </a>

                        <a href="https://www.dailymotion.com/video/x9o333s" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/M/MV5BMjE3NDY2OTg1MF5BMl5BanBnXkFtZTcwOTAxMTA2Mw@@._V1_FMjpg_UX1000_.jpg"
                            texto="Triple Dog (2010)"
                            />
                        </a>

                    </div>
                    
                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <h3>◉ Fantasia ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                        <a href="https://drive.google.com/file/d/1vrYVIalKMrJno8-N6XWzPBeMMvAW65JY/view" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://lumiere-a.akamaihd.net/v1/images/p_movieposters_edward_scissorhands_22277_554dae91.jpeg?region=0,178,540,388"
                            texto="Edward Mãos de Tesoura (1990)"
                            />
                        </a>
                        
                        <a href="https://drive.google.com/file/d/1uxWLr69z4xG2pclhrXThOyUP08u_mfP9/view" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://br.web.img2.acsta.net/pictures/16/09/29/22/31/239318.jpg"
                            texto="O Lar das Crianças Peculiares (2016)"
                            />
                        </a>
                        
                        <a href="https://drive.google.com/file/d/17O865DG-a4HjFR8-u-ndY-vzIa86Z6R9/view" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://upload.wikimedia.org/wikipedia/pt/f/ff/Alice-In-Wonderland-Theatrical-Poster.jpg"
                            texto="Alice no País das Maravilhas (2010)"
                            />
                        </a>
                        
                        <BotaoGrande
                            imageUrl="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p5448_p_v8_ab.jpg"
                            texto="Frankenstein (1931)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://br.web.img2.acsta.net/medias/nmedia/18/87/02/32/19871201.jpg"
                            texto="Crepúsculo (2008)"
                            />
                        
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <h3>◉ Animação ◉</h3>
                    </div>

                    <LinhaEmBranco/>
                        
                        <div className="caixas-de-botoes">
                        
                        <BotaoGrande
                            imageUrl="https://br.web.img2.acsta.net/pictures/19/07/16/15/22/3649338.jpg"
                            texto="Invasor Zim e o Florpus (2019)"
                            />
                        
                        <a href="https://drive.google.com/drive/folders/1r-8JpqzgO5nI3Dji-GDimWBSHfvmZScn" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://upload.wikimedia.org/wikipedia/pt/thumb/8/8d/Mary_and_max_poster.jpg/250px-Mary_and_max_poster.jpg"
                            texto="Mary e Max (2009)"
                            />
                        </a>

                        <BotaoGrande
                            imageUrl="https://br.web.img2.acsta.net/medias/nmedia/18/89/39/58/20321715.jpg"
                            texto="Frankenweenie (2012)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://play-lh.googleusercontent.com/f4bWOao2Cr43L3til_Dyk4UrmOyx0S7W_1g1V9M8rl7k8bN4y4ycWniA_3us0uN8Aa8"
                            texto="A Noiva-Cadáver (2005)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://weliveentertainment.com/wp-content/uploads/2012/08/paranorman2012-poster-wide.jpg"
                            texto="ParaNorman (2012)"
                            />
                        
                        <a href="https://drive.google.com/file/d/11oaH-bN456R1WPsInExgGmR2isqwrQQI/view" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/M/MV5BZTEwN2VjODMtOGZiNS00MTljLWEyY2ItZGZiNmMwY2I0YThiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                            texto="Memórias de um Caracol (2024)"
                            />
                        </a>

                        <a href="https://drive.google.com/file/d/1fhMV0okzVRgF5Cm4eSIJkg5KDeFq0TN1/view" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://br.web.img3.acsta.net/medias/nmedia/18/90/48/68/20099172.jpg"
                            texto="O Estranho Mundo de Jack (1993)"
                            />
                        </a>
                        
                        </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <h3>◉ Divertidos ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                        <BotaoGrande
                            imageUrl="https://br.web.img3.acsta.net/pictures/210/077/21007756_2013052223593443.jpg"
                            texto="Scott Pilgrim contra o Mundo (2010)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://br.web.img2.acsta.net/medias/nmedia/18/95/26/84/20420339.jpg"
                            texto="Meu Namorado é um Zumbi (2013)"
                            />
                        
                        <a href="https://ok.ru/videoembed/4047746238983" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://br.web.img3.acsta.net/c_300_300/medias/nmedia/18/87/04/36/19885213.jpg"
                            texto="Meninos de Deus (2002)"
                            />
                        </a>

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
                        
                        <a href="https://www.youtube.com/watch?v=8leGMIN8f-8" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/S/pv-target-images/3fe17992d1de698f96c94507f2e628a0da757565888824cf2abfb4c9230721b4.jpg"
                            texto="Josie e as Gatinhas (2001)"
                            />
                        </a>

                        <a href="https://m.ok.ru/video/2362728450695" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/I/71o3WgEjTlL._AC_UF894,1000_QL80_.jpg"
                            texto="St Trinian's (2007)"
                            />
                        </a>

                        <a href="https://m.ok.ru/video/1659802618443" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/M/MV5BMmQyMzM2MDktYzg0MS00YjFhLWEzNDktZDU5ZWY0M2M2YjNjXkEyXkFqcGc@._V1_.jpg"
                            texto="St Trinian's 2 (2009)"
                            />
                        </a>
                        
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <h3>◉ Góticos, Punks e Alternativos ◉</h3>
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
                        
                        <BotaoGrande
                            imageUrl="https://br.web.img2.acsta.net/pictures/14/09/23/20/17/225218.jpg"
                            texto="Jovens Bruxas (1996)"
                            />
                        
                        <a href="https://www.youtube.com/watch?v=UGFRokCYSIM" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/M/MV5BNmQ1YWNkMDgtNjY3OC00MTcwLTljODktZmZjMTJkNmU5MDQzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                            texto="SLC Punk! (1998)"
                            />
                        </a>

                        <BotaoGrande
                            imageUrl="https://br.web.img2.acsta.net/medias/nmedia/18/91/33/56/20140701.jpg"
                            texto="A Lenda Do Cavaleiro Sem Cabeça (1999)"
                            />

                        <a href="https://vimeo.com/199038026" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/M/MV5BMjAxOTc2MTMzNl5BMl5BanBnXkFtZTcwNTgxNDQzMQ@@._V1_FMjpg_UX1000_.jpg"
                            texto="Bye Bye Bluebird (1999)"
                            />
                        </a>

                        <a href="https://vk.com/video704238434_456239115" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://upload.wikimedia.org/wikipedia/pt/a/ab/Gia_%28DVD_cover%29.png"
                            texto="Gia (1998)"
                            />
                        </a>

                        
                        <a href="https://www.youtube.com/watch?v=px4ynaAJATc" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/M/MV5BM2E1YjQ4NTAtOTE0ZS00MWRmLWJjMmUtMWRlODUzMGM2Y2IyXkEyXkFqcGc@._V1_.jpg"
                            texto="The Edukators (2004)"
                            />
                        </a>
                        
                        <a href="https://drive.google.com/drive/folders/1xx9wDZhFzX9vT3JkcM8hVtXMDlEbhg3p" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://upload.wikimedia.org/wikipedia/pt/5/5a/Thegingersnapsfilmposter.jpg"
                            texto="Ginger Snaps (2000)"
                            />
                        </a>

                        <a href="https://www.youtube.com/watch?v=EUDdtUEVuMo" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/S/pv-target-images/361e39661988d005827c0184f62823f68ff50e1c008173e10571e2dd2d0477ae.jpg"
                            texto="Methalhead (2013)"
                            />
                        </a>

                        <a href="https://m.vk.com/video834145512_456239054" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/M/MV5BZTU1OGIxYjItNGM4My00ZDUwLTg3MzQtMDBlYmUzMjQ3NzVjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                            texto="Suburbia (1983)"
                            />
                        </a>

                        <a href="https://drive.google.com/file/d/1OlacoouCJTgRylSrDW7hcP8f6TiIFkPR/view" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://br.web.img3.acsta.net/medias/nmedia/18/93/17/45/20239995.jpg"
                            texto="A Rainha Dos Condenados(2002)"
                            />
                        </a>

                        <a href="https://www.youtube.com/watch?v=ow1ocaw3-7w" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://br.web.img3.acsta.net/medias/nmedia/18/91/33/53/20140672.jpg"
                            texto="Sweeney Todd: O Barbeiro Demoníaco da Rua Fleet"
                            />
                        </a>

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

export default Filmes;