import React from "react"
import {ReactComponent as Footerssvg} from "./../../assets/footer.svg"
import {ReactComponent as Healt} from "./../../assets/healt.svg"
import styles from "./Footer.module.css"
const Fotters = ()=>{
    return(
        <div className={`${styles.footer}`}>
            <Footerssvg/>
            <div className={`${styles.footer_content}`}>
                <span>Piyush Mehta</span>
                <div>
                    <ul>
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#Experience">Experience</a></li>
                        <li><a href="#Projects">Projects</a></li>
                        <li><a href="#Skills">Skills</a></li>
                    </ul>
                </div>
                <div>
                    <p>© 2022 Piyush Mehta. All rights reserved.</p>
                    <p>Theme designed and developed with <Healt/> by  
                    <a href="https://piyushmehta.com" target="_blank">Piyush Mehta</a></p>
                </div>
            </div>
        </div>
    )
}

export default Fotters;