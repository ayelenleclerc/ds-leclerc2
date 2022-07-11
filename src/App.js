import "./App.css";
import ItemListContainer from "./components/container/ItemListContainer";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <ItemListContainer />
    </>
  );
}

export default App;
