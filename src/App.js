import React from "react";
import "./assets/css/tela1.css";
import "./assets/css/tela2.css";
import "./assets/css/reset.css";

import TelaInicial from "./Tela1";
import TelaPergunta from "./Tela2";

export default function App() {

    const [tela1, setTela1] = React.useState("tela1 amostra");
    const [tela2, setTela2] = React.useState("escondido");

    function revelar() {
        setTela1("escondido")
        setTela2("tela2 amostra")
    }

    return (
        <>
            <TelaInicial classe={tela1}
                funcao={revelar} />
            <TelaPergunta classe={tela2} />
        </>
    );

}

/*

    

*/