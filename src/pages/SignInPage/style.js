import styled from "styled-components";
import loginImage from '../../assets/images/login.png';

export const WrapperContainer = styled.div`
    background-image: url(${loginImage});
    height: 430px;
    position: relative;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
`

export const WrapperContainerRight = styled.div`
    width: 250px;
    position: absolute;
    top: 0;
    right: 0;
    padding: 40px 45px 24px;
    height: 366px;
    background: #fff;
`

export const TextLight = styled.span`
    color: rgb(13, 92 ,182);
    font-size: 13px;
`