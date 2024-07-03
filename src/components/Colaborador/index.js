import "./Colaborador.css"

const Colaborador = ({nome, imagem, cargo, corFundo}) => {
    return (
        <div className="colaborador" style={{backgroundColor: corFundo}}>
            <div className="cabecalho">
                <img src={imagem} alt={nome} />
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador