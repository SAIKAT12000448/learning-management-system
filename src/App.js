
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import About from './About/About';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';

import Notfound from './Notfound/Notfound';
import Service from './Service/Service';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer/Footer';
import Analyticc from './Analytic/Analyticc';


function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
            <Home></Home>
        </Route>
        <Route exact path='/home'>
            <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/service">
          <Service></Service>
        </Route>
        <Route path="/analytic">
             <Analyticc></Analyticc>
          </Route>
      
        <Route path="*">
          <Notfound></Notfound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
