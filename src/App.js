import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Topics from './components/Topics/Topics';
import Departments from './components/Departments/Departments';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/topics",
          element: <Topics></Topics>,
        },
        {
          path: "/departments",
          element: <Departments></Departments>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound></NotFound>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
