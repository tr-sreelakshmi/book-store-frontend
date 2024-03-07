import {Route , Routes} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home';
import Create from './Pages/Create';
import Show from './Pages/Show';
import Delete from './Pages/Delete';
import Edit from './Pages/Edit';

function App() {
  return (
    <>
 
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/books/create' element={<Create/>}/>
    <Route path='/detail/:id' element={<Show/>}/>
    <Route path='/delete/:id' element={<Delete/>}/>
    <Route path='/edit/:id' element={<Edit/>}/>
   </Routes>
    </>
  );
}

export default App;
