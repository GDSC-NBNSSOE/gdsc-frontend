import {React,useState} from "react";
import styles from "./index.module.css";
import AOS from "aos";

AOS.init();
let hoverClrArr = [
    "rgb(226, 0, 0)",
    "rgba(1, 194, 43, 0.985)",
    "rgb(239, 211, 0)",
    "blue"
];

export default function Initial(){

    let counter = 0;
    const hoverClrChange = (event)=>{
        if(counter>hoverClrArr.length){
            counter=0;
        }
        event.target.style.background = hoverClrArr[counter];
        counter++;
    }

    return (

        <div className={styles.root}>
            <div className={styles.white_shadow}>

                <p className={styles.welcome}>Welcome</p>
                {/* <div><img src="/logo.png"/></div> */}
                
                <div className={styles.sub}></div>
                <p className={styles.gdsc}>GDSC NBNSSOE</p>
                <p className={styles.gdsc_subtitle}> Google Developer Student Clubs, NBNSSOE</p>
                <button onMouseOver={hoverClrChange} className={styles.btn}>Lets Go!</button>
            </div>
        </div>
    )
}