import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import { CssBaseline } from "@mui/material";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import NewContact from "./pages/NewContact";
import Error from "./pages/Error";
import ContactDetail from "./pages/ContactDetail";
import ContactEdit from "./pages/ContactEdit";
import contactFormAction from "./actions/contactFormAction";

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
          path: ':contactId',
          id: 'contact-detail',
          loader: ContactDetail.loader,
          children: [
            {
              index: true,
              element: <ContactDetail />,
            },
            {
              path: 'edit',
              element: <ContactEdit />,
              action: contactFormAction,
            }
          ]
        },
        {
          path: 'new',
          element: <NewContact />,
          action: contactFormAction,
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
