import "./AlternarTabela.css";
import { MdOutlineAddToPhotos } from "react-icons/md";

const AlternarTabela = (props) => {
    return (
        <div className="alternar">
            <h2>Minha Organização:</h2>
            <MdOutlineAddToPhotos className="alternar__icon"  size={25} color="#fff" onClick={props.tabelaAtiva}/>
        </div>
    )
}

export default AlternarTabela;