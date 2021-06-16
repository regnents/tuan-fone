import Home from "./pages/Home";
import { BrowserRouter, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Home} />
      </div>
    </BrowserRouter>
  );
}
