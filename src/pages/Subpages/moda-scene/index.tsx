import "./style.css"
import Header from "../../../components/header/header";
import Sidebar from "../../../components/sidebar/sidebar";
import BackgroundImage from '../../../assets/background.png'
import LinhaEmBranco from "../../../components/linha-embranco/linha-embranco";
// import BotaoGrande from "../../../components/botao-grande/botao-grande";
// import CaixaImagem from "../../../components/caixa-imagem/caixa-imagem";
import BotaoIcone from "../../../components/botao-icone/botao-icone";
import { useNavigate } from "react-router-dom";
import CaixaImagem from "../../../components/caixa-imagem/caixa-imagem";
import BotaoGrandeEstatico from "../../../components/botao-grande-estatico/botao-grande-estatico";

function ModaScene() {

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
                        <h2>Moda Scene</h2>
                    </div>
                    
                    {/* CONTEÚDO DA PÁGINA------------------------------------ */}

                    <h1>O visual scene é um fator <span className="estiloh1-3">{' '}importantíssimo</span> para a comunidade scene, sendo considerado um elemento essêncial.
                        A moda scene possui grandes inspirações na moda harajuku, kawaii, punk, cyberpunk e anos 2000.
                        Geralmente são misturadas <span className="estiloh1-3">{' '}duas cores ou mais</span> para compor o look,
                        que podem aparecer nos acessórios ou roupas. Também é possível encontrar roupas com tons de neon fosforescentes estilo rave.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/1200x/18/46/84/1846842f21866d7ca7ce1147056e1730.jpg"
                            alt="amigas Scene"
                            style={{
                            width: isMobile ? "30vh" : "60vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Amigas scenes. Fonte: https://br.pinterest.com/pin/1150317929829146331/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/1e/28/b4/1e28b4ed17151122d0dec7fd6cc98343.jpg"
                            alt="look neon"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Look neon. Fonte: https://br.pinterest.com/pin/1150317929829148444/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Estampas e tecidos</h3>

                    <h1>Geralmente as roupas scene possuem algum elemento de destaque, podendo ser uma cor chamativa ou uma estampa diferente.
                        As estampas incluem animal print, listras, desenhos e mais. Quanto aos tecidos, é comum encontrar eslastano, renda, tule, jeans, entre outros.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/31/d6/3e/31d63ea2f06b2781321be642680208dc.jpg"
                            alt="Estampas"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Estampas. Fonte: https://br.pinterest.com/pin/1150317929829110220/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/bb/26/d0/bb26d03a43460b0a629b0a9204ce0b06.jpg"
                            alt="Estampas"
                            style={{
                            width: isMobile ? "30vh" : "40vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Estampas. Fonte: https://br.pinterest.com/pin/4996249581787745/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Cabelos</h3>

                    <h1>O cabelo é um elemento muito importante para montar um look scene.
                        Muitas vezes cabelos com cores mais naturais aparecem <span className="estiloh1-3">{' '}armados com spray de cabelo</span> ou com extensões de cabelo.
                        Outras pessoas gostam de deslocorir, pintar, cortar, raspar, e fazer penteados diferentes.
                        Os cabelos podem ser personalizados de várias formas,
                        então aproveite para usar a <span className="estiloh1-3">{' '}criatividade</span>.
                        Muitas pessoas optam por comprar perucas para facilitar a troca de cabelos.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/1200x/67/f8/e5/67f8e5335b15aaaae44fdf3e86fdf932.jpg"
                            alt="cabelo armado"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Cabelo armado. Fonte: https://br.pinterest.com/pin/492649951796369/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/85/24/42/852442e8ab53bff93fc5cad5da22a065.jpg"
                            alt="cabelo verde"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Cabelo verde. Fonte: https://br.pinterest.com/pin/61924563621438113/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/1200x/7d/df/5a/7ddf5a7771af9ef31d05910dc72279aa.jpg"
                            alt="cabelo listrado"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Tranças. Fonte: https://br.pinterest.com/pin/207095282860240642/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Maquiagem</h3>

                    <h1>Uma das maquiagens scene mais básicas é o <span className="estiloh1-3">{' '}olho preto esfumado</span>, muitas vezes acompanhado de cílios postiços.
                        Maquiagens mais elaboradas podem incluir sombras, delinheado, batom, rímel e lápis de olho.
                        Você pode fazer desenhos que combinem com o restante do look, além de <span className="estiloh1-3">{' '}pinturas corporais</span> para cosplays e referências.
                    </h1>


                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/9d/37/bb/9d37bb4e6b7b1b60cdb28fde447908a5.jpg"
                            alt="Make basica"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Make básica. Fonte: https://br.pinterest.com/pin/228698487301777574/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/ff/13/a6/ff13a62e59654b93db7f282d7694336c.jpg"
                            alt="várias makes"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Várias makes. Fonte: https://br.pinterest.com/pin/1150317929829109305/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/1200x/f3/49/fd/f349fd75a28a44ece42c595bf2a14f1e.jpg"
                            alt="make zumbi"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Make zumbi. Fonte: https://br.pinterest.com/pin/1688918605550055/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Acessórios</h3>

                    <h1>Muitas vezes os acessórios fazem o look mais do que as roupas.
                        O <span className="estiloh1-3">{' '}maximalismo</span> é uma característica do estilo scene, então não tenha medo de exagerar nos acessórios.
                        Na cabeça, experiente usar bandanas, laços, tiaras, gorros e snapbacks.
                        Para as mãos, tente luvas, munhequeiras, anéis, pulseiras e braceletes.
                        Para o resto do corpo, tente colares, lenços, óculos, gravatas, gargantilhas, chaveiros, etc.
                        As bolsas e mochilas podem ser personalizadas com fitas, bottons, pingentes, pinturas e mais.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/46/06/b1/4606b1d585bcdafa5dba3367a54e9017.jpg"
                            alt="Acessorios"
                            style={{
                            width: isMobile ? "30vh" : "60vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Acessórios. Fonte: https://br.pinterest.com/pin/350154939809140283/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/1200x/be/a9/74/bea97496f62c43d671bedfd6c32305c5.jpg"
                            alt="bolsas"
                            style={{
                            width: isMobile ? "30vh" : "60vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Bolsas. Fonte: https://br.pinterest.com/pin/1150317929829108116/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/1200x/e3/a9/0b/e3a90bb0b2e409937b21fc34261f0f68.jpg"
                            alt="bonés"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Bonés. Fonte: https://br.pinterest.com/pin/1150317929829108728/</span></h1>
                    </div>

                    <h3>◉ Sapatos</h3>

                    <h1>
                        Não existe um tipo de calçado definido para a moda scene.
                        O principal ponto é o sapato combinar com o restante do look,
                        já que muitas vezes os sapatos também são <span className="estiloh1-3">{' '}coloridos e estampados</span> assim como as roupas.
                        Você pode tentar usar tênis com cadarços coloridos, personalizar saltos e elaborar combinações com meias coloridas.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/66/b0/c1/66b0c1909476d10d86fa4206ba724c1d.jpg"
                            alt="tenis"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Tenis coloridos. Fonte: https://br.pinterest.com/pin/1150317929828930518/</span></h1>
                    </div>

                    
                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/1200x/c6/aa/6f/c6aa6f2c8d9c7e819d59bbac84138897.jpg"
                            alt="Saltos"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Saltos. Fonte: https://br.pinterest.com/pin/1150317929829107877/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/32/45/0c/32450cc24be79c074a988d6fb012566b.jpg"
                            alt="Meias"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Meias. Fonte: https://br.pinterest.com/pin/1150317929828860331/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Tatuagens, Piercings e modificações corporais</h3>

                    
                    <h1>Ter tatuagens e piercings <span className="estiloh1-3">{' '}não é obrigatório</span>. Porém, se você se sentir preparado para fazê-los, pode escolher entre vários tipos.
                        Caso esteja pensando em fazer uma tatuagem, procure uma arte que combine com o seu gosto e um profissional qualificado para realizá-la.
                        Se quiser colocar piercings, existem muitas variedades de joias e locais seguros para aplicá-los.
                        Você pode procurar um especialista para avaliar a melhor opção para você. O mesmo vale para modificações corporais.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/1200x/0d/a9/6a/0da96aa31538703089543f15f65be4e7.jpg"
                            alt="tatuagens"
                            style={{
                            width: isMobile ? "30vh" : "60vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Tatuagens. Fonte: https://br.pinterest.com/pin/4714774604195916/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/c9/b7/12/c9b712e8a65f294d0b8833970d8a7fc0.jpg"
                            alt="alargadores"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Alargadores. Fonte: https://br.pinterest.com/pin/241435230018324393/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Roupas em geral</h3>

                    <h1>Em geral, looks scenes podem ser feitos com vários tipos de peças,
                        como vestidos, jaquetas, saias, shorts, camisetas e mais.
                        Os looks também podem ser elaborados com pijamas, roupas íntimas ou fantasias.
                        O impotante é passar a mensagem desejada.
                    </h1>

                    <LinhaEmBranco/>
                    
                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/15/18/7d/15187d1e4cb76e290ea4fdd45711cc80.jpg"
                            alt="loja de roupa"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Loja de roupa. Fonte: https://br.pinterest.com/pin/1150317929829146214/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/35/26/21/3526215ab445fb5f44bdb580bcb06fce.jpg"
                            alt="roupa intima"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Roupa intima. Fonte: https://br.pinterest.com/pin/1150317929829109401/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Onde comprar roupas?</h3>

                    <h1>Muitas das peças citadas anteriormente podem ser encontradas em <span className="estiloh1-3">{' '}brechós e bazares</span> de moda sustentável,
                        mas existem lojas que produzem roupas semelhantes ainda nos dias atuais, geralmente vendididas em aplicativos de compras online como Shein, Shopee e Aliexpress.
                        Algumas lojas possuem sites próprios para vender os produtos personalizados de acordo com o tema.
                        Você também pode contratar serviços externos de personalização para produzir suas roupas ou <span className="estiloh1-3">{' '}personalizá-las por contra própria</span>.
                    </h1>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <div className="" onClick={() => irPara("/diy")}>
                            <BotaoIcone imagem={0} texto='Conferir ideias de DIY'/>
                        </div>
                    </div>
                    
                    <LinhaEmBranco/>

                    <div className="texto-centralizado">

                        <CaixaImagem imagemIndice={9} texto="Gostou do conteúdo? Confira as outras páginas do site."
                        citacao="" />
                        
                        <LinhaEmBranco/>
                        
                        <div className="texto-centralizado">
                            <div className="" onClick={() => irPara("/moda-emo")}>
                                <BotaoIcone imagem={0} texto='Conferir moda emo'/>
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

export default ModaScene;