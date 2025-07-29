import "./style.css"
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import BookIcon from '../../assets/book-black.png'
import BackgroundImage from '../../assets/background.png'
import LinhaEmBranco from "../../components/linha-embranco/linha-embranco";

function Contexto() {
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
                        De onde os emos vieram? O que pensam? O que comem?
                        Apesar de parecerem perguntas simples, são bem mais complexas do que parecem.
                        Podemos analisar suas inspirações, ideias e conceitos para montar uma linha do tempo lógica.
                    </h1>

                    <LinhaEmBranco/>

                    <h3>◉ Primeiramente, o que são emos e scenes?</h3>
                    <h1>
                        Ainda vou pensar
                    </h1>


                    <LinhaEmBranco/>

                    <h3>◉ Em que ano tudo começou?</h3>
                    <h1>
                        Não é Fácil definir um ano exato para o começo da moda Emo e Scene.
                    </h1>


                </div>

            </div>

        </div>
    );
}

export default Contexto;