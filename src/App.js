import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import PostDetails from './Component/PostDetails/PostDetails';
import NotFound from './Component/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home'>
            <Home></Home>
        </Route>
        <Route path='/post/:postId'>
             <PostDetails></PostDetails>
        </Route>
        <Route exact path="/">
             <Home></Home>
        </Route>
        <Route path="*">
            <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
