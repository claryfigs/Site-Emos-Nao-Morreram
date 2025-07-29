import "./caixa-imagem.css";


interface CaixaImagemProps {
    imagemUrl: string;
    texto: string;
    citacao: string;
}

function CaixaImagem({ imagemUrl, texto, citacao }: CaixaImagemProps) {
    return (
        <div className="caixa-imagem">
            <div className="caixa-imagem-image-space">
                <div
                    className="caixa-imagem-image"
                        style={{
                        backgroundImage: `url(${imagemUrl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                ></div>
            </div>

            <div className="caixa-imagem-textspace">
                <h1>{texto}</h1>
                <h1><span className="estiloh1-4">{citacao}</span></h1>
            </div>
        </div>
    );
}

export default CaixaImagem;