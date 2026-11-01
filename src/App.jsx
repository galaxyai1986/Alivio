import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Experience from './pages/Experience.jsx'
import FindChapter from './pages/FindChapter.jsx'
import Stories from './pages/Stories.jsx'
import About from './pages/About.jsx'
import Benefits from './pages/Benefits.jsx'
import StartChapter from './pages/StartChapter.jsx'
import Community from './pages/Community.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/find-chapter" element={<FindChapter />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/about" element={<About />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/start-chapter" element={<StartChapter />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
