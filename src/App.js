
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import SiderDemo from './components/Layout/Layout';
import About from './components/pages/About/About';
import Home from './components/pages/Home/Home';
import Post from './components/pages/Post/Post';
import User from './components/pages/User/User';
import Users from './components/pages/Users/Users';

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/" exact>
            <SiderDemo>
              <Home />
            </SiderDemo>
          </Route>
          <Route path="/users" exact>
            <SiderDemo>
              <Users />
            </SiderDemo>
          </Route>
          <Route path="/users/:id">
            <SiderDemo>
              <User />
            </SiderDemo>
          </Route>
          <Route path="/post/:id">
            <SiderDemo>
              <Post/>
            </SiderDemo>
          </Route>
          <Route path="/about" exact>
            <SiderDemo>
              <About />
            </SiderDemo>
          </Route>
          <Redirect to="/" />
        </Switch>

    </BrowserRouter>
  );
}

export default App;
