import { React} from "react";
import styles from "./index.module.css";
import {NavLink} from "react-router-dom";
import {endpoints} from "../../App";
import NBNSSOE from "../../assets/NBNSSOE.svg";

export default function Navbar(){
  
  return (
    <div className={styles.nav}>
      
        <div className={styles.right_side}>
          <img src={NBNSSOE} alt="logo" />
        </div>
        <div className={styles.left_side}>
          <ul>
            <li><NavLink className={styles.navlnk} to={`/${endpoints.home}`}>Home</NavLink></li>
            <li><NavLink className={styles.navlnk} to={`/${endpoints.home}`}>Events</NavLink></li>
            <li><NavLink className={styles.navlnk} to={`/${endpoints.home}`}>All Projects</NavLink></li>
            <li><NavLink className={styles.navlnk} to={`/${endpoints.home}`}>Act</NavLink></li>
            <li><NavLink className={styles.navlnk} to={`/${endpoints.home}`}>Our Team</NavLink></li>
            <li><NavLink className={styles.navlnk} to={`/${endpoints.home}`}>Contact Us</NavLink></li>
          </ul>
        </div>
    
    </div>
  );
};
