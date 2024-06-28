
const Header = () => {

    return (
        <>
            <header>
                <div className="container-header">
                    <img src="./logobranca.svg" alt="logo" />
                    <div className="header-a">
                        <p>O que nós oferecemos</p>
                        <p>Como funciona</p>
                        <p>Portfolio</p>
                    </div>
                    {/* <button className="button1">
                        Contact us
                    </button> */}
                    <button className="button2">
                    Contate-nos
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header