import React from 'react'
import ListCourse from './component/ListCourse'
import SingleCourse from './component/SingleCourse'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from './component/NotFound';
export default function App() {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route exact path='/' element={<ListCourse />} />
          <Route exact path='/coursedetails/:id' element={<SingleCourse />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}
