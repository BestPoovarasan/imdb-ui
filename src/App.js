import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Mview from './pages/mviews/Mview';
import Addmovie from './pages/addmovie/Addmovie';
import Editmovie from './pages/editmovie/Editmovie';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
  <header>
    <Navbar/>
   </header>
   <main>
    <Routes>
      <Route path="/" index element={<Home/>} />
      <Route path='/movie/:_id' element={<Mview/>}/>
      <Route path="/addmovie" element={<Addmovie />} />
      <Route path="/editmovie/:_id" element={<Editmovie />} />

    </Routes>
   </main>
    </>
  );
}

export default App;
