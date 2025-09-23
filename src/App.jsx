import './App.css'
import Home from './components/Home'
import Error from './components/Error'
import Panel from './components/Paneles/Panel'
import PanelArchivo from './components/Paneles/PanelArchivo'
import PanelPapelera from './components/Paneles/PanelPapelera'
import Acceso from './components/Acceso'
import Registro from './components/Registro'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { AuthProvider } from './hooks/useAuth'
import ProtectedRoute from './Routes/ProtectedRoute'


const route = createHashRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
    errorElement: <Error />,
    children: [
      {
        path: '',
        element: <Panel />
      },
      {
        path: 'archivo',
        element: <PanelArchivo />,
      },
      {
        path: 'papelera',
        element: <PanelPapelera />,
      },
    ]
  },
  {
    path: '/acceso',
    element: <Acceso />,
    errorElement: <Error />
  },
  {
    path: '/registro',
    element: <Registro />,
    errorElement: <Error />
  },
]); 
function App() {

  return (
    <AuthProvider>
      <RouterProvider router={route} />
    </AuthProvider>
  )
}

export default App
