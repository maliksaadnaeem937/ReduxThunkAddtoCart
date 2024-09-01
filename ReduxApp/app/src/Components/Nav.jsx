import { Outlet } from "react-router-dom";

import { Provider } from "react-redux";
import NavComp from "./NavComp";
import store from "../store";
export default function NavBar() {
  return (
    <Provider store={store}>
      <NavComp></NavComp>

      <Outlet></Outlet>
    </Provider>
  );
}
