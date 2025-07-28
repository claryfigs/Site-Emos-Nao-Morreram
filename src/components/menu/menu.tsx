import "./menu.css";
import House from "../../assets/house.png";
import Book from "../../assets/book.png";
import World from "../../assets/world.png";
import Pen from "../../assets/pen.png";
import People from "../../assets/people.png";
import Mouse from "../../assets/mouse.png";
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