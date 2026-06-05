import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { ExperienceDetail } from './pages/ExperienceDetail'
import { Home } from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience/:slug" element={<ExperienceDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
