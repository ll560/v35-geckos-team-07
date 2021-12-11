import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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



   

function Home({setCurrent, components, setHoroscopeCallback, setSignCallback}) {    
    const [currentHoroscopeData, setCurrentHoroscopeData] = useState();
    const [sign, setSign] = useState('');
    
  

    useEffect( () => {
        
        if (sign !=='') {
             fetch(`https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${sign}&day=today`, {
                "method": "POST",
                "headers": {
                    "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
                    "x-rapidapi-key": "c69ac320d9msh4f92145a07ef9a5p11a204jsnffcc7b05808d"
                }
            })


          .then(response => {
                console.log("This is the sign from Home component: " + sign);
                setSign(sign);
                setSignCallback(sign);
                return response.json();
                  
            })
            .then(data => {
                console.log('data', data);
                setCurrentHoroscopeData(data);
                setHoroscopeCallback(data);
                
            })
            .catch(err => {
                console.error(err);
            }); 
        }
    }, [sign] )   

    
    const handleClick = (e) => {
    setSign(e.target.id); 
        console.log(e.target.id);
        
        //updatePage()
        return sign;
    
    }

  let navigate = useNavigate(); 
  
   function navigateHoroscopePage() {
    if (sign !==""){
    navigate('/horoscope')
    console.log("Selected sign and navigated")
       
    } 
   }


    



    return (

        <Container className="home-container" >
           
            <Row>
                <Col className="h2-column">
                    <h2>Choose Your Zodiac Sign: {sign} </h2>
                    
                </Col>
            </Row>
            
            <Row className="sign-row">
                <Col className="sign-column" sm={6} lg={4}> 
                    Aries
                    March 21–April 19
                    
                    <button onClick={navigateHoroscopePage()} type="button" >
                      <img onClick={(e) => handleClick(e)} id="Aries" src={aries_icon} alt="aries icon" /> 
                    </button>
                    
                </Col>
                <Col className="sign-column" sm={6} lg={4}>
                    Taurus
                    April 20–May 20
                    
                        <button onClick={navigateHoroscopePage()} type="button" ><img onClick={(e) => handleClick(e)} id="Taurus"  src={taurus_icon} alt="taurus icon" /></button>
                
                </Col> 
                <Col className="sign-column" sm={6} lg={4}>
                    Gemini
                    May 21–June 21
                    <button onClick={navigateHoroscopePage()} type="button" ><img onClick={(e) => handleClick(e)} id="Gemini" src={gemeni_icon} alt="gemini icon" /></button>
                </Col>
                <Col className="sign-column" sm={6} lg={4}>
                    Cancer 
                    June 22–July 22
                    <button onClick={navigateHoroscopePage()} type="button" ><img onClick={(e) => handleClick(e)} id="Cancer" src={cancer_icon} alt="cancer icon" /></button>
                </Col>
                <Col className="sign-column" sm={6} lg={4}>
                    Leo
                    July 23–August 22
                    <button onClick={navigateHoroscopePage()} type="button"><img onClick={(e) => handleClick(e)} id="Leo" src={leo_icon} alt="leo icon" /></button>
                </Col>
                <Col className="sign-column" sm={6} lg={4}>
                    Virgo
                    August 23–September 22
                    <button onClick={navigateHoroscopePage()} type="button"><img onClick={(e) => handleClick(e)} id="Virgo" src={virgo_icon} alt="virgo icon" /></button>
                </Col>
                <Col className="sign-column" sm={6} lg={4}>
                    Libra
                    September 23–October 23
                    <button onClick={navigateHoroscopePage()} type="button"><img onClick={(e) => handleClick(e)} id="Libra" src={libra_icon} alt="libra icon" /></button>
                </Col>
                <Col className="sign-column" sm={6} lg={4}>
                    Scorpio
                    October 24–November 21
                    <button onClick={navigateHoroscopePage()} type="button"><img onClick={(e) => handleClick(e)} id="Scorpio" src={scorpio_icon} alt="scorpio icon" /></button>
                </Col>
                <Col className="sign-column" sm={6} lg={4}>
                    Sagittarius
                    November 22–December 21
                    <button onClick={navigateHoroscopePage()} type="button"><img onClick={(e) => handleClick(e)} id="Sagittarius"src={sagittarius_icon} alt="sagittarius icon" /></button>
                </Col>
                <Col className="sign-column" sm={6} lg={4}>
                    Capricorn
                    December 22–January 19
                    <button onClick={navigateHoroscopePage()} type="button"><img onClick={(e) => handleClick(e)} id="Capricorn" src={capricorn_icon} alt="capricorn icon" /></button>
                </Col>
                <Col className="sign-column" sm={6} lg={4}>
                    Aquarius
                    January 20–February 18
                    <button onClick={navigateHoroscopePage()} type="button"><img onClick={(e) => handleClick(e)} id="Aquarius" src={aquarius_icon} alt="aquarius icon" /></button>
                </Col>
                <Col className="sign-column" sm={6} lg={4}>
                    Pisces
                    February 19–March 20
                    <button onClick={navigateHoroscopePage()} type="button"><img onClick={(e) => handleClick(e)} id="Pisces"src={pisces_icon} alt="pisces icon" /></button>
                </Col>
            </Row>
        
        </Container>
    )


}
export default Home;
