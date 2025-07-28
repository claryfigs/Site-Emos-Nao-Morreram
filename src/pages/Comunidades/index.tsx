import "./style.css"
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import PcIcon from '../../assets/pc-black.png'

function Comunidades() {
    return (
        <div className="container">

            <div className="background-image">
            </div>
            
            <Header/>

            <div className="box">
                <Sidebar/>

                {/* CAIXA BRANCA */}
                <div className="box-infos">

                    {/* Título com icone */}
                    <div className="title-space">
                        <img src={PcIcon} alt="computador" className="images-title" />
                        <h2> Comunidades</h2>
                    </div>
                    
                    {/* CONTEÚDO DA PÁGINA------------------------------------ */}
                    
                    <h1>
                        Comunidades
                    </h1>
                    
                </div>

            </div>

        </div>
    );
}

export default Comunidades;