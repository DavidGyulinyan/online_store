import React, {useState} from 'react';
import {Button, Form, FormControl, Modal, ModalBody, ModalFooter, ModalHeader} from "react-bootstrap";
import {createBrand, createType} from "../../http/deviceAPI";

const CreateBrand = ({show, onHide}) => {

    const [value, setValue] = useState('')
    const addBrand = () => {
        createBrand({name: value}).then(data => {
            setValue('')
            onHide()
        })
    }

    return (
        <div>
            <Modal
                show={show}
                onHide={onHide}
                size="lg"
                centered
            >
                <ModalHeader closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add new brand
                    </Modal.Title>
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormControl
                            id="brand-form"
                            placeholder={"enter the name of type"}
                            onChange={e => setValue(e.target.value)}
                        />
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button variant={"outline-danger"} onClick={onHide}>Close</Button>
                    <Button variant={"outline-success"} onClick={addBrand}>Add</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default CreateBrand;
