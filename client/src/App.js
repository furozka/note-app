import "./App.css";
import NotesApp from "./pages/NotesApp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="p-10 items-center text-center pb-72 w-full">
      <BrowserRouter>
        <h1 className="text-gray-600 text-4xl">NotesApp</h1>
        <Routes>
          <Route path="/" element={<NotesApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
