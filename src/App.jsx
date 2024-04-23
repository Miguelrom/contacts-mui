import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import { CssBaseline } from "@mui/material";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <p>Some error occurred...</p>,
    children: [{
      index: true,
      element: <Home />,
    },
    {
      path: 'contacts',
      element: <Contacts />,
    },
    {
      path: 'about',
      element: <About />,
    }
  ],
  },
]);

function App() {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
