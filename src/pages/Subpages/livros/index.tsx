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

function Livros() {

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
                        <h2> Livros</h2>
                    </div>
                    
                    {/* CONTEÚDO DA PÁGINA------------------------------------ */}
                    
                    <h1>
                        Os livros são capazes de levar a imaginação para diferentes horizontes, podendo trazer universos completos escritos <span className="estiloh1-3">{' '}somente em palavras</span>, ou trazer também
                        <span className="estiloh1-3">{' '}ilustrações que complementam a história</span>. Nesta página você vai encontrar livros sombrios e dramáticos nacionais e internacionais.
                        Muitos artistas independentes publicam seus livros e quadrinhos em plataformas online de forma gratuíta ou paga.
                        Outros fazem contratos com editoras para realizar a publicação das obras em livros físicos.
                    
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/originals/10/de/76/10de76ecd4e50c7f9177aa49535a90b8.gif"
                            alt="livro"
                            style={{
                            width: isMobile ? "30vh" : "90vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}livro. Fonte: https://br.pinterest.com/ideas/throwing-a-book-gif/937537773547/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <h3>◉ Sombrios ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/I/91GKn4g3fML.jpg"
                            texto="O Corvo"
                            />

                        <BotaoGrande
                            imageUrl="https://a-static.mlcdn.com.br/470x352/livro-o-substituto/cliquebooks/191718-8/96eb739239d3706237696ee95ed2de61.jpg"
                            texto="O Substituto"
                            />

                        <BotaoGrande
                            imageUrl="https://images.tcdn.com.br/img/img_prod/1323385/frankenstein_mary_shelley_13686_1_69fd56a764a78d684d8d947b3a4485f3.jpg"
                            texto="Frankenstein"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/I/8115Gj1cb6L._UF1000,1000_QL80_.jpg"
                            texto="A Metamorfose"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/I/61IuYdR8loL._AC_UF1000,1000_QL80_.jpg"
                            texto="Coraline"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://grafipel.com.br/wp-content/uploads/2024/10/00259283.jpg"
                            texto="A Menina Submersa"
                            />


                    </div>
                    
                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <h3>◉ Quadrinhos ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                        <a href="https://comics-na-web.blogspot.com/2021/09/o-corvo-edicao-definitiva.html" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://spider145hqs.com/wp-content/uploads/2022/01/destaque_ocorvo_edicaodefinitiva_darksidebooks_09012022.jpg?w=1200"
                            texto="O Corvo - Edição Definitiva"
                            />
                        </a>
                        
                        <a href="https://readcomiconline.li/Comic/KISS-Psycho-Circus" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                            <BotaoGrande
                            imageUrl="https://igormiranda.com.br/wp-content/uploads/2021/09/Kiss-Psycho-Circus-Image-Comics-1998-min.jpg"
                            texto="Kiss: Psycho Circus"
                            />
                        </a>

                        <a href="https://readcomiconline.li/Comic/KISS-Phantom-Obsession" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                            <BotaoGrande
                            imageUrl="https://igormiranda.com.br/wp-content/uploads/2021/08/kiss-hq-capa-1-min.jpg"
                            texto="Kiss: Phantom Obsession"
                            />
                        </a>

                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/I/71BiJXqRXIL._UF1000,1000_QL80_.jpg"
                            texto="Vampire Kisses"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1389952069i/299135.jpg"
                            texto="Gloom Cookie"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/I/6136U0rQ7qL._UF1000,1000_QL80_.jpg"
                            texto="My Dead Girlfriend"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://sun9-64.userapi.com/c1215/u3073504/16364773/x_92b75fcc.jpg"
                            texto="edge of the night russian gothic adventures"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/I/71KEuLfBw4L._UF894,1000_QL80_.jpg"
                            texto="Nightmares & Fairy Tales"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://i.pinimg.com/736x/2a/d3/fb/2ad3fbdac0190c85ebc4e7d4451d6513.jpg"
                            texto="Haunted Night School"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/I/71ckjIQQ9sL._UF1000,1000_QL80_.jpg"
                            texto="Vamplets"
                            />
                        
                        <a href="https://osinvisiveishq.blogspot.com/2020/09/the-october-faction-faccao-outubro.html" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/I/81bZF49JEdL.jpg"
                            texto="October Faction"
                            />
                        </a>
                        
                        <BotaoGrande
                            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE_dmppl8c1yv7TYfkQyG17K-tfPOUXiuJNA&s"
                            texto="BeGoths"
                            />

                        <a href="https://www.zipcomic.com/exorsisters" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/I/91AKEXV5OVL._UF1000,1000_QL80_.jpg"
                            texto="Exorsisters"
                            />
                        </a>

                        <a href="https://osinvisiveishq.blogspot.com/2025/08/animais-selvagens.html" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhxwbCNhsWmItKuKKK2lTqxUT6PkDGTaoMXiUVsj6IYoZWcN1JPrVxvVAQFT2CW_Rw8kYi0zW4Ukb8eFLNfACkYaAUhijIBJvuDS951DwtfDzW6-M8Si6Q15UIhak4wOQJ-2Jcv7mPxG6JXi6EoB-Ev7aypue689y9hHMnydAQfK0Frhyy49HdK_cHo5wQ/s320/as%20-%2003%20pag%20-%2000.jpg"
                            texto="Animais Selvagens"
                            />
                        </a>
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/I/91l8sVpOenL.jpg"
                            texto="The Riddler Year One"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/I/91t3daAPxhL._UF1000,1000_QL80_.jpg"
                            texto="Paranoid Gardens"
                            />

                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/I/81PuQYrTJIL._UF1000,1000_QL80_.jpg"
                            texto="The Umbrella Academy"
                            />

                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <h3>◉ Para adolescentes ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                        <BotaoGrande
                            imageUrl="https://pbs.twimg.com/media/F2JTieSXkAAWFpK.jpg"
                            texto="As vantagens de ser invisível"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/I/918Maoi6OML.jpg"
                            texto="Por Lugares Incríveis"
                            />

                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/I/613g63KSuBL._UF1000,1000_QL80_.jpg"
                            texto="Emily the Strange"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/I/612GJb3VAiL._UF1000,1000_QL80_.jpg"
                            texto="Ghost Girl"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1449443394i/28113185.jpg"
                            texto="My Secret Diary - Anna Blue"
                            />

                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/I/81ctFhHjabL._UF894,1000_QL80_.jpg"
                            texto="Abafa! Fofocas blogásticas de Sofia"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/I/71fWaI5myqL._UF1000,1000_QL80_.jpg"
                            texto="Diário de um Banana"
                            />

                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/I/71s-7ON8XyL.jpg"
                            texto="Querido Diário Otário"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/I/91VaZqEm2CL._UF1000,1000_QL80_.jpg"
                            texto="Off The Record - Anna Blue"
                            />
                            
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/I/71totqICrfL._UF1000,1000_QL80_.jpg"
                            texto="Luluzinha E Sua Turma"
                            />

                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <h3>◉ Outros ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                        <BotaoGrande
                            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcDq-cl-69NOfqD31b-bjzZfN-uJ-KeUP27Q&s"
                            texto="Destrua Este Diário"
                            />

                    </div>
                    
                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <div className="caixa-de-texto">
                            <h1>Onde posso encontrar esses livros?</h1>
                        </div>
                    </div>

                    <LinhaEmBranco/>

                    <h1>
                        Grande parte das obras podem ser encontradas em formato <span className="estiloh1-3">{' '}PDF, Epub ou mídia física</span> em sites de distribuição.
                        Caso tenha interesse em buscar mais obras, existem sites onde os artistas publicam suas produções, como <a href="https://tapas.io/" target="_blank" rel="noopener noreferrer">
                        <span className="estiloh1-1">Tapas</span></a> e <a href="https://www.webtoons.com/en/" target="_blank" rel="noopener noreferrer">
                        <span className="estiloh1-1">Webtoon</span></a>. Caso esteja procurando obras obras do extremo oriente, acesse a página de animes e mangás.
                    
                    </h1>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">

                        <CaixaImagem imagemIndice={11} texto="Gostou do conteúdo? Confira as outras páginas do site."
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

export default Livros;