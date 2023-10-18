import React from 'react';
import {Button, Card, Col, Container, Form} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/constants";
import {Link, useLocation} from "react-router-dom";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? "Authorization" : "Registration"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Email"
                    />

                    <Form.Control
                        className="mt-3"
                        placeholder="Password"
                    />
                    <Col className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ? <div>
                            No account?
                            <Link className="mx-2" to={REGISTRATION_ROUTE}>
                                Register now!
                            </Link>
                        </div>
                        :
                            <div>
                            Registered?
                                <Link className="mx-2" to={LOGIN_ROUTE}>
                                    Login now!
                                </Link>
                            </div>
                        }
                        <Button
                            variant={"outline-success"}
                        >
                            {isLogin ? "Login" : "Register"}
                        </Button>
                    </Col>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;
