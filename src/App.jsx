import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import SubjectDetail from './pages/SubjectDetail'
import TopicDetail from './pages/TopicDetail'
import Quiz from './pages/Quiz'
import Planner from './pages/Planner'
import Settings from './pages/Settings'

import SidebarLayout from './layout/SidebarLayout'

function App() {
  return (
    <Routes>
      <Route element={<SidebarLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/subject/:name" element={<SubjectDetail />} />
        <Route path="/subject/:name/topic/:topicId" element={<TopicDetail />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz/:subjectId" element={<Quiz />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}

export default App
