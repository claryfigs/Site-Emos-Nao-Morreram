import "./style.css"
import Header from "../../../components/header/header";
import Sidebar from "../../../components/sidebar/sidebar";
import BackgroundImage from '../../../assets/background.png'
import LinhaEmBranco from "../../../components/linha-embranco/linha-embranco";
import BotaoGrandeEstatico from "../../../components/botao-grande-estatico/botao-grande-estatico";
import CaixaImagem from "../../../components/caixa-imagem/caixa-imagem";
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
                    Aqui você vai encontrar ideias de fotografia, métodos e sugestões de materiais para utilizar em suas produções.
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
                    Se quiser inovar, você pode usar câmeras polaroid, webcams,
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

                    <h1>Não se preocupe! Muitas ideias de fotos emo e scene <span className="estiloh1-3">{' '}não exigem câmeras de alta qualidade</span>,
                        afinal, muitas vezes estamos fazendo referência a épocas em que as câmeras não eram tão modernas.
                        Além disso, existem técnicas de edição que podem melhorar a qualidade das imagens, se necessário.
                        O mais importante é que a foto transmita o <span className="estiloh1-3">{' '}sentimento e a mensagem</span> que você quer passar.
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

                    <h1>Tirar uma selfie é um dos métodos de foto mais básicos e fáceis de se tirar.
                        Uma selfie é uma fotografia que você tira de <span className="estiloh1-3">{' '}si mesmo</span>. Geralmente usando a câmera frontal de um celular, mas também pode ser feita com 
                        câmeras usando a lente principal. Você pode fazer um penteado legal, uma maquiagem ou vestir uma roupa que gosta para tirar uma selfie.
                    </h1>
                    
                    <LinhaEmBranco/>

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

                    <h1>Tente reunir amigos para tirar fotos em conjunto.
                        Vocês podem fazer poses divertidas, usar roupas combinando, ir em um evento,
                        ou apenas aproveitar pra registrar um <span className="estiloh1-3">{' '}momento especial</span>.
                        Além de fotos, vocês também podem gravar vídeos fazendo uma atividade e fazer uma coletânea com os vídeos gravados.
                    </h1>

                    <LinhaEmBranco/>
                    
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

                    <h1>Se você tem um bichinho, pode aproveitar para tirar fotos dele sozinho ou com você, em casa ou na rua.
                        Se tiver vários bichinhos, pode juntar todos para tirar uma foto em conjunto.
                    </h1>

                    <LinhaEmBranco/>

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

                    <h1>Tem uma roupa que você gosta muito de usar? Procure um ambiente legal para tirar uma<span className="estiloh1-3">{' '}foto com seu look</span>.
                        Você pode tentar tirar a foto em um local aberto, no seu quarto, aproveitar o desenho de uma parede, ou até mesmo fazer um fundo falso.
                        Tente fazer uma pose legal, de modo que seja bem visível a roupa que está usando.
                        Nem sempre é necessário seu rosto aparecer, você pode mostrar somente a roupa. 
                    </h1>

                    <LinhaEmBranco/>

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

                    <h1>Registre objetos que você gosta e <span className="estiloh1-3">{' '}combinem com você</span>. Pode ser um brinquedo, uma comida, um item de moda, seus materiais escolares, desenhos, ou uma placa com uma mensagem.
                    A mensagem pode ser um poema, um meme ou uma citação.
                    </h1>

                    <LinhaEmBranco/>

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

                    <h1>As vezes só um espelho e uma câmera são suficientes pra fazer uma foto interessante.
                        Você pode tentar fazer uma <span className="estiloh1-3">{' '}ilusão de ótica</span> usando os espelhos, fazer uma pose legal,
                        mostrar seu look e aproveitar a visão da câmera ou celular pra dar um efeito mais retrô e criativo.
                    </h1>

                    <LinhaEmBranco/>

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

                    <h1>Observe o mundo ao seu redor e use a critividade para fazer fotos improváveis e únicas.
                        As vezes a oportunidade de tirar uma <span className="estiloh1-3">{' '}foto épica</span> aparece e você pode aproveitar pra usar o humor ao seu favor.
                        Não tenha vergonha de parecer um pouco bobo e descontraído, afinal, o objetivo é esse.
                    </h1>

                    <LinhaEmBranco/>

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

                    <h1>As vezes, fotos em conjunto fazem mais sentido do que sozinhas. Tente reunir várias fotos com temas parecidos para fazer uma colagem.
                        Você pode organizar as fotos com vários tipos de molduras e formatos.
                        Além das imagens, você pode utilizar <span className="estiloh1-3">{' '}textos e pngs</span> para complementar a ideia da foto.
                    </h1>

                    <LinhaEmBranco/>

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
                        <div className="" onClick={() => irPara("/materiais")}>
                            <BotaoIcone imagem={0} texto='Conferir materiais'/>
                        </div>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Modificadas e distorcidas</h3>

                    <h1>Algumas pessoas gostam de explorar outros tipos de <span className="estiloh1-3">{' '}edição de imagem</span>.
                        Você pode tentar pixelar parte da imagem, dar destaque a uma cor específica, distorcer partes da imagem, usar filtros, fazer montagens, entre outros métodos.
                        Algumas pessoas aproveitam a edição de imagem para fazer uma mistura de ilustração, fantasia, surrealismo e ilusão de ótica.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/42/24/fc/4224fc6a500ad8ffa4962cf4d4731526.jpg"
                            alt="fernanda"
                            style={{
                            width: isMobile ? "30vh" : "60vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Fernanda Brussi. Fonte: https://fernandabrussi.artstation.com/albums/2620752</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/1e/00/1e/1e001edb15af8ef887570d4679d4e6cd.jpg"
                            alt="snuffcountry"
                            style={{
                            width: isMobile ? "30vh" : "60vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Snuffcountry. Fonte: https://www.instagram.com/p/C5mIKH-Ch1G/?igsh=MXQzZXR1MTMxZWQxaA%3D%3D</span></h1>
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

                    <h1>Nem sempre rostos são necessários para transmitir sentimentos.
                        Você pode também explorar ângulos e iluminações para dar um destaque para coisas inanimadas.
                        Tente escolher um tema para suas fotografias e <span className="estiloh1-3">{' '}olhe com mais cuidado ao seu redor</span> para procurar objetos e paisagens que lembrem o tema escolhido.
                        Dependendo do local onde você mora, pode ser que existam temas mais fáceis e mais desafiadores.
                        A edição de imagem pode ser utilizada para deixar o objeto ou paisagem mais interessante.
                    </h1>

                    <LinhaEmBranco/>

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

                    <div className="texto-centralizado">
                        <CaixaImagem imagemIndice={16} texto="Gostou do conteúdo? Confira as outras páginas do site."
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

export default Fotografia;