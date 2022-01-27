import "./App.css";
import MembersList from "./components/MembersList";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
        <MembersList />
      </div>
      <li>
        <a
          className="reference"
          href="https://icons8.com/icon/TgBz4l3HkLVx/library"
        >
          Library icon by Icons8
        </a>
      </li>
    </div>
  );
}

export default App;
