// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import React from 'react'
import MainPage from './Pages/MainPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainlayout from './Components/layout/Mainlayout';
// import Header from './Components/Header';
import Sightseeing from './Pages/sightseeing';
import Place from './Pages/place';

function App() { //parent component
  return(
    <BrowserRouter>
    {/* <Header/>  */}
    {/* <Mainlayout> */}
    <Routes>
      {/* <Route element={<Mainlayout/>}>   */}
      <Route path ="/"element={<MainPage/>} /> 
      {/* <Route index element={<Mainlayout/>} /> */}
      <Route path="/sightseeing" element={<Sightseeing/>} />
      <Route path="/sightseeing/:place" element={<Place/>} />
      <Route path="*" element={<h1><center>404 Not Found</center></h1>} />
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
   


