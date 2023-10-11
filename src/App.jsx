import './App.css';
import ListaDeTareas from './components/ListaDeTareas';

function App() {
  return (
    <div className='App'>
      <h1 className='titulo'>Lista de tareas</h1>
      <div className='tareas-lista-principal'>
        <h2>Mis Tareas</h2>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
