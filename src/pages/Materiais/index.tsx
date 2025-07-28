import "./style.css"
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import PenIcon from '../../assets/pen-black.png'
import BackgroundImage from '../../assets/background.png'

function Materiais() {
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
                        <img src={PenIcon} alt="caneta" className="images-title" />
                        <h2> Materiais</h2>
                    </div>
                    
                    {/* CONTEÚDO DA PÁGINA------------------------------------ */}
                    
                    <h1>
                        materiais
                    </h1>
                    
                </div>

            </div>

        </div>
    );
}

export default Materiais;