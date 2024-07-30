import React, { useState } from 'react'
import { Badge, Col, Popover } from 'antd'
import { WapperHeader, WapperTextHeader, WapperHeaderAccount, TextHeaderSmall,WrapperContentPopup } from './style'
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch'
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as UserService from '../../services/UserService'
import { resetUser } from '../../redux/slices/userSlice';
import Loading from '../LoadingComponent/Loading';

const HeaderComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector((state) => state.user);
  const handleNavigate = () => {
    navigate('/sign-in')
  }

  const handleLogout = async () => {
    setIsLoading(true)
    await UserService.logoutUser();
    localStorage.removeItem('access_token');
    dispatch(resetUser())
    setIsLoading(false)
  }

  const content = (
    <div>
      <WrapperContentPopup onClick={handleLogout}>Đăng xuất</WrapperContentPopup>
      <WrapperContentPopup>Thông tin ngươi dùng</WrapperContentPopup>
    </div>
  );

  
  return (
    <div style={{ backgroundColor: 'rgb(26, 148, 255)' }} >
       <WapperHeader gutter={16} style={{ width: '1270px', margin: '0 auto' }}>
        <Col span={6} >
          <WapperTextHeader> DEV</WapperTextHeader>
        </Col>
        <Col span={12}  >
          <ButtonInputSearch 
            size="large"
            textButton="Tìm kiếm"
            placeholder="input search text"
          />
        </Col>
        <Col span={6} style={{ display:'flex', gap: '20px', alignItems: 'center' }} >
          <Loading isPending={isLoading}>
          <WapperHeaderAccount>
            <UserOutlined style={{ fontSize: '30px' }} />
            {user?.name ? (
              <>
              <Popover content={content} trigger="click">
                <div style={{  cursor: 'pointer' }}>{user.name}</div>
              </Popover>
              </>
            ) : (
              <div onClick={handleNavigate} style={{  cursor: 'pointer' }}>
                <TextHeaderSmall style={{ fontSize: '12px' }}>Đăng nhập/Đăng ký</TextHeaderSmall>
                <div><TextHeaderSmall style={{ fontSize: '12px' }}>Tài khoản</TextHeaderSmall><CaretDownOutlined /></div>
                
            </div>
            )}
          </WapperHeaderAccount>
          </Loading>
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
