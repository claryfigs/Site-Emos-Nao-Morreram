import "./style.css"
import Header from "../../../components/header/header";
import Sidebar from "../../../components/sidebar/sidebar";
import BackgroundImage from '../../../assets/background.png'
import LinhaEmBranco from "../../../components/linha-embranco/linha-embranco";
import BotaoGrandeEstatico from "../../../components/botao-grande-estatico/botao-grande-estatico";
import { useNavigate } from "react-router-dom";
import BotaoIcone from "../../../components/botao-icone/botao-icone";
import CaixaImagem from "../../../components/caixa-imagem/caixa-imagem";

function DIY() {

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
                        <h2>Ideias de DIY</h2>
                    </div>
                    
                    {/* CONTEÚDO DA PÁGINA------------------------------------ */}
                    
                    <h1>
                        DIY é a sigla de "Do It Yourself", que em português significa <span className="estiloh1-3">{' '}“faça você mesmo”</span>.
                        O termo é usado para se referir a projetos, trabalhos ou atividades que você mesmo pode criar, construir, consertar ou personalizar, sem depender de profissionais.
                        A ideia do DIY é estimular a <span className="estiloh1-3">{' '}criatividade</span>.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://st4.depositphotos.com/13349494/22484/i/600/depositphotos_224849984-stock-photo-flay-lay-different-carpentry-tools.jpg"
                            alt="DIY"
                            style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}DIY. Fonte: https://depositphotos.com/pt/photos/diy.html</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Por que fazer DIY?</h3>

                    <h1>
                        Fazer DIY em vez de comprar coisas prontas tem várias vantagens que vão além da economia.
                        Uma das principais é a personalização: ao criar algo com as próprias mãos, você pode adaptar cores, formatos e detalhes exatamente ao <span className="estiloh1-3">{' '}seu gosto</span>.
                        Também existe o lado emocional, já que objetos feitos por você carregam mais significado e podem se tornar <span className="estiloh1-3">{' '}especiais</span>.
                        Outro ponto importante é a <span className="estiloh1-3">{' '}sustentabilidade</span>: muitas vezes o DIY aproveita materiais que seriam descartados, reduzindo o desperdício e incentivando o consumo consciente.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://freight.cargo.site/w/1200/i/P1660234380598491671990399867439/Alltrash_02.gif"
                            alt="lixo"
                            style={{
                            width: isMobile ? "30vh" : "60vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Lixo. Fonte: https://aditi-kapur.com/berlin-trashtalk</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Roupas</h3>

                    <h1>Personalizar roupas é uma forma criativa de dar nova vida ao guarda-roupa.
                        Você pode fazer cortes nas peças, usar técnicas de pintura, aplicar bordados, patches, pedrarias ou rendas.
                        A personalização ajuda a <span className="estiloh1-3">{' '}reaproveitar</span> roupas antigas que talvez fossem para o lixo.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/be/e9/62/bee962f5eef7216c7b54c4e5ee05b61e.jpg"
                            alt="spray"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Spray. Fonte: https://br.pinterest.com/pin/1150317929829103868/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/1200x/bd/41/cc/bd41cc3df64b25ff610a5545d481441c.jpg"
                            alt="corte"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Corte. Fonte: https://br.pinterest.com/pin/211174977575788/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/18/ca/16/18ca16c879e2a7dfc83a820fbf5e83fd.jpg"
                            alt="corte"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Corte. Fonte: https://br.pinterest.com/pin/985231151799243/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/eb/91/86/eb9186de6809463d2123bae621eaaec4.jpg"
                            alt="colagem"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Colagem. Fonte: https://br.pinterest.com/pin/133630313926697006/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Acessórios</h3>

                    <h1>Bolsas, mochilas e bonés podem ganhar patches, bordados, pins e até pinturas manuais.
                        Pulseiras e colares podem ser modificados com pingentes, miçangas ou correntes diferentes, criando combinações exclusivas.
                        Até mesmo tênis podem ser customizados com tintas próprias ou cadarços coloridos.
                        Outra vantagem é a possibilidade de <span className="estiloh1-3">{' '}reciclar</span>: transformar peças quebradas ou esquecidas em novos acessórios evita o desperdício e ajuda a consumir de forma mais consciente.
                    </h1>
                    
                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/1200x/16/2b/d7/162bd716cad7543006109c0b5322e361.jpg"
                            alt="fitas"
                            style={{
                            width: isMobile ? "30vh" : "40vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Fitas. Fonte: https://br.pinterest.com/pin/43558321391357040/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/af/5c/5c/af5c5cc7f4d72ce60a95be480ae59a91.jpg"
                            alt="palitos"
                            style={{
                            width: isMobile ? "30vh" : "40vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}palitos. Fonte: https://br.pinterest.com/pin/1150317929829617573/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/68/fb/8e/68fb8e8a33e562ef6baea11aeb4917fc.jpg"
                            alt="bottom"
                            style={{
                            width: isMobile ? "30vh" : "40vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}bottom. Fonte: https://br.pinterest.com/pin/1150317929829617692/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/f7/6e/66/f76e6649e23ec50f3c43f71b876e7447.jpg"
                            alt="botões"
                            style={{
                            width: isMobile ? "30vh" : "40vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}botões. Fonte: https://br.pinterest.com/pin/1150317929829170809/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Decoração</h3>

                    <h1>Objetos simples, como vasos, quadros ou caixinhas, podem ser transformados com tintas, tecidos, adesivos ou técnicas de colagem.
                        Móveis também podem ganhar nova vida com pintura, troca de puxadores ou aplicação de papéis adesivos.
                        Muitas vezes, peças antigas só precisam de uma <span className="estiloh1-3">{' '}repaginada</span> para voltarem a ter destaque.
                        Uma cômoda pode virar aparador, portas podem ser transformadas em mesas, e garrafas ou potes podem se tornar vasos e luminárias.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/6a/5b/f9/6a5bf9a7a5dfc370235adf0d0fe8c144.jpg"
                            alt="pota treco"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}porta treco. Fonte: https://br.pinterest.com/pin/1150317929829616628/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/42/87/92/428792153161fd9477f1bd463667c299.jpg"
                            alt="urso"
                            style={{
                            width: isMobile ? "30vh" : "40vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Urso. Fonte: https://br.pinterest.com/pin/1407443629326457/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/1200x/bf/13/fe/bf13fe2611940274ad8059bb8d4da543.jpg"
                            alt="Porta"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Porta. Fonte: https://br.pinterest.com/pin/217439488255306981/</span></h1>
                    </div>
                    
                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/1200x/cf/8c/7b/cf8c7befc9a7b687f8da776afa16f299.jpg"
                            alt="móvel"
                            style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}móvel. Fonte: https://br.pinterest.com/pin/1150317929829618044/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/1200x/e8/8f/f4/e88ff4b08dcdbf94893b4a316ba0ab5a.jpg"
                            alt="tira"
                            style={{
                            width: isMobile ? "30vh" : "40vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Tira. Fonte: https://br.pinterest.com/pin/59883870036290861/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/1200x/8d/bc/0d/8dbc0dae0919c9c2f40ca2de902c26d8.jpg"
                            alt="pintura"
                            style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}pintura. Fonte: https://br.pinterest.com/pin/24558760464591775/</span></h1>
                    </div>

                    
                    <LinhaEmBranco/>

                    <h3>◉ Sketchbook</h3>

                    <h1>Um sketchbook é um <span className="estiloh1-3">{' '}caderno de desenho</span> usado para rascunhos, estudos e anotações visuais.
                        Ele costuma ter páginas em branco feitas de papel próprio para lápis, caneta, marcador, aquarela ou outros materiais artísticos.
                        Muitas pessoas gostam de fazer colagens em seus cadernos para soltar a criatividade. Tente fazer <span className="estiloh1-3">{' '}colagens</span> com materiais de você encontra no seu cotidiano.
                        <span className="estiloh1-3">{' '}Não precisa ser perfeito</span>. A ideia é exatamente criar um espaço onde você pode fazer o que quiser.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/56/60/75/5660759431c5b99b810887f8c5752b4f.jpg"
                            alt="caderno"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Caderno. Fonte: https://br.pinterest.com/pin/138133913566103353/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/6f/2b/4b/6f2b4b101630715fa51c32020ba2a233.jpg"
                            alt="caderno"
                            style={{
                            width: isMobile ? "30vh" : "60vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Caderno. Fonte: https://br.pinterest.com/pin/13229392652174491/</span></h1>
                    </div>


                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/84/ef/cd/84efcd8e33fcf0d941ded19630bb2cbf.jpg"
                            alt="caderno"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Caderno. Fonte: https://br.pinterest.com/pin/1055599908570896/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    
                    <h3>◉ Artesanato em geral</h3>

                    <h1>O artesanato pode ser feito de diversas formas, utilizando <span className="estiloh1-3">{' '}materiais</span> como papel, tecido de crochê, massa de modelar, madeira e muitos outros.
                        É possível criar peças para uso no dia a dia, para decorar ambientes ou até gerar uma renda extra. use a criatividade para fazer o que quiser.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/e2/67/d1/e267d12009319cea47ed8c8a3a4da805.jpg"
                            alt="crochê"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Crochê. Fonte: https://br.pinterest.com/pin/422281211370907/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/0f/26/9f/0f269fe51a2efe25fd575a2843ac4e73.jpg"
                            alt="latas"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Latas. Fonte: https://br.pinterest.com/pin/13440498883599826/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/1200x/62/29/c6/6229c6acb672d7c5b10ba563da807b12.jpg"
                            alt="Nyan Cat"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Nyan Cat Fonte: https://br.pinterest.com/pin/208643395232486315/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <div className="caixa-de-texto">
                            <h1>Onde posso encontrar mais ideias?</h1>
                        </div>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ YouTube</h3>

                    <h1>O YouTube é uma das grandes plataformas de vídeos de DIY. Durante anos foi a plataforma com mais conteúdos de personalização.
                        Você pode criar playlists com os vídeos que você mais gosta e pretende por em prática.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://nfe.io/blog/app/uploads/2021/05/youtube.jpg"
                            alt="Youtube"
                            style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Youtube. Fonte: https://www.youtube.com/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                            <BotaoIcone imagem={0} texto='Acessar YouTube' />
                        </a>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Pinterest</h3>

                    <h1>A plataforma oferece uma grande biblioteca de imagens, gifs e vídeos. Você pode criar uma pasta para salvar as suas ideias de diy favoritas.
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

export default DIY;