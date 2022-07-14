import './App.css';
import Countries from './components/countries';
import Order from './components/order';
import SearchBar from './components/searchBar';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Order />
      < Countries/>
    </div>
  );
}

export default App;
