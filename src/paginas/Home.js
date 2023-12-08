import { Link } from 'react-router-dom'
import stilo from './Home.css'


function Home() {
    return (

        <div className={stilo.geral}>

            <h1>Gerenciamento de arquivos musicais.</h1> 

            <div>
                <ul>
                    <li><Link to="/Login">Login</Link></li>
                    <li><Link to="/Cadastro">Cadastro</Link></li>
                </ul>
            </div>
        </div>

    );
}

export default Home;