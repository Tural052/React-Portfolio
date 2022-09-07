import React from "react";
import styles from "./Skills.module.css"
import { ReactComponent as Skillssvg } from "./../../assets/skills.svg"

const Skills = () => {
    return (
        <div className={`${styles.skills_container}`} id="Skills">
            <div className={`${styles.skills_container_header}`}>
                <div>
                    <Skillssvg />
                </div>
                <div>Skills</div>
            </div>
            <div className={`${styles.skills_conatiner_body}`}>
                <div className={`${styles.skills_body_box}`}>
                    <h3>Javascript</h3>
                    <progress max="100" value="60"></progress>
                </div>
                <div className={`${styles.skills_body_box}`}>
                    <h3>React</h3>
                    <progress max="100" value="27"></progress>
                </div>
                <div className={`${styles.skills_body_box}`}>
                    <h3>Css</h3>
                    <progress max="100" value="43"></progress>
                </div>
                <div className={`${styles.skills_body_box}`}>
                    <h3>HTML</h3>
                    <progress max="100" value="50"></progress>
                </div>
                <div className={`${styles.skills_body_box}`}>
                    <h3>Java</h3>
                    <progress max="100" value="44"></progress>
                </div>
                <div className={`${styles.skills_body_box}`}>
                    <h3>Googling</h3>
                    <progress max="100" value="53"></progress>
                </div>
            </div>
        </div>
    )
}

export default Skills;