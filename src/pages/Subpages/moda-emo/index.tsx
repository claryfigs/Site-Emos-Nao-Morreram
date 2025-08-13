import "./style.css"
import Header from "../../../components/header/header";
import Sidebar from "../../../components/sidebar/sidebar";
import BackgroundImage from '../../../assets/background.png'
import LinhaEmBranco from "../../../components/linha-embranco/linha-embranco";
// import BotaoGrande from "../../../components/botao-grande/botao-grande";
// import CaixaImagem from "../../../components/caixa-imagem/caixa-imagem";
import BotaoIcone from "../../../components/botao-icone/botao-icone";
import { useNavigate } from "react-router-dom";

function ModaEmo() {

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
                        <h2>Moda Emo</h2>
                    </div>
                    
                    {/* CONTEÚDO DA PÁGINA------------------------------------ */}

                    <h1>Mesmo que a música seja o principal na vida de um emo, o visual costuma ser um fator muito importante de autoafirmação.
                        A moda emo possui grande influência da moda punk, cyber e j-fashion.
                        A principal cor de destaque é o <span className="estiloh1-3">{' '}preto</span>, mas a cor pode ser misturada com outras cores.
                        Algumas pessoas gostam de criar visuais <span className="estiloh1-3">{' '}monocromáticos</span>,
                        focando em uma cor só, enquanto outras optam por misturar cores de roupas e elementos.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/a0/31/32/a03132be736dc87d60ce4ab1635d8bc6.jpg"
                            alt="amigos emos"
                            style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Amigos emos. Fonte: https://br.pinterest.com/pin/53972895529711123/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <div className="" onClick={() => irPara("/musica-emo")}>
                            <BotaoIcone imagem={0} texto='Conferir música emo'/>
                        </div>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Estampas e tecidos</h3>

                    <h1>As estampas mais comuns de se encontrar em looks emos são listas, animal print, camuflagem, xadrez e frutiger floral.
                        Os tecidos com aspectos de envelhecidos, manchados, amassados , jeans, tule e renda são muito utilizados.
                        As vezes, quanto mais <span className="estiloh1-3">{' '}retrô e destruído</span> parecer, mais estiloso fica.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/26/48/b2/2648b2f6a23a002b897604388ca413f3.jpg"
                            alt="estampas"
                            style={{
                            width: isMobile ? "30vh" : "60vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Estampas. Fonte: https://br.pinterest.com/pin/240238961369189862/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/42/f0/e2/42f0e259be78476907e35c472ed10655.jpg"
                            alt="tecidos diferentes"
                            style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Tecidos diferentes. Fonte: https://br.pinterest.com/pin/80924124546507921/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Cabelos</h3>

                    <h1>Apesar de ser muito comum utilizar a franja lisa emo, famosa por ser unilateral e assimétrica, ela nem sempre é um requisito para um look emo.
                        O visual depende de um conjunto de um todo, portanto, você pode <span className="estiloh1-3">{' '}usar a criatividade para personalizar seu cabelo</span> do jeito que você preferir.

                        Algumas pessoas gostam do cabelo natural, mas improvisam uma franja com presilhas, grampos de cabelo e mechas falsas.
                        Enquanto outras gostam de radicalizar com cortes repicados, raspados, descoloridos, cacheados, com desenhos, e outras variações.
                        Aproveite para soltar a criatividade!
                    </h1>

                    <LinhaEmBranco/>

                    
                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/1200x/41/65/3e/41653ec714298a64b3fa4640cdf2b82f.jpg"
                            alt="spike hair"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Spike Hair. Fonte: https://br.pinterest.com/pin/139259813471723981/</span></h1>
                    </div>

                    
                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/b4/a2/09/b4a209f5972d3bbe3aa2742b3672d1af.jpg"
                            alt="Cachos"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Cachos. Fonte: https://br.pinterest.com/pin/11540542793828266/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/c0/1b/87/c01b8705dac9ef1e319791eef5dc861f.jpg"
                            alt="Dreadlocks"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Dreadlocks. Fonte: https://br.pinterest.com/pin/1150317929828939397/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/1200x/ab/88/b6/ab88b62ee794b279c4ecdd876465003e.jpg"
                            alt="Extensões"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Extensões. Fonte: https://br.pinterest.com/pin/307863324549039199/</span></h1>
                    </div>

                    <h3>◉ Maquiagem</h3>

                    <h1>A maquiagem clássica emo inclui <span className="estiloh1-3">{' '}apenas um lápis de olho</span> e um sonho.
                        Existem várias formas de personalizar a maquiagem usando cores diferentes de sombras, fazendo desenhos com o delineador,
                        destacando a sobrancelha e região dos olhos. A parte da boca nem sempre tem muito destaque,
                        mas nada impede de usar um batom mais escuro pra dar destaque aos lábios, que também podem ser desenhados.
                        Você também pode usar a maquiagem como Corpse Paint para cosplays ou referências.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/41/41/77/414177f81a2758f4a685a2965904dcf2.jpg"
                            alt="make classica"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Make Classica. Fonte: https://br.pinterest.com/pin/1150317929828930351/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/cd/69/d4/cd69d49972b4a9c7b4be063c7b73ded0.jpg"
                            alt="make frutiger"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Make frutiger. Fonte: https://br.pinterest.com/pin/20195898326574331/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/1200x/49/77/dc/4977dc3f65cf35273b660c51f619b6f7.jpg"
                            alt="make caveira"
                            style={{
                            width: isMobile ? "30vh" : "40vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Make Caveira. Fonte: https://br.pinterest.com/pin/771593348627606546/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Acessórios</h3>

                    <h1>Muitas vezes os acessórios fazem o look mais do que as roupas.
                        Na cabeça, experiente usar bandanas, laços, tiaras, gorros ou snapbacks.
                        Para as mãos, tente luvas, munhequeiras, anéis, pulseiras e braceletes.
                        Para o resto do corpo, tente colares, lenços, óculos, gravatas, gargantilhas, chaveiros, etc.
                        As bolsas e mochilas podem ser personalizadas com fitas, bottons, pingentes, pinturas e mais.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/1200x/c8/65/00/c86500e904c19af2b818e64c887c7519.jpg"
                            alt="loja acessorios"
                            style={{
                            width: isMobile ? "30vh" : "80vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Loja acessórios. Fonte: https://br.pinterest.com/pin/295056213111695027/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/15/cb/96/15cb96dba1d348b1f70a88ea6c08ec20.jpg"
                            alt="loja de bolsas"
                            style={{
                            width: isMobile ? "30vh" : "40vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Loja de bolsas. Fonte: https://br.pinterest.com/pin/67765169388771097/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Sapatos</h3>

                    <h1>Existe uma variedade de sapatos utilizados em looks emo.
                        O sapato mais famoso é o clássico <span className="estiloh1-3">{' '}All Star</span>, que pode aparecer com várias estampas, tamanhos e cores.
                        Geralmente são usados sapatos fechados, como <span className="estiloh1-3">{' '}tênis e botas</span>,
                        mas também existem calçados como chinelos, sandálias, saltos e sapatilhas que podem ser personlizados para ficar com uma cara mais emo.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/1200x/69/8d/ba/698dbad18356baecfc093ff2ea0ee17f.jpg"
                            alt="all stars"
                            style={{
                            width: isMobile ? "30vh" : "60vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}All Stars. Fonte: https://br.pinterest.com/pin/512003051408734456/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/94/ee/dc/94eedc052eeaf68100ed708dfd265c85.jpg"
                            alt="sapatos"
                            style={{
                            width: isMobile ? "30vh" : "60vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Sapatos. Fonte: https://br.pinterest.com/pin/1150317929829107863/</span></h1>
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
                        <img src="https://i.pinimg.com/736x/b1/53/79/b1537907d8cd04c081aedf814ef40665.jpg"
                            alt="tatuagens"
                            style={{
                            width: isMobile ? "30vh" : "40vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Tatuagens. Fonte: https://br.pinterest.com/pin/31103053674307561/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/1c/03/99/1c03999dd32a8540634f9bbde167f00b.jpg"
                            alt="alargadores"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Alargadores. Fonte: https://br.pinterest.com/pin/6473993211704079/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/7f/bb/40/7fbb40ed9b8038f1577236dc69c897dc.jpg"
                            alt="implantes"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Implantes. Fonte: https://br.pinterest.com/pin/41165784089770079/</span></h1>
                    </div>


                    <LinhaEmBranco/>


                    <h3>◉ Roupas em geral</h3>

                    <h1>Em geral, as roupas emo cosistem em camisetas estampadas e calças skinny, mas também podem ser usadas outros tipos de peças,
                        como vestidos, jaquetas, saias e shorts. Podem ser elaborados looks casuais, elegantes, techwear  ou streetwear.
                        Os looks também podem ser elaborados com pijamas ou roupas íntimas.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/1200x/49/f8/0e/49f80e91f64138baf8841de893406a61.jpg"
                            alt="camisetas"
                            style={{
                            width: isMobile ? "30vh" : "60vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Camisetas. Fonte: https://br.pinterest.com/pin/14566398790124938/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://scontent.ffor41-1.fna.fbcdn.net/v/t1.6435-9/173893170_3943828655663050_1637963309013299872_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=NhTc3j0azB0Q7kNvwG1pv0I&_nc_oc=Adm0RUbyhh0lANTh7RmLg7ztItMeWvMpH4Yd4BUTE2tt64A35pxT5XMiwE6CE54-F8o&_nc_zt=23&_nc_ht=scontent.ffor41-1.fna&_nc_gid=eyPeTbapk5plr4RePO5utg&oh=00_AfVW-GOp0SDcJRL2BEXwiZghJpTAHdV6ZxqLUL1PrcM6OA&oe=68C45BCD"
                            alt="dropdead"
                            style={{
                            width: isMobile ? "30vh" : "60vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Drop Dead. Fonte: https://www.facebook.com/DROPDEADOFFICIAL/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Onde comprar roupas?</h3>

                    <h1>Muitas das peças citadas anteriormente podem ser encontradas em <span className="estiloh1-3">{' '}brechós e bazares</span> de moda sustentável,
                        mas existem lojas que produzem roupas semelhantes ainda nos dias atuais, geralmente vendididas em aplicativos de compras online como Shein, Shopee e Aliexpress.
                        Algumas bandas emo possuem sites próprios para vender os produtos personalizados de acordo com a banda.
                        Você também pode contratar serviços externos de personalização para produzir suas roupas ou <span className="estiloh1-3">{' '}personalizá-las por contra própria</span>.
                    </h1>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <div className="" onClick={() => irPara("/")}>
                            <BotaoIcone imagem={0} texto='Conferir ideias de DIY'/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ModaEmo;