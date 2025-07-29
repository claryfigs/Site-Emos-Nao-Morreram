import "./caixa.css";

type CaixaProps = {
    imageUrl: string;
    texto: string;
};

function Caixa({ imageUrl, texto }: CaixaProps) {
    return (
        <div className="caixa-component">
            <div
                className="caixa-component-image"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            ></div>

            <div className="caixa-component-textspace">
                <div className="caixa-component-texto">
                    {texto}
                </div>
            </div>
        
        </div>
    );
}

export default Caixa;