import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
  Link
} from 'react-router-dom';
import history from './history';
import About  from './components/About';
import Login  from './components/Login';

import AllUser  from './components/AllUser';
function App() {
  return (
    <div>
      {/* <Router history={history}>
       
        <Switch>
          <Route  path="/" Component={()=><>hello world</>} exact />
          <Route  path="/about" Component={About} exact />
        </Switch>
        </Router> */}

        <Router>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/allUser">All Users</Link>
        <Switch>
          <Route exact path="/" component={Login}  />
          <Route  path="/about" component={About}  />
          <Route  path="/allUser" component={AllUser}  />
          </Switch>
         
        {/* <Home />
        <About />
        <AllUser /> */}
        </Router>
      
    </div>
  );
}

export default App;
