import Home from "./pages/Home";
import { BrowserRouter, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import Drivers from "./pages/Drivers";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/Explore" component={Explore} />
        <Route exact path='/Drivers' component={Drivers} />
      </div>
    </BrowserRouter>
  );
}
