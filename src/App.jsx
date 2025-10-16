import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import CategoryPage from "./pages/Catagory/Catagory";
import ProductPage from "./pages/Product/ProductPage";
import { CartProvider } from "./components/CartProvider/CartProvider";
import CheckOut from "./pages/Checkout/CheckOut";
import { CheckoutProvider } from "./components/CheckOutProvider/CheckOutProvider";
function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <CheckoutProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/category/:slug" element={<CategoryPage />} />
              <Route
                path="/category/:slug/product/:productId"
                element={<ProductPage />}
              />
              <Route path="/checkout" element={<CheckOut />}></Route>
            </Route>
          </Routes>
        </CheckoutProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
