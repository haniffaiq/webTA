import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Weather from '../../components/Weather';

import { Card, Button, Container, Col, Row } from 'react-bootstrap';

function Dashboard() {

    // Current Location
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);

    // Current Location Manual
    const [lat4, setLat4] = useState(-6.867747);
    const [long4, setLong4] = useState(107.580204);
    const [data4, setData4] = useState([]);

    // Thesis Location
    const [lat2, setLat2] = useState(-6.8206751);
    const [long2, setLong2] = useState(107.6495744);
    const [data2, setData2] = useState([]);

    // Thesis Location

    const [lat3, setLat3] = useState(-6.200000);
    const [long3, setLong3] = useState(106.816666);
    const [data3, setData3] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });
            console.log("Latitude is:", lat)
            console.log("Longitude is:", long)
            await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
                .then(res => res.json())
                .then(result => {
                    setData(result)
                    console.log(result);
                });
        }


        const fetchData2 = async () => {

            console.log("Latitude 2 is:", lat2)
            console.log("Longitude 2 is:", long2)
            await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat2}&lon=${long2}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
                .then(res => res.json())
                .then(result => {
                    setData2(result)
                    console.log(result);
                });
        }


        const fetchData3 = async () => {

            console.log("Latitude 3 is:", lat3)
            console.log("Longitude 3 is:", long3)
            await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat3}&lon=${long3}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
                .then(res => res.json())
                .then(result => {
                    setData3(result)
                    console.log(result);
                });
        }

        const fetchData4 = async () => {

            console.log("Latitude 4 is:", lat4)
            console.log("Longitude 4 is:", long4)
            await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat4}&lon=${long4}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
                .then(res => res.json())
                .then(result => {
                    setData4(result)
                    console.log(result);
                });
        }

        fetchData();
        fetchData2();
        fetchData3();
        fetchData4();
    }, [lat, long])

    return (
        <div className="App" >
            <Container>
                <Row>
                    <Col>{(typeof data.main != 'undefined') ? (
                        <Weather weatherData={data2} longitude={long2} latitude={lat2} loc={"Your Thesis Data Location"} activeButton={true} activePredict={true}/>
                    ) : (
                        <div></div>
                    )}</Col>



                </Row>
                <Row>
                    <Col>{(typeof data.main != 'undefined') ? (
                        <Weather weatherData={data4} longitude={long4} latitude={lat4} loc={"Your Current Location"} activeButton={false} activePredict={false}/>
                    ) : (
                        <div></div>
                    )}</Col>
                    <Col>{(typeof data.main != 'undefined') ? (
                        <Weather weatherData={data3} longitude={long3} latitude={lat3} loc={"Your capital city Location"} activeButton={false}  activePredict={false}/>
                    ) : (
                        <div></div>
                    )}</Col>

                </Row>



            </Container>




        </div>
    );
}

export default Dashboard;
