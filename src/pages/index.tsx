import { Route, Routes } from 'react-router-dom'

import Home from 'pages/home'
import NotFound from 'pages/not-found'

function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default AppRouter
