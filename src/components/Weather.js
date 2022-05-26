import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Col, Row, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Prediction from './Prediction';
import coba from '../assets/coba.jpg';


function Weather({ weatherData, longitude, latitude, loc, activeButton, activePredict}) {
    const icon = weatherData.weather[0].icon
    const sumber = process.env.PUBLIC_URL + '/icons/' + icon + '.png'
    const [current, setcurrent] = useState([]);
    const [Users, fetchUsers] = useState([])
    const [prediksi, setPrediksi] = useState('Silahkan Klik Prediksi')
    const getData = async () => {
      await fetch('http://127.0.0.1:5000/api/weather_predict')
        .then((res) => res.json())
        .then((res) => {
          console.log(res)
          fetchUsers(res)
          if(res.prediction == 0){
            setPrediksi("Tidak Hujan")
          }
          else{
            setPrediksi("Hujan")
          }
          
        })
    }


    useEffect(() => {
        let tempdate = new Date().toLocaleString()
        // console.log(date);

        let date = tempdate.split(',')
        setcurrent(date[0])
        console.log(date[0]);
    }, [current])
    console.log(activeButton);

    const handlePredict = () => {
        let data = getData()
        console.log(data);
      
    }   

    const buttonPredictView = () => (
        
        <>
            <div>
                <Button onClick={handlePredict} style={{
                    width: "auto",
                    background: "#29A0B1",
                    color: 'white'
                }}>Prediksi</Button>
            </div>
        </>
    )
    const handleButton = () => {
        let data = activePredict
        console.log("data button : " + data);
        switch (data) {
            case true:
              return buttonPredictView();
      
            case false:
              return null;
      
            default:
              return null;
          }


    }

    const handlePredictView = () => {
        let data = activeButton
        console.log("data button : " + data);
        switch (data) {
            case true:
              return <Prediction prediksi = {prediksi}/>
      
            case false:
              return null;
      
            default:
              return null;
          }


    }
    return <div>
        <Container className="d-flex flex-row h-100 mt-4" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

            <Card style={{
                width: "80%",
                background: "#98D7C2",
                color: 'black'
            }}>
                <Row>
                    <Col>
                        <Row>
                            <Card.Text className='mt-2'
                                style={{
                                    fontSize: 12
                                }}>{current}</Card.Text>
                        </Row>
                        <Row>
                            <Col >
                                <div className="d-flex justify-content-end ms-5 mt-2"
                                    style={{
                                        display: "inline-block",

                                    }}>
                                    <p style={{
                                        fontSize: 50
                                    }}>{weatherData.main.temp}</p>
                                    <p style={{
                                        fontSize: 20,
                                    }}>&deg;C</p>

                                </div>
                            </Col>

                        </Row>
                    </Col>
                    <Col className='mt-3'>
                        <Row>
                            <h5>{weatherData.name}</h5>
                        </Row>
                        <Row>
                            <p>{loc}</p>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <img className="d-flex flex-row h-100" src={process.env.PUBLIC_URL + sumber} alt="logo" style={{

                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "80%"
                            }}></img>
                        </Row>
                        <Row>
                            <p>{weatherData.weather[0].description}</p>
                        </Row>

                    </Col>
                </Row>


                <Card.Body>
                    <Row>
                        <Col>
                            <Card.Text>Longitude : {longitude}</Card.Text>
                        </Col>
                        <Col>
                            <Card.Text>Latitude : {latitude} </Card.Text>
                        </Col>

                    </Row>

                    <Table striped borderless hover size="sm" >

                        <tbody>
                            {/* <tr>
                                <td>Temperature</td>
                                <td>:</td>
                                <td> {weatherData.main.temp} &deg;C</td>
                            </tr> */}

                            <tr>
                                <td>Humidity</td>
                                <td>:</td>
                                <td> {weatherData.main.humidity} %</td>
                            </tr>

                            <tr>
                                <td>Wind Direction</td>
                                <td>:</td>
                                <td> {weatherData.wind.deg} &deg;</td>
                            </tr>

                            <tr>
                                <td>Wind Speed</td>
                                <td>:</td>
                                <td> {weatherData.wind.speed} Km/H</td>
                            </tr>
                        </tbody>
                    </Table>
                    {handleButton()}
                    {handlePredictView()}
                    {/* <Button style={{
                        width: "auto",
                        background: "#29A0B1",
                        color: 'white'
                    }}>Go somewhere</Button> */}


                    
                </Card.Body>
            </Card>
        </Container>
    </div>;
}

export default Weather;

