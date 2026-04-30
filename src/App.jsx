import { RouterProvider } from 'react-router'
import { routes } from './routes/router'

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
