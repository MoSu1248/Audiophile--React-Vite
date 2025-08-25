import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
function App() {
  return (
    <>
      <Layout />
      <Home />
    </>
  );
}

export default App;
