import "./header.css";
import Menu from "../menu/menu";
import GifEstrelas from "../../assets/stars.gif";

function Header() {
    return (
        <div className="header">

            <div className="header-infos">
                <div className="gifandtitle">
                    <img src={GifEstrelas} alt="Gif decorativo" className="gif" />
                    <p className="title">Emos Não Morreram</p>
                    <img src={GifEstrelas} alt="Gif decorativo" className="gif" />
                </div>
                <p className="subtitle">Um blog para Emos e Scenes</p>
            </div>
            <Menu/>
        </div>

    );
}

export default Header;