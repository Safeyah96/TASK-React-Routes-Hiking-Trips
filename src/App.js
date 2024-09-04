import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import TripsList from "./components/TripsList";
import TripDetail from "./components/TripDetail";

const handleclick = () => console.log("Hello There!");

<button onClick={handleClick}>Click Here</button>;

function App() {
  return (
    <div id="page-top">
      <Nav />
      <Home />
      <TripsList />
      <TripDetail />
    </div>
  );
}

export default App;
