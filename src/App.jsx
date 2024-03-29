import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, SignIn, SignUp, About, Profile } from './pages';
import { Header } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="sign-in" element={<SignIn/>}/>
        <Route path="sign-up" element={<SignUp/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
