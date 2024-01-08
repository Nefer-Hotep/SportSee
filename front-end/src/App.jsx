import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Aside from './components/Aside';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Aside />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
