import Dropdown from './components/Dropdown';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Dropdown items={['Oliver Hansen', 'Van Henry', 'April Tucker', 'Ralph Hubbard']} isMulti />
    </div>
  );
}

export default App;
