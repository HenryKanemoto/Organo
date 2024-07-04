import Colaborador from "../Colaborador";
import "./Times.css";
import hexToRgba from 'hex-to-rgba';

const Times = ({time, colaboradores, aoDeletar, mudarCor, aoFavoritar}) => {
    return (
        colaboradores.length > 0  ?
         <section className="time" style={{backgroundColor: hexToRgba(time.cor, '0.6')}}>
            <input
                type="color" 
                className="input-cor" 
                value={time.cor} onChange={e => mudarCor(e.target.value, time.id)}
            />
            <h3 style={{borderColor: time.cor}}> 
                {time.nome}
            </h3>
            <div className="colaboradores">
                {colaboradores.map((colaborador, indice) => {
                    console.log(<Colaborador
                        key={indice} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} corFundo={time.cor}
                        aoDeletar={aoDeletar} /> );
                   return (
                   <Colaborador
                   key={indice} 
                   nome={colaborador.nome} 
                   cargo={colaborador.cargo} 
                   imagem={colaborador.imagem} 
                   corFundo={time.cor}
                   aoDeletar={aoDeletar} 
                   id={colaborador.id} 
                   favorito={colaborador.favorito}
                   aoFavoritar={aoFavoritar}
                   /> )
                })}
            </div>
        </section>
        : ''

    )
}

export default Times