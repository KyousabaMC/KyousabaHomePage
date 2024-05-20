import React from 'react'
import styles from "@/styles/components/utils/PageTitle.module.css"

interface PageTitleProps {
  title: string
}

export const PageTitle = (props: PageTitleProps) => {
  return (
    <div className={styles.pageTitle}>
      <div className={styles.pageTitleContent}>
          <div className={styles.pageTitleText}>
              <span>
                  <h2>{props.title}</h2>
              </span>
          </div>
      </div>
      <div className={styles.pageTitleSpace}></div>
  </div>
  )
}
