import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ButtonInputSearch = (props) => {
  const {
    size,
    placeholder,
    textButton,
    bordered,
    backgroundColorInput = '#fff',
    backgroundColorButton = 'rgb(13, 92, 182)',
    colorButton = '#fff'
  } = props;
  return (
    <div style={{ display: "flex" }}>
      <InputComponent
        style={{ borderRadius: "0px", backgroundColor: backgroundColorInput }}
        size={size}
        placeholder={placeholder}
        bordered={bordered}
      />
      <ButtonComponent
        styleButton={{ borderRadius: "0px", backgroundColor: backgroundColorButton, color: colorButton, border: !bordered && 'none' }}
        size={size}
        bordered={bordered}
        icon={<SearchOutlined  style={{ color: colorButton }}/>}
        textButton={textButton}
      >
        <span styleTextButton={{ color: colorButton }}>{textButton}</span>
      </ButtonComponent>
    </div>  
  );
};

export default ButtonInputSearch;
