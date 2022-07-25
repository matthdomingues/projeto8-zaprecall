import { useState } from "react"
import acerto from "./assets/img/acerto.png"
import duvida from "./assets/img/duvida.png"
import erro from "./assets/img/erro.png"
import party from "./assets/img/party.png"
import sad from "./assets/img/sad.png"

export default function Fundo(props) {

    const { respondido } = props;



    if (respondido.length === 8) {
        return (
            <div className="fundo ampliado">
                <div className="finalizado">
                    <Resultado respondido={respondido} />
                </div>
                <h4>{respondido.length}/8 CONCLUÍDOS</h4>
                <div className="icones">
                    {respondido.map((numeroResposta) => {
                        let icone;
                        if (numeroResposta === 4) {
                            icone = erro
                        }
                        if (numeroResposta === 5) {
                            icone = duvida
                        }
                        if (numeroResposta === 6) {
                            icone = acerto
                        }
                        return (<img src={icone} />);
                    })}
                </div>
            </div>
        )
    }

    // se respondido === 8, fundo vira fundo ampliado, englobando Resultado
    return (
        <div className="fundo">
            <div className="finalizado">
                <Resultado respondido={respondido} />
            </div>
            <h4>{respondido.length}/8 CONCLUÍDOS</h4>
            <div className="icones">
                {respondido.map((numeroResposta) => {
                    let icone;
                    if (numeroResposta === 4) {
                        icone = erro
                    }
                    if (numeroResposta === 5) {
                        icone = duvida
                    }
                    if (numeroResposta === 6) {
                        icone = acerto
                    }
                    return (<img src={icone} />);
                })}
            </div>
        </div>
    )
}

function Resultado(props) {

    const { respondido } = props;

    let temErro = false;

    for (let i = 0; i < respondido.length; i++) {
        if (respondido[i] === 4) {
            temErro = true;
        }
    }

    if (respondido.length === 8 && temErro === true) {
        return (
            <>
                <div className="aviso">
                    <img src={sad} /> <h1>Putz...!</h1>
                </div>
                <h2>Ainda faltam alguns...
                    Mas não desanime!</h2>
            </>
        )
    }

    if (respondido.length === 8 && temErro === false) {
        return (
            <>
                <div className="aviso">
                    <img src={party} /> <h1>Parabéns</h1>
                </div>
                <h2>Você não esqueceu de
                    nenhum flashcard!</h2>
            </>
        )
    }

    return (<></>)
}