import React from "react";
import styles from "./Home.module.css"
import Hero_illustration from "./../../assets/hero_illustration.svg"
import {ReactComponent  as Hero} from "./../../assets/hero.svg"
const Home = () =>{
    return(
        <section className={`${styles.home_container}`} id="Home">
            <div>
            <div className = {`${styles.home_container_left}`}>
                <img src={Hero_illustration}/>
            </div>
            <div className = {`${styles.home_container_right}`}>
                <h1>Hello, There</h1>
                <p>Busy Developing a side project which will eventually be never done</p>
                <button><a href="#Experience">know more</a></button>
            </div>
            </div>
            <footer>
                <div>
                   <Hero/>
                </div>
            </footer>
        </section>
    )
}


export default Home;