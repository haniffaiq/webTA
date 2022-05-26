
import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Col, Row, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import coba from '../assets/coba.jpg';


function Prediction({prediksi}) {

    return <div>
        <Container className="d-flex flex-row h-100 mt-4" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Card style={{
                width: "80%",
                background: "#98D7C2",
                color: 'black'
            }}>
                <Card.Header>Prediksi Cuaca</Card.Header>
                <Card.Title>Kemungkinan Esok Hari akan</Card.Title>
                <Card.Text>{prediksi}</Card.Text>
            </Card>
        </Container>
    </div>;
}

export default Prediction;
