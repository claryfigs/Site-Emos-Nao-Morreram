// CaixaImagemEstatica.tsx
import "./caixa-imagem.css";

import Imagem0 from "../../assets/book.png"; /*imagem default */
import Imagem1 from "../../assets/book.png";
import Imagem2 from "../../assets/world.png";
import Imagem3 from "../../assets/pen.png";
import Imagem4 from "../../assets/people.png";
import Imagem5 from "../../assets/mouse.png";
import Imagem6 from "../../assets/musica-emo.png";
import Imagem7 from "../../assets/musica-scene.png";
import Imagem8 from "../../assets/moda-emo.png";
import Imagem9 from "../../assets/moda-scene.png";
import Imagem10 from "../../assets/filmes.png";
import Imagem11 from "../../assets/livros.png";
import Imagem12 from "../../assets/series.png";
import Imagem13 from "../../assets/animes.png";
import Imagem14 from "../../assets/jogos.png";
import Imagem15 from "../../assets/memes.png";
import Imagem16 from "../../assets/fotografia.png";
import Imagem17 from "../../assets/decoracao.png";
import Imagem18 from "../../assets/arte.png";
import Imagem19 from "../../assets/internet.png";
import Imagem20 from "../../assets/saude.png";

const todasImagens = [
  Imagem0, Imagem1, Imagem2, Imagem3, Imagem4, Imagem5, Imagem6, Imagem7,
  Imagem8, Imagem9, Imagem10, Imagem11, Imagem12, Imagem13, Imagem14,
  Imagem15, Imagem16, Imagem17, Imagem18, Imagem19, Imagem20
];

interface CaixaImagemProps {
  /** Pode ser URL direto ou índice para selecionar da lista interna */
  imagemUrl?: string;
  imagemIndice?: number;
  texto: string;
  citacao: string;
}

export default function CaixaImagem({
  imagemUrl,
  imagemIndice,
  texto,
  citacao
}: CaixaImagemProps) {
  let imagemSelecionada: string;

  if (typeof imagemUrl === "string" && imagemUrl.trim() !== "") {
    imagemSelecionada = imagemUrl;
  } else if (
    typeof imagemIndice === "number" &&
    imagemIndice >= 0 &&
    imagemIndice < todasImagens.length
  ) {
    imagemSelecionada = todasImagens[imagemIndice];
  } else {
    imagemSelecionada = todasImagens[0]; // fallback seguro
  }

  return (
    <div className="caixa-imagem">
      <div className="caixa-imagem-image-space">
        <div
          className="caixa-imagem-image"
          style={{
            backgroundImage: `url(${imagemSelecionada})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        ></div>
      </div>

      <div className="caixa-imagem-textspace">
        <h1>{texto}</h1>
        <h1>
          <span className="estiloh1-4">{citacao}</span>
        </h1>
      </div>
    </div>
  );
}