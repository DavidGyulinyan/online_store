import React, {useContext, useState} from 'react';
import {
    Button, Col,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Form,
    FormControl,
    Modal, ModalBody, ModalFooter,
    ModalHeader, ModalTitle, Row
} from "react-bootstrap";
import {Context} from "../../index";

const CreateDevice = ({show, onHide}) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([
            ...info,
            {
                number: new Date().getTime(),
                title: "",
                description: "",
            }
        ])
    }

    const removeInfo = number => {
        setInfo(info.filter(i => i.number !== number))
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <ModalHeader closeButton>
                <ModalTitle id="contained-modal-title-vcenter">
                    Add new device
                </ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Form>
                    <Dropdown className="mt-2">
                        <DropdownToggle>Choose type</DropdownToggle>
                        <DropdownMenu>
                            {device.types.map(type =>
                                <DropdownItem key={type.id}>
                                    {type.name}
                                </DropdownItem>
                            )}
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown className="mt-2">
                        <DropdownToggle>Choose brand</DropdownToggle>
                        <DropdownMenu>
                            {device.brands.map(brand =>
                                <DropdownItem key={brand.id}>
                                    {brand.name}
                                </DropdownItem>
                            )}
                        </DropdownMenu>
                    </Dropdown>
                    <FormControl
                        id="name-form"
                        className="mt-3"
                        placeholder="Name"
                    />
                    <FormControl
                        id="price-form"
                        className="mt-3"
                        placeholder="Price"
                        type="number"
                    />
                    <FormControl
                        id="3"
                        className="mt-3"
                        type="file"
                    />
                    <hr/>

                    <Button
                        variant="outline-dark"
                        onClick={addInfo}
                    >
                        Add new properties
                    </Button>
                    {info.map(i =>
                        <Row className="mt-4" key={i.number}>
                            <Col md={4}>
                                <FormControl
                                    id="properties-name-form"
                                    placeholder="Enter name of properties"
                                />
                            </Col>
                            <Col md={4}>
                                <FormControl
                                    id="description-name-form"
                                    type="text"
                                    placeholder="Enter description"
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    variant="outline-danger"
                                    onClick={() => removeInfo(i.number)}
                                >
                                    Delete
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button
                    variant="outline-danger"
                    onClick={onHide}
                >
                    Close
                </Button>
                <Button
                    variant={"outline-success"}
                    onClick={onHide}
                >
                    Add
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateDevice;
