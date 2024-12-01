
import { createBrowserRouter, RouterProvider,} from 'react-router-dom'
import './App.css'
import Main from './layout/Main';
import SignUp from './Components/SignUp/SignUp';
import Home from './Components/Shared/Header/Home/Home'
import Products from './Components/Products/Products';
import Login from './Components/Login/Login';






function App() {

    const router = createBrowserRouter ([

        {
            path:'/',
            element:<Main></Main>,
           children: [
            {
                path:'/',
                element:<Home></Home>,
                
            },
            {

                path:"/Sign-UP",
                element: <SignUp></SignUp>
                

            },

            {
                path:"/Product",
                element: <Products></Products>,
               

               
            },
            {
                path:"/Login",
                element: <Login></Login>,
               

               
            },
           
            
           
           ],
                  
            
    },    

]);

return <div>
    <RouterProvider router={router}></RouterProvider>
</div>;

}

export default App;
