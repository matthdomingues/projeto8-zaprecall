import logo from "./assets/img/logo-pequeno.png"

export default function Topo() {
    return (
        <>
            <div class="topo">
                <div class="titulo">
                    <img src={logo} />
                    <h2>ZapRecall</h2>
                </div>
            </div>
        </>
    )
}