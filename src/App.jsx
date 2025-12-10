import Button from "./Button";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Greeting from "./Components/Greetings";
import Homeclass from "./Homeclass";
import Counter from "./Components/Counter";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import UserInfo from "./UserInfo";

export default function App() {
  // let name = "Praneeth Allichetty"
  // let age = "21"
  return (
    <>
       {/* <h1>Welcome to learning React.js</h1>
      <h3>{name} of {age} ... Are you ready to learn?</h3>
      <h2>React has more demand in market.</h2>
   
      <Home />
      <About />
      <Contact />
      <Button />
      <Homeclass fname = {name}/>
      <Greeting fname = "Praneeth" age = {age}/>
      <Counter />
       <h1 className="heading">RESUME</h1>
      <Navbar />
      <Routes>
        <Route path="/home" element = {<Home />}></Route>
        <Route path="/about" element = {<About />}></Route>
        <Route path="/contact" element = {<Contact />}></Route>
      </Routes>  */}
      <UserInfo />
      <Button />
    </>
  );
}
