import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Col} from "react-bootstrap";
import DeviceItem from "./DeviceItem";
import {Context} from "../index";

const DeviceList = observer(() => {
    const {device} = useContext(Context)

    return (
        <Col className="d-flex">
            {
                device.map(device =>
                    <DeviceItem key={device.id} device={device}/>
                )}
        </Col>
    );
});

export default DeviceList;
