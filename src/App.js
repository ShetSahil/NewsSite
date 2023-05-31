// import logo from './logo.svg';
// bed0b41b81b2480ea30c935ee539a97f
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  return (
    <>
    <Navbar/>
    <News pageSize={5}/>
    </>
  );
}

export default App;
