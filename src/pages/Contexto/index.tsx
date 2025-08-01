import "./style.css"
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import BookIcon from '../../assets/book-black.png'
import BackgroundImage from '../../assets/background.png'
import LinhaEmBranco from "../../components/linha-embranco/linha-embranco";
import CaixaImagem from "../../components/caixa-imagem/caixa-imagem";
import BotaoGrandeEstatico from "../../components/botao-grande-estatico/botao-grande-estatico";

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
                        Inspiravam-se em bandas locais <span className="estiloh1-3">{' '}punk e hardcore punk</span>{' '}(Black Flag, Sex pistols , Ramones). As bandas faziam shows em porões e em espaços comunitários.
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

                    <h3>◉ Roupas e visual</h3>

                    <h1>Os visuais das bandas punk envolviam elementos que criticavam as normais sociais, assim como as músicas.
                        Usavam tecidos rasgados, pinturas feitas à mão, correntes, tachinhas e maquiagem. Popularizando o movimento do <span className="estiloh1-3">{' '}"Faça você mesmo".</span>{' '}
                        Com os emos foi bastante parecido, porém a influência da música pop trouxe elementos mais <span className="estiloh1-3">{' '}coloridos, femininos e menos agressivos.</span>{' '}
                        Criando uma identidade visual própria que diferenciava os grupos.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://http2.mlstatic.com/D_NQ_NP_621725-MLB75934337289_042024-O-kit-12-braceletes-rebite-sortidos-rock-metal-emo-show.webp"
                        alt="Acessórios"
                        style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                        }}/>
                        <h1><span className="estiloh1-5">{' '}Acessórios. Fonte: https://produto.mercadolivre.com.br/MLB-4623616724</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Retalhação e preconceito</h3>

                    <h1>
                        A nova subdivisão do rock trouxe desavenças entre os consumidores.
                        Apesar da música punk também criticar os papéis de gêneros, a principal pauta costumava ser ao sistema consumista e insatisfação com as instituições governamentais.
                        Com a chegada os emos, pautas como <span className="estiloh1-3">{' '}machismo, romance e sensibilidade emocional</span> passaram a ter mais espaço no rock.
                        Recebendo então o apelido de <span className="estiloh1-3">{' '}"EMO"</span> como abreviação da palavra "emotional".
                        Termo muitas vezes era usado de forma pejorativa para diminuir o novo movimento. Por outro lado,
                        existiam organizações que queriam censurar conteúdos considerados inapropriados na música (como a Parents Music Resource Center),
                        fazendo com que as vendas de conteúdos pesados diminuíssem. Popularizando estilos de músicais mais leve.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6299b79d-6987-4edf-9c31-bb3fb095e973/d157tts-18eaf2df-d99d-4516-aee9-be4c18525d52.jpg/v1/fill/w_800,h_609,q_75,strp/anti_emo_movement_by_summatrah_d157tts-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjA5IiwicGF0aCI6IlwvZlwvNjI5OWI3OWQtNjk4Ny00ZWRmLTljMzEtYmIzZmIwOTVlOTczXC9kMTU3dHRzLTE4ZWFmMmRmLWQ5OWQtNDUxNi1hZWU5LWJlNGMxODUyNWQ1Mi5qcGciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.f2v2AVUUBufcSI_jNPW3ueE8wKY6tHvnpgtchoP7_eo"
                        alt="Emos vs punks"
                        style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                        }}/>
                        <h1><span className="estiloh1-5">{' '}Emos vs punks. Fonte: https://www.deviantart.com/summatrah/art/Anti-Emo-Movement-69229504</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbagMNrRMSue81QTUf3bGdqQDan7wtTaGSBy7nE421RjasI9AvtbY92AGb2S04X3-MV1VD9xC-Aj-JcvDBIJEP1aJrKDqozRPi1dzcBU3BL6L8nrsY3EvI-GnABLsbvujQYg2NH2_kP-SS/s1600/pmrc-logo.png"
                        alt="PMRC"
                        style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                        }}/>
                        <h1><span className="estiloh1-5">{' '}PMRC. Fonte: https://olitizack.blogspot.com/2016/12/pmrc-quando-o-rock-foi-censurado.html</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Crescimento do pop</h3>

                    <h1>
                        A música punk estava saindo de moda e dando espaço para a popularização do pop,
                        que trazia pautas recorrentes para os adolescentes, como relacionamentos, empoderamento feminino e identidade pessoal.
                        O que contribuiu para uma maior aceitação da moda emo entre o público mainstream.
                        Criando diferenciação entre bandas emo que ainda possuíam forte <span className="estiloh1-3">{' '}influência punk </span>
                        e outras bandas com maior <span className="estiloh1-3">{' '}influência do pop e música eletrônica.</span>
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/ac/59/e1/ac59e1960f5beb6f7b2857fa96b18a45.jpg"
                        alt="Anos 90"
                        style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                        }}/>
                        <h1><span className="estiloh1-5">{' '}Anos 90. Fonte: https://br.pinterest.com/tara_bethune/1990s/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Popularização da música emo</h3>

                    <h1>
                        Com a chega das mídias digitais, muitas bandas emo alcançaram popularidade em <span className="estiloh1-3">{' '}CDs, DVDs, na TV (em canais musicais como a MTV) e nas rádios.</span>{' '}
                        Chamando atenção pelas suas <span className="estiloh1-3">letras e visual rebelde</span>, que ainda era repudiado pelas gerações mais velhas e religiosos.
                        Para quem se sentia deslocado, acompanhar os lançamentos emo significava encontrar pessoas com os mesmos conflitos e gostos, criando uma <span className="estiloh1-3">{' '}rede de pertencimento</span>,
                        aumentando cada vez mais a comunidade e popularidade ao redor do mundo.
                        Percebendo o maior consumismo do jovens, os <span className="estiloh1-3">festivais de rock</span> (como Warped Tour, Give It A Name e Taste of Chaos) começaram a incluir bandas emo no setlist.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.ytimg.com/vi/5AoLYD2Q-ak/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGH8gJyhTMA8=&rs=AOn4CLDqL5TnWB2S1W81iRzl0X6jqxa4TA"
                        alt="Show PTV"
                        style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                        }}/>
                        <h1><span className="estiloh1-5">{' '}Show PTV. Fonte: https://www.youtube.com/watch?v=5AoLYD2Q-ak/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://mychemicalfreak.wordpress.com/wp-content/uploads/2008/06/pro4.jpg"
                        alt="Show MCR"
                        style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                        }}/>
                        <h1><span className="estiloh1-5">{' '}Show MCR. Fonte: https://mychemicalfreak.wordpress.com/2008/06/04/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Influência no mercado</h3>

                    <h1>
                        Entre 2003 e 2008, a moda emo e scene chegou no <span className="estiloh1-3">{' '}auge comercial</span>.
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

                    <div className="texto-centralizado">
                        <div className="caixa-de-texto">
                            <h1>Obviamente, nada dura pra sempre.</h1>
                        </div>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ O fim do auge</h3>

                    <h1>
                        Por volta de 2015, a febre emo e scene estava perdendo parte da sua popularidade. A moda passou a ser vista como <span className="estiloh1-3">{' '}"cafona"</span> por parte da nova geração.
                        Uma grande parcela de jovens começaram a consumir menos rock punk e mais bandas grunge e indie ( como Nirvana, The Neighbourhood, Artirtic Monkeys), com uma abertura também para a febre do rap e sad trap.
                        A música pop e eletrônica continuou popular, porém com um visual mais sóbrio e menos elaborado, enfatizando muitas vezes a temática de verão.
                        Entretanto, a <span className="estiloh1-3">{' '}comunidade emo e scene ainda resistia</span> nos festivais e em redes socais mais modernas, como o Facebook, Tumblr e Instagram.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://64.media.tumblr.com/c7ca0a8b4df1a1b912a8a36389c88167/988042c90016ee31-35/s1280x1920/d154a497c8199c0e396db553f2ed178cffa09932.jpg"
                        alt="Quarto tumblr"
                        style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                        }}/>
                        <h1><span className="estiloh1-5">{' '}Quarto Tumblr. Fonte: https://www.tumblr.com/joyexe/657491512930844672</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/8a/9d/5d/8a9d5d6e29f5d1c3b1177f268f97e392.jpg"
                        alt="Pink Store"
                        style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                        }}/>
                        <h1><span className="estiloh1-5">{' '}Pink Store. Fonte: https://br.pinterest.com/pin/278026976968037641/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <div className="caixa-de-texto">
                            <h1>Todos achavam que a moda ia ficar no passado, mas ela ressurgiu!</h1>
                        </div>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ O retorno do Emo e Scene?</h3>

                    <h1>
                        Por volta de 2020, a <span className="estiloh1-3">{' '}pandemia</span> trouxe novamente a necessidade de pertencimento, alegria e comunidade. Apegando-se à nostalgia,
                        vários estilos dos anos 2000 voltaram a ser populares. Fazendo com que as músicas da época também voltassem
                        a viralizar em redes socias de <span className="estiloh1-3">{' '}vídeos curtos</span> (como o Tiktok e Youtube Shorts). Agora os elementos emo e scene também
                        aparecem misturados com outros estilos, como Techwear, Indie sleaze e Mcbling.
                        Os jovens passaram a se conectar em redes socais mais dinâmicas (como X/Twitter) e as <span className="estiloh1-3">{' '}pautas politicas</span> também voltaram a ser assunto.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/88/04/fb/8804fbb9b60272e996cac53a8dad9fa8.jpg"
                        alt="jovens alternativos"
                        style={{
                            width: isMobile ? "30vh" : "60vh",
                            borderRadius: "2vh"  // cantos arredondados
                        }}/>
                        <h1><span className="estiloh1-5">{' '}Jovens alternativos. Fonte: https://br.pinterest.com/pin/184647653467701642/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/736x/b8/ea/59/b8ea593d1e47a233fce686a7af9bacbf.jpg"
                        alt="latas de monster"
                        style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                        }}/>
                        <h1><span className="estiloh1-5">{' '}Latas de mosnter. Fonte: https://br.pinterest.com/pin/184647653467701642/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ As bandas voltaram!</h3>

                    <h1>
                        Percebendo novamente uma demanda, muitas bandas emo, que estavam paradas ou deram disband,
                        <span className="estiloh1-3">{' '}voltaram a se apresentar em festivais</span> (como when we were young, Lollapalooza, Rock in Rio),
                        agora fazendo turnês em mais países e ampliando parcerias com o restante do mundo.
                        Lançamentos de álbuns em plataformas digitais ficaram comuns (Spotify e SoundCloud), enquanto a venda de discos de Vinil, fitas e revistas antigas viraram itens de colecionadores.
                        A facilidade para divulgar a própria arte trouxe também <span className="estiloh1-3">{' '}novos artistas independentes</span>,
                        que cresceram principalmente com a popularização das músicas por edits internet (vídeos editados com efeitos).
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://rollingstone.com.br/media/uploads/2025/01/show-fresno.png"
                        alt="show da fresno"
                        style={{
                            width: isMobile ? "30vh" : "80vh",
                            borderRadius: "2vh"  // cantos arredondados
                        }}/>
                        <h1><span className="estiloh1-5">{' '}Show da Fresno. Fonte: https://rollingstone.com.br/musica/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://capricho.abril.com.br/wp-content/uploads/2024/12/MONTAGEM-LIVRE-THUMB_MATERIAS_ORIGINAL-51.png?w=1000"
                        alt="Pink Store"
                        style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                        }}/>
                        <h1><span className="estiloh1-5">{' '}MC Lan e Di Ferro com BMTH. Fonte: https://capricho.abril.com.br/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.ytimg.com/vi/SFAOhF0Hfhs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAIclRcAff65Ja_BSGbycwRpj603g"
                        alt="Suicidal Idol"
                        style={{
                            width: isMobile ? "30vh" : "80vh",
                            borderRadius: "2vh"  // cantos arredondados
                        }}/>
                        <h1><span className="estiloh1-5">{' '}Suicidal Idol. Fonte: https://www.youtube.com/watch?v=SFAOhF0Hfhs</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Retalhação de novo?</h3>

                    <h1>
                        Agora vivendo em um cenário mais produtivista, uma parcela de pessoas rejeita a volta dos gostos e estilos,
                        alegando que emos e scenes possuem deficiências mentais (de forma pejorativa)
                        e usando imagens de de pessoas alt em vídeos de inteligencia artifical para humor, 
                        iniciando uma nova <span className="estiloh1-3">{' '}cultura cringe</span>. O termo “cringe”, em inglês,
                        significa algo como “sentir vergonha” diante de algo considerado brega, ultrapassado ou exagerado.
                        Termo constantemente usado para se referir a pessoas da subcultura.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1e2b88e6-7d83-4ae3-aa30-8cb98fb2fdfa/dj5nbz8-967125be-3dfe-4375-8302-96e349afc5e0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFlMmI4OGU2LTdkODMtNGFlMy1hYTMwLThjYjk4ZmIyZmRmYVwvZGo1bmJ6OC05NjcxMjViZS0zZGZlLTQzNzUtODMwMi05NmUzNDlhZmM1ZTAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.CylWoE7vcVnWohM0muUgaJOo1orauluRsZknVT4VS0A"
                        alt="Furrys"
                        style={{
                            width: isMobile ? "30vh" : "50vh",
                            borderRadius: "2vh"  // cantos arredondados
                        }}/>
                        <h1><span className="estiloh1-5">{' '}Furrys. Fonte: https://www.deviantart.com/0slimerat0/art/Cringe-culture-is-dead-to-me-1158344036</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://64.media.tumblr.com/87e17f4107e85427c6199ad101f400b3/f1b081df46c5c611-88/s1280x1920/4758d6e6b8c26e820972c53ff38230926d7e7012.png"
                        alt="Meme"
                        style={{
                            width: isMobile ? "30vh" : "40vh",
                            borderRadius: "2vh"  // cantos arredondados
                        }}/>
                        <h1><span className="estiloh1-5">{' '}Meme. Fonte: https://spider-gets-inspired.tumblr.com/post/630739810876817408/aquaspiderart-a-cringetober-challenge-i-made-to</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <div className="caixa-de-texto">
                            <h1>E agora? O que esperar?</h1>
                        </div>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Conclusão</h3>

                    <h1>
                        A comunidade emo e scene sempre demonstrou capacidade de <span className="estiloh1-3">{' '}adaptação e resistência</span> às críticas sociais.
                        Apesar das mudanças nas tendências musicais e de moda ao longo das décadas, essas subculturas mantiveram um papel
                        importante na expressão da <span className="estiloh1-3">{' '}individualidade e na criação de redes de pertencimento</span> para os jovens.
                        O ciclo de popularização, queda e ressurgimento mostra que, mais do que uma moda passageira,
                        o emo e o scene refletem sentimentos universais de identidade, rebeldia e necessidade de conexão.
                    </h1>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <CaixaImagem
                            imagemUrl="https://idealepapeis.com.br/wp-content/uploads/2021/07/PDL2101-600x600.jpg"
                            texto="Gostou do conteúdo? Confira as outras páginas do site para outras recomendações."
                            citacao=""
                        />

                        <LinhaEmBranco/>

                        <BotaoGrandeEstatico imagem={2} texto="Cultura pop" />

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Contexto;