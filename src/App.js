import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/home';
import Courses from './Components/courses';
import SignUp from './Components/signUp';
import Contact from './Components/contact';

function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/signUp' element={<SignUp/>} />
        <Route path='/contact' element={<Contact/>} />
        </Routes>
    </div>
  );
}

export default App;
