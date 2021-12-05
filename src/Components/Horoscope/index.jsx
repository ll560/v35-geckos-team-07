import React, { Component } from 'react'; 
import {Button, Card, Row, Col} from 'react-bootstrap'
import './index.css'


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
            <div>   
                
                <div className="sign-info">
           
           
            </div>
       <Row>
           
   
           
       </Row>
           <Card className="mb-3" style={{ color: "#000"}}>
               
               
           <Card.Body>
               <Card.Img  id="aries" className="img-thumbnail img-fluid mx-auto d-block" alt="placeholder-horoscope-img"/>  
            <Card.Title id="title">Daily Horoscope </Card.Title>
            <Col>
           <div id="today">
           <Button className="btn btn-lg" id="sign-text">Sign: {this.props.sign ?? " "}  <br /></Button>
           </div>
           </Col>

    <div className="daily-horoscope">
                
                  

              Current Date: {this.props.data?.current_date ?? ' '} <br />
              Compatibility: {this.props.data?.compatibility ?? ' '} <br />
              Lucky Number: {this.props.data?.lucky_number ?? ' '} <br />
              Lucky Time: {this.props.data?.lucky_time ?? ' '} <br />
              Color: {this.props.data?.color ?? ' '} <br />
              Date Range: {this.props.data?.date_range ?? ' '} <br />
              Mood: {this.props.data?.mood ?? ' '} <br />
              Horoscope: {this.props.data?.description ?? ' '} <br />


            
            </div>
            </Card.Body>
            </Card>
            

    
        </div>
            

        
            
        );
        
    }
}

export default Api;
