import { useState } from "react"
import Botao from "../Botao"
import Campo from "../Campo"
import ListaSuspensa from "../ListaSuspensa"
import "./Formulario.css"

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('');
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('');

    const salvarAoClicar = (e) => {
        e.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo ,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
    }
    return (
        <section className="formulario">
            <form onSubmit={salvarAoClicar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <Campo
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                    obrigatorio={true}
                    label="Nome"
                    type="text"
                    placeholder="Digite seu nome" 
                />
                <Campo
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                    obrigatorio={true}
                    label="Cargo"
                    type="text"
                    placeholder="Digite seu cargo" 
                />
                <Campo
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                    label="Imagem"
                    type="text"
                    placeholder="Digite o endereço da imagem"
                />
                <ListaSuspensa
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                    obrigatorio={true}
                    label="Time"
                    itens={props.times} 
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
            <form onSubmit={(e) => {
                e.preventDefault();
                props.cadastrarTime({nome: nomeTime, cor: corTime})
            }}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <Campo
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                    obrigatorio
                    label="Nome"
                    type="text"
                    placeholder="Digite o nome do time" 
                />
                <Campo
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                    obrigatorio
                    label="Cor"
                    type="color"
                    placeholder="Digite a cor do time" 
                />
                <Botao>
                    Criar Time
                </Botao>
            </form>
        </section>
    )
}

export default Formulario