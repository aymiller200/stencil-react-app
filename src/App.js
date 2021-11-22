import './App.css';
import Favorites from './components/favorites/Favorites';

function App() {
  return (
    <div className="App">
      <Favorites />
      <am-dog-list></am-dog-list>
    </div>
  );
}

export default App;
