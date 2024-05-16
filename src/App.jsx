import './index.css'
import HomePage from './Components/HomePage/HomePage.jsx'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div><HomePage /> </div>
  },

])

function myPortfolio() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default myPortfolio;
