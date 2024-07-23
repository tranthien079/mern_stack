import React from 'react'
import { Badge, Col } from 'antd'
import { WapperHeader, WapperTextHeader, WapperHeaderAccount, TextHeaderSmall } from './style'
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch'
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';

const HeaderComponent = () => {
  return (
    <div>
       <WapperHeader gutter={16}>
        <Col span={6} >
          <WapperTextHeader> DEV FULLSTACK</WapperTextHeader>
        </Col>
        <Col span={12}  >
          <ButtonInputSearch 
            size="large"
            textButton="Tìm kiếm"
            placeholder="input search text"
            bordered={false}
          />
        </Col>
        <Col span={6} style={{ display:'flex', gap: '20px', alignItems: 'center' }} >
          <WapperHeaderAccount>
            <UserOutlined style={{ fontSize: '30px' }} />
            <div>
                <TextHeaderSmall style={{ fontSize: '12px' }}>Đăng nhập/Đăng ký</TextHeaderSmall>
                <div><TextHeaderSmall style={{ fontSize: '12px' }}>Tài khoản</TextHeaderSmall><CaretDownOutlined /></div>
                
            </div>
          </WapperHeaderAccount>
          <div>
            <Badge count={4} size='small'>
              <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff' }} />
            </Badge>
            <TextHeaderSmall>Giỏ hàng</TextHeaderSmall>
          </div>
        </Col>
      </WapperHeader>
    </div>
  )
}

export default HeaderComponent
