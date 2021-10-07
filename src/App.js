import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Cards from './Cards';
import CardData from "./CardData";
import NewDraft from './NewDraft';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
      <p>DASHBOARD</p>
      <h1>Blog overview</h1>
      <Cards/>
      </div>
      <NewDraft/>
      
    </>
  );
}

export default App;
