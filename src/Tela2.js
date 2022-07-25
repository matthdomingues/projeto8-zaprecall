import React from "react"
import Topo from "./Topo"
import Perguntas from "./Perguntas"
import Fundo from "./Fundo"

export default function TelaPergunta(props) {

    const [respondido, setRespondido] = React.useState([]);

    return (
        <div className={props.classe}>
            <Topo />
            <div className="meio">
                <div className="perguntas">
                    <Perguntas respondido={respondido} setRespondido={setRespondido} />
                </div>
            </div>
            <Fundo respondido={respondido} />
        </div>
    )
}









