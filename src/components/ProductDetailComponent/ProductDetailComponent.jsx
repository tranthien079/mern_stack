import React from 'react'
import { Row, Image, Col } from 'antd'
import { WrapperStyleImageSmall, WrapperStyleColImage, WrapperStyleProductName, WrapperStyleTextSell, WrapperProductPrice, WrapperPriceTextProduct, WrapperAddress, WrapperQuantityProduct, WrapperInputNumber } from './style'
import { StarFilled, PlusOutlined, MinusOutlined } from '@ant-design/icons'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
const ProductDetailComponent = () => {
  const onChange = () => {}
  return (
    <Row style={{ padding: '16px', background: '#fff' }}>
        <Col span={10} style={{ paddingRight: '8px', borderRight: '1px solid #e5e5e5' }}>
          <Image src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpqcw5zt495g38" alt='' preview={false} width=''/>
          <Row style={{ paddingTop: '10px', justifyContent:'space-between' }}>
            <WrapperStyleColImage span={4}>
                <WrapperStyleImageSmall src='https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpqcw5zt495g38_tn'  alt='' preview={false}/>
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
                <WrapperStyleImageSmall src='https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpqcw5zt495g38_tn'  alt='' preview={false}/>
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
                <WrapperStyleImageSmall src='https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpqcw5zt495g38_tn'  alt='' preview={false}/>
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
                <WrapperStyleImageSmall src='https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpqcw5zt495g38_tn'  alt='' preview={false}/>
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
                <WrapperStyleImageSmall src='https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpqcw5zt495g38_tn'  alt='' preview={false}/>
            </WrapperStyleColImage>
          </Row>
        </Col>
        <Col span={14} style={{ padding: '0 16px'}}>
          <WrapperStyleProductName>Điện thoại Iphone 15 512GB</WrapperStyleProductName>
          <div>
            <StarFilled style={{ fontSize: "16px", color: "rgb(253, 216, 54)" }} />
            <StarFilled style={{ fontSize: "16px", color: "rgb(253, 216, 54)" }} />
            <StarFilled style={{ fontSize: "16px", color: "rgb(253, 216, 54)" }} />
            <StarFilled style={{ fontSize: "16px", color: "rgb(253, 216, 54)" }} />
            <StarFilled style={{ fontSize: "16px", color: "rgb(253, 216, 54)" }} />
            <WrapperStyleTextSell>| Đã bán 1000+</WrapperStyleTextSell>
          </div>
          <WrapperProductPrice>
            <WrapperPriceTextProduct>200.000đ</WrapperPriceTextProduct>
          </WrapperProductPrice>
          <WrapperAddress>
            <span>Giao đến </span>
            <span className='address'>Q. 1, P. Bến Nghé, Hồ Chí Minh </span>
            <span className='change-address'>- Đổi địa chỉ</span>
          </WrapperAddress>
          <div style={{ margin: '10px 0 20px',padding: '10px 0', borderTop: '1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5',  }}>
            <div style={{ marginBottom: '6px' }}>Số lượng: </div>
            <WrapperQuantityProduct>
                <button style={{ border: 'none', background: 'transparent' }}>
                  <PlusOutlined style={{ color: '#000', fontSize: '20px'}} size={10} />
                </button>
                <WrapperInputNumber min={1} max={10} defaultValue={3} onChange={onChange} size='small' />
                <button style={{ border: 'none', background: 'transparent' }}>
                  <MinusOutlined style={{ color: '#000', fontSize: '20px'}} size={10} />
                </button>
            </WrapperQuantityProduct>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <ButtonComponent
              styleButton={{ backgroundColor:'rgb(255, 57, 69)', height: '48px', width: '220px', border: 'none' }}
              size='large'
              border={false}
              textButton={'Chọn mua'}
              styleTextButton={{ color:'#fff', fontSize: '15px', fontWeight:'700' }}

            >
            </ButtonComponent>
            <ButtonComponent
              styleButton={{ height: '48px', width: '220px', border: '1px solid rgb(13, 92, 182)' }}
              size='large'
              border={false}
              textButton={'Mua trả sau'}
              styleTextButton={{ color:'rgb(13, 92, 182)', fontSize: '15px' }}
            >
            </ButtonComponent>
          </div>
        </Col>
    </Row>
  )
}

export default ProductDetailComponent