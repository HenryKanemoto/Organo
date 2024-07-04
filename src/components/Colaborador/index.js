import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import "./Colaborador.css"

const Colaborador = ({nome, imagem, cargo, id, corFundo, aoDeletar, favorito, aoFavoritar}) => {

    function favoritar() {
        aoFavoritar(id)
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }

    return (
        <div className="colaborador" style={{backgroundColor: corFundo}}>
            <AiFillCloseCircle size={32} className="deletar" onClick={() => aoDeletar(id)} />
            <div className="cabecalho">
                <img src={imagem} alt={nome} />
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <div className="favoritar">
                    {favorito 
                    ? <AiFillHeart {...propsFavorito} color="#ff0000"/>
                    : <AiOutlineHeart {...propsFavorito}/>}
                </div>
            </div>
        </div>
    )
}

export default Colaborador