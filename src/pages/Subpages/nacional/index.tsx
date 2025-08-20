import "./style.css"
import Header from "../../../components/header/header";
import Sidebar from "../../../components/sidebar/sidebar";
import BackgroundImage from '../../../assets/background.png'
import LinhaEmBranco from "../../../components/linha-embranco/linha-embranco";
import BotaoGrandeEstatico from "../../../components/botao-grande-estatico/botao-grande-estatico";
import { useNavigate } from "react-router-dom";
import BotaoIcone from "../../../components/botao-icone/botao-icone";
import CaixaImagem from "../../../components/caixa-imagem/caixa-imagem";

function Nacional() {

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
                        <h2>Nacional</h2>
                    </div>
                    
                    {/* CONTEÚDO DA PÁGINA------------------------------------ */}
                    
                    <h1>
                        Nós brasileiros temos o nosso próprio jeitinho de fazer as coisas né? Essa página é dedicada a comunidade emo <span className="estiloh1-3">{' '}brasileira</span>.
                        Aqui você vai ler um pouco sobre nossos costumes, referências e identidades locais próprias.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://portalpopline.com.br/wp-content/uploads/2025/06/polifonia-emo-vive-fresno-anberlin.jpg"
                            alt="Fresno"
                            style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Fresno. Fonte: https://portalpopline.com.br/festival-polifonia-com-fresno-e-anberlin-reafirma-que-o-emo-vive-e-muito/</span></h1>
                    </div>

                    <LinhaEmBranco/>
                    
                    <h3>◉ Influência de outros gêneros</h3>

                    <h1>Mesmo com tantas influências internacionais, o emo brasileiro também incorporou elementos do <span className="estiloh1-3">{' '}rock nacional e da MPB</span>, seja nas melodias,
                        nas harmonias ou nas letras poéticas, formando uma identidade única e reconhecível no cenário musical do país.
                        Gêneros como <span className="estiloh1-3">{' '}sertanejo, rap, trap, e música eletrônica</span> passaram a dialogar com o emo brasileiro.
                        Essa fusão permitiu que bandas e artistas incorporassem batidas diferentes, melodias mais contemporâneas e letras que dialogam com novas realidades.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.makeagif.com/media/12-08-2018/2yX965.gif"
                            alt="charlie brown jr"
                            style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}charlie brown jr. Fonte: https://makeagif.com/gif/charlie-brown-jr-pontes-indestrutiveis-musica-popular-caicara-2yX965</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <div className="" onClick={() => irPara("/musica-emo")}>
                            <BotaoIcone imagem={0} texto='Conferir música emo'/>
                        </div>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Televisão e mídias</h3>

                    <h1>As <span className="estiloh1-3">{' '}novelas juvenis</span>, especialmente no estilo Malhação e Rebelde, tiveram uma influência enorme na música, moda e comportamento dos adolescentes no Brasil.
                        Elas funcionavam como uma vitrine cultural, promovendo tendências de maneira direta para o público jovem.
                        As <span className="estiloh1-3">{' '}revistas nacionais</span> teen tiveram funcionavam como um guia de estilo,
                        complementando o que os adolescentes viam na TV.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://i.pinimg.com/564x/00/53/11/0053111ae849e4d7c05b43cc2ac99e68.jpg"
                            alt="capricho"
                            style={{
                            width: isMobile ? "30vh" : "60vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}capricho. Fonte: https://br.pinterest.com/pin/211880357458073047/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://cdn.fatimanews.com.br/img/c/618/269/dn_novela_capitulo/2015/07/malhacao1.jpg"
                            alt="Malhação"
                            style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Malhação. Fonte: https://www.fatimanews.com.br/novelas/malhacao-terca-07-julho-2015/1391/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Locais de encontro</h3>

                    <h1>A comunidade emo e scene geralmente possui muitos adolescentes, então os locais de encontro costumam ser simples e baratos,
                        como <span className="estiloh1-3">{' '}praças da cidade</span>, shoppings, estabelecimentos temáticos, festas temáticas ou casas de amigos.
                        Em alguns momentos especiais, podem aparecer em eventos de anime ou lançamentos de filmes com temáticas semelhantes.
                    </h1>
                    
                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://www.rockcaramujo.com.br/assets/images/37117811-2029585897065633-8011703136349585408-n-678x454.jpg"
                            alt="Show"
                            style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Show. Fonte: https://www.rockcaramujo.com.br/page11.html</span></h1>
                    </div>
                    
                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://scontent.ffor41-1.fna.fbcdn.net/v/t39.30808-6/471787541_2133552840427760_5741975587277611432_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=axPBg_25QrsQ7kNvwEcyv1K&_nc_oc=Adm6XUouNnNKAsNTaK7K_yECyRSBWbGiiOHx9bjKGdL0BtJYJ_gY72cul6wj89AnWtQ&_nc_zt=23&_nc_ht=scontent.ffor41-1.fna&_nc_gid=MdA7lh-Kb5tZASU2qhkzUQ&oh=00_AfWzLMFjG40J7qfCpbH5la3u12bNvevVSL1lBV92LvbPcw&oe=68AAE10E"
                            alt="Praça"
                            style={{
                            width: isMobile ? "30vh" : "60vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Praça. Fonte: https://www.facebook.com/share/p/1AvaVEoz7n/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://calaboucodannerdice.wordpress.com/wp-content/uploads/2013/07/wp_20130714_005.jpg"
                            alt="Sana"
                            style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Sana 2013. Fonte: https://calaboucodannerdice.wordpress.com/2013/07/17/sana-2013-vim-trazer-um-pouco/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Vídeos-Documentários nacionais</h3>

                    <h1>Algumas pessoas contam seus relatos sobre a época e a produção musical no cenário nacional.
                    </h1>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">

                        <CaixaImagem imagemUrl="https://i.ytimg.com/vi/A76mSlasoyE/sddefault.jpg"
                            texto="Do Underground ao Emo" citacao="Bis Docs" />

                        <a href="https://www.youtube.com/watch?v=4SDrxQFfK0k" target="_blank" rel="noopener noreferrer">
                            <BotaoIcone imagem={0} texto='Assistir' />
                        </a>

                        <LinhaEmBranco/>

                        <CaixaImagem imagemUrl="https://i.ytimg.com/vi/raB0n4Tj_As/maxresdefault.jpg"
                            texto="NEM TUDO QUE ACABA TEM FINAL | O relato do emocore no Brasil" citacao="Igor Néder Lopes" />

                        <a href="https://www.youtube.com/watch?v=raB0n4Tj_As" target="_blank" rel="noopener noreferrer">
                            <BotaoIcone imagem={0} texto='Assistir' />
                        </a>
                        
                        <LinhaEmBranco/>
                        
                        <CaixaImagem imagemUrl="https://yt3.googleusercontent.com/u6H_TO65Atxmpc98XR-HcMFZ16o1UVppXqO7gj4hMUfz6H6YHjXZh4rLGTkyMHXNmeOfRFa0=s900-c-k-c0x00ffffff-no-rj"
                            texto="Eu não sou emo" citacao="Pseudo Produções" />

                        <a href="https://www.youtube.com/watch?v=j_c19BGZopc" target="_blank" rel="noopener noreferrer">
                            <BotaoIcone imagem={0} texto='Assistir' />
                        </a>

                    </div>

                    <LinhaEmBranco/>
                    
                    <h3>◉ Festivais</h3>

                    <h1>Os maiores festivais de rock no Brasil são conhecidos por reunir milhares de pessoas para contemplar grandes bandas nacionais e internacionais.
                        A maior parte dos festivais acontece em <span className="estiloh1-3">{' '}São Paulo e Rio de Janeiro</span>. No restante do Brasil geralmente os artistas fazem apresentações solo com bandas menores de abertura.
                    </h1>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">

                        <div className="caixa-de-texto">
                            <h1>Alguns dos festivais mais famosos:</h1>
                        <h1>
                            ➜ Rock in Rio (RJ)
                        </h1>
                        <h1>
                            ➜ Lollapalooza Brasil (SP)
                        </h1>
                        <h1>
                            ➜ Festival João Rock (SP)
                        </h1>
                        <h1>
                            ➜ Hollywood Rock (SP) (RJ)
                        </h1>

                        </div>

                    </div>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://blog.documentodoestudante.com.br/blog/wp-content/uploads/2024/08/rock-in-rio-divulgacao.webp"
                            alt="Rock in rio"
                            style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Rock in Rio. Fonte: https://blog.documentodoestudante.com.br/blog/2024/08/21/rock-in-rio-2024-como-chegar-ao-festival/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://dhiancarlomiranda.wordpress.com/wp-content/uploads/2014/04/lollapalooza-2014-patrocinadores.jpeg"
                            alt="lolla"
                            style={{
                            width: isMobile ? "30vh" : "70vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}Lolla 2014. Fonte: https://dhiancarlomiranda.wordpress.com/2014/04/08/impressoes-sobre-o-lollapalooza-brasil-2014/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Redes socais</h3>

                    <h1>No Brasil, algumas redes socias se popularizaram mais do que outras.
                        Uma das primeiras foi o Fotolog, que funcionava como um blog pessoal com espaços de comentários,
                        depois o <span className="estiloh1-3">{' '}Orkut</span>, onde as pessoas criavam comunidades com tópicos para discussões.
                        Essas duas redes sociais surgiram quando poucas pessoas no brasil tinham acesso a internet.
                    </h1>

                    <LinhaEmBranco/>
                    
                    <h1>
                        Com o fim do Orkut e a popularização das Lan Houses, o <span className="estiloh1-3">{' '}Facebook</span> cresceu e por muitos anos permaneceu sendo a rede social mais popular do Brasil, chamando atenção pelas páginas, grupos e jogos.
                        Na mesma época, algumas pessoas usavam o <span className="estiloh1-3">{' '}YouTube</span> como espaço para falar sobre diferentes assuntos, mas com a chegada da monetização os conteúdos foram mudando.
                        Depois vieram redes sociais mais dinâmicas, como <span className="estiloh1-3">{' '}Snapchat, Twitter e Instagram</span>. Mais recentemente chegaram as redes de vídeos curtos, como o <span className="estiloh1-3">{' '}Tiktok</span> e Kwai.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2011/04/lanhouse-camara.jpg"
                            alt="LanHouse"
                            style={{
                            width: isMobile ? "30vh" : "60vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}LanHouse. Fonte: https://gizmodo.uol.com.br/projeto-de-lei-exige-cadastro-dos-usuarios-de-lan-house/</span></h1>
                    </div>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://images2.memedroid.com/images/UPLOADED47/52309c1a7ae64.jpeg"
                            alt="derp"
                            style={{
                            width: isMobile ? "30vh" : "60vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}derp. Fonte: https://www.facebook.com/EuMenti/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <h3>◉ Comunidades abertas</h3>

                    <h1>Caso esteja com vontade de conversar com alguém com os mesmos interesses, você provavelmente vai encontrar nas comunidades abertas.
                        Lembre-se que existem muitos tipos de pessoas na internet e <span className="estiloh1-3">{' '}nem todas são confiáveis</span>.
                    </h1>

                    <LinhaEmBranco/>
                    
                    <div className="texto-centralizado">

                        <CaixaImagem imagemUrl="https://cm1.aminoapps.com/8136/797db5133db00b6d61cd795f528f51357833b012_120.jpg"
                            texto="Comunidade Góticos e Emos BR" citacao="Amino" />

                        <a href="https://aminoapps.com/c/goticos-e-emos-br/home/" target="_blank" rel="noopener noreferrer">
                            <BotaoIcone imagem={0} texto='Acessar comunidade' />
                        </a>
                        <LinhaEmBranco/>

                    <CaixaImagem imagemUrl="https://scontent.ffor41-1.fna.fbcdn.net/v/t39.30808-6/471494296_9283152245084410_6444843728365310308_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=2285d6&_nc_ohc=YjPgPxVNRjoQ7kNvwEvdk0k&_nc_oc=AdmyKpQlByhNGjWvDcdcKtYkdWfJCB5xMZoEhKnCuyQOulIF8epSNniOn7w52beu_Y8&_nc_zt=23&_nc_ht=scontent.ffor41-1.fna&_nc_gid=xMnSYg38IPMypGvJkCqaYQ&oh=00_AfW--jTM7O1oPL0aH9AU6FDI0PM33wfZc7XVog7LlHmo8A&oe=68AAD712"
                            texto="Grupo Emos Sem Contexto" citacao="Facebook" />

                        <a href="https://www.facebook.com/groups/emosemcontexto/" target="_blank" rel="noopener noreferrer">
                            <BotaoIcone imagem={0} texto='Acessar grupo' />
                        </a>

                        <LinhaEmBranco/>

                        <CaixaImagem imagemUrl="https://dbl-discord.usercontent.prism.gg/icons/612117634909208576/dfbde65a9279392e54aba469920b017c.png?size=256"
                            texto="Servidor do Kamaitachi" citacao="Discord" />

                        <a href="https://discord.com/invite/kamaitachi" target="_blank" rel="noopener noreferrer">
                            <BotaoIcone imagem={0} texto='Acessar servidor' />
                        </a>

                        <LinhaEmBranco/>

                        <CaixaImagem imagemUrl="https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN"
                            texto="Grupos de Whatszapp" citacao="Alerta: nem sempre os grupos são criados por pessoas bem intencionadas" />

                        <a href="https://gruposwhats.app/search?q=emos+scenes" target="_blank" rel="noopener noreferrer">
                            <BotaoIcone imagem={0} texto='Ver grupos' />
                        </a>
                        
                    </div>

                    <LinhaEmBranco/>

                    {/*--------rodapé */}

                    <div className="texto-centralizado">

                        <CaixaImagem imagemIndice={4} texto="Gostou do conteúdo? Confira as outras páginas do site."
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

export default Nacional;