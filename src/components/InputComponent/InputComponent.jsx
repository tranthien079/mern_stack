import React from 'react'
import { Input } from "antd";

const InputComponent = ({ size, placeholder, style, ...rests }) => {
  return (
    <Input
        style={style}
        size={size}
        placeholder={placeholder}
        {...rests}
    />
  )
}

export default InputComponent
