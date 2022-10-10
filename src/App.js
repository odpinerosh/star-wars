import logo from './logo.svg';
import Card from './UI/Card';
import Button from './UI/Button';
import Movie from './Movie';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Card classes='card card-box-shadow' cardId='card-summary'>
          <Button classes='btn ui-btn' caption='Lista de Películas'></Button>
        </Card>
        <Card classes='card' cardId='card-wrapper'>
        <Movie></Movie>
        <Movie></Movie>
      </Card>
      </header>
      

    </div>
  );
}

export default App;
