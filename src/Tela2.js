import React from "react"
import Topo from "./Topo"
import Perguntas from "./Perguntas"

export default function TelaPergunta(props) {

    return (
        <div class={props.classe}>
            <Topo />
            <div className="meio">
                <div className="perguntas">
                    <Perguntas />
                </div>
            </div>
            <Fundo />
        </div>
    )
}

function Fundo() {

    const [respondido, setRespondido] = React.useState([]);

    return (
        <div class="fundo">
            <h4>{respondido.length}/8 CONCLUÍDOS</h4>
        </div>
    )

}







