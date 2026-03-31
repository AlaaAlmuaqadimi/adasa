
import './App.css'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Blog from './Component/Blog/Blog'
import Layout from './Component/Layout/Layout'
import Notfound from './Component/Notfound/Notfound'
import Blogdetils from './Component/Blog/Blogdetils'


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'



import { createBrowserRouter, RouterProvider } from "react-router-dom";

let y=createBrowserRouter([
  {path:'/',element:<Layout/> ,children:[
    {index : true,element:<Home/>},
    {path:'blog',element:<Blog/>},
    {path:'about',element:<About/>},
    // {path: 'Blogdetils' ,element: <Blogdetils/>},
    { path: 'blog/:id', element: <Blogdetils /> },
    {path:'*',element:<Notfound/>},

  ]}
])

function App() {

  return (
    <>
    <RouterProvider  router={y} ></RouterProvider>
     
    </>
  )
}

export default App
