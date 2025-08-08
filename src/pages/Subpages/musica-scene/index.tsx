import "./style.css"
import Header from "../../../components/header/header";
import Sidebar from "../../../components/sidebar/sidebar";
import BackgroundImage from '../../../assets/background.png'
import LinhaEmBranco from "../../../components/linha-embranco/linha-embranco";
import BotaoGrande from "../../../components/botao-grande/botao-grande";
// import CaixaImagem from "../../../components/caixa-imagem/caixa-imagem";
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
                        O termo se refere a um estilo estético.
                        Ainda assim, os gêneros musicais associados ao estilo são muito diversos.
                        Entre os estilos mais ouvidos estão <span className="estiloh1-3">{' '}Happy Hardcore, Techno,
                        Música Eletrônica, Crunkcore e Hyperpop</span>. 
                        Plataformas como YouTube, Instagram e TikTok ajudaram a moldar a identidade da comunidade,
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

                    <h1>Os temas abordados nas músicas são variados,
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
                        É comum que tragam <span className="estiloh1-3">{' '}cores intensas, roupas estampadas, luzes piscantes e cenários que remetem a discotecas e festas</span>.
                        Podem aparecer danças do estilo <span className="estiloh1-3">{' '}Jumpstyle, Free Step ou Braindance.{' '}</span>
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
                        Geralmente são misturados diversos instrumentos e técnicas. Baterias eletrônicas, sintetizadores
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

                    <h3>◉ Recomendações</h3>

                    <h1>Nessa seção, você vai encontrar algumas bandas e artistas que fazem músicas semelhantes às citadas anteriormente. 
                        Devido a mistura de generos, <span className="estiloh1-3">{' '}pode ser que a categorização não esteja exata.</span>
                    </h1>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <h3>◉ Metal eletrônico ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                    <BotaoGrande
                        imageUrl="https://i.scdn.co/image/ab67616d0000b273dad81a7e6d89223580ffe775"
                        texto="I set my friends on fire"
                        />

                        <BotaoGrande
                        imageUrl="https://m.media-amazon.com/images/I/71WmB8tus6L._UF1000,1000_QL80_.jpg"
                        texto="Attack Attack!"
                        />

                        <BotaoGrande
                        imageUrl="https://assets-au-01.kc-usercontent.com/a74cc67d-6861-022b-4d6d-57679e9d331f/4a7c7f01-83e8-4946-9ead-bbbb8c090853/IMG_0082.jpeg"
                        texto="Ennaria"
                        />

                        <BotaoGrande
                        imageUrl="https://cdn-images.dzcdn.net/images/cover/d14db3006f1506e104b65f903deaa361/1900x1900-000000-80-0-0.jpg"
                        texto="Ghost town"
                        />

                        <BotaoGrande
                        imageUrl="https://upload.wikimedia.org/wikipedia/en/e/eb/HelloFascination1.jpg"
                        texto="Breathe Carolina"
                        />

                    </div>
                
                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <h3>◉ Happy Hardcore ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                        <BotaoGrande
                            imageUrl="https://cdn-images.dzcdn.net/images/cover/c4cd1053afafe33246f153674903a451/0x1900-000000-80-0-0.jpg"
                            texto="S3RL"
                            />

                        <BotaoGrande
                            imageUrl="https://cdn-images.dzcdn.net/images/cover/dba757b493e9a4a590519aed5a7968e1/1900x1900-000000-80-0-0.jpg"
                            texto="Hixxy"
                            />

                        <BotaoGrande
                            imageUrl="https://lastfm.freetls.fastly.net/i/u/300x300/dd57691f4a9a4557c59a466dcc241dc4.jpg"
                            texto="Dune"
                            />

                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <h3>◉ Crunkcore ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                        <BotaoGrande
                            imageUrl="https://i.scdn.co/image/ab67616d0000b273c68da345b073a891ac40267e"
                            texto="Brokencyde"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://upload.wikimedia.org/wikipedia/en/5/5d/3OH%213_-_Want.jpg"
                            texto="3OH!3"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://cdn-images.dzcdn.net/images/cover/2f386faf29dad2af569f3986165ebc82/1900x1900-000000-80-0-0.jpg"
                            texto="Millionaires"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://cdn-images.dzcdn.net/images/cover/8a5388360f4f9a580aafa4a5cffdbfbb/1900x1900-000000-80-0-0.jpg"
                            texto="Dot dot curve"
                            />

                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <h3>◉ HyperPop ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                        <BotaoGrande
                            imageUrl="https://cdn-images.dzcdn.net/images/cover/c311dfefc52b53474c06555368363c27/0x1900-000000-80-0-0.jpg"
                            texto="6arelyhuman"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://i.scdn.co/image/ab67616d0000b27399c12ec65afa5abcb0f285c7"
                            texto="Odetari"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://cdn-images.dzcdn.net/images/cover/cb9c182a2ece7fb8337d335732a32839/0x1900-000000-80-0-0.jpg"
                            texto="Lil witchy"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://cdn-images.dzcdn.net/images/cover/9d7b019049908b014c0153189f868a50/1900x1900-000000-80-0-0.jpg"
                            texto="punkinloveee"
                            />

                        <BotaoGrande
                            imageUrl="https://i.scdn.co/image/ab6761610000e5ebb4840df9de4684b5afe76e2b"
                            texto="Suicidal idol"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://cdn-images.dzcdn.net/images/cover/57975f903eb1a6323d03d735eca9c3fa/0x1900-000000-80-0-0.jpg"
                            texto="Rebzyyx"
                            />

                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <h3>◉ Breakcore ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                        <BotaoGrande
                            imageUrl="https://i.discogs.com/q8y9VYOaj1GvaFtwUy9PFI3PuRucIqHCsCGe3N76-Mw/rs:fit/g:sm/q:90/h:532/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI4ODY3/NjYzLTE2OTk3MTIx/NTYtODA4Ny5qcGVn.jpeg"
                            texto="Goreshit"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://i.ytimg.com/vi/hxAOsDYk8IM/hqdefault.jpg"
                            texto="Kawai Sprite"
                            />

                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <h3>◉ Pop eletrônico ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                        <BotaoGrande
                            imageUrl="https://imusic.b-cdn.net/images/item/original/021/5037128061021.jpg?cascada-2016-everytime-we-touch-cd&class=scaled&v=1173238485"
                            texto="Cascada"
                            />

                        <BotaoGrande
                            imageUrl="https://akamai.sscdn.co/letras/360x360/albuns/c/3/5/8/2148831740404170.jpg"
                            texto="Charli XCX"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/I/91OKWPQcuEL._UF1000,1000_QL80_.jpg"
                            texto="David Guetta"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://cdns-images.dzcdn.net/images/cover/cc24d60a998e1a296f0c22efa8ddffd2/1900x1900-000000-80-0-0.jpg"
                            texto="Lady Gaga"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://upload.wikimedia.org/wikipedia/pt/b/b1/Expectations_de_Bebe_Rexha.jpeg"
                            texto="Bebe Rexha"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://i1.sndcdn.com/avatars-000128069262-b0d1gw-t240x240.jpg"
                            texto="Vocaloids"
                            />

                    </div>

                    <LinhaEmBranco/>

                </div>
            </div>
        </div>
    );
}

export default MusicaScene;