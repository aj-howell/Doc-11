import './App.css';
import Navbar from './components/Navbar/Navbar';
import Table from './components/Table/Table';

function App() {
  const response = "Welcome to the COVID-19 Chest X-Ray Image Analysis Tool!";

  return (
    <div className="App">
      <header className="App-header">        
          <div>
            {response}  
          </div>
        <div className='container'>
          <Navbar/>
        </div>
          <div> 
              <Table />
          </div>
      </header>
    </div>
  );
}

export default App;