import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Socials from './components/Socials.jsx'
import Projects from './components/Projects.jsx'
import Resume from './components/Resume.jsx'
import Skills from './components/Skills.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/links",
    element: <Socials/>
  },
  {
    path: "/projects",
    element: <Projects/>
  },
  {
    path: "/resume",
    element: <Resume/>
  },
  {
    path: "/skills",
    element: <Skills/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
