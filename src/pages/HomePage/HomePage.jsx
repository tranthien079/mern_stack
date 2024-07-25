import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import slider1 from '../../assets/images/1.jfif'
import slider2 from '../../assets/images/2.jfif'
import slider3 from '../../assets/images/4.jfif'
import CardComponent from '../../components/CardComponent/CardComponent'
import { WapperTypeProduct, WapperButtonMore,WapperProducts } from './style'

const HomePage = () => {
  const arr = ['TV', 'TU LANH', 'MAY GIAT', 'QUAN AO'];
  return (
    <>
       <div style={{ backgroundColor: '#efefef'}}>
        <div style={{ width: '100%', margin: '0 auto', height:'100%', backgroundColor: '#fff',  }}>
          <WapperTypeProduct>
            {arr.map((item) => {  
              return <TypeProduct key={item} name={item} />
            })}
          </WapperTypeProduct>
        </div>
        <div id='container' style={{ backgroundColor: '#efefef', width: '1270px', margin: '0 auto'}}>
          <SliderComponent arrImages={[slider1, slider2, slider3]} />
          <WapperProducts >
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>

          </WapperProducts>
          <div style={{ width:'100%', display:'flex', alignItems:'center', marginTop: '10px', justifyContent:'center' }}>
              <WapperButtonMore textButton="Xem thêm" type="outline" styleTextButton={{ fontWeight: '500' }} styleButton={{ border: '1px solid rgb(11, 116, 229)', color: 'rgb(11, 116, 229)', width: '240px', height:'38px', borderRadius: '4px' }}/>
          </div>
        </div>
       </div>
    </>
  )
}

export default HomePage
