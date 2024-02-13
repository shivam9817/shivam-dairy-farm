import logo from './logo.svg';
import AllRoutes from './Routes/AllRoutes';
import './App.css';
import axios from 'axios';
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <AllRoutes/> 
    </div>
  );
}

export default App;
