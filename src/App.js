import logo from './logo.svg';
import './App.css';
import './utils/axios';
import RootNavigator from './navigators/root.navigator';
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <RootNavigator />
    </Router>
  );
}

export default App;
