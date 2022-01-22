import React from "react";
import styles from "./page1.module.css";
import { motion } from "framer-motion";
function Page1(props) {
  const drop = {
    state1: { y: -100, opacity: 0 },
    state2: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1,
        default: { duration: 1 },
      },
    },
  };

  return (
    <>
      <div className={styles.outer} style={{ background: props.bg }}>
        <div className={styles.container}>
          <div className={styles.col1}>
            <div className={styles.arrow1}>
              <motion.img
                variants={drop}
                initial={"state1"}
                animate={"state2"}
                alt="pic"
                src={props.leftimg}
                height={500}
              ></motion.img>
            </div>
          </div>
          <div className={styles.col2}>
            <div className={styles.row1}>
              <div className={styles.heading}>{props.heading}</div>
              <div className={styles.arrow2}>
                <motion.img
                  variants={drop}
                  initial={"state1"}
                  animate={"state2"}
                  alt="pic"
                  src={[props.rightimg]}
                  height={400}
                ></motion.img>
              </div>
            </div>
            <div className={styles.row2}>
              <div className={styles.description}>{props.content}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.outer2} style={{ background: props.bg }}>
        {/* <div className={styles.container}> */}
        <div className={styles.roww1}>
          <div className={styles.subrow1}>

            <div className={styles.arroww1}>
              <motion.img
                variants={drop}
                initial={"state1"}
                animate={"state2"}
                alt="pic"
                src={props.leftimg}
                height={500}
              ></motion.img>
            </div>
            <div className={styles.arroww2}>
              <motion.img
                variants={drop}
                initial={"state1"}
                animate={"state2"}
                alt="pic"
                src={[props.rightimg]}
                height={400}
              ></motion.img>
            </div>
          </div>
          <div className={styles.headingg}>
            <div className={styles.headinggtext}>
              {props.heading}
            </div>
          </div>
        </div>
        <div className={styles.descriptionn}>{props.content}</div>
      </div >
    </>
  );
}

export default Page1;
