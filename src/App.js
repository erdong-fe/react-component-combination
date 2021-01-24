import './App.css';
import { WrappedDog, WrappedCat } from './hoc';


function App() {
  return (
    <div className="App">
      <div>
        <p>
          高阶组件实现
        </p>
        <div className="hoc-area">
          <WrappedDog />
          <WrappedCat />
        </div>
      </div>
      <div>
        <p>
          render props 实现
        </p>
      </div>
    </div>
  );
}

export default App;
