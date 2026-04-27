import { useState } from "react";
import "./App.css";

function ListaTarefas() {
    const [tarefas, setTarefas] = useState([]);
    const [input, setInput] = useState("");

    function adicionarTarefa() {
        if (input) {
            setTarefas([...tarefas, input]);
            setInput(""); //ATUALIZA O VALOR DO InPUT 
        }
    }
    function removerTarefa(indexremov) {
        setTarefas(tarefas.filter((txt, index) => index !== indexremov));
    }
    return (
        <div className="principal">

            <h1>Lista de Tarefas</h1>
            <div className="pBotao">
                <input className="imput" value={input} onChange={e => setInput(e.target.value)} placeholder="Nova tarefa..." />
                <button className="btm" onClick={adicionarTarefa}>Adicionar</button>
            </div>

            <ul className="lista1">
                {tarefas.map((tarefa, index) => (
                    <li  key={index}> <p>{tarefa}</p><button className="btm" onClick={() => removerTarefa(index)}>Deletar</button> </li>
                ))}
            </ul>
        </div>

    )


}
export default ListaTarefas