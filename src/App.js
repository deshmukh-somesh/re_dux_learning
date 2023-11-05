
import './App.css';
import Home from './containers/HomeContainer';
// import {User} from './User'
// import Home from './components/Home'
import HomeContainer from './containers/HomeContainer'

function App() {
  return (
    <div className="App">
      {/* <h1>App Component</h1> */}
      {/* <User data={{name:"deshmukh somesh", age:23}} /> */}
      {/* <Home/> */}
      <HomeContainer/>
    </div>
  );
}

export default App;
