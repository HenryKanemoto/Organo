import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Times from './components/Times';
import Rodape from './components/rodape';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'Ux e Desing',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29'
    }
  ])

  const inicial = [{
    id: uuidv4(),
    nome: 'Henry',
    cargo: 'Aluno',
    imagem: '',
    time: times[5].nome,
    favorito: false
  }]

  const [colaboradores, setColaboradores] = useState(inicial);
  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador(id) {
      setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function mudarCorTime(cor, id) {
    setTimes(times.map(time => {
      if(time.id === id){
        time.cor = cor
      }
      return time
    }))
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, {...novoTime, id:uuidv4()} ])
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito
      return colaborador
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario cadastrarTime={cadastrarTime} times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {times.map(time =>
        <Times
          mudarCor={mudarCorTime}
          key={time.nome}
          time={time}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
          aoFavoritar={resolverFavorito}
        />
      )}
      <Rodape />
    </div>

  );
}

export default App;
