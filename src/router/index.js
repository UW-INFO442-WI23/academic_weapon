import Product from '../components/Product/product.js';
import About from '../components/About/about.js';
import Cart from '../components/Cart/cart';
import { createBrowserRouter} from "react-router-dom";
const router = createBrowserRouter([
  {
      path:'/',
      element: <Product></Product>
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
])
export default router