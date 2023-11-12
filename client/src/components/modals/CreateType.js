import React from 'react';
import {Button, Form, FormControl, Modal, ModalFooter, ModalHeader} from "react-bootstrap";

const CreateType = ({show, onHide}) => {


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
                        onChange={e => e.target.value}

                        placeholder={"enter the name of type"}
                    />
                </Form>
            </Modal.Body>
            <ModalFooter>
                <Button variant={"outline-danger"} onClick={onHide}>Close</Button>
                <Button variant={"outline-success"} onClick={onHide}>Add</Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateType;
