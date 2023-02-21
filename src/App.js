import React from 'react'
import Navbar from './components/Navbar'
import About from './sections/About'
import Home from './sections/Home'
import Project from './sections/Project'
import Technologies from './sections/Technologies'

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <main className="mx-auto mt-2 pb-14" >
        <Home />
        <About />
        <Technologies />
        <Project />
      </main>
      <footer style={{'textAlign':'center'}} className='pb-5'>
        Copyright&#169; 2023
      </footer>
    </div>
  )
}

export default App