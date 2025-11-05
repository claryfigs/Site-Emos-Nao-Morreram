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

function Series() {

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
                        <h2> Séries</h2>
                    </div>
                    
                    {/* CONTEÚDO DA PÁGINA------------------------------------ */}
                    
                    <h1>
                        Aquele gostinho de "quero mais" ao assistir uma série é uma das melhores sensações.
                        Apesar de existirem milhares de produções profissionais e amadoras para assistir, <span className="estiloh1-3">{' '}a quantidade de séries que focam na cultura emo e scene é bem pequena</span>.
                        Geralmente, o público se apega a pequenos elementos com os quais a comunidade se identifica, e isso acaba transformando a série em um clássico dentro das subculturas.
                        As séries podem focar em <span className="estiloh1-3">{' '}temas profundos, como adolescencia, autoconhecimento e aceitação</span>.
                        Algumas séries de fantasia também trazem um <span className="estiloh1-3">{' '}lado poético e sombrio</span> que pode ser agregado ao emo.
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
                        <h3>◉ Juventude caótica ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/I/91up1QBY5PL._UF894,1000_QL80_.jpg"
                            texto="Skins (2007)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/S/pv-target-images/ae9e950afd047ec200e56f40ea98196a2e3062a1e2cac8c407d88d2f8e487def.jpg"
                            texto="South of Nowhere (2005)"
                            />
                        
                        <a href="https://www.dailymotion.com/video/x6hhvds" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFbtPvrS7iyxQ6wpG13nOm9V8w5kQTnhBLw&s"
                            texto="Lip Service (2010)"
                            />
                        </a>

                        <a href="https://www.dailymotion.com/video/x8exg38" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://upload.wikimedia.org/wikipedia/pt/f/f7/Everything_Sucks%21.png"
                            texto="Everything Sucks! (2018)"
                            />
                        </a>

                        <a href="https://drive.google.com/drive/folders/1ciYWwRW2wT55JqmoRR-urQFoHxjriUG-" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://resizing.flixster.com/fS4eyy8jS1y0iMaJhI7YydaYdeE=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p18171831_b_h9_aa.jpg"
                            texto="When The Streetlights Go On (2020)"
                            />
                        </a>
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/I/81raIthwgnL.jpg"
                            texto="13 Reasons Why (2017)"
                            />

                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <h3>◉ Fantasia ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                        <BotaoGrande
                            imageUrl="https://br.web.img2.acsta.net/pictures/22/09/23/20/14/0505071.jpg"
                            texto="Wandinha (2022)"
                            />

                        <BotaoGrande
                            imageUrl="https://www.bds.tv.br/images/posters/4470.jpg"
                            texto="Teen Wolf (2011)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://s2.glbimg.com/6GzdT2xHq0agr6btBmWs4ZzxA6U=/e.glbimg.com/og/ed/f/original/2022/08/04/en-gb_sandman_main_gilbert_vertical_27x40_rgb_pre.jpg"
                            texto="Sandman (2022)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/M/MV5BZjkxMDAzMDgtNzFhNS00MjJkLWI5NTctZGRjODg3MzRiOWEzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                            texto="Penny Dreadful (2014)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://namanita.com/wp-content/uploads/2019/05/mv5bmtg3mjy1mduxmv5bml5banbnxkftztgwmzczntu2nzm40._v1_sy1000_cr006751000_al_.jpg?w=723"
                            texto="O Mundo Sombrio de Sabrina (2018)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/I/81vInb+NfUL._UF894,1000_QL80_.jpg"
                            texto="Diários de um Vampiro (2009)"
                            />
                        
                    </div>
                    
                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <h3>◉ Animações ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                        <BotaoGrande
                            imageUrl="https://br.web.img3.acsta.net/pictures/21/10/21/13/43/3425139.jpg"
                            texto="Entrelinhas Pontilhadas (2021)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://animeserie.com/product_images/b/435/Zica_e_os_Camaleoes__64603_std.jpg"
                            texto="Zica e os Camaleões (2014)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/I/81rCKOkz6oL._UF1000,1000_QL80_.jpg"
                            texto="Invasor Zim (2001)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://upload.wikimedia.org/wikipedia/pt/6/63/Danny_phantom.jpg"
                            texto="Danny Phantom (2004)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/M/MV5BYWI0NmVmYTUtMGQ1Mi00YjMzLTkzZWQtYjg0Y2FjNjAzNDM3XkEyXkFqcGc@._V1_.jpg"
                            texto="Historietas Assombradas (2013)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://br.web.img3.acsta.net/pictures/17/11/24/15/17/1286934.jpg"
                            texto="Fudêncio e Seus Amigos (2005)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/I/81GHH3QQKSL._AC_UF894,1000_QL80_.jpg"
                            texto="Drama Total (2007)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/S/pv-target-images/83f9aba367d15bd45abad308426c65080f101f0e6a5b962a88bd088387c08365.jpg"
                            texto="Doug (1991)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/M/MV5BNTBlMzA3ZTUtODZjNi00NTM0LWExMjMtNjJhYzA3YTkwMWYwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                            texto="South Park (1997)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/M/MV5BNGE5ZDI1ZDItNTQ0OC00MDY4LWFjZjMtZTk0OTJmYjVlYTk0XkEyXkFqcGc@._V1_.jpg"
                            texto="Os Under-Undergrounds (2016)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/I/71+KP4DcjgL._AC_UF1000,1000_QL80_.jpg"
                            texto="MAD (2010)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/M/MV5BNTBkODBhZjEtNWUyNS00NWI4LTg0ZTMtYWE5YmY0ZTMzYjkyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                            texto="Vilanesco (2017)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/M/MV5BZjY5NzJiZjgtMmE2Ny00ZjUzLTg0ZTEtMDE1MWQ3NDBmOWNmXkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg"
                            texto="Uma Robô Adolescente (2003)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://image.tmdb.org/t/p/w500/dVlsQzfxewEdHpu7SiVUpRAVNyU.jpg"
                            texto="Hi Hi Puffy AmiYumi (2004)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://uploads.jovemnerd.com.br/wp-content/uploads/2023/01/aggretsuko__ep160n9-760x1077.jpeg"
                            texto="Aggretsuko (2018)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/M/MV5BZThiMDE0NjctNjlmOC00MjY3LThjYTktNWViZmNlODgyNDJhXkEyXkFqcGc@._V1_.jpg"
                            texto="Banda de Garagem (2013)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://upload.wikimedia.org/wikipedia/pt/7/7a/Daria_logo.png"
                            texto="Daria (1997)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/M/MV5BYmYzYWU0Y2ItMzhkZS00NDY5LWJmYTQtZTg2MGJjYmRmOTkyXkEyXkFqcGc@._V1_.jpg"
                            texto="Downtown (1999)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/I/81kck80l36L._AC_UF894,1000_QL80_.jpg"
                            texto="Beavis e Butt-Head (1993)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtBuEJsWKox5PYYx5mpaeNKt0B5zsU-dJs-w&s"
                            texto="Coragem, o Cão Covarde (1999)"
                            />

                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/S/pv-target-images/efb1cecb963149695a17dd806beeef52fc121da30aa9690d04633c4d3cfad24d.jpg"
                            texto="Seis Dezesseis (2004)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/M/MV5BMDMxZmMxNGItOTdkYS00NmY4LTg2MDQtYmVhNmYxNDkwMjFjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                            texto="Happy Tree Friends (1999)"
                            />

                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/I/611GxiHQIjL.jpg"
                            texto="Mr. Pickles (2014)"
                            />

                    </div>

                    <LinhaEmBranco/>
                    
                    <div className="texto-centralizado">
                        <h3>◉ Telenovelas nostalgicas ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/M/MV5BMTVlZWQ3ZjAtZDNmMi00NGU0LTk5NWQtZDIwZmMzY2FhZThkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                            texto="Malhação (2012)"
                            />

                        <BotaoGrande
                            imageUrl="https://s2-globo-play.glbimg.com/2VRmU0qHo5Gm7v-TFvWN06U9xyY=/362x536/https://s2-globo-play.glbimg.com/JyJgecC3HUYIWaoFPELAEFshHwY=/https://s2.glbimg.com/ZL5vyy2AgnF4hB9zaOpsfIbnttA=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2024/2/v/xY2nXpT1elFw5Zg5ChbQ/2024-4284-rebelde-t3-poster.jpg"
                            texto="Rebelde (2004)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://br.web.img3.acsta.net/pictures/14/03/21/19/37/461581.jpg"
                            texto="Brilhante Victória (2010)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStDjWZL5kkfvmGWGLShFw10-862gjzA-hMjg&s"
                            texto="Drake & Josh (2004)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://br.web.img3.acsta.net/pictures/13/12/04/17/12/273496.jpg"
                            texto="Big Time Rush (2009)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/M/MV5BZTBhZWJiM2UtNTQ1Ni00MDU1LTg5OWYtZWZiNzMxZmJlNjEwXkEyXkFqcGc@._V1_.jpg"
                            texto="Violetta (2012)"
                            />
                        
                    </div>
                    
                    <LinhaEmBranco/>

                    
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

export default Series;