import './App.css'
import Cards from './com/cards/Cards'
import Carusel from './com/carusel/Carusel'
import Navbar from './com/nav/Navbar'

function App() {


  return (
    <>
    <Navbar/>
      <p className='myName'>me var magari😎</p>
      <Cards/>
      <button type="button" className="btn btn-primary">Primary</button>
      <button type="button" className="btn btn-secondary">Secondary</button>
      <button type="button" className="btn btn-success">Success</button>
      <Carusel/>

      <section>
        <div className="row">
          <div className='col-md-5 col-xl-1 bg-danger text-center'>1</div>
          <div className='col-md-1 col-xl-2 bg-success text-center'>2</div>
          <div className='col-md-3 col-xl-3 bg-warning text-center'>3</div>
          <div className='col-md-3 col-xl-4 bg-info text-center'>4</div>
        </div>
      </section>
    </>
  )
}

export default App
