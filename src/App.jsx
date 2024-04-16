import { Route, BrowserRouter as Router, Routes } from "react-router-dom";



import {  Contacto, Home, Ubicacion, Fotos, Videos } from "./pages";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/ubicacion' element={<Ubicacion />} />
                  <Route path='/contacto' element={<Contacto />} />
                  <Route path='/fotos' element={<Fotos />} />
                  <Route path='/videos' element={<Videos />} />
                </Routes>
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;