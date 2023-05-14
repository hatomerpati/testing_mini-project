import { Link } from "react-router-dom";


export const MENU_ITEM = [

  {
    label: <Link to="../">Home</Link>,
    key: "/home",
  },
  {
    label: <Link to="/product">Products</Link>,
    key: "/product",
  },
  {
    label: <Link to="/add-product">Sell your books</Link>,
    key: "/add-product",
  },
  {
    label: <Link to="/about">About US</Link>,
    key: "/about",
  },

];
