import React from 'react'
import { Input } from "antd";

const InputComponent = ({ size, placeholder, bordered, style, ...rests }) => {
  return (
    <Input
        style={style}
        size={size}
        placeholder={placeholder}
        bordered={bordered}
        {...rests}
    />
  )
}

export default InputComponent
