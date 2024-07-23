import styled from "styled-components";
import {Col, Image, InputNumber} from 'antd'

export const WrapperStyleImageSmall = styled(Image)`
    height: 64px;
    width: 64px;
`

export const WrapperStyleColImage = styled(Col)`
    flex-basis:unset;
    display: flex;
`

export const WrapperStyleProductName = styled.h1`
    margin: 0px;
    color: rgb(39, 39, 42);
    font-size: 30px;
    font-weight: 500;
    line-height: 150%;
    word-break: break-word;
    white-space: break-spaces;
`

export const WrapperStyleTextSell = styled.span`
    font-size: 20px;
    line-height: 24px;
    color: rgb(120, 120, 120); 
`

export const WrapperProductPrice = styled.div`
    background-color:: rgb(250, 250, 250);
    border-radius: 4px;
`

export const WrapperPriceTextProduct = styled.div`
    color: rgb(255, 66, 78);
    font-size: 30px;
    font-weight: 600;
    line-height: 150%;
    padding: 10px
`

export const WrapperAddress = styled.div`
    display:flex;
    align-items: center;
    font-size: 18px;
    span.address {
        color: rgb(39, 39, 42);
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        text-decoration: underline;
        

    }
    span.change-address {
        color: rgb(10, 104, 255);
        font-size: 14px;
        font-weight: 400;
        line-height: 150%;
    }
`

export const WrapperQuantityProduct = styled.div`
    display:flex;
    gap: 4px;
    align-items: center;
    width: 120px;
    border: 1px solid #ccc;
    border-radius:4px;
`


export const WrapperInputNumber = styled(InputNumber)`
    border-radius:0px;
    &.ant-input-number.ant-input-number-sm.ant-input-number-outlined {
        width: 60px;
        margin:0 4px;
        border-top: none;
        border-bottom: none;
    }
`