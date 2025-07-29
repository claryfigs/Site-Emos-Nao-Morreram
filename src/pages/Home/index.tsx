import "./style.css"
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import HeartIcon from '../../assets/heart-black.png'
import BackgroundImage from '../../assets/background.png'
import Caixa from "../../components/caixa/caixa";

function Home() {
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
                    <div className="title-space-home">
                        <img src={HeartIcon} alt="coração" className="images-title" />
                        <h2>Emos Não Morreram</h2>
                        <img src={HeartIcon} alt="coração" className="images-title" />
                    </div>
                    
                    {/* CONTEÚDO DA PÁGINA------------------------------------ */}
                    
                    <div className="texto-centralizado">
                        <h1>
                            Já teve vontade de entrar no mundo emo e scene, mas não sabe por onde começar?
                        </h1>
                        <h1>
                            <span className="estiloh1-3">{' '}Então você encontrou o lugar certo!</span>
                        </h1>
                    </div>

                    <div className="texto-centralizado">
                        <div className="caixa-de-texto">
                            <h1>Nesse blog você encontrará conteúdos sobre moda, música, arte e muito mais sobre a subcultura.
                                <span className="estiloh1-3">{' '}Afinal, nunca foi só uma fase né?</span></h1>
                        </div>
                    </div>

                    <div className="caixas-de-botoes">
                        <Caixa
                            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP6dAmZvF5keJskLHMoTNuKK30HfA-iVV50Q&s"
                            texto="Contexto histórico"
                        />

                        <Caixa
                            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP6dAmZvF5keJskLHMoTNuKK30HfA-iVV50Q&s"
                            texto="Cultura pop"
                        />
                        
                        <Caixa
                            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP6dAmZvF5keJskLHMoTNuKK30HfA-iVV50Q&s"
                            texto="Materiais"
                        />

                        <Caixa
                            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP6dAmZvF5keJskLHMoTNuKK30HfA-iVV50Q&s"
                            texto="Comunidades"
                        />

                        <Caixa
                            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP6dAmZvF5keJskLHMoTNuKK30HfA-iVV50Q&s"
                            texto="Sobre o site site site site site site site site site site"
                        />

                    </div>

                    

                </div>

            </div>

        </div>
    );
}

export default Home;