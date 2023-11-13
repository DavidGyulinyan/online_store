import React, {useState} from 'react';
import {Button, Form, FormControl, Modal, ModalFooter, ModalHeader} from "react-bootstrap";
import {createType} from "../../http/deviceAPI";

const CreateType = ({show, onHide}) => {
    const [value, setValue] = useState('')
    const addType = () => {
        createType({name: value}).then(data => {
            setValue('')
            onHide()
        })
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
                    Add new type
                </Modal.Title>
            </ModalHeader>
            <Modal.Body>
                <Form>
                    <FormControl
                        id="type-form"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"enter the name of type"}
                    />
                </Form>
            </Modal.Body>
            <ModalFooter>
                <Button variant={"outline-danger"} onClick={onHide}>Close</Button>
                <Button variant={"outline-success"} onClick={addType}>Add</Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateType;
