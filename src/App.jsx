import { useState } from 'react'
import { createBrowserRouter, BrowserRouter, createRoutesFromElements, RouterProvider, Route, Routes, Link, NavLink } from 'react-router-dom';
import Users from './pages/users';
import Todos from './pages/todos';
import Photos from './pages/photos';
import './App.css';
import Posts from './pages/posts';

function App() {
  return (
    <>
    <body>
      <BrowserRouter>
    <header className="my-5 text-center">      
            <div className="pages_title">
            <h1 className="page_title"><NavLink to="/">Users</NavLink></h1>
            <h1 className="page_title"><NavLink to="/todos">Todos</NavLink></h1>
            <h1 className="page_title"><NavLink to="/posts">Posts</NavLink></h1>
            <h1 className="page_title"><NavLink to="/photos">Photos</NavLink></h1>
            </div>  
        </header>
      <main>
        <Routes>
          <Route path='/' element={<Users/>}></Route>
          <Route path='/todos' element={<Todos/>}></Route>
          <Route path='/posts' element={<Posts/>}></Route>
          <Route path='/photos' element={<Photos/>}></Route>
        </Routes>
      </main>
      </BrowserRouter>
    </body>
    </>
  )
}

export default App
