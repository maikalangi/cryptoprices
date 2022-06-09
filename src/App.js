import './App.css';
import { Route } from "react-router-dom";
import Currencies from './pages/Currencies';
import Main from './pages/Main';
import Price from './pages/Price';

function App() {
  return (
    <div className='App'>
      <Route path='/'>
        <Main />
      </Route>
      <Route path='/currencies'>
        <Currencies />
      </Route>
      <Route path="/price">
        <Price />
      </Route>
    </div>
  );
}

export default App;
