// import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path='/'>
            <Login />
          </Route>
    <div className="App">
      <Switch >
      
          <Route exact path='/signup'>
            <SignUp />
          </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
