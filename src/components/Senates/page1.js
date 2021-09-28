import React from 'react'
import styles from './page1.module.css'
function Page1(props) {
    return (
        <div className={styles.outer} style={{background:props.bg}}>
            <div className={styles.container}>
                <div className={styles.col1}>
                    <div className={styles.arrow1}>
                        <img src={props.leftimg} height={500}></img>
                    </div>
                </div>
                <div className={styles.col2}>
                    <div className={styles.row1}>
                        <div className={styles.heading}>
                            {props.heading}
                        </div>
                        <div className={styles.arrow2}>
                            <img src={[props.rightimg]} height={400}></img>
                        </div>
                    </div>
                    <div className={styles.row2}>
                        <div className={styles.description}>
                            {props.content}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page1
