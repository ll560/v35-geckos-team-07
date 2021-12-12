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

setTimeout(function(){
    navigateHoroscopePage();
}, 5500);
    



    return (

        <Container className="home-container" >
           
            <Row>
                <Col className="h2-column">
                    <h2 className="home-heading">Choose Your Zodiac Sign!</h2>
                    
                </Col>
            </Row>
            
            <Row className="sign-row">
                <Col className="sign-column" sm={6} lg={4}> 
                    <div className="icon-container" >
                        <button className="icon-button" onClick={navigateHoroscopePage()} type="button" >
                            <img className = "icon" onClick={(e) => handleClick(e)} id="Aries" src={aries_icon} alt="aries icon" /> 
                        </button>
                    </div>
                    <div className="sign-title">
                        <p className="sign-name">Aries</p> 
                        <p className="sign-date">(March 21–April 20)</p>
                    </div>

                </Col>
                <Col className="sign-column" sm={6} lg={4}>
                    <div className="icon-container">
                        <button className="icon-button" onClick={navigateHoroscopePage()} type="button" >
                            <img className = "icon" onClick={(e) => handleClick(e)} id="Taurus"  src={taurus_icon} alt="taurus icon" />
                        </button>
                    </div>
                    <div className="sign-title">
                        <p className="sign-name">Taurus</p> 
                        <p className="sign-date">(April 21–May 20)</p>
                    </div>
                </Col> 
                <Col className="sign-column" sm={6} lg={4}>
                    <div className="icon-container">
                        <button className="icon-button" onClick={navigateHoroscopePage()} type="button" >
                            <img className = "icon" onClick={(e) => handleClick(e)} id="gemini" src={gemeni_icon} alt="gemeni icon" />
                        </button>
                    </div>
                    <div className="sign-title">
                        <p className="sign-name">Gemini</p> 
                        <p className="sign-date">(May 21–June 21)</p>
                    </div>
                </Col>
                <Col className="sign-column" sm={6} lg={4}>
                    <div className="icon-container">
                        <button className="icon-button" onClick={navigateHoroscopePage()} type="button" >
                            <img className = "icon" onClick={(e) => handleClick(e)} id="Cancer" src={cancer_icon} alt="cancer icon" />
                        </button>
                    </div>
                    <div className="sign-title">
                        <p className="sign-name">Cancer</p> 
                        <p className="sign-date">(June 22–July 22)</p>
                    </div>
                </Col>
                <Col className="sign-column" sm={6} lg={4}>
                    <div className="icon-container">
                        <button className="icon-button" onClick={navigateHoroscopePage()} type="button">
                            <img className = "icon" onClick={(e) => handleClick(e)} id="Leo" src={leo_icon} alt="leo icon" />
                        </button>
                    </div>
                    <div className="sign-title">
                        <p className="sign-name">Leo</p> 
                        <p className="sign-date">(July 23–August 22)</p>
                    </div>
                </Col>
                <Col className="sign-column" sm={6} lg={4}>
                    <div className="icon-container">
                        <button className="icon-button" onClick={navigateHoroscopePage()} type="button">
                            <img className = "icon" onClick={(e) => handleClick(e)} id="Virgo" src={virgo_icon} alt="virgo icon" />
                        </button>
                    </div>
                    <div className="sign-title">
                        <p className="sign-name">Virgo</p> 
                        <p className="sign-date">(August 23–September 22)</p>
                    </div>
                </Col>
                <Col className="sign-column" sm={6} lg={4}>
                    <div className="icon-container">
                        <button className="icon-button" onClick={navigateHoroscopePage()} type="button">
                            <img className = "icon" onClick={(e) => handleClick(e)} id="Libra" src={libra_icon} alt="libra icon" />
                        </button>
                    </div>
                    <div className="sign-title">
                        <p className="sign-name">Libra</p> 
                        <p className="sign-date">(September 23–October 23)</p>
                    </div>
                </Col>
                <Col className="sign-column" sm={6} lg={4}>
                    <div className="icon-container">
                        <button className="icon-button" onClick={navigateHoroscopePage()} type="button">
                            <img className = "icon" onClick={(e) => handleClick(e)} id="Scorpio" src={scorpio_icon} alt="scorpio icon" />
                        </button>
                    </div>
                    <div className="sign-title">
                        <p className="sign-name">Scorpio</p> 
                        <p className="sign-date">(October 23–November 22)</p>
                    </div>
                </Col>
                <Col className="sign-column" sm={6} lg={4}>
                    <div className="icon-container">
                        <button className="icon-button" onClick={navigateHoroscopePage()} type="button">
                            <img className = "icon" onClick={(e) => handleClick(e)} id="Sagittarius"src={sagittarius_icon} alt="sagittarius icon" />
                        </button>
                    </div>
                    <div className="sign-title">
                        <p className="sign-name">Sagittarius</p> 
                        <p className="sign-date">(November 23–December 21)</p>
                    </div>
                </Col>
                <Col className="sign-column" sm={6} lg={4}>
                    <div className="icon-container">
                        <button className="icon-button" onClick={navigateHoroscopePage()} type="button">
                            <img className = "icon" onClick={(e) => handleClick(e)} id="Capricorn" src={capricorn_icon} alt="capricorn icon" />
                        </button>
                    </div>
                    <div className="sign-title">
                        <p className="sign-name">Capricorn</p> 
                        <p className="sign-date">(December 22–January 19)</p>
                    </div>
                </Col>
                <Col className="sign-column" sm={6} lg={4}>
                    <div className="icon-container">
                        <button className="icon-button" onClick={navigateHoroscopePage()} type="button">
                            <img className = "icon" onClick={(e) => handleClick(e)} id="Aquarius" src={aquarius_icon} alt="aquarius icon" />
                        </button>
                    </div>
                    <div className="sign-title">
                        <p className="sign-name">Aquarius</p> 
                        <p className="sign-date">(January 20–February 18)</p>
                    </div>
                </Col>
                <Col className="sign-column" sm={6} lg={4}>
                    <div className="icon-container">
                        <button className="icon-button" onClick={navigateHoroscopePage()} type="button">
                            <img className = "icon" onClick={(e) => handleClick(e)} id="Pisces"src={pisces_icon} alt="pisces icon" />
                        </button>
                    </div>
                    <div className="sign-title">
                        <p className="sign-name"> Pisces</p> 
                        <p className="sign-date">(February 19–March 20)</p>
                    </div>
                </Col>
            </Row>
        
        </Container>
    )


}
export default Home;
