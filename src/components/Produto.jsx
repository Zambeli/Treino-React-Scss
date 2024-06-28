import PropTypes from 'prop-types';

const Produto = (props) => {
    return (
        <>
            <div className="produto">
                <img src="./pacotee.png" alt="pacote" />
                <p key={props.nome}>{props.nome}</p>
            </div>
        </>
    )
}

Produto.propTypes = {
    nome: PropTypes.string.isRequired,
};

export default Produto