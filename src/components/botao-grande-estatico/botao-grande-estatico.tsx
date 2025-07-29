import "./botao-grande-estatico.css";
import Imagem0 from "../../assets/book.png"; /*imagem extra */
import Imagem1 from "../../assets/book.png";
import Imagem2 from "../../assets/world.png";
import Imagem3 from "../../assets/pen.png";
import Imagem4 from "../../assets/people.png";
import Imagem5 from "../../assets/mouse.png";
import Imagem6 from "../../assets/musica-emo.png"; /*musica emo */
import Imagem7 from "../../assets/musica-scene.png"; /*musica scene */
import Imagem8 from "../../assets/moda-emo.png"; /*moda emo */
import Imagem9 from "../../assets/moda-scene.png"; /*moda scene */

type BotaoGrandeEstaticoProps = {
    imagem: number; // ou string, se preferir usar nomes como "estrela", "lua" etc.
    texto: string;
};

function BotaoGrandeEstatico({ imagem, texto }: BotaoGrandeEstaticoProps) {
    const imagens = [Imagem0, Imagem1, Imagem2, Imagem3, Imagem4, Imagem5, Imagem6, Imagem7, Imagem8, Imagem9];

    // Evita erro caso o número passado seja inválido
    const imagemSelecionada = imagens[imagem] || imagens[0];

    return (
        <div className="botaogrande-component">
            <div
                className="botaogrande-component-image"
                style={{
                    backgroundImage: `url(${imagemSelecionada})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            ></div>

            <div className="botaogrande-component-textspace">
                <div className="botaogrande-component-texto">
                    {texto}
                </div>
            </div>
        </div>
    );
}

export default BotaoGrandeEstatico;
