import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import RootLayout from "./Screens/RootLayout";
import FindDoctors from "./Screens/FindDoctors/FindDoctors";
import Detail from "./Screens/Details/Detail";
import AOS from "aos";
import "aos/dist/aos.css";

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
  useEffect(() => {
    AOS.init({
      debounceDelay: 10,
      throttleDelay: 10,
      duration: 1000,
      easing: "ease",
    });
    AOS.refresh();
  }, []);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
