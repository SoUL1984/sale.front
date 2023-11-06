import { RouterProvider } from "../node_modules/react-router-dom/dist/index"
import { router } from "./router/router"

function App() {
  return <RouterProvider router={router} />
}

export default App
