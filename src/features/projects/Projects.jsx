import React from "react";
import styles from "./Projects.module.css"
import { ReactComponent as Projectsvg } from "./../../assets/project.svg"
const Projects = () => {
    return (
        <>
            <div className={`${styles.project_container_line}`} id="Projects"></div>
            <div className={`${styles.project_container}`}>
                <div className={`${styles.project_container_header}`}>
                    <div>
                        <Projectsvg />
                    </div>
                    <div>Projects</div>
                </div>
                <div className={`${styles.project_container_body}`}>
                    <div className={`${styles.project_container_box}`}>
                        <div>
                            <img src="https://picsum.photos/id/1/600/314" alt="Portfolio"/>
                        </div>
                        <div>
                            <h2>Awesome Portfolio</h2>
                            <p>A portfolio of my work, where all the projects I've made are listed. The wesbite is made using latest technologies</p>
                            <div className={`${styles.project_container_row}`}>
                                <div>React</div>
                                <div>TailwindCSS</div>
                                <div>CSS</div>
                                <div>Javascript</div>
                            </div>
                            <a href="https://piyushmehta.com"  target="_blank"><button>view project</button></a>
                        </div>
                    </div>
                    <div className={`${styles.project_container_box}`}>
                        <div>
                            <img src="https://picsum.photos/id/2/600/314" alt="Portfolio"/>
                        </div>
                        <div>
                            <h2>Sawan</h2>
                            <p>Online Immunity store serving PAN India. Serving 10000 requests per day organically. Customer base of 10k+ people</p>
                            <div className={`${styles.project_container_row}`}>
                                <div>React</div>
                                <div>TailwindCSS</div>
                                <div>Kubernetes</div>
                                <div>NodeJs</div>
                            </div>
                            <a href="https://sawandryfruits.com"  target="_blank"><button>view project</button></a>
                        </div>
                    </div>
                    <div className={`${styles.project_container_box}`}>
                        <div>
                            <img src="https://picsum.photos/id/3/600/314" alt="portfolio"/>
                        </div>
                        <div>
                            <h2>Meaww Influencers Dashboard</h2>
                            <p>A complete Comprehensive dashboard built for the influencers. Used to track their growth and reach.</p>
                            <div className={`${styles.project_container_row}`}>
                                <div>React</div>
                                <div>Redux</div>
                                <div>SCSS</div>
                                <div>Javascript</div>
                            </div>
                            <a href="https://meaww.com" target="_blank"><button>view project</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.project_container_line}`}></div>
        </>
    )
}

export default Projects;