import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Formular1">
        <div>
          Guest : 
          <input type="text" value=""/>
        </div>
        <div>
          Punkte : 
          <input type="text" value=""/>
          <button className="werfenbtn" onClick= ""> werfen</button>
        </div>
      </div>
      <div className="Formular2">
        <div>
          Guest : 
          <input type="text" value=""/>
        </div>
        <div>
          Punkte : 
          <input type="text" value=""/>
          <button className="werfenbtn" onClick= ""> werfen</button>
        </div>
      </div>
    </div>
  );
}

export default App;
