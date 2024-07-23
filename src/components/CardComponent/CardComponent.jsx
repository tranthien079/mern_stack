import React from "react";
import { StarFilled } from "@ant-design/icons";
import {
  StyleNameProduct,
  WapperReportText,
  WapperPriceText,
  WapperDiscountText,
  WrapperCardStyle,
  WrapperStyleTextSell
} from "./style";
import logo from "../../assets/images/logo.png";

const CardComponent = () => {
  return (
    <div>
      <WrapperCardStyle
        headStyle={{ width: '200px', height: '200px' }}
        hoverable
        style={{
          width: 200,
        }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <img src= {logo} style={{ height:'24px', width:'68px', position:'absolute', top:'-1px', left:'-1px', borderTopLeftRadius: '3px'}} alt="" />
        <StyleNameProduct>Iphone 15</StyleNameProduct>
        <WapperReportText>
          <span style={{ marginRight: '4px' }}>
            <span>4.97</span>
            <StarFilled style={{ fontSize: "12px", color: "rgb(253, 216, 54)" }} />
          </span>
          <WrapperStyleTextSell>| Đã bán 1000+</WrapperStyleTextSell>
        </WapperReportText>
        <WapperPriceText>
          1.000.000 đ
          <WapperDiscountText>
            -12%
          </WapperDiscountText>
        </WapperPriceText>
      </WrapperCardStyle>
    </div>
  );
};

export default CardComponent;
