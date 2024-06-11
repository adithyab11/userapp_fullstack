import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import Register from './components/Register';
import View from './components/View';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/Add' element={<Add/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/view' element={<View/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
