import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Account from './Pages/Account/Account';
import Home from './Pages/Home/Home';
import Posts from './Pages/Posts/Posts';

function App() {
  return  (
    <Router>
      <NavigationBar theme="dark">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Posts">Posts</Link></li>
          <li><Link to="/Account">Account</Link></li>
        </ul>
      </NavigationBar>
      <Routes>
          <Route path="/" component={Home} />
          <Route path="/Posts" component={Posts} />
          <Route path="/Account" component={Account} />
      </Routes>
    </Router>
    );
}

export default App;
