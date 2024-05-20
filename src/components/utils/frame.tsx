import React from 'react'
import styles from '@/styles/components/utils/Frame.module.css';

export default function Frame() {
  return (
    <div className={styles.frame}>
        <div className={styles.borders}>
            <div className={styles.borderTop}></div>
            <div className={styles.borderRight}></div>
            <div className={styles.borderLeft}></div>
        </div>
        <div className={styles.corners}>
            <span className={styles.cornerTopRight}></span>
            <span className={styles.cornerTopLeft}></span>
        </div>
        <div className={styles.hamburgerMenuBack}>
            <div></div>
            <span className={styles.hamburgerMenuCornerTop}></span>
        </div>
    </div>
  )
}
