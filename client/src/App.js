import { Link, navigate, Router } from "@reach/router";
import Home from "./views/Home";
import New from "./views/New";
import Info from "./views/Info";

function App() {
  navigate('/pirates')
  return (
    <div className="App">
      <Router>
        <Home path="/pirates" />
        <New path="/new" />
        <Info path="pirates/:id"/>
      </Router>
      
    </div>
  );
}

export default App;
