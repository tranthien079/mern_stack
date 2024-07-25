import React, { Fragment } from 'react'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import { WapperProducts, WapperNavbar } from './style'
import { Row, Pagination  } from 'antd'

const TypeProductPage = () => {
  return (
    <>
      <div style= {{ backgroundColor:'#efefef',padding: '0 120px ' }}>
        <Row style={{ flexWrap: 'nowrap', paddingTop: '10px' }}>
        <WapperNavbar span={4} > 
            <NavbarComponent />
        </WapperNavbar>
        <WapperProducts span={20}> 
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
        </WapperProducts>
        </Row>
        <Pagination align="center" defaultCurrent={1} total={10} />
    </div>
    </>
  )
}

export default TypeProductPage
