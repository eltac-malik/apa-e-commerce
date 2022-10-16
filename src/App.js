import {useEffect} from 'react'
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from 'Pages/Home/Home';
import Header from 'components/Header/Header'
import Detail from 'Pages/Details'
import Footer from 'components/Footer/Footer'

function App() {

  if (JSON.parse(localStorage.getItem("basket"))===null)
  {
    localStorage.setItem("basket",JSON.stringify([]))  
  }
  if (JSON.parse(localStorage.getItem("history"))===null)
  {
    localStorage.setItem("history",JSON.stringify([]))  
  }
  if (JSON.parse(localStorage.getItem("products"))===null)
  {
    localStorage.setItem("products",JSON.stringify([]))  
  }
  if (JSON.parse(localStorage.getItem("wish"))===null)
  {
    localStorage.setItem("wish",JSON.stringify([]))  
  }


  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/detail/:id' element={<Detail/>}/>
        </Routes>
        <Footer/>
      </Router>
    
    </div>
  );
}

export default App;
