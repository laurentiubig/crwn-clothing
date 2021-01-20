import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';


const HatsPage = () => (
  <div>
    <h1>HATS pages</h1>
  </div>
);

function App() {
  return (
    <div>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
    </div>
  );
}

export default App;
