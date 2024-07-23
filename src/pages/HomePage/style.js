import styled from "styled-components";
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'

export const WapperTypeProduct = styled.div`
    display:flex;
    align-items:center;
    gap: 24px;
    justify-content:center;
    border-bottom: 1px solid red;
    height: 44px;
`

export const WapperButtonMore = styled(ButtonComponent)`
    &:hover {
        color: #fff;
        background: rgb(12, 92, 182);
        span {
            color: #fff;
        }
    }
    width:100%;
    text-align:center;
`

export const WapperProducts = styled.div`
    display:flex;
    justify-content:center;
    gap: 15px;
    margin-top: 20px;
    flex-wrap: wrap;
    width: 100%;
`