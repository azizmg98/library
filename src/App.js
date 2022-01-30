import "./App.css";
import BookList from "./components/BookList";
import MembersList from "./components/MembersList";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<MembersList />} />
        <Route path="/books" element={<BookList />} />
      </Routes>
      {/* <li>
          <a
            className="reference"
            href="https://icons8.com/icon/TgBz4l3HkLVx/library"
          >
            Library icon by Icons8
          </a>
        </li> */}
    </div>
  );
}

export default App;
