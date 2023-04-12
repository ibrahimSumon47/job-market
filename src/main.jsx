import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home'
import Statistics from './component/Statistics/Statistics'
import ApplyJobs from './component/ApplyJobs/ApplyJobs'
import Blog from './component/Blog/Blog'
import Main from './component/Layout/Main';
import JobDetails from './component/JobDetails/JobDetails';
import ErrorPage from './component/ErrorPage/ErrorPage';
import cartProductsLoader from './loader/cartProductsLoader';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/jobCategoryData.json")
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/appliedJobs",
        element: <ApplyJobs></ApplyJobs>,
        loader: cartProductsLoader
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "details/:id",
        element: <JobDetails></JobDetails>,
        loader: ({params}) => fetch("/featuredJobsData.json")
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
