import "./style.css"
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import BookIcon from '../../assets/book-black.png'
import BackgroundImage from '../../assets/background.png'
import LinhaEmBranco from "../../components/linha-embranco/linha-embranco";

function Contexto() {

    const isMobile = window.innerWidth < 768;

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
                        <img src={BookIcon} alt="livro" className="images-title" />
                        <h2> Contexto histórico</h2>
                    </div>
                    
                    {/* CONTEÚDO DA PÁGINA------------------------------------ */}
                    
                    <h1>
                        O que são emos e scenes? O que pensam? O que comem? De onde vieram?
                        Apesar de parecerem perguntas simples, são bem mais complexas do que parecem.
                        Podemos analisar suas inspirações, ideias e conceitos para montar uma linha do tempo lógica.
                    </h1>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <div className="caixa-de-texto">
                            <h1>Mas afinal, o que são os emos e scenes?</h1>
                        </div>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Emos X Scenes</h3>
                    <h1>
                        Apesar de parecidos, os dois estilos tem algumas diferenças.
                        Enquanto o emo possui grande influência musical, principalmente originada do hardcore punk, o Scene se originou de tedências de moda.
                        Portanto, <span className="estiloh1-3">{' '}para um EMO a música emo é o essencial</span>, enquanto <span className="estiloh1-3">{' '}para um SCENE o visual é o essencial</span> .
                        
                        Uma pessoa pode somente consumir a música emo, sem necessariamente aderir ao estilo visual,
                        enquanto outras podem aderir o visual scene, preferindo outros gêneros musicais (geralmente pop, tecno e eletronica).
                        
                    </h1>

                    <LinhaEmBranco/>

                    <h1>
                        Apesar de não existir uma regra dizendo como um emo deve se vestir,
                        existem algumas características mais populares.
                        Os scenes e emos utilizam elementos visuais muito parecidos, como cortes de cabelo repicados, acessórios, tatuagens, piercings, entre outros adereços.
                        <span className="estiloh1-3">{' '}A principal diferença entre os dois acaba vindo da paleta de cores, estampas e elementos do look.</span>
                        {' '} Enquanto os emos costumam transparecer uma estética mais misteriosa e sombria, os scenes focam numa estética mais divertida e chamativa.
                        Os elementos também podem ser misturados. Algumas pessoas se intitulam como <span className="estiloh1-3">{' '}"scemo"</span> para definir uma estética mista entre os dois estilos.
                    </h1>


                    <LinhaEmBranco/>


                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://d2bzx2vuetkzse.cloudfront.net/fit-in/0x700/outfits/a2a0710a-bb44-4746-aa80-e53b8cbb1477.jpeg"
                            alt="roupas emo e scenes"
                            style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Roupas Emo e Scene. Fonte: https://frontend-production-aws.shoplook.io/outfit-preview/8741300</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRShq-czYhq74LmrH4h-_yhQXaaArzUCrigVA&s"
                            alt="emos e scenes" style={{ width: isMobile ? "30vh" : "40vh", borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Emo e Scene. Fonte: https://www.deviantart.com/demiseman</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <div className="caixa-de-texto">
                            <h1>Onde tudo começou?</h1>
                        </div>
                    </div>

                    <LinhaEmBranco/>
                    
                    
                    <h3>◉ Bandas emo e suas origens</h3>

                    <h1>
                        Nos anos 80 e 90, a maioria das bandas emo eram formadas por músicos jovens, organizadas pelos próprios integrantes.
                        Inspiravam-se em bandas locais <span className="estiloh1-3">{' '}hardcore punk</span>. As bandas faziam shows em porões e em espaços comunitários.
                        Geralmente ensaiavam em casa, com amigos da escola e da vizinhança, sem fins lucrativos.
                        Assim como as bandas punk, as bandas emo também possuíam <span className="estiloh1-3">{' '}teor político</span>, porém com mais foco em temas emocionais e introspectivos.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://escotilha.com.br/wp-content/uploads/2019/09/tica-e-politica-da-banda-de-garagem.jpg"
                        alt="Pessoas tocando"
                        style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                        }}/>
                        <h1><span className="estiloh1-5">{' '}Pessoas tocando. Fonte: https://escotilha.com.br/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://cvltnation.com/wp-content/uploads/2015/01/564269_324295187650225_939659782_n.jpg?_gl=1*1ky9mi5*_ga*MTM4NzY0MzcxNi4xNzUzOTExNjU5*_ga_68MYBLZC6Y*czE3NTM5MTE2NTgkbzEkZzAkdDE3NTM5MTE2NTgkajYwJGwwJGgw"
                        alt="Pessoas tocando"
                        style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                        }}/>
                        <h1><span className="estiloh1-5">{' '}Pessoas tocando. Fonte: https://cvltnation.com/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Divulgação</h3>

                    <h1>
                        Para popularizar as músicas, usavam gravadores simples (fita cassete, 4-track), divulgavam em zines (publicações independentes e artesanais),
                        distribuíam demos em shows, correio ou lojas independentes.
                        Algumas bandas conseguiam pequenas turnês por outros estados e países, organizadas por amigos ou coletivos da cena.
                        Gravadoras indie, como a Dischord Records, começaram a apoiar bandas emo posteriormente.
                    </h1>

                    
                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/1970s_fanzines_%2821224199545%29.jpg/1200px-1970s_fanzines_%2821224199545%29.jpg"
                        alt="zines punk"
                        style={{
                            width: isMobile ? "30vh" : "60vh",
                            borderRadius: "2vh"  // cantos arredondados
                        }}/>
                        <h1><span className="estiloh1-5">{' '}Zines punk. Fonte: https://en.wikipedia.org/wiki/Punk_zine</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Influência na mídia</h3>

                    <h1>
                        As músicas emo viraram moda entre os jovens, principalmente entre 2003 e 2008.
                        Esse foi o <span className="estiloh1-3">{' '}auge comercial do estilo</span>. Quando muitas bandas emo alcançaram grande popularidade na mídia, em CDs, DVDs, na TV (em canais musicais como a MTV) e nas rádios.
                        Devido a popularidade, a comunidade emo virou um mercado capital. Passaram a existir lojas focadas no nicho ao redor do mundo. As lojas vendiam itens de papelaria, roupas, entre outros produtos.
                        Ao mesmo tempo, a <span className="estiloh1-3">{' '}música pop e eletrônica</span> também cresceu de forma exponencial.
                        Se popularizaram <span className="estiloh1-3">{' '}revistas teen, videoclipes com superproduções, roupas extravagantes e expressivas</span>. Essas influências contribuiram para a popularização do estilo Scene.

                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://static01.nyt.com/images/2019/04/11/fashion/04HOTTOPIC3/merlin_27838406_ff6a6017-5a93-41cb-823a-abdeee68e64f-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
                        alt="loja hot topic"
                        style={{
                            width: isMobile ? "30vh" : "60vh",
                            borderRadius: "2vh"  // cantos arredondados
                        }}/>
                        <h1><span className="estiloh1-5">{' '}Loja Hot Topic. Fonte: https://www.nytimes.com/2019/04/06/style/hot-topic-stores.html</span></h1>
                    </div>


                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://s3-media0.fl.yelpcdn.com/bphoto/LD0-vFW4Q--RSaESTfBDSg/l.jpg"
                        alt="loja Spark Pretty"
                        style={{
                            width: isMobile ? "30vh" : "60vh",
                            borderRadius: "2vh"  // cantos arredondados
                        }}/>
                        <h1><span className="estiloh1-5">{' '}Loja Spark Pretty. Fonte: https://www.mapquest.com/us/new-york/spark-pretty-378891699</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Comunidade na internet</h3>

                    <h1>
                        Quando a internet se tornou mais acessível, os jovens passaram a ter autonomia para personalizar os hambientes virtuais.
                        Afim de unir pessoas com o mesmo carinho pela subcultua, surgiram <span className="estiloh1-3">{' '}blogs, fóruns e sites sobre o estilo.</span>{' '}
                        Muitos sites foram criados a partir de plataformas facilitadoras (como o Blogspot).
                        As redes socais e aplicativos de mensagem abriram margem para emos e scenes do mundo inteiro se conectarem, trocarem experiências e se relacionarem.
                        Algumas das redes mais populares da época eram o MySpace, SpaceHey, Skype Orkut.

                    </h1>

                    <LinhaEmBranco/>
                    
                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.kym-cdn.com/photos/images/newsfeed/002/643/249/5c7.jpg"
                        alt="cadeira e computador"
                        style={{
                            width: isMobile ? "30vh" : "65vh",
                            borderRadius: "2vh"  // cantos arredondados
                        }}/>
                        <h1><span className="estiloh1-5">{' '}Computador. Fonte: https://knowyourmeme.com/memes/2000s-older-brother-core</span></h1>
                    </div>
                    

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://64.media.tumblr.com/018d04f7109a2d444520d800ed18a4de/3f0eaaa1d9930bb5-10/s1280x1920/50dba8371b6a5a0fd9f9623031e50325b4fa55a4.jpg"
                        alt="elementos em pixel"
                        style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                        }}/>
                        <h1><span className="estiloh1-5">{' '}Desenhos pixel. Fonte: https://oldwww.tumblr.com/post/675956203099176960</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <div className="caixa-de-texto">
                            <h1>E no Brasil? Como se popularizou?</h1>
                        </div>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Popularização no Brasil</h3>

                    <h1>
                        Aqui no Brasil a moda pegou de uma forma diferente. A músicas nacionais mais populares focavam em elementos menos punk. Dando espaço para o<span className="estiloh1-3">{' '}rock acústico, pop, rap, reggae e sertanejo.</span>{' '}
                        Em contra partida, o funk também era um estilo altamente consumido.
                        Criando a polêmica rivalidade entre roqueiros e funkeiros, que gera intriga até os dias de hoje.
                        No meio do rock, bandas e artistas que cantavam sobre <span className="estiloh1-3">{' '}romance e adolescencia</span> foram os que mais estouraram. Enquanto bandas que mantiam a essência punk eram menos populares.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://jornalismofaat.wordpress.com/wp-content/uploads/2010/09/foto-2.jpg"
                        alt="banda cine"
                        style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                        }}/>
                        <h1><span className="estiloh1-5">{' '}Fãs do Restart. Fonte: https://jornalismofaat.wordpress.com/2010/09/24/banda-restart-faz-show-em-atibaia/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://cdn.meadd.com/photos/full/43973625.jpg"
                        alt="banda Gloria"
                        style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                        }}/>
                        <h1><span className="estiloh1-5">{' '}Banda Gloria. Fonte: https://meadd.com/familyrock/43973625</span></h1>
                    </div>

                    <LinhaEmBranco/>

                </div>

            </div>

        </div>
    );
}

export default Contexto;