import React from 'react'

interface ButtonProps {
    text?: string;
    onClick?: () => void
  }

const Button = (props: ButtonProps) => {
  return (
    <button
    className="button-88"
    onClick={props.onClick}
  >
    {props.text}
  </button>
  )
}

export default Button