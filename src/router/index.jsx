import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main/Main";
import Home from "../pages/main/Home";
import BookaTable from "../pages/main/BookaTable";
import Food from "../pages/main/Food";
import CardDetails from "../pages/main/CardDetails";
import AddToCart from "../pages/AddToCart";
import PaymentMethod from "../pages/main/PaymentMethod";
import Payment from "../pages/payment/Payment";
import Auth from "../layouts/auth/Auth";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('/card.json')
            
        },
        {
            path:'/home',
            element:<Home></Home>
        },
        {
            path:'/book-table',
            element:<BookaTable></BookaTable>
        },
        {
            path:'/food',
            element:<Food></Food>,
            loader:()=>fetch('/card.json')
        },
        {
            path:'/cart/:id',
            element:<CardDetails></CardDetails>,
            loader:()=>fetch('/card.json')
        },
        {
          path:'/addToCart',
          element:<AddToCart></AddToCart>,
        },
      ]

    },

    {

      path:"/",
      element:<Payment></Payment>,
      children:[
        {
         
            path:'/paymentMethod',
            element:<PaymentMethod></PaymentMethod>
          
        }
      ]
    },

    {
      path:'/auth',
      element:<Auth></Auth>,
      children:[
           {
          path: "login",
          element: <Login />
      },

        
        {
          path:'reg',
          element:<Register></Register>
        }
      ]
    }
  ]);
  export default router;