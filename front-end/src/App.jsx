import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './layout/Header';
import Aside from './layout/Aside';
import Dashboard from './pages/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <main>
          <Aside />
          <Dashboard />
        </main>
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
