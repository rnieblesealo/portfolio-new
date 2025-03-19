import { Route, Routes, BrowserRouter } from "react-router-dom"

import Home from "../pages/Home"
import Blogs from "../pages/Blogs"
import ViewBlog from "../pages/ViewBlog"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/view/:markdownRef" element={<ViewBlog />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
