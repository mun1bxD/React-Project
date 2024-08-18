import Header from "./components/Header.jsx";
import Footer from './components/Footer.jsx';
import Home from "./components/Home.jsx";
import Destinations from "./components/Destinations.jsx";
import Packages from "./components/Packages.jsx";
import Signup from "./components/Signup.jsx";
import { BrowserRouter, Route,Routes} from "react-router-dom";
function App() {


  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/destinations" element={<Destinations/>}></Route>
         <Route path="/packages" element={<Packages/>}></Route>
         <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
       <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
