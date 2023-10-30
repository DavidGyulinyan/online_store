import React, {useContext, useState} from 'react';
import {
    Button, Col,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Form,
    FormControl,
    Modal,
    ModalHeader, Row
} from "react-bootstrap";
import {Context} from "../../index";

const CreateDevice = ({show, onHide}) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([
            ...info,
            {
                id: new Date().getTime(),
                title: "",
                description: "",
                number: Date.now()
            }
        ])
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <ModalHeader closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new device
                </Modal.Title>
            </ModalHeader>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2">
                        <DropdownToggle>Choose the type</DropdownToggle>
                        <DropdownMenu>
                            {device.types.map(type =>
                                <DropdownItem key={type.id}>
                                    {type.name}
                                </DropdownItem>
                            )}
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown className="mt-2">
                        <DropdownToggle>Choose the brand</DropdownToggle>
                        <DropdownMenu>
                            {device.brands.map(brand =>
                                <DropdownItem key={brand.id}>
                                    {brand.name}
                                </DropdownItem>
                            )}
                        </DropdownMenu>
                    </Dropdown>
                    <FormControl
                        className="mt-3"
                        placeholder="Name"
                    />
                    <FormControl
                        className="mt-3"
                        placeholder="Price"
                        type="number"
                    />
                    <FormControl
                        className="mt-3"
                        placeholder="Enter the name of device"
                        type="file"
                    />
                    <hr/>

                    <Button
                        variant="outline-dark"
                        onClick={addInfo}
                    >
                        Add
                    </Button>
                    {info.map(i =>
                        <Row key={i.id}>
                            <Col md={4}>
                                <FormControl
                                    placeholder="Enter name"
                                />
                            </Col>
                            <Col md={4}>
                                <FormControl
                                    placeholder="Enter description"
                                />
                            </Col>
                            <Col md={4}>
                                <Button variant="outline-danger">Delete</Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Close</Button>
                <Button variant={"outline-success"} onClick={onHide}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;
