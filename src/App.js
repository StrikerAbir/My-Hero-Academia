import mainPic from './images/myheroaca.png';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Topics from './components/Topics/Topics';
import Departments from './components/Departments/Departments';
import Blog from './components/Blog/Blog';
import About from './components/About/About';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Topics></Topics>
        },
        { 
          path: '/departments',
          element: <Departments></Departments>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        { 
          path: '/about',
          element: <About></About>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
