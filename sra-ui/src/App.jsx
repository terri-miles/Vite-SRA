import "./App.css";
import Home from "./scenes/Home";
import NavBar from "../src/components/NavBar";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="">
      <Modal />
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
