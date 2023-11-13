import React, {useContext, useEffect, useState} from 'react';
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
import {createDevice, fetchBrands, fetchDevices, fetchTypes} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";

const CreateDevice = observer(({show, onHide}) => {
    const {device} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
    }, [device])

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

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = e => {
        setFile(e.target.value[0])
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', device.selectedBrand.id)
        formData.append('typeId', device.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createDevice(formData).then(data => onHide())
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
                        <DropdownToggle>{device.selectedType.name ? device.selectedType.name : "Choose type"}</DropdownToggle>
                        <DropdownMenu>
                            {
                                device.types.map(type =>
                                    <DropdownItem
                                        onClick={() => device.setSelectedType(type)}
                                        key={type.id}
                                    >
                                        {type.name}
                                    </DropdownItem>
                                )}
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown className="mt-2">
                        <DropdownToggle>{device.selectedBrand.name ? device.selectedBrand.name : "Choose brand"}</DropdownToggle>
                        <DropdownMenu>
                            {
                                device.brands.map(brand =>
                                    <DropdownItem
                                        onClick={() => device.setSelectedBrand(brand)}
                                        key={brand.id}
                                    >
                                        {brand.name}
                                    </DropdownItem>
                                )}
                        </DropdownMenu>
                    </Dropdown>
                    <FormControl
                        id="name-form"
                        className="mt-3"
                        placeholder="Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <FormControl
                        id="price-form"
                        className="mt-3"
                        placeholder="Price"
                        type="number"
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                    />
                    <FormControl
                        id="file-form"
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
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
                                    onChange={e => changeInfo('title', e.target.value, i.number)}
                                    value={i.title}
                                />
                            </Col>
                            <Col md={4}>
                                <FormControl
                                    id="description-name-form"
                                    type="text"
                                    placeholder="Enter description"
                                    onChange={e => changeInfo('description', e.target.value, i.number)}
                                    value={i.description}

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
                    onClick={addDevice}
                >
                    Add
                </Button>
            </ModalFooter>
        </Modal>
    );
});

export default CreateDevice;
