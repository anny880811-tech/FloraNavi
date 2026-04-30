import { createHashRouter } from 'react-router'
import FrontLayout from '../layout/FrontLayout'
import Home from '../veiws/front/Home'
import Flowers from '../veiws/front/Flowers'
import Map from '../veiws/front/Map'
import Favorites from '../veiws/front/Favorites'

export const routes = createHashRouter([
  {
    path: '/',
    element: <FrontLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'flowers',
        element: <Flowers />,
      },
      {
        path: 'map',
        element: <Map />,
      },
      {
        path: 'favorites',
        element: <Favorites />,
      },
    ],
  },
])
