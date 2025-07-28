import "./menu.css";
import House from "../../../public/house.png";
import Book from "../../../public/book.png";
import World from "../../../public/world.png";
import Pen from "../../../public/pen.png";
import People from "../../../public/people.png";
import Mouse from "../../../public/mouse.png";
import { useNavigate } from "react-router-dom";

function Menu() {

    const navigate = useNavigate();

    const irPara = (caminho: string) => {
        navigate(caminho);
    };

    return (

        <div className="menu">
            
            <div className="menu-item" onClick={() => irPara("/home")}>
                <img src={House} alt="casa" className="menu-imagens" />
                <p className="menu-text">Início</p>
            </div>
            

            <div className="menu-item" onClick={() => irPara("/contexto")}>
                <img src={Book} alt="casa" className="menu-imagens" />
                <p className="menu-text">Contexto histórico</p>
            </div>
            
            <div className="menu-item" onClick={() => irPara("/cultura")}>
                <img src={World} alt="casa" className="menu-imagens"/>
                <p className="menu-text">Cultura pop</p>
            </div>
            
            <div className="menu-item" onClick={() => irPara("/materiais")}>
                <img src={Pen} alt="casa" className="menu-imagens" />
                <p className="menu-text">Materiais</p>
            </div>
            
            <div className="menu-item"  onClick={() => irPara("/comunidades")}>
                <img src={People} alt="casa" className="menu-imagens" />
                <p className="menu-text">Comunidades</p>
            </div>
            
            <div className="menu-item" onClick={() => irPara("/sobre")}>
                <img src={Mouse} alt="casa" className="menu-imagens" />
                <p className="menu-text">Sobre o site</p>
            </div>
        
        </div>

    );
}

export default Menu;