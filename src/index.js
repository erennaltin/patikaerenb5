import React from 'react'
import styles from './styles.module.css'

export const Button = ({ type = 'default', children, ...props }) => {
  return (
    <button
      className={`${styles.default} ${styles[type]}`}
      onClick={props.onClick}
    >
      {children}
    </button>
  )
}
