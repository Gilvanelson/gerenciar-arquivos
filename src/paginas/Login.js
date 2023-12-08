import stilo from './Login.css'

function Login() {
    return (
        <div>
            <section className={stilo.log}>

                <h1>Login</h1>

                <fieldset>
                    <form>
                        <label htmlFor="email">Email</label>
                        <input type="email" required />

                        <label htmlFor="Senha">Senha</label>
                        <input type="password" required />

                        <input type="submit" name="submit" id="submit" />


                    </form>
                </fieldset>

            </section>
        </div>
    );
}
export default Login;