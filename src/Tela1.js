import logo from "./assets/img/logo.png"


export default function TelaInicial(props) {

    return (
        <div className={props.classe}>
            <img src={logo} />
            <h1>ZapRecall</h1>
            <button onClick={props.funcao} >
                <h2>Iniciar Recall!</h2>
            </button>
        </div>
    )

}