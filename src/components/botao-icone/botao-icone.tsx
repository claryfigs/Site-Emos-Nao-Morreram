import "./botao-icone.css";
import Imagem0 from "../../assets/mouse-white.png"; /*imagem extra */

type BotaoIconeProps = {
    imagem: number; // ou string, se preferir usar nomes como "estrela", "lua" etc.
    texto: string;
};

function BotaoIcone({ imagem, texto }: BotaoIconeProps) {
    const imagens = [Imagem0];

    // Evita erro caso o número passado seja inválido
    const imagemSelecionada = imagens[imagem] || imagens[0];

    return (
        <div className="botaoicone-component">
            <div
                className="botaoicone-component-image"
                style={{
                    backgroundImage: `url(${imagemSelecionada})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            ></div>

            <div className="botaoicone-component-textspace">
                <div className="botaoicone-component-texto">
                    {texto}
                </div>
            </div>
        </div>
    );
}

export default BotaoIcone;
