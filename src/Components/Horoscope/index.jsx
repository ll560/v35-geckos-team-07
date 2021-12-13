import React, { Component } from 'react'; 
import {Button, Card, Row, Col} from 'react-bootstrap'
import './index.css'
import background_horoscope from '../../assets/background_horoscope.jpg'

class Api extends Component {
    

    constructor(props){
        super(props);
        this.state = {
          
          json: {},
        }
        
    }

      
    componentDidMount () {
        
        let sign=this.props.sign ?? " " 
        console.log(sign) 
        let day = {day: 'today'};
        
        var url = new window.URL(`https://aztro.sameerkumar.website/?sign=${sign}&day=${day}`);
        Object.keys(day).forEach(function (d) {url.searchParams.set(d, day[d]); });
        Object.keys(sign).forEach(function (k) {
        url.searchParams.set(k, sign[k]);});

    
    url.toString();

        fetch(url, {
            method: 'POST'
        }).then(response => response.json())
        .then(json => { this.setState({json}); });
    
}
    

    render() {
        
        return (
            <div className="horoscope-body">
            <div>    
                <div className="sign-info">
            </div>
       <Row>   
       </Row>
           <Card className="mb-3" style={{ color: "#000"}}>   
           <Card.Body className="card-body" >
            <Card.Title id="title" >{this.props.sign ?? " "}</Card.Title>
             {/* <Card.Img  id="title" src={background_horoscope} className="img-thumbnail img-fluid mx-auto d-block" alt="placeholder-horoscope-img"></Card.Img>  */}
             {/* <Col>

      
             <div id="today">
             <Button className="btn btn-lg" id="sign-text" style={{width:"20%", height: "30px", margin: "5px"}}>Today<br/></Button>
             
             </div>
           </Col>
            */}
    <div className="daily-horoscope">
                
                  
        <div className="body-text">   
            Current Date: {this.props.data?.current_date ?? ' '} <br />
        </div>
        <div className="body-text"> 
            Compatibility: {this.props.data?.compatibility ?? ' '} <br />
        </div>
        <div className="body-text"> 
            Lucky Number: {this.props.data?.lucky_number ?? ' '} <br />
        </div>
        <div className="body-text">
            Lucky Time: {this.props.data?.lucky_time ?? ' '} <br />
        </div>
        <div className="body-text">
            Color: {this.props.data?.color ?? ' '} <br />
        </div>
        <div className="body-text">  
            Date Range: {this.props.data?.date_range ?? ' '} <br />
        </div> 
        <div className="body-text">
            Mood: {this.props.data?.mood ?? ' '} <br />
        </div>
        <div className="body-text">
            Horoscope: {this.props.data?.description ?? ' '} <br />
        </div>

            
            </div>
            </Card.Body>
            </Card>
            

    
        </div>
            
        </div>
        
            
        );
        
    }
}

export default Api;
