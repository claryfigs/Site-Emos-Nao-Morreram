import "./style.css"
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import HeartIcon from '../../assets/heart-black.png'
import BackgroundImage from '../../assets/background.png'

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
                    <div className="title-space">
                        <img src={HeartIcon} alt="coração" className="images-title" />
                        <h2> Página inicial atualizando gh pages</h2>
                    </div>
                    
                    {/* CONTEÚDO DA PÁGINA------------------------------------ */}
                    
                    <h1>
                        Bem-vindo ao site
                    </h1>
                    
                </div>

            </div>

        </div>
    );
}

export default Home;