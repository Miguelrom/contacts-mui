import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import { CssBaseline } from "@mui/material";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import NewContact from "./pages/NewContact";
import Error from "./pages/Error";
import ContactForm from "./components/ContactForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [{
      index: true,
      element: <Home />,
    },
    {
      path: 'contacts',
      children: [
        {
          index: true,
          element: <Contacts />
        },
        {
          path: 'new',
          element: <NewContact />,
          action: ContactForm.action,
        }
      ]
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
