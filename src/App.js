import "./styles.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Designer from "./components/Designer";
import Social from "./components/Social";
import Coder from "./components/Coder";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Designer />
      <Coder />
      <Social />
    </div>
  );
}

export default App;
