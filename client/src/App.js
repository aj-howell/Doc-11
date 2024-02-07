import Dashboard from '../src/components/Dashboard/Dashboard';
import './App.css';

function App() {
  const response = "Welcome to the COVID-19 Chest X-Ray Image Analysis Tool!";

  return (
    <div className="App">
      <header className="App-header">        
          <div>
            {response}  
          </div>
          <Dashboard/>
      </header>
    </div>
  );
}

export default App;