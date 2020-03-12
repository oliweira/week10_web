import React, { useEffect, useState } from 'react';
import api from './services/api';

import './Global.css';
import './App.css'
import './Sidebar.css'
import './Main.css'

// Compopnente: Bloco isolado de HTML, CSS e JS,o qual não interfere no restante da aplicação
// Propriedade: Informações que um componente PAI passa para o componente FILHO
// Estado: Informações mantidas pelo componente (Lembrar: imutabilidade)

function App () {

    const [github_username, setGithubUsername] = useState ('');
    const [techs, setTechs] = useState ('');

    const [latitude, setLatitude] = useState ('');
    const [longitude, setLongitude] = useState ('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;

                setLatitude(latitude);
                setLongitude(longitude);
            },
            (err) => {
                console.log(err);
            },
            {
                timeout: 30000,
            }
        );
    }, []);

    async function handleAddDev(e) {
        e.preventDefaul();

        const response = await api.post('/devs', {
            github_username,
            techs,
            latitude,
            longitude,
        })

        console.log(response.data);
    }

    return (
        <div id="app">
            <aside>
                <strong>Cadastrar</strong>
                <form>
                    <div className="input-block">
                        <label htmlFor="github_username">Usuário do Github</label>
                        <input name="github_username" id="github_username" required  value={github_username} 
                            onChange={e => setGithubUsername(e.target.value)}                        
                        />
                    </div>

                    <div className="input-block">
                        <label htmlFor="techs">Tecnologias</label>
                        <input name="techs" id="techs" required value={techs} 
                            onChange={e => setTechs(e.target.value)}
                        />
                    </div>

                    <div className="input-group">

                        <div className="input-block">
                            <label htmlFor="latitude">Latitude</label>
                            <input type="number" name="latitude" id="latitude" required value={latitude} 
                                onChange={e => setLatitude(e.target.value)}
                            />
                        </div>

                        <div className="input-block">
                            <label htmlFor="longitude">Longitude</label>
                            <input type="number" name="longitude" id="longitude" required  value={longitude} 
                                onChange={e => setLongitude(e.target.value)}
                            />
                        </div>
                    </div>
                    <button type="submit">Salvar</button>
                </form>
            </aside>
            <main>
                <ul>
                    <li className="dev-item">
                        <header>
                            <img src="https://avatars2.githubusercontent.com/u/1918147?s=400&u=3fce39c0f932ae979e2280940ff50dc811c7ff5c&v=4" alt="" />
                            <div className="user-info">
                                <strong>Rafael Leite</strong>
                                <span>ReactJs, React Native, Node.js</span>
                            </div>
                        </header>
                        <p>Blá bla bla bla bla bla</p>
                        <a href="https://github.com/oliweira">Acessar perfil no Github</a>
                    </li>
                    <li className="dev-item">
                        <header>
                            <img src="https://avatars2.githubusercontent.com/u/1918147?s=400&u=3fce39c0f932ae979e2280940ff50dc811c7ff5c&v=4" alt="" />
                            <div className="user-info">
                                <strong>Rafael Leite</strong>
                                <span>ReactJs, React Native, Node.js</span>
                            </div>
                        </header>
                        <p>Blá bla bla bla bla bla</p>
                        <a href="https://github.com/oliweira">Acessar perfil no Github</a>
                    </li>
                    <li className="dev-item">
                        <header>
                            <img src="https://avatars2.githubusercontent.com/u/1918147?s=400&u=3fce39c0f932ae979e2280940ff50dc811c7ff5c&v=4" alt="" />
                            <div className="user-info">
                                <strong>Rafael Leite</strong>
                                <span>ReactJs, React Native, Node.js</span>
                            </div>
                        </header>
                        <p>Blá bla bla bla bla bla</p>
                        <a href="https://github.com/oliweira">Acessar perfil no Github</a>
                    </li>
                    <li className="dev-item">
                        <header>
                            <img src="https://avatars2.githubusercontent.com/u/1918147?s=400&u=3fce39c0f932ae979e2280940ff50dc811c7ff5c&v=4" alt="" />
                            <div className="user-info">
                                <strong>Rafael Leite</strong>
                                <span>ReactJs, React Native, Node.js</span>
                            </div>
                        </header>
                        <p>Blá bla bla bla bla bla</p>
                        <a href="https://github.com/oliweira">Acessar perfil no Github</a>
                    </li>
                </ul>                                
            </main>
        </div>
    );
}

export default App;