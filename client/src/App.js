import './App.css';
import Table from './components/Table';

function App() {
  const response = "Welcome to the COVID-19 Chest X-Ray Image Analysis Tool!";

  return (
    <div className="App">
      <header className="App-header">        
          <div>
            {response}  
          </div>

          <div> 
              <Table />
          </div>
      </header>
    </div>
  );
}

export default App;
