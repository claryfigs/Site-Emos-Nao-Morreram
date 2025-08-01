import "./botao-grande-estatico.css";
import Imagem0 from "../../assets/book.png"; /*imagem extra */
import Imagem1 from "../../assets/contexto-historico.png";
import Imagem2 from "../../assets/cultura-pop.png";
import Imagem3 from "../../assets/materiais.png";
import Imagem4 from "../../assets/comunidade.png";
import Imagem5 from "../../assets/sobre-o-site.png";
import Imagem6 from "../../assets/musica-emo.png"; /*musica emo */
import Imagem7 from "../../assets/musica-scene.png"; /*musica scene */
import Imagem8 from "../../assets/moda-emo.png"; /*moda emo */
import Imagem9 from "../../assets/moda-scene.png"; /*moda scene */
import Imagem10 from "../../assets/filmes.png"; /*filmes */
import Imagem11 from "../../assets/livros.png"; /*livros */
import Imagem12 from "../../assets/series.png"; /*series */
import Imagem13 from "../../assets/animes.png"; /*animes */
import Imagem14 from "../../assets/jogos.png"; /*jogos */
import Imagem15 from "../../assets/memes.png"; /*memes */
import Imagem16 from "../../assets/fotografia.png"; /*fotografia */
import Imagem17 from "../../assets/decoracao.png"; /*decoracao */
import Imagem18 from "../../assets/arte.png"; /*arte */
import Imagem19 from "../../assets/internet.png"; /*internet */
import Imagem20 from "../../assets/saude.png"; /*saude */

type BotaoGrandeEstaticoProps = {
    imagem: number; // ou string, se preferir usar nomes como "estrela", "lua" etc.
    texto: string;
};

function BotaoGrandeEstatico({ imagem, texto }: BotaoGrandeEstaticoProps) {
    const imagens = [Imagem0, Imagem1, Imagem2, Imagem3, Imagem4, Imagem5, Imagem6, Imagem7, Imagem8, Imagem9,
        Imagem10, Imagem11, Imagem12, Imagem13, Imagem14, Imagem15, Imagem16, Imagem17, Imagem18, Imagem19, Imagem20
    ];

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
