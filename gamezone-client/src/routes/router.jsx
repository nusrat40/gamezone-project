import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AllReview from "../pages/AllReview";
import AddReview from "../pages/AddReview";
import MyReview from "../pages/MyReview";
import WatchList from "../pages/WatchList";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRoute from "./PrivateRoute";
import ReviewDetails from "../pages/ReviewDetails";
import UpdateReview from "../pages/UpdateReview";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=> fetch('https://gamezone-server.vercel.app/review')
            },
            {
                path:'all-review',
                element:<AllReview></AllReview>,
                loader:()=> fetch('https://gamezone-server.vercel.app/review')
            },
            {
                path:'add-review',
                element:<PrivateRoute>
                    <AddReview></AddReview>
                </PrivateRoute>
            },
            {
                path:'my-review',
                element:<PrivateRoute>
                    <MyReview></MyReview>
                </PrivateRoute>
            },
            {
                path:'watch-list',
                element:<PrivateRoute>
                    <WatchList></WatchList>
                </PrivateRoute>
            },
            {
                path:'review-details/:id',
                element:<ReviewDetails></ReviewDetails>,
                loader:({params})=> fetch(`https://gamezone-server.vercel.app/review/${params.id}`)
            },
            { 
                path:'update-review/:id',
                element:<UpdateReview></UpdateReview>,
                loader:({params})=> fetch(`https://gamezone-server.vercel.app/review/${params.id}`)

            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            }
        ]
    }
])

export default router;