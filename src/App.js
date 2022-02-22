import React, { useState, useContext, createContext, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useLocation,
} from 'react-router-dom'
import Header from './components/header'
import PostList from './components/postList'
import PostView from './components/postView'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <section className="section container content">
          <Routes>
            <Route path="/" element={<PostList />}></Route>
            <Route path="/this_is_a_slug" element={<PostList />}></Route>
            <Route path="/:slug" element={<PostView />}></Route>
          </Routes>
        </section>
      </div>
    </Router>
  )
}

export default App
