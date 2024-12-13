import logo from './logo.svg';
import './App.css';
  // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    import Saudacao from './componentes/saudacao';
    import Agahdois from './componentes/agahdois';
    import Doido from './componentes/Doido';
function App() {
  return (
  <>
    <h1>Olá Mundo</h1>
    <p>Esse react é brabo veio</p>
    <Saudacao/>
    <Agahdois/>
    <Doido/>
  </>

  );
}

export default App;
