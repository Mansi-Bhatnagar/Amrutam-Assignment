import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Screens/RootLayout";
import FindDoctors from "./Screens/FindDoctors/FindDoctors";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [{ path: "", element: <FindDoctors /> }],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
