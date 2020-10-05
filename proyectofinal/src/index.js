import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
  
  <App
  title="USUARIOS de Mateify"
  name="Nombre de Usuario"
  nickName="pellido"
  age="Edad"
  mail="Email"
  nameSong="Nombre de la cancion"
  album="album"
  artist="artista"
  duration="duracion"/>

  
  
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
 