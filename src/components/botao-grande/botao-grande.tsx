import "./botao-grande.css";

type BotaoGrandeProps = {
    imageUrl: string;
    texto: string;
};

function BotaoGrande({ imageUrl, texto }: BotaoGrandeProps) {
    return (
        <div className="botaogrande-component">
            <div
                className="botaogrande-component-image"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: "cover",
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

export default BotaoGrande;