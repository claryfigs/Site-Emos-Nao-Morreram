import "./style.css"
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import BookIcon from '../../assets/book-black.png'

function Contexto() {
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
                        <img src={BookIcon} alt="livro" className="images-title" />
                        <h2> Contexto histórico</h2>
                    </div>
                    
                    {/* CONTEÚDO DA PÁGINA------------------------------------ */}
                    
                    <h1>
                        contexto
                    </h1>
                    
                </div>

            </div>

        </div>
    );
}

export default Contexto;