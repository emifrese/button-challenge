import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/UI/Layout";
import ButtonPage from "./pages/ButtonPage";
import MainPage from "./pages/MainPage";

function App() {

  return (
    <Layout>
      <Routes>
        <Route path='/' exact element={<MainPage/>}/>
        <Route path='/challenge' element={<ButtonPage/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
