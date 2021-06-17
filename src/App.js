import Home from "./pages/Home";
import { BrowserRouter, Route } from "react-router-dom";
import Explore from "./pages/Explore";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/Explore" component={Explore} />
      </div>
    </BrowserRouter>
  );
}
