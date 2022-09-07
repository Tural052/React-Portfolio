import React from "react";
import "./styles.css"
import { Container } from "reactstrap"
import NavigationBar from "./features/nav/NavigationBar"
import Home from "./features/home/Home" 
import Experience from "./features/experience/Experience"
import Projects from "./features/projects/Projects"
import Skills from "./features/skills/Skills";
import Footers from "./features/footer/Footes"
const App = () => {
  return (
    <Container>
      <NavigationBar />
      <Home/>
      <Experience/>
      <Projects/>
      <Skills/>
      <Footers/>
    </Container>
  )
}

export default App;