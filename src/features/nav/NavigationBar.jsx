import React, {useState} from "react";
import {Collapse, Navbar as ReactstrapNavbar, NavbarToggler, Nav, NavItem, NavLink} from "reactstrap"
import styles from "./NavBar.module.css"
const NavigationBar = () =>{

    return(
        <>
        <ReactstrapNavbar className={`${styles.navigation_container}`}>
            <span className={`${styles.name}`}>
                Piyush Metha
            </span>
            <Nav className={`${styles.navigation_bar}`}>
            <NavItem className={`${styles.navigation_bar_item}`}>
                <NavLink href="#Home">Home</NavLink>
            </NavItem>
            <NavItem className={`${styles.navigation_bar_item}`}>
                <NavLink href="#Experience">Experience</NavLink>
            </NavItem>
            <NavItem className={`${styles.navigation_bar_item}`}>
                <NavLink href="#Projects">Projects</NavLink>
            </NavItem>
            <NavItem className={`${styles.navigation_bar_item}`}>
                <NavLink href="#Skills">Skills</NavLink>
            </NavItem>
            </Nav>
        </ReactstrapNavbar>
        </>
    )
}

export default NavigationBar;