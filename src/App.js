import React from 'react';
import MiComponenteConClase from './components/miComponenteConClase'
// import UsoJSX from './components/usoJSX';
import './css/global.css'

let elementos = ['uno', 'dos', 'tres']

function App() {
  return (
    <React.Fragment>
      {/* <UsoJSX elementos = {elementos}/>
      <div>
        Segundo elemento
      </div> */}
      <MiComponenteConClase elementos = {elementos}/>
    </React.Fragment>
  );
}

export default App;
