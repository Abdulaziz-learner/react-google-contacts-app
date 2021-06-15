import React from 'react';
import {Container,Row,Col} from 'reactstrap';
import phoneImg from '../media/phone.jpg';
import userImg from '../media/user.jpg';
const NavigationBar =()=>{
return(
    <div className='navbar-div'>
    <Container fluid>
        <Row>
            <Col className='py-2'sm={{size:3}} md={{size:2}}>
                <img className='logo-img' src={phoneImg} alt='phone' />
            </Col>
            <Col className='py-2 align-items-center d-flex' md={{size:6,offset:1}}>
                <input type='search' className='search-input border-0 form-control' placeholder='Search' />
            </Col>
            <Col md={{size:2,offset:1}} sm={{size:3}}>
                <img className='logo-img' src={userImg} alt='user' />
            </Col>
        </Row>
    </Container>


</div>
)

}
export default NavigationBar;
