import "./styles/App.css";
import Demo from "./pages/Demo";
import Docs from "./pages/Docs";

import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Demo />} />
            <Route path="docs" element={<Docs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
