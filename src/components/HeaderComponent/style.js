import { Row } from 'antd';
import { styled } from 'styled-components'

export const WapperHeader = styled(Row)`
    padding: 14px 120px;
    background-color: rgb(26, 148, 255); 
    align-items: center;
    gap: 16px;
    flex-wrap: nowrap;
    position: fix;
`

export const WapperTextHeader = styled.span`
    font-size:18px;
    color: #fff;
    font-weight: bold;
    text-align: left;
`

export const WapperHeaderAccount = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    font-size:12px;
    gap: 10px;
`

export const TextHeaderSmall =  styled.span`
    font-size:12px;
    color: #fff;
    white-space: nowrap;
`

export const IconHeader =  styled.span`
    font-size:30px;
    color: #fff;
`