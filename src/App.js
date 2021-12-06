import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './redux/components/Header';
import PhotoListings from './redux/components/PhotoListings';
import PhotoDetail from './redux/components/PhotoDetail';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Header />
          <h1>Redux Photo Gallery</h1>
        <Switch>
          <Route path="/" exact component={PhotoListings} />
          <Route path="/photo/:id" exact component={PhotoDetail} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
