import Product from '../components/Product/product.js';
import About from '../components/About/about.js';
import Cart from '../components/Cart/cart.js';
import Confirmation from '../components/Confirmation/confirmation.js';
import { createBrowserRouter} from "react-router-dom";
const router = createBrowserRouter([
  {
      path:'/',
      element:<About></About>
  },
  {
      path:'/Product',
      element:<Product></Product>
  },
  {
    path:'/About',
    element:<About></About>
  },
  {
    path:'/Cart',
    element:<Cart></Cart>
  },
  {
    path:'/Confirmation',
    element:<Confirmation></Confirmation>
  },
])
export default router