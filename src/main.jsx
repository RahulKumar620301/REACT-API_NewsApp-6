import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import News from './News.jsx'
import SearchNews from './SearchNews.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {path:'/',element:<News/>},
      {path:"/:category", element:<News/>},
      {path:"/search/:q", element:<SearchNews/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
