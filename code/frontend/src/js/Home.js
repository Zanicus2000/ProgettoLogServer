import Filtra from './Filtra';
import Mappa from './Mappa';
import NavbarLoggato from './NavbarLoggato';
import '../css/tabella.css';
import '../css/Home.css';
import Log from './Log';
import Spiegazione from './Spiegazione';
import Grafici from './Grafici';
import {useEffect} from 'react';
import axios from 'axios';
import {useState} from 'react';
axios.defaults.withCredentials = true;

const Home = () => {
    const [nome, setNome] = useState('');
    useEffect(async () => {
        const url = "http://localhost:9000/verifica"; //url al server java

        const risposta = await axios.post(url);
        if (!risposta.data.nome)
        {
            window.location.href = window.location.href.replace("/home", "/");
        }
        else
        {
            setNome(risposta.data.nome);
        }
    });

    return ( 
        <div className="home">
            <NavbarLoggato />
            <h1>Benvenuto, {nome}</h1>
            <table>
                <tbody>
                    <tr>
                        <td id='cellaFIltra'>
                            <Filtra />
                        </td>
                        <td>
                            <Mappa />
                        </td>
                    </tr>
                </tbody>
            </table>
            
            <table>
                <tbody>
                    <tr>
                        <td className="tabellaLog">
                            <Log />
                        </td>
                        <td className="tabellaLog">
                            <Spiegazione />
                        </td>
                        <td>
                            <Grafici />
                        </td>
                    </tr>
                </tbody>
            </table>
            
        </div>
     );
}
 
export default Home;