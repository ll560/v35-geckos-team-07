import React from 'react';
import '../../App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aries_icon from '../../assets/aries_icon.png';
import taurus_icon from '../../assets/taurus_icon.png';
import gemeni_icon from '../../assets/gemeni_icon.png';
import cancer_icon from '../../assets/cancer_icon.png';
import leo_icon from '../../assets/leo_icon.png';
import virgo_icon from '../../assets/virgo_icon.png';
import libra_icon from '../../assets/libra_icon.png';
import scorpio_icon from '../../assets/scorpio_icon.png';
import sagittarius_icon from '../../assets/sagittarius_icon.png';
import capricorn_icon from '../../assets/capricorn_icon.png';
import aquarius_icon from '../../assets/aquarius_icon.png';
import pisces_icon from '../../assets/pisces_icon.png';

function Home() {
    return (
        <Container className="home-container">
            <Row>
                <Col className="h2-column">
                    <h2>Choose Your Zodiac Sign</h2>
                </Col>
            </Row>
            <Row className="sign-row">
                <Col className="sign-column" sm={6} lg={4}> 
                    Aries
                    March 21–April 19
                    <img src={aries_icon} alt="aries icon" />
                </Col>
                <Col className="sign-column" sm={6} lg={4}>
                    Taurus
                    April 20–May 20
                    <img src={taurus_icon} alt="taurus icon" />
                </Col> 
                <Col className="sign-column" sm={6} lg={4}>
                    Gemeni
                    May 21–June 21
                    <img src={gemeni_icon} alt="gemeni icon" />
                </Col>
                <Col className="sign-column" sm={6} lg={4}>
                    Cancer 
                    June 22–July 22
                    <img src={cancer_icon} alt="cancer icon" />
                </Col>
                <Col className="sign-column" sm={6} lg={4}>
                    Leo
                    July 23–August 22
                    <img src={leo_icon} alt="leo icon" />
                </Col>
                <Col className="sign-column" sm={6} lg={4}>
                    Virgo
                    August 23–September 22
                    <img src={virgo_icon} alt="virgo icon" />
                </Col>
                <Col className="sign-column" sm={6} lg={4}>
                    Libra
                    September 23–October 23
                    <img src={libra_icon} alt="libra icon" />
                </Col>
                <Col className="sign-column" sm={6} lg={4}>
                    Scorpio
                    October 24–November 21
                    <img src={scorpio_icon} alt="scorpio icon" />
                </Col>
                <Col className="sign-column" sm={6} lg={4}>
                    Sagittarius
                    November 22–December 21
                    <img src={sagittarius_icon} alt="sagittarius icon" />
                </Col>
                <Col className="sign-column" sm={6} lg={4}>
                    Capricorn
                    December 22–January 19
                    <img src={capricorn_icon} alt="capricorn icon" />
                </Col>
                <Col className="sign-column" sm={6} lg={4}>
                    Aquarius
                    January 20–February 18
                    <img src={aquarius_icon} alt="aquarius icon" />
                </Col>
                <Col className="sign-column" sm={6} lg={4}>
                    Pisces
                    February 19–March 20
                    <img src={pisces_icon} alt="pisces icon" />
                </Col>
            </Row>
        </Container>
    )
}

export default Home;