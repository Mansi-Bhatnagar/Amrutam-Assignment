import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Screens/RootLayout";
import FindDoctors from "./Screens/FindDoctors/FindDoctors";
import Detail from "./Screens/Details/Detail";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [
      { path: "", element: <FindDoctors /> },
      { path: "/viewDetails", element: <Detail /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
