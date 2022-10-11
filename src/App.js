import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Topics from './components/Topics/Topics';
import Departments from './components/Departments/Departments';
import Blog from './components/Blog/Blog';
import ReChart from './components/ReChart/ReChart';
import NotFound from './components/NotFound/NotFound';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Topics></Topics>,
          errorElement: <NotFound></NotFound>,
        },
        {
          path: "/departments",
          loader: () => {
            return fetch("department.json");
          },
          element: <Departments></Departments>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/chart",
          loader: () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <ReChart></ReChart>,
          errorElement: <NotFound></NotFound>,
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
