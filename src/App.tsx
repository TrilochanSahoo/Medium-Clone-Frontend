import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Blog } from './pages/Blog'
import { Blogs } from './pages/Blogs'
import { AddBlog } from './pages/AddBlog'
import { UserProfile } from './pages/UserProfile'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/Signup' element={<Signup/>}></Route>
          <Route path='/Signin' element={<Signin/>}></Route>
          <Route path='/Blog' element={<Blog/>}></Route>
          <Route path='/Blogs' element={<Blogs/>}></Route>
          <Route path='/AddBlog' element={<AddBlog/>}></Route>
          <Route path='/Profile' element={<UserProfile/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
