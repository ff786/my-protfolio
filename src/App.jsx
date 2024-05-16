import './index.css'
import HomePage from './Components/HomePage/HomePage.jsx'
import IndexPage from './Components/IndexPage/IndexPage.jsx'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div><IndexPage /> </div>
  },
  {
    path: '/Home',
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