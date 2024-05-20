import React from 'react'
import styles from '@/styles/frame/Frame.module.css';

export default function FrameBottom
() {
  return (
    <div className={styles.frame}>
        <div className={styles.borders}>
            <div className={styles.borderBottom}></div>
        </div>
        <div className={styles.corners}>
            <div className={styles.cornerBottom}>
                <span className={styles.cornerBottomRight}></span>
                <span className={styles.cornerBottomLeft}></span>
            </div>
        </div>
    </div>
  )
}
