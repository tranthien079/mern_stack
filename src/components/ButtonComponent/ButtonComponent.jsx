import React from 'react'
import { Button } from "antd";

const ButtonComponent = ({ size, styleButton, styleTextButton, textButton, disabled, ...rests }) => {
  return (
    <Button
        style={{ 
          ...styleButton,
          background: disabled ? '#ccc' : styleButton.backgroundColor
         }}
        size={size}
        {...rests}
    >
        <span style={styleTextButton}>{textButton}</span>
    </Button>
  )
}

export default ButtonComponent
