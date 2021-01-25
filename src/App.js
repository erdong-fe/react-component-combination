import './App.css';
import Dog from './components/Dog';
import Cat from './components/Cat';
import { WrappedDog, WrappedCat } from './hoc';
import RenderPropsComponent from './render-props';
import usePosition from './hooks';


function App() {
  const position = usePosition();
  return (
    <div className="App">
      <div className="item">
        <p>
          高阶组件demo：
        </p>
          <WrappedDog />
          <WrappedCat />
      </div>
      <div className="item">
        <p>
          render props demo：
        </p>
        <RenderPropsComponent render={
          (data) => {
            return (
              <>
                <Dog { ...data } />
              </>
            )
          }
        } />
        <RenderPropsComponent render={
          (data) => {
            return (
              <>
                <Cat { ...data } />
              </>
            )
          }
        } />
      </div>
      <div className="item">
        <p>
          hooks demo：
        </p>
        <div>
          当前鼠标位置：({position.x}, {position.y})
        </div>
      </div>
    </div>
  );
}

export default App;
