// import logo from './logo.svg';
// bed0b41b81b2480ea30c935ee539a97f
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    
      <Switch>
        <Route exact path="/"><News key="general" pageSize={5} country='in' category="general"/></Route>
        <Route exact path="/business" ><News key="business" pageSize={5} country='in' category="business"/></Route>
        <Route exact path="/entertainment"><News key="entertainment" pageSize={5} country='in' category="entertainment"/></Route>
        <Route exact path="/general"><News key="general" pageSize={5} country='in' category="general"/></Route>
        <Route exact path="/health"><News key="health" pageSize={5} country='in' category="health"/></Route>
        <Route exact path="/science"><News key="science" pageSize={5} country='in' category="science"/></Route>
        <Route exact path="/sports"><News key="sports" pageSize={5} country='in' category="sports"/></Route>
        <Route exact path="/tehnology"><News key="tehnology" pageSize={5} country='in' category="tehnology"/></Route>
      </Switch>
      
    </Router>
    </>
  );
}

export default App;
