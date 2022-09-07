import React from "react";
import styles from "./Experience.module.css"
import ExperienceSvg from "./../../assets/experience.svg"
const Experience = () => {
    return (
        <div className={`${styles.experience_container}`} id="Experience">
            <div className={`${styles.experience_header}`}>
                <div>
                    <img src={ExperienceSvg} />
                </div>
                <div>Experience</div>
            </div>
            <div className={`${styles.experience_body}`}>
                <div className={`${styles.experience_line}`}></div>
                <div className={`${styles.experience_box}`}>
                    <div className={`${styles.experience_box_content}`}>
                        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google"/>
                        <span className={`${styles.experience_card_header}`}>Software Engineer</span>
                        <span className={`${styles.experience_card_data}`}>2015-01-01 - 2016-01-01</span>
                        <p>I worked on the frontend of Google's new search engine.</p>
                    </div>
                    <div className={`${styles.experience_box_hole}`}>1</div>
                </div>
                <div className={`${styles.experience_box}`}>
                    <div className={`${styles.experience_box_content}`}>
                        <img src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png" alt="Facebook"/>
                        <span className={`${styles.experience_card_header}`}>Software Engineer</span>
                        <span className={`${styles.experience_card_data}`}>2015-01-01 - 2016-01-01</span>
                        <p>I worked on the frontend of Facebook.</p>
                    </div>
                    <div className={`${styles.experience_box_hole}`}>2</div>
                </div>
                <div className={`${styles.experience_box}`}>
                    <div className={`${styles.experience_box_content}`}>
                        <img className={`${styles.facebook_icon}`} src="https://www.backbase.com/wp-content/uploads/2020/05/Microsoft-Logo-PNG-Transparent.png" alt="Microsoft"/>
                        <span className={`${styles.experience_card_header}`}>Software Engineer</span>
                        <span className={`${styles.experience_card_data}`}>2015-01-01 - 2016-01-01</span>
                        <p>I worked on the frontend of Microsoft's new search engine.</p>
                    </div>
                    <div className={`${styles.experience_box_hole}`}>3</div>
                </div>
                <div className={`${styles.experience_box}`}>
                    <div className={`${styles.experience_box_content}`}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="Netfix"/>
                        <span className={`${styles.experience_card_header}`}>Software Engineer</span>
                        <span className={`${styles.experience_card_data}`}>2015-01-01 - 2016-01-01</span>
                        <p>I worked on the frontend of Netflix.</p>
                    </div>
                    <div className={`${styles.experience_box_hole}`}>4</div>
                </div>
            </div>
        </div>
    )
}

export default Experience;