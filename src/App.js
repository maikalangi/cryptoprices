// import './App.css';
import './index.css'
import { Route } from "react-router-dom";
import Currencies from './pages/Currencies';
import Main from './pages/Main';
import Price from './pages/Price';
import Nav from './components/Nav';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Route exact path='/'>
        <Main />
      </Route>
      <Route path='/currencies'>
        <Currencies />
      </Route>
      <Route 
        path="/price/:symbol"
        render={(routerProps) => <Price {...routerProps} />}
        >
        <Price />
      </Route>
    </div>
  );
}

export default App;