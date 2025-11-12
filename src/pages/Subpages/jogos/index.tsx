import "./style.css"
import Header from "../../../components/header/header";
import Sidebar from "../../../components/sidebar/sidebar";
import BackgroundImage from '../../../assets/background.png'
import LinhaEmBranco from "../../../components/linha-embranco/linha-embranco";
import { useNavigate } from "react-router-dom";
import BotaoIcone from "../../../components/botao-icone/botao-icone";
import CaixaImagem from "../../../components/caixa-imagem/caixa-imagem";
import BotaoGrande from "../../../components/botao-grande/botao-grande";
import BotaoGrandeEstatico from "../../../components/botao-grande-estatico/botao-grande-estatico";

function Jogos() {

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
                        <h2> Jogos</h2>
                    </div>
                    
                    {/* CONTEÚDO DA PÁGINA------------------------------------ */}
                    
                    <h1>
                        Na época onde os consoles estavam no auge e a internet estava se tornando acessível, os videoames 
                        se tornaram muito populares entre os jovens, levando ao lançamento de muitas obras que se popularizaram entre a comunidade.
                        Algumas pessoas preferem jogos de <span className="estiloh1-3">{' '}vestir e socializar</span>, que eram muito usados nos primórdios da internet,
                        enquanto outras preferem <span className="estiloh1-3">{' '}jogos de terror</span>.
                    </h1>

                    <LinhaEmBranco/>

                    {/* IMAGEM EXTERNA */}
                    <div className="texto-centralizado">
                        <img src="https://img.wattpad.com/dc7d44b2b71842ec46beb965b5bd5adfa5c3858b/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f337a6e39693233795936547531773d3d2d3938343038313932312e313732326661613836346433666630323532303531363835373337362e676966"
                            alt="gamer"
                            style={{
                            width: isMobile ? "30vh" : "90vh",
                            borderRadius: "2vh"  // cantos arredondados
                            }}/>
                        <h1><span className="estiloh1-5">{' '}gamer. Fonte: https://www.obrigadopelospeixes.com/2014/06/11/coisas-para-voce-fazer-na-copa/</span></h1>
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <h3>◉ História macabra ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                        <BotaoGrande
                            imageUrl="https://image.api.playstation.com/vulcan/ap/rnd/202106/1800/mvKVe7kngQjaejdlpvZde32Q.png"
                            texto="Sally Face (2016)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/M/MV5BYjYzNmE4YWEtNTUxMC00ZGExLWIyOTgtMTc4OTU1ZDkwNjcwXkEyXkFqcGc@._V1_.jpg"
                            texto="Lorelai (2019)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://cdn.cdkeys.com/media/catalog/product/f/r/fran_bow_pc.jpg"
                            texto="Fran Bow (2015)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://ih1.redbubble.net/image.1611340890.7007/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg"
                            texto="Danganronpa (2010)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://img.tapimg.net/market/images/FtyzQ60SM6XSfbHTFRB7M_34TA75.png"
                            texto="Asleep (2024)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://play-lh.googleusercontent.com/ew5vyJJOl3pGclUECgDOkmUc7PgQZWsv19zS9Le42l2aBNuzCHUKTrSrnt4AoGP2EA"
                            texto="Rule of The Rose (2006)"
                            />

                        <BotaoGrande
                            imageUrl="https://hb.imgix.net/0d2eb736d84d9d47394c08f494488f0540f758e4.jpg?auto=compress,format&fit=crop&h=353&w=616&s=5ea3715d8184c22d9dd3f273cea5417f"
                            texto="The Path (2009)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://upload.wikimedia.org/wikipedia/pt/d/d8/AliceMadnessReturns.jpg"
                            texto="Alice: Madness Returns (2011)"
                            />

                        <BotaoGrande
                            imageUrl="https://image.api.playstation.com/gs2-sec/acpkgo/prod/CUSA05955_00/1/i_5d1dabe62154263422fbe31e6dbd1ea23887d571f018de165e4a99e0fb99d9d5/i/icon0.png?w=440"
                            texto="Little Nightmares (2017)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/M/MV5BN2JkZDRjMDktNmM4Yi00MTE5LThlMDctMGY4NjQxNjg4MWNhXkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg"
                            texto="five nights at freddy's (2014)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://cdn-images.dzcdn.net/images/cover/b44f31f4b78dc4eee35e2d66b529faae/1900x1900-000000-80-0-0.jpg"
                            texto="Yandere Simulator (2014)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/M/MV5BOWMxMjY0MWEtMTNjNS00NGE3LThkODktZDdjYjJlZDc5MTkyXkEyXkFqcGc@._V1_.jpg"
                            texto="Still Life (2005)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://image.api.playstation.com/vulcan/ap/rnd/202210/2000/RmhLzOJRNs6prhPCZaQjnQ3x.png"
                            texto="Silent Hill 2 (2001)"
                            />
                        

                        
                        <BotaoGrande
                            imageUrl="https://assets-prd.ignimgs.com/2021/12/30/siren-ps2-button-1640852445385.jpg"
                            texto="Siren (2003)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/M/MV5BZTFkYWZlYjYtMTgwYi00ZWUyLThhYzUtYTkzNjVkOTZlMjdhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                            texto="Fatal Frame (2001)"
                            />

                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <h3>◉ RPG Maker e Visual Novel ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                        <BotaoGrande
                            imageUrl="https://img.itch.zone/aW1nLzc3OTE0MTUucG5n/original/26pAWV.png"
                            texto="Corpse Party (1996)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRubxybmKlslPCBK10pzfaCgRcW5unyp1AYig&s"
                            texto="Zeno (2021)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://images.rpgsite.net/articles/cover/da49c9a1/7961/cover/Witch_House_Big.png"
                            texto="The Witch House (2012)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://assets-prd.ignimgs.com/2020/12/04/mad-father-button-1607121502332.jpg?crop=1%3A1%2Csmart&width=183&height=183&format=jpg&auto=webp&quality=80"
                            texto="Mad Father (2012)"
                            />

                        <BotaoGrande
                            imageUrl="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1150690/ss_219463835487a7205f0af93fb02d2c84855c667b.1920x1080.jpg?t=1671584768"
                            texto="Omori (2020)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/M/MV5BYTMzNDAwMTctZDc1Yy00ZDIyLTljNjgtZDkxOWJlNmMzYzQxXkEyXkFqcGc@._V1_.jpg"
                            texto="Lily's Well (2022)"
                            />

                        <BotaoGrande
                            imageUrl="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1661580/capsule_616x353.jpg?t=1727620942"
                            texto="Sur (2021)"
                            />

                        <BotaoGrande
                            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4-bvpCrTXXYb5q2E57lMD6gy4H69YtUCViw&s"
                            texto="Shihori Escape (2014)"
                            />

                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <h3>◉ Combate sombrio ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/M/MV5BMWNmZmZhMjMtN2JkZS00YWI1LTlhZmYtNTVjNjljYmQxNGI3XkEyXkFqcGc@._V1_.jpg"
                            texto="Charlie Murder (2013)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://upload.wikimedia.org/wikipedia/pt/7/7d/Devil_May_Cry_-_North-american_cover.jpg"
                            texto="Devil May Cry (2001)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://upload.wikimedia.org/wikipedia/en/8/81/Bayonetta_box_artwork.png"
                            texto="Bayonetta (2009)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://cdna.artstation.com/p/assets/covers/images/052/633/410/large/winking-corporation-winking-corporation-1.jpg?1660286369"
                            texto="Identity V (2018)"
                            />

                        <BotaoGrande
                            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmd5eHJC6LGQPeiW2LepymYJWnW2vPoCU156UtUZsnarXGzwnmuL-iZkpKvy4Jb-zVDjg&usqp=CAU"
                            texto="dead by daylight (2016)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://upload.wikimedia.org/wikipedia/pt/5/5d/Batman_Arkham_Knight_Capa.jpg"
                            texto="Batman: Arkham Knight (2015)"
                            />

                    </div>

                    <LinhaEmBranco/>

                    
                    <div className="texto-centralizado">
                        <h3>◉ Personalização ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">
                        
                        <a href="https://www.newgrounds.com/portal/view/385828" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://i.ytimg.com/vi/qech6y399ao/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AG0A4AC4AOKAgwIABABGDEgVChyMA8=&rs=AOn4CLAPFSNmUNnrmi2WNxa3Q_-Ztcn4Rw"
                            texto="Pocket Emo (2007)"
                            />
                        </a>

                        <a href="https://www.rinmarugames.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://www.dolldivine.com/images/mega-anime-avatar-creator-app.jpg"
                            texto="Rinmaru Games (2008)"
                            />
                        </a>

                        <a href="https://picrew.me/ja/image_maker/1359170#google_vignette" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://cdn.picrew.me/app/image_maker/1359170/icon_6HB8SLbHSXXJNh73.png"
                            texto="Scene/Emo Kid Maker"
                            />
                        </a>

                        <a href="https://play.google.com/store/apps/details?id=com.Ghoulkiss.MonsterGirlMaker2&hl=pt_BR" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}} >
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/I/A1LM6QYqOVL.png"
                            texto="Monster Girl Maker (2018)"
                            />
                        </a>

                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <h3>◉ Vida virtual ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                        <BotaoGrande
                            imageUrl="https://techfrontier.com.au/wp-content/uploads/2025/05/Habbo-Hotel-Cover.jpg"
                            texto="Habbo Hotel (2001)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4w0IVI-eS_z1qDNJJYEAxCKhzIsd1e1EZEg&s"
                            texto="Imvu (2004)"
                            />

                        <BotaoGrande
                            imageUrl="https://play-lh.googleusercontent.com/Uq4ohyXSx32-IQ_swnPKSSlbLnHXyfl4tNVo4gbRHyWZ-itKP_OOS7fhB7JznU_D95Y"
                            texto="High Rise (2015)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/I/91JYlK3TztL._AC_UF1000,1000_QL80_.jpg"
                            texto="Stardoll (2006)"
                            />
                        
                        <BotaoGrande
                            imageUrl="https://pbs.twimg.com/profile_images/1367623474525720576/11iLl6_c_400x400.jpg"
                            texto="Minimundos (2008)"
                            />

                        <BotaoGrande
                            imageUrl="https://m.media-amazon.com/images/I/913J4BFSg-L._UF1000,1000_QL80_.jpg"
                            texto="Club Penguin (2005)"
                            />
                        
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <div className="caixa-de-texto">
                            <h1>Onde posso jogar esses?</h1>
                        </div>
                    </div>

                    <LinhaEmBranco/>


                    <h1>
                        Grande parte dos jogos são encontrados em <span className="estiloh1-3">{' '}plataformas de mídias digitais</span>, como <a href="https://store.steampowered.com/?l=portuguese" target="_blank" rel="noopener noreferrer">
                        <span className="estiloh1-1">Steam</span></a> e <a href="https://store.epicgames.com/pt-BR/" target="_blank" rel="noopener noreferrer">
                        <span className="estiloh1-1">Epic Games</span></a>.
                        Alguns dos jogos são disponibilizados nos próprios sites abertamente para acesso. Caso não consiga comprar, é muito comum que Youtubers gravem a experiência de jogo e postem no Youtube.

                    </h1>


                    <LinhaEmBranco/>

                    <div className="texto-centralizado">

                        <CaixaImagem imagemIndice={14} texto="Gostou do conteúdo? Confira as outras páginas do site."
                        citacao="" />
                        
                        <LinhaEmBranco/>
                        
                        <div className="texto-centralizado">
                            <div className="" onClick={() => irPara("/animes")}>
                                <BotaoIcone imagem={0} texto='Conferir animes e mangás'/>
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

export default Jogos;