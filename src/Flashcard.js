import React, { useState } from "react";

import setinha from "./assets/img/setinha.png"
import setadireita from "./assets/img/seta-direita.png"
import acerto from "./assets/img/acerto.png"
import duvida from "./assets/img/duvida.png"
import erro from "./assets/img/erro.png"

export default function Flashcard(props) {

    const { pergunta, resposta, index, respondido, setRespondido } = props;
    const [fase, setFase] = useState(1);

    const botoes = [
        { cor: "botao vermelho", texto: "Não lembrei" },
        { cor: "botao amarelo", texto: "Quase não lembrei" },
        { cor: "botao verde", texto: "Zap!" }]


    if (fase === 1) {
        return (
            <div className="pergunta">
                <h3>Pergunta {index}</h3>
                <img onClick={() => setFase(2)} src={setadireita} />
            </div>
        )
    }
    if (fase === 2) {
        return (
            <div className="card">
                <div className="card-frente">
                    <h1>{pergunta}</h1>
                    <img onClick={() => setFase(3)} src={setinha} ></img>
                </div>
            </div>
        )
    }
    if (fase === 3) {
        return (
            <div className="card">
                <div className="card-verso">
                    <h1>{resposta}</h1>
                    <div className="botoes">
                        <div onClick={() => {
                            setFase(4);
                            setRespondido([...respondido, 4])
                        }} className="botao vermelho"><h2>"Não lembrei"</h2></div>
                        <div onClick={() => {
                            setFase(5);
                            setRespondido([...respondido, 5])
                        }} className="botao amarelo"><h2>"Quase não lembrei"</h2></div>
                        <div onClick={() => {
                            setFase(6);
                            setRespondido([...respondido, 6])
                        }} className="botao verde"><h2>"Zap!"</h2></div>
                    </div>
                </div>

            </div >
        )
    }

    if (fase === 4) {
        return (
            <div className="pergunta-respondida-vermelho">
                <h4>Pergunta {index}</h4>
                <img src={erro} />
            </div>
        )
    }

    if (fase === 5) {
        return (
            <div className="pergunta-respondida-amarelo">
                <h4>Pergunta {index}</h4>
                <img src={duvida} />
            </div>
        )
    }
    if (fase === 6) {
        return (
            <div className="pergunta-respondida-verde">
                <h4>Pergunta {index}</h4>
                <img src={acerto} />
            </div>
        )
    }
}

