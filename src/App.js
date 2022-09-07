import './App.css';
import Site from "./components/stateless/site/Site"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
            <Site />
      </BrowserRouter>
    </>
  );
}

export default App;
