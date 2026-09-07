import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MontarTreino } from './Views/montarTreino.jsx';
import {Treino} from './Views/treinos.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Treino/>

  },
  {
    path:"/montarTreino",
    element:<MontarTreino/>
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>

    </StrictMode>,
)
