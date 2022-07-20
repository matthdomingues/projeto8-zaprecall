import React from "react";

export default function Tela1() {

    /* const [classe, setClasse] = React.useState("tela1");

    function esconder() {
        setClasse("escondido")
    }
    onClick={esconder()}
    */

    return (
        <div class="tela1">
            <img src="/img/logo.png" />
            <h1>ZapRecall</h1>
            <button onClick={() => alert("funciona!")}>
                <h2>Iniciar Recall!</h2>
            </button>
        </div>
    )

}





