import stilo from './Cadastro.css';

function Cadastro() {
    return (
        <div>
            <section className={stilo.geral}>
                <h1>Cadastrar</h1>

                <fieldset>
                    <form action="#">
                        <label for="nome">Nome</label>
                        <input type="text" required />

                        <label for="Email">Email</label>
                        <input type="email" required />

                        <label for="Email">Confirme o Email</label>
                        <input type="email" required />

                        <label for="Senha">Senha</label>
                        <input type="password" required />

                        <input className={stilo.enviar} type="submit" name="submit" id="submit" />

                    </form>
                </fieldset>
            </section>
        </div>
    );
}
export default Cadastro;