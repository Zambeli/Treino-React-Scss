import Produto from "./Produto"

const Contatos = () => {
    
        const nome = [
            'Produtos',
            'Servicos',
            'Portfolio',
            'Sass',
            'Outros'
        ]
    
    return (
        <>
        <div className="container-contatos">
                    <div className="contatos-inicio">
                        <h2>Queremos conhecer você</h2>
                        <p>1/5</p>
                    </div>
                    <div className="div-produtos">
                        <p>Oi!. O que melhor te explica?</p>
                        <div className="produtos">
                        {nome.map((nome, index) => (
                        <Produto key={index} nome={nome} />
                    ))}
                        </div>
                    </div>
                    <div className="botao">
                        <button>Next</button>
                    </div>
                </div>
        </>
    )
}

export default Contatos