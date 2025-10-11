import "./style.css"
import Header from "../../../components/header/header";
import Sidebar from "../../../components/sidebar/sidebar";
import BackgroundImage from '../../../assets/background.png'
import LinhaEmBranco from "../../../components/linha-embranco/linha-embranco";
import { useNavigate } from "react-router-dom";
import BotaoIcone from "../../../components/botao-icone/botao-icone";
import CaixaImagem from "../../../components/caixa-imagem/caixa-imagem";
import BotaoGrande from "../../../components/botao-grande/botao-grande";

function Animes() {

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
                        <h2> Animes, Mangás e Manhwas</h2>
                    </div>
                    
                    {/* CONTEÚDO DA PÁGINA------------------------------------ */}
                    
                    <h1>
                        A cultura asiática teve um impacto significativo na subcultura emo e scene.
                        Muitos elementos do <span className="estiloh1-3">{' '}Japão</span> impactaram na <span className="estiloh1-3">{' '}moda, arte e costumes</span> dos adolescentes dos anos 2000.
                        O termo "otaku" surgiu para denominar pessoas que eram fãs da cultura japonesa, como animes, mangás, jogos e afins.
                        Nessa página você vai encontrar alguns <span className="estiloh1-3">{' '}animes marcantes no meio emo</span> e outras obras visualmente semelhantes com o tema.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://susterotaku.wordpress.com/wp-content/uploads/2019/10/download.jpg?w=310"
                            alt="otaku"
                            style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}otaku. Fonte: https://susterotaku.wordpress.com/wp-content/uploads/2019/10/download.jpg?w=310</span></h1>
                    </div>

                    <LinhaEmBranco/>
                    
                    <div className="texto-centralizado">
                        <h3>◉ Sombrios ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/M/MV5BYTgyZDhmMTEtZDFhNi00MTc4LTg3NjUtYWJlNGE5Mzk2NzMxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                            texto="Death Note (2006)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/I/71aIUtWoqHL._UF1000,1000_QL80_.jpg"
                            texto="Tokyo Ghoul (2011)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVB87ZH9mL2yuQe1xoTvE6M_kd1ZlNB9Po-w&s"
                            texto="Kuroshitsuji (2008)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://br.web.img2.acsta.net/pictures/18/12/07/12/40/4530128.jpg"
                            texto="Neon Genesis Evangelion (1995)"
                            />
                        
                    </div>
                    
                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <h3>◉ Terror ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/M/MV5BZGM2MjM0OTEtYTUwYy00NjBjLWI4NGQtZjM4NGYzMTE1ZmI4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                            texto="Another (2012)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/M/MV5BYzNhYjU4YTktYTIxZi00NGRlLWFhODctNzRiNTkwNjM3Mzc3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                            texto="Corpse Party (2013)"
                            />

                        <BotaoGrande
                            imageUrl="https://ehjapa.com/storage/images/cache/elfen-lied-um-anime-para-maiores-de-18-800-1cd6d9bf.jpg"
                            texto="Elfen Lied (2004)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/M/MV5BY2FjZDBiZjctYWJmZC00YzcxLTg5ZTYtZDY5MmI3YzMwM2RjXkEyXkFqcGc@._V1_.jpg"
                            texto="Hell Girl (2005)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://upload.wikimedia.org/wikipedia/pt/1/1a/Mirainikkicover1.jpg"
                            texto="Mirai Nikki (2006)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/M/MV5BODM1OGEzZDMtNTkyMy00YWFiLTg2YTEtNzA4ODdmNTA3NTBlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                            texto="Shiki (2010)"
                            />

                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <h3>◉ Ação com drama ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                        <BotaoGrande
                            imageUrl="https://play-lh.googleusercontent.com/otQBqtf2YVXBMjKPNI5C_HRcoe3Wg2dn_yT0tGJCfAqIlNeuhcsbsKZ6d8YbalckK3E9bTE4YG8QRcvvY3c"
                            texto="Naruto Shippuden (2007)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/I/6172sX-TInL._UF894,1000_QL80_.jpg"
                            texto="Bleach (2004)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/M/MV5BNTk4MWYwNmUtODFjNC00NWJhLWExNGYtMGU4YmRlNzEwOTY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                            texto="Code Geas (2006)"
                            />
                        
                    </div>
                    
                    <LinhaEmBranco/>
                    
                    <div className="texto-centralizado">
                        <h3>◉ Sentimentais ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/M/MV5BYjRmOWJmMDgtYjBjMS00OTg1LWJmZTItZTY2MjJlODgxNmUwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                            texto="Nana (2006)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://pbs.twimg.com/media/Fy06ZuGWYAAyKf4.png"
                            texto="Paradise Kiss (2005)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://upload.wikimedia.org/wikipedia/pt/thumb/c/c6/Angel_Beats_poster.jpg/250px-Angel_Beats_poster.jpg"
                            texto="Angel Beats! (2010)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/I/611K3vX6FbL._UF1000,1000_QL80_.jpg"
                            texto="Ano Hana (2011)"
                            />
                        
                    </div>
                    
                    <LinhaEmBranco/>
                    
                    <div className="texto-centralizado">
                        <h3>◉ Divertidos ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/I/71J0gVmKKIL._UF894,1000_QL80_.jpg"
                            texto="Watashi ga Motenai no wa Dō Kangaetemo Omaera ga Warui!"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/M/MV5BYWEzZWVlNmUtODk2Mi00ZTQ4LTk4ZTAtZTYwOTczMDhmNGJmXkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg"
                            texto="Lucky star (2007)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://upload.wikimedia.org/wikipedia/en/1/1e/Him%C5%8Dto%21_Umaru-chan_volume_1_cover.jpg"
                            texto="Himouto Umaru chan (2013)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/M/MV5BNTJiOWM5NGMtZTdhYi00MmY3LTlhZGYtMjMwYTk2MTI4NGJlXkEyXkFqcGc@._V1_.jpg"
                            texto="Soul Eater (2008)"
                            />
                    
                    </div>
                    
                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <h3>◉ Mangás e Manhwas ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                        <BotaoGrande
                            imageUrl="https://skoob.s3.amazonaws.com/livros/12215351/SUICIDE_BOY_166553718412215351SK-V11665537185B.jpg"
                            texto="Suicide Boy"
                            />

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
                        Alguns animes mais antigos estão disponíveis no Youtube.
                        Você pode procurar os animes em plataformas externas (🏴‍☠️).
                        Caso tenha interesse em buscar mais mangás e manhwas, existem sites onde os artistas publicam suas produções, como <a href="https://tapas.io/" target="_blank" rel="noopener noreferrer">
                        <span className="estiloh1-1">Tapas</span></a> e <a href="https://www.webtoons.com/en/" target="_blank" rel="noopener noreferrer">
                        <span className="estiloh1-1">Webtoon</span></a>.
                    </h1>


                    <LinhaEmBranco/>

                    <div className="texto-centralizado">

                        <CaixaImagem imagemIndice={13} texto="Gostou do conteúdo? Confira as outras páginas do site."
                        citacao="" />
                        
                        <LinhaEmBranco/>
                        
                        <div className="texto-centralizado">
                            <div className="" onClick={() => irPara("/animes")}>
                                <BotaoIcone imagem={0} texto='Conferir jogos'/>
                            </div>
                        </div>

                    </div>


                </div>

            </div>

        </div>
    );
}

export default Animes;