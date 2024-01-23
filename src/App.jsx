import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Product from "./components/Product";
import ListProduct from "./components/ListProduct";
import Detail from "./components/Detail";
import Header from "./components/Header";
import About from "./components/About";
import AboutIndex from "./components/AboutIndex";
import AboutRikkeiSoft from "./components/AboutRikkeiSoft";
import AboutRikkeiAcademy from "./components/AboutRikkeiAcademy";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import PrivateRouter from "./components/PrivateRouter";
import AdminIndex from "./components/AdminIndex";
import ManagerAccount from "./components/ManagerAccount";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/list-product" element={<ListProduct />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/about" element={<About />}>
          <Route index element={<AboutIndex />} />
          <Route path="about-rikkeisoft" element={<AboutRikkeiSoft />} />
          <Route path="about-rikkei-academy" element={<AboutRikkeiAcademy />} />
        </Route>
        <Route path="*" element={<NotFound />} />

        {/* Private router */}
        <Route path="/admin" element={<PrivateRouter />}>
          <Route index element={<AdminIndex />} />
          <Route path="account" element={<ManagerAccount />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
