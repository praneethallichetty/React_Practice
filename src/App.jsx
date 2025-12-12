import Button from "./Button";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Greetings from "./Components/Greetings";
import Homeclass from "./Homeclass";
import Counter from "./Components/Counter";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import UserInfo from "./UserInfo";

export default function App() {
  let name = "Praneeth Allichetty"
  let age = "25"
  let profession = "Fresher, Actively looking for job opportunities"
  return (
    <>
      <h1>Welcome to learning React.js</h1>
      <h3>{name} of {age} ... Are you ready to learn?</h3>
      <h2>React has more demand in market.</h2>
   
      <Home />
      <About />
      <Contact />
      <Button />
      <Homeclass fname = {name} fage = {age} profession = {profession}/>
      <Greetings fname = "Bunny" age = {age}/>
      <Counter />


      {/* <>BrowserRouter ni matram run cheyali specific part of code ki kinda routies varaku</> */}

      {/* <h1 className="heading">RESUME</h1>
      <Navbar />
      <Routes>
        <Route path="/home" element = {<Home />}></Route>
        <Route path="/about" element = {<About />}></Route>
        <Route path="/contact" element = {<Contact />}></Route>
      </Routes>  */}

      {/* <>Provider ni matram run cheyali specific part of code kinda varaku</> */}
      <UserInfo />
      <Button />
    </>
  );
}
