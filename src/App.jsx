import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const App = () => {
  return (
    <div className='black'>
    <NavBar />
    <ItemListContainer greeting="Holis! ₍ᐢ.  ̫.ᐢ₎"/>
    </div>
  )
}
 
export default App;