import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap"
import bigStar from '../assets/bigStar.png'
import {useParams} from "react-router-dom"
import {fetchOneDevices} from "../http/deviceAPI"

const DevicePage = () => {
    const [device, setDevice] = useState({})
    const {id} = useParams()

    useEffect(() => {
        fetchOneDevices(id).then(data => setDevice(data))
    }, [id])


    return (
        <>
            {Object.keys(device).length !== 0 &&


                <Container className="mt-3">
                    <Row>
                        <Col md={4}>
                            <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}/>
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
                                        fontSize: 64
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
                        {device.info.map((info, index) =>
                            <Row key={info.id}
                                 style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                                {info.title} : {info.description}
                            </Row>
                        )}
                    </Row>
                </Container>
            }
        </>
    );
};

export default DevicePage;
