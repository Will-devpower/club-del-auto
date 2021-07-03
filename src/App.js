import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import { HomeScreen } from "./components/HomeScreen";
import { Footer } from "./layout/Footer";
import { Header } from './layout/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>          
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
