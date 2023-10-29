import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'

const DevicePage = () => {
    const device = {
        id: 1,
        name: "IPhone 12 pro",
        price: 1599,
        rating: 3,
        img: "ed8b5fe3-d71e-4eeb-8d3e-b6d023b416d1.jpg",
    }

    const description = [
        {id: 1, title: 'RAM', description: '5 GB'},
        {id: 2, title: 'Camera', description: '12 MP'},
        {id: 3, title: 'Processor', description: 'AMD'},
        {id: 4, title: 'Cores', description: '3'},
        {id: 5, title: 'Battery', description: '6000'},
    ]
    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{
                                background: `url(${bigStar}) no-repeat center center`,
                                width: 240,
                                height: 240,
                                backgroundSize: 'cover',
                                fontSize: 46
                            }}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column justify-content-center align-items-center"
                        style={{
                            width: 300,
                            height: 300,
                            fontSize: 32,
                            border: '5px solid lightgray'
                        }}
                    >
                        <h3>{device.price} USD</h3>
                        <Button variant={"outline-dark"}>Add to cart</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center align-items-center mt-3">
                <h1>Specifications</h1>
                {description.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title} : {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;
