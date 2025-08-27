import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import CategoryPage from "./pages/Catagory/Catagory";
import ProductPage from "./pages/Product/ProductPage";
import {CartProvider} from "./components/CartProvider/CartProvider";
function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/category/:slug" element={<CategoryPage />} />
            <Route
              path="/category/:slug/product/:productId"
              element={<ProductPage />}
            />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
