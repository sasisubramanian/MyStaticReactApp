import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import homeImg from './images/Home.png';
import anotherImg from './images/anotherPage.png';
function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sample">Another page</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sample" component={AnotherPage} />
        </Switch>
      </div>
    </Router>
  );
}
const Home = props => (<div>
  <h1>Home</h1>
  <img src={homeImg} alt={"Home Icon"}/>
  </div>);
const AnotherPage = props => (<div>
  <h1>Another page</h1>
  <img src={anotherImg} alt={"Another Icon"}/>
  </div>)
export default App;