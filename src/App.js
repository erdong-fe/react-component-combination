import './App.css';
import { WrappedDog, WrappedCat } from './hoc';


function App() {
  return (
    <div className="App">
      <WrappedDog />
      <WrappedCat />
    </div>
  );
}

export default App;
