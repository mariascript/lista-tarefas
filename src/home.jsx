import { Link } from "react-router-dom";
import "./App.css";

function Home() {

    return (

        <div className="principal">
            <h1>Introdução ao React</h1>
            <section>
                <h2>O que é JSX?</h2>
                <p>É uma sintaxe que permite escrever HTML dentro do JavaScript.
                    O que faz: Facilita a visualização da UI, permitindo usar lógica (variáveis, loops, condicionais) diretamente na estrutura usando chaves { }.
                    Processamento: O navegador não entende JSX nativamente; ele é convertido em funções JavaScript puras antes de rodar.</p>
            </section>

            <section>
                <h2>O que são Componentes?</h2>
                <p>São as peças de LEGO da sua interface.
                    Função: Pequenos blocos de código independentes e reutilizáveis.
                    Vantagem: Você cria um elemento (como um botão ou card) uma vez e o replica por toda a aplicação, mantendo o código limpo e organizado.</p>
            </section>

            <section>
                <h2>Diferença entre JSX e HTML</h2>
                <p><b>Embora parecidos, o JSX segue regras do JavaScript:</b><br />
                    <ul className="lista">
                        <li><b>Atributos:</b>Usamos className em vez de class e htmlFor em vez de for<br /></li>
                        <li><b>CamelCase: </b>Eventos são escritos como onClick ou onChange.<br /></li>
                        <li><b>Fechamento:</b> Todas as tags precisam ser fechadas.<br /></li>
                        <li><b>Raiz Única:</b> Um componente deve retornar sempre um único elemento pai (ou usar um Fragment <> </>).<br /></li>
                    </ul>
                </p>
            </section>

            <section>
                <h2>Usestate</h2>
                <p> O <b>useState</b> é um hook do React que permite criar e atualizar estados em componentes.
                    Ele guarda valores que podem mudar e, ao serem atualizados, a tela é renderizada novamente automaticamente.
                </p>
            </section>

            <section>
                <h2>Clique abaixo para acessar a Lista de Tarefas</h2>
            </section>

            <Link
                to="/listaTarefas"
                className="bt" >Lista de Tarefas</Link>
        </div>

    )


}
export default Home