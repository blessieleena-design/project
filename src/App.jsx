// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import MainPage from './Pages/MainPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainlayout from './Components/layout/Mainlayout';
// import Header from './Components/Header';
import Home from "./Pages/home";
import About from "./Pages/about";
import Contact from "./Pages/contact";


function App() { //parent component
  return(
    <BrowserRouter>
    {/* <Header/>  */}
    {/* <Mainlayout> */}
    <Routes>
      {/* <Route element={<Mainlayout/>}>   */}
      <Route path="/" element={<MainPage/>} /> 
      <Route index element={<Mainlayout/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      {/* </Route> */}
    </Routes>
    {/* </Mainlayout> */}
    </BrowserRouter>
  );
}
export default App;

// function MyButton() {
//   return(<button>Click Me</button>)
//   // const [count, setCount] = useState(0)

//   // return( 
//   // <>
//   //   <MainPage/>
//   // </>
// }
   


