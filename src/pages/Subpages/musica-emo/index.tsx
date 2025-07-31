import "./style.css"
import Header from "../../../components/header/header";
import Sidebar from "../../../components/sidebar/sidebar";
import BackgroundImage from '../../../assets/background.png'
import LinhaEmBranco from "../../../components/linha-embranco/linha-embranco";
import BotaoGrande from "../../../components/botao-grande/botao-grande";
import CaixaImagem from "../../../components/caixa-imagem/caixa-imagem";

function MusicaEmo() {

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
                    
                    <h1>
                        A música emo existe em vários gêneros musicais, incluindo pop punk, indie, entre outros.
                    </h1>

                    <div className="texto-centralizado">
                        <div className="caixa-de-texto">
                            <h1>Enquanto alguns batem cabeça com músicas agressivas 💥🏴‍☠️, outros preferem a melancolia do acústico. 𝄞🎹</h1>
                        </div>
                    </div>
                    
                    <LinhaEmBranco/>

                    <h1>Porém, para muitos, a música emo "raiz" se consolida nos gêneros <span className="estiloh1-3">{' '}Screamo</span> e <span className="estiloh1-3">{' '}Post-hardcore</span>, populares no exterior nos anos 2000.
                        Se caracterizam por solos de guitarra agitados, baterias fervorosas e vocais com gritos longos e roucos, misturados com outras tecnicas de sonoridade.
                    </h1>

                    <LinhaEmBranco/>

                    <h1>No Brasil, o cenário é um pouco diferente. Apesar de existirem sim bandas Screamo, as bandas mais populares dos anos 2000 são <span className="estiloh1-3">{' '}rocks acústicos</span> ou <span className="estiloh1-3">{' '}pop punk</span>.
                        Enquanto o acústico possui letras reflexivas e românticas, o pop punk nacional tem músicas alegres e divertidas.
                    </h1>

                    <LinhaEmBranco/>
                    
                    <div className="texto-centralizado">
                        <div className="caixa-de-texto">
                            <h1>Que tal passarmos para algumas recomendações? 🎧
                                Saiba mais sobre cada banda acessando sua respectiva página.
                            </h1>
                        </div>
                    </div>

                    <div className="texto-centralizado">
                        <CaixaImagem
                            imagemUrl="https://st.depositphotos.com/1258245/2970/i/950/depositphotos_29708113-stock-photo-usa-and-england-flag-together.jpg"
                            texto="Começando pelo cenário internacional"
                            citacao=""
                        />
                    </div>

                    <LinhaEmBranco/>

                    <div className="texto-centralizado">
                        <h3>◉ Bandas Pop-Punk ◉</h3>
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

                    </div>

                    <LinhaEmBranco/>


                    <div className="texto-centralizado">
                        <CaixaImagem
                            imagemUrl="https://static4.depositphotos.com/1006839/378/i/950/depositphotos_3789362-stock-photo-flag-of-brasil.jpg"
                            texto="Bandas e artistas nacionais"
                            citacao=""
                        />
                    
                        <LinhaEmBranco/>

                        <h3>◉ Bandas Pop-Punk ◉</h3>
                    </div>

                    <LinhaEmBranco/>

                    <div className="caixas-de-botoes">

                        <BotaoGrande
                        imageUrl="https://i1.sndcdn.com/artworks-S8jtz5cW5fLh-0-t500x500.jpg"
                        texto="My Chemical Romance"
                        />

                    </div>




                </div>

            </div>

        </div>
    );
}

export default MusicaEmo;