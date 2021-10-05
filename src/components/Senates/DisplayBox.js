import React from "react";
import styles from "./assocs.module.css";
import { motion } from "framer-motion";

function DisplayBox(props) {
  const fade = {
    state1: { opacity: 0 },
    state2: {
      opacity: 1,
      transition: {
        delay: 1,
        default: { duration: 1 },
      },
    },
  };
  //   console.log(`haha ${props.data.assoc}`);
  return (
    <div>
      <motion.div className={styles.assoc}>
        <div
          className={styles.logo}
          variants={fade}
          initial={"state1"}
          animate={"state2"}
        >
          <img
            alt="PIC"
            src={props.data.url}
            width={150}
            className={styles.logoimg}
          ></img>
        </div>
        <h6 className={styles.assoc_title}>{props.data.assoc}</h6>
      </motion.div>
    </div>
  );
}

export default DisplayBox;
