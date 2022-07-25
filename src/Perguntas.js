import React from "react";

import Flashcard from "./Flashcard"

export default function Perguntas({ respondido, setRespondido }) {

    function montarFlashcards() {
        if (questoes.length === 0) {
            deck.sort(() => Math.random() - 0.5);
            setQuestoes([...deck]);
            return <></>;
        } else {
            return questoes.map((questao, index) => {
                const { pergunta, resposta } = questao;
                return <Flashcard
                    key={pergunta + index}
                    pergunta={pergunta}
                    resposta={resposta}
                    index={index + 1}
                    respondido={respondido}
                    setRespondido={setRespondido} />
            })
        }
    }

    const [questoes, setQuestoes] = React.useState([]);
    const flashcards = montarFlashcards();

    return (
        <>
            {flashcards}
        </>
    )

}

let deck = [
    { pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript" },
    { pergunta: "O React é __", resposta: "uma biblioteca JavaScript para construção de interfaces" },
    { pergunta: "Componentes devem iniciar com __", resposta: "letra maiúscula" },
    { pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões" },
    { pergunta: "O ReactDOM nos ajuda __ ", resposta: "interagindo com a DOM para colocar componentes React na mesma" },
    { pergunta: "Usamos o npm para __ ", resposta: "gerenciar os pacotes necessários e suas dependências" },
    { pergunta: "Usamos props para __", resposta: "passar diferentes informações para componentes " },
    { pergunta: "Usamos estado (state) para __", resposta: "dizer ao React quais informações atualizadas devem renderizar na tela" }];