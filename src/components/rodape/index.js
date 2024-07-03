import "./Rodape.css";

const Rodape = () => {
    return (
        <footer className="rodape">
            <div className="rodape__links">
                <a href="#">
                    <img src="/image/fb.png" alt="Nosso Facebook"/>
                </a> 
                <a href="#">
                    <img src="/image/tw.png" alt="Nosso Twitter"/>
                </a> 
                <a href="#"> 
                    <img src="/image/ig.png" alt="Nosso Instagram"/>
                </a> 
            </div>
            <div className="rodape__logo">
                <img src="/image/logo.png"/>
            </div>
            <div className="rodape__descricao">
                <p>Desenvolvido por Alura e Henry</p>
            </div>
        </footer>
    )
}

export default Rodape 