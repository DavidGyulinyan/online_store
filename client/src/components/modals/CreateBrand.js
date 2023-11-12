import React from 'react';
import {Button, Form, FormControl, Modal, ModalBody, ModalFooter, ModalHeader} from "react-bootstrap";

const CreateBrand = ({show, onHide}) => {

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
                        <FormControl id="brand-form" placeholder={"enter the name of type"}/>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button variant={"outline-danger"} onClick={onHide}>Close</Button>
                    <Button variant={"outline-success"} onClick={onHide}>Add</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default CreateBrand;
