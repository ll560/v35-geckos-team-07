import React from 'react'
import './index.css'
import {Button, Card, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Aztro from '../Aztro'
import aries_icon from '../../assets/aries_icon.png';

function index() {
    return (
        <div >
            <div className="sign-info">
           
            <h1>Sign Information</h1>
             </div>
        <Row>
            <Col>
                <div className="yesterday">
                <Button class="btn btn-lg">Yesterday</Button>
                </div>
            </Col>
    
            <Col>
            <div className="today">
            <Button class="btn btn-lg">Today</Button>
            </div>
            </Col>
            <Col>
            <div className="tomorrow">
            <Button class="btn btn-lg">Tomorrow</Button>
            </div>
            </Col>
        </Row>
            <Card className="mb-3" style={{ color: "#000"}}>
                
                
            <Card.Body>
                <Card.Img src={aries_icon} id="aries" className="img-thumbnail img-fluid mx-auto d-block" alt="placeholder-horoscope-img"/>

                <Card.Title>Daily Horoscope</Card.Title>
            <div className="daily-horoscope">
                

            <Aztro></Aztro>

            </div>
            </Card.Body>
            </Card>
            

    
        </div>
    )
}

export default index
