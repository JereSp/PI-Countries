import './App.css';
import Countries from './components/countries';
import Order from './components/order';
import CountryDetail from './components/countryDetail';
import { Route, Switch} from 'react-router-dom'
import  AddActiviy  from './components/addActivity';
import Navbar from './components/navbar'
import Landing from './components/landing';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Landing/>
        </Route>
        <Route exact path='/home'>
          <Navbar className="nav"/>
          <Order />
          <Countries/>
        </Route>
        <Route exact path='/add'>
          <AddActiviy />
        </Route>
        <Route path='/:id'>
          <CountryDetail/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
