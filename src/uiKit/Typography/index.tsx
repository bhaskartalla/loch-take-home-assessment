import React from 'react'
import styles from './typography.module.css'

type TypographyType = {
  variant: string
  children: string | number
  style?: React.CSSProperties
  color?: string
}

const Typography = ({ variant, children, style, color }: TypographyType) => (
  <span
    style={{ ...style, color }}
    className={styles[variant]}
  >
    {children}
  </span>
)

export default Typography
