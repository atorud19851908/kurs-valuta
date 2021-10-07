import React from 'react'
import {Container,Row,Col} from 'reactstrap'
import logo from '../currencyRate/image/logo-oz.svg'


 function Logo() {
  return (
    <div>
       <Container>
           <Row >
              <Col md = {12} className= "text-center mt-2">
                <h2 className = "text-white" mr-5 >M.Ibragimov.</h2>
                <div className = "logo-image">
                 <img src={logo} className = "logo mt-5" alt="Logo-ru" />
                </div>
              </Col>
            </Row>
       </Container>
    </div>
  )
}

export default Logo;