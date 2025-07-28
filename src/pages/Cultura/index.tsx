import "./style.css"
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import StarIcon from '../../assets/star-black.png'

function Cultura() {
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
                        <img src={StarIcon} alt="estrela" className="images-title" />
                        <h2> Cultura pop</h2>
                    </div>
                    
                    {/* CONTEÚDO DA PÁGINA------------------------------------ */}
                    
                    <h1>
                        cultura pop aqui
                    </h1>
                    
                </div>

            </div>

        </div>
    );
}

export default Cultura;