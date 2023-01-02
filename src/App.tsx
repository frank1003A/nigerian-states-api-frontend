import { Route, Routes } from "react-router-dom";
import "./App.scss";
import HOME from "./pages/home";
import State from "./pages/state";
import States from "./pages/states";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HOME />} />
      <Route path="/states" element={<States/>}/>
      <Route path="state/:name" element={<State/>}/>
    </Routes>
  );
}

export default App;