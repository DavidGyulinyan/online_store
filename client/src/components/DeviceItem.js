import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from "../assets/star.png"
import {useNavigate} from "react-router-dom"
import {DEVICE_ROUTE} from "../utils/constants";

const DeviceItem = ({device}) => {
    const navigate = useNavigate()
    const handleDeviceClick = () => {
        navigate(DEVICE_ROUTE + "/" + device.id)
    }

    return (
        <Col
            className="mt-3"
            onClick={handleDeviceClick}
            md={3}>
            <Card style={{width: "150px", cursor: "pointer",}} border={"light"}
            >
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between">
                    <div>Samsung...</div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image className="m-lg-1" width={20} height={20} src={star}/>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;
