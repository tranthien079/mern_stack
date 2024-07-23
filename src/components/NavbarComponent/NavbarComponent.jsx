import React from "react";
import { WapperLabelText, WapperTextValue, WapperContent, WapperTextPrice } from "./style";
import { Checkbox, Rate } from "antd";
const NavbarComponent = () => {
  const onChange = () => {};
  const renderContent = (type, options) => {
    switch (type) {
      case "text":
        return options.map((option, index) => {
          return <WapperTextValue key={index}>{option}</WapperTextValue>;
        });
      case "checkbox":
        return (
          <Checkbox.Group
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
            onChange={onChange}
          >
            {options.map((option, index) => {
              return (
                <Checkbox key={index} value={option.value}>
                  {option.label}
                </Checkbox>
              );
            })}
          </Checkbox.Group>
        );
      case "star":
        return options.map((option, index) => {
          return (
            <div style={{ display: "flex", gap: "4px" }}>
              <Rate
                style={{ fontSize: "12px" }}
                key={index}
                disabled
                defaultValue={option}
              />
              <span>{`Từ ${option} sao`}</span>
            </div>
          );
        });
      case "price":
        return options.map((option, index) => {
          return (
            <WapperTextPrice key={index} >
                {option}
            </WapperTextPrice>
          );
        });
      default:
        return null; // Return null or some fallback content
    }
  };

  return (
    <div>
      <WapperLabelText>Label</WapperLabelText>
      <WapperContent>
        {renderContent("text", ["Tu lanh", "May giat", "Quan Ao"])}
      </WapperContent>
      <WapperContent>
        {renderContent("checkbox", [
          { value: "A", label: "A" },
          { value: "B", label: "B" },
          { value: "C", label: "C" },
        ])}
      </WapperContent>
      <WapperContent>{renderContent("star", [3, 4, 5])}</WapperContent>
      <WapperContent>
        {renderContent("price", ["Dưới 40000", "Dưới 150000"])}
      </WapperContent>
    </div>
  );
};

export default NavbarComponent;
