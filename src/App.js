// ui components
import Nav from './components/Nav';
// page components
import Main from './pages/Main';
import Currencies from './pages/Currencies';
import Price from './pages/Price';
// component libraries
import { Route } from "react-router-dom";
// styles
import './index.css'
// import './App.css';

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
        render={(renderProps) => <Price {...renderProps} />}
        />
    </div>
  );
}

export default App;