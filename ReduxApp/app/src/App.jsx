import Home from "./Components/Home";
import Product from "./Components/Product";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
} from "react-router-dom";
import NavBar from "./Components/Nav";

import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar></NavBar>}>
            <Route index element={<Home></Home>} />
            <Route path="cart" element={<Product></Product>} />
            <Route
              path="*"
              element={
                <div className="text-center pt-4">Error 404 Not Found!</div>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
