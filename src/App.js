import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/Main.page'
import CreatePage from './pages/Create.page'
import ResumePage from './pages/Resume.page'
import MainLayout from './components/Main.layout'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='' element={<MainPage />} />
          <Route path='/create' element={<CreatePage />} />
          <Route path='/edit/:userId' element={<CreatePage />} />
          <Route path='/resume/:userId' element={<ResumePage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
