import "./style.css"
import Header from "../../../components/header/header";
import Sidebar from "../../../components/sidebar/sidebar";
import BackgroundImage from '../../../assets/background.png'
import LinhaEmBranco from "../../../components/linha-embranco/linha-embranco";
import BotaoGrande from "../../../components/botao-grande/botao-grande";
import CaixaImagem from "../../../components/caixa-imagem/caixa-imagem";
import BotaoIcone from "../../../components/botao-icone/botao-icone";
import { useNavigate } from "react-router-dom";
import BotaoGrandeEstatico from "../../../components/botao-grande-estatico/botao-grande-estatico";

function MusicaEmo() {

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
                        <h2>♫ Música Emo</h2>
                    </div>
                    
                    {/* CONTEÚDO DA PÁGINA------------------------------------ */}
                    
                    <h1>Para muitos, a música emo "raiz" se consolida nos gêneros <span className="estiloh1-3">{' '}screamo, metalcore</span> e <span className="estiloh1-3">{' '}post-hardcore</span>.
                        Se caracterizando vocais com gritos longos e roucos,  baterias fervorosas e solos de guitarra.
                        Porém, a música emo pode ser subdividida em vários gêneros musicais, incluindo pop punk, techno, entre outros.
                        No Brasil, apesar de existirem sim bandas Screamo,
                        as bandas mais populares dos anos 2000 foram <span className="estiloh1-3">{' '}rocks acústicos{' '}</span>
                        ou <span className="estiloh1-3">{' '}pop punk</span>.
                    </h1>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <div className="" onClick={() => irPara("/contexto")}>
                            <BotaoIcone imagem={0} texto='Conferir contexto histórico'/>
                        </div>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Letras</h3>

                    <h1>Embora não exista uma fórmula fixa para compor uma música emo, as letras costumam explorar temas ligados <span className="estiloh1-3">{' '}ao romance,
                        reflexões pessoais e sentimentos intensos</span>, como tristeza, saudade, raiva ou esperança.
                        Muitas vezes, as composições funcionam como um desabafo,
                        transformando experiências pessoais em palavras que conectam profundamente com o público.
                        A escrita pode assumir diferentes tons: <span className="estiloh1-3">{' '}poético, com metáforas, históricas marcantes,
                        criticas sociais, entre outros</span>.
                        É comum que as letras expressem <span className="estiloh1-3">{' '}vulnerabilidade e sinceridade</span>,
                        aproximando a banda de seus fãs e criando um senso de identificação.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://miro.medium.com/v2/resize:fit:1000/1*cqWqAxJfrHk1KtW0hxWQCA.gif"
                            alt="escrevendo"
                            style={{
                            width: isMobile ? "30vh" : "60vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Escrevendo. Fonte: https://writingcooperative.com/in-defense-of-journaling-f1694fe822cc</span></h1>
                    </div>
                    
                    <LinhaEmBranco/>

                    <h3>◉ Videoclipes</h3>

                    <h1>Os videoclipes das bandas emo se destacam pela <span className="estiloh1-3">{' '}criatividade e pela liberdade artística</span>,
                        muitas vezes apresentando narrativas ou imagens que não seguem exatamente o enredo sugerido pela letra da música.
                        Essa abordagem permite que os artistas transmitam sentimentos e atmosferas de forma visualmente única.
                        Elementos estéticos <span className="estiloh1-3">{' '}góticos e punks</span> aparecem com frequência, como roupas rasgadas, maquiagens marcantes,
                        cabelos estilizados, além de cenários urbanos ou sombrios que reforçam a identidade visual do gênero.
                        Alguns clipes optam por cenários elaborados e carregados de <span className="estiloh1-3">{' '}simbolismo</span>,
                        enquanto outros apostam na simplicidade para criar um contraste com a intensidade da música.
                        A cinematografia também é um ponto marcante: uso de <span className="estiloh1-3">{' '}filtros</span> coloridos ou em preto e branco,
                        inserção de textos e imagens sobrepostas, cortes rápidos e montagens que intensificam a emoção. 
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://64.media.tumblr.com/e5468a7589903e26add6c091f532c52d/tumblr_o2zea2hnnu1v6mwtso5_500.gifv"
                            alt="Helena"
                            style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Helena. Fonte: https://www.youtube.com/watch?v=UCCyoocDxBA&list=RDUCCyoocDxBA&start_radio=1</span></h1>
                    </div>
                    
                    <LinhaEmBranco/>

                    <h3>◉ Instrumentos</h3>

                    <h1>Na música emo, os instrumentos mais comuns incluem <span className="estiloh1-3">{' '}a guitarra elétrica,
                        o baixo e a bateria</span>. A guitarra elétrica é responsável por criar riffs marcantes, melodias melancólicas e
                        distorções que transmitem tanto energia quanto vulnerabilidade. O baixo dá sustentação harmônica e profundidade,
                        enquanto a bateria marca o ritmo com batidas rápidas ou compassos mais suaves, dependendo da proposta da música.
                        Além da formação tradicional, o emo também abre espaço para arranjos mais suaves.
                        Em versões acústicas, é comum o uso do <span className="estiloh1-3">{' '}violão, piano e até mesmo violino</span>,
                        instrumentos que ajudam a intensificar o lado mais melódico e introspectivo das canções.
                    </h1>

                    <LinhaEmBranco/>
                    
                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.makeagif.com/media/5-07-2015/u7vQ3B.gif"
                            alt="instrumentos"
                            style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Instrumentos. Fonte: https://makeagif.com/gif/pierce-the-veil-king-for-a-day-ft-kellin-quinn-u7vQ3B</span></h1>
                    </div>

                    <h3>◉ Recomendações</h3>

                    <h1>Nessa seção, você vai encontrar bandas emo e semelhantes. Passando por bandas internacionais e nacionais.
                        Algumas bandas estão ativas e lançando albuns até hoje, enquanto outras deram disband.
                        As bandas podem ter gêneros mistos, portanto, <span className="estiloh1-3">{' '}pode ser que a categorização não esteja exata.</span>
                    </h1>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <CaixaImagem
                            imagemUrl="https://st.depositphotos.com/1258245/2970/i/950/depositphotos_29708113-stock-photo-usa-and-england-flag-together.jpg"
                            texto="Começando pelo cenário internacional"
                            citacao=""
                        />
                    </div>

                    {/*-------------METAL */}

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <h3>◉ Metalcore ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                        <BotaoGrande
                        imageUrl="https://i.scdn.co/image/ab67616d0000b273db321359956f3f9f4c29372a"
                        texto="Asking Alexandria"
                        />

                        <BotaoGrande
                        imageUrl="https://cdn-images.dzcdn.net/images/cover/dd6af81a0d098fdd32e824fd43f2635d/0x1900-000000-80-0-0.jpg"
                        texto="Bring Me The Horizon"
                        />

                        <BotaoGrande
                        imageUrl="https://i.scdn.co/image/ab67616d0000b273dad81a7e6d89223580ffe775"
                        texto="I Set My Friends on Fire"
                        />

                        <BotaoGrande
                        imageUrl="https://i.scdn.co/image/ab67616d00001e02eb5bd80a300cea57c4449bb8"
                        texto="Hopes Die Last"
                        />

                        <BotaoGrande
                        imageUrl="https://i.scdn.co/image/ab67616d00001e026738fc4297b17acd4cdc8455"
                        texto="Downswing"
                        />

                        <BotaoGrande
                        imageUrl="https://i.scdn.co/image/ab67616d0000b27303179a5a4c6c29e222b88aff"
                        texto="Paledusk"
                        />

                        <BotaoGrande
                        imageUrl="https://images.genius.com/420afdcc165e5d0ed36d527120f44c78.558x553x1.jpg"
                        texto="Aurora Falls"
                        />


                    </div>

                    <LinhaEmBranco/>
                    
                    {/*-------------POST HARDCORE */}

                    <div className="texto-centralizado">
                        <h3>◉ Post-Hardcore ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                        <BotaoGrande
                        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0C22EKgD6v7naRlgZjbDrcKABAn1N2Yn51Q&s"
                        texto="Pierce The Veil"
                        />

                        <BotaoGrande
                        imageUrl="https://cdn-images.dzcdn.net/images/cover/fb227b4377fd4866e95ce8025487ab51/0x1900-000000-80-0-0.jpg"
                        texto="Sleeping With Sirens"
                        />

                        <BotaoGrande
                        imageUrl="https://uploads.tenhomaisdiscosqueamigos.com/2015/03/alesana-confessions.jpg"
                        texto="Alesana"
                        />

                        <BotaoGrande
                        imageUrl="https://m.media-amazon.com/images/I/81mkLe9UJ4L.jpg"
                        texto="Motionless in White"
                        />

                        <BotaoGrande
                        imageUrl="https://i.scdn.co/image/ab67616d0000b273c84efe0cac5fe38f8863bdc5"
                        texto="A Skylit Drive"
                        />

                        <BotaoGrande
                        imageUrl="https://cdn-images.dzcdn.net/images/cover/e5b6862443de9dccc0774b1022721ec8/0x1900-000000-80-0-0.jpg"
                        texto="Picture Me Broken"
                        />

                        <BotaoGrande
                        imageUrl="https://cdn-images.dzcdn.net/images/cover/6ebdce337e88a6168e3278507dfa563b/0x1900-000000-80-0-0.jpg"
                        texto="Get Scared"
                        />

                        <BotaoGrande
                        imageUrl="https://akamai.sscdn.co/letras/360x360/albuns/b/4/1/c/28745.jpg"
                        texto="Crown The Empire"
                        />

                        <BotaoGrande
                        imageUrl="https://m.media-amazon.com/images/I/71liSHurq2L._UF1000,1000_QL80_.jpg"
                        texto="The Fall of Troy"
                        />

                        <BotaoGrande
                        imageUrl="https://i.scdn.co/image/ab67616d00001e025c2fa9518921b033e1abcf77"
                        texto="Soaring Metal Lords"
                        />

                        <BotaoGrande
                        imageUrl="https://m.media-amazon.com/images/I/71xnzE9P7yS._UF1000,1000_QL80_.jpg"
                        texto="Silverstein"
                        />

                        <BotaoGrande
                        imageUrl="https://m.media-amazon.com/images/I/91oSox3wnZL._UF1000,1000_QL80_.jpg"
                        texto="Spiritbox"
                        />

                        <BotaoGrande
                        imageUrl="https://i.scdn.co/image/ab67616d00001e02ebf4de3a3be7b88849fdba45"
                        texto="Reece Young"
                        />

                        <BotaoGrande
                        imageUrl="https://m.media-amazon.com/images/I/91NwS5IthwL._UF1000,1000_QL80_.jpg"
                        texto="Sleep Theory"
                        />

                        <BotaoGrande
                        imageUrl="https://imusic.b-cdn.net/images/item/original/738/0817424015738.jpg?bad-omens-2016-bad-omens-cd&class=scaled&v=1472951866"
                        texto="Bad Omens"
                        />

                    </div>

                    <LinhaEmBranco/>

                    {/*-------------POP PUNK */}

                    <div className="texto-centralizado">
                        <h3>◉ Pop-Punk ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                        <BotaoGrande
                        imageUrl="https://i1.sndcdn.com/artworks-S8jtz5cW5fLh-0-t500x500.jpg"
                        texto="My Chemical Romance"
                        />

                        <BotaoGrande
                        imageUrl="https://www.shirtsnthingsaz.com/cdn/shop/products/BLINK182_Album-Cover-Smiley_WhiteTs_Ft-2sqr.jpg?v=1626748500"
                        texto="Blink-182"
                        />

                        <BotaoGrande
                        imageUrl="https://i.scdn.co/image/ab67616d0000b2732a4546ed22694f4297f6bdb9"
                        texto="Falling In Reverse"
                        />

                        <BotaoGrande
                        imageUrl="https://m.media-amazon.com/images/I/6175nOQPCvL._UF1000,1000_QL80_.jpg"
                        texto="Simple plan"
                        />

                        <BotaoGrande
                        imageUrl="https://f4.bcbits.com/img/a0247544698_16.jpg"
                        texto="South Arcade"
                        />

                        <BotaoGrande
                        imageUrl="https://m.media-amazon.com/images/I/811RAjPrweL._UF1000,1000_QL80_.jpg"
                        texto="Mayday Parade"
                        />

                        <BotaoGrande
                        imageUrl="https://imusic.b-cdn.net/images/item/original/264/0885686931264.jpg?story-so-far-2013-what-you-don-t-see-cd&class=scaled&v=1365093115"
                        texto="The Story So Far"
                        />

                        <BotaoGrande
                        imageUrl="https://i.scdn.co/image/ab67616d0000b27324889965c2b453cbd439a7f6"
                        texto="All Time Low"
                        />

                        <BotaoGrande
                        imageUrl="https://m.media-amazon.com/images/I/71Z0rLIvpuL._UF1000,1000_QL80_.jpg"
                        texto="Green Day"
                        />

                        <BotaoGrande
                        imageUrl="https://m.media-amazon.com/images/I/51GDYMCdh3L._UF1000,1000_QL80_.jpg"
                        texto="Anberlin"
                        />

                        <BotaoGrande
                        imageUrl="https://m.media-amazon.com/images/I/71UocByNUEL.jpg"
                        texto="Magnolia Park"
                        />

                        <BotaoGrande
                        imageUrl="https://upload.wikimedia.org/wikipedia/pt/6/66/A_Fever_You_Can%27t_Sweat_Out.jpg"
                        texto="Panic! at the Disco"
                        />

                    </div>

                    <LinhaEmBranco/>
                    
                    {/*-------------ACUSTICO */}

                    <div className="texto-centralizado">
                        <h3>◉ Acústico ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                        <BotaoGrande
                        imageUrl="https://i1.sndcdn.com/artworks-000133483035-uxases-t1080x1080.jpg"
                        texto="Say We Can Fly"
                        />

                        <BotaoGrande
                        imageUrl="https://cdn-images.dzcdn.net/images/cover/0e0cc26b57e07f087abed1ab1523820c/0x1900-000000-80-0-0.jpg"
                        texto="Secondhand Serenade"
                        />

                        <BotaoGrande
                        imageUrl="https://is1-ssl.mzstatic.com/image/thumb/Music/ea/64/a9/mzi.jbimmrqt.jpg/1200x630bb.jpg"
                        texto="Joel Faviere"
                        />

                    </div>

                    <LinhaEmBranco/>

                    
                    {/*-------------eletronica */}

                    <div className="texto-centralizado">
                        <h3>◉ Eletrônica ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                        <BotaoGrande
                        imageUrl="https://i.scdn.co/image/ab67616d0000b27309dfe677fca8c85965c31686"
                        texto="watchout! theres ghosts"
                        />

                        <BotaoGrande
                        imageUrl="https://akamai.sscdn.co/letras/360x360/albuns/f/0/b/4/510491465474457.jpg"
                        texto="I See Stars"
                        />

                        <BotaoGrande
                        imageUrl="https://i.scdn.co/image/ab67616d00001e02cf0e0076ebc3a3a7c012fa1b"
                        texto="Mayday, Cried the Captain"
                        />

                        <BotaoGrande
                        imageUrl="https://m.media-amazon.com/images/I/71WmB8tus6L._UF1000,1000_QL80_.jpg"
                        texto="Attack Attack!"
                        />

                        <BotaoGrande
                        imageUrl="https://cdn-images.dzcdn.net/images/cover/d14db3006f1506e104b65f903deaa361/1900x1900-000000-80-0-0.jpg"
                        texto="Ghost town"
                        />

                        <BotaoGrande
                        imageUrl="https://images.squarespace-cdn.com/content/v1/66282643ec0e695c3e5424d8/3a566d67-3940-4dc6-9069-e2e2ba114fd5/HOP_OYA_Cover_Final.jpg"
                        texto="House of Protection"
                        />

                        <BotaoGrande
                        imageUrl="https://upload.wikimedia.org/wikipedia/en/e/eb/HelloFascination1.jpg"
                        texto="Breathe Carolina"
                        />

                    </div>

                    <LinhaEmBranco/>

                    {/*-------------POST GRUNGE */}

                    <div className="texto-centralizado">
                        <h3>◉ Post-Grunge ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                        <BotaoGrande
                        imageUrl="https://upload.wikimedia.org/wikipedia/pt/6/60/Flyleaf_album.jpg"
                        texto="Flyleaf"
                        />

                    </div>


                    <LinhaEmBranco/>

                    {/*-------------RAP */}

                    <div className="texto-centralizado">
                        <h3>◉ Rap e Trap ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                        <BotaoGrande
                        imageUrl="https://i.ebayimg.com/images/g/NYkAAOSw-npgNR1F/s-l1200.jpg"
                        texto="Thousand Foot Krutch"
                        />

                        <BotaoGrande
                        imageUrl="https://m.media-amazon.com/images/I/81iC+O0ec2L._UF1000,1000_QL80_.jpg"
                        texto="Linkin Park"
                        />

                        <BotaoGrande
                        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReS1kDRhKp8QrZXi93ZbM8A4ZzGiPVdw8vXA&s"
                        texto="Noise"
                        />

                    </div>

                    <LinhaEmBranco/>

                    {/* BRASILEIRAS */}


                    <div className="texto-centralizado">
                        <CaixaImagem
                            imagemUrl="https://static4.depositphotos.com/1006839/378/i/950/depositphotos_3789362-stock-photo-flag-of-brasil.jpg"
                            texto="Bandas e artistas nacionais"
                            citacao=""
                        />
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <h3>◉ Metalcore ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                        <BotaoGrande
                        imageUrl="https://cdn-images.dzcdn.net/images/cover/00a64027b4edd157aed4d2a0af26ee8c/0x1900-000000-80-0-0.jpg"
                        texto="Project46"
                        />

                    </div>

                    <LinhaEmBranco/>


                    <div className="texto-centralizado">
                        <h3>◉ Post-Hardcore ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                        <BotaoGrande
                        imageUrl="https://cdn-images.dzcdn.net/images/cover/fdcbeeb9f4f30ae2d506f7e5c5c4bb54/0x1900-000000-80-0-0.jpg"
                        texto="Gloria"
                        />

                        <BotaoGrande
                        imageUrl="https://akamai.sscdn.co/uploadfile/letras/albuns/5/8/e/a/29326.jpg"
                        texto="Fermo"
                        />

                        <BotaoGrande
                        imageUrl="https://cdn-images.dzcdn.net/images/cover/2e6e9f95b98c7e01b1c74bc9de894d93/0x1900-000000-80-0-0.jpg"
                        texto="Lex Level"
                        />

                        <BotaoGrande
                        imageUrl="https://i.scdn.co/image/ab67616d00001e022eb2fd87b32a162d79a78294"
                        texto="Alva"
                        />

                        <BotaoGrande
                        imageUrl="https://i.scdn.co/image/ab67616d0000b2738d58551a8c52962c98d9eac3"
                        texto="Isotopxs"
                        />

                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <h3>◉ Pop-Punk ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                        <BotaoGrande
                        imageUrl="https://upload.wikimedia.org/wikipedia/pt/d/d1/Chegou_a_Hora_de_Recome%C3%A7ar.jpg"
                        texto="CPM 22"
                        />

                        <BotaoGrande
                        imageUrl="https://f4.bcbits.com/img/a1222751190_16.jpg"
                        texto="Hateen"
                        />

                        <BotaoGrande
                        imageUrl="https://i.scdn.co/image/ab67616d0000b273a8635e5a5583eac4464e0e42"
                        texto="4Live"
                        />

                        <BotaoGrande
                        imageUrl="https://www.headbangersnews.com.br/wp-content/uploads/2024/10/SOMAe-copiar-2-1024x1024.jpg"
                        texto="Somaê"
                        />

                        <BotaoGrande
                        imageUrl="https://i.scdn.co/image/ab67616d00001e027e0f8797ea1cafbd9cc62f3e"
                        texto="story of the son"
                        />

                        <BotaoGrande
                        imageUrl="https://i.scdn.co/image/ab67616d0000b273bcf375b304c8cdc9239f1028"
                        texto="RCT"
                        />

                        <BotaoGrande
                        imageUrl="https://i.scdn.co/image/ab67616d00001e02177e49ffea35cf3a325b69b4"
                        texto="B5"
                        />

                        <BotaoGrande
                        imageUrl="https://i.scdn.co/image/ab67616d0000b2735adea97256f2729a80a91301"
                        texto="Rancore"
                        />

                        <BotaoGrande
                        imageUrl="https://deckdisc.com.br/wp-content/uploads/2021/08/Capa-Teoria-Dinamica-Gastativa.jpg"
                        texto="Forfun"
                        />

                        <BotaoGrande
                        imageUrl="https://upload.wikimedia.org/wikipedia/pt/6/60/Raimundos1994.jpg"
                        texto="Raimundos"
                        />

                        <BotaoGrande
                        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTne2GRq6lXnwagduF-iLfstpXtcCwdGW2FVw&s"
                        texto="Strike"
                        />

                        <BotaoGrande
                        imageUrl="https://akamai.sscdn.co/uploadfile/letras/albuns/6/7/8/4/18219.jpg"
                        texto="US.4"
                        />

                        <BotaoGrande
                        imageUrl="https://i.scdn.co/image/ab67616d0000b2730f52ff3935c90c9e2d67a0d1"
                        texto="Summer"
                        />


                        <BotaoGrande
                        imageUrl="https://cdn-images.dzcdn.net/images/cover/693ad98a0060fa08e052aee5ffeefc02/0x1900-000000-80-0-0.jpg"
                        texto="Drenna"
                        />

                        <BotaoGrande
                        imageUrl="https://pbs.twimg.com/profile_images/1221268725/capatwitter_400x400.jpg"
                        texto="Hardneja Sertacore"
                        />

                    </div>

                    
                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <h3>◉ Pop-Rock ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                        <BotaoGrande
                        imageUrl="https://upload.wikimedia.org/wikipedia/pt/9/9c/Nx0ag.jpg"
                        texto="NX Zero"
                        />

                        <BotaoGrande
                        imageUrl="https://upload.wikimedia.org/wikipedia/pt/1/1e/Restart_%28%C3%A1lbum_de_Restart%29.jpg"
                        texto="Restart"
                        />

                        <BotaoGrande
                        imageUrl="https://i.scdn.co/image/ab67616d0000b273f3489fa9edf77c90aa8ac28f"
                        texto="Cine"
                        />

                        <BotaoGrande
                        imageUrl="https://i.scdn.co/image/ab67616d0000b2736385cb4c8d8bb1bb1300d51e"
                        texto="Fresno"
                        />

                        <BotaoGrande
                        imageUrl="https://i.scdn.co/image/ab67616d0000b2732410784cfdd650398402d8a6"
                        texto="Hevo 84"
                        />

                        <BotaoGrande
                        imageUrl="https://i.scdn.co/image/ab67616d0000b27370bf665e066aee2a586c89aa"
                        texto="2ois"
                        />

                        <BotaoGrande
                        imageUrl="https://i.scdn.co/image/ab67616d00001e022d8cc9ac71947faca03b3380"
                        texto="Replace"
                        />

                        <BotaoGrande
                        imageUrl="https://www.vagalume.com.br/catch-side/discografia/o-sonho-nao-acabou-11.webp"
                        texto="Catch Side"
                        />

                        <BotaoGrande
                        imageUrl="https://portalpopline.com.br/wp-content/uploads/2022/11/ganggorra-banda-800x800.jpg"
                        texto="Gangorra"
                        />
                        
                    </div>

                    <LinhaEmBranco/>

                    {/*-------------POST GRUNGE */}

                    <div className="texto-centralizado">
                        <h3>◉ Post-Grunge ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                        <BotaoGrande
                        imageUrl="https://upload.wikimedia.org/wikipedia/pt/thumb/5/59/Pitty_-_Admir%C3%A1vel_Chip_Novo.jpg/250px-Pitty_-_Admir%C3%A1vel_Chip_Novo.jpg"
                        texto="Pitty"
                        />

                        <BotaoGrande
                        imageUrl="https://i.scdn.co/image/ab67616d0000b273cf07b5299bf29f9562003547"
                        texto="Detonautas"
                        />

                        <BotaoGrande
                        imageUrl="https://upload.wikimedia.org/wikipedia/pt/5/5a/Ab67616d0000b2735411161216eb9703a143d819.jpg"
                        texto="Zimbra"
                        />

                        <BotaoGrande
                        imageUrl="https://i.scdn.co/image/ab67616d0000b273cb7d44fb701171f464138b55"
                        texto="Supercombo"
                        />

                        <BotaoGrande
                        imageUrl="https://cdn-images.dzcdn.net/images/cover/1302e1f16ade9d4f66d787e5024430e8/0x1900-000000-80-0-0.jpg"
                        texto="Palavrantiga"
                        />

                    </div>

                    <LinhaEmBranco/>

                    {/*-------------RAP */}

                    <div className="texto-centralizado">
                        <h3>◉ Rap ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                        <BotaoGrande
                        imageUrl="https://cdn-images.dzcdn.net/images/cover/710a0bb8222c01062271e44fbc00a8a2/0x1900-000000-80-0-0.jpg"
                        texto="Charlie Brown Jr."
                        />

                        <BotaoGrande
                        imageUrl="https://cdn-images.dzcdn.net/images/cover/6a48fbae397368817c5d30f5a4eea956/0x1900-000000-80-0-0.jpg"
                        texto="Machete Bomb"
                        />

                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">

                        <CaixaImagem imagemIndice={6} texto="Gostou do conteúdo? Confira as outras páginas do site."
                        citacao="" />
                        
                        <LinhaEmBranco/>
                        
                        <div className="texto-centralizado">
                            <div className="" onClick={() => irPara("/musica-scene")}>
                                <BotaoIcone imagem={0} texto='Conferir música scene'/>
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

export default MusicaEmo;