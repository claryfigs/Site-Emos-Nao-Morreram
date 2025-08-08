import "./style.css"
import Header from "../../../components/header/header";
import Sidebar from "../../../components/sidebar/sidebar";
import BackgroundImage from '../../../assets/background.png'
import LinhaEmBranco from "../../../components/linha-embranco/linha-embranco";
// import BotaoGrande from "../../../components/botao-grande/botao-grande";
// import CaixaImagem from "../../../components/caixa-imagem/caixa-imagem";
import BotaoIcone from "../../../components/botao-icone/botao-icone";
import { useNavigate } from "react-router-dom";

function Fotografia() {

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
                        <h2>Fotografia</h2>
                    </div>
                    
                    {/* CONTEÚDO DA PÁGINA------------------------------------ */}

                    <h1>Já teve vontade de explorar suas habilidades de fotografia e está procurando <span className="estiloh1-3">{' '}inspiração</span>?
                    Nessa página você vai encontrar ideias de fotografia, métodos e sugestões de materiais para utilizar nas suas produções.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://miro.medium.com/v2/resize:fit:1000/1*uy2uSLo2xRm7lxQIRYmd4g.gif"
                            alt="camera"
                            style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Câmera Fonte: https://medium.com/@CellestialStudios</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Por que fotografar?</h3>

                    <h1>A fotografia é muito mais do que apenas apertar um botão.
                        Ela é uma forma de <span className="estiloh1-3">{' '}arte</span>, uma maneira de registrar a história e uma ferramenta poderosa para a comunicação e a autoexpressão.
                        Tirar fotos é uma forma de capturar momentos e contar histórias, podendo <span className="estiloh1-3">{' '}transmitir sentimentos</span>{' '}
                        como felicidade, angústia, tristeza, e dar destaque para algum elemento.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/03/fe/de/03fededdbea642a4ba8d3b0705d5a188.jpg"
                            alt="cinto"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Cinto. Fonte: https://br.pinterest.com/pin/118149190218626986/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ O que vou precisar?</h3>

                    <h1>A única coisa que você irá precisar é de uma câmera.
                    Elas podem ser classificadas de diferentes formas, como pela tecnologia (analógica ou digital),
                    pelo uso (fotografia, vídeo, segurança, cinema), pelo tamanho do sensor e mais.
                    As mais comuns costumam ser as câmeras de <span className="estiloh1-3">{' '}celular ou digitais</span>.
                    Se quiser inovar, você pode usar câmeras polaroids, web cams,
                    e até mesmo tentar fazer uma câmera artesanal (sim, isso existe).
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://gyncursos.com.br/wp-content/uploads/2017/11/tipos-de-cameras-fotografica.jpg"
                            alt="cameras"
                            style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Câmeras Fonte: https://gyncursos.com.br/tipos-de-cameras-fotograficas/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <div className="caixa-de-texto">
                            <h1>Não tenho uma câmera boa. O que posso fazer?
                            </h1>
                        </div>
                    </div>

                    <LinhaEmBranco/>

                    <h1>Não se preocupe! Muitas das ideias de fotos emo e scene <span className="estiloh1-3">{' '}não precisam de câmeras de alta qualidade</span>,
                        afinal muitas vezes estaremos fazendo referência a épocas onde as câmeras não eram tão modernas.
                        Além disso, existem técnicas de edição que podem melhorar a qualidade das fotos, caso deseje.
                        O mais importante é a foto transmitir o <span className="estiloh1-3">{' '}sentimento e mensagem</span> que você deseja transmitir.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/ed/24/ca/ed24ca66fc64b9722319c7884d135d2e.jpg"
                            alt="sapatos"
                            style={{
                            width: isMobile ? "30vh" : "60vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Sapatos. Fonte: https://br.pinterest.com/pin/19140367162248208/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <h3>◉ Ideias de fotografia ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Selfies</h3>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/40/27/48/402748d14c0d310c37063fd67da938ff.jpg"
                            alt="selfies"
                            style={{
                            width: isMobile ? "30vh" : "40vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Selfie. Fonte: https://br.pinterest.com/pin/214906213473052300/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/7a/c6/8e/7ac68eb660411c7b0d8a60da4a973129.jpg"
                            alt="selfie"
                            style={{
                            width: isMobile ? "30vh" : "40vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Selfie. Fonte: https://br.pinterest.com/pin/86342517849242284/</span></h1>
                    </div>

                    <LinhaEmBranco/>
                    
                    <h3>◉ Fotos com amigos</h3>

                    
                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/1200x/c6/72/a0/c672a06019e95bd5971507900be177a6.jpg"
                            alt="amigos"
                            style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Amigos. Fonte: https://br.pinterest.com/pin/45950858676810540/</span></h1>
                    </div>

                    
                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/22/c7/cb/22c7cb8939c39d3675508a408df85c1e.jpg"
                            alt="munhequeiras"
                            style={{
                            width: isMobile ? "30vh" : "60vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Munhequeiras. Fonte: https://br.pinterest.com/pin/1150317929828930033/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Com pet</h3>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/ea/fb/b2/eafbb28c84c554342c7ad83a7f3e0c74.jpg"
                            alt="gato"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Gato. Fonte: https://br.pinterest.com/pin/45317539973994454/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/c1/78/36/c17836d5a49c1491097426192004aa9e.jpg"
                            alt="cachorro"
                            style={{
                            width: isMobile ? "30vh" : "40vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Cachorro. Fonte: https://br.pinterest.com/pin/1150317929829204385/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Mostrando o look</h3>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/7d/80/a7/7d80a7dd5874e95a040b0d9d80f4ebf6.jpg"
                            alt="look"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Look. Fonte: https://br.pinterest.com/pin/1150317929828930011/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/7d/af/0b/7daf0b15852d724ba5115972d28e891c.jpg"
                            alt="Look"
                            style={{
                            width: isMobile ? "30vh" : "40vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Look. Fonte: https://br.pinterest.com/pin/71846556547826163/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Com objetos</h3>

                                        {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/1200x/15/80/fd/1580fd0a02d6a7545c4cd56f24317f60.jpg"
                            alt="gato"
                            style={{
                            width: isMobile ? "30vh" : "40vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Gato. Fonte: https://br.pinterest.com/pin/700239442082265005/</span></h1>
                    </div>

                                        {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/f9/9b/96/f99b962a41d7dc90c3c75ec558422ad3.jpg"
                            alt="gato"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Gato. Fonte: https://br.pinterest.com/pin/601512094013370204/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Usando espelho e câmera</h3>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/46/f9/3a/46f93af124cc0291b4974b17e71d1da4.jpg"
                            alt="Espelho"
                            style={{
                            width: isMobile ? "30vh" : "60vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Espelho. Fonte: https://br.pinterest.com/pin/1150317929828939500/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/db/21/d2/db21d238d0062ab3f210321877f302df.jpg"
                            alt="espelho"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Espelho. Fonte: https://br.pinterest.com/pin/716776096979171375/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Fotos divertidas e criativas</h3>

                                        {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/6d/0d/9a/6d0d9aa3ff6c1367f91254fe35df8d6d.jpg"
                            alt="nao fume"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Não Fume. Fonte: https://br.pinterest.com/pin/1150317929828930380/</span></h1>
                    </div>

                                        {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/22/30/7f/22307ffa65a266a00e5987f69f1bd7f3.jpg"
                            alt="moldura"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}CD. Fonte: https://br.pinterest.com/pin/1150317929828988271/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Molduras e colagens</h3>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/f2/9a/cc/f29acc8c8482bc219672680216c6cdb0.jpg"
                            alt="colagem"
                            style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Moldura. Fonte: https://br.pinterest.com/pin/385972630538855770/</span></h1>
                    </div>


                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/15/e6/76/15e676c3499b982ad8af4a27fb2281a0.jpg"
                            alt="moldura"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Moldura. Fonte: https://br.pinterest.com/pin/1150317929828930052/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <div className="" onClick={() => irPara("/")}>
                            <BotaoIcone imagem={0} texto='Conferir materiais'/>
                        </div>
                    </div>


                    <h3>◉ Modificadas e distorcidas</h3>

                                        {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/d8/d6/29/d8d6298be14f47f78fdaea02048035ac.jpg"
                            alt="distorção"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Distorção. Fonte: https://br.pinterest.com/pin/1150317929829205763/</span></h1>
                    </div>

                                        {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/af/1a/12/af1a1250d4ccd9294d5e18ea32d986c5.jpg"
                            alt="modificada"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Modificada. Fonte: https://br.pinterest.com/pin/1150317929829205570/</span></h1>
                    </div>

                    <LinhaEmBranco/>
                    
                    <h3>◉ Objetos e paisagens</h3>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/89/ef/d9/89efd9649cc62ddb43ba1e1857908a0a.jpg"
                            alt="objetos"
                            style={{
                            width: isMobile ? "30vh" : "60vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Objetos. Fonte: https://br.pinterest.com/pin/63261569760311162/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/90/a0/77/90a0777beaa0cf83a3b87e816516f4e8.jpg"
                            alt="Paisagem"
                            style={{
                            width: isMobile ? "30vh" : "60vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Paisagem. Fonte: https://br.pinterest.com/pin/1150317929829200310/</span></h1>
                    </div>

                    <LinhaEmBranco/>
                    
                </div>
            </div>
        </div>
    );
}

export default Fotografia;