import './App.css';
import Painting from './components/Painting'
// import PaintingInfo from './components/PaintingInfo';
import Results from './components/Results';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Homepage from './components/Homepage';
import Rules from './components/Rules';

function App() {

  // function handleClick(event) =>{
  //   event.preventDefault()

  // }
  return (
    <div className="App">
      {/* <h1>Welcome to the game!</h1> */}
      <BrowserRouter>
      <br />
      {/* <Link to='/play'><button>Play!</button></Link> */}
      <Route path='/' exact component={Homepage} />
      <Route path= '/play' exact component={Painting} />
      <Route path = '/results' component = {Results} />
      <Route path='/rules' exact component ={Rules} />
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
